import React from 'react';

const Trust = () => {
  return (
    <div className="w-[90%] mx-auto px-4 py-8 text-center">
      {/* Header Button */}
      <div className="flex justify-center mb-12">
        <button className="bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-medium">
          Why Hospitals Trust JNC Tech
        </button>
      </div>
      
      {/* Main Heading */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl mb-22 text-gray-800">
        We're Fast. Compliant. Reliable.
      </h1>
      
      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-1 md:w-[80%] mx-auto">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 mb-4 flex items-center justify-center">
            <svg className="w-10 h-10 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#1D4ED8" strokeWidth="2" />
              <path d="M19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12Z" stroke="#1D4ED8" strokeWidth="2" />
              <path d="M12 6V8M12 16V18M6 12H8M16 12H18" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <h3 className=" text-gray-600 text-xl">100% HIPAA-Compliant</h3>
          <p className="text-gray-600 text-xl">Deployments</p>
        </div>
        
        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 mb-4 flex items-center justify-center">
            <svg className="w-10 h-10 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#1D4ED8" strokeWidth="2" />
              <path d="M12 8V12L16 14" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M16 8L19 11" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <h3 className=" text-gray-600 text-xl">Zero Downtime</h3>
          <p className="text-gray-600 text-xl">Migrations</p>
        </div>
        
        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 mb-4 flex items-center justify-center">
            <svg className="w-10 h-10 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15L8.5 11.5M12 15L15.5 11.5M12 15V4M19 21H5C4.44772 21 4 20.5523 4 20V18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18V20C20 20.5523 19.5523 21 19 21Z" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className=" text-gray-600 text-xl">Trusted by Hospitals, Labs,</h3>
          <p className="text-gray-600 text-xl">Clinics & Startups</p>
        </div>
      </div>
    </div>
  );
};

export default Trust;