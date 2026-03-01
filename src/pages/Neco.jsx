import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { GraduationCap, Search, ExternalLink } from "lucide-react";
import necoLogo from "../assets/neco.png";
import "../styles/Components.css";

const Neco = () => {
  return (
    <div>
      <Helmet>
        <title>NECO 2026 Timetable, Registration & Latest Updates - Exam News</title>
        <meta name="description" content="Stay informed about the National Examinations Council (NECO) 2026. Get latest NECO timetable, registration dates, and learn how to check your result on the portal." />
        <link rel="canonical" href="https://examnews.work.gd/neco" />
      </Helmet>

      <section style={{background: '#16a34a', color: '#ffffff', padding: '48px 20px'}}>
        <div className="container">
          <div className="breadcrumb" style={{color: '#dbeafe'}}>
            <Link to="/" style={{color: '#dbeafe'}}>Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span>NECO</span>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap'}}>
            <img src={necoLogo} alt="NECO" style={{height: '100px', width: 'auto', background: '#ffffff', padding: '16px', borderRadius: '8px'}} />
            <div>
              <h1 style={{color: '#ffffff', display: 'flex', alignItems: 'center', gap: '12px'}}>
                <GraduationCap size={36}/> NECO 2026 News & Guides
              </h1>
              <p style={{fontSize: '1.125rem', color: '#dbeafe', fontStyle: 'italic'}}>Stay updated with the latest news from the National Examinations Council (NECO).</p>
            </div>
          </div>
        </div>
      </section>

      <div className="two-column-layout">
        <article className="content-area">
          <section className="section">
            <h2 className="section-title">NECO 2025/2026 Registration & Updates</h2>
            <p>
              The National Examinations Council (NECO) is Nigeria's indigenously developed examination body, responsible for conducting various examinations including the Senior School Certificate Examination (SSCE Internal and External), Basic Education Certificate Examination (BECE), and National Common Entrance Examination (NCEE).
            </p>
            <p>
              The <strong>NECO SSCE Internal 2025</strong> is scheduled for <strong>June 16 - July 25, 2025</strong>. Normal registration closed on June 2, 2025, while late registration closed on June 10, 2025. Registration began on November 11, 2024.
            </p>
            <p>
              The <strong>NECO SSCE External (Nov/Dec 2025)</strong> will be held from <strong>November 26 - December 13, 2025</strong>. Registration runs from July 7, 2025 to November 18, 2025.
            </p>
          </section>

          <section className="section">
            <h2>NECO 2026 Timetable</h2>
            <p>
              The <strong>NECO timetable</strong> is essential for candidates to stay organized and prepare effectively for their subjects. The timetable for the June/July SSCE Internal usually spans several weeks and includes both practical and theory papers.
            </p>
            <div className="info-alert" style={{background: '#eff6ff', borderColor: '#1e40af'}}>
              <h3 style={{fontWeight: 600, marginBottom: '8px'}}>How to Access the Official Timetable:</h3>
              <p style={{fontSize: '0.9375rem', margin: 0, color: '#1e40af'}}>We provide the latest <strong>NECO 2026 timetable</strong> links as soon as they are made public by the council. <Link to="/neco">Click here to stay updated on the NECO timetable</Link>.</p>
            </div>
            <p>
              Candidates should pay attention to subject combinations and ensure they are present for all their registered papers. Practicals for science and vocational subjects often start first.
            </p>
          </section>

          <section className="section">
            <h2>NECO Syllabus and Preparation</h2>
            <p>
              Studying with the <strong>NECO syllabus</strong> is key to achieving excellent results. The syllabus provides a detailed breakdown of the topics covered in each subject and recommended reading materials.
            </p>
            <div className="grid-2">
              <div className="card">
                <h3 className="card-title">Key Subjects</h3>
                <p className="card-text">English, Mathematics, Civic Education, and more.</p>
              </div>
              <div className="card">
                <h3 className="card-title">Syllabus Research</h3>
                <p className="card-text">Ensure you are covering the right topics for 2026.</p>
              </div>
            </div>
            <p>
              Past questions are also invaluable for NECO preparation. They help you understand the question format and common topics that recur year after year.
            </p>
          </section>

          <section className="section">
            <h2>Checking Your NECO Result Online</h2>
            <p>
              After the examinations, results are usually released within 60 to 90 days. To check your result on the <strong>NECO result portal</strong>, follow these steps:
            </p>
            <ol style={{marginLeft: '20px', marginBottom: '24px'}}>
              <li>Visit the <strong>NECO official result portal</strong>.</li>
              <li>Select your examination year (2026).</li>
              <li>Select your examination type (SSCE Internal or External).</li>
              <li>Enter your result checking token.</li>
              <li>Enter your registration number.</li>
              <li>Click on 'Check Result'.</li>
            </ol>
            <p>Note that you must purchase a result checking token to access your results online.</p>
          </section>

          <section className="faq-section">
            <h2 style={{fontSize: '1.75rem', fontWeight: 700, marginBottom: '24px'}}>NECO 2026 FAQs</h2>
            <div className="faq-item">
              <h3>Can I use NECO for university admission?</h3>
              <p>Yes, NECO results are widely accepted by all Nigerian universities, polytechnics, and colleges of education, just like WAEC.</p>
            </div>
            <div className="faq-item">
              <h3>What is the difference between SSCE Internal and External?</h3>
              <p>Internal SSCE is for students currently in secondary school (SS3), while External SSCE is for private candidates who have already completed secondary school.</p>
            </div>
            <div className="faq-item">
              <h3>How do I get my NECO token?</h3>
              <p>Tokens can be purchased directly from the NECO result portal using various online payment methods like Remita.</p>
            </div>
          </section>
        </article>

        <aside className="sidebar">
          <div className="sidebar-card" style={{background: '#f0fdf4', borderColor: '#16a34a'}}>
            <h3 style={{display: 'flex', alignItems: 'center', gap: '8px', color: '#16a34a'}}>
              <Search size={20}/> Key Dates 2025
            </h3>
            <div style={{fontSize: '0.875rem'}}>
              <div style={{marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #e5e7eb'}}>
                <p style={{fontWeight: 600, marginBottom: '4px', color: '#1f2937'}}>Internal (June/July)</p>
                <p style={{color: '#16a34a', fontWeight: 600, margin: 0}}>June 16 - July 25, 2025</p>
                <p style={{color: '#6b7280', fontSize: '0.8125rem', marginTop: '4px'}}>Registration closed June 10</p>
              </div>
              <div style={{marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid #e5e7eb'}}>
                <p style={{fontWeight: 600, marginBottom: '4px', color: '#1f2937'}}>External (Nov/Dec)</p>
                <p style={{color: '#16a34a', fontWeight: 600, margin: 0}}>Nov 26 - Dec 13, 2025</p>
                <p style={{color: '#6b7280', fontSize: '0.8125rem', marginTop: '4px'}}>Registration: July 7 - Nov 18</p>
              </div>
            </div>
          </div>

          <div className="sidebar-card" style={{background: '#eff6ff', borderColor: '#1e40af'}}>
            <h3 style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <Search size={20}/> Quick Search
            </h3>
            <ul className="sidebar-links">
              <li><Link to="/jamb"><span>JAMB 2026 News</span><ExternalLink size={14}/></Link></li>
              <li><Link to="/waec"><span>WAEC 2026 Updates</span><ExternalLink size={14}/></Link></li>
              <li><Link to="/cut-off-marks"><span>University Cut-off Marks</span><ExternalLink size={14}/></Link></li>
              <li><Link to="/admission-status"><span>Check Admission Status</span><ExternalLink size={14}/></Link></li>
            </ul>
          </div>

          <div className="cta-box" style={{background: '#1e40af'}}>
            <h3 style={{color: '#ffffff'}}>NECO Examination Types</h3>
            <table style={{width: '100%', fontSize: '0.875rem', marginTop: '16px'}}>
              <tbody>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.2)'}}>
                  <td style={{padding: '8px 0', color: '#dbeafe'}}>SSCE Internal</td>
                  <td style={{padding: '8px 0', textAlign: 'right', color: '#ffffff'}}>June/July</td>
                </tr>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.2)'}}>
                  <td style={{padding: '8px 0', color: '#dbeafe'}}>SSCE External</td>
                  <td style={{padding: '8px 0', textAlign: 'right', color: '#ffffff'}}>Nov/Dec</td>
                </tr>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.2)'}}>
                  <td style={{padding: '8px 0', color: '#dbeafe'}}>BECE (Junior NECO)</td>
                  <td style={{padding: '8px 0', textAlign: 'right', color: '#ffffff'}}>May</td>
                </tr>
                <tr>
                  <td style={{padding: '8px 0', color: '#dbeafe'}}>NCEE (Common Entrance)</td>
                  <td style={{padding: '8px 0', textAlign: 'right', color: '#ffffff'}}>April</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="ad-placeholder">Advertisement</div>
        </aside>
      </div>
    </div>
  );
};

export default Neco;
