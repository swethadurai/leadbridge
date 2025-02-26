
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AgentServiceSection from '../components/Agents-as-a-Service';
import { BenefitsSection } from '@/components/ourbenifits';
import { ProcessSection } from '@/components/process';
import { PricingSection } from '@/components/pricing';
import Testimonial from '@/components/testimonial';
import Blog from '@/components/blog';
import Icons from '@/components/icons';
import Faq from '@/components/faq'; 
import Form from '@/components/form';
import Footer from '@/components/footer';
import WhoWeAre from '@/components/who-we-wre';
const Index = () => {
  return (
    <div className="min-h-screen bg-white">
     
      <Navbar />
      <Hero />
      <AgentServiceSection/>
      <WhoWeAre/>
      <BenefitsSection/>
    <ProcessSection/>
    <PricingSection/>
    <Testimonial/>
    <Blog/>
    <Icons/>
    <Faq/>
    <Form/>
    <Footer/>
    </div>
  );
};

export default Index;
