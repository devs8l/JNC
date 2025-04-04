import React from 'react';

const Trust = () => {
  return (
    <div className="w-[90%] mx-auto px-4 py-8 text-center">
      {/* Header Button */}
      <div className="flex md:justify-center mb-12">
        <button className="bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-medium">
          Why Hospitals Trust JNC Tech
        </button>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-4xl text-left md:text-center w-[70%] md:w-full lg:text-5xl mb-10 md:mb-22 text-gray-800">
        We're Fast. Compliant. Reliable.
      </h1>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-1 md:w-[80%] mx-auto">
        {/* Feature 1 */}
        <div className="flex gap-3 md:flex-col items-start md:items-center">
          <div className="w-12 h-12 mb-4 flex items-center md:justify-center">
            <img src="/h-1.svg" alt="" />
          </div>
          <div className='flex flex-col items-start md:items-center'>
            <h3 className=" text-gray-600 text-xl">100% HIPAA-Compliant</h3>
            <p className="text-gray-600 text-xl">Deployments</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex gap-3 md:flex-col items-start md:items-center">
          <div className="w-12 h-12 mb-4 flex items-center md:justify-center">
            <img src="/h-2.svg" alt="" />
          </div>
          <div className='flex flex-col items-start md:items-center'>
            <h3 className=" text-gray-600 text-xl">Zero Downtime</h3>
            <p className="text-gray-600 text-xl">Migrations</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex gap-3 md:flex-col items-start md:items-center">
          <div className="w-12 h-12 mb-4 flex items-center md:justify-center">
            <img src="/h-3.svg" alt="" />
          </div>
          <div className='flex flex-col items-start md:items-center'>
            <h3 className=" text-gray-600 text-xl">Trusted by Hospitals, Labs,</h3>
            <p className="text-gray-600 text-xl">Clinics & Startups</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trust;