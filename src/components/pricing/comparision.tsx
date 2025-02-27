"use client"

import { useState } from "react";
import { Link } from "react-router-dom"

import React from "react";
import { motion } from "framer-motion";
import { Check, X, ChevronDown, ChevronUp } from "lucide-react"

function PriceCompare() {
    const featureComparison = [
        {
          feature: "AI Chatbot Capabilities",
          starter: "Basic responses",
          professional: "Advanced with context awareness",
          enterprise: "Custom training & capabilities",
        },
        {
          feature: "Monthly Interactions",
          starter: "5,000",
          professional: "25,000",
          enterprise: "Unlimited",
        },
        {
          feature: "Response Time",
          starter: "Standard",
          professional: "Fast",
          enterprise: "Fastest",
        },
        {
          feature: "Custom Integrations",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          feature: "Analytics Dashboard",
          starter: "Basic",
          professional: "Advanced",
          enterprise: "Custom",
        },
        {
          feature: "Support",
          starter: "Email",
          professional: "Priority Email & Chat",
          enterprise: "24/7 Dedicated Support",
        },
        {
          feature: "API Access",
          starter: false,
          professional: true,
          enterprise: true,
        },
        {
          feature: "White Labeling",
          starter: false,
          professional: false,
          enterprise: true,
        },
      ]
    
  return ( 
  <div className="mt-24">
<h2 className="text-3xl font-bold text-center mb-12">Compare Features</h2>
<div className="overflow-x-auto">
  <table className="min-w-full divide-y divide-gray-200">
    <thead>
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Feature
        </th>
        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
          Starter
        </th>
        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
          Professional
        </th>
        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
          Enterprise
        </th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {featureComparison.map((item, index) => (
        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.feature}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
            {typeof item.starter === "boolean" ? (
              item.starter ? (
                <Check className="w-5 h-5 text-[#0F766E] mx-auto" />
              ) : (
                <X className="w-5 h-5 text-gray-300 mx-auto" />
              )
            ) : (
              item.starter
            )}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
            {typeof item.professional === "boolean" ? (
              item.professional ? (
                <Check className="w-5 h-5 text-[#0F766E] mx-auto" />
              ) : (
                <X className="w-5 h-5 text-gray-300 mx-auto" />
              )
            ) : (
              item.professional
            )}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
            {typeof item.enterprise === "boolean" ? (
              item.enterprise ? (
                <Check className="w-5 h-5 text-[#0F766E] mx-auto" />
              ) : (
                <X className="w-5 h-5 text-gray-300 mx-auto" />
              )
            ) : (
              item.enterprise
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>

);
}

export default PriceCompare;