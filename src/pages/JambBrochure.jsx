import React, { useState, useEffect, useCallback, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Search, BookOpen, RefreshCw, ChevronRight, GraduationCap, Building2, Loader2, Download } from "lucide-react";
import jambLogo from "../assets/jamb.png";
import "../styles/Components.css";
import { cacheManager } from "../utils/cacheManager";

import { axiosInstance } from "../services/services";
import { logger } from "../utils/logger";

const JambBrochure = () => {
  const [allInstitutions, setAllInstitutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [backgroundLoading, setBackgroundLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPagesFetched, setTotalPagesFetched] = useState(0);
  
  const loadingRef = useRef(false);
  const abortControllerRef = useRef(null);

  const fetchPage = async (page) => {
    const res = await axiosInstance.post('/ibass/institutions', { page });
    const result = res.data;
    const pageData = result.data?.data || result.data || [];
    
    return Array.isArray(pageData) ? pageData.map(inst => ({
      name: inst.school_name || inst.title || inst.name,
      id: inst.id || inst.institution_id
    })).filter(inst => inst.name && inst.id) : [];
  };

  const startBackgroundLoading = useCallback(async (startPage) => {
    if (loadingRef.current) return;
    loadingRef.current = true;
    setBackgroundLoading(true);

    try {
      let page = startPage;
      const MAX_PAGES = 75; // Approximately 75 pages based on user info

      while (page <= MAX_PAGES) {
        try {
          const newData = await fetchPage(page);
          if (newData.length === 0) break;

          setAllInstitutions(prev => {
            const combined = [...prev, ...newData];
            // Remove duplicates just in case
            const unique = combined.filter((inst, index, self) =>
              index === self.findIndex((t) => t.id === inst.id)
            );
            cacheManager.set("jamb_institutions_all", unique);
            return unique;
          });
          
          setTotalPagesFetched(page);
          page++;
          
          // Small delay to avoid hammering the API too hard
          await new Promise(resolve => setTimeout(resolve, 500));
        } catch (err) {
          logger.error(`Error loading page ${page}`, err);
          // Wait a bit longer on error before retrying
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      }
    } finally {
      loadingRef.current = false;
      setBackgroundLoading(false);
    }
  }, []);

  // Initial load
  useEffect(() => {
    const init = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const cached = cacheManager.get("jamb_institutions_all");
        if (cached && cached.length > 0) {
          setAllInstitutions(cached);
          setLoading(false);
          // Still trigger background load to refresh/ensure all data
          startBackgroundLoading(Math.ceil(cached.length / 10) + 1);
          return;
        }

        // Load first 2 pages immediately for fast initial view
        const page1 = await fetchPage(1);
        const page2 = await fetchPage(2);
        const initialData = [...page1, ...page2];
        
        setAllInstitutions(initialData);
        setTotalPagesFetched(2);
        setLoading(false);
        
        // Start loading the rest in background
        startBackgroundLoading(3);
      } catch (err) {
        logger.error("Initial brochure load error", err);
        setError('Failed to connect to JAMB servers. Please check your internet.');
        setLoading(false);
      }
    };

    init();
    
    return () => {
      if (abortControllerRef.current) abortControllerRef.current.abort();
    };
  }, [startBackgroundLoading]);

  // Local filtering logic
  const filteredInstitutions = allInstitutions.filter(inst => 
    inst.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const ITEMS_PER_PAGE = 15;
  const totalPages = Math.ceil(filteredInstitutions.length / ITEMS_PER_PAGE);
  const paginatedResults = filteredInstitutions.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    const maxVisiblePages = 10; // Show more numbers as requested
    
    let startPage = Math.max(1, currentPage - 5);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    return (
      <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
        <button
          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          style={{ padding: '10px 16px', borderRadius: '10px', border: '1px solid var(--border-color)', background: 'var(--card-bg)', color: currentPage === 1 ? 'var(--text-muted)' : 'var(--text-main)', cursor: currentPage === 1 ? 'not-allowed' : 'pointer', fontWeight: 600 }}
        >
          Previous
        </button>

        {startPage > 1 && (
          <>
            <button onClick={() => handlePageChange(1)} style={{ padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--border-color)', background: 'var(--card-bg)', color: 'var(--text-main)', cursor: 'pointer' }}>1</button>
            {startPage > 2 && <span style={{ color: 'var(--text-muted)' }}>...</span>}
          </>
        )}

        {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map(page => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            style={{ 
              padding: '10px 14px', 
              borderRadius: '10px', 
              border: 'none', 
              background: currentPage === page ? 'var(--accent-main)' : 'var(--card-bg)', 
              color: currentPage === page ? '#ffffff' : 'var(--text-main)', 
              cursor: 'pointer',
              fontWeight: 700,
              boxShadow: currentPage === page ? '0 4px 6px -1px rgba(0,0,0,0.1)' : 'none',
              border: currentPage === page ? 'none' : '1px solid var(--border-color)'
            }}
          >
            {page}
          </button>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span style={{ color: 'var(--text-muted)' }}>...</span>}
            <button onClick={() => handlePageChange(totalPages)} style={{ padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--border-color)', background: 'var(--card-bg)', color: 'var(--text-main)', cursor: 'pointer' }}>{totalPages}</button>
          </>
        )}

        <button
          onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          style={{ padding: '10px 16px', borderRadius: '10px', border: '1px solid var(--border-color)', background: 'var(--card-bg)', color: currentPage === totalPages ? 'var(--text-muted)' : 'var(--text-main)', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', fontWeight: 600 }}
        >
          Next
        </button>
      </div>
    );
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page of results when searching
  };

  const handleRefresh = () => {
    setSearchTerm("");
    setCurrentPage(1);
  };

  return (
    <div className="jamb-brochure-page">
      <Helmet>
        <title>JAMB Brochure - Institution Courses & Requirements 2026</title>
        <meta name="description" content="Browse JAMB brochure by institution. Find courses, O'Level requirements, and UTME subject combinations for Nigerian universities, polytechnics, and colleges." />
        <link rel="canonical" href="https://examnews.netlify.app/jamb-brochure" />
      </Helmet>

      <section style={{background: 'var(--accent-main)', color: '#ffffff', padding: '48px 20px'}}>
        <div className="container">
          <div className="breadcrumb" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
            <Link to="/" style={{color: 'inherit'}}>Home</Link>
            <span className="breadcrumb-separator" style={{color: 'inherit'}}>/</span>
            <Link to="/jamb" style={{color: 'inherit'}}>JAMB</Link>
            <span className="breadcrumb-separator" style={{color: 'inherit'}}>/</span>
            <span style={{color: '#ffffff', fontWeight: 600}}>Brochure</span>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap'}}>
            <div style={{background: '#ffffff', padding: '12px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'}}>
              <img src={jambLogo} alt="JAMB" style={{height: '70px', width: 'auto'}} />
            </div>
            <div>
              <h1 style={{color: '#ffffff', fontSize: '2.5rem', fontWeight: 800, marginBottom: '8px', letterSpacing: '-0.5px'}}>JAMB Brochure</h1>
              <p style={{fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 500}}>Institution Courses, Requirements & Subject Combinations</p>
            </div>
          </div>
        </div>
      </section>

      <div className="page-container" style={{padding: '40px 20px'}}>
        <div className="two-column-layout" style={{display: 'grid', gridTemplateColumns: '1fr 320px', gap: '32px'}}>
          <main className="content-area">
            <div style={{background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '24px', marginBottom: '32px', boxShadow: 'var(--shadow-sm)'}}>
              <div style={{display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap'}}>
                <div style={{flex: 1, minWidth: '300px'}}>
                  <label style={{display: 'block', marginBottom: '8px', fontWeight: 600, color: 'var(--text-main)', fontSize: '0.875rem'}}>Search Institutions</label>
                  <div style={{position: 'relative'}}>
                    <Search size={18} style={{position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)'}} />
                    <input
                      type="text"
                      placeholder="Type institution name to search..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                      style={{
                        width: '100%',
                        padding: '12px 12px 12px 42px',
                        background: 'var(--bg-main)',
                        color: 'var(--text-main)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '10px',
                        outline: 'none',
                        transition: 'all 0.2s'
                      }}
                    />
                  </div>
                </div>

                <div style={{display: 'flex', alignItems: 'flex-end', height: '64px'}}>
                  <button
                    onClick={handleRefresh}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      padding: '12px 24px',
                      background: 'rgba(22, 163, 74, 0.1)',
                      border: '1px solid var(--accent-main)',
                      borderRadius: '10px',
                      color: 'var(--accent-main)',
                      cursor: 'pointer',
                      fontWeight: 700,
                      transition: 'all 0.2s'
                    }}
                  >
                    <RefreshCw size={18} /> Refresh Search
                  </button>
                </div>

                {backgroundLoading && (
                  <div style={{display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-main)', padding: '8px 16px', background: 'rgba(22, 163, 74, 0.05)', borderRadius: '20px'}}>
                    <Loader2 size={14} className="loader-spin" />
                    <span style={{fontSize: '0.75rem', fontWeight: 700}}>Updating Database...</span>
                  </div>
                )}
              </div>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px'}}>
              <h2 style={{fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.3px'}}>List of institutions</h2>
              {!loading && filteredInstitutions.length > 0 && (
                <span style={{background: 'var(--accent-main)', color: '#ffffff', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700}}>
                  {filteredInstitutions.length} Results
                </span>
              )}
            </div>
            
            {loading && allInstitutions.length === 0 ? (
              <div style={{textAlign: 'center', padding: '80px 0', background: 'var(--card-bg)', borderRadius: '16px', border: '1px solid var(--border-color)'}}>
                <Loader2 size={50} className="loader-spin" style={{color: 'var(--accent-main)', margin: '0 auto'}} />
                <p style={{marginTop: '24px', color: 'var(--text-main)', fontWeight: 600, fontSize: '1.125rem'}}>Fetching Data...</p>
                <p style={{marginTop: '8px', color: 'var(--text-muted)', fontSize: '0.9375rem'}}>Accessing official JAMB IBASS servers</p>
              </div>
            ) : error ? (
              <div style={{textAlign: 'center', padding: '60px 24px', background: 'rgba(239, 68, 68, 0.05)', borderRadius: '16px', border: '1px solid rgba(239, 68, 68, 0.1)'}}>
                <div style={{background: 'rgba(239, 68, 68, 0.1)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px'}}>
                  <RefreshCw size={32} style={{color: '#ef4444'}} />
                </div>
                <h3 style={{color: '#ef4444', fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px'}}>Connection Error</h3>
                <p style={{color: 'var(--text-muted)', marginBottom: '24px', maxWidth: '400px', margin: '0 auto 24px'}}>{error}</p>
                <button
                  onClick={handleRefresh}
                  style={{
                    padding: '12px 32px',
                    background: 'var(--accent-main)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontWeight: 700,
                    fontSize: '1rem'
                  }}
                >
                  Reconnect Now
                </button>
              </div>
            ) : filteredInstitutions.length === 0 ? (
              <div style={{textAlign: 'center', padding: '80px 24px', background: 'var(--card-bg)', borderRadius: '16px', border: '1px solid var(--border-color)'}}>
                <Building2 size={64} style={{color: 'var(--text-muted)', marginBottom: '20px', opacity: 0.3}} />
                <h3 style={{fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px'}}>No Institutions Found</h3>
                <p style={{color: 'var(--text-muted)'}}>Try adjusting your search terms.</p>
              </div>
            ) : (
              <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                {paginatedResults.map((institution, index) => (
                  <Link
                    key={`${institution.id}-${index}`}
                    to={`/brochure-courses?id=${institution.id}&school=${encodeURIComponent(institution.name)}`}
                    className="institution-item"
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '20px 24px',
                      background: 'var(--card-bg)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '16px',
                      textDecoration: 'none',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      animation: `fadeInUp 0.5s ease ${Math.min(index * 0.05, 1)}s both`
                    }}
                  >
                    <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                      <div style={{width: '44px', height: '44px', background: 'var(--bg-main)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-main)', flexShrink: 0}}>
                        <Building2 size={24} />
                      </div>
                      <h3 style={{fontSize: '1.0625rem', fontWeight: 700, color: 'var(--text-main)', lineHeight: '1.4'}}>{institution.name}</h3>
                    </div>
                    <div style={{ color: '#ffffff', background: '#25A249', padding: '8px 16px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                      <span style={{fontSize: '0.8125rem', fontWeight: 600}}>View Courses</span>
                      <ChevronRight size={16} />
                    </div>
                  </Link>
                ))}

                {renderPagination()}
              </div>
            )}
          </main>

          <aside className="sidebar">
            <div className="sidebar-card" style={{background: 'rgba(22, 163, 74, 0.05)', borderColor: 'var(--accent-main)', borderRadius: '20px'}}>
              <h3 style={{color: 'var(--accent-main)', fontWeight: 800}}>
                <BookOpen size={22} /> JAMB Brochure
              </h3>
              <p style={{fontSize: '0.9375rem', color: 'var(--text-main)', lineHeight: '1.6', marginBottom: '16px'}}>
                The official JAMB brochure outlines courses, O'Level requirements, and UTME subject combinations for all Nigerian institutions.
              </p>
              <div style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', background: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--border-color)'}}>
                <GraduationCap size={20} style={{color: 'var(--accent-main)'}} />
                <span style={{fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text-main)'}}>2026/2027 Academic Session</span>
              </div>
            </div>

            <div className="sidebar-card" style={{borderRadius: '20px'}}>
              <h3 style={{fontWeight: 800}}>Important Guides</h3>
              <div className="sidebar-links">
                <Link to="/jamb-registration" className="sidebar-link-item">
                  <span>How to Register</span>
                  <ChevronRight size={16} />
                </Link>
                <Link to="/cut-off-marks" className="sidebar-link-item">
                  <span>University Cut-offs</span>
                  <ChevronRight size={16} />
                </Link>
                <Link to="/jamb-syllabus" className="sidebar-link-item">
                  <span>Official Syllabus</span>
                  <ChevronRight size={16} />
                </Link>
                <Link to="/jamb-centers" className="sidebar-link-item">
                  <span>CBT Centers List</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
            
            <div className="ad-placeholder" style={{height: '300px', borderRadius: '20px'}}>Advertisement</div>
          </aside>
        </div>
      </div>

      <style>{`
        .loader-spin { animation: spin 1s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        
        .institution-item:hover {
          background: var(--bg-main) !important;
          border-color: var(--accent-main) !important;
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        
        .sidebar-link-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          background: var(--bg-main);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          color: var(--text-main);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9375rem;
          transition: all 0.3s ease;
        }
        
        .sidebar-link-item:hover {
          background: var(--accent-main);
          color: #ffffff;
          border-color: var(--accent-main);
          transform: translateX(6px);
        }

        @media (max-width: 968px) {
          .two-column-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default JambBrochure;
