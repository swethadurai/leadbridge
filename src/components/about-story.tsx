import React from "react";
import { motion } from "framer-motion";

function AboutStory() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 pt-24">
      <motion.div 
        className="grid md:grid-cols-2 gap-12 items-center mt-20 mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2 className="text-[#0D7377] font-semibold mb-4">OUR STORY</h2>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
          <p className="text-gray-600 mb-6">
            Founded in 2023, LeadBridge emerged from a simple yet powerful idea: to make AI technology accessible and practical for businesses of all sizes. What started as a small team of innovators has grown into a global force in AI solutions.
          </p>
          <p className="text-gray-600">
            Today, we're proud to serve hundreds of companies worldwide, helping them automate processes, enhance customer service, and drive growth through our AI-powered solutions.
          </p>
          <motion.button
            className="w-44 mt-6 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-hover transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Talk To Us
          </motion.button>
        </motion.div>
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            alt="Team Meeting"
            className="rounded-lg shadow-xl"
          />
          <motion.div 
            className="absolute -bottom-6 -right-6 bg-[#FE701A] text-white p-6 rounded-lg shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <p className="text-3xl font-bold">5+ Years</p>
            <p className="text-sm">Combined AI Experience</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AboutStory;
