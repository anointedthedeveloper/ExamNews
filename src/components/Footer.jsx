import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3 className="footer-heading">About Exam News</h3>
            <p className="footer-text">
              Nigeria's trusted platform for JAMB, WAEC, NECO updates and admission information.
            </p>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Exams</h3>
            <ul className="footer-links">
              <li><Link to="/jamb">JAMB Updates</Link></li>
              <li><Link to="/waec">WAEC News</Link></li>
              <li><Link to="/neco">NECO News</Link></li>
              <li><Link to="/cut-off-marks">Cut-Off Marks</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/admission-status">Check Admission</Link></li>
              <li><Link to="/check-jamb-result">JAMB Result</Link></li>
              <li><Link to="/jamb-centers">JAMB Centers</Link></li>
              <li><Link to="/waec-timetable-2026">WAEC Timetable</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Legal & Support</h3>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
              <li><Link to="/support">Support Us</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Official Portals</h3>
            <ul className="footer-links">
              <li><a href="https://efacility.jamb.gov.ng/" target="_blank" rel="noopener noreferrer">JAMB Portal</a></li>
              <li><a href="https://portal.waec.org/" target="_blank" rel="noopener noreferrer">WAEC Portal</a></li>
              <li><a href="https://results.neco.gov.ng/" target="_blank" rel="noopener noreferrer">NECO Portal</a></li>
            </ul>
            <p className="footer-disclaimer" style={{marginTop: '12px'}}>
              Disclaimer: Not affiliated with JAMB, WAEC, or NECO. Educational news only.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px'}}>
            <div>
              <p style={{color: '#ffffff', fontWeight: 600, fontSize: '0.9375rem', margin: 0}}>&copy; {currentYear} Exam News Nigeria. All Rights Reserved.</p>
            </div>
            
            <div style={{background: 'rgba(255, 255, 255, 0.05)', padding: '8px 16px', borderRadius: '30px', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', gap: '10px'}}>
              <span style={{width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 8px #22c55e', animation: 'pulse 2s infinite'}}></span>
              <p style={{fontSize: '0.875rem', color: '#ffffff', fontWeight: 600, margin: 0, fontFamily: 'monospace', letterSpacing: '0.5px'}}>
                Current Time: {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
              </p>
            </div>
          </div>
          
          <div style={{textAlign: 'center', marginTop: '24px', paddingBottom: '8px'}}>
            <p style={{fontSize: '0.8125rem', color: '#94a3b8', margin: 0}}>
              Created by <a href="https://github.com/anointedthedeveloper" target="_blank" rel="noopener noreferrer" style={{color: '#ffffff', textDecoration: 'none', fontWeight: 600, borderBottom: '1px solid #16a34a'}}>anointedthedeveloper</a>
              {' '} | {' '}
              <Link to="/hire-developer" style={{color: '#ffffff', textDecoration: 'none', fontWeight: 600, borderBottom: '1px solid #16a34a'}}>Hire the Developer</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
