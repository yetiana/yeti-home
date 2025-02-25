import React from 'react';

const technologyColors = {
  Python: 'bg-yellow-500',
  JavaScript: 'bg-blue-500',
  Node: 'bg-green-500',
  React: 'bg-teal-500',
  MongoDB: 'bg-green-600',
  Azure: 'bg-blue-700',
  TypeScript: 'bg-indigo-500',
  JSONServer: 'bg-gray-600',
  NoSQL: 'bg-orange-500',
  GitHub: 'bg-black',
  Jira: 'bg-blue-600',
  Discord: 'bg-purple-500',
  HTML: 'bg-pink-200',
  CSS: 'bg-purple-400',
  Flask: 'bg-indigo-200',
  Pygame: 'bg-orange-500',
};


const ProjectCard = ({ title, description, technologies, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer hover:scale-105 transform transition duration-300">
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
    </a>
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
            technologies={['React', 'TypeScript', 'Flask', 'MongoDB','JavaScript']}
            link="https://github.com/umple/AcademicTeamManagement"
          />

          {/* Project 2 */}
          <ProjectCard
            title="The Herbarium"
            description="Web application designed for botanists to digitally classify and visualize plant specimens."
            technologies={['React', 'TypeScript', 'Jira', 'JSONServer']}
            link="https://github.com/ultra-passion-fruit/The-Archive"
          />

          {/* Project 3 */}
          <ProjectCard
            title="Wendy's Studio"
            description="Website for hair studio"
            technologies={['React', 'JavaScript', 'CSS', 'HTML']}
            link="https://github.com/yetiana/wendys-studio"
          />
          
          {/* Project 4 */}
          <ProjectCard
            title="Unlucky Duck"
            description="Avoid fireballs and collect coins"
            technologies={['Pygame', 'Python']}
            link="https://github.com/tye101/UnluckyDuck"
          />

          {/* Project 5 */}
          <ProjectCard
            title="UAgenda"
            description="Website to manage university courses and work. Frontend and Mockups."
            technologies={['HTML','CSS','JavaScript']}
            link="https://github.com/UAgenda/UAgenda.github.io"
          />
          
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
