// src/features/auth/OtpScreen.jsx (Tailwind Optimized)

import React, { useState, useRef, useEffect } from 'react';
import LogoComponent from '../../components/LogoComponent'; 
import '../../App.css'; 
const OtpScreen = ({ mobileNumber, onVerified }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);
  const [timer, setTimer] = useState(60); 

  // Simple timer for resend logic
  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer]);

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); 
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    if (enteredOtp.length === 4) {
      console.log('Verifying OTP:', enteredOtp);
      onVerified();
    } else {
      alert('Please enter the 4-digit OTP.');
    }
  };

  const handleResend = () => {
    setTimer(60); 
    setOtp(['', '', '', '']); 
    console.log('OTP Resent');
  };

  return (
    // Replaced screen-padding and inline style with Tailwind classes
    <div className="p-8 bg-white h-full flex flex-col">
      <LogoComponent />
      
      {/* Replaced inline style with Tailwind classes */}
      <div className="text-center"> 
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Welcome to Arrowspeed</h2>
        <p className="text-sm text-gray-500 mb-5">
          Enter the verification code sent to <br />
          <strong className="font-semibold text-gray-900">+91 {mobileNumber}</strong>
          <span className="ml-1 opacity-60">✏️</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col flex-grow mt-8">
        {/* Replaced otp-input-container inline style with Tailwind classes */}
        <div className="flex justify-center space-x-4 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={el => inputRefs.current[index] = el}
              // Tailwind classes for otp-input: w-12 h-12 text-center text-xl border rounded-lg
              className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:ring-primary-dark focus:border-primary-dark"
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
          ))}
        </div>

        {/* Replaced inline style with Tailwind classes */}
        <div className="text-center mb-12">
            {timer > 0 ? (
                <p className="text-sm text-gray-500">
                    Resend in <strong className="text-primary-dark font-semibold">{timer}s</strong>
                </p>
            ) : (
                <button 
                    type="button" 
                    onClick={handleResend} 
                    className="bg-transparent border-none text-primary-dark text-sm cursor-pointer font-semibold hover:underline"
                >
                    Resend Code
                </button>
            )}
        </div>
        
        <button type="submit" className="w-full py-3 bg-primary-dark text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition-colors">
          Login / Get Started
        </button>
      </form>
    </div>
  );
};

export default OtpScreen;