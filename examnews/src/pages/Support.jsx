import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Coffee, Heart, Bug, Mail, MessageCircle, Send } from "lucide-react";
import "../styles/Components.css";

const Support = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", type: "feedback" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xkoveazk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
        setFormData({ name: "", email: "", message: "", type: "feedback" });
      }
    } catch (error) {
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <div>
      <Helmet>
        <title>Support Exam News - Donate, Report Bugs & Contact Us</title>
        <meta name="description" content="Support Exam News Nigeria. Donate to keep the platform running, report bugs, or contact us with feedback and suggestions." />
        <link rel="canonical" href="https://examnews.work.gd/support" />
      </Helmet>

      <section style={{background: '#16a34a', color: '#ffffff', padding: '48px 20px', textAlign: 'center'}}>
        <div className="container">
          <h1 style={{color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap'}}>
            <Heart size={36}/> Support Exam News
          </h1>
          <p style={{fontSize: '1.125rem', color: '#dcfce7'}}>Help us keep providing free exam updates to Nigerian students</p>
        </div>
      </section>

      <div className="container" style={{padding: '40px 20px', maxWidth: '1000px'}}>
        <div style={{display: 'grid', gap: '32px'}}>
          
          <div className="card" style={{background: '#f0fdf4', borderColor: '#25D366'}}>
            <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px'}}>
              <MessageCircle size={24} style={{color: '#25D366'}} /> Join Our WhatsApp Channel
            </h2>
            <p style={{marginBottom: '16px'}}>
              Get instant JAMB, WAEC, NECO updates, registration reminders, cut-off marks, and study tips directly on WhatsApp!
            </p>
            <a 
              href="https://whatsapp.com/channel/0029VbCDo9hAe5VxobKmxV07" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn"
              style={{display: 'inline-flex', alignItems: 'center', gap: '8px', justifyContent: 'center', background: '#25D366'}}
            >
              <MessageCircle size={18} /> Join WhatsApp Channel
            </a>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px'}}>
            <div className="card" style={{background: '#fef3c7', borderColor: '#f59e0b'}}>
              <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                <Coffee size={24} /> Support Us
              </h2>
              <p style={{marginBottom: '16px', fontSize: '0.9375rem'}}>
                Help keep Exam News free and ad-free for all students.
              </p>
              
              <div style={{padding: '16px', background: '#ffffff', borderRadius: '8px', border: '2px solid #16a34a'}}>
                <h4 style={{fontWeight: 600, marginBottom: '8px', color: '#16a34a'}}>Opay Transfer</h4>
                <p style={{margin: 0, fontSize: '0.875rem', color: '#6b7280'}}>
                  <strong>Anointed Agunloye Ayokunle</strong><br/>
                  <strong style={{fontSize: '1.125rem', color: '#16a34a'}}>9016471351</strong>
                </p>
              </div>
            </div>

            <div className="card">
              <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px'}}>
                <Mail size={24} /> Contact Us
              </h2>
              <div style={{display: 'grid', gap: '12px', fontSize: '0.9375rem'}}>
                <div style={{padding: '12px', background: '#f9fafb', borderRadius: '4px'}}>
                  <strong>Email:</strong><br/>
                  <a href="mailto:support@examnews.work.gd" style={{color: '#0A3D91'}}>support@examnews.work.gd</a>
                </div>
                <div style={{padding: '12px', background: '#f9fafb', borderRadius: '4px'}}>
                  <strong>WhatsApp:</strong><br/>
                  <a href="https://whatsapp.com/channel/0029VbCDo9hAe5VxobKmxV07" target="_blank" rel="noopener noreferrer" style={{color: '#25D366'}}>Join Channel</a>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px'}}>
              <Bug size={24} /> Report Bug or Feedback
            </h2>
            
            <form onSubmit={handleSubmit}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '16px'}}>
                <div>
                  <label style={{display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.9375rem'}}>Type</label>
                  <select 
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                    style={{width: '100%', padding: '10px', border: '1px solid #e5e7eb', fontSize: '1rem'}}
                    required
                  >
                    <option value="feedback">General Feedback</option>
                    <option value="bug">Bug Report</option>
                    <option value="feature">Feature Request</option>
                    <option value="content">Content Update</option>
                  </select>
                </div>

                <div>
                  <label style={{display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.9375rem'}}>Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    style={{width: '100%', padding: '10px', border: '1px solid #e5e7eb', fontSize: '1rem'}}
                    required
                  />
                </div>

                <div>
                  <label style={{display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.9375rem'}}>Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    style={{width: '100%', padding: '10px', border: '1px solid #e5e7eb', fontSize: '1rem'}}
                    required
                  />
                </div>
              </div>

              <div style={{marginBottom: '16px'}}>
                <label style={{display: 'block', marginBottom: '8px', fontWeight: 600, fontSize: '0.9375rem'}}>Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="4"
                  style={{width: '100%', padding: '10px', border: '1px solid #e5e7eb', fontSize: '1rem', fontFamily: 'inherit'}}
                  required
                />
              </div>

              <button type="submit" className="btn" style={{display: 'inline-flex', alignItems: 'center', gap: '8px'}}>
                <Send size={18} /> Submit
              </button>

              {submitted && (
                <p style={{marginTop: '12px', color: '#16a34a', fontWeight: 600}}>
                  ✓ Thank you! We've received your message.
                </p>
              )}
            </form>
          </div>

          <div className="card">
            <h2 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '16px'}}>FAQs</h2>
            <div style={{display: 'grid', gap: '16px'}}>
              <div>
                <h3 style={{fontSize: '1.0625rem', fontWeight: 600, marginBottom: '8px'}}>Is Exam News free?</h3>
                <p style={{margin: 0, fontSize: '0.9375rem'}}>Yes! Completely free for all Nigerian students.</p>
              </div>
              <div>
                <h3 style={{fontSize: '1.0625rem', fontWeight: 600, marginBottom: '8px'}}>How often is content updated?</h3>
                <p style={{margin: 0, fontSize: '0.9375rem'}}>Regularly, as soon as official information is released by JAMB, WAEC, and NECO.</p>
              </div>
              <div>
                <h3 style={{fontSize: '1.0625rem', fontWeight: 600, marginBottom: '8px'}}>Can I contribute content?</h3>
                <p style={{margin: 0, fontSize: '0.9375rem'}}>Yes! Contact us via email or the form above with verified information.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Support;
