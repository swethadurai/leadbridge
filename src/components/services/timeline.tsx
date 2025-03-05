import { Check } from "lucide-react";

function Servicestimeline() {
  return (
    <div className="mt-16 md:mt-32 px-4 sm:px-8">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-4xl md:text-5xl text-gray-900 mb-4 sm:mb-6">How We Work</h2>
        <p className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Our proven methodology ensures successful implementation and measurable results.
        </p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
        <div className="space-y-16 md:space-y-24 relative">
          {["Discovery & Assessment", "Solution Design", "Development & Implementation", "Training & Optimization"].map((title, index) => (
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
                    {index === 0 && "We begin by understanding your business challenges, goals, and existing systems to identify the best AI solutions for your needs."}
                    {index === 1 && "Our experts design a customized solution tailored to your specific requirements and business processes."}
                    {index === 2 && "We build and deploy your AI solution with minimal disruption to your existing operations."}
                    {index === 3 && "We ensure your team is fully equipped to use the new solution and continuously optimize performance."}
                  </p>
                </div>

                <div className={`${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                  <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                    <ul className="space-y-3 text-sm sm:text-base">
                      {[
                        ["Comprehensive business analysis", "Technical infrastructure assessment", "ROI projection and goal setting"],
                        ["Custom solution architecture", "Integration planning", "Data security and compliance planning"],
                        ["Agile development methodology", "Regular progress updates", "Thorough testing and quality assurance"],
                        ["Comprehensive user training", "Performance monitoring", "Continuous improvement"]
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
