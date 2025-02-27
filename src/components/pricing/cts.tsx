 "use client"
 
 import { useState } from "react";
 import { Link } from "react-router-dom"
 
 import React from "react";
 import { motion } from "framer-motion";
 import { Check, X, ChevronDown, ChevronUp } from "lucide-react"
 
 function Cta() {
   return ( 
    <div>
        <div className="mt-24 bg-gray-50 rounded-2xl p-12 text-center">
                  <h2 className="text-3xl font-bold mb-6">Not sure which plan is right for you?</h2>
                  <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Our team of experts can help you choose the perfect solution for your business needs and budget.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/contact"
                      className="px-8 py-3 bg-[#0F766E] text-white rounded-md hover:bg-[#0c6058] transition-colors"
                    >
                      Schedule a Demo
                    </Link>
                    <Link
                      to="/contact"
                      className="px-8 py-3 border border-[#0F766E] text-[#0F766E] rounded-md hover:bg-[#0F766E] hover:text-white transition-colors"
                    >
                      Talk to Sales
                    </Link>
                  </div>
                </div>
    </div>
    
                );
            }
            
            export default Cta;
            