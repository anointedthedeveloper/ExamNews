import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen, Search, Calendar, ChevronRight } from "lucide-react";
import "../styles/Home.css";

const Home = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When is the JAMB 2026 registration starting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "JAMB 2026 registration started on January 26, 2026 and closes on February 28, 2026. The exam will be held from April 16-25, 2026."
        }
      },
      {
        "@type": "Question",
        "name": "How can I check my JAMB result for 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can check your JAMB result on the official JAMB portal or via SMS. Visit our guide for step-by-step instructions."
        }
      }
    ]
  };

  return (
    <div>
      <Helmet>
        <title>Exam News Nigeria - Latest JAMB, WAEC, NECO & Admission Updates 2026</title>
        <meta name="description" content="Stay updated with the latest exam news in Nigeria. Get info on JAMB 2026 registration date, WAEC timetable, NECO updates, and university cut-off marks for 2026/2027." />
        <link rel="canonical" href="https://examnews.work.gd/" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="hero">
        <div className="hero-container">
          <h1>Latest Exam News & Admission Updates 2026</h1>
          <p>Your one-stop destination for JAMB, WAEC, NECO, and Post-UTME guides for Nigerian students.</p>
          <div className="hero-buttons">
            <Link to="/jamb" className="btn">JAMB Updates</Link>
            <Link to="/waec" className="btn btn-secondary">WAEC Timetable</Link>
          </div>
        </div>
      </section>

      <div className="ad-placeholder">Advertisement</div>

      <div className="main-content">
        <article className="content-area">
          <section className="section">
            <h2 className="section-title">Welcome to Exam News Nigeria</h2>
            <p>
              Navigating the Nigerian educational landscape can be challenging for many students. From registration deadlines to result checking and admission tracking, staying informed is the key to success. At <strong>Exam News</strong>, we provide accurate, authoritative, and timely information to help you stay ahead in your academic journey.
            </p>
            <p>
              Whether you are preparing for the Unified Tertiary Matriculation Examination (UTME) conducted by the <strong>Joint Admissions and Matriculation Board (JAMB)</strong>, or the Senior School Certificate Examination (SSCE) organized by <strong>WAEC</strong> and <strong>NECO</strong>, we have you covered.
            </p>
          </section>

          <section className="section">
            <h2 className="section-title">JAMB 2026 Registration & News</h2>
            <div className="info-box">
              <p><Search size={18} style={{display: 'inline', marginRight: '8px'}} />Quick Info: JAMB 2026 registration - <strong>January 26 - February 28, 2026</strong> | Exam dates: <strong>April 16-25, 2026</strong></p>
            </div>
            <p>
              The JAMB UTME is the primary gateway for students seeking admission into universities, polytechnics, and colleges of education in Nigeria. Registration for the 2026 UTME officially started on <strong>January 26, 2026</strong> and will close on <strong>February 28, 2026</strong>.
            </p>
            <p>
              The examination is scheduled to hold from <strong>April 16-25, 2026</strong>. Candidates must have their <strong>National Identification Number (NIN)</strong> ready, as it is a mandatory requirement for JAMB profile creation. Registration fee is <strong>₦3,500</strong> plus reading text and center charges.
            </p>
            <ul style={{marginLeft: '20px', marginBottom: '24px'}}>
              <li>Visit the <strong>JAMB portal login</strong> to create your profile early.</li>
              <li>Ensure you choose the correct subject combinations for your desired course.</li>
              <li>Stay updated on <Link to="/jamb-centers">JAMB centers</Link> to know where to register and sit for the exam.</li>
              <li>Learn <Link to="/check-jamb-result">how to reprint JAMB slip</Link> to get your exam center and date.</li>
            </ul>
          </section>

          <section className="section">
            <h2 className="section-title">WAEC & NECO 2026 Updates</h2>
            <p>
              The West African Examinations Council (WAEC) and the National Examinations Council (NECO) play pivotal roles in secondary education in Nigeria. <strong>WAEC GCE 2026 (1st Series)</strong> runs from January 28 - February 14, 2026 (CBT mode, registration closed January 27). <strong>NECO Internal</strong> is scheduled for June 16 - July 25, 2025, while <strong>NECO External</strong> holds November 26 - December 13, 2025.
            </p>
            <div className="grid-2">
              <div className="card">
                <h3 className="card-title"><BookOpen size={20} style={{display: 'inline', marginRight: '8px'}} />WAEC 2026</h3>
                <p className="card-text">Download the official timetable and get latest exam tips.</p>
                <Link to="/waec-timetable-2026">View Timetable →</Link>
              </div>
              <div className="card">
                <h3 className="card-title"><Calendar size={20} style={{display: 'inline', marginRight: '8px'}} />NECO 2026</h3>
                <p className="card-text">Stay informed about NECO registration deadlines and exam dates.</p>
                <Link to="/neco">Check NECO News →</Link>
              </div>
            </div>
          </section>

          <div className="ad-placeholder">Advertisement</div>

          <section className="section">
            <h2 className="section-title">University Cut Off Marks 2026/2027</h2>
            <p>
              The <strong>university cut off marks Nigeria</strong> for the 2026/2027 session will be determined by both JAMB and individual institutions. Top universities like UNILAG, OAU, UI, and UNIBEN often have competitive cut-off marks.
            </p>
            <div className="card">
              <h4 style={{fontWeight: 600, marginBottom: '16px'}}>Expected University Cut-Off Marks 2026</h4>
              <table style={{width: '100%', borderCollapse: 'collapse'}}>
                <tbody>
                  <tr style={{borderBottom: '1px solid #e5e7eb'}}>
                    <td style={{padding: '12px 0'}}>UNILAG</td>
                    <td style={{padding: '12px 0', textAlign: 'right', fontWeight: 600, color: '#0A3D91'}}>200+</td>
                  </tr>
                  <tr style={{borderBottom: '1px solid #e5e7eb'}}>
                    <td style={{padding: '12px 0'}}>OAU</td>
                    <td style={{padding: '12px 0', textAlign: 'right', fontWeight: 600, color: '#0A3D91'}}>200+</td>
                  </tr>
                  <tr style={{borderBottom: '1px solid #e5e7eb'}}>
                    <td style={{padding: '12px 0'}}>UI</td>
                    <td style={{padding: '12px 0', textAlign: 'right', fontWeight: 600, color: '#0A3D91'}}>200+</td>
                  </tr>
                  <tr>
                    <td style={{padding: '12px 0'}}>UNIBEN</td>
                    <td style={{padding: '12px 0', textAlign: 'right', fontWeight: 600, color: '#0A3D91'}}>200+</td>
                  </tr>
                </tbody>
              </table>
              <p style={{marginTop: '16px', fontSize: '0.875rem', color: '#6b7280', fontStyle: 'italic'}}>Note: Individual course cut-offs (merit list) are usually much higher.</p>
            </div>
          </section>

          <section className="faq-section">
            <h2 style={{fontSize: '1.75rem', fontWeight: 700, marginBottom: '24px'}}>
              <BookOpen size={24} style={{display: 'inline', marginRight: '8px'}} />Frequently Asked Questions
            </h2>
            <div className="faq-item">
              <h3>How do I check my JAMB result?</h3>
              <p>You can <Link to="/check-jamb-result">check JAMB result</Link> by visiting the official portal or sending a specific code to 55019 or 66019 using your registered SIM card.</p>
            </div>
            <div className="faq-item">
              <h3>Where can I find JAMB centers in my state?</h3>
              <p>We have a comprehensive list of <Link to="/jamb-centers">JAMB centers</Link> for every state in Nigeria. Register only at approved CBT centers to avoid errors.</p>
            </div>
            <div className="faq-item">
              <h3>What is Post UTME?</h3>
              <p>Post UTME is an entrance screening conducted by individual universities after the JAMB exam. You must stay tuned for <strong>post UTME updates</strong> to know when your school of choice releases its form.</p>
            </div>
          </section>
        </article>

        <aside className="sidebar">
          <div className="ad-placeholder">Advertisement</div>

          <div className="sidebar-card">
            <h3>Quick Links</h3>
            <ul className="sidebar-links">
              <li>
                <Link to="/cut-off-marks">
                  <span>General Cut-off Marks</span>
                  <ChevronRight size={16} />
                </Link>
              </li>
              <li>
                <Link to="/admission-status">
                  <span>Check Admission Status</span>
                  <ChevronRight size={16} />
                </Link>
              </li>
              <li>
                <Link to="/check-jamb-result">
                  <span>JAMB Portal Login</span>
                  <ChevronRight size={16} />
                </Link>
              </li>
            </ul>
          </div>

          <div className="cta-box">
            <h3>JAMB Centers</h3>
            <p>Locate official CBT centers for registration and examinations across all Nigerian states.</p>
            <Link to="/jamb-centers" className="btn">Find a Center</Link>
          </div>

          <div className="ad-placeholder">Advertisement</div>
        </aside>
      </div>

      <section className="content-section">
        <div className="content-section-inner">
          <h2>Deep Dive: Navigating Exam Success in Nigeria</h2>
          <p>
            Education is the backbone of development in any nation, and Nigeria is no exception. However, the path to obtaining a degree or certificate involves clearing several hurdles. These hurdles are the various examinations that serve as standardized tests for students at different levels.
          </p>
          <p>
            The most prominent among these is the <strong>JAMB UTME</strong>. Since its inception, JAMB has undergone several transformations, moving from paper-pencil tests (PPT) to computer-based tests (CBT). This shift was aimed at reducing exam malpractice and improving the speed of result delivery.
          </p>
          <h3>The Role of NIN in JAMB Registration</h3>
          <p>
            One of the biggest changes in recent years is the integration of the <strong>National Identification Number (NIN)</strong> with the JAMB profile. This policy was introduced to curb identity theft and multiple registrations. Every candidate for JAMB 2026 must have a valid NIN issued by the National Identity Management Commission (NIMC).
          </p>
          <h3>WAEC 2026: What to Expect</h3>
          <p>
            The West African Senior School Certificate Examination (WASSCE) is recognized globally. A "credit" in at least five subjects, including English Language and Mathematics, is the standard requirement for university admission in Nigeria. The <strong>WAEC 2026 timetable</strong> will typically start in May/June for internal candidates and August/September for external candidates (private).
          </p>
          <h3>Understanding Admission Status and CAPS</h3>
          <p>
            After the exams comes the admission process. The Central Admissions Processing System (CAPS) is JAMB's platform for managing admissions. Candidates must regularly <strong>check admission status</strong> on their JAMB portal. If offered admission, you must either "Accept" or "Reject" the offer on CAPS.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
