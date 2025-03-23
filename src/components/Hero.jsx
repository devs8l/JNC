import React, { useState } from 'react'

const Hero = () => {
    const [hoveredFeature, setHoveredFeature] = useState(null);
    return (
        <div className="w-full bg-[#121820] mt-5 rounded-lg overflow-hidden min-h-screen relative flex flex-col items-center">
            <div className='bg w-full h-full absolute top-0 left-0'></div>
            {/* Hero Section */}
            <section className="w-full  rounded-lg relative flex gap-3 flex-col items-center p-6 md:p-15">

                {/* New Product Tag */}
                <div className="mb-6 z-10">
                    <span className="bg-blue-500 text-white text-sm px-4 py-1 rounded-full">New Product</span>
                </div>

                {/* Heading */}
                <h1 className="text-3xl md:text-4xl text-white text-center mb-4 mt-10 z-10">Meet Your AI-powered Medical Assistant</h1>

                {/* Subheading */}
                <p className="text-gray-400 text-center max-w-2xl mb-12 z-10">
                    MedCopilot, our first groundbreaking product, streamlines patient data, provides insightful summaries, and enables doctors to spend more quality time with each patient.
                </p>

                {/* Product Interface Preview */}
                <div className="bg-white rounded-xl mt-10 shadow-lg max-w-2xl w-full py-10 px-6 md:px-15 z-10">
                    {/* Greeting */}
                    <div className="text-center mb-4 w-full md:w-2/3 mx-auto">
                        <h2 className="text-xl font-medium text-gray-800">Good Morning Dr. John!</h2>
                        <p className="text-sm text-gray-500 mt-1">Ask a question or click on the prompts to get started</p>
                    </div>

                    {/* Prompt Buttons - 2x2 Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full md:w-3/4 mx-auto">
                        <button className="border border-gray-300 rounded py-2 px-4 text-xs text-gray-700 hover:bg-gray-50 transition-colors text-center">
                            Summary of my <br /> patients for today
                        </button>
                        <button className="border border-gray-300 rounded py-2 px-4 text-xs text-gray-700 hover:bg-gray-50 transition-colors text-center">
                            Any missed appointments or cancellations today?
                        </button>
                        <button className="border border-gray-300 rounded py-2 px-4 text-xs text-gray-700 hover:bg-gray-50 transition-colors text-center">
                            Which patients need urgent attention or follow-ups?
                        </button>
                        <button className="border border-gray-300 rounded py-2 px-4 text-xs text-gray-700 hover:bg-gray-50 transition-colors text-center">
                            What patients should I be aware of today's patients?
                        </button>
                    </div>
                </div>

                {/* Footer Note */}
                <p className="text-gray-500 text-sm mt-6 z-10">
                    Glimpse of the product, actual interface may vary*
                </p>
            </section>

            {/* Key Benefits Section */}
            <section className="w-full py-16 px-4 flex flex-col items-center z-1">
                <h2 className="text-3xl text-white text-center mb-16">Key Benefits</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                    {/* Efficiency */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 mb-6 flex items-center justify-center">
                            <img src="/Efficiency.svg" alt="" />
                        </div>
                        <h3 className="text-xl text-white mb-2">Efficiency</h3>
                        <p className="text-gray-400 text-sm">
                            Reduces consultation times by 10-15 minutes per patient.
                        </p>
                    </div>

                    {/* Insights */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 mb-6 flex items-center justify-center">
                            <img src="/Insights.svg" alt="" />

                        </div>
                        <h3 className="text-xl text-white mb-2">Insights</h3>
                        <p className="text-gray-400 text-sm">
                            Instant, effortless access to critical patient data.
                        </p>
                    </div>

                    {/* Engagement */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 mb-6 flex items-center justify-center">
                            <img src="/Interaction.svg" alt="" />

                        </div>
                        <h3 className="text-xl text-white mb-2">Engagement</h3>
                        <p className="text-gray-400 text-sm">
                            Enhanced patient satisfaction and interactions.
                        </p>
                    </div>
                </div>
            </section>

            {/* How MedCopilot Works Section */}
            <section className="w-full py-16 px-4 flex flex-col items-center z-1">
                <h2 className="text-3xl text-white text-center mb-26">How MedCopilot Works</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                    {/* Integrate */}
                    <div className="flex flex-col items-center text-center">
                        <div
                            className="w-32 h-32 mb-10 flex items-center justify-center transition-opacity duration-300"
                            style={{ opacity: hoveredFeature === 'integrate' ? 1 : 0.5 }}
                            onMouseEnter={() => setHoveredFeature('integrate')}
                            onMouseLeave={() => setHoveredFeature(null)}
                        >
                            <img src="/hit-1.png" alt="" />
                        </div>
                        <h3 className="text-xl text-white mb-2">Integrate</h3>
                        <p className="text-gray-400 text-sm">
                            Connects seamlessly with <br /> existing EMRs.
                        </p>
                    </div>

                    {/* Analyze */}
                    <div className="flex flex-col items-center text-center">
                        <div
                            className="w-32 h-32 mb-10 flex items-center justify-center transition-opacity duration-300"
                            style={{ opacity: hoveredFeature === 'analyze' ? 1 : 0.5 }}
                            onMouseEnter={() => setHoveredFeature('analyze')}
                            onMouseLeave={() => setHoveredFeature(null)}
                        >
                            <img src="/hit-2.png" alt="" />

                        </div>
                        <h3 className="text-xl text-white mb-2">Analyze</h3>
                        <p className="text-gray-400 text-sm">
                            AI processes patient histories, lab <br /> results, and past consultations.
                        </p>
                    </div>

                    {/* Deliver */}
                    <div className="flex flex-col items-center text-center">
                        <div
                            className="w-32 h-32 mb-10 flex items-center justify-center transition-opacity duration-300"
                            style={{ opacity: hoveredFeature === 'deliver' ? 1 : 0.5 }}
                            onMouseEnter={() => setHoveredFeature('deliver')}
                            onMouseLeave={() => setHoveredFeature(null)}
                        >
                            <img src="/hit-3.png" alt="" />

                        </div>
                        <h3 className="text-xl text-white mb-2">Deliver</h3>
                        <p className="text-gray-400 text-sm">
                            Provides concise and <br /> actionable insights.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero