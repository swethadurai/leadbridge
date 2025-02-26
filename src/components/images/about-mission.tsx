import React from "react";
import { Users, Target, Lightbulb, Award, Rocket, Code, Globe, Shield, Heart } from 'lucide-react';
import { motion } from "framer-motion";

const cardData = [
  {
    icon: <Rocket className="w-28 h-12 text-[#FF6B2C]" />, 
    title: "Our Mission", 
    description: "To revolutionize business operations through accessible, intelligent AI solutions that drive real-world results and foster innovation across industries."
  },
  {
    icon: <Rocket className="w-28 h-12 text-[#FF6B2C]" />, 
    title: "Our Mission", 
    description: "To revolutionize business operations through accessible, intelligent AI solutions that drive real-world results and foster innovation across industries."
  },
  {
    icon: <Globe className="w-28 h-12 text-[#FF6B2C]" />, 
    title: "Our Vision", 
    description: "To create a world where every business, regardless of size, can harness the power of AI to achieve their full potential and drive meaningful growth."
  }
];

function Aboutmission() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-[#0D7377] font-semibold mb-4">WHAT WE DO</h2>
          <h1 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6">
            Fresh Ideas for Business
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            At Leadbridge, we understand that every business is unique, and we tailor our approach accordingly.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-12 ">
          {cardData.map((card, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-gradient-to-bl from-[#FE701A]/10 to-transparent p-10 rounded-xl shadow-xl flex items-top space-x-6"
            >
              {card.icon}
              <div>
                <h3 className="text-3xl font-bold mb-4">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Aboutmission;
