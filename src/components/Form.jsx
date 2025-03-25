import React from 'react';

const Form = () => {
    return (
        <div className="flex flex-col md:flex-row sm:w-[92%] w-full mx-auto gap-5 mt-14  relative overflow-hidden rounded-lg bg-white  border-b-1 border-[#ffffff3c]">
            {/* Gradient overlay - Only for desktop */}
            {/* <div className="hidden md:block absolute inset-0 w-full h-full top-0 left-30 gray-bg pointer-events-none z-1"></div> */}

            {/* Image section - Visible on all screens, but with different behavior */}
            <div className="block md:hidden bg-[#EDF2F8]  overflow-hidden">
                <img
                    src="/jnc-form.png"
                    alt="Healthcare professional"
                    className="object-cover w-full h-auto object-[20%]"
                />
            </div>

            {/* Image section - Hidden on small screens, visible on md and up */}
            <div className="hidden md:block relative  md:w-[40%] bg-[#EDF2F8]  overflow-hidden rounded-2xl">
                <img
                    src="/jnc-form.png"
                    alt="Healthcare professional"
                    className="object-contain h-full sm:w-full object-[0%]"
                />
            </div>

            {/* Right side with form */}
            <div className="w-full md:w-[60%] p-8 sm:p-6 md:p-12 flex flex-col z-2">
                <h1 className="text-2xl sm:text-3xl text-left mb-4 sm:mb-8">Contact Us</h1>

                <form className="flex flex-col space-y-6 sm:space-y-8 md:space-y-10 z-2">
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <div className="flex flex-col flex-1">
                            <label htmlFor="firstName" className="text-sm mb-1">First name*</label>
                            <input
                                type="text"
                                id="firstName"
                                className="border border-gray-300 bg-white p-2 rounded w-full"
                                required
                            />
                        </div>
                        <div className="flex flex-col flex-1">
                            <label htmlFor="lastName" className="text-sm mb-1">Last name*</label>
                            <input
                                type="text"
                                id="lastName"
                                className="border border-gray-300 bg-white p-2 rounded w-full"
                                required
                            />
                        </div>
                    </div>


                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <div className="flex flex-col flex-1">
                            <label htmlFor="company" className="text-sm mb-1">Company/ Organization*</label>
                            <input
                                type="text"
                                id="company"
                                className="border border-gray-300 bg-white p-2 rounded w-full"
                                required
                            />
                        </div>
                        <div className="flex flex-col flex-1">
                            <label htmlFor="email" className="text-sm mb-1">Company email*</label>
                            <input
                                type="email"
                                id="email"
                                className="border border-gray-300 bg-white p-2 rounded w-full"
                                required
                            />
                        </div>
                    </div>


                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <div className="flex flex-col flex-1">
                            <label htmlFor="phone" className="text-sm mb-1">Phone*</label>
                            <input
                                type="tel"
                                id="phone"
                                className="border border-gray-300 bg-white p-2 rounded w-full"
                                required
                            />
                        </div>
                        
                    </div>

 
                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-sm mb-1">Message*</label>
                        <textarea
                            id="message"
                            rows={4}
                            className="border border-gray-300 p-2 bg-white rounded resize-none w-full"
                            required
                        />
                    </div>

                    {/* Submit button */}
                    <div className="flex justify-center mt-4 sm:mt-6">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 sm:px-8 rounded w-full md:w-48"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;