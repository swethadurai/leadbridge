import {
  Bot,
  MessageSquare,
  BarChart,
  Shield,
  Zap,
  Users,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  Code,
  Layers,
  Briefcase,
  Building,
  Building2,
  Landmark,
  Smartphone,
  Globe,
} from "lucide-react"
function Servicestimeline() {
    return (
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven methodology ensures successful implementation and measurable results.
            </p>
          </div>

          <div className="relative">
            {/* Process Steps */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

            <div className="space-y-24 relative">
              {/* Step 1 */}
              <div className="relative">
                <div className="hidden md:flex items-center justify-center absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-4 border-white bg-[#FF6B2C] text-white font-bold">
                  1
                </div>
                <div className="md:grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Discovery & Assessment</h3>
                    <p className="text-gray-600">
                      We begin by understanding your business challenges, goals, and existing systems to identify the
                      best AI solutions for your needs.
                    </p>
                  </div>
                  <div className="mt-6 md:mt-0">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-[#FF6B2C] mt-0.5 mr-2 flex-shrink-0" />
                          <span>Comprehensive business analysis</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-[#FF6B2C] mt-0.5 mr-2 flex-shrink-0" />
                          <span>Technical infrastructure assessment</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-[#FF6B2C] mt-0.5 mr-2 flex-shrink-0" />
                          <span>ROI projection and goal setting</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="hidden md:flex items-center justify-center absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-4 border-white bg-[#FF6B2C] text-white font-bold">
                  2
                </div>
                <div className="md:grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2 md:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Solution Design</h3>
                    <p className="text-gray-600">
                      Our experts design a customized solution tailored to your specific requirements and business
                      processes.
                    </p>
                  </div>
                  <div className="mt-6 md:mt-0 md:order-1">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-[#FF6B2C] mt-0.5 mr-2 flex-shrink-0" />
                          <span>Custom solution architecture</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-[#FF6B2C] mt-0.5 mr-2 flex-shrink-0" />
                          <span>Integration planning</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-[#FF6B2C] mt-0.5 mr-2 flex-shrink-0" />
                          <span>Data security and compliance planning</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="hidden md:flex items-center justify-center absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-4 border-white bg-[#FF6B2C] text-white font-bold">
                  3
                </div>
                <div className="md:grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Development & Implementation</h3>
                    <p className="text-gray-600">
                      We build and deploy your AI solution with minimal disruption to your existing operations.
                    </p>
                  </div>
                  <div className="mt-6 md:mt-0">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-[#FF6B2C] mt-0.5 mr-2 flex-shrink-0" />
                          <span>Agile development methodology</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-[#FF6B2C] mt-0.5 mr-2 flex-shrink-0" />
                          <span>Regular progress updates</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-[#FF6B2C] mt-0.5 mr-2 flex-shrink-0" />
                          <span>Thorough testing and quality assurance</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="hidden md:flex items-center justify-center absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-4 border-white bg-[#FF6B2C] text-white font-bold">
                  4
                </div>
                <div className="md:grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:order-2 md:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Training & Optimization</h3>
                    <p className="text-gray-600">
                      We ensure your team is fully equipped to use the new solution and continuously optimize
                      performance.
                    </p>
                  </div>
                  <div className="mt-6 md:mt-0 md:order-1">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-[#FF6B2C] mt-0.5 mr-2 flex-shrink-0" />
                          <span>Comprehensive user training</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-[#FF6B2C] mt-0.5 mr-2 flex-shrink-0" />
                          <span>Performance monitoring</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-[#FF6B2C] mt-0.5 mr-2 flex-shrink-0" />
                          <span>Continuous improvement</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )}

    export default Servicestimeline;