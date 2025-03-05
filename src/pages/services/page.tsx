import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import OurServices from "@/components/services/ourservices";
import Servicestimeline from "@/components/services/timeline";
import Servicesstory from "@/components/services/successstory";
import Solution from "@/components/services/solutions";
import Partners from "@/components/services/partners";
import Cta from "@/components/services/cta";
const Services = () => {
  useEffect(() => {
    document.title = "AI-Powered Business Solutions | LeadBridge UK";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Discover AI-driven solutions by LeadBridge UK to enhance customer service, automate processes, and gain data insights. Boost efficiency, security, and compliance with cutting-edge AI technology. Explore our tailored services today."
      );
  }, []);

  return (
    <div className="bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-36">
        <OurServices />
        <Servicestimeline />
        <Servicesstory />
        <Solution />
        <Cta/>
        {/* <Partners /> */}
   
      </div>
      <Footer />
    </div>
  );
};

export default Services;
