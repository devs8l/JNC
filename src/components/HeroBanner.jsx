import React from 'react';

const HeroBanner = () => {
  return (
    <div className="relative w-full h-10 sm:h-140 mt-4 rounded-lg overflow-hidden object-contain">
      {/* Background Image */}
      <img
        src="/doc-2.gif"
        alt="Healthcare professional"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#00000059] "></div>
      
      {/* Centered Tagline */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-medium text-center px-4">
           tagline here
        </h2>
      </div>
    </div>
  );
};

export default HeroBanner;