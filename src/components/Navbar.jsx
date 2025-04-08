import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const formId = 'wA9vdy'; // Your Tally form ID
  const location = useLocation();

  // Load Tally script
  useEffect(() => {
    if (!window.Tally) {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

  // Function to check if current path matches the link
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="w-full bg-white py-1 px-6 sm:px-15">
      <div className="mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-blue-500 font-bold text-3xl mr-5">
          <img src="/jnc.svg" className='w-20 h-20' alt="" />
        </div>

        {/* Desktop Navigation - Middle Links */}
        <div className="hidden md:flex items-center space-x-8 ml-15">
          <a 
            href="/" 
            className={`text-gray-800 font-medium text-md hover:text-primary ${isActive('/') ? 'text-primary' : ''}`}
          >
            Home
          </a>
          <a 
            href="/medcopilot" 
            className={`text-gray-800 font-medium text-md hover:text-primary ${isActive('/medcopilot') ? 'text-primary' : ''}`}
          >
            MedCopilot
          </a>
          <a 
            href="/services" 
            className={`text-gray-800 font-medium text-md hover:text-primary ${isActive('/services') ? 'text-primary' : ''}`}
          >
            Services
          </a>
        </div>

        {/* Empty space to push Contact Us to far right */}
        <div className="hidden md:block flex-grow"></div>

        {/* Contact Us Button */}
        <div className="hidden md:block">
          <button onClick={openContactForm} className="bg-primary rounded-sm text-white px-6 py-2 text-sm font-medium">
            Contact Us
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center p-2 rounded text-gray-800"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 px-2">
          <div className="flex flex-col space-y-4 pt-2 pb-3">
            <a 
              href="/" 
              className={`text-gray-800 font-medium text-sm block py-2 ${isActive('/') ? 'text-primary' : ''}`}
            >
              Home
            </a>
            <a 
              href="/medcopilot" 
              className={`text-gray-800 font-medium text-sm block py-2 ${isActive('/medcopilot') ? 'text-primary' : ''}`}
            >
              MedCopilot
            </a>
            <a 
              href="/services" 
              className={`text-gray-800 font-medium text-sm block py-2 ${isActive('/services') ? 'text-primary' : ''}`}
            >
              Services
            </a>
            <button onClick={openContactForm} className="bg-primary rounded-sm text-white px-4 py-2 text-sm font-medium w-1/3 mt-2">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;