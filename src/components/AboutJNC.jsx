import React from 'react';

const AboutJNC = () => {
  return (
    <div className=" w-[90%] mx-auto border-b-1 border-gray-300 mb-8">

      {/* Our Values Section */}
      <div className="  px-16 py-10 pb-20 mb-10 border-b-1 border-gray-300">
        <h3 className="text-3xl text-center  text-gray-700 mb-25">
          Our Values
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Transparency */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-8">
              <img src="/heart.svg" alt="" />
            </div>
            <h4 className=" text-lg mb-2">Transparency</h4>
            <p className="text-sm text-gray-600 w-2/3 mt-2">
              Clear, open communication <br /> in all interactions.
            </p>
          </div>

          {/* Security */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-8">
              <img src="/security.svg" alt="" />
            </div>
            <h4 className=" text-lg mb-2">Security</h4>
            <p className="text-sm text-gray-600 w-2/3 mt-2">
              Ensuring strict data <br /> protection and privacy.
            </p>
          </div>

          {/* Innovation */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-8">
              <img src="/bulb.svg" alt="" />
            </div>
            <h4 className=" text-lg mb-2">Innovation</h4>
            <p className="text-sm text-gray-600 w-2/3 mt-2">
              Continuously advancing healthcare with cutting-edge technology.
            </p>
          </div>

          {/* Patient-centricity */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <img src="/patients.svg" alt="" />
            </div>
            <h4 className=" text-lg mb-2">Patient-centricity</h4>
            <p className="text-sm text-gray-600 w-2/3 mt-2">
              Focused solutions that enhance patient experiences and outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* HIPAA Compliance Banner */}
      <div className="  p-10 text-center mt-4 mb-10 flex flex-col gap-14">
        <h3 className="text-3xl text-blue-500 font-medium  mx-auto">
          All solutions are HIPAA compliant and regulated.
        </h3>
        <div className='flex w-full mx-auto items-center justify-center gap-4'>
          <div className='flex flex-col items-center'>
            <img src="/foot-1.png" alt="HIPAA" className='h-15 w-auto' />
            {/* <span className='text-xs text-gray-500 mt-1'>(Coming soon)</span> */}
          </div>
          <div className='flex flex-col items-center'>
            <img src="/foot-2.png" alt="HL7 FHIR" className='h-15 w-auto filter grayscale' />
            {/* <span className='text-xs text-gray-500 mt-1'>(Coming soon)</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutJNC;