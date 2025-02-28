import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Will AI agents replace human employees?",
    answer: "No! AI enhances your team's productivity by handling repetitive tasks so your staff can focus on high-value work."
  },
  {
    question: "How long does it take to set up an AI agent?",
    answer: "Setup is quick and straightforward, typically taking just a few hours. Our team guides you through the entire process."
  },
  {
    question: "Is AI expensive?",
    answer: "We offer flexible pricing plans to suit businesses of all sizes. The ROI is typically realized within the first few months."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we implement enterprise-grade security measures and comply with all relevant data protection regulations."
  },
  {
    question: "Do you offer support after implementation?",
    answer: "Yes, we provide comprehensive post-implementation support and regular check-ins to ensure optimal performance."
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
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium text-gray-800 mb-4">
            Still have questions? Let's Talk!
          </h2>
          <p className="text-gray-600 mb-8">
            Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.
          </p>
          <button className="bg-[#0D7377] text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-colors">
            Contact us
          </button>
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
                  <span className="font-medium text-gray-800 ">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-600 pt-5">
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