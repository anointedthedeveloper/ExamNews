import React from "react";
import { Link } from "react-router-dom";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  return (
    <div style={{minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px'}}>
      <div style={{textAlign: 'center', maxWidth: '600px'}}>
        <h1 style={{fontSize: '6rem', fontWeight: 700, color: '#0A3D91', marginBottom: '16px'}}>404</h1>
        <h2 style={{fontSize: '2rem', fontWeight: 600, marginBottom: '16px'}}>Page Not Found</h2>
        <p style={{color: '#6b7280', marginBottom: '32px', fontSize: '1.125rem'}}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div style={{display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap'}}>
          <Link to="/" className="btn" style={{display: 'inline-flex', alignItems: 'center', gap: '8px'}}>
            <Home size={18} /> Go Home
          </Link>
          <Link to="/jamb" className="btn btn-secondary" style={{display: 'inline-flex', alignItems: 'center', gap: '8px'}}>
            <Search size={18} /> Browse Exams
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
