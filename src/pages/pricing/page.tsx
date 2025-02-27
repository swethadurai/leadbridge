"use client"

import { useState } from "react"
import { Check, X, ChevronDown, ChevronUp } from "lucide-react"
import { Link } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"
import PriceDetails from "@/components/pricing/pricing-details"
import PriceCompare from "@/components/pricing/comparision"
import Testimonial from "@/components/pricing/testimonails"
import Faq from "@/components/pricing/faq"
import Cta from "@/components/pricing/cts"
const Pricing = () => {
  

  return (
    <div className="bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 pt-36">
      <PriceDetails/>
      <PriceCompare/>
      <Faq/>
      <Cta/>
      </div>
      <Footer />
    </div>
  )
}

export default Pricing;

