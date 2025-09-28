// components/SplashScreen.js

import React, { useEffect } from 'react';
import '../../App.css'; 

const SplashScreen = ({ onComplete }) => {
  // Simulates loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 1500); 
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div style={{ 
      backgroundColor: 'var(--primary-color)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center'
    }}>
      <div style={{ width: '120px', height: '120px', marginBottom: '15px' }}>
          {/* Logo Placeholder - Larger for splash */}
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="white"/>
            <path d="M49.9997 100L8.71875 35.5385L91.2807 35.5385L49.9997 100Z" fill="#172B4D"/>
            <path d="M50 0L91.281 64.4615L8.719 64.4615L50 0Z" fill="#172B4D"/>
            <text x="50" y="55" dominantBaseline="middle" textAnchor="middle" fill="#172B4D" fontSize="24" fontWeight="bold">A</text>
          </svg>
      </div>
      <h1 style={{ fontSize: '32px', fontWeight: 700, margin: '10px 0 5px 0' }}>Arrowspeed</h1>
      <p style={{ fontSize: '14px', margin: 0, opacity: 0.8 }}>bus booking redefined</p>
    </div>
  );
};

export default SplashScreen;