import React, { useEffect, useState, useRef } from 'react'

const Med = () => {
    const [isMobile, setIsMobile] = useState(false)
    const cardHeight = isMobile ? 60 : 50; // Height in vh units
    const cardParentHeight = isMobile ? 160 : 100; // Height in vh units
    const formId = '3E6WPl';
    // Effect to check screen size and update state
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768) // 768px is the md breakpoint in Tailwind
        }

        // Check on initial load
        checkIfMobile()

        // Add event listener for resize
        window.addEventListener('resize', checkIfMobile)

        // Clean up event listener
        return () => window.removeEventListener('resize', checkIfMobile)
    }, [])


    useEffect(() => {
        if (!window.Tally) {
            const script = document.createElement('script');
            script.src = 'https://tally.so/widgets/embed.js';
            script.async = true;
            document.head.appendChild(script);
        }
    }, []);

    const openDemoForm = () => {
        if (window.Tally) {
            window.Tally.openPopup(formId, {
                layout: 'modal',
                width: 700,
                overlay: true,
                hideTitle: true,
                autoClose: 3000,
                onSubmit: (payload) => {
                    console.log('Form submitted:', payload);
                    // Handle form submission here
                },
                onOpen: () => console.log('Form opened'),
                onClose: () => console.log('Form closed')
            });
        } else {
            console.error('Tally script not loaded yet');
        }
    };

    return (
        <div className='w-full min-h-screen flex flex-col px-6 sm:px-16'>

            {/* part1 */}
            <div className='w-full h-[80vh] z-10 rounded-3xl overflow-hidden flex flex-col items-center justify-center relative bg-white'>
                <img src="/hero-main.png" className='opacity-60 object-cover w-full h-full absolute' alt="" />
                <div className='flex flex-col justify-center items-center gap-4 md:gap-9 relative z-10 px-4 md:px-0'>
                    <h1 className='text-primary-text w-[80%] md:w-full text-2xl md:text-4xl lg:text-5xl font-medium text-center'>Revolutionize Patient Care with MedCopilot</h1>
                    <h3 className='text-sec-text text-base md:text-lg mb-4 md:mb-8 text-center'>Your AI-Powered Clinical Assistant</h3>
                    <button onClick={openDemoForm} className='bg-sec-btn text-white py-2 md:py-3 px-6 md:px-8 rounded-sm cursor-pointer'>Request Demo</button>
                </div>
            </div>

            {/* part2 */}
            <div className='grad w-full h-[150vh] absolute top-100 left-0'></div>

            <div className='flex flex-col md:flex-row justify-center md:justify-between items-center mt-1 h-[70vh] md:h-[50vh] z-20 md:gap-5 relative'>
                <div className='flex flex-col w-full md:w-1/2 md:p-4 p-10 md:h-[90%] text-center md:text-start h-full mt-5 md:px-8 lg:px-20 justify-center gap-3 md:gap-5 bg-[#FFFFFF99] md:rounded-4xl rounded-t-4xl'>
                    <h1 className='text-primary-text text-2xl md:text-4xl lg:text-5xl font-medium'>Reclaim Your Time,<br />
                        Enhance Patient Care</h1>
                    <h3 className='text-sec-text text-base md:text-lg mb-4 md:mb-8'>Empowering Doctors with AI-Driven Efficiency,<br className='hidden md:block' /> Insightful Support, and Seamless Integration.</h3>
                </div>
                <img
                    src={isMobile ? "/med-doc-1.png" : "/hero-2.png"}
                    alt="Medical professional"
                    className='w-full md:w-1/2 h-full md:mb-5 mt-[-40px] md:mt-0'
                />
            </div>

            {/* part3 */}
            <div className="flex justify-between flex-col items-center p-4 md:p-15 mt-5 z-20 gap-5 bg-[#fffffff8] rounded-3xl">
                <h1 className="text-primary-text text-2xl md:text-4xl font-medium text-center">Challenges in Patient Care</h1>
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 mt-5 md:mt-10">
                    <div className="w-full md:w-1/3 p-4 md:p-5 flex flex-col gap-4 md:gap-6">
                        <div className="aspect-square w-full max-w-[300px] h-[300px] mx-auto flex items-center justify-center">
                            <img src="/img-1.png" alt="Documentation Burden" className="w-full h-full object-contain" />
                        </div>
                        <h4 className="text-lg md:text-2xl font-medium text-center md:text-center">Delayed Turnaround</h4>
                        <p className="text-sec-text text-center md:text-center">Extended patient turnaround
                            times, decreasing patient
                            satisfaction and care
                            delivery efficiency.</p>
                    </div>
                    <div className="w-full md:w-1/3 p-4 md:p-5 flex flex-col gap-4 md:gap-6">
                        <div className="aspect-square w-full max-w-[300px] h-[300px] mx-auto flex items-center justify-center">
                            <img src="/img-2.png" alt="Information Overload" className="w-full h-full object-contain" />
                        </div>
                        <h4 className="text-lg md:text-2xl font-medium text-center md:text-center">Information Overload</h4>
                        <p className="text-sec-text text-center md:text-center">High cognitive overload,
                            hindering timely,
                            informed clinical
                            decisions.</p>
                    </div>
                    <div className="w-full md:w-1/3 p-4 md:p-5 flex flex-col gap-4 md:gap-6">
                        <div className="aspect-square w-full max-w-[300px] h-[300px] mx-auto flex items-center justify-center">
                            <img src="/img-3.png" alt="Missed Insights" className="w-full h-full object-contain" />
                        </div>
                        <h4 className="text-lg md:text-2xl font-medium text-center md:text-center">Missed Insights</h4>
                        <p className="text-sec-text text-center md:text-center">Inefficient access to
                            historical patient trends,
                            limiting proactive and
                            personalized care.</p>
                    </div>
                </div>
            </div>

            {/* part4 - Simplified Overlapping Cards */}
            <div className='z-20 flex flex-col justify-between mt-10 md:mt-20 items-center w-full sm:w-[75%] mx-auto'>
                <h1 className='text-primary-text mb-20 text-2xl md:text-4xl font-medium text-center px-4'>This is how MedCopilot bridges the gap</h1>

                {/* Container for the overlapping cards */}
                <div className='w-full relative' style={{ height: `${cardHeight * 3 + cardParentHeight}vh` }}>
                    {/* Card 1 */}
                    <div
                        className='w-full sticky top-20 '
                        style={{
                            zIndex: 3,
                            height: `${cardHeight}vh`
                        }}
                    >
                        <div className='flex flex-col-reverse md:flex-row gap-5 justify-between sm:justify-start items-center relative h-full w-full bg-[#2f85f7] rounded-3xl overflow-hidden'>
                            <img src="/hero-main.png" className='absolute w-full h-full object-cover opacity-30' alt="" />
                            <div className='flex flex-col gap-5 md:gap-10 z-20 justify-center items-center w-full md:w-1/2 p-6 md:p-0'>
                                <div className='flex flex-col gap-3 md:gap-5 items-center md:items-start'>
                                    <h1 className='text-white text-2xl md:text-4xl text-left'>Comprehensive <br className='hidden md:block' /> Data Retrieval &<br className='hidden md:block' /> Summarization</h1>
                                    <h3 className='text-[#FFFFFFCC] text-sm md:text-md text-left'>Instantly access and summarize <br className='hidden md:block' /> patient data, including diagnoses,<br className='hidden md:block' /> medications, labs, and imaging.</h3>
                                </div>
                            </div>
                            <div className='card-bg w-full md:w-1/2 flex justify-center items-center p-12  md:py-0 md:h-full '>
                                <div className='h-full w-full md:w-full md:h-[100%] overflow-hidden rounded-xl z-20 px-4 md:px-0'>
                                    <img className='w-full h-full overflow-hidden rounded-sm object-contain' src="/col-1.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div
                        className='w-full sticky top-20'
                        style={{
                            zIndex: 5,
                            height: `${cardHeight}vh`,
                            marginTop: `${cardHeight}vh`
                        }}
                    >
                        <div className='flex flex-col md:flex-row-reverse items-center justify-between sm:justify-start gap-5 relative h-full w-full bg-[#2f85f7] rounded-3xl overflow-hidden'>
                            <img src="/hero-main.png" className='absolute w-full h-full object-cover opacity-30' alt="" style={{ objectPosition: '95% 100%' }} />
                            <div className='flex flex-col gap-5 md:gap-10 z-20 justify-start items-center w-full md:w-1/2 p-6 md:p-0'>
                                <div className='flex flex-col gap-3 md:gap-5 items-center md:items-start'>
                                    <h1 className='text-white text-2xl md:text-4xl text-left'>Intelligent <br className='hidden md:block' /> Diagnosis <br className='hidden md:block' />Insights</h1>
                                    <h3 className='text-[#FFFFFFCC] text-sm md:text-md text-left'>Instantly access and summarize <br className='hidden md:block' /> patient data, including diagnoses,<br className='hidden md:block' /> medications, labs, and imaging.</h3>
                                </div>
                            </div>
                            <div className='card-bg w-full md:w-1/2 flex justify-center items-center p-10 md:py-0 md:h-full '>
                                <div className='w-full md:w-full h-full md:h-[100%] overflow-hidden rounded-xl z-20 px-4 md:px-0'>
                                    <img src="/col-2.png" className='w-full h-full object-contain ' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div
                        className='w-full sticky top-20'
                        style={{
                            zIndex: 6,
                            height: `${cardHeight}vh`,
                            marginTop: `${cardHeight}vh`
                        }}
                    >
                        <div className='flex flex-col-reverse md:flex-row gap-5 justify-between sm:justify-start relative h-full items-center w-full bg-[#2f85f7] rounded-3xl overflow-hidden'>
                            <img src="/hero-main.png" className='absolute w-full h-full object-cover opacity-30' alt="" />
                            <div className='flex flex-col gap-5 md:gap-10 z-20 justify-center items-center w-full md:w-1/2 p-6 md:p-0'>
                                <div className='flex flex-col gap-3 md:gap-5 md:items-start'>
                                    <h1 className='text-white text-2xl md:text-4xl text-left'>Real-Time <br className='hidden md:block' />
                                        Data Analysis</h1>
                                    <h3 className='text-[#FFFFFFCC] text-sm md:text-md text-left'>Leverage AI to analyze both historical <br className='hidden md:block' /> records and real-time inputs for pattern <br className='hidden md:block' />detection and informed decisions.</h3>
                                </div>
                            </div>
                            <div className='card-bg w-full md:w-1/2 flex justify-center items-center p-12 md:py-0 md:h-full '>
                                <div className='w-full md:w-full h-full md:h-[100%] overflow-hidden rounded-xl z-20 px-4 md:px-0'>
                                    <img src="/col-3.png" className='w-full h-full object-contain' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full mt-10 md:mt-20'>
                <img className='w-full h-full object-cover' src={isMobile ? "/med-doc-2.png" : "/page4.png"} alt="" />
            </div>

            {/* part5 */}
            <div className='flex gap-5 justify-center items-center relative h-[60vh] md:h-[50vh] mt-10 md:mt-20 w-full bg-[#2f85f7] rounded-3xl overflow-hidden py-10 md:py-0'>
                <img src="/hero-main.png" className='absolute w-full h-full object-cover opacity-30' alt="" />
                <div className='flex flex-col gap-5 md:gap-10 z-20 justify-center items-center px-4'>
                    <div className='flex flex-col gap-8 md:gap-5 items-center justify-center'>
                        <h1 className='text-white text-2xl md:text-4xl text-center'>Ready to Experience the <br className='hidden md:block' /> Power of MedCopilot?</h1>
                        <h3 className='text-[#FFFFFFCC] text-sm md:text-md text-center'>Request a demo today and discover how <br className='hidden md:block' /> MediCopilot can transform your practice.</h3>
                        <button onClick={openDemoForm} className='px-5 py-2 text-sm bg-white text-[#2f85f7] rounded-sm mt-2 md:mt-0 cursor-pointer'>Request Demo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Med