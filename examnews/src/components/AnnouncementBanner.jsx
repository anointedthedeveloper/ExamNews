import React from "react";
import { AlertCircle, Calendar, Clock } from "lucide-react";

const AnnouncementBanner = () => {
  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#1e40af',
      color: '#ffffff',
      padding: '12px 0',
      zIndex: 9998,
      overflow: 'hidden',
      boxShadow: '0 -2px 10px rgba(0,0,0,0.2)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        animation: 'scroll 30s linear infinite',
        whiteSpace: 'nowrap'
      }}>
        <AlertCircle size={20} />
        <span style={{fontWeight: 600, fontSize: '0.9375rem'}}>
          JAMB 2026 Registration has ended (Closed: February 28, 2026)
        </span>
        <span style={{margin: '0 8px'}}>•</span>
        <Calendar size={20} />
        <span style={{fontWeight: 600, fontSize: '0.9375rem'}}>
          Examination: April 16-25, 2026
        </span>
        <span style={{margin: '0 8px'}}>•</span>
        <Clock size={20} />
        <span style={{fontWeight: 600, fontSize: '0.9375rem'}}>
          Prepare for your exam - Check your exam slip
        </span>
        <span style={{margin: '0 40px'}}>•</span>
        
        <AlertCircle size={20} />
        <span style={{fontWeight: 600, fontSize: '0.9375rem'}}>
          JAMB 2026 Registration has ended (Closed: February 28, 2026)
        </span>
        <span style={{margin: '0 8px'}}>•</span>
        <Calendar size={20} />
        <span style={{fontWeight: 600, fontSize: '0.9375rem'}}>
          Examination: April 16-25, 2026
        </span>
        <span style={{margin: '0 8px'}}>•</span>
        <Clock size={20} />
        <span style={{fontWeight: 600, fontSize: '0.9375rem'}}>
          Prepare for your exam - Check your exam slip
        </span>
        <span style={{margin: '0 40px'}}>•</span>
        
        <AlertCircle size={20} />
        <span style={{fontWeight: 600, fontSize: '0.9375rem'}}>
          JAMB 2026 Registration has ended (Closed: February 28, 2026)
        </span>
        <span style={{margin: '0 8px'}}>•</span>
        <Calendar size={20} />
        <span style={{fontWeight: 600, fontSize: '0.9375rem'}}>
          Examination: April 16-25, 2026
        </span>
        <span style={{margin: '0 8px'}}>•</span>
        <Clock size={20} />
        <span style={{fontWeight: 600, fontSize: '0.9375rem'}}>
          Prepare for your exam - Check your exam slip
        </span>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBanner;
