import React from 'react';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-800 text-white text-center">
      <h2 className="text-4xl font-semibold">Get in Touch</h2>
      <p className="mt-4 text-lg">I'd love to hear from you! Feel free to reach out via the form below.</p>
      <form className="mt-8 max-w-md mx-auto">
        <input className="w-full p-3 mb-4 bg-gray-700 rounded-lg" type="text" placeholder="Your Name" />
        <input className="w-full p-3 mb-4 bg-gray-700 rounded-lg" type="email" placeholder="Your Email" />
        <textarea className="w-full p-3 mb-4 bg-gray-700 rounded-lg" rows="5" placeholder="Your Message"></textarea>
        <button className="px-6 py-3 bg-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-400 transition">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
