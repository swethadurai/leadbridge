import {
  Smartphone,
  Landmark,
  Building,
  Layers,
  Code,
  Briefcase,
  Building2,
  Globe,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

function Solution() {
  const industryIcons = {
    "Retail & E-commerce": <Smartphone className="w-8 h-8 text-[#FF6B2C]" strokeWidth={1} />,
    "Financial Services": <Landmark className="w-8 h-8 text-[#FF6B2C]" strokeWidth={1} />,
    Healthcare: <Building className="w-8 h-8 text-[#FF6B2C]" strokeWidth={1} />,
    Manufacturing: <Layers className="w-8 h-8 text-[#FF6B2C]" strokeWidth={1} />,
    Technology: <Code className="w-8 h-8 text-[#FF6B2C]" strokeWidth={1} />,
    "Professional Services": <Briefcase className="w-8 h-8 text-[#FF6B2C]" strokeWidth={1} />,
    Government: <Building2 className="w-8 h-8 text-[#FF6B2C]" strokeWidth={1} />,
    "Global Enterprises": <Globe className="w-8 h-8 text-[#FF6B2C]" strokeWidth={1} />,
  };

  return (
    <div className="mt-32 px-4 sm:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Industry Solutions</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Tailored AI solutions designed for the unique challenges of your industry.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {Object.entries(industryIcons).map(([industry, icon], index) => (
          <div
            key={index}
            className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-3 sm:mb-4">
              {icon}
              <h3 className="text-sm sm:text-lg font-semibold ml-2 sm:ml-3">{industry}</h3>
            </div>
            <Link
              to={`/industries/${industry.toLowerCase().replace(/\s+/g, "-")}`}
              className="inline-flex items-center text-primary font-medium text-xs sm:text-sm mt-1 sm:mt-2"
            >
              Learn more <ArrowRight className="w-4 h-4 ml-1 mt-0.5" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Solution;
