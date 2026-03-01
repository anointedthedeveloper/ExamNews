import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search, FileText, Calendar, MapPin, GraduationCap, ArrowRight, Building2 } from 'lucide-react';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      performSearch(query);
    }
  }, [query]);

  const performSearch = (searchQuery) => {
    const lowerQuery = searchQuery.toLowerCase();
    const allContent = [
      { title: 'JAMB 2026 Registration & Updates', url: '/jamb', description: 'Complete guide to JAMB UTME registration, requirements, and exam dates', keywords: ['jamb', 'utme', 'registration', 'exam'], icon: <GraduationCap size={24} /> },
      { title: 'JAMB Registration Guide 2026', url: '/jamb-registration', description: 'Step-by-step guide for JAMB 2026 registration with NIN, ePIN, and CBT centre info', keywords: ['jamb', 'registration', 'how to register', 'epin', 'profile code', 'nin'], icon: <GraduationCap size={24} /> },
      { title: 'JAMB Syllabus 2026', url: '/jamb-syllabus', description: 'Download official JAMB syllabus PDF for all subjects', keywords: ['jamb', 'syllabus', 'download', 'pdf', 'subjects'], icon: <FileText size={24} /> },
      { title: 'JAMB CBT Centers Near Me', url: '/jamb-centers', description: 'Find accredited JAMB registration and examination centers', keywords: ['jamb', 'center', 'cbt', 'registration', 'location'], icon: <MapPin size={24} /> },
      { title: 'Check JAMB Result', url: '/check-jamb-result', description: 'Check your JAMB UTME result online', keywords: ['jamb', 'result', 'check', 'utme'], icon: <FileText size={24} /> },
      { title: 'WAEC 2026 Updates', url: '/waec', description: 'WAEC examination updates, registration, and result checking', keywords: ['waec', 'wassce', 'ssce', 'result'], icon: <Calendar size={24} /> },
      { title: 'WAEC Timetable 2026', url: '/waec-timetable-2026', description: 'Download WAEC examination timetable PDF', keywords: ['waec', 'timetable', 'schedule', 'pdf', 'download'], icon: <Calendar size={24} /> },
      { title: 'NECO 2026 Updates', url: '/neco', description: 'NECO examination updates and registration information', keywords: ['neco', 'ssce', 'exam', 'result'], icon: <Calendar size={24} /> },
      { title: 'NECO Timetable 2026', url: '/neco-timetable-2026', description: 'Download NECO examination timetable and schedule', keywords: ['neco', 'timetable', 'schedule', 'pdf'], icon: <Calendar size={24} /> },
      { title: 'University Cut-Off Marks', url: '/cut-off-marks', description: 'Check JAMB and departmental cut-off marks for Nigerian universities', keywords: ['cut off', 'cutoff', 'marks', 'university', 'admission'], icon: <FileText size={24} /> },
      { title: 'Post UTME 2026', url: '/post-utme', description: 'University screening dates, registration, and requirements', keywords: ['post utme', 'screening', 'university', 'admission'], icon: <GraduationCap size={24} /> },
      { title: 'Admission Status Checker', url: '/admission-status', description: 'Check your JAMB admission status and CAPS updates', keywords: ['admission', 'status', 'caps', 'jamb'], icon: <FileText size={24} /> },
      { title: 'JAMB Brochure', url: '/jamb-brochure', description: 'Browse list of courses and requirements for all Nigerian institutions', keywords: ['brochure', 'institutions', 'courses', 'universities', 'polytechnics'], icon: <Building2 size={24} /> },
    ];

    const filtered = allContent.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(lowerQuery);
      const descMatch = item.description.toLowerCase().includes(lowerQuery);
      const keywordMatch = item.keywords.some(k => k.includes(lowerQuery) || lowerQuery.includes(k));
      return titleMatch || descMatch || keywordMatch;
    });

    setResults(filtered);
  };

  return (
    <div className="search-results-page">
      <Helmet>
        <title>Search Results for "{query}" - ExamNews Nigeria</title>
        <meta name="description" content={`Search results for ${query} on ExamNews Nigeria`} />
      </Helmet>

      <section style={{background: 'var(--accent-main)', color: '#ffffff', padding: '60px 20px', textAlign: 'center'}}>
        <div className="container">
          <h1 style={{color: '#ffffff', fontSize: '2.5rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '12px'}}>
            <Search size={40}/> Search Results
          </h1>
          <p style={{fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 500}}>Showing results for: <span style={{fontWeight: 700}}>"{query}"</span></p>
        </div>
      </section>

      <div className="page-container" style={{padding: '40px 20px', maxWidth: '900px'}}>
        {results.length === 0 ? (
          <div style={{textAlign: 'center', padding: '80px 40px', background: 'var(--card-bg)', borderRadius: '24px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)'}}>
            <div style={{background: 'var(--bg-main)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px'}}>
              <Search size={40} style={{color: 'var(--text-muted)', opacity: 0.5}} />
            </div>
            <h2 style={{fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '16px'}}>No matching results</h2>
            <p style={{color: 'var(--text-muted)', marginBottom: '32px', fontSize: '1.125rem'}}>Try searching for broader terms like "JAMB", "Admission", or "Brochure".</p>
            <Link to="/" style={{display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--accent-main)', color: '#ffffff', padding: '14px 32px', borderRadius: '12px', textDecoration: 'none', fontWeight: 700, transition: 'all 0.2s'}}>
              Go to Homepage <ArrowRight size={18} />
            </Link>
          </div>
        ) : (
          <>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', paddingBottom: '16px', borderBottom: '1px solid var(--border-color)'}}>
              <p style={{fontSize: '1.125rem', color: 'var(--text-main)', margin: 0}}>
                Found <strong>{results.length}</strong> relevant result{results.length !== 1 ? 's' : ''}
              </p>
            </div>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
              {results.map((result, index) => (
                <Link 
                  key={index} 
                  to={result.url} 
                  className="search-result-card"
                  style={{
                    textDecoration: 'none', 
                    color: 'inherit', 
                    display: 'block',
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '16px',
                    padding: '24px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    animation: `fadeInUp 0.5s ease ${index * 0.05}s both`
                  }}
                >
                  <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
                    <div style={{background: 'var(--bg-main)', width: '56px', height: '56px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-main)', flexShrink: 0}}>
                      {result.icon}
                    </div>
                    <div style={{flex: 1}}>
                      <h3 style={{fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '6px', transition: 'color 0.2s'}}>
                        {result.title}
                      </h3>
                      <p style={{color: 'var(--text-muted)', margin: 0, fontSize: '1rem', lineHeight: '1.5'}}>{result.description}</p>
                    </div>
                    <div className="arrow-icon" style={{color: 'var(--text-muted)', opacity: 0.3, transition: 'all 0.2s'}}>
                      <ChevronRight size={24} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>

      <style>{`
        .search-result-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-main) !important;
          box-shadow: var(--shadow-md);
        }
        .search-result-card:hover h3 { color: var(--accent-main); }
        .search-result-card:hover .arrow-icon { color: var(--accent-main); opacity: 1; transform: translateX(4px); }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default SearchResults;
