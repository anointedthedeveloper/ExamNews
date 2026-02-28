import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
          <p style={{color: '#60a5fa'}}>&copy; {currentYear} Exam News Nigeria. All Rights Reserved.</p>
          <p style={{marginTop: '8px', fontSize: '0.875rem', color: '#60a5fa'}}>
            Created by <a href="https://github.com/anointedthedeveloper" target="_blank" rel="noopener noreferrer" style={{color: '#93c5fd', textDecoration: 'underline'}}>anointedthedeveloper</a>
            {' '} | {' '}
            <Link to="/hire-developer" style={{color: '#93c5fd', textDecoration: 'underline'}}>Hire the Developer</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
