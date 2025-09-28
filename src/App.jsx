// src/App.jsx (FINAL FIX: Complete Navigation Handlers)

import React, { useState } from 'react';

// Shared Components (These stay in /src/components)
import MobileHeader from './components/MobileHeader'; 
import MobileFooter from './components/MobileFooter';

// Feature Imports (These stay in /src/features/...)
import AuthScreen from './features/auth/AuthScreen'; 
import BookingFlow from './features/booking/BookingFlow'; 
import PaymentFlow from './features/booking/PaymentFlow'; 
import BookingsScreen from './features/booking/BookingsScreen';
import TicketDetailsScreen from './features/booking/TicketDetailsScreen';
import RestStopsScreen from './features/booking/RestStopsScreen';
import ProfileMain from './features/profile/ProfileMain';
import ProfileEditScreen from './features/profile/ProfileEditScreen'; 
import PassengerListScreen from './features/profile/PassengerListScreen';
import WalletScreen from './features/profile/WalletScreen';
import ReferEarnScreen from './features/profile/ReferEarnScreen';
import OffersScreen from './features/profile/OffersScreen';
import FaqSupportScreen from './features/profile/FaqSupportScreen';
import AboutUsScreen from './features/profile/AboutUsScreen';


const APP_STATE = {
    HOME_BOOKING: 'HOME_BOOKING',
    PAYMENT: 'PAYMENT',
    MY_BOOKINGS_LIST: 'MY_BOOKINGS_LIST',
    TICKET_DETAIL: 'TICKET_DETAIL',
    REST_STOPS: 'REST_STOPS',
    PROFILE_MAIN: 'PROFILE_MAIN',
    PROFILE_EDIT: 'PROFILE_EDIT',
    PASSENGER_LIST: 'PASSENGER_LIST',
    WALLET: 'WALLET',
    REFER_EARN: 'REFER_EARN',
    OFFERS_LIST: 'OFFERS_LIST',
    FAQ_SUPPORT: 'FAQ_SUPPORT',
    ABOUT_US: 'ABOUT_US',
};

const AUTH_STATE = {
    UNAUTHENTICATED: 'UNAUTHENTICATED',
    AUTHENTICATED: 'AUTHENTICATED',
};

function App() {
  const [authState, setAuthState] = useState(AUTH_STATE.AUTHENTICATED); 
  const [activeTab, setActiveTab] = useState('home');
  const [appState, setAppState] = useState(APP_STATE.HOME_BOOKING);
  const [selectedTicketId, setSelectedTicketId] = useState(null);
  const [paymentData, setPaymentData] = useState(null);
  const mockUser = { name: 'Kapil Saini', age: 24, gender: 'Male', profilePic: '' };

  // --- HANDLERS (FULLY IMPLEMENTED) ---
  const handleAuthSuccess = () => {
      setAuthState(AUTH_STATE.AUTHENTICATED);
      setAppState(APP_STATE.HOME_BOOKING);
  };
  const handleLogout = () => {
      setAuthState(AUTH_STATE.UNAUTHENTICATED);
      setAppState(APP_STATE.HOME_BOOKING);
      setActiveTab('home');
  };
  
  // 🎯 FIX 1: Complete Tab Change Logic
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'home') setAppState(APP_STATE.HOME_BOOKING);
    else if (tab === 'bookings') setAppState(APP_STATE.MY_BOOKINGS_LIST);
    else if (tab === 'profile') setAppState(APP_STATE.PROFILE_MAIN); 
    else if (tab === 'offers') setAppState(APP_STATE.OFFERS_LIST); 
  };
  
  // Simplified Booking Handlers
  const handleContinueToPayment = (details) => {
      setPaymentData(details);
      setAppState(APP_STATE.PAYMENT);
      setActiveTab('none');
  };
  const handlePaymentComplete = () => {
      setPaymentData(null);
      setAppState(APP_STATE.MY_BOOKINGS_LIST); 
      setActiveTab('bookings');
  };
  const handleSelectTicket = (id) => {
      setSelectedTicketId(id);
      setAppState(APP_STATE.TICKET_DETAIL);
  };
  const handleViewRestStops = () => setAppState(APP_STATE.REST_STOPS);


  // 🎯 FIX 2: Complete Go-Back Logic (Ensures continuity in the flow)
  const handleGoBack = () => {
      switch (appState) {
          case APP_STATE.TICKET_DETAIL:
              setAppState(APP_STATE.MY_BOOKINGS_LIST);
              setActiveTab('bookings');
              break;
          case APP_STATE.REST_STOPS:
              setAppState(APP_STATE.TICKET_DETAIL);
              break;
          case APP_STATE.PROFILE_EDIT:
          case APP_STATE.PASSENGER_LIST:
          case APP_STATE.WALLET:
          case APP_STATE.REFER_EARN:
          case APP_STATE.OFFERS_LIST:
          case APP_STATE.FAQ_SUPPORT:
          case APP_STATE.ABOUT_US:
              setAppState(APP_STATE.PROFILE_MAIN);
              setActiveTab('profile');
              break;
          default:
              setAppState(APP_STATE.HOME_BOOKING);
              setActiveTab('home');
              break;
      }
  };

  // --- Profile Router Function ---
  const renderProfileScreen = () => {
      switch (appState) {
          case APP_STATE.PROFILE_MAIN:
              return <ProfileMain user={mockUser} onNavigate={setAppState} />;
          case APP_STATE.PROFILE_EDIT:
              return <ProfileEditScreen user={mockUser} onSave={() => setAppState(APP_STATE.PROFILE_MAIN)} />;
          case APP_STATE.PASSENGER_LIST:
              return <PassengerListScreen />;
          case APP_STATE.WALLET:
              return <WalletScreen onTopUp={() => setAppState(APP_STATE.PAYMENT)} />;
          case APP_STATE.REFER_EARN:
              return <ReferEarnScreen />;
          case APP_STATE.OFFERS_LIST:
              return <OffersScreen />;
          case APP_STATE.FAQ_SUPPORT:
              return <FaqSupportScreen />;
          case APP_STATE.ABOUT_US:
              return <AboutUsScreen />;
          default:
              return <ProfileMain user={mockUser} onNavigate={setAppState} />;
      }
  };


  // --- MAIN RENDERING LOGIC ---
  const renderCurrentScreen = () => {
    if (authState === AUTH_STATE.UNAUTHENTICATED) {
        return <AuthScreen onAuthSuccess={handleAuthSuccess} />; 
    }
    
    // Payment Flow (Special Case)
    if (appState === APP_STATE.PAYMENT) {
        return <PaymentFlow bookingDetails={paymentData} onPaymentComplete={handlePaymentComplete} />;
    }

    if (appState === APP_STATE.HOME_BOOKING) {
        // Renders ONE header (inside BookingFlow) and passes Logout logic
        return (
            <div className="flex flex-col flex-1 h-full"> 
                <BookingFlow onContinueToPayment={handleContinueToPayment}>
                    <button 
                        className="text-sm text-status-red font-semibold py-1 px-3 border border-status-red rounded-full hover:bg-red-50 transition-colors"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </BookingFlow>
            </div>
        );
    } 
    
    // --- STANDARD APP.JSX HEADER WRAPPER (All sub-screens) ---
    let title = '';
    let showBack = false;
    let content = null;

    // Logic to set title and content for all other states
    if (appState === APP_STATE.PROFILE_MAIN) {
        title = 'Profile';
        content = renderProfileScreen(); 
    } else if (appState === APP_STATE.MY_BOOKINGS_LIST) {
        title = 'Bookings';
        content = <BookingsScreen onSelectTicket={handleSelectTicket} />;
    } else {
        // Grouped logic for all deep sub-screens (Ticket Detail, Wallet, FAQ, etc.)
        showBack = true;
        title = appState.replace('_', ' ').toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
        
        if (appState === APP_STATE.TICKET_DETAIL) {
            content = <TicketDetailsScreen selectedTicketId={selectedTicketId} onViewRestStops={handleViewRestStops} onCancel={() => {}} onChat={() => {}} />;
        } else if (appState === APP_STATE.REST_STOPS) {
            content = <RestStopsScreen stop={{}} onRate={() => {}} />;
        } else {
            // All other profile sub-screens (Wallet, Offers, etc.)
            content = renderProfileScreen();
        }
    }
    
    // The single wrapper for all standard screens
    return (
        <div className="flex flex-col flex-1 h-full">
            <MobileHeader title={title} showBack={showBack} onBack={handleGoBack} />
            <div className="flex-1 overflow-y-auto">
                {content}
            </div>
        </div>
    );
  };

  return (
    <div className="mx-auto max-w-md min-h-screen shadow-2xl bg-light-bg flex flex-col">
      {renderCurrentScreen()}
      {/* Show footer only when authenticated and not in a deep flow */}
      {authState === AUTH_STATE.AUTHENTICATED && activeTab !== 'none' && <MobileFooter activeTab={activeTab} onTabChange={handleTabChange} />}
    </div>
  );
}

export default App;