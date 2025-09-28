// src/components/ModalWrapper.jsx

import React from 'react';

const ModalWrapper = ({ children, onClose, title = '' }) => {
    return (
        // Modal Overlay
        <div 
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-end justify-center sm:items-center p-4"
            onClick={onClose} // Clicking the backdrop closes the modal
        >
            {/* Modal Content Container */}
            <div 
                className="bg-white rounded-t-xl sm:rounded-xl w-full max-w-sm transform transition-all shadow-2xl"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
            >
                {/* Modal Header */}
                <div className="flex justify-between items-center p-4 border-b border-gray-100">
                    <h3 className="text-lg font-semibold text-primary-dark">{title}</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        {/* Close Icon (X) */}
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
                
                {/* Modal Body */}
                <div className="p-4 max-h-[80vh] overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ModalWrapper;