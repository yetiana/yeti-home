import React from 'react';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-800 text-white text-center">
      <h2 className="text-4xl font-semibold">Get in Touch</h2>
      <p className="mt-4 text-lg">I'd love to hear from you! Feel free to reach out through any of the platforms below.</p>

      <div className="mt-8 space-y-4">
        <p className="text-lg">
          📧 Email: <a href="mailto:tianaye317@gmail.com" className="text-blue-400 hover:underline">tianaye317@gmail.com</a>
        </p>
        <p className="text-lg">
          💼 LinkedIn: <a href="https://www.linkedin.com/in/tiana-ye-3193201ba/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">linkedin.com/in/tiana-ye-3193201ba/</a>
        </p>
        <p className="text-lg">
          🐙 GitHub Account 1: <a href="https://github.com/tye101" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">github.com/tye101</a>
        </p>
        <p className="text-lg">
          🐙 GitHub Account 2: <a href="https://github.com/yetiana" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">github.com/yetiana</a>
        </p>
        <p className="text-lg">
          📍 Location: [Ottawa, Canada]
        </p>
      </div>
    </section>
  );
};

export default Contact;
