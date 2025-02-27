"use client"

import { useState } from "react";
import { Link } from "react-router-dom"

import React from "react";
import { motion } from "framer-motion";
import { Check, X, ChevronDown, ChevronUp } from "lucide-react"

function Testimonial() {
    const testimonials = [
        {
          quote: "Implementing this AI solution increased our customer satisfaction by 35% while reducing support costs.",
          author: "Sarah Johnson",
          position: "Customer Success Manager",
          company: "TechCorp Inc.",
        },
        {
          quote: "The ROI was immediate. Within 3 months, we saw a 40% increase in qualified leads through our website.",
          author: "Michael Chen",
          position: "Marketing Director",
          company: "GrowthWave",
        },
        {
          quote: "Enterprise support is exceptional. They helped us customize the solution to our exact requirements.",
          author: "Priya Patel",
          position: "CTO",
          company: "Innovate Solutions",
        },
      ]
    return(
        <div>
             <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
    )
}
export default Testimonial;