export default function WhoWeAre() {
  return (
    <section className="px-4 bg-[#FAFAFA] pb-28 pt-12 sm:mt-0">
      <div className="text-center flex flex-col sm:flex-row gap-12 items-baseline max-w-[1200px] mx-auto">
        {/* Left Section */}
        <div className="text-center sm:text-right sm:w-1/2">
          <h2 className="text-gray-500 uppercase text-sm font-medium mb-4">Who We Are</h2>
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-normal text-gray-800 mb-6">
            Your Dedicated
            <br />
            AI Team - On Demand
          </h3>
          <p className="text-gray-600 mb-12 sm:text-right xs:text-center mx-auto sm:mx-0  sm:text-md">
          AI is transforming businesses worldwide, automating millions of hours of work and boosting efficiency like never before. Our expert team specialises in building AI agents that streamline operations, enhance customer interactions, and drive real business results. Whether you’re a startup or an established enterprise, we help you harness the power of AI to stay ahead.

          </p>
        </div>

        {/* Right Section */}
        <div className="space-y-12 sm:w-1/2 max-w-[756px] w-full mx-auto">
          {/* First Stat */}
          <div className="flex flex-wrap sm:flex-nowrap flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center w-40">
              <div className="text-[#FF6B2C] text-5xl font-bold">
              $47B<span className="text-3xl align-top text-[#0d7a76] text-light">+</span>
              </div>
              <div className="text-gray-500 uppercase text-sm mt-2">AI Agents <br /> Deployed</div>
            </div>
            <div className="hidden md:block border-r border-dashed border-r-slate-300 h-28"></div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-gray-600"> AI Agent Market by 2030</p>
            </div>
          </div>

          {/* Second Stat */}
          <div className="flex flex-wrap sm:flex-nowrap flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center w-40">
              <div className="text-[#FF6B2C] text-5xl font-bold">
              80%<span className="text-3xl align-top text-[#0d7a76] text-normal">+</span>
              </div>
              <div className="text-gray-500 uppercase text-sm mt-2">Businesses <br /> Transformed</div>
            </div>
            <div className="hidden md:block border-r border-dashed border-r-slate-300 h-28"></div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-gray-600">Customer Interactions Managed by AI.
              </p>
            </div>
          </div>

          {/* Third Stat */}
          <div className="flex flex-wrap sm:flex-nowrap flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center w-40">
              <div className="text-[#FF6B2C] text-5xl font-bold">
              85%<span className="text-3xl align-top text-[#0d7a76] text-normal">+</span>
              </div>
              <div className="text-gray-500 uppercase text-sm mt-2">Hours Saved<br /> Per Client</div>
            </div>
            <div className="hidden md:block border-r border-dashed border-r-slate-300 h-28"></div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-gray-600">Boost in Productivity with AI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
