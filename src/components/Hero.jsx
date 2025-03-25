import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    // Create a ref for the main container
    const heroContainerRef = useRef(null)

    useEffect(() => {
        const container = heroContainerRef.current
        
        // Create a context for easy cleanup
        const ctx = gsap.context(() => {
            // Create timeline for scroll-based animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: "top 50%",
                    end: "top 50%",
                    scrub: true,
                    
                }
            })

            // Animate the entire container
            tl.to(container, {
                backgroundColor: "#121820",
                color: "#ffffff",
                duration: 1
            })

            // Animate specific elements within the container
            const animationTargets = {
                backgroundImages: container.querySelectorAll('ds'),
                headings: container.querySelectorAll('span'),
                paragraphs: container.querySelectorAll('p'),
                buttons: container.querySelectorAll('button'),
                productTag: container.querySelector('.bg-blue-500'),
                images: container.querySelectorAll('gfd')
            }

            // Text color animation
            tl.to(animationTargets.headings, {
                color: "white",
                duration: 1
            }, 0)

            // Paragraph color animation
            tl.to(animationTargets.paragraphs, {
                color: "rgba(255,255,255,0.7)",
                duration: 1
            }, 0)

            // Button style animation
            tl.to(animationTargets.buttons, {
                backgroundColor: "#ffffff",
                color: "#121820",
                duration: 1
            }, 0)

            // Product tag animation
            tl.to(animationTargets.productTag, {
                // backgroundColor: "#3B82F6",
                color: "#ffffff",
                duration: 1
            }, 0)

            // Background images animation
            tl.to(animationTargets.backgroundImages, {
                opacity: 0.3,
                // filter: "grayscale(100%)",
                duration: 1,
                // background:"00000041"
            }, 0)

            // Slightly dim images
            tl.to(animationTargets.images, {
                opacity: 0.3,
                duration: 1
            }, 0)
        }, container)

        // Cleanup function
        return () => ctx.revert()
    }, [])

    return (
        <div 
            ref={heroContainerRef}
            className="w-full bg-white mt-5 overflow-hidden min-h-screen relative flex flex-col items-center transition-colors duration-300"
        >
            {/* Hero Section */}
            <section className="w-[95%] flex flex-col md:flex-row py-20 px-2 justify-around items-center border-t-1 border-[#ffffff3c] border-b-1">
                {/* Left Content */}
                <div className="w-full sm:w-[40%] flex flex-col gap-8 justify-center md:pr-8">
                    <div className="mb-4">
                        <span className="bg-blue-500 text-white text-sm px-4 py-1 rounded-full">Our Product</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl text-gray-800 mb-2 transition-colors duration-300">
                        <span className="block sm:inline">Meet MedCopilot <br /> An AI Copilot for Doctors</span>
                        {/* <span className="block sm:inline"></span> */}
                    </h2>

                    <p className="text-gray-700 my-4 text-xl sm:text-xl w-full sm:w-[90%] transition-colors duration-300">
                        Our first groundbreaking product, streamlines patient data, provides insightful summaries, and enables doctors to spend more quality time with each patient.
                    </p>

                    <div className="mt-4 hidden sm:block">
                        <button className="px-16 py-3 rounded-xs text-sm font-medium bg-gray-900 text-white transition duration-200">
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
                    <button className="w-full py-3 rounded-xs text-sm font-medium bg-gray-900 text-white transition duration-200">
                        Know More
                    </button>
                </div>
            </section>

            {/* Key Benefits Section */}
            <section className="w-[95%] py-26 px-6 flex flex-col items-center z-1 border-b-1 border-[#ffffff3c]">
                <h2 className="text-5xl text-white text-center mb-16 transition-colors duration-300">Key Benefits</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full  ">
                    {/* Efficiency */}
                    <div className="flex flex-col items-center text-center  sm:border-r-1 border-[#ffffff3c] ">
                        <div className="w-16 h-16 mb-6 flex items-center justify-center">
                            <img src="/Efficiency.svg" alt="" />
                        </div>
                        <h3 className="text-2xl text-white mb-2 transition-colors duration-300">Efficiency</h3>
                        <p className="text-gray-600 text-lg transition-colors duration-300 w-3/4">
                            Reduces consultation times by <br />10-15 minutes per patient.
                        </p>
                    </div>

                    {/* Insights */}
                    <div className="flex flex-col items-center text-center border-b-1 border-t-1 sm:border-t-0 sm:border-b-0 py-8 sm:py-0 border-[#ffffff3c]">
                        <div className="w-16 h-16 mb-6 flex items-center justify-center">
                            <img src="/Insights.svg" alt="" />
                        </div>
                        <h3 className="text-2xl text-white mb-2 transition-colors duration-300">Insights</h3>
                        <p className="text-gray-600 text-lg transition-colors duration-300 w-3/4">
                            Instant, effortless access to <br /> critical patient data.
                        </p>
                    </div>

                    {/* Engagement */}
                    <div className="flex flex-col items-center text-center sm:border-l-1 border-[#ffffff3c] ">
                        <div className="w-16 h-16 mb-6 flex items-center justify-center">
                            <img src="/Interaction.svg" alt="" />
                        </div>
                        <h3 className="text-2xl text-white mb-2 transition-colors duration-300">Engagement</h3>
                        <p className="text-gray-600 text-lg transition-colors duration-300 w-3/4">
                            Enhanced patient satisfaction and interactions.
                        </p>
                    </div>
                </div>
            </section>

            {/* How MedCopilot Works Section */}
            <section className="w-[95%] py-26 px-6 flex flex-col items-center z-1">
                <h2 className="text-5xl text-white text-center mb-16 transition-colors duration-300">
                    How MedCopilot Works
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full ">
                    {/* Integrate */}
                    <div
                        className="flex flex-col items-center justify-center text-center p-6 relative overflow-hidden rounded-lg bg-blue-100 transition-colors duration-300 h-64"
                    >
                        {/* Background pattern image - only visible when parent is animated */}
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-100 z-0"
                            style={{ backgroundImage: `url('/hit-1.png')` }}
                        />
                        <div className='w-full h-full bg-[#00000058] absolute'></div>

                        <div className="relative z-10 flex flex-col items-center">
                            <h3 className="text-2xl text-white mb-2 transition-colors duration-300">
                                Integrate
                            </h3>
                            <p className="text-gray-800 text-center text-lg transition-colors duration-300">
                                Connects seamlessly with <br /> existing EMRs.
                            </p>
                        </div>
                    </div>

                    {/* Analyze */}
                    <div
                        className="flex flex-col items-center justify-center text-center p-6 relative overflow-hidden rounded-lg bg-blue-100 transition-colors duration-300 h-64"
                    >
                        {/* Background pattern image - only visible when parent is animated */}
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-100 z-0"
                            style={{ 
                                backgroundImage: `url('/hit-2.png')`, 
                                 filter: "grayscale(50%)"
                            }}
                        />
                        <div className='w-full h-full bg-[#00000058] absolute'></div>

                        <div className="relative z-10 flex flex-col items-center">
                            <h3 className="text-2xl text-white mb-2 transition-colors duration-300">
                                Analyze
                            </h3>
                            <p className="text-gray-600 text-center transition-colors duration-300">
                                AI processes patient histories, lab <br /> results, and past consultations.
                            </p>
                        </div>
                    </div>

                    {/* Deliver */}
                    <div
                        className="flex flex-col items-center justify-center text-center p-6 relative overflow-hidden rounded-lg bg-blue-100 transition-colors duration-300 h-64"
                    >
                        {/* Background pattern image - only visible when parent is animated */}
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-100 z-0"
                            style={{ 
                                backgroundImage: `url('/hit-3.png')`, 
                                
                                
                            }}
                        />
                        <div className='w-full h-full bg-[#00000058] absolute'></div>

                        <div className="relative z-10 flex flex-col items-center">
                            <h3 className="text-2xl text-white mb-2 transition-colors duration-300">
                                Deliver
                            </h3>
                            <p className="text-gray-600 text-center text-lg transition-colors duration-300">
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