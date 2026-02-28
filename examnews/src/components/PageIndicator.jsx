import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageIndicator = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!loading) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '3px',
      background: '#e5e7eb',
      zIndex: 9999
    }}>
      <div style={{
        height: '100%',
        background: '#16a34a',
        animation: 'progress 0.5s ease-out',
        transformOrigin: 'left'
      }} />
      <style>{`
        @keyframes progress {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
};

export default PageIndicator;
