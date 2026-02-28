import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Info, Calendar, ExternalLink } from "lucide-react";
import jambLogo from "../assets/jamb.png";
import "../styles/Components.css";

const Jamb = () => {
  return (
    <div>
      <Helmet>
        <title>JAMB 2026 Registration Date, Portal & Latest News - Exam News</title>
        <meta name="description" content="Get the latest JAMB 2026 registration updates. When is JAMB 2026 starting? JAMB portal login, syllabus, and how to reprint JAMB slip for UTME 2026." />
        <link rel="canonical" href="https://examnews.work.gd/jamb" />
      </Helmet>

      <section style={{background: '#16a34a', color: '#ffffff', padding: '48px 20px'}}>
        <div className="container">
          <div className="breadcrumb" style={{color: '#e0e7ff'}}>
            <Link to="/" style={{color: '#e0e7ff'}}>Home</Link>
            <span className="breadcrumb-separator">/</span>
            <span>JAMB</span>
          </div>
          <div style={{display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap'}}>
            <img src={jambLogo} alt="JAMB" style={{height: '100px', width: 'auto', background: '#ffffff', padding: '16px', borderRadius: '8px'}} />
            <div>
              <h1 style={{color: '#ffffff'}}>JAMB 2026 UTME Updates & Guides</h1>
              <p style={{fontSize: '1.125rem', color: '#e0e7ff'}}>Your authoritative source for JAMB registration, examination, and admission news.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="two-column-layout">
        <article className="content-area">
          <section className="section">
            <h2 className="section-title">JAMB 2026 Registration: All You Need to Know</h2>
            <p>
              The <strong>Joint Admissions and Matriculation Board (JAMB)</strong> is the body responsible for conducting the Unified Tertiary Matriculation Examination (UTME) for candidates seeking admission into tertiary institutions in Nigeria. For the 2026 session, early preparation is essential to ensure a smooth registration process and successful examination outcome.
            </p>
            <p>
              One of the most frequent questions we receive is: <strong>When is JAMB 2026 starting?</strong> Registration for the 2026 UTME officially started on <strong>January 26, 2026</strong> and will close on <strong>February 28, 2026</strong>. The examination is scheduled to hold from <strong>April 16-25, 2026</strong>.
            </p>
          </section>

          <div className="info-alert">
            <h3 style={{fontWeight: 600, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px'}}>
              <Info size={20} /> Important Requirements for JAMB 2026
            </h3>
            <ul style={{marginLeft: '20px', marginTop: '12px'}}>
              <li><strong>National Identification Number (NIN):</strong> Mandatory for all candidates.</li>
              <li><strong>Profile Code:</strong> Generated via SMS using your NIN.</li>
              <li><strong>E-pin:</strong> Purchased from designated banks or online platforms.</li>
              <li><strong>CBT Registration:</strong> Done only at accredited JAMB CBT centers.</li>
            </ul>
          </div>

          <section className="section">
            <h2>Step-by-Step Guide: How to Register for JAMB 2026</h2>
            <p>Registering for JAMB involves several steps that must be followed carefully to avoid errors in your personal or academic data.</p>
            <ol style={{marginLeft: '20px', marginBottom: '24px'}}>
              <li style={{marginBottom: '12px'}}>
                <strong>NIN Registration:</strong> Ensure your NIN details match your school records. If there's a discrepancy, visit a NIMC office to correct it before starting your JAMB registration.
              </li>
              <li style={{marginBottom: '12px'}}>
                <strong>Profile Creation:</strong> Send "NIN [your-nin-number]" to 55019 or 66019. You will receive a 10-character profile code.
              </li>
              <li style={{marginBottom: '12px'}}>
                <strong>Purchase E-Pin:</strong> Use your profile code to buy your registration e-pin from any participating bank or vendor.
              </li>
              <li style={{marginBottom: '12px'}}>
                <strong>Visit a CBT Center:</strong> Go to an <Link to="/jamb-centers" style={{color: '#0A3D91', textDecoration: 'underline'}}>accredited JAMB CBT center</Link> with your profile code and e-pin to complete your biometric capture and data entry. <a href="https://centres.jamb.gov.ng/public.php" target="_blank" rel="noopener noreferrer" style={{color: '#0A3D91', textDecoration: 'underline'}}>View official JAMB centers list</a>.
              </li>
            </ol>

            <div style={{marginTop: '32px', marginBottom: '24px'}}>
              <h3 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: '16px', color: '#1f2937'}}>Video Guide: JAMB Registration Step-by-Step</h3>
              <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000', borderRadius: '8px'}}>
                <iframe 
                  style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0}}
                  src="https://www.youtube.com/embed/iT1d1kqZGh4" 
                  title="A STEP BY STEP GUIDE" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
            </div>
          </section>

          <section className="section">
            <h2>The JAMB Portal Login and Its Functions</h2>
            <p>
              The <strong>JAMB portal login</strong> (efacility) is the hub for all candidate activities. Once you register, you can log in to perform various tasks:
            </p>
            <ul style={{marginLeft: '20px', marginBottom: '24px'}}>
              <li>Print your exam slip to know your date and center.</li>
              <li>Check your UTME result.</li>
              <li>Apply for data correction (name, date of birth, etc.).</li>
              <li>Check admission status via CAPS.</li>
              <li>Apply for change of course or institution.</li>
            </ul>
          </section>

          <section className="section">
            <h2>How to Reprint JAMB Slip 2026</h2>
            <p>
              The <strong>JAMB slip reprinting</strong> usually starts about 7 to 10 days before the exam date. This slip contains your examination date, time, and venue. To reprint your slip:
            </p>
            <ol style={{marginLeft: '20px'}}>
              <li>Visit the JAMB portal.</li>
              <li>Enter your registration number or phone number.</li>
              <li>Click on 'Print Examination Slip'.</li>
            </ol>
            <p>Ensure you print two copies: one for the invigilator and one for yourself.</p>
          </section>

          <section className="faq-section">
            <h2 style={{fontSize: '1.75rem', fontWeight: 700, marginBottom: '24px'}}>JAMB 2026 Frequently Asked Questions</h2>
            <div className="faq-item">
              <h3>Can I register JAMB with a phone number I used before?</h3>
              <p>JAMB advises candidates to use a unique phone number for their profile. Using a previously used number can sometimes lead to profile code retrieval issues.</p>
            </div>
            <div className="faq-item">
              <h3>Is JAMB 2026 hard?</h3>
              <p>JAMB is a standard exam. Success depends on your preparation and understanding of the JAMB syllabus. Use the official recommended novel and past questions.</p>
            </div>
            <div className="faq-item">
              <h3>When will JAMB results be out?</h3>
              <p>UTME results are usually released in batches between 2 to 7 days after the exam. You can <Link to="/check-jamb-result">check your JAMB result here</Link> once released.</p>
            </div>
          </section>
        </article>

        <aside className="sidebar">
          <div className="sidebar-card" style={{background: '#f0fdf4', borderColor: '#16a34a'}}>
            <h3>
              <Calendar size={20} style={{color: '#16a34a'}}/> Key Dates 2026
            </h3>
            <div style={{fontSize: '0.875rem'}}>
              <div style={{marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid #e5e7eb'}}>
                <p style={{fontWeight: 600, marginBottom: '4px', color: '#1f2937'}}>Registration Period</p>
                <p style={{color: '#16a34a', fontWeight: 600, margin: 0}}>January 26 - February 28, 2026</p>
                <p style={{color: '#dc2626', fontSize: '0.8125rem', marginTop: '4px', fontWeight: 600}}>Registration has ended</p>
              </div>
              <div style={{marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid #e5e7eb'}}>
                <p style={{fontWeight: 600, marginBottom: '4px', color: '#1f2937'}}>Examination Dates</p>
                <p style={{color: '#16a34a', fontWeight: 600, margin: 0}}>April 16-25, 2026</p>
              </div>
              <div>
                <p style={{fontWeight: 600, marginBottom: '4px', color: '#1f2937'}}>Registration Fee</p>
                <p style={{color: '#16a34a', fontWeight: 600, margin: 0}}>₦7,200 (without mock)</p>
                <p style={{color: '#16a34a', fontWeight: 600, margin: 0}}>₦8,700 (with mock)</p>
                <p style={{color: '#6b7280', fontSize: '0.75rem', marginTop: '4px', fontStyle: 'italic'}}>*Prices may differ by center</p>
              </div>
            </div>
          </div>

          <div className="sidebar-card">
            <h3>Quick Links</h3>
            <ul className="sidebar-links">
              <li><Link to="/check-jamb-result"><span>Check Result</span><ExternalLink size={14}/></Link></li>
              <li><Link to="/admission-status"><span>Admission Status</span><ExternalLink size={14}/></Link></li>
              <li><Link to="/cut-off-marks"><span>Cut-off Marks</span><ExternalLink size={14}/></Link></li>
              <li><Link to="/jamb-centers"><span>CBT Centers</span><ExternalLink size={14}/></Link></li>
              <li><Link to="/jamb-brochure"><span>Institution Brochure</span><ExternalLink size={14}/></Link></li>
            </ul>
          </div>

          <div className="ad-placeholder">Advertisement</div>
        </aside>
      </div>
    </div>
  );
};

export default Jamb;
