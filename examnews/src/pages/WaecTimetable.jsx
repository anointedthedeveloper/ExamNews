import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, Download, Info, Search, FileText } from "lucide-react";

import waecLogo from "../assets/waec.png";

const WaecTimetable = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When will the WAEC 2026 timetable be released?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The official WAEC 2026 timetable for school candidates is expected in March or April 2026."
        }
      },
      {
        "@type": "Question",
        "name": "How can I download the WAEC 2026 timetable PDF?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Once released, you can download the official PDF from the WAEC Nigeria website or our platform."
        }
      }
    ]
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>WAEC 2026 Timetable PDF Download: WASSCE Schedule - Exam News</title>
        <meta name="description" content="Download the official WAEC 2026 timetable PDF. Get the latest WASSCE schedule for May/June school candidates in Nigeria, Ghana, Sierra Leone, and Gambia." />
        <meta name="keywords" content="WAEC 2026 timetable PDF, WASSCE timetable 2026, WAEC 2026 registration date, WAEC timetable for Nigeria" />
        <link rel="canonical" href="https://examnews.work.gd/waec-timetable-2026" />
        <meta property="og:title" content="WAEC 2026 Timetable PDF Download: WASSCE Schedule" />
        <meta property="og:description" content="Latest WAEC timetable and exam dates for 2026." />
        <meta property="og:url" content="https://examnews.work.gd/waec-timetable-2026" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section style={{background: '#eab308', color: '#ffffff', padding: '48px 20px', textAlign: 'center'}}>
        <div className="container">
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}>
            <div style={{background: '#ffffff', padding: '12px', borderRadius: '8px'}}>
              <img src={waecLogo} alt="WAEC Logo" style={{height: '100px', display: 'block'}} />
            </div>
          </div>
          <h1 style={{color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap'}}>
            <Calendar size={36}/> WAEC 2026 Timetable
          </h1>
          <p style={{fontSize: '1.125rem', color: '#fef3c7'}}>Official Senior School Certificate Examination (WASSCE) dates and schedule</p>
        </div>
      </section>

      <div className="container" style={{padding: '40px 20px'}}>
        <div className="two-column-layout">
          <div className="main-content">
            <div className="card" style={{marginBottom: '32px'}}>
              <h2 style={{fontSize: '1.75rem', fontWeight: 600, marginBottom: '16px'}}>WAEC 2026 Timetable: May/June WASSCE</h2>
              <p style={{marginBottom: '16px'}}>
                The <strong>WAEC 2026 timetable PDF</strong> is a crucial document for all secondary school students in Nigeria and other West African countries. It provides the exact dates and times for every subject offered in the West African Senior School Certificate Examination (WASSCE).
              </p>
              <p>
                Candidates are advised to use the <strong>WAEC timetable</strong> to plan their study sessions effectively. <em>Official date will be updated once released by the council.</em>
              </p>
            </div>

            <div className="info-alert" style={{background: '#fef3c7', borderColor: '#eab308', marginBottom: '32px'}}>
              <h3 style={{fontWeight: 600, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                <Download size={20} /> Download WAEC 2026 Timetable PDF
              </h3>
              <p style={{marginBottom: '16px', fontStyle: 'italic'}}>Status: Official Timetable is awaiting release.</p>
              <button className="btn" style={{opacity: 0.5, cursor: 'not-allowed'}}>Download PDF (Coming Soon)</button>
              <p style={{marginTop: '12px', fontSize: '0.875rem', color: '#92400e'}}>Once released, the download link will be active here.</p>
            </div>

            <div className="card" style={{marginBottom: '32px'}}>
              <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>How to Read the WAEC Timetable</h2>
              <p style={{marginBottom: '16px'}}>
                The timetable is usually structured to include the date, subject, paper type (theory, practical, or objective), and the duration. It is important to note:
              </p>
              <ul style={{marginLeft: '24px', marginBottom: '16px'}}>
                <li className="mb-2">
                  <strong>Time Differences:</strong> The time on the timetable is often in GMT. In Nigeria (WAT), you must add 1 hour to the GMT time to get the correct starting time.
                </li>
                <li className="mb-2">
                  <strong>Paper Sequence:</strong> Some subjects have multiple papers on the same day. For example, English Language Paper 1 and 2 are usually taken back-to-back.
                </li>
                <li className="mb-2">
                  <strong>Practicals:</strong> Science subjects (Biology, Chemistry, Physics) usually have practical exams scheduled before the theory papers.
                </li>
              </ul>
            </div>

            <div className="card" style={{marginBottom: '32px'}}>
              <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>WASSCE 2026 Preparation Tips</h2>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginTop: '16px'}}>
                <div style={{padding: '16px', border: '1px solid #e5e7eb', borderRadius: '8px'}}>
                  <h4 style={{fontWeight: 600, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                    <FileText size={18} style={{color: '#eab308'}}/> Study with Syllabus
                  </h4>
                  <p style={{fontSize: '0.875rem', margin: 0}}>The WAEC syllabus ensures you are studying relevant topics. Don't waste time on irrelevant chapters.</p>
                </div>
                <div style={{padding: '16px', border: '1px solid #e5e7eb', borderRadius: '8px'}}>
                  <h4 style={{fontWeight: 600, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                    <Search size={18} style={{color: '#eab308'}}/> Use Past Questions
                  </h4>
                  <p style={{fontSize: '0.875rem', margin: 0}}>WAEC repeats questions. Practice with at least the last 10 years of past questions.</p>
                </div>
              </div>
            </div>

            <div className="faq-section">
              <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '24px'}}>Frequently Asked Questions</h2>
              <div className="faq-item">
                <h4 className="faq-question">Can I skip practical exams?</h4>
                <p className="faq-answer">NO! Practical exams carry significant marks. If you miss a practical, you are likely to fail the entire subject.</p>
              </div>
              <div className="faq-item">
                <h4 className="faq-question">Is the 2026 timetable out?</h4>
                <p className="faq-answer" style={{fontStyle: 'italic', color: '#dc2626'}}>The official date will be updated once released.</p>
              </div>
              <div className="faq-item">
                <h4 className="faq-question">What do I do if my papers clash?</h4>
                <p className="faq-answer">Official WAEC timetables are designed to avoid clashes. If you have two papers at the same time, notify your school principal immediately.</p>
              </div>
            </div>
          </div>

          <aside className="sidebar">
            <div className="card" style={{background: '#f9fafb', marginBottom: '24px'}}>
              <h3 style={{fontSize: '1.125rem', fontWeight: 600, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                <Info size={20} style={{color: '#eab308'}} /> Exam Quick Info
              </h3>
              <div style={{fontSize: '0.875rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #e5e7eb'}}>
                  <span>Council:</span> <span style={{fontWeight: 600}}>WAEC</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #e5e7eb'}}>
                  <span>Exam:</span> <span style={{fontWeight: 600}}>WASSCE 2026</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #e5e7eb'}}>
                  <span>Registration:</span> <span style={{fontWeight: 600, fontStyle: 'italic'}}>Ongoing</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '8px 0'}}>
                  <span>Duration:</span> <span style={{fontWeight: 600}}>7-8 Weeks</span>
                </div>
              </div>
            </div>

            <div className="card" style={{background: '#fef3c7'}}>
              <h3 style={{fontWeight: 600, marginBottom: '16px'}}>Related Pages</h3>
              <div style={{display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.875rem'}}>
                <Link to="/neco" style={{color: '#0A3D91', textDecoration: 'none'}}>→ NECO Timetable 2026</Link>
                <Link to="/jamb" style={{color: '#0A3D91', textDecoration: 'none'}}>→ JAMB Exam Date 2026</Link>
                <Link to="/waec" style={{color: '#0A3D91', textDecoration: 'none'}}>→ WAEC Registration Guide</Link>
              </div>
            </div>
          </aside>
        </div>

        <div style={{marginTop: '48px', textAlign: 'center', padding: '40px 20px', background: '#f9fafb', borderRadius: '8px'}}>
          <h2 style={{fontSize: '1.75rem', fontWeight: 600, marginBottom: '16px'}}>What Next After the Exam?</h2>
          <p style={{color: '#6b7280', marginBottom: '24px', maxWidth: '600px', margin: '0 auto 24px'}}>
            Once you have completed your 2026 WASSCE, the next step is to check your results. You should also ensure you have registered for JAMB and follow our admission status guide.
          </p>
          <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link to="/waec" className="btn">Check WAEC Result</Link>
            <Link to="/admission-status" className="btn btn-secondary">Admission Guide</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaecTimetable;
