import React from 'react';

const AboutJNC = () => {
  return (
    <div className=" w-full  py-8">
      {/* About JNC Tech Section */}
      <div className="flex justify-center mb-4">
        <button className="bg-blue-500 text-white text-sm px-4 py-1 rounded-full font-medium">
          About JNC Tech
        </button>
      </div>

      {/* Mission Statement with Background Image */}
      <div className="text-center mb-4 h-[70vh] px-4 py-12 relative rounded-lg overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 top-[-100px]">
          <img
            src="/Vision.png"
            alt="Doctor holding patient's hand"
            className="w-full h-full object-cover rounded-lg"
          />
          {/* Semi-transparent overlay for better text readability */}
          <div className="absolute inset-0 bg-[#ffffff60] "></div>
        </div>

        {/* Text Content */}
        <div className="relative z-10">
          <h2 className="text-2xl md:text-2xl w-full md:w-2/3 mx-auto text-gray-800 mb-4">
            At JNC Tech, we're committed to building a global healthcare ecosystem that solves critical problems and elevates patient care in India and the US. MedCopilot marks the beginning of our ambitious journey.
          </h2>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-gray-100 rounded-lg p-16 mb-4">
        <h3 className="text-3xl text-center  text-gray-700 mb-25">
          Our Values
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Transparency */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <img src="/heart.svg" alt="" />
            </div>
            <h4 className="font-semibold text-lg mb-2">Transparency</h4>
            <p className="text-sm text-gray-600 w-2/3 mt-2">
              Clear, open communication <br /> in all interactions.
            </p>
          </div>

          {/* Security */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <img src="/security.svg" alt="" />
            </div>
            <h4 className="font-semibold text-lg mb-2">Security</h4>
            <p className="text-sm text-gray-600 w-2/3 mt-2">
              Ensuring strict data <br /> protection and privacy.
            </p>
          </div>

          {/* Innovation */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <img src="/bulb.svg" alt="" />
            </div>
            <h4 className="font-semibold text-lg mb-2">Innovation</h4>
            <p className="text-sm text-gray-600 w-2/3 mt-2">
              Continuously advancing healthcare with cutting-edge technology.
            </p>
          </div>

          {/* Patient-centricity */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <img src="/patient.svg" alt="" />
            </div>
            <h4 className="font-semibold text-lg mb-2">Patient-centricity</h4>
            <p className="text-sm text-gray-600 w-2/3 mt-2">
              Focused solutions that enhance patient experiences and outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* HIPAA Compliance Banner */}
      <div className="bg-[#1A73E81A] rounded-lg p-10 text-center">
        <h3 className="text-3xl text-blue-500 font-medium w-1/4 mx-auto">
          All solutions are HIPAA compliant and regulated.
        </h3>
      </div>
    </div>
  );
};

export default AboutJNC;