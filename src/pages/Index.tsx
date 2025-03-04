
import Navbar from '../components/Navbar';
import Hero from '../components/home/Hero';
import AgentServiceSection from '../components/home/Agents-as-a-Service';
import { BenefitsSection } from '@/components/home/ourbenifits';
import { ProcessSection } from '@/components/home/process';
import { PricingSection } from '@/components/home/pricing';
import Testimonial from '@/components/testimonial';
import Blog from '@/components/blog';
import Icons from '@/components/home/icons';
import Faq from '@/components/faq'; 
import Form from '@/components/form';
import Footer from '@/components/footer';
import WhoWeAre from '@/components/home/who-we-wre';
const Index = () => {
  return (
    <div className="min-h-screen bg-white">
     
      <Navbar />
      <Hero />
      <AgentServiceSection/>
      <WhoWeAre/>
      <BenefitsSection/>
    <ProcessSection/>
    {/* <PricingSection/> */}
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
