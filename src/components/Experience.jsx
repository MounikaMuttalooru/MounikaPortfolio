import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'UF Health, Jacksonville,FL',
      position: '.Net Developer',
      period: '2024 - Current',
      description: 'Developed enterprise healthcare apps using ASP.NET, C#.NET, VB.NET, and MVC 4.0, covering modules like appointments, billing, and patient history',
      technologies: ['ASP.Net','Restful APIs', 'Node.js', 'MongoDB', 'Express.js', 'Ajax','jQuery','Bootstrap','C#.NET','VB.NET','Javascript']
    },
    {
      id: 2,
      company: 'Cognizant Technology Solutions India Private Ltd.                                                                      ',
      position: 'Software Developer',
      period: ' Aug 2020 - July 2023',
      description: '	Developed scalable hybrid web applications by integrating a .NET Core backend with a React.js frontend, promoting modular architecture and clean separation of concerns.',
      technologies: ['React.JS','Redux','RESTful API', 'MongoDB','.NET Core','JavaScript', 'HTML5', 'CSS3', 'Bootstrap']
    }
  ];

  return (
    <div className="experience">
      <div className="container py-5">
        <h2 className="text-center mb-5">Work Experience</h2>
        <div className="row">
          {experiences.map(exp => (
            <div key={exp.id} className="col-lg-6 mb-4">
              <div className="card experience-card h-100">
                <div className="card-body">
                  <h3 className="card-title company">{exp.company}</h3>
                  <h4 className="position">{exp.position}</h4>
                  <p className="period text-muted">{exp.period}</p>
                  <p className="description">{exp.description}</p>
                  <div className="technologies mt-3">
                    {exp.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience; 