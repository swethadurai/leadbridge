import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Our experience with AI chatbot Service has been fantastic! The AI chatbot has improved our customer response time and automated repetitive tasks, saving us hours every week. Highly recommended!",
    author: "James Richardson",
    role: "Customer Experience Manager, TechNova Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    id: 2,
    content: "The implementation was seamless and the results were immediate. Our team's productivity has increased significantly!",
    author: "Sarah Chen",
    role: "Operations Director, Digital Innovations",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    id: 3,
    content: "Best decision we made for our customer service operations. The AI chatbot handles routine queries perfectly.",
    author: "Michael Foster",
    role: "CEO, TechStart Solutions",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    id: 4,
    content: "Exceptional service and support. The chatbot has become an integral part of our customer service strategy.",
    author: "Emily Watson",
    role: "Head of Support, CloudTech",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    id: 5,
    content: "The AI capabilities are impressive. It's like having an extra team member working 24/7.",
    author: "David Martinez",
    role: "Technical Director, InnovateLabs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
  },
];

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="py-20 bg-[#F4EEEA] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-gray-800">
          From our clients
        </h2>

        <div className="relative mt-8">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Testimonial Content */}
          <div className="text-center px-6 sm:px-8">
            <p className="text-sm sm:text-xl text-gray-600 mb-6 sm:mb-8 min-h-[60px] sm:min-h-[80px]">
              "{testimonials[currentIndex].content}"
            </p>

            <div className="flex flex-col items-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].author}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-4 object-cover"
              />
              <h3 className="font-semibold text-gray-800 text-base sm:text-lg">
                {testimonials[currentIndex].author}
              </h3>
              <p className="text-gray-500 text-sm">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-teal-500 w-3 sm:w-4'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
