import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className=" bg-[#F4EEEA] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-800 text-center mb-3">
          Let's get started
        </h1>
        <p className="text-gray-600 text-center mb-12 text-xl mt-10">
          Want to talk? Fill out the form below, we're here to help.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label 
              htmlFor="name" 
              className="block text-lg text-gray-700 mb-2"
            >
            Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full border-b-2 border-gray-300 py-2 px-1 text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none focus:border-teal-600 transition-colors"
            />
          </div>

          <div>
            <label 
              htmlFor="company" 
              className="block text-lg text-gray-700 mb-2"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Your company name"
              className="w-full border-b-2 border-gray-300 py-2 px-1 text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none focus:border-teal-600 transition-colors"
            />
          </div>

          <div>
            <label 
              htmlFor="email" 
              className="block text-lg text-gray-700 mb-2"
            >
               Email 
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full border-b-2 border-gray-300 py-2 px-1 text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none focus:border-teal-600 transition-colors"
            />
          </div>

          <div>
            <label 
              htmlFor="phone" 
              className="block text-lg text-gray-700 mb-2"
            >
               Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone"
              className="w-full border-b-2 border-gray-300 py-2 px-1 text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none focus:border-teal-600 transition-colors"
            />
          </div>

          <div className="pt-4 flex items-center justify-center">
            <button
              type="submit"
              className=" bg-[#0D7377] text-white py-4 px-16 rounded-full hover:bg-[#0D7377] transition-colors text-lg font-thin"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;