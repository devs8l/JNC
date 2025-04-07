import React from 'react';

const Serve = () => {
  return (
    <div className="md:w-[95%] py-12 sm:px-16 mx-auto border-b border-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8 lg:gap-12 h-full">
        {/* Left image - now using grid and height control */}
        <div className="w-full h-full min-h-[300px] md:min-h-[400px]">
          <img
            src="/ser-2.png"
            alt="Healthcare professional with headset at computer"
            className="w-full h-full md:rounded-lg object-cover object-center"
          />
        </div>

        {/* Right content - now matching image height */}
        <div className="w-full px-6 md:px-0 h-full flex flex-col justify-between">
          <div className="space-y-6">
            {/* Blue pill button */}
            <div className="flex mb-4 md:mb-12">
              <button className="bg-blue-500 text-white py-1 px-6 rounded-full font-medium">
                Who We Serve
              </button>
            </div>

            {/* Headings */}
            <div className="mb-4 md:mb-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-800 mb-2">
                We Work With Healthcare Teams  <span className="text-3xl md:text-4xl lg:text-5xl text-blue-500">Who Want to Innovate</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6 md:mb-8 md:text-xl">
              Whether you're a growing clinic or a mid-sized hospital, we plug
              into your existing workflow and modernize what matters most.
            </p>
          </div>

          {/* Client types with icons - now with flex-grow to fill space */}
          <div className="space-y-10 mb-0 md:mb-6 flex-grow flex flex-col justify-center">
            <div className="flex items-start gap-4">
              <div className="text-blue-500 mt-1">
                <img src="/ws-1.svg" alt="" className='w-6 h-6' />
              </div>
              <p className="text-gray-700 md:text-xl">Small to mid-sized hospitals (10-200 beds)</p>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-blue-500 mt-1">
                <img src="/ws-2.svg" alt="" className='w-6 h-6' />
              </div>
              <p className="text-gray-700 md:text-xl">Diagnostic labs and multi-specialty clinics</p>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-blue-500 mt-1">
                <img src="/ws-3.svg" alt="" className='w-6 h-6' />
              </div>
              <p className="text-gray-700 md:text-xl">Doctor-led organizations scaling operations digitally</p>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-blue-500 mt-1">
                <img src="/ws-4.svg" alt="" className='w-6 h-6' />
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