import React from 'react';
import { Users, Target, Lightbulb, Award, Rocket, Code, Globe, Shield, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';
import AboutBanner from '@/components/about-banner';

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      description: "15+ years in AI and Machine Learning"
    },
    {
      name: "David Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      description: "Former Tech Lead at Major AI Companies"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of AI Research",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      description: "PhD in Artificial Intelligence"
    }
  ];

  return (
    <div className="bg-white">
       <Navbar />
       <AboutBanner/>
      

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2023, LeadBridge emerged from a simple yet powerful idea: to make AI technology accessible and practical for businesses of all sizes. What started as a small team of innovators has grown into a global force in AI solutions.
            </p>
            <p className="text-gray-600">
              Today, we're proud to serve hundreds of companies worldwide, helping them automate processes, enhance customer service, and drive growth through our AI-powered solutions.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt="Team Meeting"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#FF6B2C] text-white p-6 rounded-lg shadow-lg">
              <p className="text-3xl font-bold">5+ Years</p>
              <p className="text-sm">Combined AI Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Rocket className="w-12 h-12 text-[#FF6B2C] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To revolutionize business operations through accessible, intelligent AI solutions that drive real-world results and foster innovation across industries.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Globe className="w-12 h-12 text-[#FF6B2C] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To create a world where every business, regardless of size, can harness the power of AI to achieve their full potential and drive meaningful growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
            <Users className="w-12 h-12 text-[#FF6B2C] mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">50+</h3>
            <p className="text-gray-600">Team Members</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
            <Target className="w-12 h-12 text-[#FF6B2C] mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">200+</h3>
            <p className="text-gray-600">Clients Served</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
            <Lightbulb className="w-12 h-12 text-[#FF6B2C] mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">1M+</h3>
            <p className="text-gray-600">AI Interactions</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
            <Award className="w-12 h-12 text-[#FF6B2C] mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">15+</h3>
            <p className="text-gray-600">Industry Awards</p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gradient-to-br from-[#0F766E] to-[#134E4A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Code className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-100">
                We constantly push the boundaries of what's possible with AI technology.
              </p>
            </div>
            <div className="text-center p-6">
              <Shield className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Reliability</h3>
              <p className="text-gray-100">
                Our solutions are built to perform consistently and securely.
              </p>
            </div>
            <div className="text-center p-6">
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Customer Success</h3>
              <p className="text-gray-100">
                Your success is our success. We're committed to delivering results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Leadership</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team brings together decades of experience in AI, machine learning, and business transformation.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-[#FF6B2C] font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;