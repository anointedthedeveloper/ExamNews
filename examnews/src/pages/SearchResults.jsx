import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search, FileText, Calendar, MapPin, GraduationCap } from 'lucide-react';

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
    <div>
      <Helmet>
        <title>Search Results for "{query}" - ExamNews Nigeria</title>
        <meta name="description" content={`Search results for ${query} on ExamNews Nigeria`} />
      </Helmet>

      <section style={{background: '#0A3D91', color: '#ffffff', padding: '48px 20px', textAlign: 'center'}}>
        <div className="container">
          <h1 style={{color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap'}}>
            <Search size={36}/> Search Results
          </h1>
          <p style={{fontSize: '1.125rem', color: '#e0e7ff'}}>Results for: "{query}"</p>
        </div>
      </section>

      <div className="container" style={{padding: '40px 20px'}}>
        {results.length === 0 ? (
          <div className="card" style={{textAlign: 'center', padding: '40px'}}>
            <h2 style={{fontSize: '1.5rem', marginBottom: '16px'}}>No results found</h2>
            <p style={{color: '#6b7280', marginBottom: '24px'}}>Try searching for: JAMB, WAEC, NECO, Cut-off marks, Admission status, or JAMB centers</p>
            <Link to="/" className="btn">Go to Homepage</Link>
          </div>
        ) : (
          <>
            <p style={{marginBottom: '24px', fontSize: '1.125rem'}}>Found <strong>{results.length}</strong> result{results.length !== 1 ? 's' : ''}</p>
            <div style={{display: 'grid', gap: '16px'}}>
              {results.map((result, index) => (
                <Link key={index} to={result.url} className="card" style={{textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s', display: 'block'}}>
                  <div style={{display: 'flex', gap: '16px', alignItems: 'start'}}>
                    <div style={{color: '#0A3D91', flexShrink: 0}}>
                      {result.icon}
                    </div>
                    <div>
                      <h3 style={{fontSize: '1.25rem', fontWeight: 600, color: '#0A3D91', marginBottom: '8px'}}>
                        {result.title}
                      </h3>
                      <p style={{color: '#6b7280', margin: 0}}>{result.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
