
import { motion } from 'framer-motion';
import heroimg from './images/Ai 1.png'
const Hero = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br  relative overflow-hidden">
      {/* Top left gradient */}
      <div className="absolute -top-0 -left-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-secondary/30 rounded-full blur-3xl" />
      
      {/* Bottom right gradient */}
      <div className="absolute bottom-20 -right-0 w-80 h-80 bg-gradient-to-br from-secondary/30 to-primary/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative z-10">
        <div className="text-center space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-normal text-gray-900 tracking-tight mt-4"
          >
            Scale Your Business With
            <span className="block text-secondary mt-6 font-bold ">AI-Powered Agents</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600"
          >
            Transform the way you work with AI-driven automation. Cut costs, boost efficiency, and deliver exceptional customer experiences—24/7.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-primary-hover transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl">
              BOOK A FREE CONSULTATION
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <img 
              src={heroimg}
              alt="AI Agent Illustration"
              className="max-w-3xl mx-auto w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
