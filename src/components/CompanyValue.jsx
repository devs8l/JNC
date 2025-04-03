import React from 'react';

const CompanyValue = () => {
  return (
    <div className="w-full py-6 px-6 sm:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Blue pill button */}
        <div className="flex justify-center mb-12">
          <button className="bg-blue-500 text-white py-1 px-6 rounded-full font-medium">
            Why JNC Tech
          </button>
        </div>
        
        {/* Main headings */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl  mb-4">
            You Don't Need to Build a Tech Team.
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl ">
            You Just Need the <span className="text-blue-500">Right Tech Partner</span>.
          </h2>
        </div>
        
        {/* Description paragraphs */}
        <div className="text-center mx-auto md:text-xl text-gray-600 max-w-2xl">
          <p className="mb-8">
            Most healthcare providers are stuck between outdated systems
            and overpromising tech vendors. Building in-house takes too long.
            Hiring CTOs costs a fortune. And most software teams don't
            understand healthcare.
          </p>
          
          <p>
            That's why JNC Tech exists — a ready-made tech arm for hospitals,
            clinics, and healthtech startups. We handle everything from cloud
            migration to AI copilots & agents, with full compliance and speed.
          </p>
        </div>
      </div>
      
      {/* Bottom border */}
      <div className="w-full h-px bg-gray-200 mt-16"></div>
    </div>
  );
};

export default CompanyValue;