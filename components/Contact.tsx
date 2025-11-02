import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { SocialIcons } from '../constants';

const SuccessAnimation = () => (
  <svg className="w-24 h-24 mx-auto" viewBox="0 0 52 52">
    <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" stroke="#64ffda" strokeWidth="2" />
    <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" stroke="#64ffda" strokeWidth="2" strokeLinecap="round" />
  </svg>
);


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formState, setFormState] = useState({
    isSubmitting: false,
    message: '',
    isError: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ isSubmitting: true, message: '', isError: false });

    const formspreeEndpoint = 'https://formspree.io/f/xldozazk';

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormState({ isSubmitting: false, message: 'Success!', isError: false });
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        throw new Error('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormState({ isSubmitting: false, message: 'Something went wrong. Please try again.', isError: true });
    }
  };

  const isSuccess = formState.message && !formState.isError;

  return (
    <AnimatedSection id="contact" className="!min-h-0 py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#ccd6f6]">
          <span className="text-[#64ffda] mr-2">05.</span>What's Next?
        </h2>
        <h3 className="text-5xl font-bold my-4 text-[#ccd6f6]">Let’s Build Something Great Together</h3>
        <p className="text-lg text-[#8892b0] max-w-2xl mx-auto mb-12">
          I’m open to collaborations, freelance projects, or internship opportunities. Have a question or just want to say hi? Fill out the form below.
        </p>
      </div>

      {isSuccess ? (
        <div className="text-center max-w-xl mx-auto py-8">
          <SuccessAnimation />
          <p className="mt-6 text-lg text-green-400">
            📊 Data received successfully! I’ll analyze it and get back to you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto text-left">
          <div className="mb-4">
            <label htmlFor="name" className="block text-[#ccd6f6] mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-[#112240] border border-[#233554] rounded-md text-[#ccd6f6] focus:outline-none focus:ring-2 focus:ring-[#64ffda] transition-all"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-[#ccd6f6] mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-[#112240] border border-[#233554] rounded-md text-[#ccd6f6] focus:outline-none focus:ring-2 focus:ring-[#64ffda] transition-all"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-[#ccd6f6] mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-[#112240] border border-[#233554] rounded-md text-[#ccd6f6] focus:outline-none focus:ring-2 focus:ring-[#64ffda] transition-all"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={formState.isSubmitting}
              className="inline-block w-full md:w-auto border border-[#64ffda] text-[#64ffda] px-8 py-4 rounded hover:bg-[#64ffda] hover:bg-opacity-10 transition-colors duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formState.isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          {formState.message && formState.isError && (
            <p className="mt-4 text-center text-red-500">
              {formState.message}
            </p>
          )}
        </form>
      )}

      <div className="flex justify-center space-x-6 mt-16 md:hidden">
        <a href="https://github.com/peterejeh" target="_blank" rel="noopener noreferrer" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">{SocialIcons.github}</a>
        <a href="https://linkedin.com/in/peteriprtexample" target="_blank" rel="noopener noreferrer" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">{SocialIcons.linkedin}</a>
      </div>

    </AnimatedSection>
  );
};

export default Contact;