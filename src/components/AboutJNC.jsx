import React from 'react';

const AboutJNC = () => {
  return (
    <div className=" w-[90%] mx-auto ">

      {/* Our Values Section */}
      <div className="  px-16 py-10  ">
        <h3 className="text-5xl text-center  text-gray-700 mb-25">
          Our Values
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Transparency */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-8">
              <img src="/heart.svg" alt="" />
            </div>
            <h4 className=" text-2xl mb-2">Transparency</h4>
            <p className="text-lg text-gray-600 w-1/2 mt-2">
              Clear, open communication <br /> in all interactions.
            </p>
          </div>

          {/* Security */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-8">
              <img src="/security.svg" alt="" />
            </div>
            <h4 className=" text-2xl mb-2">Security</h4>
            <p className="text-lg text-gray-600 w-1/2 mt-2">
              Ensuring strict data <br /> protection and privacy.
            </p>
          </div>

          {/* Innovation */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-8">
              <img src="/bulb.svg" alt="" />
            </div>
            <h4 className=" text-2xl mb-2">Innovation</h4>
            <p className="text-lg text-gray-600 w-2/3 mt-2">
              Continuously advancing healthcare with cutting-edge technology.
            </p>
          </div>

          {/* Patient-centricity */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-8">
              <img src="/patients.svg" alt="" />
            </div>
            <h4 className=" text-2xl mb-2">Patient-centricity</h4>
            <p className="text-lg text-gray-600 w-[80%] mt-2">
              Focused solutions that enhance patient experiences and outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* HIPAA Compliance Banner */}
      
    </div>
  );
};

export default AboutJNC;