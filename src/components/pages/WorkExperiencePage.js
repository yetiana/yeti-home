import React, { useState } from 'react';

// technology
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
  PowerApps: 'bg-purple-400',
  SharePoint: 'bg-blue-400',
  AzureDevOps: 'bg-blue-800',
  Linux: 'bg-gray-700',
  PowerAutomate: 'bg-purple-500',
  MSTeams: 'bg-blue-400',
  CRMSystems: 'bg-gray-500',
  QUIC: 'bg-teal-600',
  C: 'bg-purple-400',
  VPN: 'bg-green-700',
  HTTPS: 'bg-indigo-400',
};


// Individual Work Experience Card
const WorkExperienceCard = ({ title, company, date, tasks, technologies }) => {
  const [isOpen, setIsOpen] = useState(false); // State to track if tasks are open

  const toggleTasks = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-8 transition-shadow">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600">{company}</p>
      <p className="text-gray-500 text-sm">{date}</p>
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
      <button
        onClick={toggleTasks}
        className="mt-4 text-blue-500 hover:underline"
      >
        {isOpen ? 'Hide Tasks' : 'Show Tasks'}
      </button>
      {isOpen && (
        <ul className="mt-4 list-disc pl-6">
          {tasks.map((task, index) => (
            <li key={index} className="text-gray-600">
              {task}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Work Experience Page Component
const WorkExperiencePage = () => {
  const workExperiences = [
    {
      title: 'Data Analyst/Visualizer Co-op',
      company: 'Shared Services Canada',
      date: 'May 2024 - August 2024',
      tasks: [
        'Developed responsive user interfaceAutomated business tasks using Power Automate: list duplication, item tracking, and email personalizations using React and Tailwind CSS.',
        'Managed and optimized a document repository by integrating records from the Record of Decision Register',
        'Researched CRM systems, contributing to the development of a user manual focused on data visualization',
        'Utilized MS Teams and SharePoint for seamless collaboration, improving document sharing and communication',
      ],
      technologies: ['PowerApps', 'SharePoint', 'MSTeams', 'CRMSystems'],

    },
    {
      title: 'UX Developer Co-op',
      company: 'Transport Canada Aircraft Services Directorate (ASD)',
      date: 'Jan 2023 - Apr 2023',
      tasks: [
        'Contributed to the UI/UX development of an application to digitize aircraft tool maintenance tracking.',
        'Participated in code reviews and maintained documentationFacilitated effective team collaboration by participating in sprint planning, identifying and resolving UX issues.',
        'Conducted rigorous testing using PowerApps applications, identifying and resolving user experience issues',
        'Utilized SharePoint to access shared project documents and the use of DevOps to integrate UX design into software development workflows',
      ],
      technologies: ['PowerApps', 'MSTeams', 'AzureDevOps', 'PowerAutomate' ],
    },
    {
      title: 'Co-op Student',
      company: 'Telus',
      date: 'May 2021 - Aug 2021',
      tasks: [
        'Developed proficiency in the interplay between QUIC/HTTP3 and multipathing using Linux OS',
        'Acquired a solid understanding of VPN systems as a foundation for QUIC',
        'Developed a strong grasp of fundamental networking concepts',
      ],
      technologies: ['QUIC', 'Linux', 'C', 'VPN', 'HTTPS'],
    },

  ];

  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white flex items-center justify-center py-10">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">Work Experience</h1>
        <div className="space-y-8">
          {workExperiences.map((experience, index) => (
            <WorkExperienceCard
              key={index}
              title={experience.title}
              company={experience.company}
              date={experience.date}
              tasks={experience.tasks}
              technologies={experience.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperiencePage;
