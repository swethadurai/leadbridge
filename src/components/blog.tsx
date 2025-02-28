import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

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
  useEffect(() => {
    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');
    
    if (prevButton && nextButton) {
      prevButton.classList.add('custom-nav');
      nextButton.classList.add('custom-nav');
    }
  }, []);

  return (
    <div className="bg-[#FAF7F7] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            Articles on AI trends, automation, and business efficiency.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <a href={post.link} className="block">
                <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3 line-clamp-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>
                  <div className="flex items-center text-teal-600 font-medium">Read more <ArrowRight className="w-4 h-4 ml-2" /></div>
                </div>
              </a>
            </article>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation={{ nextEl: '.swiper-custom-next', prevEl: '.swiper-custom-prev' }}
            modules={[Navigation]}
            className="swiper-container"
          >
            {blogPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <a href={post.link} className="block">
                    <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
                    <div className="p-6">
                      <h2 className="text-2xl font-semibold text-gray-800 mb-3 line-clamp-2">{post.title}</h2>
                      <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>
                      <div className="flex items-center text-teal-600 font-medium">Read more <ArrowRight className="w-4 h-4 ml-2" /></div>
                    </div>
                  </a>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center mt-4">
            <button className="swiper-custom-prev  !bg-transparent !text-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
</svg></button>
            <button className="swiper-custom-next !text-black !bg-transparent !border-none !text-3xl ml-4"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
</svg></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;