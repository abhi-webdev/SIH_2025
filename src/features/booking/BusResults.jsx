// src/components/BusResults.jsx

import React from 'react';

// Data structure for a single bus service card
const mockBusData = [
  { id: 1, name: 'Acella', time: '05:50AM', duration: '12h 00m', arrival: '05:50PM', rating: 4.4, price: 689, seats: 20, type: 'AC Sleeper' },
  { id: 2, name: 'KPN Travels', time: '06:30AM', duration: '12h 30m', arrival: '07:00PM', rating: 4.6, price: 732, seats: 15, type: 'Non-AC' },
  { id: 3, name: 'SRS', time: '10:00AM', duration: '13h 00m', arrival: '11:00PM', rating: 4.9, price: 749, seats: 12, type: 'AC Seater' },
];

const BusCard = ({ bus, onSelectBus }) => {
    return (
        <div 
            className="bg-white p-4 rounded-xl shadow-md mb-4 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => onSelectBus(bus.id)}
        >
            <div className="flex justify-between items-start">
                {/* Left Side: Bus Name and Times */}
                <div>
                    <h3 className="text-lg font-bold text-dark-grey">{bus.name}</h3>
                    <div className="text-xs text-gray-500 mt-1">
                        <span className="font-semibold text-sm text-primary-dark">{bus.time}</span> 
                        <span className="mx-2">({bus.duration})</span>
                        <span className="font-semibold text-sm text-primary-dark">{bus.arrival}</span>
                    </div>
                </div>
                
                {/* Right Side: Rating and Price */}
                <div className="flex flex-col items-end">
                    <div className="flex items-center space-x-1 bg-accent-green text-white px-2 py-0.5 rounded-md text-xs font-semibold">
                        <span>{bus.rating}</span>
                        {/* Star Icon Placeholder */}
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.4 2.4 7.2L12 18.8l-6 4.4 2.4-7.2-6-4.4h7.6z"/></svg>
                    </div>
                    <div className="text-xl font-bold text-dark-grey mt-2">
                        ₹{bus.price}
                    </div>
                </div>
            </div>

            {/* Bottom Row: Details and Action */}
            <div className="flex justify-between items-center text-sm text-gray-600 mt-4 pt-3 border-t border-gray-100">
                <div className="flex space-x-4">
                    <span className="bg-gray-100 px-2 py-0.5 rounded-full">{bus.type}</span>
                    <span className="font-semibold text-status-red">{bus.seats} Seats Left</span>
                </div>
                <button 
                    className="text-primary-dark font-semibold hover:text-accent-green transition-colors"
                    onClick={(e) => { e.stopPropagation(); onSelectBus(bus.id); }}
                >
                    View Seats &rarr;
                </button>
            </div>
        </div>
    );
};


const BusResults = ({ from, to, date, onSelectBus }) => {
    // Determine the day for display
    const day = new Date(date).toDateString().split(' ')[0]; 

    return (
        <div className="flex-1 p-4 overflow-y-auto">
            {/* Search Summary Bar */}
            <div className="bg-primary-dark text-white p-3 rounded-xl mb-4 shadow-lg">
                <div className="flex justify-between text-lg font-bold">
                    <span>{from}</span>
                    <span>{to}</span>
                </div>
                <div className="flex justify-between text-sm mt-1 text-gray-300">
                    <span className="font-semibold">{day}, {date}</span>
                    <span className="font-medium">{mockBusData.length} Buses Found</span>
                </div>
            </div>

            {/* Filter/Sort Bar */}
            <div className="flex justify-between text-sm mb-4">
                <button className="text-primary-dark font-medium px-3 py-1 bg-white rounded-full shadow-sm border border-gray-200">
                    Filter
                </button>
                <button className="text-primary-dark font-medium px-3 py-1 bg-white rounded-full shadow-sm border border-gray-200">
                    Sort: Price
                </button>
            </div>

            {/* List of Bus Cards */}
            {mockBusData.map(bus => (
                <BusCard key={bus.id} bus={bus} onSelectBus={onSelectBus} />
            ))}

            <div className="h-10"></div> {/* Spacer for the footer */}
        </div>
    );
};

export default BusResults;