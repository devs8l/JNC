import React from 'react';

const HeroBanner = () => {
  return (
    <div className="relative w-full h-10 sm:h-190 mt-15  overflow-hidden object-contain">
      {/* Background Image */}
      <img
        src="/doc-1.png"
        alt="Healthcare professional"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#00000059] "></div>

      {/* Centered Tagline */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className='bg-[#05122870] w-full h-full absolute'>

        </div>
        <h2 className="text-white text-xl sm:text-4xl md:text-5xl font-medium text-center px-4 z-10 w-1/3 mx-auto">
          Let’s Build The Future Of
          Healthcare Together
        </h2>
      </div>
    </div>
  );
};

export default HeroBanner;