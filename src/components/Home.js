import React from 'react';
import Projects from './Projects';
import About from './About';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Intro Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Hi, I'm Tiana</h1>
          <p className="mt-4 text-xl">
            A Software Engineering Student with a passion for coding and creativity.
          </p>
          <Link to='/about'>
            <button className="mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
              Learn More About Me
            </button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <About />
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <Projects />
      </section>
    </>
  );
};

export default Home;
