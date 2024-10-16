import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold">My Projects</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Add your project cards here */}


          {/* Clickable project cards linking to the Projects page */}
          <Link to="/projects">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <h3 className="text-xl font-bold">Academic Team Management</h3>
              <p className="mt-2">
                Web application for managing academic teams for UOttawa’s software engineering capstone course.
              </p>
            </div>
          </Link>
          <Link to="/projects">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <h3 className="text-xl font-bold">Software Portfolio</h3>
              <p className="mt-2">
              Designed and developed a responsive, modern personal portfolio website
              </p>
            </div>
          </Link>
          <Link to="/projects">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <h3 className="text-xl font-bold">UAgenda</h3>
              <p className="mt-2">
                Designed and implemented a web-based scheduling application
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
