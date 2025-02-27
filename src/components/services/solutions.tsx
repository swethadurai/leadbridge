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

function Solution() {

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
    return (
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
    )}

    export default Solution;