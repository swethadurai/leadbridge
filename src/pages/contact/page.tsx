"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"
import formimg from '@/components/images/ai-images-removebg-preview.png';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="bg-gray-50">
      <Navbar/>
      {/* Hero Section */}
      {/* <div className="relative bg-[#0F766E] text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Ready to transform your business with AI? We're here to help you every step of the way.
          </p>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-36">
        <div className="flex items-center justify-around">
       
        <div className="">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <Input type="text" id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#0F766E] focus:border-[#0F766E]"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Sales">Sales</option>
                    <option value="Support">Support</option>
                    <option value="Partnerships">Partnerships</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

         
        </div>
        <div>
          <img src={formimg} alt="" width="500px" />
        </div>
        </div>
 {/* Contact Information */}
 <div className=" ">
            <h2 className="text-2xl font-semibold mt-24 mb-6">Contact Information</h2>
            <div className=" flex gap-20 m-auto mt-10 ">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-[#FF6B2C] !mt-1" />
                <div className="ml-4">
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">contact@leadbridge.ai</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-[#FF6B2C] !mt-0" />
                <div className="ml-4">
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-[#FF6B2C] !mt-0" />
                <div className="ml-4">
                  <h3 className="font-medium">Address</h3>
                  <p className="text-gray-600">
                    123 AI Street
                    <br />
                    Tech City, TC 12345
                    <br />
                    United States
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-[#FF6B2C] mt-1" />
                <div className="ml-4">
                  <h3 className="font-medium">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM EST
                    <br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9">
            {/* <iframe
              src=""
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe> */}
                   <iframe width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=leadtap&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

          </div>
        </div>

        {/* FAQ Section
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What services do you offer?</AccordionTrigger>
              <AccordionContent>
                We offer a wide range of AI-powered solutions for businesses, including natural language processing,
                computer vision, predictive analytics, and custom AI model development.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How can AI benefit my business?</AccordionTrigger>
              <AccordionContent>
                AI can help your business by automating repetitive tasks, improving decision-making processes, enhancing
                customer experiences, and uncovering valuable insights from your data.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do you offer custom AI solutions?</AccordionTrigger>
              <AccordionContent>
                Yes, we specialize in developing custom AI solutions tailored to your specific business needs and
                challenges. Our team of experts will work closely with you to create a solution that delivers maximum
                value.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What industries do you serve?</AccordionTrigger>
              <AccordionContent>
                We serve a wide range of industries, including finance, healthcare, retail, manufacturing, and more. Our
                AI solutions are adaptable and can be customized for various sectors.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div> */}

        {/* CTA Section
        <div className="mt-16 bg-[#0F766E] text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-6">
            Transform your business with our cutting-edge AI solutions. Contact us today for a free consultation.
          </p>
          <Button variant="secondary" size="lg">
            Schedule a Demo
          </Button>
        </div> */}
      </div>
      <Footer/>
    </div>
  )
}

export default Contact;

