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
            Making Hospitals Ready to Deliver
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl ">
            Better, Faster <span className="text-blue-500">Care</span>
          </h2>
        </div>

        {/* Description paragraphs */}
        <div className="text-center mx-auto md:text-xl text-gray-600 max-w-3xl">
          <p className="mb-8">
            Modernizing your hospital shouldn’t feel like a black box. We’ve seen leaders stuck with outdated infra, rising tech costs, and no clear path forward.
          </p>

          <p>
            JNC Tech simplifies the journey. We act as your dedicated tech partner — modernizing your infra, integrating your systems, and unlocking AI use cases like MedCopilot — without disrupting care or burning budgets.
          </p>
        </div>
      </div>

      {/* Bottom border */}
      <div className="w-full h-px bg-gray-200 mt-16"></div>
    </div>
  );
};

export default CompanyValue;