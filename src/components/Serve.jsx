import React from 'react';

const Serve = () => {
  return (
    <div className="w-[95%] py-12 px-6 sm:px-16 mx-auto border-b border-gray-300">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12 ">
        {/* Left image */}
        <div className="w-full md:w-1/2 h-full ">
          <img 
            src="/ser-2.png" 
            alt="Healthcare professional with headset at computer"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
        
        {/* Right content */}
        <div className="w-full md:w-1/2 space-y-6 h-full">
          {/* Blue pill button */}
          <div className="flex mb-12">
            <button className="bg-blue-500 text-white py-1 px-6 rounded-full font-medium">
              Who We Serve
            </button>
          </div>
          
          {/* Headings */}
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-2">
              We Work With Healthcare Teams
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-blue-500">
              Who Want to Move Fast.
            </h2>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 mb-8 md:text-xl">
            Whether you're a growing clinic or a mid-sized hospital, we plug
            into your existing workflow and modernize what matters most.
          </p>
          
          {/* Client types with icons */}
          <div className="space-y-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="text-blue-500 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <p className="text-gray-700 md:text-xl">Small to mid-sized hospitals (10-200 beds)</p>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="text-blue-500 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <p className="text-gray-700 md:text-xl">Diagnostic labs and multi-specialty clinics</p>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="text-blue-500 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <p className="text-gray-700 md:text-xl">Doctor-led organizations scaling operations digitally</p>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="text-blue-500 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <p className="text-gray-700 md:text-xl">Health-tech startups building custom platforms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serve;