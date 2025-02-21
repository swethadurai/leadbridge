import { motion } from "framer-motion";

interface ProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
  isLeft?: boolean;
}

const ProcessStep = ({ stepNumber, title, description, isLeft }: ProcessStepProps) => (
  <div className={`relative flex items-center ${isLeft ? "justify-start" : "justify-end"} mb-16 w-full`}>
    {/* Timeline Connector */}
    <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gray-300" />
    
    {/* Step Content */}
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-[45%] p-2 top-0  -mt-10 ${isLeft ? "text-right" : "text-left"}`}
    >
      <span className="text-[#ff4d00] text-sm font-semibold -mt-8">STEP {stepNumber}</span>
      <h3 className="text-2xl font-bold text-teal-600 mb-2">{title}</h3>
      <p className="text-gray-600 mb-7">{description}</p>
    </motion.div>

    {/* Step Indicator */}
    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-[#ff4d00] -top-8"></div>
  </div>
);

export const ProcessSection = () => {
  const steps = [
    {
      title: "AI-Powered Consultation",
      description: "We assess your needs and identify automation opportunities.",
    },
    {
      title: "Transparent Progress Tracking",
      description: "See your AI agents evolve with real-time reports.",
    },
    {
      title: "Seamless Integration",
      description: "AI solutions that fit perfectly with your existing systems.",
    },
    {
      title: "Ongoing Support & Optimisation",
      description: "We fine-tune and improve performance continuously.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#F4EEEA]">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works: Our Process
          </h1>
          <p className="text-md text-gray-400 mt-10 mb-10">
            A Proven Framework for Transforming Your Business with <br />
            Custom AI Agent Solutions.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative w-full">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              stepNumber={index + 1}
              title={step.title}
              description={step.description}
              isLeft={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
