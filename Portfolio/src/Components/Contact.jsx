import React, { useState } from 'react';
import { FaFileDownload, FaDiscord, FaLinkedin } from 'react-icons/fa';
import gif from '../assets/contact-gif.gif';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const FORM_ENDPOINT = 'https://public.herotofu.com/v1/f3690a30-cef9-11ee-a1c1-7755cb567bfd';

  const handleSubmit = async (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      if (input.name === 'email') {
        if (!emailRegex.test(input.value)) {
          alert('Please enter a valid email address');
          input.focus();
          return;
        }
      } else {
        if (input.name && input.value.trim() === '') {
          alert(`${input.name} cannot be empty`);
          input.focus();
          return;
        }
      }
      data[input.name] = input.value;
    }

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Form response was not ok');
      }
      setSubmitted(true);
      alert("Form submitted successfully! We'll be in touch soon.");
      // Clear form inputs
      e.target.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again later.');
    }
  };

  if (submitted) {
    // This will never be rendered as the component will be unmounted after form submission
    return null;
  }

  return (
    <section id="contact" className='w-full py-16 px-4' style={{ background: '#FFFFFF' }}>
      <h1 className='text-3xl font-bold mb-8 px-4 text-center'>CONTACT</h1>
      <div className='max-w-4xl mx-auto flex flex-col lg:flex-row'>
        <div className='bg-gradient-to-b from-blue-300 to-blue-100 lg:w-2/4 rounded-lg p-8 mb-16 lg:mb-0 lg:ml-8 shadow-md border border-[#81c6f5]'>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                Name
              </label>
              <input
                className='appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
                id='name'
                name='name' 
                type='text'
                placeholder='Enter name'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                Email
              </label>
              <input
                className='appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
                id='email'
                name='email' 
                type='email'
                placeholder='Enter email'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='message'>
                Message
              </label>
              <textarea
                className='appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
                id='message'
                name='message' 
                placeholder='Send message'
                rows='4'
              ></textarea>
            </div>
            <div className='flex justify-center lg:justify-start'>
              <button
                className='bg-[#7cc9fc] text-black font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline shadow-md mr-4'
                type='submit' 
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="lg:w-2/4 relative">
          <img src={gif} alt="Contact" className="w-full lg:h-auto lg:max-h-full animate-bounce" />
          <div className="absolute bottom-0 left-0 right-0 flex justify-center mt-6">
            <FaFileDownload size={30} className="text-2xl mr-4 cursor-pointer" />
            <a href="asekona_31187" target="_blank" rel="noopener noreferrer">
              <FaDiscord size={30} className="text-2xl mr-4 cursor-pointer discord-icon" />
            </a>
            <a href="https://www.linkedin.com/in/asekona-xanywa-99b655200/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} className="text-2xl cursor-pointer linkedin-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
