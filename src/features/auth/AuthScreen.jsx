// AuthScreen.js

import React, { useState } from 'react';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import OtpScreen from './OtpScreen';
import SetupScreen from './SetupScreen';
import '../../App.css'; 

const SCREEN = {
  SPLASH: 'SPLASH',
  LOGIN: 'LOGIN',
  OTP: 'OTP',
  SETUP: 'SETUP',
};

const AuthScreen = ({ onAuthSuccess }) => {
  const [currentScreen, setCurrentScreen] = useState(SCREEN.SPLASH);
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSplashComplete = () => {
    setCurrentScreen(SCREEN.LOGIN);
  };

  const handleLogin = (mobile) => {
    setMobileNumber(mobile);
    setCurrentScreen(SCREEN.OTP);
  };

  const handleOtpVerified = () => {
    // In a real app, this would check if the user is new/needs profile setup
    const userNeedsSetup = true; 
    if (userNeedsSetup) {
      setCurrentScreen(SCREEN.SETUP);
    } else {
      onAuthSuccess(); // Go to Home Screen
    }
  };

  const handleSetupComplete = () => {
    onAuthSuccess(); // Go to Home Screen
  };

  const handleSkipSetup = () => {
    onAuthSuccess(); // Go to Home Screen
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case SCREEN.SPLASH:
        return <SplashScreen onComplete={handleSplashComplete} />;
      case SCREEN.LOGIN:
        return <LoginScreen onLogin={handleLogin} />;
      case SCREEN.OTP:
        return <OtpScreen mobileNumber={mobileNumber} onVerified={handleOtpVerified} />;
      case SCREEN.SETUP:
        return <SetupScreen onSetupComplete={handleSetupComplete} onSkip={handleSkipSetup} />;
      default:
        return <SplashScreen onComplete={handleSplashComplete} />;
    }
  };

  return (
    <div className="mobile-container">
      {renderScreen()}
    </div>
  );
};

export default AuthScreen;