import React, { useState, useEffect } from 'react'

const Hero = () => {
    const [isHovered, setIsHovered] = useState(window.innerWidth < 640);

    useEffect(() => {
        const handleResize = () => {
            setIsHovered(window.innerWidth < 640);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div
            className={`w-full ${isHovered ? 'bg-[#121820]' : 'bg-white'} mt-5 overflow-hidden min-h-screen relative flex flex-col items-center transition-colors duration-300`}
            onMouseEnter={() => window.innerWidth >= 640 && setIsHovered(true)}
            onMouseLeave={() => window.innerWidth >= 640 && setIsHovered(false)}
        >
            {/* Hero Section */}
            <section className="w-[95%] flex flex-col md:flex-row py-20 px-2 justify-around items-center border-t-1 border-[#ffffff3c] border-b-1">
                {/* Left Content */}
                <div className="w-full sm:w-[35%] flex flex-col gap-8 justify-center md:pr-8">
                    <div className="mb-4">
                        <span className="bg-blue-500 text-white text-sm px-4 py-1 rounded-full">Our Product</span>
                    </div>

                    <h2 className={`text-3xl md:text-5xl ${isHovered ? 'text-gray-100' : 'text-gray-800'} mb-2 transition-colors duration-300`}>
                        <span className="block sm:inline">Meet MedCopilot</span>{' '}
                        <span className="block sm:inline">An AI Copilot for Doctors</span>
                    </h2>

                    <p className={`${isHovered ? 'text-gray-300' : 'text-gray-700'} my-4 text-xl sm:text-2xl w-full sm:w-[90%] transition-colors duration-300`}>
                        Our first groundbreaking product, streamlines patient data, provides insightful summaries, and enables doctors to spend more quality time with each patient.
                    </p>

                    <div className="mt-4 hidden sm:block">
                        <button className={`px-16 py-3 rounded-xs text-sm font-medium ${isHovered ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'} transition duration-200`}>
                            Know More
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full md:w-[70%] overflow-hidden mt-6 md:mt-0 h-[50vh] md:h-[50vh] relative">
                    <img
                        src="/doc-1.png"
                        alt="Doctor using MedCopilot on tablet"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-full mt-4 sm:hidden">
                    <button className={`w-full py-3 rounded-xs text-sm font-medium ${isHovered ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'} transition duration-200`}>
                        Know More
                    </button>
                </div>
            </section>

            {/* Key Benefits Section */}
            <section className="w-[95%] py-26 px-6 flex flex-col items-center z-1 border-b-1 border-[#ffffff3c]">
                <h2 className={`text-3xl ${isHovered ? 'text-white' : 'text-gray-800'} text-center mb-16 transition-colors duration-300`}>Key Benefits</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                    {/* Efficiency */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 mb-6 flex items-center justify-center">
                            <img src="/Efficiency.svg" alt="" />
                        </div>
                        <h3 className={`text-xl ${isHovered ? 'text-white' : 'text-gray-800'} mb-2 transition-colors duration-300`}>Efficiency</h3>
                        <p className={`${isHovered ? 'text-gray-400' : 'text-gray-600'} text-sm transition-colors duration-300 w-3/4`}>
                            Reduces consultation times by <br />10-15 minutes per patient.
                        </p>
                    </div>

                    {/* Insights */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 mb-6 flex items-center justify-center">
                            <img src="/Insights.svg" alt="" />
                        </div>
                        <h3 className={`text-xl ${isHovered ? 'text-white' : 'text-gray-800'} mb-2 transition-colors duration-300`}>Insights</h3>
                        <p className={`${isHovered ? 'text-gray-400' : 'text-gray-600'} text-sm transition-colors duration-300 w-3/4`}>
                            Instant, effortless access to <br /> critical patient data.
                        </p>
                    </div>

                    {/* Engagement */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 mb-6 flex items-center justify-center">
                            <img src="/Interaction.svg" alt="" />
                        </div>
                        <h3 className={`text-xl ${isHovered ? 'text-white' : 'text-gray-800'} mb-2 transition-colors duration-300`}>Engagement</h3>
                        <p className={`${isHovered ? 'text-gray-400' : 'text-gray-600'} text-sm transition-colors duration-300 w-3/4`}>
                            Enhanced patient satisfaction and interactions.
                        </p>
                    </div>
                </div>
            </section>

            {/* How MedCopilot Works Section */}
            <section className="w-[95%] py-26 px-6 flex flex-col items-center z-1">
                <h2 className={`text-3xl ${isHovered ? 'text-white' : 'text-gray-800'} text-center mb-16 transition-colors duration-300`}>
                    How MedCopilot Works
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                    {/* Integrate */}
                    <div
                        className={`flex flex-col items-center justify-center text-center p-6 relative overflow-hidden rounded-lg ${isHovered ? 'bg-transparent' : 'bg-blue-100'} transition-colors duration-300 h-64`}
                    >
                        {/* Background pattern image - only visible when parent is hovered */}
                        {isHovered && (
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
                                style={{ backgroundImage: `url('/hit-1.png')` }}
                            />
                        )}

                        <div className="relative z-10 flex flex-col items-center">
                            <h3 className={`text-xl ${isHovered ? 'text-white' : 'text-gray-800'} mb-2 transition-colors duration-300`}>
                                Integrate
                            </h3>
                            <p className={`${isHovered ? 'text-gray-300' : 'text-gray-600'} text-center transition-colors duration-300`}>
                                Connects seamlessly with <br /> existing EMRs.
                            </p>
                        </div>
                    </div>

                    {/* Analyze */}
                    <div
                        className={`flex flex-col items-center justify-center text-center p-6 relative overflow-hidden rounded-lg ${isHovered ? 'bg-transparent' : 'bg-blue-100'} transition-colors duration-300 h-64`}
                    >
                        {/* Background pattern image - only visible when parent is hovered */}
                        {isHovered && (
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
                                style={{ backgroundImage: `url('/hit-2.png')`, filter: 'grayscale(100%)' }}
                            />
                        )}

                        <div className="relative z-10 flex flex-col items-center">
                            <h3 className={`text-xl ${isHovered ? 'text-white' : 'text-gray-800'} mb-2 transition-colors duration-300`}>
                                Analyze
                            </h3>
                            <p className={`${isHovered ? 'text-gray-300' : 'text-gray-600'} text-center transition-colors duration-300`}>
                                AI processes patient histories, lab <br /> results, and past consultations.
                            </p>
                        </div>
                    </div>

                    {/* Deliver */}
                    <div
                        className={`flex flex-col items-center justify-center text-center p-6 relative overflow-hidden rounded-lg ${isHovered ? 'bg-transparent' : 'bg-blue-100'} transition-colors duration-300 h-64`}
                    >
                        {/* Background pattern image - only visible when parent is hovered */}
                        {isHovered && (
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
                                style={{ backgroundImage: `url('/hit-3.png')`, filter: 'grayscale(100%)' }}
                            />
                        )}

                        <div className="relative z-10 flex flex-col items-center">
                            <h3 className={`text-xl ${isHovered ? 'text-white' : 'text-gray-800'} mb-2 transition-colors duration-300`}>
                                Deliver
                            </h3>
                            <p className={`${isHovered ? 'text-gray-300' : 'text-gray-600'} text-center transition-colors duration-300`}>
                                Provides concise and <br /> actionable insights.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero