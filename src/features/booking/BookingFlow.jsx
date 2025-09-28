// src/features/booking/BookingFlow.jsx (FIXED Navigation)

import React, { useState } from 'react';
import MobileHeader from '../../components/MobileHeader'; 
import SearchForm from './SearchForm';
import BusResults from './BusResults';
import SeatSelection from './SeatSelection';
import PassengerDetails from './PassengerDetails';
// Removed RouteCard import

const FLOW_SCREENS = {
  SEARCH: 'SEARCH',
  RESULTS: 'RESULTS',
  SEATS: 'SEATS',
  PASSENGER: 'PASSENGER',
  PAYMENT: 'PAYMENT', 
};

const mockBus = { id: 1, name: 'Acella', time: '05:50AM', duration: '12h 00m', arrival: '05:50PM', rating: 4.4, price: 689, seats: 20, type: 'AC Sleeper' };

const BookingFlow = ({ onContinueToPayment, children }) => {
  // State definitions
  const [currentScreen, setCurrentScreen] = useState(FLOW_SCREENS.SEARCH);
  const [searchParams, setSearchParams] = useState(null);
  const [selectedBusId, setSelectedBusId] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingDetails, setBookingDetails] = useState(null);

  // === Navigation Handlers (Internal Logic) ===
  const handleSearch = (params) => {
    // 🎯 CRITICAL FIX: Implement the logic to save params and change screen
    setSearchParams(params); 
    setCurrentScreen(FLOW_SCREENS.RESULTS); // <-- THIS TRIGGERS NAVIGATION
  };
  
  const handleSelectBus = (busId) => {
    setSelectedBusId(busId);
    setCurrentScreen(FLOW_SCREENS.SEATS);
  };
  
  const handleConfirmSeats = (seats) => {
    setSelectedSeats(seats);
    setCurrentScreen(FLOW_SCREENS.PASSENGER);
  };
  
  const handleContinueDetails = (details) => {
    setBookingDetails(details);
    onContinueToPayment({ ...details, selectedBusId, searchParams });
  };

  // === Header Title ===
  const getHeaderTitle = () => {
    switch (currentScreen) {
      case FLOW_SCREENS.SEARCH:
        return 'BusMitra';
      case FLOW_SCREENS.RESULTS:
        return `${searchParams?.from || 'From'} to ${searchParams?.to || 'To'}`;
      case FLOW_SCREENS.SEATS:
        return `${mockBus.name} - Seat Selection`;
      case FLOW_SCREENS.PASSENGER:
        return 'Passenger Details';
      default:
        return 'Booking';
    }
  };
  
  const handleBack = () => {
    switch (currentScreen) {
        case FLOW_SCREENS.RESULTS:
            setCurrentScreen(FLOW_SCREENS.SEARCH);
            break;
        case FLOW_SCREENS.SEATS:
            setCurrentScreen(FLOW_SCREENS.RESULTS);
            break;
        case FLOW_SCREENS.PASSENGER:
            setCurrentScreen(FLOW_SCREENS.SEATS);
            break;
        default:
            break;
    }
 };

  // === Content Rendering ===
  const renderContent = () => {
    switch (currentScreen) {
      case FLOW_SCREENS.SEARCH:
        return (
            <div className="flex-1 overflow-y-auto">
                <SearchForm onSearch={handleSearch} />
                
                <div className="p-4 pt-0">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 mt-4">Offer Zone</h3>
                    <div className="w-full h-32 bg-gray-200 rounded-xl flex items-center justify-center text-sm text-gray-500">
                        [Banners / Offer Carousel Placeholder]
                    </div>
                </div>
            </div>
        );
      case FLOW_SCREENS.RESULTS:
        if (!searchParams) return null;
        return <BusResults {...searchParams} onSelectBus={handleSelectBus} />;
      case FLOW_SCREENS.SEATS:
        return <SeatSelection bus={mockBus} onConfirm={handleConfirmSeats} />;
      case FLOW_SCREENS.PASSENGER:
        return <PassengerDetails selectedSeats={selectedSeats} bus={mockBus} onContinue={handleContinueDetails} />;
      default:
        return <p className="p-4 text-center">Something went wrong.</p>;
    }
  };

  // === Component Return ===
  return (
    <div className="flex flex-col flex-1 h-full">
        <MobileHeader 
            title={getHeaderTitle()} 
            showBack={currentScreen !== FLOW_SCREENS.SEARCH} 
            onBack={handleBack} 
        >
            {currentScreen === FLOW_SCREENS.SEARCH ? children : null}
        </MobileHeader>
        <div className="flex-1 overflow-y-auto">
            {renderContent()}
        </div>
    </div>
  );
};

export default BookingFlow;