import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "Business Needs Assessment Business Needs Assessment",
    answer: "Understanding key challenges, workflows, and objectives to define the AI agent's role and functionalities."
  },
  {
    question: "Knowledge & Data Integration",
    answer: "Connecting the AI agent to relevant data sources, documents, APIs, and business systems for accurate responses and actions."
  },
  {
    question: "Agent Design & Development",
    answer: "Defining the agent's capabilities, conversation flow, and decision-making logic to ensure effective interaction and automation."
  },
  {
    question: "Testing & Fine-Tuning",
    answer: "Running simulations and real-world tests to refine responses, accuracy, and overall performance. "
  },
  {
    question: "Deployment & System Integration",
    answer: "Seamlessly embedding the AI agent into business tools like CRMs, websites, and communication platforms."
  },
  {
    question: "Monitoring & Continuous Optimisation",
    answer: "Tracking usage, gathering feedback, and improving the AI agent's capabilities for better efficiency and user experience."
  },
  {
    question: "Ongoing Updates & Adaptation",
    answer: "Regular enhancements, security updates, and feature expansions to keep the AI agent aligned with evolving business needs."
  }
];

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" bg-[#FAF7F7] py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 justify-center items-center">
        {/* Left Column */}
        <div className="lg:w-1/3">
          <h2 className="text-xl sm:text-3xl font-medium text-gray-800 mb-4">
            Still have questions? Let's Talk!
          </h2>
          <p className="text-gray-600 mb-8 text-xl">
            Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.
          </p>
          <Link to="/contact">
          <button className="bg-[#0D7377] text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-colors">
            Contact us
          </button></Link>
        </div>

        {/* Right Column - FAQs */}
        <div className="lg:w-2/3">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center  bg-[#F4EEEA] "
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-800 text-xl ">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-600 pt-5 text-lg">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;