import React from 'react';

const ServiceHero = () => {
  return (
    <div className="w-full py-12 px-6 sm:px-16">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5">
        {/* Left content */}
        <div className="w-full md:w-[40%] space-y-6">
          <h1 className="text-4xl md:text-5xl  text-gray-800 leading-tight">
            Bringing technology
            <br />
            that cares, closer to you
          </h1>
          
          <p className="text-base md:text-xl text-gray-600 max-w-xl">
            JNC Tech helps hospitals, clinics, and physician-led groups
            become cloud-native and AI-ready. We modernize legacy
            systems, build patient portals, and integrate smart assistants
            – all in a plug-and-play model.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-sm font-medium transition-colors">
              Book a Free System Audit
            </button>
            <button className="border border-blue-600 hover:border-gray-400 text-blue-500 px-20 py-3 rounded-sm font-medium transition-colors">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Right image */}
        <div className="w-full md:w-[60%] md:h-[45vh]">
          <img 
            src="/ser-hero.png" 
            alt="Mother and child smiling together"
            className="w-full h-full rounded-lg object-cover shadow-md object-[60%_10%] ]"
          />
        </div>
      </div>
      
      <div className="w-full h-px bg-gray-200 mt-22"></div>
    </div>
  );
};

export default ServiceHero;