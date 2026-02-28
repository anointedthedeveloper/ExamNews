import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { TrendingUp, Info, School, Building2, GraduationCap } from "lucide-react";
import "../styles/Components.css";

const JambCutOffMarks = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the JAMB cut-off mark for 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The official JAMB national minimum cut-off mark for universities in 2026 is 140. For polytechnics and colleges of education, the minimum is 100."
        }
      },
      {
        "@type": "Question",
        "name": "Is scoring 140 in JAMB 2026 enough for admission?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Scoring 140 meets the national minimum, but it rarely guarantees admission, especially to competitive courses. Most federal and state universities set their institutional cut-offs higher (e.g., 180, 200)."
        }
      }
    ]
  };

  return (
    <div>
      <Helmet>
        <title>JAMB Cut-Off Marks 2026: Federal, State, Private, Poly & College | Exam News</title>
        <meta name="description" content="Comprehensive guide to JAMB 2026 cut-off marks. Find the latest minimum scores for federal, state, and private universities, polytechnics, and colleges of education." />
        <meta name="keywords" content="JAMB cut off marks 2026, JAMB 2026 cut off mark for all courses, JAMB minimum score, university cut off marks, polytechnic cut off marks" />
        <link rel="canonical" href="https://examnews.work.gd/cut-off-marks" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section style={{background: '#16a34a', color: '#ffffff', padding: '48px 20px', textAlign: 'center'}}>
        <div className="container">
          <h1 style={{color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap'}}>
            <TrendingUp size={36}/> JAMB 2026 Cut-Off Marks
          </h1>
          <p style={{fontSize: '1.125rem', color: '#dcfce7'}}>Complete guide by institution type</p>
        </div>
      </section>

      <div className="container" style={{padding: '40px 20px'}}>
        <div className="two-column-layout">
          <div className="main-content">
            <div className="card" style={{marginBottom: '32px'}}>
              <h2 style={{fontSize: '1.75rem', fontWeight: 600, marginBottom: '16px'}}>Understanding JAMB Cut-Off Marks for 2026</h2>
              <p style={{marginBottom: '16px'}}>
                Cut-off marks are the minimum scores required for admission into Nigerian tertiary institutions. There are two main types:
              </p>
              <ul style={{marginLeft: '24px', marginBottom: '16px'}}>
                <li style={{marginBottom: '8px'}}><strong>General JAMB cut-off:</strong> Set at the annual policy meeting</li>
                <li style={{marginBottom: '8px'}}><strong>Institutional/Departmental cut-off:</strong> Set by each school</li>
              </ul>
              <p>Meeting the JAMB cut-off only qualifies you for screening; final admission depends on your aggregate score (JAMB + Post-UTME + O'Level grades) and course competitiveness.</p>
            </div>

            <div className="info-alert" style={{marginBottom: '32px'}}>
              <h3 style={{fontWeight: 600, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                <Info size={20} /> Official JAMB National Minimum Benchmarks for 2026
              </h3>
              <div style={{display: 'grid', gap: '12px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #e5e7eb'}}>
                  <span><strong>Universities (Federal, State, Private):</strong></span>
                  <span style={{fontWeight: 600, color: '#16a34a'}}>140 - 150</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #e5e7eb'}}>
                  <span><strong>Polytechnics:</strong></span>
                  <span style={{fontWeight: 600, color: '#16a34a'}}>100</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #e5e7eb'}}>
                  <span><strong>Colleges of Education:</strong></span>
                  <span style={{fontWeight: 600, color: '#16a34a'}}>100</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '8px 0'}}>
                  <span><strong>Colleges of Nursing:</strong></span>
                  <span style={{fontWeight: 600, color: '#16a34a'}}>140</span>
                </div>
              </div>
            </div>

            <div className="card" style={{marginBottom: '32px'}}>
              <h2 style={{fontSize: '1.75rem', fontWeight: 600, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                <School size={24} /> Federal Universities Cut-Off Marks
              </h2>
              <p style={{marginBottom: '16px'}}>Most federal universities set higher institutional cut-offs to manage high applicant numbers.</p>
              
              <h3 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px'}}>Top Federal Universities</h3>
              <div style={{marginBottom: '24px'}}>
                <div style={{display: 'grid', gap: '8px'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', padding: '12px', background: '#f9fafb', borderRadius: '4px'}}>
                    <span>University of Ibadan (UI)</span>
                    <span style={{fontWeight: 600}}>200+</span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', padding: '12px', background: '#f9fafb', borderRadius: '4px'}}>
                    <span>University of Lagos (UNILAG)</span>
                    <span style={{fontWeight: 600}}>200+</span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', padding: '12px', background: '#f9fafb', borderRadius: '4px'}}>
                    <span>Obafemi Awolowo University (OAU)</span>
                    <span style={{fontWeight: 600}}>200+</span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', padding: '12px', background: '#f9fafb', borderRadius: '4px'}}>
                    <span>University of Benin (UNIBEN)</span>
                    <span style={{fontWeight: 600}}>200+</span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', padding: '12px', background: '#f9fafb', borderRadius: '4px'}}>
                    <span>Ahmadu Bello University (ABU)</span>
                    <span style={{fontWeight: 600}}>180+</span>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between', padding: '12px', background: '#f9fafb', borderRadius: '4px'}}>
                    <span>University of Ilorin (UNILORIN)</span>
                    <span style={{fontWeight: 600}}>180+</span>
                  </div>
                </div>
              </div>

              <h3 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px'}}>Competitive Courses Cut-Off Ranges</h3>
              <ul style={{marginLeft: '24px'}}>
                <li style={{marginBottom: '8px'}}><strong>Medicine & Surgery:</strong> 250 – 320</li>
                <li style={{marginBottom: '8px'}}><strong>Law:</strong> 240 – 300</li>
                <li style={{marginBottom: '8px'}}><strong>Pharmacy:</strong> 230 – 290</li>
                <li style={{marginBottom: '8px'}}><strong>Nursing:</strong> 230 – 280</li>
                <li style={{marginBottom: '8px'}}><strong>Engineering:</strong> 220 – 270</li>
                <li style={{marginBottom: '8px'}}><strong>Computer Science:</strong> 220 – 260</li>
              </ul>
            </div>

            <div className="card" style={{marginBottom: '32px'}}>
              <h2 style={{fontSize: '1.75rem', fontWeight: 600, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                <Building2 size={24} /> State Universities Cut-Off Marks
              </h2>
              <p style={{marginBottom: '16px'}}>State universities often have more flexible cut-offs but must adhere to the 140 minimum.</p>
              
              <div style={{display: 'grid', gap: '8px', marginBottom: '16px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '12px', background: '#f9fafb', borderRadius: '4px'}}>
                  <span>Lagos State University (LASU)</span>
                  <span style={{fontWeight: 600}}>160 - 200+</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '12px', background: '#f9fafb', borderRadius: '4px'}}>
                  <span>Abia State University (ABSU)</span>
                  <span style={{fontWeight: 600}}>150</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '12px', background: '#f9fafb', borderRadius: '4px'}}>
                  <span>Adekunle Ajasin University (AAUA)</span>
                  <span style={{fontWeight: 600}}>160</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '12px', background: '#f9fafb', borderRadius: '4px'}}>
                  <span>Enugu State University (ESUT)</span>
                  <span style={{fontWeight: 600}}>160</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '12px', background: '#f9fafb', borderRadius: '4px'}}>
                  <span>Ekiti State University (EKSU)</span>
                  <span style={{fontWeight: 600}}>140+</span>
                </div>
              </div>
            </div>

            <div className="card" style={{marginBottom: '32px'}}>
              <h2 style={{fontSize: '1.75rem', fontWeight: 600, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                <GraduationCap size={24} /> Private Universities Cut-Off Marks
              </h2>
              <p style={{marginBottom: '16px'}}>Private universities have flexible admission processes but maintain quality standards.</p>
              
              <div style={{display: 'grid', gap: '8px', marginBottom: '16px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '12px', background: '#f9fafb', borderRadius: '4px'}}>
                  <span>Babcock University</span>
                  <span style={{fontWeight: 600}}>180+ (250 for Medicine)</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '12px', background: '#f9fafb', borderRadius: '4px'}}>
                  <span>Covenant University</span>
                  <span style={{fontWeight: 600}}>160 - 180+</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '12px', background: '#f9fafb', borderRadius: '4px'}}>
                  <span>Afe Babalola University (ABUAD)</span>
                  <span style={{fontWeight: 600}}>140 - 200+</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '12px', background: '#f9fafb', borderRadius: '4px'}}>
                  <span>Bowen University</span>
                  <span style={{fontWeight: 600}}>140 - 160</span>
                </div>
              </div>
            </div>

            <div className="card" style={{marginBottom: '32px'}}>
              <h2 style={{fontSize: '1.75rem', fontWeight: 600, marginBottom: '16px'}}>Polytechnics & Colleges Cut-Off Marks</h2>
              
              <h3 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px'}}>Polytechnics (Minimum: 100)</h3>
              <ul style={{marginLeft: '24px', marginBottom: '16px'}}>
                <li style={{marginBottom: '8px'}}><strong>Yaba College of Technology (YABATECH):</strong> 150</li>
                <li style={{marginBottom: '8px'}}><strong>Auchi Polytechnic:</strong> 120 - 150</li>
                <li style={{marginBottom: '8px'}}><strong>Federal Polytechnic, Nasarawa:</strong> 120</li>
                <li style={{marginBottom: '8px'}}><strong>Ramat Polytechnic, Maiduguri:</strong> 100</li>
              </ul>

              <h3 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px'}}>Colleges of Education (Minimum: 100)</h3>
              <p style={{marginBottom: '8px'}}>All Colleges of Education accept the national minimum of 100.</p>

              <h3 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px'}}>Colleges of Nursing (Minimum: 140)</h3>
              <p>Nursing programs require a minimum of 140, with competitive institutions requiring higher scores.</p>
            </div>

            <div className="card" style={{marginBottom: '32px', background: '#fef3c7', borderColor: '#f59e0b'}}>
              <h2 style={{fontSize: '1.75rem', fontWeight: 600, marginBottom: '16px'}}>Strategic Advice Based on Your Score</h2>
              
              <div style={{marginBottom: '16px'}}>
                <h3 style={{fontSize: '1.125rem', fontWeight: 600, marginBottom: '8px'}}>300+: Outstanding</h3>
                <p style={{margin: 0}}>Prime position for any course in any university. Focus on acing Post-UTME.</p>
              </div>

              <div style={{marginBottom: '16px'}}>
                <h3 style={{fontSize: '1.125rem', fontWeight: 600, marginBottom: '8px'}}>250-299: Highly Competitive</h3>
                <p style={{margin: 0}}>Strong shot at Medicine, Law, Engineering in top federal universities.</p>
              </div>

              <div style={{marginBottom: '16px'}}>
                <h3 style={{fontSize: '1.125rem', fontWeight: 600, marginBottom: '8px'}}>200-249: Solid</h3>
                <p style={{margin: 0}}>Good position for federal universities (non-medical), very competitive for state universities.</p>
              </div>

              <div style={{marginBottom: '16px'}}>
                <h3 style={{fontSize: '1.125rem', fontWeight: 600, marginBottom: '8px'}}>180-199: Viable</h3>
                <p style={{margin: 0}}>Eligible for many federal universities. Target less competitive courses or strong state universities.</p>
              </div>

              <div style={{marginBottom: '16px'}}>
                <h3 style={{fontSize: '1.125rem', fontWeight: 600, marginBottom: '8px'}}>140-179: Need Strategy</h3>
                <p style={{margin: 0}}>Focus on state universities, private universities, or polytechnics. Consider changing to less competitive courses.</p>
              </div>

              <div>
                <h3 style={{fontSize: '1.125rem', fontWeight: 600, marginBottom: '8px'}}>Below 140: Re-strategize</h3>
                <p style={{margin: 0}}>Apply to polytechnics or colleges of education (accept 100). Consider IJMB/JUPEB or re-sit JAMB.</p>
              </div>
            </div>

            <div className="card" style={{marginBottom: '32px'}}>
              <h2 style={{fontSize: '1.75rem', fontWeight: 600, marginBottom: '16px'}}>Frequently Asked Questions</h2>
              
              <div style={{marginBottom: '16px'}}>
                <h3 style={{fontSize: '1.125rem', fontWeight: 600, marginBottom: '8px'}}>Can a university admit below 140?</h3>
                <p style={{margin: 0}}>No. JAMB has set 140 as the minimum benchmark for universities in 2026.</p>
              </div>

              <div style={{marginBottom: '16px'}}>
                <h3 style={{fontSize: '1.125rem', fontWeight: 600, marginBottom: '8px'}}>What's the difference between JAMB and departmental cut-off?</h3>
                <p style={{margin: 0}}>JAMB cut-off qualifies you for Post-UTME screening. Departmental cut-off is the higher score needed for admission into specific programs.</p>
              </div>

              <div>
                <h3 style={{fontSize: '1.125rem', fontWeight: 600, marginBottom: '8px'}}>Can I get into polytechnic with 100?</h3>
                <p style={{margin: 0}}>Yes. JAMB's official minimum for polytechnics is 100. Institutions like Ramat Polytechnic accept this score.</p>
              </div>
            </div>
          </div>

          <aside className="sidebar">
            <div className="sidebar-card" style={{background: '#eff6ff', borderColor: '#0A3D91'}}>
              <h3>Quick Links</h3>
              <ul className="sidebar-links">
                <li><Link to="/jamb"><span>JAMB 2026 News</span></Link></li>
                <li><Link to="/jamb-registration"><span>Registration Guide</span></Link></li>
                <li><Link to="/check-jamb-result"><span>Check Result</span></Link></li>
                <li><Link to="/jamb-centers"><span>CBT Centers</span></Link></li>
              </ul>
            </div>

            <div className="sidebar-card">
              <h3>Important Notes</h3>
              <p style={{fontSize: '0.875rem', marginBottom: '12px'}}>
                Cut-off marks are subject to change based on the JAMB Policy Meeting decisions.
              </p>
              <p style={{fontSize: '0.875rem', margin: 0}}>
                Always check the official JAMB portal and your chosen institution's website for the most current information.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default JambCutOffMarks;
