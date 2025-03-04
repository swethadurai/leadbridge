import { motion } from "framer-motion";
import {
  Bot,
  MessageSquare,
  BarChart,
  Shield,
  Zap,
  Users
} from "lucide-react";

const servicesData = [
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "24/7 customer support with intelligent chatbots that understand context and provide relevant responses.",
    features: ["Natural Language Processing", "Multi-language Support", "Custom Training"],
  },
  {
    icon: MessageSquare,
    title: "Customer Service Automation",
    description: "Streamline customer interactions with intelligent automation that handles routine inquiries.",
    features: ["Ticket Management", "Auto-responses", "Priority Routing"],
  },
  {
    icon: BarChart,
    title: "Analytics & Insights",
    description: "Turn data into actionable insights with our advanced analytics platform.",
    features: ["Real-time Reporting", "Predictive Analytics", "Custom Dashboards"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security measures to protect your data and ensure compliance.",
    features: ["Data Encryption", "GDPR Compliance", "Regular Audits"],
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Automate repetitive tasks and workflows to increase efficiency.",
    features: ["Workflow Optimization", "Integration Support", "Custom Solutions"],
  },
  {
    icon: Users,
    title: "Training & Support",
    description: "Comprehensive training and support to help you maximize your AI investment.",
    features: ["Onboarding Support", "Technical Training", "24/7 Assistance"],
  },
];

function OurServices() {
  return (
    <div>
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
        <p className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive AI solutions designed to transform your business operations and drive growth.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              className="relative group perspective"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="relative w-full h-full bg-white p-8 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 group-hover:bg-gradient-to-bl from-[#FE701A]/10 to-transparent"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Icon className="w-12 h-12 text-[#FF6B2C] mb-6" strokeWidth={1.5} />
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-gray-600 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default OurServices;
