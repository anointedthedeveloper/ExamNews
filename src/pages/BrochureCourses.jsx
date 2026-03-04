import React, { useState, useEffect, useCallback, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useSearchParams, useParams } from "react-router-dom";
import { Search, BookOpen, ChevronRight, ArrowLeft, Loader2, Info, BookCheck, RefreshCw } from "lucide-react";
import jambLogo from "../assets/jamb.png";
import "../styles/Components.css";
import { axiosInstance } from "../services/services";
import { logger } from "../utils/logger";

const BrochureCourses = () => {
  const [searchParams] = useSearchParams();
  const { id: routeId } = useParams();
  const id = routeId || searchParams.get("id");
  const schoolName = searchParams.get("school") || "Institution";
  
  const [allCourses, setAllCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [backgroundLoading, setBackgroundLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  
  const loadingRef = useRef(false);

  const fetchPage = async (page) => {
    const res = await axiosInstance.post(`/ibass/institution/programmes/${id}`, { page });
    const result = res.data;
    const pageData = result.data?.data || result.data || result.programmes || [];
    return Array.isArray(pageData) ? pageData : [];
  };

  const startBackgroundLoading = useCallback(async (startPage) => {
    if (loadingRef.current) return;
    loadingRef.current = true;
    setBackgroundLoading(true);

    try {
      let page = startPage;
      const MAX_PAGES = 10; // Usually fewer than 10 pages of courses

      while (page <= MAX_PAGES) {
        try {
          const newData = await fetchPage(page);
          if (newData.length === 0) break;

          setAllCourses(prev => {
            const combined = [...prev, ...newData];
            // Unique by course name or ID if available
            return combined.filter((course, index, self) =>
              index === self.findIndex((t) => (t.id && t.id === course.id) || (t.course_name === course.course_name))
            );
          });
          
          if (newData.length < 10) break;
          page++;
          await new Promise(resolve => setTimeout(resolve, 300));
        } catch (err) {
          logger.error(`Error loading courses page ${page}`, err);
          break;
        }
      }
    } finally {
      loadingRef.current = false;
      setBackgroundLoading(false);
    }
  }, [id]);

  useEffect(() => {
    console.log("COURSES PAGE"); // User requested this
    const init = async () => {
      if (!id) return;
      setLoading(true);
      setError(null);
      
      try {
        // Load first 2 pages immediately
        const p1 = await fetchPage(1);
        let initialData = p1;
        
        if (p1.length === 10) {
          const p2 = await fetchPage(2);
          initialData = [...p1, ...p2];
          setAllCourses(initialData);
          setLoading(false);
          startBackgroundLoading(3);
        } else {
          setAllCourses(initialData);
          setLoading(false);
        }
      } catch (err) {
        logger.error("Initial course load error", err);
        setError('Failed to load courses. The JAMB server might be temporarily unavailable.');
        setLoading(false);
      }
    };

    init();
  }, [id, startBackgroundLoading]);

  const filteredCourses = allCourses.filter(course =>
    course && (
      (course.course_name && course.course_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (course.programme && course.programme.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (course.faculty && course.faculty.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  );

  const ITEMS_PER_PAGE = 10;
  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);
  const paginatedResults = filteredCourses.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - 2);
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
              background: currentPage === page ? 'var(--accent-main)' : 'var(--card-bg)',
              color: currentPage === page ? '#ffffff' : 'var(--text-main)',
              cursor: 'pointer',
              fontWeight: 700,
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

  return (
    <div className="brochure-courses-page">
      <Helmet>
        <title>Courses at {schoolName} - JAMB Brochure 2026</title>
        <meta name="description" content={`Browse list of courses and admission requirements for ${schoolName}. Find O'Level requirements and UTME subject combinations.`} />
      </Helmet>

      <section style={{background: 'var(--accent-main)', color: '#ffffff', padding: '48px 20px'}}>
        <div className="container">
          <div className="breadcrumb" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
            <Link to="/" style={{color: 'inherit'}}>Home</Link>
            <span className="breadcrumb-separator" style={{color: 'inherit'}}>/</span>
            <Link to="/jamb" style={{color: 'inherit'}}>JAMB</Link>
            <span className="breadcrumb-separator" style={{color: 'inherit'}}>/</span>
            <Link to="/jamb-brochure" style={{color: 'inherit'}}>Brochure</Link>
            <span className="breadcrumb-separator" style={{color: 'inherit'}}>/</span>
            <span style={{color: '#ffffff', fontWeight: 600}}>Courses</span>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap'}}>
            <div style={{background: '#ffffff', padding: '12px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)'}}>
              <img src={jambLogo} alt="JAMB" style={{height: '60px', width: 'auto'}} />
            </div>
            <div>
              <h1 style={{color: '#ffffff', fontSize: '2rem', fontWeight: 800, marginBottom: '8px', letterSpacing: '-0.5px'}}>{schoolName}</h1>
              <p style={{fontSize: '1rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 500}}>Departmental Requirements & Programmes</p>
            </div>
          </div>
        </div>
      </section>

      <div className="page-container" style={{padding: '40px 20px'}}>
        <div className="two-column-layout" style={{display: 'grid', gridTemplateColumns: '1fr 320px', gap: '32px'}}>
          <main className="content-area">
            <div style={{marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <Link to="/jamb-brochure" style={{display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-main)', textDecoration: 'none', fontWeight: 700, background: 'rgba(22, 163, 74, 0.05)', padding: '10px 16px', borderRadius: '10px', border: '1px solid var(--border-color)'}}>
                <ArrowLeft size={18} /> Back to Institutions
              </Link>
              {backgroundLoading && (
                <div style={{display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-main)', padding: '8px 16px', background: 'rgba(22, 163, 74, 0.05)', borderRadius: '20px'}}>
                  <Loader2 size={14} className="loader-spin" />
                  <span style={{fontSize: '0.75rem', fontWeight: 700}}>Loading more courses...</span>
                </div>
              )}
            </div>

            <div style={{background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '20px', marginBottom: '32px'}}>
              <div style={{position: 'relative'}}>
                <Search size={18} style={{position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)'}} />
                <input
                  type="text"
                  placeholder="Search courses in this institution..."
                  value={searchTerm}
                  onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                  style={{
                    width: '100%',
                    padding: '14px 14px 14px 44px',
                    background: 'var(--bg-main)',
                    color: 'var(--text-main)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '12px',
                    outline: 'none',
                    fontSize: '1rem',
                    transition: 'all 0.2s'
                  }}
                />
              </div>
            </div>

            {loading ? (
              <div style={{textAlign: 'center', padding: '80px 0', background: 'var(--card-bg)', borderRadius: '16px', border: '1px solid var(--border-color)'}}>
                <Loader2 size={48} className="loader-spin" style={{color: 'var(--accent-main)', margin: '0 auto'}} />
              </div>
            ) : error ? (
              <div style={{textAlign: 'center', padding: '60px 24px', background: 'rgba(239, 68, 68, 0.05)', borderRadius: '16px', border: '1px solid rgba(239, 68, 68, 0.1)'}}>
                <p style={{color: '#ef4444', fontWeight: 600, marginBottom: '20px'}}>{error}</p>
                <button onClick={() => window.location.reload()} style={{padding: '12px 32px', background: 'var(--accent-main)', color: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 700}}>
                  Retry
                </button>
              </div>
            ) : paginatedResults.length === 0 ? (
              <div style={{textAlign: 'center', padding: '60px 24px', background: 'var(--card-bg)', borderRadius: '16px', border: '1px solid var(--border-color)'}}>
                <p style={{color: 'var(--text-muted)'}}>No courses found matching your search.</p>
              </div>
            ) : (
              <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                {paginatedResults.map((course, index) => (
                  <div key={`${course.id}-${index}`} className="course-card" style={{background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '24px', transition: 'all 0.3s ease', animation: `fadeInUp 0.5s ease ${index * 0.05}s both`}}>
                    <h3 style={{fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '16px', lineHeight: '1.4'}}>{course.course_name || course.programme}</h3>
                    
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px', marginBottom: '24px'}}>
                      <div style={{background: 'var(--bg-main)', padding: '12px', borderRadius: '10px', border: '1px solid var(--border-color)'}}>
                        <h4 style={{fontSize: '0.6875rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '4px', letterSpacing: '0.05em'}}>Faculty</h4>
                        <p style={{fontSize: '0.9375rem', color: 'var(--text-main)', fontWeight: 600}}>{course.faculty || 'General'}</p>
                      </div>
                      <div style={{background: 'var(--bg-main)', padding: '12px', borderRadius: '10px', border: '1px solid var(--border-color)'}}>
                        <h4 style={{fontSize: '0.6875rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '4px', letterSpacing: '0.05em'}}>Duration</h4>
                        <p style={{fontSize: '0.9375rem', color: 'var(--text-main)', fontWeight: 600}}>{course.duration || '4-5 Years'}</p>
                      </div>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                      <div style={{background: 'rgba(22, 163, 74, 0.03)', padding: '18px', borderRadius: '12px', borderLeft: '4px solid var(--accent-main)'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px'}}>
                          <BookCheck size={18} style={{color: 'var(--accent-main)'}} />
                          <h4 style={{fontSize: '0.9375rem', fontWeight: 800, color: 'var(--text-main)'}}>O'Level Requirements</h4>
                        </div>
                        <p style={{fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6'}}>{course.o_level_requirement || 'Five (5) SSC credit passes to include English Language and other relevant subjects.'}</p>
                      </div>

                      <div style={{background: 'rgba(59, 130, 246, 0.03)', padding: '18px', borderRadius: '12px', borderLeft: '4px solid #3b82f6'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px'}}>
                          <Info size={18} style={{color: '#3b82f6'}} />
                          <h4 style={{fontSize: '0.9375rem', fontWeight: 800, color: 'var(--text-main)'}}>UTME Subject Combination</h4>
                        </div>
                        <p style={{fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6'}}>{course.utme_requirement || 'English Language and three (3) other relevant JAMB subjects.'}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {renderPagination()}
              </div>
            )}
          </main>

          <aside className="sidebar">
            <div className="sidebar-card" style={{background: 'rgba(22, 163, 74, 0.05)', borderColor: 'var(--accent-main)', borderRadius: '20px'}}>
              <h3 style={{color: 'var(--accent-main)', fontWeight: 800}}>
                <BookOpen size={22} /> Admission Note
              </h3>
              <p style={{fontSize: '0.9375rem', color: 'var(--text-main)', lineHeight: '1.6'}}>
                Ensure you verify these requirements against the official JAMB brochure before registration. Requirements may change periodically.
              </p>
            </div>
            
            <div className="sidebar-card" style={{borderRadius: '20px'}}>
              <h3 style={{fontWeight: 800}}>Quick Links</h3>
              <div className="sidebar-links">
                <Link to="/jamb-brochure" className="sidebar-link-item">
                  <span>All Institutions</span>
                  <ChevronRight size={16} />
                </Link>
                <Link to="/admission-status" className="sidebar-link-item">
                  <span>Check CAPS</span>
                  <ChevronRight size={16} />
                </Link>
                <Link to="/cut-off-marks" className="sidebar-link-item">
                  <span>Cut-off Marks</span>
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
        
        .course-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--accent-main) !important;
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

export default BrochureCourses;
