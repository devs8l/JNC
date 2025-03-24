import React from 'react';

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] mt-15  overflow-hidden object-contain">
      {/* Background Image */}
      <video
        src="/jnc-banner.mp4"
        className="w-full h-full  object-cover sm:object-[0%_10%] object-[10%_10%]"
        autoPlay
        loop
        muted
        playsInline
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