"use client"

import { useState } from "react"
import { Check, X, ChevronDown, ChevronUp } from "lucide-react"
import { Link } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "How does the monthly interaction limit work?",
      answer:
        "An interaction is counted each time a user sends a message to your AI chatbot. Our system tracks these interactions and resets the count at the beginning of each billing cycle.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Yes, you can change your plan at any time. When upgrading, we'll prorate the difference. When downgrading, the new rate will apply at the start of your next billing cycle.",
    },
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes, we offer a 14-day free trial on our Starter and Professional plans so you can test our platform before committing.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and for Enterprise customers, we can arrange invoicing with net-30 terms.",
    },
    {
      question: "Is there a setup fee?",
      answer:
        "No, there are no setup fees for any of our plans. You only pay the advertised monthly or annual subscription price.",
    },
  ]

  const testimonials = [
    {
      quote: "Implementing this AI solution increased our customer satisfaction by 35% while reducing support costs.",
      author: "Sarah Johnson",
      position: "Customer Success Manager",
      company: "TechCorp Inc.",
    },
    {
      quote: "The ROI was immediate. Within 3 months, we saw a 40% increase in qualified leads through our website.",
      author: "Michael Chen",
      position: "Marketing Director",
      company: "GrowthWave",
    },
    {
      quote: "Enterprise support is exceptional. They helped us customize the solution to our exact requirements.",
      author: "Priya Patel",
      position: "CTO",
      company: "Innovate Solutions",
    },
  ]

  const featureComparison = [
    {
      feature: "AI Chatbot Capabilities",
      starter: "Basic responses",
      professional: "Advanced with context awareness",
      enterprise: "Custom training & capabilities",
    },
    {
      feature: "Monthly Interactions",
      starter: "5,000",
      professional: "25,000",
      enterprise: "Unlimited",
    },
    {
      feature: "Response Time",
      starter: "Standard",
      professional: "Fast",
      enterprise: "Fastest",
    },
    {
      feature: "Custom Integrations",
      starter: false,
      professional: true,
      enterprise: true,
    },
    {
      feature: "Analytics Dashboard",
      starter: "Basic",
      professional: "Advanced",
      enterprise: "Custom",
    },
    {
      feature: "Support",
      starter: "Email",
      professional: "Priority Email & Chat",
      enterprise: "24/7 Dedicated Support",
    },
    {
      feature: "API Access",
      starter: false,
      professional: true,
      enterprise: true,
    },
    {
      feature: "White Labeling",
      starter: false,
      professional: false,
      enterprise: true,
    },
  ]

  return (
    <div className="bg-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 pt-36">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. No hidden fees.
          </p>

          {/* Plan Toggle */}
          <div className="flex items-center justify-center mt-6 ">
            <span className={`mr-3 ${!isAnnual ? "font-semibold text-gray-900" : "text-gray-500"}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${isAnnual ? "translate-x-6" : "translate-x-1"}`}
              />
            </button>
            <span className={`ml-3 ${isAnnual ? "font-semibold text-gray-900" : "text-gray-500"}`}>
              Annual <span className="text-[#0F766E] text-sm font-medium">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Starter</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">${isAnnual ? "79" : "99"}</span>
              <span className="text-gray-600">/{isAnnual ? "month, billed annually" : "month"}</span>
            </div>
            <p className="text-gray-600 mb-6">Perfect for small businesses starting with AI</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#0F766E] mr-2" />
                <span>Basic AI Chatbot</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#0F766E] mr-2" />
                <span>5,000 Monthly Interactions</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#0F766E] mr-2" />
                <span>Email Support</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#0F766E] mr-2" />
                <span>Basic Analytics</span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="block w-full text-center px-6 py-3 border border-[#0F766E] text-[#0F766E] rounded-md hover:bg-[#0F766E] hover:text-white transition-colors"
            >
              Get Started
            </Link>
          </div>

          <div className="bg-[#0F766E] p-8 rounded-xl shadow-lg transform scale-105">
            <h3 className="text-xl font-semibold mb-4 text-white">Professional</h3>
            <div className="mb-6 text-white">
              <span className="text-4xl font-bold">${isAnnual ? "239" : "299"}</span>
              <span>/{isAnnual ? "month, billed annually" : "month"}</span>
            </div>
            <p className="text-gray-100 mb-6">Ideal for growing companies</p>
            <ul className="space-y-4 mb-8 text-white">
              <li className="flex items-center">
                <Check className="w-5 h-5 mr-2" />
                <span>Advanced AI Chatbot</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 mr-2" />
                <span>25,000 Monthly Interactions</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 mr-2" />
                <span>Priority Support</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 mr-2" />
                <span>Advanced Analytics</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 mr-2" />
                <span>Custom Integration</span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="block w-full text-center px-6 py-3 bg-white text-[#0F766E] rounded-md hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">Custom</span>
            </div>
            <p className="text-gray-600 mb-6">For large organizations with specific needs</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#0F766E] mr-2" />
                <span>Custom AI Solutions</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#0F766E] mr-2" />
                <span>Unlimited Interactions</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#0F766E] mr-2" />
                <span>24/7 Dedicated Support</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#0F766E] mr-2" />
                <span>Custom Analytics</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-[#0F766E] mr-2" />
                <span>SLA Guarantee</span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="block w-full text-center px-6 py-3 border border-[#0F766E] text-[#0F766E] rounded-md hover:bg-[#0F766E] hover:text-white transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Compare Features</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Feature
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Starter
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Professional
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {featureComparison.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.feature}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      {typeof item.starter === "boolean" ? (
                        item.starter ? (
                          <Check className="w-5 h-5 text-[#0F766E] mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        item.starter
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      {typeof item.professional === "boolean" ? (
                        item.professional ? (
                          <Check className="w-5 h-5 text-[#0F766E] mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        item.professional
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                      {typeof item.enterprise === "boolean" ? (
                        item.enterprise ? (
                          <Check className="w-5 h-5 text-[#0F766E] mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        item.enterprise
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 py-4">
                <button
                  className="flex justify-between items-center w-full text-left font-medium text-gray-900 py-2"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#0F766E]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#0F766E]" />
                  )}
                </button>
                {openFaqIndex === index && <div className="mt-2 text-gray-600 pb-2">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-gray-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Not sure which plan is right for you?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team of experts can help you choose the perfect solution for your business needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-[#0F766E] text-white rounded-md hover:bg-[#0c6058] transition-colors"
            >
              Schedule a Demo
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border border-[#0F766E] text-[#0F766E] rounded-md hover:bg-[#0F766E] hover:text-white transition-colors"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Pricing;

