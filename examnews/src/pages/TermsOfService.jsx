import React from "react";
import { Helmet } from "react-helmet-async";
import { FileText } from "lucide-react";
import "../styles/Components.css";

const TermsOfService = () => {
  return (
    <div>
      <Helmet>
        <title>Terms of Service | Exam News Nigeria</title>
        <meta name="description" content="Terms of Service for Exam News Nigeria. Read our terms and conditions for using our educational platform." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://examnews.work.gd/terms-of-service" />
      </Helmet>

      <header style={{background: '#16a34a', color: '#ffffff', padding: '48px 20px', textAlign: 'center'}}>
        <div className="container">
          <h1 style={{color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap'}}>
            <FileText size={36}/> Terms of Service
          </h1>
          <p style={{fontSize: '1rem', color: '#dcfce7', marginTop: '8px'}}>Last Updated: January 2026</p>
        </div>
      </header>

      <main className="container" style={{padding: '40px 20px', maxWidth: '900px', margin: '0 auto'}}>
        <article className="card" style={{marginBottom: '32px'}}>
          <section style={{marginBottom: '32px'}}>
            <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>Agreement to Terms</h2>
            <p style={{marginBottom: '16px'}}>
              Welcome to Exam News Nigeria. By accessing or using our website at examnews.work.gd ("Website"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Website.
            </p>
            <p>
              We reserve the right to modify these Terms at any time. Your continued use of the Website after changes are posted constitutes your acceptance of the modified Terms.
            </p>
          </section>

          <section style={{marginBottom: '32px'}}>
            <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>Description of Service</h2>
            <p style={{marginBottom: '16px'}}>
              Exam News Nigeria provides educational information and resources related to Nigerian examinations, including but not limited to:
            </p>
            <ul style={{marginLeft: '24px', marginBottom: '16px'}}>
              <li style={{marginBottom: '8px'}}>JAMB (Joint Admissions and Matriculation Board) updates and guides</li>
              <li style={{marginBottom: '8px'}}>WAEC (West African Examinations Council) timetables and information</li>
              <li style={{marginBottom: '8px'}}>NECO (National Examinations Council) news and schedules</li>
              <li style={{marginBottom: '8px'}}>University cut-off marks and admission information</li>
              <li style={{marginBottom: '8px'}}>Post-UTME guides and resources</li>
            </ul>
            <p>
              Our service is provided for informational and educational purposes only.
            </p>
          </section>

          <section style={{marginBottom: '32px'}}>
            <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>User Responsibilities</h2>
            <p style={{marginBottom: '16px'}}>By using our Website, you agree to:</p>
            <ul style={{marginLeft: '24px', marginBottom: '16px'}}>
              <li style={{marginBottom: '8px'}}>Provide accurate and truthful information when submitting forms</li>
              <li style={{marginBottom: '8px'}}>Use the Website only for lawful purposes</li>
              <li style={{marginBottom: '8px'}}>Not attempt to gain unauthorized access to our systems</li>
              <li style={{marginBottom: '8px'}}>Not transmit viruses, malware, or harmful code</li>
              <li style={{marginBottom: '8px'}}>Not scrape, copy, or redistribute our content without permission</li>
              <li style={{marginBottom: '8px'}}>Not impersonate others or misrepresent your affiliation</li>
              <li style={{marginBottom: '8px'}}>Respect intellectual property rights</li>
            </ul>
          </section>

          <section style={{marginBottom: '32px'}}>
            <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>Intellectual Property Rights</h2>
            <p style={{marginBottom: '16px'}}>
              All content on this Website, including text, graphics, logos, images, and software, is the property of Exam News Nigeria or its content suppliers and is protected by Nigerian and international copyright laws.
            </p>
            <p style={{marginBottom: '16px'}}>
              You may view, download, and print content for personal, non-commercial use only. Any other use, including reproduction, modification, distribution, or republication, requires our prior written consent.
            </p>
          </section>

          <section style={{marginBottom: '32px'}}>
            <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>Disclaimer of Warranties</h2>
            <p style={{marginBottom: '16px'}}>
              <strong>IMPORTANT:</strong> Exam News Nigeria is NOT affiliated with, endorsed by, or officially connected to JAMB, WAEC, NECO, or any Nigerian university or educational institution.
            </p>
            <p style={{marginBottom: '16px'}}>
              The Website and all information provided are on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, regarding:
            </p>
            <ul style={{marginLeft: '24px', marginBottom: '16px'}}>
              <li style={{marginBottom: '8px'}}>The accuracy, completeness, or timeliness of information</li>
              <li style={{marginBottom: '8px'}}>The availability or uninterrupted access to the Website</li>
              <li style={{marginBottom: '8px'}}>The results obtained from using the Website</li>
              <li style={{marginBottom: '8px'}}>The correction of errors or defects</li>
            </ul>
            <p>
              While we strive to provide accurate and up-to-date information, we do not guarantee the accuracy of exam dates, cut-off marks, or other educational information. Always verify critical information with official sources.
            </p>
          </section>

          <section style={{marginBottom: '32px'}}>
            <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>Limitation of Liability</h2>
            <p style={{marginBottom: '16px'}}>
              To the fullest extent permitted by law, Exam News Nigeria, its owners, employees, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from:
            </p>
            <ul style={{marginLeft: '24px', marginBottom: '16px'}}>
              <li style={{marginBottom: '8px'}}>Your use or inability to use the Website</li>
              <li style={{marginBottom: '8px'}}>Reliance on information provided on the Website</li>
              <li style={{marginBottom: '8px'}}>Errors, omissions, or inaccuracies in content</li>
              <li style={{marginBottom: '8px'}}>Unauthorized access to your data</li>
              <li style={{marginBottom: '8px'}}>Third-party content or links</li>
            </ul>
          </section>

          <section style={{marginBottom: '32px'}}>
            <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>Third-Party Links and Content</h2>
            <p style={{marginBottom: '16px'}}>
              Our Website may contain links to third-party websites, including official examination bodies and educational institutions. These links are provided for your convenience only. We do not endorse or assume responsibility for the content, privacy policies, or practices of third-party websites.
            </p>
            <p>
              We may also display third-party advertisements. We are not responsible for the content of these advertisements or the products/services advertised.
            </p>
          </section>

          <section style={{marginBottom: '32px'}}>
            <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>User-Generated Content</h2>
            <p style={{marginBottom: '16px'}}>
              If you submit content to our Website (e.g., comments, feedback, bug reports), you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, and display that content.
            </p>
            <p>
              You represent that any content you submit does not violate any third-party rights and complies with applicable laws.
            </p>
          </section>

          <section style={{marginBottom: '32px'}}>
            <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>Termination</h2>
            <p style={{marginBottom: '16px'}}>
              We reserve the right to terminate or suspend your access to the Website at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
            </p>
          </section>

          <section style={{marginBottom: '32px'}}>
            <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>Governing Law</h2>
            <p style={{marginBottom: '16px'}}>
              These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law provisions.
            </p>
          </section>

          <section style={{marginBottom: '32px'}}>
            <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>Indemnification</h2>
            <p style={{marginBottom: '16px'}}>
              You agree to indemnify and hold harmless Exam News Nigeria and its affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the Website or violation of these Terms.
            </p>
          </section>

          <section style={{marginBottom: '32px'}}>
            <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>Severability</h2>
            <p style={{marginBottom: '16px'}}>
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section>
            <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>Contact Information</h2>
            <p style={{marginBottom: '16px'}}>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <ul style={{marginLeft: '24px'}}>
              <li style={{marginBottom: '8px'}}><strong>Email:</strong> support@examnews.work.gd</li>
              <li style={{marginBottom: '8px'}}><strong>Website:</strong> https://examnews.work.gd</li>
            </ul>
          </section>
        </article>
      </main>
    </div>
  );
};

export default TermsOfService;
