import { Check } from "lucide-react";
import { motion } from "framer-motion";
import  ai from './images/ai.png'
export const AgentServiceSection = () => {
  const benefits = [
    "Advanced AI agent development using Agency Swarm framework",
    "Seamless integration with your existing tech stack",
    "Full support and maintenance included",
  ];

  const stats = [
    {
      number: "25k",
      label: "SUCCESSFUL DEPLOYMENTS",
      description: "Powering businesses worldwide",
    },
    {
      number: "100",
      label: "ENTERPRISE CLIENTS",
      description: "Trust our solutions",
    },
    {
      number: "50k",
      label: "HOURS SAVED",
      description: "Through automation",
    },
  ];

  return (
    <div className=" mx-auto px-4  md:py-24 bg-[#FAFAFA]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-[1400px] mx-auto">
        <div className="relative order-2 lg:order-1">
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            src={ai}
            alt="AI Agents Illustration"
            className="w-full h-auto max-w-[600px] mx-auto"
          />
        </div>

        <div className="space-y-8 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* <h2 className="text-lg font-semibold text-[#ff4d00] mb-4">
              AGENCY SWARM FRAMEWORK
            </h2> */}
            <h1 className="text-4xl md:text-5xl font-normal mb-6 text-gray-900">
            Agents-as-a-Service            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            We specialise in developing AI-driven agents that automate tasks, enhance customer experiences, and optimise business operations. Our solutions leverage advanced machine learning, natural language processing, and intelligent automation to deliver real value. Whether you're a small business or a large enterprise, our AI solutions help you stay ahead in the competitive UK market.            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-4"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-lg  border border-emerald-700 flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#0D7377]" />
                </div>
                <span className="text-gray-700 text-lg">{benefit}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className=""
      >
        {/* <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-lg font-semibold text-[#ff4d00] mb-4">
            WHY CHOOSE US
          </h2>
          <h3 className="text-4xl font-bold mb-6 text-gray-900">
            Trusted by Leading Enterprises
          </h3>
          <p className="text-gray-600 text-lg">
            We've helped hundreds of businesses achieve their automation goals through our advanced AI agent solutions and dedicated support team.
          </p>
        </div> */}

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            // <motion.div
            //   key={index}
            //   initial={{ opacity: 0, y: 20 }}
            //   animate={{ opacity: 1, y: 0 }}
            //   transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
            //   className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            // >
            //   <div className="text-5xl font-bold text-[#ff4d00] mb-3">
            //     {stat.number}<span className="text-3xl">+</span>
            //   </div>
            //   <div className="text-sm font-bold text-gray-800 mb-3 tracking-wider">
            //     {stat.label}
            //   </div>
            //   <p className="text-gray-600">
            //     {stat.description}
            //   </p>
            // </motion.div>
          ))}
        </div> */}
      </motion.div>
    </div>
  );
};

export default AgentServiceSection;
