import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Calendar, FileText, ExternalLink } from "lucide-react";
import waecLogo from "../assets/waec.png";
import "../styles/Components.css";

const Waec = () => {
  return (
    <div>
      <Helmet>
        <title>WAEC 2026 Timetable, Registration & Result - Exam News</title>
        <meta name="description" content="Latest WAEC 2026 updates for Nigeria. Get the WAEC 2026 timetable PDF, registration date, and learn how to check your WAEC result on the official portal." />
        <link rel="canonical" href="https://examnews.work.gd/waec" />
      </Helmet>

      <section style={{background: '#eab308', color: '#ffffff', padding: '48px 20px'}}>
        <div className="container">
          <div className="breadcrumb" style={{color: '#fecaca'}}>
            <Link to="/" style={{color: '#fecaca'}}>Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span>WAEC</span>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap'}}>
            <img src={waecLogo} alt="WAEC" style={{height: '100px', width: 'auto', background: '#ffffff', padding: '16px', borderRadius: '8px'}} />
            <div>
              <h1 style={{color: '#ffffff', display: 'flex', alignItems: 'center', gap: '12px'}}>
                <FileText size={36}/> WAEC 2026 Updates
              </h1>
              <p style={{fontSize: '1.125rem', color: '#fecaca', fontStyle: 'italic'}}>Official guides and news for the West African Examinations Council (WASSCE) in Nigeria.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="two-column-layout">
        <article className="content-area">
          <section className="section">
            <h2 className="section-title">WAEC 2026/2027 Registration Guide</h2>
            <p>
              The West African Examinations Council (WAEC) holds the Senior School Certificate Examination (SSCE) twice every year: once for school candidates (May/June) and once for private candidates (GCE - Jan/Feb and Nov/Dec).
            </p>
            <p>
              The <strong>WAEC GCE 2026 (1st Series)</strong> for private candidates was held from <strong>January 28 - February 14, 2026</strong> (CBT mode). Registration for this series closed on January 27, 2026, with a fee of <strong>₦27,000</strong>.
            </p>
            <p>
              For school candidates, the <strong>WAEC May/June 2026</strong> registration typically opens in December/January. Candidates must ensure they are registered through their respective schools for the school-based exam.
            </p>
          </section>

          <section className="section">
            <h2>WAEC 2026 Timetable PDF Download</h2>
            <p>
              The <strong>WAEC 2026 timetable</strong> is the most critical document for candidates preparing for the examination. It contains the schedule for all subjects, including practicals and oral exams.
            </p>
            <div className="info-alert" style={{background: '#fef2f2', borderColor: '#991b1b'}}>
              <h3 style={{fontWeight: 600, marginBottom: '8px'}}>How to get the official timetable:</h3>
              <p style={{fontSize: '0.9375rem', margin: 0, color: '#7f1d1d'}}>We provide the latest <strong>WAEC 2026 timetable PDF</strong> download links as soon as the council releases the official schedule. <Link to="/waec-timetable-2026">Click here to view/download the timetable</Link>.</p>
            </div>
            <p>
              It is advisable to check the timetable regularly for any updates or changes. The examination usually spans several weeks, starting with practical sessions for science and vocational subjects.
            </p>
          </section>

          <section className="section">
            <h2>WAEC Syllabus and Preparation</h2>
            <p>
              To succeed in WAEC 2026, you must study according to the <strong>WAEC syllabus</strong>. The syllabus outlines the specific topics you will be tested on and the recommended textbooks for each subject.
            </p>
            <div className="grid-2">
              <div className="card">
                <h3 className="card-title">Core Subjects</h3>
                <p className="card-text">English Language, Mathematics, Civic Education, and a Trade Subject.</p>
              </div>
              <div className="card">
                <h3 className="card-title">Science/Art/Commerce</h3>
                <p className="card-text">Choose subjects relevant to your desired career path.</p>
              </div>
            </div>
            <p>
              We recommend using past questions and answers from previous years. WAEC is known to repeat certain question patterns, and practicing with past papers can give you an edge.
            </p>
          </section>

          <section className="section">
            <h2>Checking Your WAEC Result</h2>
            <p>
              Once the 2026 examination is completed, the council typically releases results within 45 to 60 days. To check your result on the <strong>WAEC result portal</strong>, you will need:
            </p>
            <ul style={{marginLeft: '20px', marginBottom: '24px'}}>
              <li>WAEC Examination Number.</li>
              <li>Examination Year (2026).</li>
              <li>Type of Examination (School or Private Candidate).</li>
              <li>Result Checker Serial Number.</li>
              <li>Result Checker PIN.</li>
            </ul>
            <p>You can also check your result via SMS by sending 'WAEC*ExamNo*PIN*ExamYear' to 32327 (Service providers apply charges).</p>
          </section>

          <section className="faq-section">
            <h2 style={{fontSize: '1.75rem', fontWeight: 700, marginBottom: '24px'}}>WAEC 2026 FAQs</h2>
            <div className="faq-item">
              <h3>What is a credit pass in WAEC?</h3>
              <p>A credit pass (C4, C5, C6) is the minimum required grade for most university admissions in Nigeria. A pass (D7, E8) may not be accepted for major courses like Law, Medicine, or Engineering.</p>
            </div>
            <div className="faq-item">
              <h3>When is the deadline for GCE registration?</h3>
              <p>GCE registration dates vary depending on the series (First or Second). <em>Official date will be updated once released.</em></p>
            </div>
            <div className="faq-item">
              <h3>Can I correct my name on my WAEC certificate?</h3>
              <p>Yes, but this involves a long process through the council's headquarters. It is best to ensure your details are correct during registration.</p>
            </div>
          </section>
        </article>

        <aside className="sidebar">
          <div className="sidebar-card" style={{background: '#fef9e7', borderColor: '#eab308'}}>
            <h3 style={{display: 'flex', alignItems: 'center', gap: '8px', color: '#854d0e'}}>
              <Calendar size={20}/> Key Dates 2026
            </h3>
            <div style={{fontSize: '0.875rem'}}>
              <div style={{marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #e5e7eb'}}>
                <p style={{fontWeight: 600, marginBottom: '4px', color: '#1f2937'}}>GCE 1st Series (CBT)</p>
                <p style={{color: '#854d0e', fontWeight: 600, margin: 0}}>Jan 28 - Feb 14, 2026</p>
                <p style={{color: '#6b7280', fontSize: '0.8125rem', marginTop: '4px'}}>Registration closed Jan 27</p>
              </div>
              <div style={{marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #e5e7eb'}}>
                <p style={{fontWeight: 600, marginBottom: '4px', color: '#1f2937'}}>May/June (School)</p>
                <p style={{color: '#6b7280', fontStyle: 'italic', margin: 0}}>Dates to be announced</p>
              </div>
              <div>
                <p style={{fontWeight: 600, marginBottom: '4px', color: '#1f2937'}}>GCE Registration Fee</p>
                <p style={{color: '#854d0e', fontWeight: 600, margin: 0}}>₦27,000</p>
              </div>
            </div>
          </div>

          <div className="sidebar-card">
            <h3>Quick Navigation</h3>
            <ul className="sidebar-links">
              <li><Link to="/waec-timetable-2026"><span>Download Timetable PDF</span><ExternalLink size={14}/></Link></li>
              <li><Link to="/jamb"><span>JAMB 2026 Updates</span><ExternalLink size={14}/></Link></li>
              <li><Link to="/cut-off-marks"><span>University Cut-off Marks</span><ExternalLink size={14}/></Link></li>
              <li><Link to="/admission-status"><span>Admission Status Guide</span><ExternalLink size={14}/></Link></li>
            </ul>
          </div>

          <div className="ad-placeholder">Advertisement</div>
        </aside>
      </div>
    </div>
  );
};

export default Waec;
