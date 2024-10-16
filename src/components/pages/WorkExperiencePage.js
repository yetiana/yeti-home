import React, { useState } from 'react';

// technology tags
const technologyColors = {
  Python: 'bg-yellow-500',
  JavaScript: 'bg-blue-500',
  Node: 'bg-green-500',
  React: 'bg-teal-500',
  MongoDB: 'bg-green-600',
  Azure: 'bg-blue-700',
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
      title: 'Front-End Developer',
      company: 'ABC Technologies',
      date: 'Jan 2023 - Present',
      tasks: [
        'Developed responsive user interfaces using React and Tailwind CSS.',
        'Collaborated with UX/UI designers to implement modern design principles.',
        'Optimized applications for maximum speed and scalability.',
      ],
      technologies: ['JavaScript', 'React', 'Tailwind CSS'],
    },
    {
      title: 'Software Engineering Intern',
      company: 'XYZ Corp',
      date: 'May 2022 - Dec 2022',
      tasks: [
        'Assisted in the development of web applications using Node.js and Express.',
        'Participated in code reviews and maintained documentation.',
        'Contributed to the testing and debugging of software solutions.',
      ],
      technologies: ['Node', 'Express', 'MongoDB'],
    },
    // Add more work experiences as needed
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
