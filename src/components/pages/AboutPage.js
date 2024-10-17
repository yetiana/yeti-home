import React from 'react';

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-5xl font-bold mb-8">About Me</h1>

        {/* University Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-semibold mb-4">University of Ottawa</h2>
          <p className="text-xl mb-6">I'm a Software Engineering student at the University of Ottawa, passionate about creating innovative solutions to real-world problems.</p>
          <div className="flex justify-center items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/University_of_Ottawa_Coat_of_Arms.svg/1200px-University_of_Ottawa_Coat_of_Arms.svg.png"
              alt="University of Ottawa"
              className="w-32 h-32 md:w-48 md:h-48 object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Interests Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-semibold mb-4">My Passion for Software Engineering</h2>
          <p className="text-xl mb-6">From building web apps to developing dynamic systems, I’m deeply interested in using technology to solve complex challenges and streamline processes.</p>
          <div className="flex justify-center space-x-8">
            <div className="bg-white text-blue-500 p-6 rounded-lg shadow-md hover:bg-gray-100 transition cursor-pointer">
              <h3 className="text-2xl font-semibold">Web Development</h3>
              <p className="mt-2">Building responsive, scalable websites and applications.</p>
            </div>
            <div className="bg-white text-blue-500 p-6 rounded-lg shadow-md hover:bg-gray-100 transition cursor-pointer">
              <h3 className="text-2xl font-semibold">Problem Solving</h3>
              <p className="mt-2">Utilizing algorithms and efficient code to tackle real-world problems.</p>
            </div>
          </div>
        </div>

        {/* Hobbies Section */}
        <div>
          <h2 className="text-4xl font-semibold mb-4">Hobbies</h2>
          <p className="text-xl mb-6">Outside of software, I enjoy baking delicious treats and knitting cozy projects. These hobbies allow me to unwind and express creativity in a different way.</p>
          
          {/* Baking and Knitting Cards */}
          <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="bg-white text-blue-500 p-6 rounded-lg shadow-md hover:bg-gray-100 transition cursor-pointer">
              <h3 className="text-2xl font-semibold">Baking</h3>
              <p className="mt-2">I love experimenting with new recipes, creating cakes, cookies, and pastries.</p>
              <img
                src="https://www.example.com/baking.jpg"
                alt="Baking"
                className="w-full h-40 object-cover mt-4 rounded-lg"
              />
            </div>
            <div className="bg-white text-blue-500 p-6 rounded-lg shadow-md hover:bg-gray-100 transition cursor-pointer">
              <h3 className="text-2xl font-semibold">Knitting</h3>
              <p className="mt-2">From scarves to blankets, I enjoy knitting cozy and creative pieces.</p>
              <img
                src="https://www.example.com/knitting.jpg"
                alt="Knitting"
                className="w-full h-40 object-cover mt-4 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
