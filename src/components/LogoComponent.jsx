// components/LogoComponent.js

import React from 'react';
import '../App.css'; 

// Placeholder for the Arrowspeed Logo SVG/Image
const ArrowspeedLogo = () => (
    <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" fill="white"/>
        <path d="M49.9997 100L8.71875 35.5385L91.2807 35.5385L49.9997 100Z" fill="#172B4D"/>
        <path d="M50 0L91.281 64.4615L8.719 64.4615L50 0Z" fill="#172B4D"/>
        <text x="50" y="55" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">A</text>
    </svg>
);

const LogoComponent = () => (
  <div className="logo-container">
    <ArrowspeedLogo />
    <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--primary-color)', margin: '5px 0 0 0' }}>Arrowspeed</h2>
  </div>
);

export default LogoComponent;