import React from 'react';

const Form = () => {
    return (
        <div className="flex flex-col md:flex-row sm:w-[92%] w-full mx-auto mt-14 relative overflow-hidden rounded-lg bg-white sm:bg-[#EDF2F8] border-b-1 border-[#ffffff3c]">
            {/* Gradient overlay - Only for desktop */}
            <div className="hidden md:block absolute inset-0 w-full h-full top-0 left-30 gray-bg pointer-events-none z-1"></div>
            
            {/* Image section - Visible on all screens, but with different behavior */}
            <div className="block md:hidden w-full bg-[#EDF2F8]  overflow-hidden">
                <img
                    src="/jnc-form.png"
                    alt="Healthcare professional"
                    className="object-cover w-full h-auto object-[20%]"
                />
            </div>

            {/* Image section - Hidden on small screens, visible on md and up */}
            <div className="hidden md:block relative  md:w-1/2 bg-[#EDF2F8] rounded-lg overflow-hidden">
                <img
                    src="/jnc-form.png"
                    alt="Healthcare professional"
                    className="object-cover h-full  sm:w-full object-[20%]"
                />
            </div>

            {/* Right side with form */}
            <div className="w-full md:w-3/4 p-8 sm:p-6 md:p-12 flex flex-col z-2">
                <h1 className="text-2xl sm:text-3xl text-left mb-4 sm:mb-8">Contact Us</h1>

                <form className="flex flex-col space-y-6 sm:space-y-8 md:space-y-10 z-2">
                    {/* First row - First and Last name */}
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

                    {/* Second row - Company/Organization and Email */}
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

                    {/* Third row - Phone and Dropdown */}
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
                        <div className="flex flex-col flex-1">
                            <label htmlFor="help" className="text-sm mb-1">How can we help you?*</label>
                            <select
                                id="help"
                                className="border border-gray-300 p-2 bg-white rounded w-full appearance-none"
                                required
                            >
                                <option value="" disabled selected></option>
                                <option value="general">General Inquiry</option>
                                <option value="support">Technical Support</option>
                                <option value="sales">Sales</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    {/* Message */}
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