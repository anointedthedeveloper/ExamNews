import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen, Download, Info, FileText } from "lucide-react";
import jambLogo from "../assets/jamb.png";

const JambSyllabus = () => {
  const subjects = [
    "English Language", "Mathematics", "Physics", "Chemistry", "Biology",
    "Economics", "Commerce", "Accounting", "Government", "Literature in English",
    "Christian Religious Studies", "Islamic Studies", "Geography", "History"
  ];

  return (
    <div>
      <Helmet>
        <title>JAMB Syllabus 2026 PDF Download - All Subjects | ExamNews</title>
        <meta name="description" content="Download JAMB 2026 syllabus PDF for all subjects. Get the official UTME syllabus to guide your exam preparation." />
        <link rel="canonical" href="https://examnews.work.gd/jamb-syllabus" />
      </Helmet>

      <section style={{background: '#16a34a', color: '#ffffff', padding: '48px 20px', textAlign: 'center'}}>
        <div className="container">
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}>
            <div style={{background: '#ffffff', padding: '12px', borderRadius: '8px'}}>
              <img src={jambLogo} alt="JAMB Logo" style={{height: '100px', display: 'block'}} />
            </div>
          </div>
          <h1 style={{color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap'}}>
            <BookOpen size={36}/> JAMB Syllabus 2026
          </h1>
          <p style={{fontSize: '1.125rem', color: '#dcfce7'}}>Official UTME syllabus for all subjects</p>
        </div>
      </section>

      <div className="container" style={{padding: '40px 20px'}}>
        <div className="two-column-layout">
          <div className="main-content">
            <div className="card" style={{marginBottom: '32px'}}>
              <h2 style={{fontSize: '1.75rem', fontWeight: 600, marginBottom: '16px'}}>JAMB 2026 Syllabus Download</h2>
              <p style={{marginBottom: '16px'}}>
                The <strong>JAMB syllabus</strong> is the official guide that outlines all topics you need to study for each subject in the UTME examination. Using the syllabus ensures you focus on relevant topics and don't waste time on irrelevant materials.
              </p>
              <p>
                Download the JAMB 2026 syllabus PDF for your subjects below and use it to guide your preparation.
              </p>
            </div>

            <div className="info-alert" style={{marginBottom: '32px'}}>
              <h3 style={{fontWeight: 600, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                <Download size={20} /> Download All Subjects
              </h3>
              <p style={{marginBottom: '16px'}}>Get the complete JAMB syllabus for all subjects in one PDF file.</p>
              <a href="https://www.jamb.gov.ng/Syllabus" target="_blank" rel="noopener noreferrer" className="btn">
                Download from JAMB Official Website
              </a>
            </div>

            <div className="card" style={{marginBottom: '32px'}}>
              <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>Available Subjects</h2>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px'}}>
                {subjects.map((subject, index) => (
                  <div key={index} style={{padding: '12px', background: '#f0fdf4', border: '1px solid #16a34a', borderRadius: '8px', fontSize: '0.875rem', fontWeight: 500}}>
                    <FileText size={16} style={{display: 'inline', marginRight: '8px', color: '#16a34a'}} />
                    {subject}
                  </div>
                ))}
              </div>
            </div>

            <div className="card" style={{marginBottom: '32px'}}>
              <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>How to Use the JAMB Syllabus</h2>
              <ol style={{marginLeft: '24px'}}>
                <li className="mb-2">
                  <strong>Download the syllabus</strong> for your chosen subjects from the official JAMB website.
                </li>
                <li className="mb-2">
                  <strong>Read through each topic</strong> listed in the syllabus carefully.
                </li>
                <li className="mb-2">
                  <strong>Get textbooks</strong> that cover all the topics in the syllabus.
                </li>
                <li className="mb-2">
                  <strong>Practice with past questions</strong> to understand how topics are examined.
                </li>
                <li className="mb-2">
                  <strong>Tick off topics</strong> as you study them to track your progress.
                </li>
              </ol>
            </div>

            <div className="faq-section">
              <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '24px'}}>Frequently Asked Questions</h2>
              <div className="faq-item">
                <h4 className="faq-question">Is the JAMB syllabus the same every year?</h4>
                <p className="faq-answer">The JAMB syllabus remains largely the same, but minor updates may occur. Always download the latest version for your exam year.</p>
              </div>
              <div className="faq-item">
                <h4 className="faq-question">Can I pass JAMB without using the syllabus?</h4>
                <p className="faq-answer">While possible, using the syllabus significantly increases your chances of success as it ensures you study all relevant topics.</p>
              </div>
              <div className="faq-item">
                <h4 className="faq-question">Where can I get the official syllabus?</h4>
                <p className="faq-answer">Visit the official JAMB website at www.jamb.gov.ng or download from this page.</p>
              </div>
            </div>
          </div>

          <aside className="sidebar">
            <div className="card" style={{background: '#f9fafb', marginBottom: '24px'}}>
              <h3 style={{fontSize: '1.125rem', fontWeight: 600, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                <Info size={20} style={{color: '#16a34a'}} /> Quick Tips
              </h3>
              <ul style={{fontSize: '0.875rem', marginLeft: '20px'}}>
                <li className="mb-2">Study with the syllabus beside you</li>
                <li className="mb-2">Focus on objectives listed for each topic</li>
                <li className="mb-2">Use recommended textbooks</li>
                <li className="mb-2">Practice past questions regularly</li>
              </ul>
            </div>

            <div className="card" style={{background: '#f0fdf4'}}>
              <h3 style={{fontWeight: 600, marginBottom: '16px'}}>Related Pages</h3>
              <div style={{display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.875rem'}}>
                <Link to="/jamb" style={{color: '#0A3D91', textDecoration: 'none'}}>→ JAMB Registration 2026</Link>
                <Link to="/jamb-centers" style={{color: '#0A3D91', textDecoration: 'none'}}>→ JAMB CBT Centers</Link>
                <Link to="/check-jamb-result" style={{color: '#0A3D91', textDecoration: 'none'}}>→ Check JAMB Result</Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default JambSyllabus;
