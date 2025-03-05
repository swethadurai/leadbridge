import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import img from '@/components/images/SERVICES.jpg';

function Servicesstory() {
  const caseStudies = [
    {
      title: "Break down key benefits with engaging visuals",
      industry: "AI AGENTS",
      descrip1: "AI agents don’t take breaks",
      descrip2: "Automate tasks, reduce overhead",
      descrip3: "Real-time data analysis.",
      descrip4: "Personalised interactions.",
      descrip5: "Easily adapt to business growth.",
      image: img,
    },
  ];

  return (
    <div className="mt-32 px-4 sm:px-8">
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-4xl md:text-5xl  text-gray-900 mb-6">Benefits</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Why Businesses Are Adopting AI Agents Faster Than Ever
        </p>
      </div>

      {/* Ensure Single Column Layout */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1} // Ensures only one column across all screen sizes
        navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
        modules={[Navigation]}
        className="relative max-w-[600px] shadow-lg"
      >
        {caseStudies.map((study, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <img src={study.image || "/placeholder.svg"} alt={study.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="inline-block px-3 py-1 text-sm font-semibold text-[#FF6B2C] bg-orange-50 rounded-full mb-4">
                  {study.industry}
                </div>
                <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                <div className="space-y-3 text-gray-600 mb-4">
                  <p><span className="font-semibold">24/7 Availability: </span> {study.descrip1}</p>
                  <p><span className="font-semibold">Cost Reduction:</span> {study.descrip2}</p>
                  <p><span className="font-semibold">Faster Decision-Making:</span> {study.descrip3}</p>
                  <p><span className="font-semibold">Better Customer Experience:</span> {study.descrip4}</p>
                  <p><span className="font-semibold">Scalability:</span> {study.descrip5}</p>
                </div>
                <Link to="/contact" className="inline-flex items-center text-primary font-medium">
                Find Your AI Agent <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button className="prev-btn p-2 border rounded-full bg-gray-100 hover:bg-gray-200">
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>
        <button className="next-btn p-2 border rounded-full bg-gray-100 hover:bg-gray-200">
          <ChevronRight className="w-6 h-6 text-black" />
        </button>
      </div>

      {/* View All Button */}
      {/* <div className="text-center mt-10">
        <Link to="/case-studies" className="inline-flex items-center px-6 py-3 border bg-primary rounded-full text-white hover:text-white transition-colors">
          View All Case Studies <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div> */}
    </div>
  );
}

export default Servicesstory;