import React from 'react'
import Hero from '../components/Hero'
import AboutJNC from '../components/AboutJNC'
import Form from '../components/Form'
import HeroBanner from '../components/HeroBanner'
import Blogs from '../components/Blogs'

const Home = () => {
    return (
        <div>
            {/* // part1 */}
            <div className="w-full flex gap-2 flex-col md:flex-row mt-5">
                {/* Left Section - Blue background with text and buttons */}
                <div className="w-full md:w-1/2 bg-blue-500 relative  flex  justify-center px-20 py-50 rounded-lg items-center">
                    {/* Background Image with reduced opacity */}
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                        <img
                            src="/hero-main.png"
                            alt="Background Pattern"
                            className="w-full h-full object-cover opacity-20"
                        />
                    </div>
    
                    {/* Content */}
                    <div className="relative z-10 max-w-md flex flex-col gap-4 ">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-tight mb-8">
                            Empowering Healthcare<br />
                            Through Intelligent<br />
                            Innovation
                        </h1>
    
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-white text-blue-500 px-6 py-2 rounded text-sm font-medium hover:bg-gray-100 transition duration-200">
                                Request Demo
                            </button>
                            <button className="bg-transparent border border-white text-white px-6 py-2 rounded text-sm font-medium hover:bg-white hover:bg-opacity-10 transition duration-200">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
    
                {/* Right Section - Video/Image placeholder */}
                <div className="w-full md:w-1/2 bg-gray-100 rounded-lg overflow-hidden">
                    {/* This will be replaced with actual video */}
                    <div className="w-full h-full min-h-[300px] md:min-h-full relative">
                        <img
                            src="/hero.gif"
                            alt="Healthcare Professional with Patient"
                            className="w-full h-full object-cover absolute top-0 left-0"
                        />
                        {/* When you're ready to add the video, replace the img with: */}
                        {/* 
                <video 
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                >
                  <source src="/your-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                */}
                    </div>
                </div>
            </div>
    
            {/* //part2 */}
            <Hero/>

            {/* part3 */}
            <AboutJNC/>


            {/* part4 */}
            <Form/>

            {/* part5 */}
            <HeroBanner/>

            {/* part6 */}

            <Blogs/>
        </div>
    )
}

export default Home