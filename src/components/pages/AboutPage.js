import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-sky-400 to-indigo-300 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-5xl font-bold mb-8">About Me</h1>

        {/* University Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-semibold mb-4">University of Ottawa</h2>
          <p className="text-xl mb-6">I'm a 4th year Software Engineering student at the University of Ottawa and am enrolled in their co-op program.</p>
          <div className="flex justify-center items-center">
            <img
              src="https://static.wixstatic.com/media/b69726_3ae46d4c50e1446b8851b1c29583ee21~mv2.jpg/v1/fill/w_1000,h_563,al_c,q_85,usm_0.66_1.00_0.01/b69726_3ae46d4c50e1446b8851b1c29583ee21~mv2.jpg"
              alt="University of Ottawa"
              className="w-500 h-500 md:w-800 md:h-800 object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Interests Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-semibold mb-4">My Passion for Software Engineering</h2>
          <p className="text-xl mb-6">From building web apps to developing dynamic systems, I’m deeply interested in using technology to solve complex challenges and streamline processes.</p>
          <div className="flex justify-center space-x-8">
            <Link to="/projects">
              <div className="bg-white text-blue-500 p-6 rounded-lg shadow-md hover:bg-gray-100 transition cursor-pointer">
                <h3 className="text-2xl font-semibold">Projects</h3>
                <img
                  src="https://github.com/tye101/UnluckyDuck/blob/main/deadbirdie.gif?raw=true"
                  alt="Unlucky Duck"
                />
                <p className="mt-2">This is unlucky duck. One of my first projects.</p>
              </div>
            </Link>
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
                src="https://i0.wp.com/thestrand.ca/wp-content/uploads/2020/09/artsculture_kitchen-tales_Faith_Dong.jpg?w=1080&ssl=1"
                alt="Baking"
                className="w-full h-40 object-cover mt-4 rounded-lg"
              />
            </div>
            <div className="bg-white text-blue-500 p-6 rounded-lg shadow-md hover:bg-gray-100 transition cursor-pointer">
              <h3 className="text-2xl font-semibold">Knitting</h3>
              <p className="mt-2">From scarves to blankets, I enjoy knitting cozy and creative pieces.</p>
              <img src="/knitting" alt="Knitting" className="w-full h-40 object-cover mt-4 rounded-lg"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
