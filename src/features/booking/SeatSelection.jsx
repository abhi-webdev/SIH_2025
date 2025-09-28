// src/components/SeatSelection.jsx

import React, { useState } from 'react';

// Mock seat map data: 1 (available), 0 (booked), 2 (selected)
const initialSeats = {
    upper: [
        [1, 1, 0, 1], [1, 0, 1, 1], [1, 1, 1, 1], 
        [1, 1, 1, 1], [0, 1, 1, 1], [1, 1, 1, 1]
    ],
    lower: [
        [1, 1, 1, 0], [1, 1, 1, 1], [0, 1, 1, 1], 
        [1, 1, 1, 1], [1, 1, 0, 1], [1, 1, 1, 1]
    ]
};

const Seat = ({ status, onClick }) => {
    let className = "w-8 h-8 m-1 flex items-center justify-center rounded-md cursor-pointer transition-colors";
    
    switch (status) {
        case 1: // Available
            className += " bg-gray-200 text-gray-800 hover:bg-gray-300";
            break;
        case 0: // Booked
            className += " bg-status-red text-white opacity-50 cursor-not-allowed";
            break;
        case 2: // Selected
            className += " bg-accent-green text-white shadow-lg border-2 border-white";
            break;
        default:
            className += " bg-transparent cursor-default"; // Empty space
            break;
    }

    return (
        <div className={className} onClick={status === 1 ? onClick : null}>
            {status === 2 && '✔'}
        </div>
    );
};

const Deck = ({ seats, deckName, selectedSeats, toggleSeat }) => {
    return (
        <div className="p-3 bg-light-bg rounded-lg mb-6 shadow-inner">
            <h3 className="text-sm font-semibold mb-2 text-dark-grey">{deckName} Deck</h3>
            <div className="flex justify-center flex-wrap">
                {seats.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex flex-col items-center">
                        {row.map((status, colIndex) => (
                            <Seat 
                                key={colIndex}
                                status={status === 0 ? 0 : (selectedSeats.some(s => s.row === rowIndex && s.col === colIndex && s.deck === deckName) ? 2 : status)}
                                onClick={() => status === 1 && toggleSeat(deckName, rowIndex, colIndex)}
                            />
                        ))}
                        {/* Aisle Spacer */}
                        <div className="h-4 w-full"></div> 
                    </div>
                ))}
            </div>
        </div>
    );
};

const SeatSelection = ({ bus, onConfirm }) => {
    const [seats, setSeats] = useState(initialSeats);
    const [selectedSeats, setSelectedSeats] = useState([]);

    const toggleSeat = (deck, row, col) => {
        const isSelected = selectedSeats.find(s => s.row === row && s.col === col && s.deck === deck);
        
        if (isSelected) {
            setSelectedSeats(selectedSeats.filter(s => s.row !== row || s.col !== col || s.deck !== deck));
        } else if (selectedSeats.length < 4) { // Limit to 4 seats
            setSelectedSeats([...selectedSeats, { deck, row, col, seatNumber: `${deck[0]}${row * 4 + col + 1}` }]);
        }
    };

    const totalCost = selectedSeats.length * bus.price;
    const isConfirmDisabled = selectedSeats.length === 0;

    return (
        <div className="flex flex-col h-full">
            {/* Header / Info Section (Simplified from MobileHeader for context) */}
            <div className="p-4 bg-white border-b border-gray-200">
                <h2 className="text-xl font-bold text-dark-grey">{bus.name}</h2>
                <p className="text-sm text-gray-500">{bus.time} ({bus.duration}) | {bus.rating} ⭐</p>
            </div>
            
            {/* Seat Map */}
            <div className="flex-1 overflow-y-auto p-4">
                <Deck 
                    seats={seats.upper} 
                    deckName="Upper" 
                    selectedSeats={selectedSeats} 
                    toggleSeat={toggleSeat} 
                />
                <Deck 
                    seats={seats.lower} 
                    deckName="Lower" 
                    selectedSeats={selectedSeats} 
                    toggleSeat={toggleSeat} 
                />
            </div>
            
            {/* Confirmation Footer */}
            <div className="sticky bottom-0 w-full bg-white p-4 shadow-2xl border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">Selected Seats: <span className="font-semibold">{selectedSeats.map(s => s.seatNumber).join(', ') || 'None'}</span></p>
                <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-dark-grey">Total: ₹{totalCost}</span>
                    <button 
                        className={`py-3 px-8 text-white font-semibold rounded-lg transition-colors ${isConfirmDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-accent-green hover:bg-green-600'}`}
                        onClick={() => onConfirm(selectedSeats)}
                        disabled={isConfirmDisabled}
                    >
                        Confirm ({selectedSeats.length})
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SeatSelection;