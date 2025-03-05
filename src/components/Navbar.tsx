
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from './images/Logo.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={logo}
                alt="LeadBridge Logo" 
                className=" w-[250px]"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-lg text-gray-800 hover:text-primary transition-colors">Home</Link>
            <Link to="/whyus" className="text-lg text-gray-800 hover:text-primary transition-colors">Why Us</Link>
            <Link to="/ai-agents" className="text-lg text-gray-800 hover:text-primary transition-colors">AI Agents
            </Link>
            <Link to="/blog" className=" text-lg text-gray-800 hover:text-primary transition-colors">Blog</Link>

            <Link to="/contact" className="text-lg text-gray-800 hover:text-primary transition-colors">Contact Us</Link>
            <Link to="/contact"><button className="bg-primary font-thin text-white px-16 py-3 rounded-full hover:bg-primary-hover transition-colors !ml-24">
              GET STARTED
            </button></Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Home</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">About Us</Link>
              <Link to="/pricing" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Pricing</Link>
              <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Services</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Contact Us</Link>
              <button className="w-full mt-4 bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-hover transition-colors">
                GET STARTED
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
