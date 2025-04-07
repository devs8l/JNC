import React, { useEffect } from 'react';

const ServiceHero = ({ onLearnMoreClick }) => {
  const formId = 'w2oQAM'; // Your Tally form ID

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
    <div className="w-full py-12  sm:px-16">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5">
        {/* Left content */}
        <div className="w-full md:w-[40%] space-y-6 px-6 md:px-0">
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
            <button onClick={openContactForm} className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-sm font-medium transition-colors">
              Book a Free System Audit
            </button>
            <button onClick={onLearnMoreClick}  className="border border-blue-600 hover:border-gray-400 text-blue-500 px-20 py-3 rounded-sm font-medium transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="w-full md:w-[60%] md:h-[60vh] ">
          <img
            src="/ser-hero.png"
            alt="Mother and child smiling together"
            className="w-full h-full md:rounded-2xl object-cover shadow-md object-[60%_10%] ]"
          />
        </div>
      </div>

      <div className="w-full h-px bg-gray-200 mt-22"></div>
    </div>
  );
};

export default ServiceHero;