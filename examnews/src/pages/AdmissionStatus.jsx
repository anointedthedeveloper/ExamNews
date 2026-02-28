import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Info, Search, ArrowRight } from "lucide-react";
import "../styles/Components.css";

const AdmissionStatus = () => {
  return (
    <div>
      <Helmet>
        <title>Check Admission Status 2026/2027: JAMB CAPS Guide - Exam News</title>
        <meta name="description" content="Learn how to check your university admission status on JAMB CAPS. Step-by-step guide to checking admission on the JAMB portal and school portals for 2026/2027." />
        <link rel="canonical" href="https://examnews.work.gd/admission-status" />
      </Helmet>

      <section style={{background: '#ea580c', color: '#ffffff', padding: '48px 20px', textAlign: 'center'}}>
        <div className="container">
          <div className="breadcrumb" style={{color: '#fed7aa', justifyContent: 'center'}}>
            <Link to="/" style={{color: '#fed7aa'}}>Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span>Admission Status</span>
          </div>
          <h1 style={{color: '#ffffff'}}>How to Check Admission Status 2026</h1>
          <p style={{fontSize: '1.125rem', color: '#fed7aa'}}>The ultimate guide to JAMB CAPS and school admission portals for Nigerian students.</p>
        </div>
      </section>

      <div className="two-column-layout">
        <article className="content-area">
          <section className="section">
            <h2 className="section-title">Step-by-Step: Check Admission Status on JAMB CAPS</h2>
            <p>
              The <strong>JAMB Central Admissions Processing System (CAPS)</strong> is the official platform where all tertiary institutions in Nigeria process admissions. For the 2026/2027 session, candidates must monitor their CAPS regularly to know when they are offered admission.
            </p>
            <p>
              Follow these simple steps to <strong>check admission status</strong> on the JAMB portal:
            </p>
            <ol style={{marginLeft: '20px', marginBottom: '24px'}}>
              <li style={{marginBottom: '12px'}}>
                <strong>Visit the JAMB Portal:</strong> Go to the official <Link to="/check-jamb-result">JAMB portal login</Link> (efacility) page.
              </li>
              <li style={{marginBottom: '12px'}}>
                <strong>Log In:</strong> Enter your registered email address and password used during registration.
              </li>
              <li style={{marginBottom: '12px'}}>
                <strong>Select Examination Year:</strong> Choose the appropriate year (e.g., 2026).
              </li>
              <li style={{marginBottom: '12px'}}>
                <strong>Check Admission Status:</strong> Scroll down and click on the 'Check Admission Status' tab.
              </li>
              <li style={{marginBottom: '12px'}}>
                <strong>Access CAPS:</strong> Click on 'Access my CAPS' to be redirected to the CAPS dashboard.
              </li>
              <li style={{marginBottom: '12px'}}>
                <strong>View Status:</strong> Select 'Admission Status' from the menu on the left.
              </li>
            </ol>
          </section>

          <div className="info-alert" style={{background: '#fff7ed', borderColor: '#ea580c'}}>
            <h3 style={{fontWeight: 600, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', color: '#9a3412'}}>
              <Info size={20} /> Understanding CAPS Status Messages
            </h3>
            <div style={{fontSize: '0.9375rem'}}>
              <div style={{marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid #e5e7eb'}}>
                <p style={{fontWeight: 600, marginBottom: '4px', color: '#9a3412'}}>1. Not Admitted</p>
                <p style={{margin: 0, color: '#6b7280'}}>Your admission has not been processed or the school hasn't uploaded its list yet. Check back later.</p>
              </div>
              <div style={{marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid #e5e7eb'}}>
                <p style={{fontWeight: 600, marginBottom: '4px', color: '#9a3412'}}>2. Admission in Progress (AIP)</p>
                <p style={{margin: 0, color: '#6b7280'}}>The school is currently processing your admission. You have a very high chance of being admitted.</p>
              </div>
              <div style={{marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid #e5e7eb'}}>
                <p style={{fontWeight: 600, marginBottom: '4px', color: '#9a3412'}}>3. Recommended</p>
                <p style={{margin: 0, color: '#6b7280'}}>The school has recommended you for admission to JAMB. JAMB is now verifying your record.</p>
              </div>
              <div>
                <p style={{fontWeight: 600, marginBottom: '4px', color: '#16a34a'}}>4. Congratulations, You Have Been Offered Admission</p>
                <p style={{margin: 0, color: '#6b7280'}}>You have been successfully admitted! You must now 'Accept' or 'Reject' the offer.</p>
              </div>
            </div>
          </div>

          <section className="section">
            <h2>How to Accept Admission on JAMB CAPS</h2>
            <p>
              Once you see an admission offer, you have two options: <strong>Accept Admission</strong> or <strong>Reject Admission</strong>.
            </p>
            <p>
              If you are satisfied with the school and course, click 'Accept Admission'. This will update your status to 'Admitted' and allow you to print your <strong>JAMB Admission Letter</strong>.
            </p>
            <div className="warning-alert">
              <p style={{fontWeight: 600}}>Important Warning: If you do not accept your admission on CAPS within a certain timeframe, the system may automatically reject it, and you will lose the admission.</p>
            </div>
          </section>

          <section className="section">
            <h2>Checking Admission on School Portals</h2>
            <p>
              While JAMB CAPS is the final authority, many schools also release admission lists on their own official websites. For example, UNILAG, OAU, and UI have their own <strong>admission status</strong> checking portals.
            </p>
            <p>
              It is advisable to check both the school portal and JAMB CAPS. Sometimes, your name might appear on the school list before it reflects on CAPS.
            </p>
          </section>

          <section className="faq-section">
            <h2 style={{fontSize: '1.75rem', fontWeight: 700, marginBottom: '24px'}}>Common Admission Questions</h2>
            <div className="faq-item">
              <h3>What if my O'level is not showing on CAPS?</h3>
              <p>If your O'level result is not showing, visit any accredited JAMB CBT center and upload your result. Admission will not be processed for candidates with missing O'level data.</p>
            </div>
            <div className="faq-item">
              <h3>How many admission lists are released?</h3>
              <p>Schools typically release Merit lists (1st batch), followed by supplementary lists (2nd and 3rd batches), and sometimes VC lists.</p>
            </div>
            <div className="faq-item">
              <h3>What is transfer approval on CAPS?</h3>
              <p>If a school wants to admit you into a different course other than the one you applied for, they will send a 'Transfer Approval' request. You must accept this before they can offer you admission.</p>
            </div>
          </section>
        </article>

        <aside className="sidebar">
          <div className="sidebar-card" style={{background: '#fff7ed', borderColor: '#ea580c'}}>
            <h3 style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <Search size={20}/> Quick Checks
            </h3>
            <ul className="sidebar-links">
              <li><Link to="/check-jamb-result"><span>JAMB Portal Login</span><ArrowRight size={14}/></Link></li>
              <li><Link to="/cut-off-marks"><span>JAMB Cut-off Marks</span><ArrowRight size={14}/></Link></li>
              <li><Link to="/jamb"><span>JAMB 2026 News</span><ArrowRight size={14}/></Link></li>
            </ul>
          </div>

          <div className="ad-placeholder">Advertisement</div>
        </aside>
      </div>
    </div>
  );
};

export default AdmissionStatus;
