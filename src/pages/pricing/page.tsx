"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"
import PriceDetails from "@/components/pricing/pricing-details"
import PriceCompare from "@/components/pricing/comparision"
import Testimonial from "@/components/pricing/testimonails"
import Faq from "@/components/faq"
import Cta from "@/components/pricing/cts"
const Pricing = () => {
  

  return (
    <div className="bg-white">
      <Navbar />
   
      <PriceDetails/>
      <PriceCompare/>
      <Faq />
      <Testimonial/>
      <Cta/>
      
      <Footer />
    </div>
  )
}

export default Pricing;

