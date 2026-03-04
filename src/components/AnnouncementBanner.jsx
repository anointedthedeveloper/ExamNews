import React, { useState } from "react";
import { AlertCircle, Calendar, Clock, X, Megaphone } from "lucide-react";

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return (
      <button 
        onClick={() => setIsVisible(true)}
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: '#1e40af',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
        }}
        title="Show Announcements"
      >
        <Megaphone size={20} />
      </button>
    );
  }

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
      <button 
        onClick={() => setIsVisible(false)}
        style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.2)',
          border: 'none',
          color: '#fff',
          borderRadius: '4px',
          cursor: 'pointer',
          zIndex: 10000,
          display: 'flex',
          padding: '4px'
        }}
        title="Hide Marquee"
      >
        <X size={16} />
      </button>
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
