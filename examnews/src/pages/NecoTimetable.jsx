import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Download, Info, FileText, Clock } from "lucide-react";
import necoLogo from "../assets/neco.png";

const NecoTimetable = () => {
  return (
    <div>
      <Helmet>
        <title>NECO 2026 Timetable PDF Download: SSCE Schedule - Exam News</title>
        <meta name="description" content="Download the official NECO 2026 timetable PDF. Get the latest SSCE schedule for June/July examination in Nigeria." />
        <meta name="keywords" content="NECO 2026 timetable PDF, NECO timetable 2026, NECO 2026 registration date, NECO exam schedule" />
        <link rel="canonical" href="https://examnews.work.gd/neco-timetable-2026" />
      </Helmet>

      <section style={{background: '#16a34a', color: '#ffffff', padding: '48px 20px', textAlign: 'center'}}>
        <div className="container">
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}>
            <div style={{background: '#ffffff', padding: '12px', borderRadius: '8px'}}>
              <img src={necoLogo} alt="NECO Logo" style={{height: '100px', display: 'block'}} />
            </div>
          </div>
          <h1 style={{color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap'}}>
            <Calendar size={36}/> NECO 2026 Timetable
          </h1>
          <p style={{fontSize: '1.125rem', color: '#dcfce7'}}>Official Senior School Certificate Examination (SSCE) dates and schedule</p>
        </div>
      </section>

      <div className="container" style={{padding: '40px 20px'}}>
        <div className="two-column-layout">
          <div className="main-content">
            <div className="card" style={{marginBottom: '32px'}}>
              <h2 style={{fontSize: '1.75rem', fontWeight: 600, marginBottom: '16px'}}>NECO 2026 Timetable: June/July SSCE</h2>
              <p style={{marginBottom: '16px'}}>
                The <strong>NECO 2026 timetable PDF</strong> is essential for all candidates preparing for the National Examinations Council Senior School Certificate Examination. The timetable provides exact dates and times for all subjects.
              </p>
              <p>
                Candidates should download and study the <strong>NECO timetable</strong> carefully to avoid missing any paper. <em>Official date will be updated once released by NECO.</em>
              </p>
            </div>

            <div className="info-alert" style={{background: '#dcfce7', borderColor: '#16a34a', marginBottom: '32px'}}>
              <h3 style={{fontWeight: 600, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                <Download size={20} /> Download NECO 2026 Timetable PDF
              </h3>
              <p style={{marginBottom: '16px', fontStyle: 'italic'}}>Status: Official Timetable is awaiting release.</p>
              <button className="btn" style={{background: '#16a34a', opacity: 0.5, cursor: 'not-allowed'}}>Download PDF (Coming Soon)</button>
              <p style={{marginTop: '12px', fontSize: '0.875rem', color: '#166534'}}>Once released, the download link will be active here.</p>
            </div>

            <div className="card" style={{marginBottom: '32px'}}>
              <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>Important Dates for NECO 2026</h2>
              <div style={{display: 'grid', gap: '12px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: '#f9fafb', borderRadius: '8px'}}>
                  <Clock size={20} style={{color: '#16a34a'}} />
                  <div>
                    <strong>Registration Period:</strong> <span style={{color: '#6b7280'}}>To be announced</span>
                  </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: '#f9fafb', borderRadius: '8px'}}>
                  <Calendar size={20} style={{color: '#16a34a'}} />
                  <div>
                    <strong>Examination Period:</strong> <span style={{color: '#6b7280'}}>June/July 2026</span>
                  </div>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: '#f9fafb', borderRadius: '8px'}}>
                  <FileText size={20} style={{color: '#16a34a'}} />
                  <div>
                    <strong>Result Release:</strong> <span style={{color: '#6b7280'}}>Approximately 60 days after exam</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" style={{marginBottom: '32px'}}>
              <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>How to Use the NECO Timetable</h2>
              <ul style={{marginLeft: '24px'}}>
                <li className="mb-2">
                  <strong>Check Your Subjects:</strong> Ensure all your registered subjects are on the timetable.
                </li>
                <li className="mb-2">
                  <strong>Note Exam Times:</strong> NECO exams typically start at 9:30 AM for morning papers and 2:00 PM for afternoon papers.
                </li>
                <li className="mb-2">
                  <strong>Plan Your Study:</strong> Use the timetable to create a study schedule, focusing on subjects with earlier dates.
                </li>
                <li className="mb-2">
                  <strong>Practical Exams:</strong> Science practicals are usually scheduled before theory papers.
                </li>
              </ul>
            </div>

            <div className="faq-section">
              <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '24px'}}>Frequently Asked Questions</h2>
              <div className="faq-item">
                <h4 className="faq-question">When will NECO 2026 timetable be released?</h4>
                <p className="faq-answer">The official NECO 2026 timetable is typically released 2-3 months before the examination starts. Check this page regularly for updates.</p>
              </div>
              <div className="faq-item">
                <h4 className="faq-question">Can I register for NECO after the deadline?</h4>
                <p className="faq-answer">Late registration may be available with a penalty fee. However, it's best to register within the official period to avoid extra charges.</p>
              </div>
              <div className="faq-item">
                <h4 className="faq-question">What if I miss a paper?</h4>
                <p className="faq-answer">Missing a paper means you will score zero in that subject. Always arrive at the exam center at least 30 minutes before the scheduled time.</p>
              </div>
            </div>
          </div>

          <aside className="sidebar">
            <div className="card" style={{background: '#f9fafb', marginBottom: '24px'}}>
              <h3 style={{fontSize: '1.125rem', fontWeight: 600, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                <Info size={20} style={{color: '#16a34a'}} /> Exam Quick Info
              </h3>
              <div style={{fontSize: '0.875rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #e5e7eb'}}>
                  <span>Council:</span> <span style={{fontWeight: 600}}>NECO</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #e5e7eb'}}>
                  <span>Exam:</span> <span style={{fontWeight: 600}}>SSCE 2026</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #e5e7eb'}}>
                  <span>Period:</span> <span style={{fontWeight: 600}}>June/July</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '8px 0'}}>
                  <span>Duration:</span> <span style={{fontWeight: 600}}>6-7 Weeks</span>
                </div>
              </div>
            </div>

            <div className="card" style={{background: '#dcfce7'}}>
              <h3 style={{fontWeight: 600, marginBottom: '16px'}}>Related Pages</h3>
              <div style={{display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.875rem'}}>
                <Link to="/waec-timetable-2026" style={{color: '#0A3D91', textDecoration: 'none'}}>→ WAEC Timetable 2026</Link>
                <Link to="/jamb" style={{color: '#0A3D91', textDecoration: 'none'}}>→ JAMB Exam Date 2026</Link>
                <Link to="/neco" style={{color: '#0A3D91', textDecoration: 'none'}}>→ NECO Registration Guide</Link>
              </div>
            </div>

            <div className="ad-placeholder">
              <p>Advertisement</p>
            </div>
          </aside>
        </div>

        <div style={{marginTop: '48px', textAlign: 'center', padding: '40px 20px', background: '#f9fafb', borderRadius: '8px'}}>
          <h2 style={{fontSize: '1.75rem', fontWeight: 600, marginBottom: '16px'}}>After Your NECO Exam</h2>
          <p style={{color: '#6b7280', marginBottom: '24px', maxWidth: '600px', margin: '0 auto 24px'}}>
            After completing your NECO examination, you can check your results online. Also prepare for JAMB if you're seeking university admission.
          </p>
          <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link to="/neco" className="btn" style={{background: '#16a34a'}}>Check NECO Result</Link>
            <Link to="/jamb" className="btn btn-secondary">JAMB Registration</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NecoTimetable;
