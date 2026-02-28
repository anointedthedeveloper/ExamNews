import React, { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#1f2937',
      color: '#ffffff',
      padding: '20px',
      boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1)',
      zIndex: 9999,
      animation: 'slideUp 0.3s ease-out'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap'
      }}>
        <Cookie size={32} style={{color: '#fbbf24', flexShrink: 0}} />
        
        <div style={{flex: 1, minWidth: '250px'}}>
          <p style={{marginBottom: '8px', fontWeight: 600}}>
            We use cookies to improve your experience
          </p>
          <p style={{fontSize: '0.875rem', color: '#d1d5db', lineHeight: '1.5'}}>
            This website uses cookies to enhance your browsing experience, analyze site traffic, and serve personalized advertisements. By clicking "Accept", you consent to our use of cookies. Learn more in our <a href="/privacy-policy" style={{color: '#60a5fa', textDecoration: 'underline'}}>Privacy Policy</a>.
          </p>
        </div>

        <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
          <button
            onClick={acceptCookies}
            style={{
              background: '#16a34a',
              color: '#ffffff',
              padding: '10px 24px',
              borderRadius: '6px',
              border: 'none',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '0.875rem',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = '#15803d'}
            onMouseOut={(e) => e.target.style.background = '#16a34a'}
          >
            Accept All
          </button>
          
          <button
            onClick={declineCookies}
            style={{
              background: 'transparent',
              color: '#d1d5db',
              padding: '10px 24px',
              borderRadius: '6px',
              border: '1px solid #4b5563',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '0.875rem',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#374151';
              e.target.style.color = '#ffffff';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#d1d5db';
            }}
          >
            Decline
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default CookieConsent;
