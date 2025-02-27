import { Link } from "react-router-dom"
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
function Servicesstory() {
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
    
    return (
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

    )}

    export default Servicesstory;