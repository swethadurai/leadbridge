import React from 'react';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "How AI Chatbots Are Transforming Customer Service in the UK",
    description: "In AI world Chatbots Are Transforming Customer Service in the UK",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    link: "#"
  },
  {
    id: 2,
    title: "5 Ways AI Can Automate Business Processes & Boost Productivity",
    description: "To Boost Productivity, Here 5 Ways AI Can Automate Business Processes",
    image: "https://images.unsplash.com/photo-1550432163-9cb326104944?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    link: "#"
  },
  {
    id: 3,
    title: "The Future of AI in the UK: Trends & Predictions for Businesses",
    description: "Trends & Predictions for Businesses, AI Can Automate Business Processes & Boost Productivity",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    link: "#"
  }
];

function Blog() {
  return (
    <div className="min-h-screen bg-[#FAF7F7] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600">
            Articles on AI trends, automation, and business efficiency.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <a href={post.link} className="block">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center text-teal-600 font-medium">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;