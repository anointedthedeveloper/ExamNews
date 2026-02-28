import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { GraduationCap, Calendar, Info, AlertCircle } from "lucide-react";

const PostUtme = () => {
  return (
    <div>
      <Helmet>
        <title>Post UTME 2026: Screening Dates & Registration | ExamNews</title>
        <meta name="description" content="Get the latest Post UTME 2026 screening dates, registration requirements, and exam schedules for Nigerian universities." />
        <link rel="canonical" href="https://examnews.work.gd/post-utme" />
      </Helmet>

      <section style={{background: '#7c3aed', color: '#ffffff', padding: '48px 20px', textAlign: 'center'}}>
        <div className="container">
          <h1 style={{color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap'}}>
            <GraduationCap size={36}/> Post UTME 2026
          </h1>
          <p style={{fontSize: '1.125rem', color: '#ede9fe'}}>University screening dates and registration guide</p>
        </div>
      </section>

      <div className="container" style={{padding: '40px 20px'}}>
        <div className="two-column-layout">
          <div className="main-content">
            <div className="card" style={{marginBottom: '32px'}}>
              <h2 style={{fontSize: '1.75rem', fontWeight: 600, marginBottom: '16px'}}>What is Post UTME?</h2>
              <p style={{marginBottom: '16px'}}>
                <strong>Post UTME</strong> (also called screening exercise) is an examination conducted by Nigerian universities to screen candidates who have chosen them as first choice and meet their JAMB cut-off mark requirements.
              </p>
              <p>
                Each university sets its own Post UTME date, registration fee, and examination format. Some universities conduct Computer-Based Tests (CBT), while others use written exams or oral interviews.
              </p>
            </div>

            <div className="info-alert" style={{background: '#faf5ff', borderColor: '#7c3aed', marginBottom: '32px'}}>
              <h3 style={{fontWeight: 600, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                <AlertCircle size={20} /> Important Notice
              </h3>
              <p style={{margin: 0}}>
                Post UTME registration typically starts after JAMB results are released. Universities announce their screening dates individually. Check your chosen university's website regularly for updates.
              </p>
            </div>

            <div className="card" style={{marginBottom: '32px'}}>
              <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>Post UTME Requirements</h2>
              <ul style={{marginLeft: '24px'}}>
                <li className="mb-2">Valid JAMB registration number</li>
                <li className="mb-2">JAMB score that meets the university's cut-off mark</li>
                <li className="mb-2">O'Level results (WAEC, NECO, or NABTEB)</li>
                <li className="mb-2">University chosen as first choice in JAMB</li>
                <li className="mb-2">Payment of screening fee (varies by university)</li>
                <li className="mb-2">Valid email address and phone number</li>
              </ul>
            </div>

            <div className="card" style={{marginBottom: '32px'}}>
              <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>How to Register for Post UTME</h2>
              <ol style={{marginLeft: '24px'}}>
                <li className="mb-2">
                  <strong>Visit your university's portal:</strong> Go to the official website of your chosen institution.
                </li>
                <li className="mb-2">
                  <strong>Create an account:</strong> Register with your JAMB number and personal details.
                </li>
                <li className="mb-2">
                  <strong>Pay the screening fee:</strong> Generate RRR and pay at any bank or use online payment.
                </li>
                <li className="mb-2">
                  <strong>Complete the form:</strong> Fill in all required information accurately.
                </li>
                <li className="mb-2">
                  <strong>Upload documents:</strong> Upload your O'Level results and passport photograph.
                </li>
                <li className="mb-2">
                  <strong>Print your slip:</strong> Print your screening slip with exam date and venue.
                </li>
              </ol>
            </div>

            <div className="faq-section">
              <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '24px'}}>Frequently Asked Questions</h2>
              <div className="faq-item">
                <h4 className="faq-question">Can I write Post UTME for multiple universities?</h4>
                <p className="faq-answer">Yes, but you must have chosen each university at some point during JAMB registration or change of course/institution.</p>
              </div>
              <div className="faq-item">
                <h4 className="faq-question">What happens if I miss Post UTME?</h4>
                <p className="faq-answer">Missing Post UTME means you cannot be considered for admission in that university for that academic session.</p>
              </div>
              <div className="faq-item">
                <h4 className="faq-question">Is Post UTME compulsory?</h4>
                <p className="faq-answer">Yes, most Nigerian universities require Post UTME screening before offering admission, though some may waive it based on high JAMB scores.</p>
              </div>
            </div>
          </div>

          <aside className="sidebar">
            <div className="card" style={{background: '#f9fafb', marginBottom: '24px'}}>
              <h3 style={{fontSize: '1.125rem', fontWeight: 600, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                <Calendar size={20} style={{color: '#7c3aed'}} /> Key Dates
              </h3>
              <div style={{fontSize: '0.875rem'}}>
                <div style={{padding: '8px 0', borderBottom: '1px solid #e5e7eb'}}>
                  <strong>JAMB Result:</strong> Usually May/June
                </div>
                <div style={{padding: '8px 0', borderBottom: '1px solid #e5e7eb'}}>
                  <strong>Post UTME:</strong> June - September
                </div>
                <div style={{padding: '8px 0'}}>
                  <strong>Admission List:</strong> August - November
                </div>
              </div>
            </div>

            <div className="card" style={{background: '#faf5ff'}}>
              <h3 style={{fontWeight: 600, marginBottom: '16px'}}>Related Pages</h3>
              <div style={{display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.875rem'}}>
                <Link to="/cut-off-marks" style={{color: '#0A3D91', textDecoration: 'none'}}>→ University Cut-Off Marks</Link>
                <Link to="/admission-status" style={{color: '#0A3D91', textDecoration: 'none'}}>→ Check Admission Status</Link>
                <Link to="/jamb" style={{color: '#0A3D91', textDecoration: 'none'}}>→ JAMB Registration</Link>
              </div>
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

export default PostUtme;
