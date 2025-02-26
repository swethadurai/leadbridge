import React from 'react';
import { Bot, MessageSquare, BarChart, Shield, Zap, Users } from 'lucide-react';

const Services = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations and drive growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <Bot className="w-12 h-12 text-[#FF6B2C] mb-6" />
            <h3 className="text-xl font-semibold mb-4">AI Chatbots</h3>
            <p className="text-gray-600 mb-4">
              24/7 customer support with intelligent chatbots that understand context and provide relevant responses.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Natural Language Processing</li>
              <li>• Multi-language Support</li>
              <li>• Custom Training</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <MessageSquare className="w-12 h-12 text-[#FF6B2C] mb-6" />
            <h3 className="text-xl font-semibold mb-4">Customer Service Automation</h3>
            <p className="text-gray-600 mb-4">
              Streamline customer interactions with intelligent automation that handles routine inquiries.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Ticket Management</li>
              <li>• Auto-responses</li>
              <li>• Priority Routing</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <BarChart className="w-12 h-12 text-[#FF6B2C] mb-6" />
            <h3 className="text-xl font-semibold mb-4">Analytics & Insights</h3>
            <p className="text-gray-600 mb-4">
              Turn data into actionable insights with our advanced analytics platform.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Real-time Reporting</li>
              <li>• Predictive Analytics</li>
              <li>• Custom Dashboards</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <Shield className="w-12 h-12 text-[#FF6B2C] mb-6" />
            <h3 className="text-xl font-semibold mb-4">Security & Compliance</h3>
            <p className="text-gray-600 mb-4">
              Enterprise-grade security measures to protect your data and ensure compliance.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Data Encryption</li>
              <li>• GDPR Compliance</li>
              <li>• Regular Audits</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <Zap className="w-12 h-12 text-[#FF6B2C] mb-6" />
            <h3 className="text-xl font-semibold mb-4">Process Automation</h3>
            <p className="text-gray-600 mb-4">
              Automate repetitive tasks and workflows to increase efficiency.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Workflow Optimization</li>
              <li>• Integration Support</li>
              <li>• Custom Solutions</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <Users className="w-12 h-12 text-[#FF6B2C] mb-6" />
            <h3 className="text-xl font-semibold mb-4">Training & Support</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive training and support to help you maximize your AI investment.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Onboarding Support</li>
              <li>• Technical Training</li>
              <li>• 24/7 Assistance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;