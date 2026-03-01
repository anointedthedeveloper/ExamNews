import React from "react";
import { Helmet } from "react-helmet-async";
import { Shield } from "lucide-react";
import "../styles/Components.css";

const PrivacyPolicy = () => {
  return (
    <div>
      <Helmet>
        <title>Privacy Policy | Exam News Nigeria</title>
        <meta name="description" content="Privacy Policy for Exam News Nigeria. Learn how we collect, use, and protect your personal information." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://examnews.work.gd/privacy-policy" />
      </Helmet>

      <header style={{background: '#16a34a', color: '#ffffff', padding: '48px 20px', textAlign: 'center'}}>
        <div className="container">
          <h1 style={{color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap'}}>
            <Shield size={36}/> Privacy Policy
          </h1>
          <p style={{fontSize: '1rem', color: '#dcfce7', marginTop: '8px'}}>Last Updated: January 2026</p>
        </div>
      </header>

      <main className="container" style={{padding: '40px 20px', maxWidth: '900px', margin: '0 auto'}}>
        <article className="card" style={{marginBottom: '32px'}}>
          <section style={{marginBottom: '32px'}}>
            <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>Introduction</h2>
            <p style={{marginBottom: '16px'}}>
              Welcome to Exam News Nigeria ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website examnews.work.gd.
            </p>
            <p>
              By using our website, you consent to the data practices described in this policy. If you do not agree with this policy, please do not access or use our website.
            </p>
          </section>

          <section style={{marginBottom: '32px'}}>
            <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>Information We Collect</h2>
            
            <h3 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px', marginTop: '20px'}}>Personal Information</h3>
            <p style={{marginBottom: '16px'}}>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul style={{marginLeft: '24px', marginBottom: '16px'}}>
              <li style={{marginBottom: '8px'}}>Submit forms on our website (e.g., contact forms, support requests)</li>
              <li style={{marginBottom: '8px'}}>Subscribe to our newsletter or updates</li>
              <li style={{marginBottom: '8px'}}>Participate in surveys or feedback forms</li>
              <li style={{marginBottom: '8px'}}>Report bugs or technical issues</li>
            </ul>
            <p style={{marginBottom: '16px'}}>
              This information may include: name, email address, phone number, and any other information you choose to provide.
            </p>

            <h3 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px', marginTop: '20px'}}>Automatically Collected Information</h3>
            <p style={{marginBottom: '16px'}}>
              When you visit our website, we automatically collect certain information about your device and browsing behavior, including:
            </p>
            <ul style={{marginLeft: '24px', marginBottom: '16px'}}>
              <li style={{marginBottom: '8px'}}>IP address and browser type</li>
              <li style={{marginBottom: '8px'}}>Operating system and device information</li>
              <li style={{marginBottom: '8px'}}>Pages visited and time spent on pages</li>
              <li style={{marginBottom: '8px'}}>Referring website addresses</li>
              <li style={{marginBottom: '8px'}}>Search queries within our site</li>
            </ul>
          </section>

          <section style={{marginBottom: '32px'}}>
            <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>How We Use Your Information</h2>
            <p style={{marginBottom: '16px'}}>We use the collected information for the following purposes:</p>
            <ul style={{marginLeft: '24px', marginBottom: '16px'}}>
              <li style={{marginBottom: '8px'}}>To provide, operate, and maintain our website</li>
              <li style={{marginBottom: '8px'}}>To improve user experience and website functionality</li>
              <li style={{marginBottom: '8px'}}>To respond to your inquiries and support requests</li>
              <li style={{marginBottom: '8px'}}>To send you updates, newsletters, and educational content (with your consent)</li>
              <li style={{marginBottom: '8px'}}>To analyze website usage and trends</li>
              <li style={{marginBottom: '8px'}}>To detect and prevent fraud or security issues</li>
              <li style={{marginBottom: '8px'}}>To comply with legal obligations</li>
            </ul>
          </section>

          <section style={{marginBottom: '32px'}}>
            <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>Cookies and Tracking Technologies</h2>
            <p style={{marginBottom: '16px'}}>
              We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device that help us:
            </p>
            <ul style={{marginLeft: '24px', marginBottom: '16px'}}>
              <li style={{marginBottom: '8px'}}>Remember your preferences and settings</li>
              <li style={{marginBottom: '8px'}}>Understand how you use our website</li>
              <li style={{marginBottom: '8px'}}>Improve website performance</li>
              <li style={{marginBottom: '8px'}}>Deliver relevant advertisements (if applicable)</li>
            </ul>
            <p style={{marginBottom: '16px'}}>
              You can control cookie settings through your browser preferences. However, disabling cookies may affect website functionality.
            </p>
          </section>

          <section style={{marginBottom: '32px'}}>
            <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>Third-Party Services</h2>
            <p style={{marginBottom: '16px'}}>
              We may use third-party services to help operate our website and provide better services to you. These third parties may include:
            </p>
            <ul style={{marginLeft: '24px', marginBottom: '16px'}}>
              <li style={{marginBottom: '8px'}}><strong>Google Analytics:</strong> For website traffic analysis</li>
              <li style={{marginBottom: '8px'}}><strong>Google AdSense:</strong> For displaying advertisements</li>
              <li style={{marginBottom: '8px'}}><strong>Formspree:</strong> For form submissions and contact management</li>
            </ul>
            <p style={{marginBottom: '16px'}}>
              These third parties have their own privacy policies and may collect information independently. We encourage you to review their privacy policies.
            </p>
          </section>

          <section style={{marginBottom: '32px'}}>
            <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>Data Security</h2>
            <p style={{marginBottom: '16px'}}>
              We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section style={{marginBottom: '32px'}}>
            <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>Data Retention</h2>
            <p style={{marginBottom: '16px'}}>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>
          </section>

          <section style={{marginBottom: '32px'}}>
            <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>Your Rights</h2>
            <p style={{marginBottom: '16px'}}>You have the right to:</p>
            <ul style={{marginLeft: '24px', marginBottom: '16px'}}>
              <li style={{marginBottom: '8px'}}>Access the personal information we hold about you</li>
              <li style={{marginBottom: '8px'}}>Request correction of inaccurate information</li>
              <li style={{marginBottom: '8px'}}>Request deletion of your personal information</li>
              <li style={{marginBottom: '8px'}}>Opt-out of marketing communications</li>
              <li style={{marginBottom: '8px'}}>Object to processing of your personal information</li>
            </ul>
            <p>
              To exercise these rights, please contact us at support@examnews.work.gd.
            </p>
          </section>

          <section style={{marginBottom: '32px'}}>
            <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>Children's Privacy</h2>
            <p style={{marginBottom: '16px'}}>
              Our website is intended for students and educational purposes. We do not knowingly collect personal information from children under 13 without parental consent. If you believe we have collected information from a child under 13, please contact us immediately.
            </p>
          </section>

          <section style={{marginBottom: '32px'}}>
            <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>Changes to This Privacy Policy</h2>
            <p style={{marginBottom: '16px'}}>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          <section>
            <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>Contact Us</h2>
            <p style={{marginBottom: '16px'}}>
              If you have any questions or concerns about this Privacy Policy, please contact us:
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

export default PrivacyPolicy;
