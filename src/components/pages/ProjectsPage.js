import React from 'react';

const technologyColors = {
  Python: 'bg-yellow-500',
  JavaScript: 'bg-blue-500',
  Node: 'bg-green-500',
  React: 'bg-teal-500',
  MongoDB: 'bg-green-600',
  Azure: 'bg-blue-700',
};

const ProjectCard = ({ title, description, technologies }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className={`text-white text-xs font-semibold py-1 px-2 rounded ${technologyColors[tech]}`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center">
      <div className="container mx-auto text-center py-10">
        <h1 className="text-5xl font-bold mb-8">My Projects</h1>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <ProjectCard
            title="Academic Team Management"
            description="Web application for managing academic teams for UOttawa’s software engineering capstone course."
            technologies={['Python', 'JavaScript', 'React']}
          />

          {/* Project 2 */}
          <ProjectCard
            title="Project 2"
            description="Description of the project. Tech stack: JavaScript, Azure, MongoDB."
            technologies={['JavaScript', 'Azure', 'MongoDB']}
          />

          {/* Project 3 */}
          <ProjectCard
            title="Project 3"
            description="Description of the project. Tech stack: React, Node.js, Docker."
            technologies={['React', 'Node', 'Docker']}
          />
          
          {/* Add more project cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
