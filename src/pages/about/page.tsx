import React from 'react';
import { Users, Target, Lightbulb, Award, Rocket, Code, Globe, Shield, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';
import Aboutmission from '@/components/about-mission';
// import AboutBanner from '@/components/about-banner';
import AboutStory from '@/components/about-story';
import AboutStats from '@/components/about-stats';
import Aboutvalue from '@/components/about-core-values';
const About = () => {
 
  return (
    <div className="bg-white">
       <Navbar />
       <AboutStory/>
       <Aboutmission/>
       <AboutStats/>
       <Aboutvalue/>
       <Footer/>
    </div>
  );
};

export default About;