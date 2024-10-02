import React from 'react';

const Home = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Hi, I'm Tiana</h1>
        <p className="mt-4 text-xl">A Software Engineering Student with a passion for coding and creativity.</p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">See My Work</button>
      </div>
    </section>
  );
};

export default Home;
