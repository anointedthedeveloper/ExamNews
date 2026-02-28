import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { UserPlus, CreditCard, MapPin, FileCheck, AlertCircle } from "lucide-react";
import jambLogo from "../assets/jamb.png";

const JambRegistration = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I get my JAMB profile code?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Text your NIN to 55019 or 66019 (e.g., NIN 12345678901). You will receive your profile code via SMS."
        }
      },
      {
        "@type": "Question",
        "name": "How much is the JAMB 2026 registration form?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The registration form is expected to be ₦6,200. If you choose to take the optional mock exam, you will pay an additional ₦1,500, plus a ₦700 service charge at the CBT centre."
        }
      }
    ]
  };

  return (
    <div>
      <Helmet>
        <title>JAMB 2026 Registration: Step-by-Step Guide, Fees & Requirements | Exam News</title>
        <meta name="description" content="Complete step-by-step guide for JAMB 2026 registration. Learn about the requirements, NIN, profile code, ePIN purchase, and how to register at CBT centres." />
        <meta name="keywords" content="JAMB registration 2026, how to register for JAMB, JAMB requirements, JAMB ePIN, JAMB profile code, NIN for JAMB" />
        <link rel="canonical" href="https://examnews.work.gd/jamb-registration" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section style={{background: '#16a34a', color: '#ffffff', padding: '48px 20px', textAlign: 'center'}}>
        <div className="container">
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}>
            <div style={{background: '#ffffff', padding: '12px', borderRadius: '8px'}}>
              <img src={jambLogo} alt="JAMB Logo" style={{height: '100px', display: 'block'}} />
            </div>
          </div>
          <h1 style={{color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap'}}>
            <UserPlus size={36}/> JAMB 2026 Registration Guide
          </h1>
          <p style={{fontSize: '1.125rem', color: '#dcfce7'}}>Complete step-by-step guide to register for UTME 2026</p>
        </div>
      </section>

      <div className="container" style={{padding: '40px 20px'}}>
        <div className="two-column-layout">
          <div className="main-content">
            <div className="info-alert" style={{marginBottom: '32px'}}>
              <h3 style={{fontWeight: 600, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                <AlertCircle size={20} /> Registration Period
              </h3>
              <p style={{margin: 0}}>
                JAMB 2026 registration is open from <strong>Monday, 26th January 2026</strong> to <strong>Saturday, 28th February 2026</strong>. Don't miss the deadline!
              </p>
            </div>

            <div className="card" style={{marginBottom: '32px'}}>
              <h2 style={{fontSize: '1.75rem', fontWeight: 600, marginBottom: '16px'}}>JAMB 2026 Registration Requirements</h2>
              <p style={{marginBottom: '16px'}}>Before you begin, ensure you have the following:</p>
              <ul style={{marginLeft: '24px'}}>
                <li className="mb-2">A valid National Identification Number (NIN)</li>
                <li className="mb-2">A personal phone number and email address</li>
                <li className="mb-2">Your O'Level results (or awaiting result status)</li>
                <li className="mb-2">Your choice of institutions and courses</li>
                <li className="mb-2">Registration fee of ₦6,200 (plus optional ₦1,500 for mock exam)</li>
              </ul>
            </div>

            <div className="card" style={{marginBottom: '32px'}}>
              <h2 style={{fontSize: '1.75rem', fontWeight: 600, marginBottom: '24px'}}>Step-by-Step Registration Process</h2>
              
              <div style={{marginBottom: '32px'}}>
                <div style={{display: 'flex', gap: '16px', marginBottom: '16px'}}>
                  <div style={{background: '#16a34a', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0}}>1</div>
                  <div>
                    <h3 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: '8px'}}>Generate Your JAMB Profile Code</h3>
                    <p style={{marginBottom: '8px'}}>To get started, send your NIN via SMS to either <strong>55019</strong> or <strong>66019</strong>.</p>
                    <p style={{background: '#f0fdf4', padding: '12px', borderRadius: '8px', fontFamily: 'monospace'}}>
                      Example: NIN 12345678901
                    </p>
                    <p style={{marginTop: '8px'}}>You will receive a profile code (e.g., 123456) via SMS. Keep this code safe.</p>
                  </div>
                </div>
              </div>

              <div style={{marginBottom: '32px'}}>
                <div style={{display: 'flex', gap: '16px', marginBottom: '16px'}}>
                  <div style={{background: '#16a34a', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0}}>2</div>
                  <div>
                    <h3 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                      <CreditCard size={20} /> Purchase JAMB ePIN
                    </h3>
                    <p style={{marginBottom: '8px'}}>Purchase your JAMB ePIN from:</p>
                    <ul style={{marginLeft: '24px'}}>
                      <li>Approved banks (UBA, Access, Zenith, etc.)</li>
                      <li>POS agents</li>
                      <li>Online payment platforms</li>
                    </ul>
                    <p style={{marginTop: '8px'}}>The ePIN will be sent to your phone via SMS. Total cost is approximately <strong>₦6,200</strong>, with an optional <strong>₦1,500</strong> for the mock exam.</p>
                  </div>
                </div>
              </div>

              <div style={{marginBottom: '32px'}}>
                <div style={{display: 'flex', gap: '16px', marginBottom: '16px'}}>
                  <div style={{background: '#16a34a', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0}}>3</div>
                  <div>
                    <h3 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                      <MapPin size={20} /> Visit an Accredited CBT Centre
                    </h3>
                    <p style={{marginBottom: '8px'}}>Visit any JAMB-accredited CBT centre with your:</p>
                    <ul style={{marginLeft: '24px'}}>
                      <li>Profile code</li>
                      <li>ePIN</li>
                      <li>NIN</li>
                    </ul>
                    <p style={{marginTop: '8px', color: '#dc2626', fontWeight: 600}}>⚠️ Do not register at cyber cafes or unapproved centres!</p>
                    <Link to="/jamb-centers" style={{color: '#0A3D91', textDecoration: 'underline', display: 'inline-block', marginTop: '8px'}}>
                      Find JAMB centres near you →
                    </Link>
                  </div>
                </div>
              </div>

              <div style={{marginBottom: '32px'}}>
                <div style={{display: 'flex', gap: '16px', marginBottom: '16px'}}>
                  <div style={{background: '#16a34a', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0}}>4</div>
                  <div>
                    <h3 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: '8px'}}>Fill the Registration Form</h3>
                    <p style={{marginBottom: '8px'}}>At the centre, you will:</p>
                    <ul style={{marginLeft: '24px'}}>
                      <li>Have your biometrics and photograph taken</li>
                      <li>Provide accurate personal details</li>
                      <li>Choose your preferred institutions and courses (up to four)</li>
                      <li>Select your UTME subjects</li>
                      <li>Input your O'Level results</li>
                    </ul>
                    <p style={{marginTop: '8px', fontWeight: 600}}>Verify all details carefully before submission!</p>
                  </div>
                </div>
              </div>

              <div>
                <div style={{display: 'flex', gap: '16px'}}>
                  <div style={{background: '#16a34a', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0}}>5</div>
                  <div>
                    <h3 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                      <FileCheck size={20} /> Collect Your Registration Slip
                    </h3>
                    <p>After successful submission, collect your JAMB 2026 registration slip from the CBT centre. This is a crucial document for your exam and admission process.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="faq-section">
              <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '24px'}}>Frequently Asked Questions</h2>
              <div className="faq-item">
                <h4 className="faq-question">How do I get my JAMB profile code?</h4>
                <p className="faq-answer">Text your NIN to 55019 or 66019 (e.g., NIN 12345678901). You will receive your profile code via SMS.</p>
              </div>
              <div className="faq-item">
                <h4 className="faq-question">How much is the JAMB 2026 registration form?</h4>
                <p className="faq-answer">The registration form is expected to be ₦6,200. If you choose to take the optional mock exam, you will pay an additional ₦1,500, plus a ₦700 service charge at the CBT centre.</p>
              </div>
              <div className="faq-item">
                <h4 className="faq-question">Can I use last year's ePIN for JAMB 2026?</h4>
                <p className="faq-answer">No. You must purchase a new ePIN for the 2026 registration cycle, as each ePIN is unique to a specific year.</p>
              </div>
              <div className="faq-item">
                <h4 className="faq-question">Where can I register for JAMB?</h4>
                <p className="faq-answer">You can only register at JAMB-accredited CBT centres across Nigeria. A list is available on the official JAMB portal.</p>
              </div>
              <div className="faq-item">
                <h4 className="faq-question">Is the JAMB mock exam compulsory?</h4>
                <p className="faq-answer">No, the mock exam is optional. However, it is highly recommended as it helps candidates familiarize themselves with the CBT environment.</p>
              </div>
              <div className="faq-item">
                <h4 className="faq-question">I made a mistake on my registration. Can I correct it?</h4>
                <p className="faq-answer">Yes, JAMB usually allows a window for data correction after registration closes. You can apply for corrections on the JAMB portal for a fee.</p>
              </div>
            </div>
          </div>

          <aside className="sidebar">
            <div className="card" style={{background: '#f0fdf4', marginBottom: '24px'}}>
              <h3 style={{fontSize: '1.125rem', fontWeight: 600, marginBottom: '16px'}}>Quick Links</h3>
              <div style={{display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.875rem'}}>
                <a href="https://www.jamb.gov.ng" target="_blank" rel="noopener noreferrer" style={{color: '#0A3D91', textDecoration: 'none'}}>→ Official JAMB Portal</a>
                <Link to="/jamb-centers" style={{color: '#0A3D91', textDecoration: 'none'}}>→ Find CBT Centres</Link>
                <Link to="/jamb-syllabus" style={{color: '#0A3D91', textDecoration: 'none'}}>→ Download Syllabus</Link>
                <Link to="/check-jamb-result" style={{color: '#0A3D91', textDecoration: 'none'}}>→ Check Result</Link>
              </div>
            </div>

            <div className="card" style={{background: '#fef3c7'}}>
              <h3 style={{fontWeight: 600, marginBottom: '12px'}}>⚠️ Important Tips</h3>
              <ul style={{fontSize: '0.875rem', marginLeft: '20px'}}>
                <li className="mb-2">Register early to avoid last-minute rush</li>
                <li className="mb-2">Double-check all information before submission</li>
                <li className="mb-2">Keep your registration slip safe</li>
                <li className="mb-2">Only use accredited CBT centres</li>
              </ul>
            </div>

            <div className="ad-placeholder">
              <p>Advertisement</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default JambRegistration;
