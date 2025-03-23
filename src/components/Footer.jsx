import React from 'react'

const Footer = () => {
  return (
    <div className='grid mt-20 grid-cols-1 md:grid-cols-5 gap-y-8 md:gap-8 px-4 md:px-8 py-8 md:py-16 bg-white'>
      {/* Logo - Always shows at top */}
      <div className='md:hidden w-16 h-auto mb-4'>
        <img src="/jnc.svg" alt="" />
      </div>
      
      {/* Mobile: Two column grid for Company and Follow Us */}
      <div className='grid grid-cols-2 gap-4 md:hidden'>
        {/* Company Section - Mobile */}
        <div className='flex flex-col gap-3'>
          <h3 className='font-medium text-gray-800 mb-2'>Company</h3>
          <a href="#" className='text-gray-600 hover:text-blue-500 text-sm'>Company</a>
          <a href="#" className='text-gray-600 hover:text-blue-500 text-sm'>Blog</a>
          <a href="#" className='text-gray-600 hover:text-blue-500 text-sm'>Resources</a>
          <a href="#" className='text-gray-600 hover:text-blue-500 text-sm'>Careers</a>
          <a href="#" className='text-gray-600 hover:text-blue-500 text-sm'>Privacy Policy</a>
          <a href="#" className='text-gray-600 hover:text-blue-500 text-sm'>DPA</a>
          <a href="#" className='text-gray-600 hover:text-blue-500 text-sm'>Contact Us</a>
        </div>
        
        {/* Follow Us Section - Mobile */}
        <div className='flex flex-col gap-3'>
          <h3 className='font-medium text-gray-800 mb-2'>Follow Us</h3>
          <a href="#" className='text-gray-600 hover:text-blue-500 text-sm'>LinkedIn</a>
          <a href="#" className='text-gray-600 hover:text-blue-500 text-sm'>X (Formerly Twitter)</a>
          <a href="#" className='text-gray-600 hover:text-blue-500 text-sm'>Instagram</a>
        </div>
      </div>
      
      {/* Subscribe Section - Mobile */}
      <div className='md:hidden flex flex-col gap-3 mt-4'>
        <h3 className='font-medium text-gray-800 mb-2'>Subscribe to Newsletter</h3>
        <div className='flex border-b border-gray-300'>
          <input 
            type="email" 
            placeholder="you@gmail.com" 
            className='py-2 px-0 focus:outline-none flex-grow bg-transparent text-sm'
          />
          <button className='text-blue-500 ml-2'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Certificates Section - Mobile (below subscribe) */}
      <div className='md:hidden flex gap-6 mt-8 justify-center'>
        <div className='flex flex-col items-center'>
          <img src="/foot-1.png" alt="HIPAA" className='h-12 w-auto' />
          <span className='text-xs text-gray-500 mt-1'>(Coming soon)</span>
        </div>
        <div className='flex flex-col items-center'>
          <img src="/foot-2.png" alt="HL7 FHIR" className='h-12 w-auto filter grayscale' />
          <span className='text-xs text-gray-500 mt-1'>(Coming soon)</span>
        </div>
      </div>

      {/* DESKTOP LAYOUT BELOW */}
      {/* Logo and Certificates Section - Desktop */}
      <div className='hidden md:flex flex-col gap-6'>
        <div className='w-20 h-20'>
          <img src="/jnc.svg" alt="" />
        </div>
        <h3 className='text-sec-text font-medium text-xl'>Certificates</h3>
        <div className='flex gap-6 mt-2'>
          <div className='flex flex-col items-center'>
            <img src="/foot-1.png" alt="HIPAA" className='h-15 w-auto' />
            <span className='text-xs text-gray-500 mt-2'>(Coming soon)</span>
          </div>
          <div className='flex flex-col items-center'>
            <img src="/foot-2.png" alt="HL7 FHIR" className='h-15 w-auto filter grayscale' />
            <span className='text-xs text-gray-500 mt-2'>(Coming soon)</span>
          </div>
        </div>
      </div>

      {/* Company Section - Desktop */}
      <div className='hidden md:flex flex-col gap-4'>
        <h3 className='font-bold text-gray-800 mb-2'>Company</h3>
        <a href="#" className='text-gray-600 hover:text-blue-500'>Company</a>
        <a href="#" className='text-gray-600 hover:text-blue-500'>Blog</a>
        <a href="#" className='text-gray-600 hover:text-blue-500'>Resources</a>
        <a href="#" className='text-gray-600 hover:text-blue-500'>Careers</a>
        <a href="#" className='text-gray-600 hover:text-blue-500'>Privacy Policy</a>
        <a href="#" className='text-gray-600 hover:text-blue-500'>DPA</a>
        <a href="#" className='text-gray-600 hover:text-blue-500'>Contact Us</a>
      </div>

      {/* Solutions Section - Desktop Only */}
      <div className='hidden md:flex flex-col gap-4'>
        <h3 className='font-bold text-gray-800 mb-2'>Solutions</h3>
        <a href="#" className='text-gray-600 hover:text-blue-500'>Cloud Migration</a>
        <a href="#" className='text-gray-600 hover:text-blue-500'>Gen-AI Solutions</a>
        <a href="#" className='text-gray-600 hover:text-blue-500'>Security Solutions</a>
        <a href="#" className='text-gray-600 hover:text-blue-500'>Application Modernization</a>
      </div>

      {/* Follow Us Section - Desktop */}
      <div className='hidden md:flex flex-col gap-4'>
        <h3 className='font-bold text-gray-800 mb-2'>Follow Us</h3>
        <a href="#" className='text-gray-600 hover:text-blue-500'>LinkedIn</a>
        <a href="#" className='text-gray-600 hover:text-blue-500'>X (Formerly Twitter)</a>
        <a href="#" className='text-gray-600 hover:text-blue-500'>Instagram</a>
      </div>

      {/* Subscribe Section - Desktop */}
      <div className='hidden md:flex flex-col gap-4'>
        <h3 className='font-bold text-gray-800 mb-2'>Subscribe to Newsletter</h3>
        <div className='flex'>
          <input 
            type="email" 
            placeholder="you@gmail.com" 
            className='border-b border-gray-300 py-2 px-3 focus:outline-none focus:border-blue-500 flex-grow bg-transparent'
          />
          <button className='text-blue-500 ml-2'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className='col-span-1 md:col-span-5 mt-4 md:mt-8 text-center text-blue-500 text-xs md:text-base'>
        @2025 MedCopilot
      </div>
    </div>
  )
}

export default Footer