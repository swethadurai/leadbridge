"use client"

import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, Clock, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"
import { motion } from "framer-motion"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    subject: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setIsLoading(false)
      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          jobTitle: "",
          subject: "",
          message: "",
        })
      }, 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  }

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8 }
    }
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <Navbar/>
      
      {/* Hero Section */}
      {/* <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-[#0F766E] to-[#0e5954] text-white"
      >
        <div className="absolute inset-0 bg-black opacity-20 pattern-dots pattern-size-2 pattern-opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Ready to make a difference? We're here to help you every step of the way.
          </motion.p>
        </div>
      </motion.div> */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-36">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          {/* Contact Form */}
          <motion.div 
            variants={itemVariants}
            className="lg:w-1/2 w-full bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF6B2C] to-[#ff8f61]"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#FF6B2C] opacity-10"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-[#0F766E] opacity-10"></div>
            
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
              <Heart className="w-5 h-5 mr-2 text-[#FF6B2C]" />
              Contact Us
            </h2>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">Thank you for reaching out. We'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700">Full Name</Label>
                    <Input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      className="border-gray-300 focus:border-[#0F766E] focus:ring-[#0F766E] transition-all duration-300"
                      required 
                    />
                  </motion.div>
                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                    <Input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      className="border-gray-300 focus:border-[#0F766E] focus:ring-[#0F766E] transition-all duration-300"
                      required 
                    />
                  </motion.div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
                    <Input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      className="border-gray-300 focus:border-[#0F766E] focus:ring-[#0F766E] transition-all duration-300"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="company" className="text-gray-700">Company Name</Label>
                    <Input 
                      type="text" 
                      id="company" 
                      name="company" 
                      value={formData.company} 
                      onChange={handleChange} 
                      className="border-gray-300 focus:border-[#0F766E] focus:ring-[#0F766E] transition-all duration-300"
                    />
                  </motion.div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="jobTitle" className="text-gray-700">Job Title</Label>
                    <Input 
                      type="text" 
                      id="jobTitle" 
                      name="jobTitle" 
                      value={formData.jobTitle} 
                      onChange={handleChange} 
                      className="border-gray-300 focus:border-[#0F766E] focus:ring-[#0F766E] transition-all duration-300"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-700">Subject</Label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0F766E] focus:border-[#0F766E] transition-all duration-300"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="Donation">Donation</option>
                      <option value="Volunteer">Volunteer</option>
                      <option value="Partnership">Partnership</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </motion.div>
                </div>
                <motion.div variants={itemVariants} className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="border-gray-300 focus:border-[#0F766E] focus:ring-[#0F766E] transition-all duration-300"
                    required
                  />
                </motion.div>
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#FF6B2C] to-[#ff8f61] hover:from-[#ff8f61] hover:to-[#FF6B2C] transition-all duration-300"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </motion.div>
              </form>
            )}
          </motion.div>
          
          {/* Charity Image */}
          <motion.div 
            variants={itemVariants}
            className="lg:w-1/2 w-full"
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
              alt="Charity volunteers helping community" 
              className="rounded-xl shadow-lg object-cover w-full h-[500px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg -mt-20 ml-10 mr-10 relative z-10 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-[#0F766E] mb-2">Make a Difference Today</h3>
              <p className="text-gray-600">Join our mission to create positive change in communities around the world. Your support matters.</p>
              <div className="mt-4 flex space-x-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Volunteer
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Donate
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Partner
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24"
        >
          <h2 className="text-2xl font-semibold mb-10 text-center">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#FF6B2C] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-[#FF6B2C]" />
              </div>
              <h3 className="font-medium text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">contact@leadbridge.ai</p>
              <a href="mailto:contact@leadbridge.ai" className="text-[#FF6B2C] text-sm mt-2 inline-block hover:underline">
                Send an email →
              </a>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#0F766E] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-[#0F766E]" />
              </div>
              <h3 className="font-medium text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <a href="tel:+15551234567" className="text-[#0F766E] text-sm mt-2 inline-block hover:underline">
                Call us →
              </a>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#FF6B2C] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#FF6B2C]" />
              </div>
              <h3 className="font-medium text-gray-800 mb-2">Address</h3>
              <p className="text-gray-600">
                123 AI Street<br />
                Tech City, TC 12345<br />
                United States
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#0F766E] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-[#0F766E]" />
              </div>
              <h3 className="font-medium text-gray-800 mb-2">Business Hours</h3>
              <p className="text-gray-600">
                Monday - Friday:<br />9:00 AM - 6:00 PM EST<br />
                Saturday - Sunday: Closed
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div 
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-2xl font-semibold mb-6">Our Location</h2>
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe 
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy" 
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=leadtap&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#0F766E] to-[#0e5954] text-white rounded-xl p-8 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -ml-32 -mb-32"></div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl font-bold mb-4 relative z-10"
          >
            Ready to Make a Difference?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl mb-6 max-w-2xl mx-auto relative z-10"
          >
            Join our community of changemakers and help us create a better world for everyone.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10"
          >
            <Button variant="secondary" size="lg" className="bg-white text-[#0F766E] hover:bg-gray-100">
              Become a Volunteer
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact;