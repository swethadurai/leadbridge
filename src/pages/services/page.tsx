import React from "react"
import {
  Bot,
  MessageSquare,
  BarChart,
  Shield,
  Zap,
  Users,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  Code,
  Layers,
  Briefcase,
  Building,
  Building2,
  Landmark,
  Smartphone,
  Globe,
} from "lucide-react"
import { Link } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"

const Services = () => {
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "How quickly can you implement an AI solution for my business?",
      answer:
        "Implementation timelines vary based on the complexity of your needs. Simple chatbot solutions can be deployed in as little as 2-4 weeks, while more complex enterprise integrations may take 2-3 months. During our initial consultation, we'll provide a detailed timeline specific to your project.",
    },
    {
      question: "Do your AI solutions integrate with our existing systems?",
      answer:
        "Yes, our solutions are designed to integrate seamlessly with most common business systems including CRM platforms, help desk software, e-commerce platforms, and custom applications. We have pre-built connectors for popular systems like Salesforce, Zendesk, Shopify, and more.",
    },
    {
      question: "How do you ensure the security of our data?",
      answer:
        "We implement enterprise-grade security measures including end-to-end encryption, secure API connections, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA where applicable. All data is stored in secure, compliant cloud environments with strict access controls.",
    },
    {
      question: "What kind of ROI can we expect from implementing your AI solutions?",
      answer:
        "Our clients typically see ROI in three main areas: cost reduction through automation (20-40% reduction in support costs), increased revenue through improved customer experiences (10-30% increase in conversion rates), and operational efficiency gains (25-50% reduction in processing times). We'll work with you to establish KPIs and track ROI specific to your business goals.",
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer:
        "Yes, we offer comprehensive support and maintenance packages for all our solutions. This includes 24/7 technical support, regular updates and improvements, performance monitoring, and continuous training of your AI models to ensure optimal performance over time.",
    },
  ]

  const caseStudies = [
    {
      title: "E-commerce Conversion Boost",
      industry: "Retail",
      challenge: "A leading online retailer was struggling with cart abandonment and customer support volume.",
      solution: "Implemented an AI chatbot with product recommendations and instant support capabilities.",
      results: "42% reduction in cart abandonment and 35% decrease in support tickets within 3 months.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Financial Services Automation",
      industry: "Banking",
      challenge: "A regional bank needed to streamline customer onboarding and reduce processing times.",
      solution: "Deployed process automation for document verification and customer information processing.",
      results: "68% faster onboarding process and 52% reduction in manual processing errors.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Healthcare Patient Experience",
      industry: "Healthcare",
      challenge: "A healthcare provider wanted to improve patient engagement and reduce administrative burden.",
      solution: "Created a custom AI assistant for appointment scheduling, follow-ups, and basic medical queries.",
      results: "91% patient satisfaction rate and 28% reduction in administrative staff workload.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const industryIcons = {
    "Retail & E-commerce": <Smartphone className="w-8 h-8 text-[#FF6B2C]" />,
    "Financial Services": <Landmark className="w-8 h-8 text-[#FF6B2C]" />,
    Healthcare: <Building className="w-8 h-8 text-[#FF6B2C]" />,
    Manufacturing: <Layers className="w-8 h-8 text-[#FF6B2C]" />,
    Technology: <Code className="w-8 h-8 text-[#FF6B2C]" />,
    "Professional Services": <Briefcase className="w-8 h-8 text-[#FF6B2C]" />,
    Government: <Building2 className="w-8 h-8 text-[#FF6B2C]" />,
    "Global Enterprises": <Globe className="w-8 h-8 text-[#FF6B2C]" />,
  }

  const partners = [
    { name: "Microsoft", logo: "/placeholder.svg?height=60&width=120" },
    { name: "AWS", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Google Cloud", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Salesforce", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Zendesk", logo: "/placeholder.svg?height=60&width=120" },
    { name: "HubSpot", logo: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <div className="bg-white">
            <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-36">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations and drive growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <Bot className="w-12 h-12 text-[#FF6B2C] mb-6" />
            <h3 className="text-xl font-semibold mb-4">AI Chatbots</h3>
            <p className="text-gray-600 mb-4">
              24/7 customer support with intelligent chatbots that understand context and provide relevant responses.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Natural Language Processing</li>
              <li>• Multi-language Support</li>
              <li>• Custom Training</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <MessageSquare className="w-12 h-12 text-[#FF6B2C] mb-6" />
            <h3 className="text-xl font-semibold mb-4">Customer Service Automation</h3>
            <p className="text-gray-600 mb-4">
              Streamline customer interactions with intelligent automation that handles routine inquiries.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Ticket Management</li>
              <li>• Auto-responses</li>
              <li>• Priority Routing</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <BarChart className="w-12 h-12 text-[#FF6B2C] mb-6" />
            <h3 className="text-xl font-semibold mb-4">Analytics & Insights</h3>
            <p className="text-gray-600 mb-4">
              Turn data into actionable insights with our advanced analytics platform.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Real-time Reporting</li>
              <li>• Predictive Analytics</li>
              <li>• Custom Dashboards</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <Shield className="w-12 h-12 text-[#FF6B2C] mb-6" />
            <h3 className="text-xl font-semibold mb-4">Security & Compliance</h3>
            <p className="text-gray-600 mb-4">
              Enterprise-grade security measures to protect your data and ensure compliance.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Data Encryption</li>
              <li>• GDPR Compliance</li>
              <li>• Regular Audits</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <Zap className="w-12 h-12 text-[#FF6B2C] mb-6" />
            <h3 className="text-xl font-semibold mb-4">Process Automation</h3>
            <p className="text-gray-600 mb-4">Automate repetitive tasks and workflows to increase efficiency.</p>
            <ul className="text-gray-600 space-y-2">
              <li>• Workflow Optimization</li>
              <li>• Integration Support</li>
              <li>• Custom Solutions</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <Users className="w-12 h-12 text-[#FF6B2C] mb-6" />
            <h3 className="text-xl font-semibold mb-4">Training & Support</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive training and support to help you maximize your AI investment.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Onboarding Support</li>
              <li>• Technical Training</li>
              <li>• 24/7 Assistance</li>
            </ul>
          </div>
        </div>

        {/* How We Work Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven methodology ensures successful implementation and measurable results.
            </p>
          </div>

          <div className="relative">
            {/* Process Steps */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

            <div className="space-y-24 relative">
              {/* Step 1 */}
              <div className="relative">
                <div className="hidden md:flex items-center justify-center absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-4 border-white bg-[#FF6B2C] text-white font-bold">
                  1
                </div>
                <div className="md:grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Discovery & Assessment</h3>
                    <p className="text-gray-600">
                      We begin by understanding your business challenges, goals, and existing systems to identify the
                      best AI solutions for your needs.
                    </p>
                  </div>
                  <div className="mt-6 md:mt-0">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-[#FF6B2C] mt-0.5 mr-2 flex-shrink-0" />
                          <span>Comprehensive business analysis</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-[#FF6B2C] mt-0.5 mr-2 flex-shrink-0" />
                          <span>Technical infrastructure assessment</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-[#FF6B2C] mt-0.5 mr-2 flex-shrink-0" />
                          <span>ROI projection and goal setting</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="hidden md:flex items-center justify-center absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-4 border-white bg-[#FF6B2C] text-white font-bold">
                  2
                </div>
                <div className="md:grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2 md:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Solution Design</h3>
                    <p className="text-gray-600">
                      Our experts design a customized solution tailored to your specific requirements and business
                      processes.
                    </p>
                  </div>
                  <div className="mt-6 md:mt-0 md:order-1">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-[#FF6B2C] mt-0.5 mr-2 flex-shrink-0" />
                          <span>Custom solution architecture</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-[#FF6B2C] mt-0.5 mr-2 flex-shrink-0" />
                          <span>Integration planning</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-[#FF6B2C] mt-0.5 mr-2 flex-shrink-0" />
                          <span>Data security and compliance planning</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="hidden md:flex items-center justify-center absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-4 border-white bg-[#FF6B2C] text-white font-bold">
                  3
                </div>
                <div className="md:grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Development & Implementation</h3>
                    <p className="text-gray-600">
                      We build and deploy your AI solution with minimal disruption to your existing operations.
                    </p>
                  </div>
                  <div className="mt-6 md:mt-0">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-[#FF6B2C] mt-0.5 mr-2 flex-shrink-0" />
                          <span>Agile development methodology</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-[#FF6B2C] mt-0.5 mr-2 flex-shrink-0" />
                          <span>Regular progress updates</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-[#FF6B2C] mt-0.5 mr-2 flex-shrink-0" />
                          <span>Thorough testing and quality assurance</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="hidden md:flex items-center justify-center absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-4 border-white bg-[#FF6B2C] text-white font-bold">
                  4
                </div>
                <div className="md:grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2 md:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Training & Optimization</h3>
                    <p className="text-gray-600">
                      We ensure your team is fully equipped to use the new solution and continuously optimize
                      performance.
                    </p>
                  </div>
                  <div className="mt-6 md:mt-0 md:order-1">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-[#FF6B2C] mt-0.5 mr-2 flex-shrink-0" />
                          <span>Comprehensive user training</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-[#FF6B2C] mt-0.5 mr-2 flex-shrink-0" />
                          <span>Performance monitoring</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-[#FF6B2C] mt-0.5 mr-2 flex-shrink-0" />
                          <span>Continuous improvement</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how our AI solutions have transformed businesses across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <img src={study.image || "/placeholder.svg"} alt={study.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="inline-block px-3 py-1 text-sm font-semibold text-[#FF6B2C] bg-orange-50 rounded-full mb-4">
                    {study.industry}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                  <div className="space-y-3 text-gray-600 mb-4">
                    <p>
                      <span className="font-semibold">Challenge:</span> {study.challenge}
                    </p>
                    <p>
                      <span className="font-semibold">Solution:</span> {study.solution}
                    </p>
                    <p>
                      <span className="font-semibold">Results:</span> {study.results}
                    </p>
                  </div>
                  <Link to="/case-studies" className="inline-flex items-center text-[#FF6B2C] font-medium">
                    Read full case study <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center px-6 py-3 border border-[#FF6B2C] text-[#FF6B2C] rounded-md hover:bg-[#FF6B2C] hover:text-white transition-colors"
            >
              View All Case Studies <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Industry Solutions Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Industry Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored AI solutions designed for the unique challenges of your industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(industryIcons).map(([industry, icon], index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {icon}
                  <h3 className="text-lg font-semibold ml-3">{industry}</h3>
                </div>
                <Link
                  to={`/industries/${industry.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-flex items-center text-[#FF6B2C] font-medium text-sm mt-2"
                >
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Partners Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Integration Partners</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our solutions integrate seamlessly with your existing technology stack.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our AI services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 py-4">
                <button
                  className="flex justify-between items-center w-full text-left font-medium text-gray-900 py-2"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#FF6B2C]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#FF6B2C]" />
                  )}
                </button>
                {openFaqIndex === index && <div className="mt-2 text-gray-600 pb-2">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 bg-gradient-to-r from-[#FF6B2C] to-[#FF8F5C] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Schedule a consultation with our experts to discover how our AI solutions can address your specific business
            challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-[#FF6B2C] rounded-md hover:bg-gray-100 transition-colors font-medium"
            >
              Schedule a Demo
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border border-white text-white rounded-md hover:bg-white/10 transition-colors font-medium"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default Services;
