import React from "react";
import { Helmet } from "react-helmet-async";
import { MessageSquare, Send, ExternalLink } from "lucide-react";
import "../styles/Components.css";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us | Exam News Nigeria</title>
        <meta name="description" content="Get in touch with Exam News Nigeria. Contact us for inquiries, support, or feedback about JAMB, WAEC, NECO, and admission information." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://examnews.work.gd/contact" />
      </Helmet>

      <header style={{background: '#16a34a', color: '#ffffff', padding: '48px 20px', textAlign: 'center'}}>
        <div className="container">
          <h1 style={{color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap'}}>
            <Mail size={36}/> Contact Us
          </h1>
          <p style={{fontSize: '1.125rem', color: '#dcfce7', marginTop: '8px'}}>We're here to help</p>
        </div>
      </header>

      <main className="container" style={{padding: '40px 20px', maxWidth: '900px', margin: '0 auto'}}>
        <div style={{marginBottom: '32px'}}>
          <p style={{fontSize: '1.125rem', textAlign: 'center', marginBottom: '32px', lineHeight: '1.7'}}>
            Have questions, feedback, or need assistance? We'd love to hear from you. Choose the best way to reach us below.
          </p>
        </div>

        <div style={{display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginBottom: '40px'}}>
          <article className="card" style={{textAlign: 'center'}}>
            <ExternalLink size={48} style={{color: '#16a34a', margin: '0 auto 16px'}} />
            <h2 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px'}}>JAMB Portal</h2>
            <p style={{marginBottom: '16px', color: '#6b7280'}}>
              Official JAMB e-Facility portal for registration and results
            </p>
            <a href="https://efacility.jamb.gov.ng/" target="_blank" rel="noopener noreferrer" style={{color: '#16a34a', fontWeight: 600, textDecoration: 'underline'}}>
              Visit Portal
            </a>
          </article>

          <article className="card" style={{textAlign: 'center'}}>
            <ExternalLink size={48} style={{color: '#16a34a', margin: '0 auto 16px'}} />
            <h2 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px'}}>WAEC Portal</h2>
            <p style={{marginBottom: '16px', color: '#6b7280'}}>
              Official WAEC portal for registration and results
            </p>
            <a href="https://portal.waec.org/" target="_blank" rel="noopener noreferrer" style={{color: '#16a34a', fontWeight: 600, textDecoration: 'underline'}}>
              Visit Portal
            </a>
          </article>

          <article className="card" style={{textAlign: 'center'}}>
            <ExternalLink size={48} style={{color: '#16a34a', margin: '0 auto 16px'}} />
            <h2 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px'}}>NECO Portal</h2>
            <p style={{marginBottom: '16px', color: '#6b7280'}}>
              Official NECO results portal
            </p>
            <a href="https://results.neco.gov.ng/" target="_blank" rel="noopener noreferrer" style={{color: '#16a34a', fontWeight: 600, textDecoration: 'underline'}}>
              Visit Portal
            </a>
          </article>
        </div>

        <div style={{display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginBottom: '40px'}}>

          <article className="card" style={{textAlign: 'center'}}>
            <MessageSquare size={48} style={{color: '#16a34a', margin: '0 auto 16px'}} />
            <h2 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px'}}>WhatsApp Channel</h2>
            <p style={{marginBottom: '16px', color: '#6b7280'}}>
              Join our channel for instant exam updates and news
            </p>
            <a href="https://whatsapp.com/channel/0029VbCDo9hAe5VxobKmxV07" target="_blank" rel="noopener noreferrer" style={{color: '#16a34a', fontWeight: 600, textDecoration: 'underline'}}>
              Join Channel
            </a>
          </article>

          <article className="card" style={{textAlign: 'center'}}>
            <Send size={48} style={{color: '#16a34a', margin: '0 auto 16px'}} />
            <h2 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px'}}>Support Center</h2>
            <p style={{marginBottom: '16px', color: '#6b7280'}}>
              Visit our support page for bug reports and donations
            </p>
            <a href="/support" style={{color: '#16a34a', fontWeight: 600, textDecoration: 'underline'}}>
              Visit Support
            </a>
          </article>
        </div>

        <article className="card" style={{marginBottom: '32px'}}>
          <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>Frequently Asked Questions</h2>
          
          <div style={{marginBottom: '24px'}}>
            <h3 style={{fontSize: '1.125rem', fontWeight: 600, marginBottom: '8px'}}>What is Exam News Nigeria?</h3>
            <p style={{lineHeight: '1.7', color: '#4b5563'}}>
              Exam News Nigeria is an independent educational information platform providing updates on JAMB, WAEC, NECO, and university admissions for Nigerian students.
            </p>
          </div>

          <div style={{marginBottom: '24px'}}>
            <h3 style={{fontSize: '1.125rem', fontWeight: 600, marginBottom: '8px'}}>Are you affiliated with JAMB, WAEC, or NECO?</h3>
            <p style={{lineHeight: '1.7', color: '#4b5563'}}>
              No, we are not officially affiliated with any examination body or educational institution. We are an independent platform that aggregates and shares educational information.
            </p>
          </div>

          <div style={{marginBottom: '24px'}}>
            <h3 style={{fontSize: '1.125rem', fontWeight: 600, marginBottom: '8px'}}>How can I verify information on your website?</h3>
            <p style={{lineHeight: '1.7', color: '#4b5563'}}>
              We always recommend verifying critical information (exam dates, registration deadlines, results) with official sources. We provide links to official portals throughout our website.
            </p>
          </div>

          <div style={{marginBottom: '24px'}}>
            <h3 style={{fontSize: '1.125rem', fontWeight: 600, marginBottom: '8px'}}>How often do you update your content?</h3>
            <p style={{lineHeight: '1.7', color: '#4b5563'}}>
              We monitor official channels daily and update our content as soon as new information becomes available. Major updates are typically posted within hours of official announcements.
            </p>
          </div>

          <div>
            <h3 style={{fontSize: '1.125rem', fontWeight: 600, marginBottom: '8px'}}>Can I contribute or report errors?</h3>
            <p style={{lineHeight: '1.7', color: '#4b5563'}}>
              Yes! We welcome feedback and error reports. Please use our <a href="/support" style={{color: '#16a34a', textDecoration: 'underline'}}>support page</a> to report any issues or inaccuracies you find.
            </p>
          </div>
        </article>

        <article className="card" style={{background: '#f0fdf4', border: '1px solid #bbf7d0'}}>
          <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>Need Help?</h2>
          <p style={{marginBottom: '12px', lineHeight: '1.7'}}>
            For questions, feedback, or support:
          </p>
          <ul style={{marginLeft: '24px', lineHeight: '1.8'}}>
            <li style={{marginBottom: '8px'}}>Join our <a href="https://whatsapp.com/channel/0029VbCDo9hAe5VxobKmxV07" target="_blank" rel="noopener noreferrer" style={{color: '#16a34a', textDecoration: 'underline'}}>WhatsApp Channel</a> for updates</li>
            <li style={{marginBottom: '8px'}}>Visit our <a href="/support" style={{color: '#16a34a', textDecoration: 'underline'}}>Support Page</a> for bug reports</li>
            <li>Check official portals above for exam-related queries</li>
          </ul>
        </article>
      </main>
    </div>
  );
};

export default Contact;
