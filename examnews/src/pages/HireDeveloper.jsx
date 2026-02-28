import React from "react";
import { Helmet } from "react-helmet-async";
import { Code, Mail, Phone, Github, Briefcase, Zap, Globe } from "lucide-react";
import "../styles/Components.css";

const HireDeveloper = () => {
  return (
    <div>
      <Helmet>
        <title>Hire the Developer - Anointed Agunloye | Web & App Development</title>
        <meta name="description" content="Hire Anointed Agunloye for custom web development, mobile applications, and software solutions. Professional developer with expertise in React, Node.js, and more." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://examnews.work.gd/hire-developer" />
      </Helmet>

      <header style={{background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)', color: '#ffffff', padding: '60px 20px', textAlign: 'center'}}>
        <div className="container">
          <Code size={64} style={{margin: '0 auto 24px', display: 'block'}} />
          <h1 style={{color: '#ffffff', fontSize: '2.5rem', marginBottom: '16px'}}>Hire the Developer</h1>
          <p style={{fontSize: '1.25rem', color: '#dcfce7', maxWidth: '600px', margin: '0 auto'}}>
            Professional Web & App Development Services
          </p>
        </div>
      </header>

      <main className="container" style={{padding: '60px 20px', maxWidth: '1000px', margin: '0 auto'}}>
        
        <section style={{marginBottom: '60px', textAlign: 'center'}}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #16a34a, #15803d)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 24px',
            fontSize: '3rem',
            color: '#ffffff',
            fontWeight: 700
          }}>
            AA
          </div>
          <h2 style={{fontSize: '2rem', fontWeight: 700, marginBottom: '12px', color: '#1f2937'}}>
            Anointed Agunloye
          </h2>
          <p style={{fontSize: '1.25rem', color: '#16a34a', fontWeight: 600, marginBottom: '8px'}}>
            Full-Stack Web Developer
          </p>
          <p style={{color: '#6b7280', fontSize: '1rem'}}>
            Building modern, scalable, and user-friendly applications
          </p>
        </section>

        <section style={{marginBottom: '60px'}}>
          <h2 style={{fontSize: '1.75rem', fontWeight: 700, marginBottom: '32px', textAlign: 'center', color: '#1f2937'}}>
            Get in Touch
          </h2>
          <div style={{display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
            
            <article className="card" style={{textAlign: 'center', padding: '32px 24px'}}>
              <Phone size={48} style={{color: '#16a34a', margin: '0 auto 16px'}} />
              <h3 style={{fontSize: '1.125rem', fontWeight: 600, marginBottom: '12px'}}>Phone</h3>
              <a href="tel:+2348101209470" style={{display: 'block', color: '#16a34a', fontWeight: 600, marginBottom: '8px', textDecoration: 'none'}}>
                08101209470
              </a>
              <a href="tel:+2349016471351" style={{display: 'block', color: '#16a34a', fontWeight: 600, textDecoration: 'none'}}>
                09016471351
              </a>
            </article>

            <article className="card" style={{textAlign: 'center', padding: '32px 24px'}}>
              <Mail size={48} style={{color: '#16a34a', margin: '0 auto 16px'}} />
              <h3 style={{fontSize: '1.125rem', fontWeight: 600, marginBottom: '12px'}}>Email</h3>
              <a href="mailto:anointedthedeveloper@gmail.com" style={{color: '#16a34a', fontWeight: 600, textDecoration: 'none', wordBreak: 'break-word'}}>
                anointedthedeveloper@gmail.com
              </a>
            </article>

            <article className="card" style={{textAlign: 'center', padding: '32px 24px'}}>
              <Github size={48} style={{color: '#16a34a', margin: '0 auto 16px'}} />
              <h3 style={{fontSize: '1.125rem', fontWeight: 600, marginBottom: '12px'}}>GitHub</h3>
              <a href="https://github.com/anointedthedeveloper" target="_blank" rel="noopener noreferrer" style={{color: '#16a34a', fontWeight: 600, textDecoration: 'none'}}>
                @anointedthedeveloper
              </a>
            </article>

          </div>
        </section>

        <section style={{marginBottom: '60px'}}>
          <h2 style={{fontSize: '1.75rem', fontWeight: 700, marginBottom: '32px', textAlign: 'center', color: '#1f2937'}}>
            Services Offered
          </h2>
          <div style={{display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'}}>
            
            <article className="card" style={{borderLeft: '4px solid #16a34a'}}>
              <Globe size={32} style={{color: '#16a34a', marginBottom: '16px'}} />
              <h3 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px'}}>Web Development</h3>
              <p style={{color: '#6b7280', lineHeight: '1.6'}}>
                Custom websites and web applications built with modern technologies like React, Node.js, and more.
              </p>
            </article>

            <article className="card" style={{borderLeft: '4px solid #16a34a'}}>
              <Briefcase size={32} style={{color: '#16a34a', marginBottom: '16px'}} />
              <h3 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px'}}>Custom Applications</h3>
              <p style={{color: '#6b7280', lineHeight: '1.6'}}>
                Tailored software solutions designed to meet your specific business needs and requirements.
              </p>
            </article>

            <article className="card" style={{borderLeft: '4px solid #16a34a'}}>
              <Zap size={32} style={{color: '#16a34a', marginBottom: '16px'}} />
              <h3 style={{fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px'}}>Full-Stack Development</h3>
              <p style={{color: '#6b7280', lineHeight: '1.6'}}>
                End-to-end development services from frontend design to backend infrastructure and deployment.
              </p>
            </article>

          </div>
        </section>

        <section style={{marginBottom: '60px'}}>
          <div className="card" style={{background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', border: '2px solid #16a34a', padding: '40px', textAlign: 'center'}}>
            <h2 style={{fontSize: '1.75rem', fontWeight: 700, marginBottom: '16px', color: '#1f2937'}}>
              Why Work With Me?
            </h2>
            <div style={{maxWidth: '700px', margin: '0 auto'}}>
              <ul style={{textAlign: 'left', lineHeight: '2', color: '#374151', fontSize: '1.0625rem'}}>
                <li>✅ <strong>Modern Technologies:</strong> React, Node.js, JavaScript, and latest frameworks</li>
                <li>✅ <strong>Responsive Design:</strong> Mobile-first, works perfectly on all devices</li>
                <li>✅ <strong>Clean Code:</strong> Well-structured, maintainable, and documented</li>
                <li>✅ <strong>Fast Delivery:</strong> Efficient workflow and timely project completion</li>
                <li>✅ <strong>SEO Optimized:</strong> Built with search engine visibility in mind</li>
                <li>✅ <strong>Ongoing Support:</strong> Post-launch maintenance and updates available</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{marginBottom: '60px'}}>
          <h2 style={{fontSize: '1.75rem', fontWeight: 700, marginBottom: '24px', textAlign: 'center', color: '#1f2937'}}>
            Featured Project
          </h2>
          <div className="card" style={{padding: '32px'}}>
            <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px', color: '#16a34a'}}>
              Exam News Nigeria
            </h3>
            <p style={{color: '#6b7280', lineHeight: '1.7', marginBottom: '16px'}}>
              A comprehensive educational platform providing Nigerian students with up-to-date information on JAMB, WAEC, NECO examinations, university cut-off marks, and admission guides.
            </p>
            <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px'}}>
              <span style={{background: '#dcfce7', color: '#166534', padding: '6px 12px', borderRadius: '4px', fontSize: '0.875rem', fontWeight: 600}}>React</span>
              <span style={{background: '#dcfce7', color: '#166534', padding: '6px 12px', borderRadius: '4px', fontSize: '0.875rem', fontWeight: 600}}>React Router</span>
              <span style={{background: '#dcfce7', color: '#166534', padding: '6px 12px', borderRadius: '4px', fontSize: '0.875rem', fontWeight: 600}}>SEO Optimized</span>
              <span style={{background: '#dcfce7', color: '#166534', padding: '6px 12px', borderRadius: '4px', fontSize: '0.875rem', fontWeight: 600}}>Responsive Design</span>
            </div>
            <p style={{fontSize: '0.9375rem', color: '#6b7280'}}>
              <strong>Features:</strong> Lazy loading, error boundaries, cookie consent, legal compliance, mobile-first design, and more.
            </p>
          </div>
        </section>

        <section style={{textAlign: 'center', padding: '40px 20px', background: '#f9fafb', borderRadius: '12px'}}>
          <h2 style={{fontSize: '1.75rem', fontWeight: 700, marginBottom: '16px', color: '#1f2937'}}>
            Ready to Start Your Project?
          </h2>
          <p style={{fontSize: '1.125rem', color: '#6b7280', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px'}}>
            Let's discuss your ideas and bring them to life with professional development services.
          </p>
          <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="mailto:anointedthedeveloper@gmail.com" style={{
              background: '#16a34a',
              color: '#ffffff',
              padding: '14px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'background 0.2s'
            }}>
              <Mail size={20} />
              Send an Email
            </a>
            <a href="tel:+2348101209470" style={{
              background: '#ffffff',
              color: '#16a34a',
              padding: '14px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              border: '2px solid #16a34a',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s'
            }}>
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </section>

      </main>
    </div>
  );
};

export default HireDeveloper;
