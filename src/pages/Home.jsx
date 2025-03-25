import React, { useRef } from 'react'
import Hero from '../components/Hero'
import AboutJNC from '../components/AboutJNC'
import Form from '../components/Form'
import HeroBanner from '../components/HeroBanner'
import Blogs from '../components/Blogs'
import JncHover from '../components/JncHover'

const Home = () => {

    const heroRef = useRef(null);

    // Scroll to Hero function
    const scrollToHero = () => {
        if (heroRef.current) {
            heroRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
    return (
        <div>
            {/* // part1 */}
            <div className="w-full flex flex-col mt-5 px-6 sm:px-15 ">
                {/* Top Section - Image */}
                <div className="w-full  overflow-hidden rounded-xl">
                    <div className="w-full h-[50vh] relative">
                        <video
                            src="/jnc-hero.mp4"
                            className="w-full h-full  object-cover sm:object-[0%_40%] object-[48%_40%]"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>
                </div>

                {/* Bottom Section - Content */}
                <div className="w-full bg-white sm:py-15 py-5 flex flex-col md:flex-row justify-between">
                    <div className="w-full">
                        <h1 className="text-3xl md:text-5xl mt-[-10px] text-gray-800 mb-4 leading-10 sm:w-2/3 w-full sm:leading-15">
                            Redefining Healthcare
                            for a Healthier Tomorrow
                        </h1>
                        <div className="mt-6 md:mt-0 block sm:hidden">
                            <p className="text-gray-600 text-xl sm:text-2xl">
                                We're building a smarter, more connected healthcare ecosystem — combining advanced technologies and human-centered design to make care intelligent, accessible, and affordable across the globe.
                            </p>
                        </div>

                        <div className="mt-10">
                            <button onClick={scrollToHero} className="bg-primary rounded-sm  text-white w-full sm:w-1/6 sm:px-2 sm:py-3 py-5  text-sm font-medium hover:bg-gray-800 transition duration-200">
                                Learn More
                            </button>
                        </div>
                    </div>

                    <div className="md:w-2/3 mt-6 md:mt-0 hidden sm:block">
                        <p className="text-gray-600 text-xl">
                            We're building a smarter, more connected healthcare ecosystem — combining advanced technologies and human-centered design to make care intelligent, accessible, and affordable across the globe.
                        </p>
                    </div>
                </div>
            </div>

            {/* //part2 */}
            <div ref={heroRef}>
                <Hero />
            </div>
            <div className=" w-[95%] mx-auto p-10 text-center mt-10 mb-10 flex flex-col gap-14 border- border-gray-300">
                <h3 className="text-3xl sm:text-5xl text-blue-500 font-medium  mx-auto">
                    All solutions are HIPAA compliant and regulated.
                </h3>
                <div className='flex w-full mx-auto items-center justify-center gap-4'>
                    <div className='flex flex-col items-center'>
                        <img src="/foot-1.png" alt="HIPAA" className='h-20 w-auto' />
                        {/* <span className='text-xs text-gray-500 mt-1'>(Coming soon)</span> */}
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src="/foot-2.png" alt="HL7 FHIR" className='h-20 w-auto filter grayscale' />
                        {/* <span className='text-xs text-gray-500 mt-1'>(Coming soon)</span> */}
                    </div>
                </div>
            </div>
            {/* part3 */}
            <JncHover />

            <AboutJNC />
            {/* <Blogs /> */}
            {/* part4 */}
            {/* <Form /> */}

            {/* part5 */}
            <HeroBanner />

            {/* part6 */}

        </div>
    )
}

export default Home