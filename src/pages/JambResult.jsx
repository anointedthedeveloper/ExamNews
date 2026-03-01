import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Info, Search, ExternalLink, AlertCircle, CheckCircle } from "lucide-react";
import "../styles/Components.css";

const JambResult = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can I check my JAMB result online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Visit the official JAMB result checking portal and enter your registration number or phone number."
        }
      },
      {
        "@type": "Question",
        "name": "Can I check my JAMB result via SMS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, send 'RESULT' to 55019 or 66019 using the phone number you used for registration."
        }
      }
    ]
  };

  return (
    <div>
      <Helmet>
        <title>Check JAMB Result 2026 Online & via SMS - Exam News</title>
        <meta name="description" content="Step-by-step guide to checking your JAMB result for 2026. How to check JAMB result via SMS, online portal, and download JAMB result slip for 2026/2027." />
        <meta name="keywords" content="check JAMB result, JAMB result portal, JAMB result via SMS, how to check JAMB result 2026, JAMB portal login" />
        <link rel="canonical" href="https://examnews.work.gd/check-jamb-result" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section style={{background: '#16a34a', color: '#ffffff', padding: '48px 20px', textAlign: 'center'}}>
        <div className="container">
          <h1 style={{color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap'}}>
            <Search size={36}/> Check JAMB Result 2026
          </h1>
          <p style={{fontSize: '1.125rem', color: '#dcfce7'}}>Quick and easy guide to checking and printing your JAMB UTME score</p>
        </div>
      </section>

      <div className="container" style={{padding: '40px 20px'}}>
        <div className="two-column-layout">
          <div className="main-content">
            <div className="card" style={{marginBottom: '32px', background: '#eff6ff', borderColor: '#0A3D91'}}>
              <h3 style={{fontWeight: 600, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                <ExternalLink size={20} /> Official JAMB Portal
              </h3>
              <p style={{marginBottom: '12px'}}>Access the official JAMB e-Facility portal:</p>
              <a 
                href="https://efacility.jamb.gov.ng/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn"
                style={{display: 'inline-flex', alignItems: 'center', gap: '8px'}}
              >
                Go to JAMB Portal <ExternalLink size={16} />
              </a>
            </div>

            <div className="card" style={{marginBottom: '32px', background: '#eff6ff', borderColor: '#0A3D91'}}>
              <h3 style={{fontWeight: 600, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                <ExternalLink size={20} /> Check JAMB Result
              </h3>
              <p style={{marginBottom: '12px'}}>Check your JAMB result here:</p>
              <a 
                href="https://slipsprinting.jamb.gov.ng/CheckUTMEResults" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn"
                style={{display: 'inline-flex', alignItems: 'center', gap: '8px'}}
              >
                Check Result <ExternalLink size={16} />
              </a>
            </div>
            <div className="card" style={{marginBottom: '32px'}}>
              <h2 style={{fontSize: '1.75rem', fontWeight: 600, marginBottom: '16px'}}>Check JAMB Result 2026 Online</h2>
              <p style={{marginBottom: '16px'}}>
                Checking your <strong>JAMB result</strong> is the first step toward university admission after the UTME exam. JAMB has made the process very simple, allowing candidates to check their results online or via text message.
              </p>
              <p style={{marginBottom: '16px'}}>
                To check your result online on the <strong>JAMB result portal</strong>, follow these steps:
              </p>
              <ol style={{marginLeft: '24px', marginBottom: '16px'}}>
                <li style={{marginBottom: '12px'}}>
                  <strong>Visit the Portal:</strong> Go to the official JAMB result checking portal at <code style={{background: '#f3f4f6', padding: '2px 6px', borderRadius: '4px'}}>slipsprinting.jamb.gov.ng/CheckUTMEResults</code>.
                </li>
                <li style={{marginBottom: '12px'}}>
                  <strong>Enter Details:</strong> Provide your JAMB Registration Number or the phone number you used during registration.
                </li>
                <li style={{marginBottom: '12px'}}>
                  <strong>Submit:</strong> Click on 'Check My Results'.
                </li>
                <li style={{marginBottom: '12px'}}>
                  <strong>View Result:</strong> Your result, including scores for all four subjects, will be displayed on the screen.
                </li>
              </ol>
            </div>

            <div className="info-alert" style={{marginBottom: '32px'}}>
              <h3 style={{fontWeight: 600, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                <Info size={20} /> Check JAMB Result via SMS
              </h3>
              <p style={{marginBottom: '12px'}}>You can also check your result without an internet connection using your mobile phone.</p>
              <div style={{marginBottom: '12px'}}>
                <p style={{fontWeight: 600, marginBottom: '4px'}}>Step 1:</p>
                <p style={{marginBottom: '12px'}}>Compose a new SMS on your phone.</p>
                <p style={{fontWeight: 600, marginBottom: '4px'}}>Step 2:</p>
                <p style={{marginBottom: '12px'}}>Type 'RESULT' (all in capital letters).</p>
                <p style={{fontWeight: 600, marginBottom: '4px'}}>Step 3:</p>
                <p>Send the SMS to <strong>55019</strong> or <strong>66019</strong>.</p>
              </div>
              <p style={{fontSize: '0.875rem', fontStyle: 'italic', color: '#6b7280'}}>Note: You must use the phone number you registered with JAMB. Standard network charges apply.</p>
            </div>

            <div className="card" style={{marginBottom: '32px'}}>
              <h2 style={{fontSize: '1.75rem', fontWeight: 600, marginBottom: '16px'}}>Printing Your Original JAMB Result Slip</h2>
              <p style={{marginBottom: '16px'}}>
                The result you see online is a temporary notification. For official purposes like Post-UTME screening and physical clearance, you will need an <strong>Original JAMB Result Slip</strong>.
              </p>
              <p style={{marginBottom: '16px'}}>
                This slip contains your passport photograph and more detailed information. To get it, you must log in to your <strong>JAMB portal login</strong> and pay a fee of ₦1,500 via Remita.
              </p>
              <ol style={{marginLeft: '24px'}}>
                <li style={{marginBottom: '8px'}}>Log in to your JAMB profile.</li>
                <li style={{marginBottom: '8px'}}>Click on 'Print Result Slip' under the menu.</li>
                <li style={{marginBottom: '8px'}}>Complete the payment process.</li>
                <li style={{marginBottom: '8px'}}>Download and print the PDF.</li>
              </ol>
            </div>

            <div className="card" style={{marginBottom: '32px'}}>
              <h2 style={{fontSize: '1.75rem', fontWeight: 600, marginBottom: '16px'}}>Common Issues and Solutions</h2>
              <div style={{marginBottom: '16px', padding: '16px', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '8px'}}>
                <h4 style={{fontWeight: 600, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <AlertCircle size={18} /> "No Result Yet" Message
                </h4>
                <p style={{margin: 0, fontSize: '0.9375rem'}}>JAMB releases results in batches. If you don't see yours immediately, wait for 24-48 hours and check again. Some results may also be withheld for investigation.</p>
              </div>
              <div style={{padding: '16px', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '8px'}}>
                <h4 style={{fontWeight: 600, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <AlertCircle size={18} /> Error Sending SMS
                </h4>
                <p style={{margin: 0, fontSize: '0.9375rem'}}>Ensure you have at least ₦50 airtime on your phone. Also, make sure you are sending from the correct SIM card.</p>
              </div>
            </div>

            <div className="card" style={{marginBottom: '32px'}}>
              <h2 style={{fontSize: '1.75rem', fontWeight: 600, marginBottom: '16px'}}>JAMB Result FAQs</h2>
              <div style={{marginBottom: '16px'}}>
                <h4 style={{fontWeight: 600, marginBottom: '8px'}}>When is JAMB 2026 result coming out?</h4>
                <p style={{margin: 0}}>Results are typically released 2-5 days after you write your exam. Stay tuned to Exam News for the exact release date.</p>
              </div>
              <div style={{marginBottom: '16px'}}>
                <h4 style={{fontWeight: 600, marginBottom: '8px'}}>What is a good JAMB score?</h4>
                <p style={{margin: 0}}>A score of 250 and above is considered very good and can get you into top universities for most courses. 200 and above is generally acceptable for many state and federal institutions.</p>
              </div>
              <div>
                <h4 style={{fontWeight: 600, marginBottom: '8px'}}>Can I upgrade my JAMB result?</h4>
                <p style={{margin: 0, color: '#dc2626', fontWeight: 600}}>NO! Do not fall for scams. JAMB results cannot be upgraded after the exam. Any such claim is a fraudulent attempt to steal your money.</p>
              </div>
            </div>
          </div>

          <aside className="sidebar">
            <div className="sidebar-card" style={{background: '#eff6ff', borderColor: '#0A3D91'}}>
              <h3 style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <CheckCircle size={20}/> Quick Links
              </h3>
              <ul className="sidebar-links">
                <li><Link to="/admission-status"><span>Check Admission Status</span><ExternalLink size={14}/></Link></li>
                <li><Link to="/cut-off-marks"><span>JAMB Cut-off Marks</span><ExternalLink size={14}/></Link></li>
                <li><Link to="/jamb"><span>JAMB 2026 News</span><ExternalLink size={14}/></Link></li>
                <li><Link to="/jamb-centers"><span>Search CBT Centers</span><ExternalLink size={14}/></Link></li>
              </ul>
            </div>

            <div className="sidebar-card">
              <h3>Result Checking Info</h3>
              <div style={{fontSize: '0.875rem'}}>
                <p style={{marginBottom: '8px'}}><strong>Portal:</strong> slipsprinting.jamb.gov.ng</p>
                <p style={{marginBottom: '8px'}}><strong>SMS Code:</strong> 55019 or 66019</p>
                <p style={{margin: 0}}><strong>Price:</strong> Free (Online) / ₦50 (SMS)</p>
              </div>
            </div>
          </aside>
        </div>

        <div className="card" style={{marginTop: '32px', textAlign: 'center', background: '#f0fdf4', borderColor: '#16a34a'}}>
          <h2 style={{fontSize: '1.75rem', fontWeight: 600, marginBottom: '16px'}}>What to Do After Checking Your Result</h2>
          <p style={{marginBottom: '24px'}}>
            Once you have seen your score, the next step is to check if it meets the <strong>university cut off marks Nigeria</strong> for your school of choice. If your score is high, start preparing for Post-UTME. If it's low, you may consider a "Change of Institution" to a school with lower requirements.
          </p>
          <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link to="/cut-off-marks" className="btn">Check Cut-off Marks</Link>
            <Link to="/admission-status" className="btn btn-secondary">Check Admission Status</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JambResult;