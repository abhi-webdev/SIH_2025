// components/LoginScreen.js

import React, { useState } from 'react';
import LogoComponent from '../../components/LogoComponent';
import '../../App.css';

const LoginScreen = ({ onLogin }) => {
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mobile.length === 10) {
      onLogin(mobile);
    } else {
      alert("Please enter a valid 10-digit mobile number.");
    }
  };

  return (
    <div className="screen-padding" style={{ backgroundColor: 'white' }}>
      <LogoComponent />
      
      <div style={{ textAlign: 'center' }}>
        <h2 className="screen-title">BusMitra</h2>
        <p className="screen-subtitle" style={{ marginBottom: '30px' }}>Login using your mobile number to sign in</p>
      </div>

      <form onSubmit={handleSubmit} style={{ flexGrow: 1 }}>
        <div className="input-group">
          <label htmlFor="mobile" className="input-label">Your mobile number</label>
          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', top: '12px', left: '10px', color: 'var(--text-dark)', fontSize: '16px', fontWeight: 600 }}>+91</span>
            <input
              id="mobile"
              type="tel"
              className="text-input"
              placeholder="9876543211"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              maxLength="10"
              required
              style={{ paddingLeft: '45px', fontWeight: 600 }}
            />
          </div>
        </div>
        
        <button type="submit" className="primary-button" style={{ marginTop: '50px' }}>
          Get OTP
        </button>

        <p style={{ fontSize: '11px', color: 'var(--text-light)', textAlign: 'center', marginTop: '15px' }}>
          By pressing this you agree to our <a href="#" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>Privacy policy</a> and <a href="#" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>Terms and Conditions</a>
        </p>

      </form>
    </div>
  );
};

export default LoginScreen;