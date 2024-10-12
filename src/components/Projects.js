import React from 'react';

const Projects = () => {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold">My Projects</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Add your project cards here */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Project 1</h3>
            <p className="mt-2">Description of the project. Tech stack: React, Node.js, MongoDB</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Project 2</h3>
            <p className="mt-2">Description of the project. Tech stack: JavaScript, Azure, MongoDB</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
