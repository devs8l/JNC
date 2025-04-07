import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [visibleBlogs, setVisibleBlogs] = useState(3);

  // Blog data
  const blogs = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: '31st March, 2025'
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      image: 'https://images.unsplash.com/photo-1550657368-3db73991cb2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: '28th March, 2025'
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.',
      image: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: '25th March, 2025'
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      content: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
      image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvY3RvcnxlbnwwfHwwfHx8Mg%3D%3D',
      date: '21st March, 2025'
    },
    {
      id: 5,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      content: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
      image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: '18th March, 2025'
    },
    {
      id: 6,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      content: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.',
      image: 'https://images.unsplash.com/photo-1494597564530-871f2b93ac55?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: '15th March, 2025'
    }
  ];

  const blog = blogs.find(blog => blog.id === parseInt(id));
  const otherBlogs = blogs.filter(blog => blog.id !== parseInt(id));
  const displayedBlogs = otherBlogs.slice(0, visibleBlogs);

  // Function to truncate content to 20 words
  const truncateContent = (content) => {
    const words = content.split(' ');
    if (words.length > 20) {
      return words.slice(0, 20).join(' ') + '...';
    }
    return content;
  };

  // Function to handle loading more blogs
  const handleLoadMore = () => {
    setVisibleBlogs(prev => Math.min(prev + 3, otherBlogs.length));
  };

  if (!blog) {
    return <div className="container mx-auto px-4 py-8">Blog post not found</div>;
  }

  // Social share icons
  const socialIcons = () => (
    <div className="flex items-center space-x-2 mt-2">
      <button className="p-2 rounded hover:bg-gray-100">
        <img src="/copy.svg" alt="" />
      </button>
      <button className="p-2 rounded hover:bg-gray-100">
        <img src="/insta.svg" alt="" />
      </button>
      <button className="p-2 rounded hover:bg-gray-100">
        <img src="/wsp.svg" alt="" />
      </button>
      <button className="p-2 rounded hover:bg-gray-100">
        <img src="/twitter.svg" alt="" />

      </button>
      <button className="p-2 rounded hover:bg-gray-100">
        <img src="/redit.svg" alt="" />

      </button>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Blog Header */}
      <div className="mb-8">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 md:h-106 object-cover rounded-xl mb-6"
        />

        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl mb-2">{blog.title}</h1>
            <p className="text-gray-500 text-sm">{blog.date}</p>
          </div>

          {/* Right side social buttons */}
          <div className="flex space-x-2">
            {/* <button className="p-2  text-blue-500 rounded-md hover:bg-blue-100">
              <img src="/copy.svg" alt="" />
            </button> */}
            {socialIcons()}
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="prose max-w-none mb-12">
        {blog.content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>
        ))}
      </div>

      {/* More Blogs Section */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-3xl text-center mb-6">More Blogs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg overflow-hidden  transition-shadow duration-300 cursor-pointer"
              onClick={() => navigate(`/blogs/${blog.id}`)}
            >
              {/* Blog image */}
              <div className="h-82 overflow-hidden rounded-lg">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Blog content */}
              <div className="p-4">
                <h3 className=" text-base mb-2">{blog.title}</h3>
                <p className="text-gray-700 text-xs mb-3">
                  {truncateContent(blog.content)}
                  <span className="text-blue-600 hover:text-blue-800 text-xs ml-1">Read More</span>
                </p>

                {/* Date */}
                <p className="text-gray-500 text-xs">{blog.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleBlogs < otherBlogs.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMore}
              className="border text-blue-600 border-blue-600 hover:bg-blue-700 cursor-pointer hover:text-white font-medium py-2 px-8 text-sm rounded-sm transition duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;