import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import karmic from "@/components/images/karmic 1.png";
import northwood from "@/components/images/Nottingham Logo 1.png";
import grand from "@/components/images/GWEC logo 1.png";
import androology from "@/components/images/Andrology-Center-Logo 1.png";
import aviva from "@/components/images/aviva-logo 2.png";

const companies = [
  { name: "Grand World Elder Care", logo: grand },
  { name: "Andrology Center", logo: androology },
  { name: "Northwood", logo: northwood },
  { name: "Aviva Quality", logo: aviva },
  { name: "Karmic", logo: karmic },
];

function Icons() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-20 bg-[#F4EEEA] ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-normal text-gray-800 max-w-4xl mb-20" style={{lineHeight:"48px"}}>
        AI agents empower businesses of all sizes, and we’re here to drive this revolution in efficiency.
        </h2>
        
        {/* Desktop View */}
        <div className="hidden sm:flex flex-wrap justify-between items-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="w-32 md:w-40 lg:w-48 opacity-50 hover:opacity-75 transition-opacity duration-300"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
        
        {/* Mobile View - Auto Slider */}
        <div className="sm:hidden flex justify-center items-center overflow-hidden h-24">
          <AnimatePresence>
            <motion.img
              key={companies[currentIndex].name}
              src={companies[currentIndex].logo}
              alt={companies[currentIndex].name}
              className="!w-[250PX] h-auto object-contain"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Icons;
