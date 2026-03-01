import React from "react";
import { Helmet } from "react-helmet-async";
import { Info, Target, Users, Award } from "lucide-react";
import "../styles/Components.css";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us | Exam News Nigeria - Your Trusted Education Portal</title>
        <meta name="description" content="Learn about Exam News Nigeria, your trusted source for JAMB, WAEC, NECO updates, and admission information for Nigerian students." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://examnews.work.gd/about" />
      </Helmet>

      <header style={{background: '#16a34a', color: '#ffffff', padding: '48px 20px', textAlign: 'center'}}>
        <div className="container">
          <h1 style={{color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap'}}>
            <Info size={36}/> About Exam News Nigeria
          </h1>
          <p style={{fontSize: '1.125rem', color: '#dcfce7', marginTop: '8px'}}>Nigeria's #1 Exam Portal</p>
        </div>
      </header>

      <main className="container" style={{padding: '40px 20px', maxWidth: '1000px', margin: '0 auto'}}>
        <article className="card" style={{marginBottom: '32px'}}>
          <section style={{marginBottom: '32px'}}>
            <h2 style={{fontSize: '1.75rem', fontWeight: 600, marginBottom: '16px'}}>Who We Are</h2>
            <p style={{marginBottom: '16px', lineHeight: '1.7'}}>
              Exam News Nigeria is a dedicated educational information platform designed to help Nigerian students navigate the complex landscape of examinations and university admissions. Founded with the mission to provide accurate, timely, and accessible information, we serve thousands of students across Nigeria every month.
            </p>
            <p style={{marginBottom: '16px', lineHeight: '1.7'}}>
              We understand that staying informed about exam dates, registration deadlines, cut-off marks, and admission processes can be overwhelming. That's why we've created a centralized hub where students can find all the information they need in one place.
            </p>
          </section>

          <section style={{marginBottom: '32px'}}>
            <h2 style={{fontSize: '1.75rem', fontWeight: 600, marginBottom: '24px'}}>What We Do</h2>
            <div style={{display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
              <div style={{padding: '24px', background: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                <Target size={32} style={{color: '#16a34a', marginBottom: '12px'}} />
                <h3 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px'}}>JAMB Updates</h3>
                <p style={{lineHeight: '1.6', color: '#4b5563'}}>
                  Comprehensive coverage of JAMB registration, exam dates, result checking, CBT centers, syllabus, and cut-off marks for all universities.
                </p>
              </div>

              <div style={{padding: '24px', background: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                <Users size={32} style={{color: '#16a34a', marginBottom: '12px'}} />
                <h3 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px'}}>WAEC & NECO</h3>
                <p style={{lineHeight: '1.6', color: '#4b5563'}}>
                  Up-to-date timetables, registration information, result checking guides, and exam preparation tips for WAEC and NECO candidates.
                </p>
              </div>

              <div style={{padding: '24px', background: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
                <Award size={32} style={{color: '#16a34a', marginBottom: '12px'}} />
                <h3 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px'}}>Admission Guides</h3>
                <p style={{lineHeight: '1.6', color: '#4b5563'}}>
                  Detailed information on university cut-off marks, Post-UTME screening, admission status checking, and course selection strategies.
                </p>
              </div>
            </div>
          </section>

          <section style={{marginBottom: '32px'}}>
            <h2 style={{fontSize: '1.75rem', fontWeight: 600, marginBottom: '16px'}}>Our Mission</h2>
            <p style={{marginBottom: '16px', lineHeight: '1.7'}}>
              Our mission is to empower Nigerian students with accurate, timely, and accessible educational information. We believe that every student deserves equal access to information that can shape their academic future.
            </p>
            <p style={{lineHeight: '1.7'}}>
              We are committed to:
            </p>
            <ul style={{marginLeft: '24px', marginTop: '12px', lineHeight: '1.8'}}>
              <li style={{marginBottom: '8px'}}>Providing verified and up-to-date exam information</li>
              <li style={{marginBottom: '8px'}}>Simplifying complex admission processes</li>
              <li style={{marginBottom: '8px'}}>Offering free educational resources to all students</li>
              <li style={{marginBottom: '8px'}}>Maintaining transparency and accuracy in all our content</li>
              <li style={{marginBottom: '8px'}}>Supporting students throughout their academic journey</li>
            </ul>
          </section>

          <section style={{marginBottom: '32px'}}>
            <h2 style={{fontSize: '1.75rem', fontWeight: 600, marginBottom: '16px'}}>Why Trust Us?</h2>
            <div style={{background: '#f0fdf4', padding: '24px', borderRadius: '8px', border: '1px solid #bbf7d0', marginBottom: '16px'}}>
              <ul style={{marginLeft: '24px', lineHeight: '1.8'}}>
                <li style={{marginBottom: '12px'}}><strong>Accurate Information:</strong> We verify all information from official sources before publishing</li>
                <li style={{marginBottom: '12px'}}><strong>Regular Updates:</strong> Our team monitors official channels daily to bring you the latest news</li>
                <li style={{marginBottom: '12px'}}><strong>Student-Focused:</strong> Every feature is designed with students' needs in mind</li>
                <li style={{marginBottom: '12px'}}><strong>Free Access:</strong> All our educational content is completely free</li>
                <li style={{marginBottom: '12px'}}><strong>No Affiliation:</strong> We are independent and not affiliated with any examination body</li>
              </ul>
            </div>
          </section>

          <section style={{marginBottom: '32px'}}>
            <h2 style={{fontSize: '1.75rem', fontWeight: 600, marginBottom: '16px'}}>Important Disclaimer</h2>
            <div style={{background: '#fef3c7', padding: '20px', borderRadius: '8px', border: '1px solid #fde047'}}>
              <p style={{marginBottom: '12px', fontWeight: 600}}>
                Exam News Nigeria is NOT officially affiliated with:
              </p>
              <ul style={{marginLeft: '24px', lineHeight: '1.7'}}>
                <li style={{marginBottom: '8px'}}>Joint Admissions and Matriculation Board (JAMB)</li>
                <li style={{marginBottom: '8px'}}>West African Examinations Council (WAEC)</li>
                <li style={{marginBottom: '8px'}}>National Examinations Council (NECO)</li>
                <li style={{marginBottom: '8px'}}>Any Nigerian university or educational institution</li>
              </ul>
              <p style={{marginTop: '12px', lineHeight: '1.7'}}>
                We are an independent educational information platform. Always verify critical information (exam dates, registration deadlines, results) with official sources.
              </p>
            </div>
          </section>

          <section style={{marginBottom: '32px'}}>
            <h2 style={{fontSize: '1.75rem', fontWeight: 600, marginBottom: '16px'}}>Our Coverage</h2>
            <p style={{marginBottom: '16px', lineHeight: '1.7'}}>
              We provide comprehensive information on:
            </p>
            <div style={{display: 'grid', gap: '12px', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'}}>
              <div style={{padding: '16px', background: '#f9fafb', borderRadius: '6px'}}>
                <strong>JAMB UTME</strong>
                <p style={{fontSize: '0.875rem', color: '#6b7280', marginTop: '4px'}}>Registration, exam dates, results, centers, syllabus</p>
              </div>
              <div style={{padding: '16px', background: '#f9fafb', borderRadius: '6px'}}>
                <strong>WAEC</strong>
                <p style={{fontSize: '0.875rem', color: '#6b7280', marginTop: '4px'}}>Timetables, registration, results, GCE updates</p>
              </div>
              <div style={{padding: '16px', background: '#f9fafb', borderRadius: '6px'}}>
                <strong>NECO</strong>
                <p style={{fontSize: '0.875rem', color: '#6b7280', marginTop: '4px'}}>Internal/External exams, schedules, registration</p>
              </div>
              <div style={{padding: '16px', background: '#f9fafb', borderRadius: '6px'}}>
                <strong>Cut-Off Marks</strong>
                <p style={{fontSize: '0.875rem', color: '#6b7280', marginTop: '4px'}}>Federal, state, private universities, polytechnics</p>
              </div>
              <div style={{padding: '16px', background: '#f9fafb', borderRadius: '6px'}}>
                <strong>Post-UTME</strong>
                <p style={{fontSize: '0.875rem', color: '#6b7280', marginTop: '4px'}}>Screening dates, requirements, preparation tips</p>
              </div>
              <div style={{padding: '16px', background: '#f9fafb', borderRadius: '6px'}}>
                <strong>Admissions</strong>
                <p style={{fontSize: '0.875rem', color: '#6b7280', marginTop: '4px'}}>CAPS, admission lists, status checking</p>
              </div>
            </div>
          </section>

          <section>
            <h2 style={{fontSize: '1.75rem', fontWeight: 600, marginBottom: '16px'}}>Get in Touch</h2>
            <p style={{marginBottom: '16px', lineHeight: '1.7'}}>
              We value your feedback and are always here to help. Whether you have questions, suggestions, or need support, feel free to reach out to us.
            </p>
            <div style={{background: '#f9fafb', padding: '20px', borderRadius: '8px'}}>
              <p style={{marginBottom: '8px'}}><strong>Email:</strong> support@examnews.work.gd</p>
              <p style={{marginBottom: '8px'}}><strong>WhatsApp Channel:</strong> <a href="https://whatsapp.com/channel/0029VbCDo9hAe5VxobKmxV07" target="_blank" rel="noopener noreferrer" style={{color: '#16a34a'}}>Join our channel</a></p>
              <p><strong>Support Page:</strong> <a href="/support" style={{color: '#16a34a'}}>Visit Support</a></p>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default About;
