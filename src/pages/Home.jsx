import React from 'react'
import Hero from '../components/Hero'
import AboutJNC from '../components/AboutJNC'
import Form from '../components/Form'
import HeroBanner from '../components/HeroBanner'
import Blogs from '../components/Blogs'
import JncHover from '../components/JncHover'

const Home = () => {
    return (
        <div>
            {/* // part1 */}
            <div className="w-full flex flex-col mt-5 px-6 sm:px-15 ">
                {/* Top Section - Image */}
                <div className="w-full  overflow-hidden">
                    <div className="w-full h-[60vh] relative">
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
                        <h1 className="text-3xl md:text-5xl  text-gray-800 mb-4 leading-10 sm:w-2/3 w-full sm:leading-15">
                            Redefining Healthcare
                            for a Healthier Tomorrow
                        </h1>
                        <div className="mt-6 md:mt-0 block sm:hidden">
                            <p className="text-gray-600 text-xl sm:text-2xl">
                                We're building a smarter, more connected healthcare ecosystem — combining advanced technologies and human-centered design to make care intelligent, accessible, and affordable across the globe.
                            </p>
                        </div>

                        <div className="mt-16">
                            <button className="bg-gray-900 text-white w-full sm:w-1/4 sm:px-6 sm:py-3 py-5 rounded-xs text-sm font-medium hover:bg-gray-800 transition duration-200">
                                Check MedCopilot
                            </button>
                        </div>
                    </div>

                    <div className="md:w-2/3 mt-6 md:mt-0 hidden sm:block">
                        <p className="text-gray-600 text-2xl">
                            We're building a smarter, more connected healthcare ecosystem — combining advanced technologies and human-centered design to make care intelligent, accessible, and affordable across the globe.
                        </p>
                    </div>
                </div>
            </div>

            {/* //part2 */}
            <Hero />

            {/* part3 */}
            <JncHover />

            <AboutJNC />
            <Blogs />
            {/* part4 */}
            <Form />

            {/* part5 */}
            <HeroBanner />

            {/* part6 */}

        </div>
    )
}

export default Home