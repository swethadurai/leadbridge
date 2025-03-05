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
      className={`w-[45%] p-2 top-0 -mt-10 ${isLeft ? "text-right" : "text-left"}`}
    >
      <span className="text-[#FE701A] text-xs md:text-sm font-semibold -mt-10">STEP {stepNumber}</span>
      <h3 className="text-lg md:text-2xl font-bold text-teal-600 mb-2">{title}</h3>
      <p className="text-xs md:text-base text-gray-600 mb-7">{description}</p>
    </motion.div>

    {/* Step Indicator */}
    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-[#FE701A] -top-8"></div>
  </div>
);

export const ProcessSection = () => {
  const steps = [
    {
      title: "Strategic AI Consultation",
      description: "Comprehensive assessment of business objectives, operational challenges, and data infrastructure to determine AI's optimal role.",
    },
    {
      title: "Data Acquisition & Processing",
      description: "Collection, cleansing, and structuring of relevant data to build a solid foundation for AI model training.",
    },
    {
      title: "Model Development & Training",
      description: "Selection of the appropriate AI model, followed by iterative training using advanced machine learning techniques.",
    },
    {
      title: "Seamless System Integration",
      description: "Deployment of AI solutions into existing business systems, ensuring smooth interoperability and minimal disruption.",
    },
    {
      title: "Performance Monitoring & Optimization",
      description: "Continuous tracking of AI performance metrics with adaptive tuning to maintain accuracy and efficiency.",
    },
    {
      title: "Ongoing Support & Evolution",
      description: "Regular updates, security enhancements, and AI retraining to keep up with evolving business needs and technological advancements.",
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
            How It Works: Our Process
          </h1>
          <p className="text-md sm:text-xl text-gray-400 mt-10 mb-10">
          A Proven Framework for Transforming Your Business with Custom AI Agent Solutions.
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
