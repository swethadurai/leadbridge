import React from "react";
import { Users, Target, Lightbulb, Award, Rocket, Code, Globe, Shield, Heart, Dot } from 'lucide-react';
import { motion } from "framer-motion";

const cardData = [
  {
    icon: <Rocket className="w-18 h-10 text-[#FF6B2C]" />, 
    title: "Expertise", 
    description1: "Our team consists of seasoned AI professionals with deep technical expertise in machine learning, natural language processing (NLP), and automation.",
    description2:"We focus on understanding your business needs first, ensuring that every AI solution is designed to solve real challenges and drive measurable impact.",
    description3:"With a strong track record of delivering effective AI solutions, we prioritise practicality, scalability, and seamless integration into your existing operations."
  },
  {
    icon: <Users className="w-18 h-10 text-[#FF6B2C]" />, 
    title: "Tailored to Your Business", 
    description1: "No one-size-fits-all solutions—our AI agents are built around your unique workflows.",
    description2:"Seamless integration with your existing systems for a frictionless transition.",
    description3:"Whether it’s customer support, sales, or process automation, we customise AI for your specific needs."
  },
  {
    icon: <Code className="w-18 h-10 text-[#FF6B2C]" />, 
    title: "Scalable & Future-Ready", 
    description1: "Our AI solutions grow with you—handling increasing data, customers, and complexity without performance drops.",
    description2:"Flexible deployment options: Cloud, on-premises, or hybrid setups based on your business needs.",
    description3:"Ongoing optimisation to keep your AI performing at peak efficiency."
  },
  {
    icon: <Rocket className="w-18 h-10 text-[#FF6B2C]" />, 
    title: "Security & Compliance First", 
    description1: "Enterprise-grade security to protect your data and ensure compliance with GDPR and industry regulations.",
    description2:"AI models built with explainability, fairness, and bias prevention in mind.",
    description3:"Real-time monitoring, encryption, and role-based access controls for end-to-end security."
  },
  {
    icon: <Users className="w-18 h-10 text-[#FF6B2C]" />, 
    title: "Measurable ROI & Business Growth", 
    description1: "AI is an investment, not an expense—our solutions deliver tangible business benefits.",
    description2:"Improve response times, reduce operational costs, and boost productivity.",
    description3:"Transparent performance tracking and AI-driven insights to measure impact in real time."
  },
  {
    icon: <Code className="w-18 h-10 text-[#FF6B2C]" />, 
    title: "Continuous Support & Collaboration", 
    description1: "We don’t just launch and leave—our team provides post-implementation support.",
    description2:"Regular updates, performance monitoring, and ongoing training for your team.",
    description3:"A collaborative approach that keeps you involved every step of the way."
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
          What Sets Us Apart?

          </h1>
          <p className="text-md sm:text-lg text-gray-600">
            At Leadbridge, we understand that every business is unique, and we tailor our approach accordingly.
          </p>
        </motion.div>
        <div className=" ">
          {cardData.map((card, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative flex items-top space-x-6 flex-col mt-20"
            >
          <h3 className="text-3xl font-normal mb-4">{card.title}</h3>
              <div className="grid md:grid-cols-3 gap-12">
                
                <p className="text-gray-600 flex flex-col mt-3 bg-gradient-to-bl from-[#FE701A]/10 to-transparent p-10 rounded-xl shadow-xl "> <span className="mr-3">{card.icon}</span>{card.description1}</p>
                <p className="text-gray-600 flex flex-col mt-3 bg-gradient-to-bl from-[#FE701A]/10 to-transparent p-10 rounded-xl shadow-xl "> <span className="mr-3">{card.icon}</span>{card.description2}</p>
                <p className="text-gray-600 flex flex-col mt-3 bg-gradient-to-bl from-[#FE701A]/10 to-transparent p-10 rounded-xl shadow-xl "> <span className="mr-3">{card.icon}</span>{card.description3}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Aboutmission;
