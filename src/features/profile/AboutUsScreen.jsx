// src/features/profile/AboutUsScreen.jsx

import React from 'react';
import LogoComponent from '../../components/LogoComponent'; // Assuming LogoComponent is now small and reusable

const AboutUsScreen = () => {
    return (
        <div className="flex flex-col h-full bg-light-bg p-4 overflow-y-auto">
            
            <div className="bg-white p-6 rounded-xl shadow-md mb-6 text-center">
                {/* Logo with Name */}
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 mb-3">
                        {/* Placeholder for Logo SVG/Image */}
                        <div className="w-full h-full bg-primary-dark rounded-full flex items-center justify-center text-white text-3xl font-bold">A</div>
                    </div>
                    <h2 className="text-2xl font-bold text-primary-dark">Arrowspeed</h2>
                </div>
                
                <p className="text-sm text-gray-700 mt-4 text-justify">
                    Lorem ipsum dolor sit amet consectetur. Amet massa velit eget sed sed ut tortor porttitor. Pulvinar porttitor porttitor pulvinar tempor pellentesque. Ornare dictumst porta
                    purus porttitor porta pulvinar.
                </p>
                <p className="text-sm text-gray-700 mt-3 text-justify">
                    Amet massa velit eget sed sed ut tortor porttitor. Pulvinar porttitor porttitor pulvinar tempor pellentesque. Ornare dictumst porta purus porttitor porta pulvinar.
                </p>
            </div>
            
            <h3 className="text-lg font-bold text-primary-dark mb-3">Official Documents</h3>
            <div className="bg-white rounded-xl shadow-md overflow-hidden text-sm">
                <div className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">Terms and Conditions</div>
                <div className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">Privacy Policy</div>
                <div className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">Official Website</div>
                <div className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">Licenses</div>
                <div className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">User Agreement</div>
            </div>
            
            <p className="text-center text-xs text-gray-500 mt-6 pb-4">App Version: v4.0.3</p>
            <div className="h-10"></div> 
        </div>
    );
};

export default AboutUsScreen;