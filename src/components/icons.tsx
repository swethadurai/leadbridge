import React from 'react';
import karmic from './images/karmic 1.png'
import northwood from './images/Nottingham Logo 1.png'
import grand from './images/GWEC logo 1.png'
import androology from './images/Andrology-Center-Logo 1.png'
import aviva from './images/aviva-logo 2.png'
const companies = [
  {
    name: "Grand World Elder Care",
    logo:grand,
  },
  {
    name: "Andrology Center",
    logo:androology,
  },
  {
    name: "Northwood",
    logo: northwood,
  },
  {
    name: "Aviva Quality",
    logo:aviva,
  },
  {
    name: "Karmic",
    logo: karmic,
  }
];

function Icons() {
  return (
    <div className="py-20 bg-[#F4EEEA] ">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl md:text-5xl lg:text-5xl font-normal text-gray-800 max-w-3xl mb-20">
          We help businesses from starting out to growing bigger
        </h1>
        
        <div className="flex flex-wrap justify-between items-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className="w-32 md:w-40 lg:w-48 opacity-50 hover:opacity-75 transition-opacity duration-300"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Icons;