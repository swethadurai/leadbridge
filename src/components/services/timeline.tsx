import { Check,Phone,ChartLine,ChartBarBig,Factory } from "lucide-react";

function Servicestimeline() {
  return (
    <div className="mt-16 md:mt-32 px-4 sm:px-8">
      <div className="text-center mb-12 md:mb-16">
      <h3 className="text-[#0D7377] font-semibold mb-4">Creative Mock Scenario</h3>
        <h2 className="text-2xl sm:text-4xl md:text-5xl text-gray-900 mb-4 sm:mb-6">Meet AcmeTech: A Business in Need of AI Agents</h2>
        <p className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
        Instead of listing benefits traditionally, show a mock company (AcmeTech) facing real business challenges and how AI agents can solve them.

        </p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
        <div className="space-y-16 md:space-y-24 relative">
          {["AcmeTech struggles with", "AcmeTech struggles with", "AcmeTech struggles with", "AcmeTech struggles with"].map((title, index) => (
            <div className="relative" key={index}>
              {/* Timeline Indicator */}
              <div className="hidden md:flex items-center justify-center absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-4 border-[#0F766E] bg-[#FF6B2C] text-white font-bold">
                {index + 1}
              </div>

              {/* Grid Layout - Alternates Left-Right */}
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center text-left">
                {/* Conditional Order to Alternate Layout */}
                <div className={`${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">{title}</h3>
                  <p className="text-gray-600 text-base sm:text-lg">
                  {index === 0 && < p className="flex items-center gap-3"><Phone /> High customer service wait times</ p>}
                    {index === 1 && < p className="flex items-center gap-3"><ChartLine/>Sales leads slipping through the cracks"</p>}
                    {index === 2 && < p className="flex items-center gap-3"><ChartBarBig/>Manual data reporting slowing decisions </p>}
                    {index === 3 && < p className="flex items-center gap-3"><Factory/>Complex workflows causing inefficiency</p>}
                  </p>
                </div>

                <div className={`${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                    <h2 className="text-xl sm:text-2xl text-primary font-bold mb-3">How AI Agents Help AcmeTech:</h2>
                    <ul className="space-y-3 text-sm sm:text-base">
                      {[
                        ["A Customer Service AI Agent handles FAQs, reducing response time by 80%."],
                        ["A Sales AI Agent nurtures leads, sending follow-ups and booking meetings"],
                        ["A Data AI Agent generates real-time insights for better decision-making."],
                        ["A Process Automation Agent streamlines repetitive tasks, saving hours of manual effort."]
                      ][index].map((item, i) => (
                        <li className="flex items-start" key={i}>
                          <Check className="w-5 h-5 text-[#0F766E] mt-0.5 mr-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div> 
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Servicestimeline;
