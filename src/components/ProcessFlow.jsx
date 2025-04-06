import React from 'react';
import { CheckCircle, FileText, Zap, TrendingUp, Sparkles } from 'lucide-react';

const ProcessFlow = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Top border line */}
      <div className="border-t border-gray-200 mb-12"></div>

      {/* How It Works button */}
      <div className="flex md:justify-center mb-6">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-medium">
          How It Works
        </button>
      </div>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl md:text-center mb-16 text-gray-800">
        Built for Healthcare
      </h2>

      {/* Process flow - Horizontal for desktop */}
      <div className="hidden md:flex justify-between items-start mb-16 relative">
        {/* Step 1 */}
        <div className="flex flex-col items-center w-1/5 z-10">
          <div className="bg-blue-400 rounded-full h-16 w-16 flex items-center justify-center text-white mb-4">
            <CheckCircle size={24} />
          </div>
          <p className="text-center text-gray-800">
            <span className="block font-medium">Free System</span>
            <span className="block">Audit</span>
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center w-1/5 z-10">
          <div className="bg-blue-400 rounded-full h-16 w-16 flex items-center justify-center text-white mb-4">
            <FileText size={24} />
          </div>
          <p className="text-center text-gray-800">
            <span className="block font-medium">Tailored</span>
            <span className="block">Modernization Plan</span>
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center w-1/5 z-10">
          <div className="bg-blue-500 rounded-full h-16 w-16 flex items-center justify-center text-white mb-4">
            <Zap size={24} />
          </div>
          <p className="text-center text-gray-800">
            <span className="block font-medium">Rapid Implementation</span>
            <span className="block">(within 30 days)</span>
          </p>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-center w-1/5 z-10">
          <div className="bg-blue-500 rounded-full h-16 w-16 flex items-center justify-center text-white mb-4">
            <TrendingUp size={24} />
          </div>
          <p className="text-center text-gray-800">
            <span className="block font-medium">Track Results (speed,</span>
            <span className="block">AI usage, cost saved)</span>
          </p>
        </div>

        {/* Step 5 */}
        <div className="flex flex-col items-center w-1/5 z-10">
          <div className="bg-blue-600 rounded-full h-16 w-16 flex items-center justify-center text-white mb-4">
            <Sparkles size={24} />
          </div>
          <p className="text-center text-gray-800">
            <span className="block font-medium">Scale with AI,</span>
            <span className="block">securely</span>
          </p>
        </div>

        {/* Dotted line across all steps - Positioned absolutely */}
        <div className="absolute top-8 left-0 right-0 w-full" style={{ zIndex: 1 }}>
          <div className="border-t-2 border-dashed border-blue-300 w-4/5 mx-auto"></div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="flex md:hidden flex-col items-left mb-16">
        <div className="flex items-center ">
          <div className="bg-blue-400 rounded-full h-12 w-12 flex items-center justify-center text-white">
            <CheckCircle size={20} />
          </div>
          <div className="ml-4">
            <p className="text-gray-800 font-medium">Free System Audit</p>
          </div>
        </div>

        {/* Dotted line vertical 1 */}
        <div className="h-10 border-l-2 ml-6 border-dashed border-blue-300"></div>

        <div className="flex items-center ">
          <div className="bg-blue-400 rounded-full h-12 w-12 flex items-center justify-center text-white">
            <FileText size={20} />
          </div>
          <div className="ml-4">
            <p className="text-gray-800 font-medium">Tailored Modernization Plan</p>
          </div>
        </div>

        {/* Dotted line vertical 2 */}
        <div className="h-10 ml-6 border-l-2 border-dashed border-blue-300"></div>

        <div className="flex items-center ">
          <div className="bg-blue-500 rounded-full h-12 w-12 flex items-center justify-center text-white">
            <Zap size={20} />
          </div>
          <div className="ml-4">
            <p className="text-gray-800 font-medium">Rapid Implementation (within 30 days)</p>
          </div>
        </div>

        {/* Dotted line vertical 3 */}
        <div className="h-10 ml-6 border-l-2 border-dashed border-blue-300"></div>

        <div className="flex items-center ">
          <div className="bg-blue-500 rounded-full h-12 w-12 flex items-center justify-center text-white">
            <TrendingUp size={20} />
          </div>
          <div className="ml-4">
            <p className="text-gray-800 font-medium">Track Results (speed, AI usage, cost saved)</p>
          </div>
        </div>

        {/* Dotted line vertical 4 */}
        <div className="h-10 ml-6 border-l-2 border-dashed border-blue-300"></div>

        <div className="flex items-center">
          <div className="bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center text-white">
            <Sparkles size={20} />
          </div>
          <div className="ml-4">
            <p className="text-gray-800 font-medium">Scale with AI, securely</p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <button className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg font-medium w-full md:w-auto md:min-w-48 mx-auto">
          Book Your Free Audit
        </button>
      </div>

      {/* Bottom border line */}
      <div className="border-t border-gray-200 mt-12"></div>
    </div>
  );
};

export default ProcessFlow;