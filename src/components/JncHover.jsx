import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const JncHover = () => {
    // Create refs for main elements
    const containerRef = useRef(null);
    const whiteBackgroundRef = useRef(null);
    const blueBackgroundRef = useRef(null);
    const expandingCircleRef = useRef(null);
    const iconContainerRef = useRef(null);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // Check if window is defined (for SSR compatibility)
        if (typeof window !== 'undefined') {
            // Determine if mobile view
            const isMobileView = window.innerWidth < 768;

            // Create GSAP context for easy cleanup
            const ctx = gsap.context(() => {
                // Create scroll trigger animation
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "40% 50%",
                        end: "40% 50%",
                        scrub: true,
                        // Optional: uncomment to see animation steps
                        // markers: true
                    }
                });

                // Animate white background opacity
                tl.to(whiteBackgroundRef.current, {
                    opacity: 0,
                    duration: 1
                });

                // Animate blue background opacity
                tl.to(blueBackgroundRef.current, {
                    opacity: 1,
                    duration: 2
                }, 0);

                // Animate expanding circle
                tl.to(expandingCircleRef.current, {
                    scale: 30,
                    duration: 1
                });

                // Animate icons and dashed lines
                const icons = iconContainerRef.current.querySelectorAll('div');
                tl.to(icons, {
                    opacity: 1,
                    duration: 1
                }, 0);
            }, containerRef);

            // Cleanup function
            return () => ctx.revert();
        }
    }, []);

    return (
        <div ref={containerRef} className="relative w-full my-10 pb-5">
            {/* Top border */}
            <div className="w-[90%] h-px bg-gray-300 mx-auto"></div>

            {/* Main content container */}
            <div className="relative w-full h-[70vh] sm:h-[60vh] mx-auto overflow-hidden">
                {/* Main container */}
                <div className="relative h-full">
                    {/* White background with text */}
                    <div 
                        ref={whiteBackgroundRef}
                        className="absolute inset-0 mt-[-40px] flex flex-col items-center justify-center p-6 bg-white z-10 opacity-100 transition-opacity duration-500"
                    >
                        <p className="text-center text-2xl text-gray-800 max-w-4xl mb-12">
                            JNC Tech is a global health tech company transforming patient care by
                            building an ecosystem of products and services that make healthcare more
                            accessible, affordable, and intelligent through cutting-edge technology.
                        </p>
                    </div>

                    {/* Blue background with text */}
                    <div 
                        ref={blueBackgroundRef}
                        className="absolute inset-0 mt-[-40px] flex flex-col items-center justify-center p-6 bg-blue-500 z-30 opacity-0 transition-opacity duration-500"
                    >
                        <p className="text-center text-2xl text-white max-w-4xl mb-12">
                            JNC Tech is a global health tech company transforming patient care by
                            building an ecosystem of products and services that make healthcare more
                            accessible, affordable, and intelligent through cutting-edge technology.
                        </p>
                    </div>

                    {/* Expanding JNC circle */}
                    <div
                        ref={expandingCircleRef}
                        className="absolute flex items-center justify-center rounded-full bg-blue-500 z-20 transition-all duration-500 ease-in-out"
                        style={{
                            width: '90px',
                            height: '90px',
                            top: isMobile ? '80%' : '70%',
                            left: '50%',
                            transform: 'translate(-50%, -50%) scale(1)'
                        }}
                    >
                        {/* Empty div for blue background expansion */}
                    </div>

                    {/* Static JNC text and icons in center */}
                    <div
                        ref={iconContainerRef}
                        className="absolute flex items-center justify-center z-30"
                        style={{
                            top: isMobile ? '80%' : '70%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '240px'
                        }}
                    >
                        {/* Icon and JNC container with icons and dashed line */}
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-5 h-5 opacity-0 transition-opacity duration-500">
                                <img src="/cus.svg" alt="Custom icon" />
                            </div>

                            <div className="h-px w-8 border-t-2 border-dashed border-white opacity-0 transition-opacity duration-500"></div>

                            <div className="text-white font-bold text-xl">
                                <img className='w-15 h-15' src="/jnc-text.svg" alt="" />
                            </div>

                            <div className="h-px w-8 border-t-2 border-dashed border-white opacity-0 transition-opacity duration-500"></div>

                            <div className="w-5 h-5 mb-1 opacity-0 transition-opacity duration-500">
                                <img src="/drop.svg" alt="Drop icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom border */}
            <div className="w-[90%] h-px bg-gray-300 mx-auto"></div>
        </div>
    );
};

export default JncHover;