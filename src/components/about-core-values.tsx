import React from "react";
import { motion } from "framer-motion";

function Aboutvalue() {
  return (
    <div className="bg-gradient-to-br from-[#0F766E] to-[#134E4A] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="relative grid grid-cols-3 gap-8 pl-8  align-middle justify-center items-center  !mt-0">
          {["Innovation", "Reliability", "Customer Success"].map((value, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-10"
            >
              <motion.div 
                initial={{ height: 0 , width: 0}} 
                whileInView={{ height: "100%",width: "2px" }} 
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="absolute left-0 top-0 w-[1px] bg-[#FF6B2C]"
              />
              <h3 className="text-2xl font-semibold !mt-0">{value}</h3>
              <p className="text-gray-100">
                {value === "Innovation" && "We constantly push the boundaries of what's possible with AI technology.We constantly push the boundaries of what's possible with AI technology."}
                {value === "Reliability" && "Our solutions are built to perform consistently and securely.We constantly push the boundaries of what's possible with AI technology."}
                {value === "Customer Success" && "Your success is our success. We're committed to delivering results.We constantly push the boundaries of what's possible with AI technology."}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Aboutvalue;
