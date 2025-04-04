import React, { useEffect } from 'react';

const HeroBanner = ({heading,cta,video}) => {
  const formId = 'wA9vdy'; // Your Tally form ID

  // Load Tally script
  useEffect(() => {
    if (!window.Tally) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);
  const openContactForm = () => {
    if (window.Tally) {
      window.Tally.openPopup(formId, {
        layout: 'modal',
        width: 700,
        overlay: true,
        hideTitle: true,
        autoClose: 3000,
        onSubmit: (payload) => {
          console.log('Form submitted:', payload);
          // Handle form submission here
        },
        onOpen: () => console.log('Form opened'),
        onClose: () => console.log('Form closed')
      });
    } else {
      console.error('Tally script not loaded yet');
    }
  };
  return (
    <div className="relative w-full h-[80vh] sm:h-[90vh] mt-15  overflow-hidden object-contain">
      {/* Background Image */}
      <video
        src={video}
        className="w-full sm:h-full h-[120%]  sm:scale-[1] object-cover sm:object-[0%_10%] object-[45%_0%]"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#00000059] "></div>

      {/* Centered Tagline */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
        <div className='bg-[#05122870] w-full h-full absolute'>

        </div>
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-medium text-center px-4 z-10 w-full sm:w-1/3 mx-auto">
          {heading}
        </h2>

        <button onClick={openContactForm} className='bg-primary rounded-sm text-white px-6 py-2 z-1'>
          {cta}
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;