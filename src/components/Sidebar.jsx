import React from "react";
import { Link } from "react-router-dom";
import { Home, GraduationCap, Calendar, BookOpen, Layout, HelpCircle, UserPlus, Info } from "lucide-react";
import "../styles/Components.css";

const Sidebar = ({ isOpen }) => {
  const links = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "Cut-off Marks", path: "/cut-off-marks", icon: <Layout size={20} /> },
    { name: "Admission", path: "/admission-status", icon: <HelpCircle size={20} /> },
    { name: "Registration", path: "/jamb-registration", icon: <UserPlus size={20} /> },
    { name: "Syllabus", path: "/jamb-syllabus", icon: <BookOpen size={20} /> },
    { name: "CBT Centers", path: "/jamb-centers", icon: <Layout size={20} /> },
    { name: "About", path: "/about", icon: <Info size={20} /> },
  ];

  return (
    <aside className={`sidebar-main ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-container">
        <h3 className="sidebar-title">Navigation</h3>
        <nav className="sidebar-nav">
          {links.map((link) => (
            <Link key={link.name} to={link.path} className="sidebar-nav-link">
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>

        <div className="sidebar-promo" style={{marginTop: '32px', padding: '20px', background: 'var(--accent-main)', borderRadius: '16px', color: '#fff'}}>
          <h4 style={{fontSize: '0.875rem', fontWeight: 800, marginBottom: '8px'}}>JAMB 2026</h4>
          <p style={{fontSize: '0.75rem', opacity: 0.9, marginBottom: '12px'}}>Stay updated with the latest news on registration and exams.</p>
          <Link to="/jamb" style={{fontSize: '0.75rem', color: '#fff', fontWeight: 800, textDecoration: 'underline'}}>Learn More</Link>
        </div>
      </div>

      <style>{`
        .sidebar-main {
          width: 260px;
          height: calc(100vh - 80px);
          position: sticky;
          top: 80px;
          background: var(--card-bg);
          border-right: 1px solid var(--border-color);
          padding: 32px 20px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          flex-shrink: 0;
        }

        .sidebar-main.closed {
          width: 0;
          padding: 32px 0;
          opacity: 0;
          visibility: hidden;
          border-right: none;
        }

        .sidebar-title {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-bottom: 20px;
          padding-left: 12px;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .sidebar-nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          color: var(--text-main);
          font-weight: 600;
          font-size: 0.9375rem;
          border-radius: 12px;
          transition: all 0.2s;
        }

        .sidebar-nav-link:hover {
          background: rgba(22, 163, 74, 0.08);
          color: var(--accent-main);
          transform: translateX(4px);
        }

        @media (max-width: 1024px) {
          .sidebar-main {
            display: none !important;
          }
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;