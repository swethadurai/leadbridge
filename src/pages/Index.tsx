
import Navbar from '../components/Navbar';
import Hero from '../components/home/Hero';
import AgentServiceSection from '../components/home/image-with-text';
import { BenefitsSection } from '@/components/home/future-of-work';
import { ProcessSection } from '@/components/home/timeline-steps';
import { PricingSection } from '@/components/home/pricing';
import Testimonial from '@/components/testimonial';
import Blog from '@/components/blog';
import Icons from '@/components/home/icons';
import Faq from '@/components/faq'; 
import Form from '@/components/form';
import Footer from '@/components/footer';
import WhoWeAre from '@/components/home/who-we-wre';
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Intelligent AI Solutions for Businesses | LeadBridge UK";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "LeadBridge UK delivers cutting-edge AI-driven automation, customer service, and data analytics solutions. Enhance efficiency, security, and business growth with our AI technology."
      );
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AgentServiceSection />
      <WhoWeAre />
      <BenefitsSection />
      <ProcessSection />
      {/* <PricingSection/> */}
      <Testimonial />
      <Blog />
      <Icons />
      <Faq />
      <Form />
      <Footer />
    </div>
  );
};

export default Index;
