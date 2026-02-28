import React, { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Search, BookOpen, RefreshCw, ChevronRight, GraduationCap, Building2, Loader2 } from "lucide-react";
import jambLogo from "../assets/jamb.png";
import "../styles/Components.css";

const JambBrochure = () => {
  const [institutions, setInstitutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [institutionType, setInstitutionType] = useState(""); // Default to ALL
  const [institutionSubType, setInstitutionSubType] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [loadingSub, setLoadingSub] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const mainCategories = [
    { id: "", title: "ALL INSTITUTIONS" },
    { id: "4", title: "DEGREE AWARDING INSTITUTIONS" },
    { id: "1", title: "NCE" },
    { id: "2", title: "ND" }
  ];

  // Fetch Sub-Categories based on Main Category
  const fetchSubCategories = useCallback(async (mainId) => {
    if (!mainId) {
      setSubCategories([]);
      return;
    }
    setLoadingSub(true);
    try {
      const proxyUrl = 'https://corsproxy.io/?';
      const apiUrl = encodeURIComponent('https://ibass-api.jamb.gov.ng/api/inst-category');
      
      const res = await fetch(proxyUrl + apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ inst_type_id: mainId })
      });
      
      if (res.ok) {
        const result = await res.json();
        setSubCategories(result.data || []);
      }
    } catch (err) {
      console.error("Error fetching sub-categories:", err);
    } finally {
      setLoadingSub(false);
    }
  }, []);

  // Initial fetch of sub-categories
  useEffect(() => {
    fetchSubCategories(institutionType);
  }, [institutionType, fetchSubCategories]);

  const fetchInstitutions = useCallback(async (page = 1, search = "", typeId = "", subId = "") => {
    setLoading(true);
    setError(null);
    
    try {
      const proxyUrl = 'https://corsproxy.io/?';
      const apiUrl = encodeURIComponent('https://ibass-api.jamb.gov.ng/api/ibass/institutions');
      
      // Determine Payload based on "Terminal Method"
      const payload = { page };
      
      if (search.trim()) {
        // If searching, only send name and page (Terminal Method)
        // This searches across ALL categories
        payload.name = search.trim();
      } else {
        // Otherwise use the filters if they are set
        if (typeId) payload.category = typeId;
        if (subId) payload.type = subId;
      }
      
      const apiRes = await fetch(proxyUrl + apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (apiRes.ok) {
        const result = await apiRes.json();
        const pageData = result.data?.data || result.data || [];
        
        if (Array.isArray(pageData)) {
          const formatted = pageData.map(inst => ({
            name: inst.school_name || inst.title || inst.name,
            id: inst.id || inst.institution_id
          })).filter(inst => inst.name && inst.id);
          
          setInstitutions(formatted);
          setHasMore(pageData.length >= 10);
        } else {
          setInstitutions([]);
          setHasMore(false);
        }
      } else {
        throw new Error(`API responded with ${apiRes.status}`);
      }
    } catch (err) {
      console.error("Error fetching institutions:", err);
      setError('Failed to connect to JAMB servers. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial load and filter updates
  useEffect(() => {
    // Only auto-trigger if not currently searching (unless search is empty)
    if (!searchTerm.trim()) {
      setCurrentPage(1);
      fetchInstitutions(1, "", institutionType, institutionSubType);
    }
  }, [institutionType, institutionSubType, fetchInstitutions]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    fetchInstitutions(newPage, searchTerm, institutionType, institutionSubType);
  };

  const handleSearchClick = () => {
    setCurrentPage(1);
    fetchInstitutions(1, searchTerm, institutionType, institutionSubType);
  };

  const handleRefresh = () => {
    setSearchTerm("");
    setInstitutionType("");
    setInstitutionSubType("");
    setCurrentPage(1);
    fetchInstitutions(1, "", "", "");
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
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px'}}>
                <div>
                  <label style={{display: 'block', marginBottom: '8px', fontWeight: 600, color: 'var(--text-main)', fontSize: '0.875rem'}}>Institution</label>
                  <select 
                    value={institutionType}
                    onChange={(e) => {
                        setInstitutionType(e.target.value);
                        setInstitutionSubType("");
                        setSearchTerm(""); // Clear search when switching category
                    }}
                    style={{width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid var(--border-color)', background: 'var(--bg-main)', color: 'var(--text-main)', outline: 'none', transition: 'all 0.2s'}}
                  >
                    {mainCategories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{display: 'block', marginBottom: '8px', fontWeight: 600, color: 'var(--text-main)', fontSize: '0.875rem'}}>Filter by Category</label>
                  <select 
                    value={institutionSubType}
                    onChange={(e) => setInstitutionSubType(e.target.value)}
                    disabled={loadingSub || !institutionType}
                    style={{width: '100%', padding: '12px', borderRadius: '10px', border: '1px solid var(--border-color)', background: 'var(--bg-main)', color: 'var(--text-main)', outline: 'none', transition: 'all 0.2s', cursor: (loadingSub || !institutionType) ? 'not-allowed' : 'pointer'}}
                  >
                    <option value="">{institutionType ? "All Sub-categories" : "Select institution type first"}</option>
                    {subCategories.map(sub => (
                        <option key={sub.id} value={sub.id}>{sub.title}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label style={{display: 'block', marginBottom: '8px', fontWeight: 600, color: 'var(--text-main)', fontSize: '0.875rem'}}>Search</label>
                  <div style={{display: 'flex', gap: '8px'}}>
                    <div style={{position: 'relative', flex: 1}}>
                      <Search size={18} style={{position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)'}} />
                      <input
                        type="text"
                        placeholder="Search institution name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') handleSearchClick();
                        }}
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
                    <button
                      onClick={handleSearchClick}
                      style={{
                        padding: '12px 20px',
                        background: 'var(--accent-main)',
                        border: 'none',
                        borderRadius: '10px',
                        color: '#ffffff',
                        cursor: 'pointer',
                        fontWeight: 700,
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Search size={18} />
                    </button>
                  </div>
                </div>

                <div style={{display: 'flex', alignItems: 'flex-end'}}>
                  <button
                    onClick={handleRefresh}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      padding: '12px',
                      background: 'rgba(22, 163, 74, 0.1)',
                      border: '1px solid var(--accent-main)',
                      borderRadius: '10px',
                      color: 'var(--accent-main)',
                      cursor: 'pointer',
                      fontWeight: 700,
                      transition: 'all 0.2s'
                    }}
                  >
                    <RefreshCw size={18} /> Reset
                  </button>
                </div>
              </div>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px'}}>
              <h2 style={{fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '-0.3px'}}>List of institutions</h2>
              {!loading && institutions.length > 0 && (
                <span style={{background: 'var(--accent-main)', color: '#ffffff', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700}}>
                  {institutions.length} Results
                </span>
              )}
            </div>
            
            {loading && institutions.length === 0 ? (
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
            ) : institutions.length === 0 ? (
              <div style={{textAlign: 'center', padding: '80px 24px', background: 'var(--card-bg)', borderRadius: '16px', border: '1px solid var(--border-color)'}}>
                <Building2 size={64} style={{color: 'var(--text-muted)', marginBottom: '20px', opacity: 0.3}} />
                <h3 style={{fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px'}}>No Institutions Found</h3>
                <p style={{color: 'var(--text-muted)'}}>Try adjusting your search terms or filters.</p>
              </div>
            ) : (
              <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                {institutions.map((institution, index) => (
                  <Link
                    key={`${institution.id}-${index}`}
                    to={`/jamb-brochure/courses/${institution.id}?school=${encodeURIComponent(institution.name)}`}
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
                      animation: `fadeInUp 0.5s ease ${index * 0.05}s both`
                    }}
                  >
                    <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                      <div style={{width: '44px', height: '44px', background: 'var(--bg-main)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-main)', flexShrink: 0}}>
                        <Building2 size={24} />
                      </div>
                      <h3 style={{fontSize: '1.0625rem', fontWeight: 700, color: 'var(--text-main)', lineHeight: '1.4'}}>{institution.name}</h3>
                    </div>
                    <div style={{color: 'var(--accent-main)', background: 'rgba(22, 163, 74, 0.1)', padding: '8px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <span style={{fontSize: '0.875rem', fontWeight: 600, marginRight: '8px'}}>View Courses</span>
                      <ChevronRight size={20} />
                    </div>
                  </Link>
                ))}

                <div style={{marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '12px', alignItems: 'center'}}>
                  <button
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1 || loading}
                    style={{
                      padding: '12px 24px',
                      background: 'var(--card-bg)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '12px',
                      color: currentPage === 1 ? 'var(--text-muted)' : 'var(--text-main)',
                      cursor: (currentPage === 1 || loading) ? 'not-allowed' : 'pointer',
                      fontWeight: 700,
                      transition: 'all 0.2s'
                    }}
                  >
                    Previous
                  </button>
                  
                  <div style={{background: 'var(--accent-main)', color: '#ffffff', padding: '12px 24px', borderRadius: '12px', fontWeight: 800, fontSize: '1rem', boxShadow: 'var(--shadow-sm)'}}>
                    {currentPage}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={!hasMore || loading}
                    style={{
                      padding: '12px 32px',
                      background: 'var(--card-bg)',
                      border: '1px solid var(--border-color)',
                      borderRadius: '12px',
                      color: !hasMore ? 'var(--text-muted)' : 'var(--text-main)',
                      cursor: (!hasMore || loading) ? 'not-allowed' : 'pointer',
                      fontWeight: 700,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '12px',
                      transition: 'all 0.2s'
                    }}
                  >
                    {loading ? (
                      <Loader2 size={18} className="loader-spin" />
                    ) : null}
                    Next Page
                  </button>
                </div>
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
