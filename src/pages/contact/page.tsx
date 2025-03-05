import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"
import Form from "@/components/contactus/form"
import Info from "@/components/contactus/info"
import Map from "@/components/contactus/map"
import Cta from "@/components/services/cta"
import { useEffect } from "react";


 

const Contact = () => {
  useEffect(() => {
    document.title = "Get in Touch | Contact LeadBridge UK";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Looking for AI-powered solutions? Contact LeadBridge UK today. Our experts are here to assist with AI automation, data analytics, and business optimisation."
      );
  }, []);
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <Navbar/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-36">
      <Form/>
      {/* <Info/> */}
      {/* <Map/> */}
      {/* <Cta/> */}
      </div>
      <Footer/>
    </div>
  )
}

export default Contact;