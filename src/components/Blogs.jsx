import React from 'react';

const Blogs = () => {
    // Sample data - will be replaced with API data later
    const blogPosts = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9jdG9yc3xlbnwwfHwwfHx8MA%3D%3D",
            title: "Emergency Response: The Golden Hour in Critical Care",
            description: "Understanding the importance of rapid medical intervention within the first 60 minutes after traumatic injury and how it significantly improves patient outcomes.",
            link: '#'
        },
        {
            id: 2,
            image: "https://plus.unsplash.com/premium_photo-1681842906523-f27efd0d1718?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yc3xlbnwwfHwwfHx8MA%3D%3D",
            title: "Advances in Medication Management Systems",
            description: "Exploring how digital health technologies are revolutionizing medication adherence and reducing adverse drug events in both hospital and outpatient settings.",
            link: '#'
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D",
            title: "Wearable Technology: The Future of Patient Monitoring",
            description: "How smartwatches and medical wearables are transforming preventive healthcare by providing continuous monitoring and early detection of health conditions.",
            link: '#'
        }
    ];

    return (
        <div className="w-full  py-8 md:py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
                {/* Section Heading */}
                <h2 className="text-2xl md:text-3xl font-medium text-center mb-8 md:mb-12">
                    Blogs
                </h2>

                {/* Blog Grid - Full Width */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                            {/* Blog Image */}
                            <div className="h-48 sm:h-56 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Blog Content */}
                            <div className="p-4 sm:p-6 flex flex-col flex-grow">
                                <h3 className="font-medium text-lg mb-2">{post.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 flex-grow">{post.description}</p>
                                <a
                                    href={post.link}
                                    className="text-blue-500 hover:text-blue-700 text-sm font-medium transition-colors duration-200"
                                >
                                    Read Blog
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;