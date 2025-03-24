import React, { useEffect, useState } from 'react';

const JncHover = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    // Detect if current viewport is mobile
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobileView(window.innerWidth < 768); // Consider < 768px as mobile
        };

        // Initial check
        checkIfMobile();

        // Add resize listener
        window.addEventListener('resize', checkIfMobile);

        // Cleanup
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    return (
        <div className="relative w-full my-10 pb-5">
            {/* Top border */}
            <div className="w-[90%] h-px bg-gray-300 mx-auto "></div>

            {/* Main content container */}
            <div
                className="relative w-full  h-[70vh] sm:h-[60vh] mx-auto overflow-hidden cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Main container */}
                <div className="relative h-full">
                    {/* White background with text (hidden on hover) */}
                    <div className={`absolute inset-0 mt-[-40px] flex flex-col items-center justify-center p-6 bg-white z-10 ${isHovered ? 'opacity-0 transition-opacity duration-200' : 'opacity-100 transition-opacity duration-500'
                        }`}>
                        <p className="text-center text-2xl text-gray-800 max-w-4xl mb-12">
                            JNC Tech is a global health tech company transforming patient care by
                            building an ecosystem of products and services that make healthcare more
                            accessible, affordable, and intelligent through cutting-edge technology.
                        </p>
                    </div>

                    {/* Blue background with text (visible after hover) */}
                    <div className={`absolute inset-0 mt-[-40px] flex flex-col items-center justify-center p-6 bg-blue-500 z-30 ${isHovered ? 'opacity-100 transition-opacity duration-500' : 'opacity-0 transition-opacity duration-200'
                        }`}>
                        <p className="text-center text-2xl text-white max-w-4xl mb-12">
                            JNC Tech is a global health tech company transforming patient care by
                            building an ecosystem of products and services that make healthcare more
                            accessible, affordable, and intelligent through cutting-edge technology.
                        </p>
                    </div>

                    {/* Expanding JNC circle */}
                    <div
                        className={`
                            absolute flex items-center justify-center
                            rounded-full bg-blue-500 z-20
                            ${isHovered
                                ? 'scale-[20] transition-all duration-900 ease-in-out'
                                : 'scale-100 transition-all duration-400 ease-in-out'
                            }
                        `}
                        style={{
                            width: '90px',
                            height: '90px',
                            top: isMobileView ? '80%' : '70%',
                            left: '50%',
                            transform: `translate(-50%, -50%) ${isHovered ? 'scale(20)' : 'scale(1)'}`,

                        }}
                    >
                        {/* Empty div for blue background expansion */}
                    </div>

                    {/* Static JNC text and icons in center */}
                    <div
                        className="absolute flex items-center justify-center z-30 "
                        style={{
                            top: isMobileView ? '80%' : '70%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '240px',

                        }}
                    >
                        {/* Icon and JNC container with icons and dashed line */}
                        <div className="flex items-center justify-center gap-4">
                            <div className={`w-5 h-5 ${isHovered ? 'opacity-100 transition-opacity duration-500' : 'opacity-0 transition-opacity duration-200'
                                }`}>
                                <img src="/cus.svg" alt="Custom icon" />
                            </div>

                            <div className={`h-px w-8 border-t-2 border-dashed border-white ${isHovered ? 'opacity-100 transition-opacity duration-500' : 'opacity-0 transition-opacity duration-200'
                                }`}></div>

                            <div className="text-white font-bold text-xl">
                                <img className='w-15 h-15' src="/jnc-text.svg" alt="" />
                            </div>

                            <div className={`h-px w-8 border-t-2 border-dashed border-white ${isHovered ? 'opacity-100 transition-opacity duration-500' : 'opacity-0 transition-opacity duration-200'
                                }`}></div>

                            <div className={`w-5 h-5 mb-1 ${isHovered ? 'opacity-100 transition-opacity duration-500' : 'opacity-0 transition-opacity duration-200'
                                }`}>
                                <img src="/drop.svg" alt="Drop icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom border */}
            <div className="w-[90%] h-px bg-gray-300 mx-auto "></div>
        </div>
    );
};

export default JncHover;