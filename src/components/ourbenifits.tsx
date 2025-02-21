
import { ArrowRight, Zap, Settings, Brain, LineChart } from "lucide-react";
import { motion } from "framer-motion";
import img1 from './images/Group 24.png'
import img2 from './images/Group 25.png'
import img3 from './images/Group 26.png'
import img4 from './images/Group 27.png'

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-center h-[500px] rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 bg-gradient-to-bl from-[#FE701A]/10 to-transparent border border-gray-200 "
  >
    <div className="text-[#ff4d00] mb-6 mx-auto mt-8">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-500 mb-4 pt-6">{title}</h3>
    <p className="text-gray-500 mb-6 leading-relaxed pt-6">{description}</p>
    <div className="text-[#0D7377] pt-6 ">
      <ArrowRight className="w-5 h-5 m-auto" />
    </div>
  </motion.div>
);

export const BenefitsSection = () => {
  const benefits = [
    {
      icon:<img src={img1} alt="24/7 Customer Engagement" className="w-16 h-14 m-auto" />,
      title: "24/7 Customer Engagement",
      description: "Outsource even the most complex in your business. Not just drafting emails.",
    },
    {
      icon: <img src={img2} alt="24/7 Customer Engagement" className="w-16 h-16 m-auto" />,
      title: "Reduce Mistakes",
      description: "Once your agents are fine tuned, they require minimal to no supervision",
    },
    {
      icon: <img src={img3} alt="24/7 Customer Engagement" className="w-16 h-14 m-auto" />,
      title: "Business Process Automation",
      description: "Adapt quickly to new advancements in AI with OpenAI Assistants API",
    },
    {
      icon: <img src={img4} alt="24/7 Customer Engagement" className="w-16 h-16 m-auto" />,
      title: "Data and Insights",
      description: "Add more agents as needed. Scale without affecting your overhead.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 ">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-emerald-600 font-semibold mb-4">OUR BENEFITS</h2>
          <h1 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6">
            Automate Roles, Not Just Tasks
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Why settle for simple automation when you can have AI agents that think, adapt, and improve over time?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
             
            />
          ))}
        </div>
      </div>
    </section>
  );
};
