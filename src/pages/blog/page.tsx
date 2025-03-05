import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';
import { blogPosts } from '@/data/bblogData';


  

const Blog = () => {
  useEffect(() => {
    document.title = "Latest AI & Business Insights | LeadBridge UK Blog";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Stay informed with expert insights on AI automation, business efficiency, and customer experience. Read the latest trends, case studies, and industry updates from LeadBridge UK."
      );
  }, []);
    const { id } = useParams<{ id: string }>();
    const postId = parseInt(id || '1');
    
    const post = blogPosts.find(post => post.id === postId);
    const relatedPosts = blogPosts.filter(p => p.id !== postId).slice(0, 2);
  const posts = [
    {
      title: "The Future of AI in Customer Service",
      excerpt: "Discover how AI is revolutionizing customer service and what it means for businesses.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
      date: "Mar 15, 2024",
      readTime: "5 min read",
      author: "Sarah Johnson"
    },
    {
      title: "Implementing AI Chatbots: Best Practices",
      excerpt: "Learn the key strategies for successful AI chatbot implementation in your business.",
      image: "https://images.unsplash.com/photo-1596742578443-7682ef7b7c72",
      date: "Mar 12, 2024",
      readTime: "4 min read",
      author: "Mike Chen"
    },
    {
      title: "ROI of AI Automation",
      excerpt: "A detailed analysis of the return on investment when implementing AI automation solutions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      date: "Mar 10, 2024",
      readTime: "6 min read",
      author: "Alex Thompson"
    }
  ];

  return (
    <div>
      <Navbar/>
       <div className="bg-white pt-20">
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Latest Insights</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest trends and insights in AI technology and business automation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
             <Link to={`/blog/${post.id}`} className="block">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                {/* <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{post.readTime}</span>
                </div> */}
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  <span>{post.author}</span>
                </div>
              </div>
            </div>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="px-8 py-3 bg-[#0F766E] text-white rounded-md hover:bg-[#115E59] transition-colors">
          Load More Articles
        </button>
      </div>
    </div>
    
  </div>
  <Footer/>
    </div>
   
  );
};

export default Blog;