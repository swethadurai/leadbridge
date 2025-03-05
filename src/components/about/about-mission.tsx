import React from "react";
import { Users, Rocket, Code,Dot , ChartLine, FileLock, ShieldHalf } from 'lucide-react';
import { motion } from "framer-motion";

const cardData = [
  { icon: <Rocket className="w-9 h-9 text-white" strokeWidth={1.5} />, title: "Expertise", descriptions: [
      "Our team consists of seasoned AI professionals with deep technical expertise in machine learning, natural language processing (NLP), and automation.",
      "We focus on understanding your business needs first, ensuring that every AI solution is designed to solve real challenges and drive measurable impact.",
      "With a strong track record of delivering effective AI solutions, we prioritise practicality, scalability, and seamless integration into your existing operations."
  ]},
  { icon: <Users className="w-9 h-9 text-white" strokeWidth={1.5}/>, title: "Tailored to Your Business", descriptions: [
      "No one-size-fits-all solutions—our AI agents are built around your unique workflows.",
      "Seamless integration with your existing systems for a frictionless transition.",
      "Whether it’s customer support, sales, or process automation, we customise AI for your specific needs."
  ]},
  { icon: <Code className="w-9 h-9 text-white" strokeWidth={1.5} />, title: "Scalable & Future-Ready", descriptions: [
      "Our AI solutions grow with you—handling increasing data, customers, and complexity without performance drops.",
      "Flexible deployment options: Cloud, on-premises, or hybrid setups based on your business needs.",
      "Ongoing optimisation to keep your AI performing at peak efficiency."
  ]},
  { icon: <FileLock className="w-9 h-9 text-white" strokeWidth={1.5} />, title: "Security & Compliance First", descriptions: [
      "Enterprise-grade security to protect your data and ensure compliance with GDPR and industry regulations.",
      "AI models built with explainability, fairness, and bias prevention in mind.",
      "Real-time monitoring, encryption, and role-based access controls for end-to-end security."
  ]},
  { icon: <ChartLine className="w-9 h-9 text-white" strokeWidth={1.5} />, title: "Measurable ROI & Business Growth", descriptions: [
      "AI is an investment, not an expense—our solutions deliver tangible business benefits.",
      "Improve response times, reduce operational costs, and boost productivity.",
      "Transparent performance tracking and AI-driven insights to measure impact in real time."
  ]},
  { icon: <ShieldHalf className="w-9 h-9 text-white" strokeWidth={1.5}/>, title: "Continuous Support & Collaboration", descriptions: [
      "We don’t just launch and leave—our team provides post-implementation support.",
      "Regular updates, performance monitoring, and ongoing training for your team.",
      "A collaborative approach that keeps you involved every step of the way."
  ]}
];

function Aboutmission() {
  return (
    <div className="bg-gradient-to-r bg-[#F4EEEA] py-16 text-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#0D7377] font-semibold mb-4">What We Do</h2>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-normal text-gray-900 mb-6">What Sets Us Apart?</h1>
          <p className="text-gray-600 mb-6 text-md sm:text-lg">
            At Leadbridge, we understand that every business is unique, and we tailor our approach accordingly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white text-gray-900 shadow-xl rounded-2xl p-8 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex  w-[100%] items-center m-6">
              <div className="bg-[#FF6B2C] p-2 rounded-md ">{card.icon}</div>
              <h3 className="text-2xl foont-bold   ml-2">{card.title}</h3>
              </div>
          
              <ul className="text-gray-700 text-md space-y-4">
                {card.descriptions.map((desc, idx) => (
                 <li key={idx} className="bg-gray-100 p-4 rounded-lg shadow-md text-center text-md sm:text-lg "> {desc}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Aboutmission;
