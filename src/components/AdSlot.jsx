import React from "react";

const AdSlot = ({ position = "default", style = {} }) => {
  // Check if ads should be displayed (controlled by environment variable)
  const showAds = import.meta.env.VITE_SHOW_ADS === "true";

  if (!showAds) {
    return null; // Don't show ads until approved
  }

  const adStyles = {
    header: {
      minHeight: '90px',
      maxWidth: '728px',
      margin: '16px auto',
      background: '#f3f4f6',
      border: '1px dashed #d1d5db',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#9ca3af',
      fontSize: '0.875rem',
      borderRadius: '4px',
      padding: '16px'
    },
    sidebar: {
      minHeight: '250px',
      maxWidth: '300px',
      margin: '16px auto',
      background: '#f3f4f6',
      border: '1px dashed #d1d5db',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#9ca3af',
      fontSize: '0.875rem',
      borderRadius: '4px',
      padding: '16px'
    },
    inContent: {
      minHeight: '250px',
      maxWidth: '100%',
      margin: '24px auto',
      background: '#f3f4f6',
      border: '1px dashed #d1d5db',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#9ca3af',
      fontSize: '0.875rem',
      borderRadius: '4px',
      padding: '16px'
    },
    footer: {
      minHeight: '90px',
      maxWidth: '728px',
      margin: '16px auto',
      background: '#f3f4f6',
      border: '1px dashed #d1d5db',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#9ca3af',
      fontSize: '0.875rem',
      borderRadius: '4px',
      padding: '16px'
    },
    default: {
      minHeight: '100px',
      margin: '16px auto',
      background: '#f3f4f6',
      border: '1px dashed #d1d5db',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#9ca3af',
      fontSize: '0.875rem',
      borderRadius: '4px',
      padding: '16px'
    }
  };

  const selectedStyle = adStyles[position] || adStyles.default;

  return (
    <div 
      className={`ad-slot ad-${position}`}
      style={{...selectedStyle, ...style}}
      aria-label="Advertisement"
    >
      {/* AdSense code will be inserted here after approval */}
      <span>Advertisement</span>
    </div>
  );
};

export default AdSlot;
