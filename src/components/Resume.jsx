import React from 'react';
import './Resume.css';
import MouniResume from '../images/MounikaResume.pdf'

const Resume = () => {
  const education = [
    {
      id: 1,
      degree: 'Masters in Information Technology',
      school: 'St. Francis College',
      period: 'Aug 2023 - May 2025',
      description: 'Relevant coursework in Data Structures, Algorithms, Web Development, and Database Management.',
      gpa: '3.8/4.0'
    }
  ];

  const experience = [
    {
      id: 1,
      company: 'UF Health, Jacksonville, FL',
      position: '.NET Developer',
      period: '2024 - Current',
      description: 'Developed enterprise healthcare apps using ASP.NET, C#.NET, VB.NET, and MVC 4.0, covering modules like appointments, billing, and patient history.',
      technologies: ['ASP.NET', 'RESTful APIs', 'Node.js', 'MongoDB', 'Express.js', 'Ajax', 'jQuery', 'Bootstrap', 'C#.NET', 'VB.NET', 'JavaScript'],
      achievements: [
        'Enhanced Healthcare Efficiency: Successfully migrated legacy healthcare systems to .NET Core and ASP.NET MVC, resulting in a 40% improvement in system performance and scalability across hospital operations.',
        'Streamlined Patient Workflows: Automated key hospital processes like patient admissions and discharge approvals using SharePoint workflows, InfoPath forms, and custom web parts, reducing manual tasks and approval time by 30%.',
        'Improved System Integration: Developed and deployed WCF and RESTful APIs for seamless integration with third-party systems like LIS, pharmacy, and insurance services, significantly improving data exchange and operational accuracy.'
      ]
    },
    {
      id: 2,
      company: 'Cognizant Technology Solutions India Private Ltd.',
      position: 'Software Developer',
      period: 'Aug 2020 - July 2023',
      description: 'Developed scalable hybrid web applications by integrating a .NET Core backend with a React.js frontend, promoting modular architecture and clean separation of concerns.',
      technologies: ['React.js', 'Redux', 'RESTful API', 'MongoDB', '.NET Core', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
      achievements: [
        'Built Scalable Full-Stack Apps: Delivered robust hybrid applications by integrating .NET Core APIs with React.js frontends, improving maintainability and accelerating feature delivery by 25%.',
        'Optimized Deployment Pipeline: Automated CI/CD workflows using GitHub Actions, Docker, and Azure/Heroku, reducing deployment time by 40% and improving release consistency.',
        'Strengthened Security & Performance: Implemented JWT-based authentication and efficient data modeling across SQL Server and MongoDB, enhancing system security and reducing API latency by 30%.'
      ]
    }
  ];

  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'Redux', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'RESTful APIs', 'GraphQL', 'Authentication & Authorization']
    },
    {
      category: 'DevOps & Tools',
      items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack', 'Agile/Scrum']
    }
  ];

  return (
    <div className="resume">
      <div className="container py-5">
        <h2 className="text-center mb-5">Resume</h2>
        
        <div className="resume-header text-center mb-5">
          <h1 className="display-4 fw-bold">Mounika Muttalooru</h1>
          <p className="lead">Software Developer</p>
          <div className="contact-info">
            <p><i className="fas fa-envelope me-2"></i> mounika1199.m@gmail.com</p>
            <p><i className="fas fa-phone me-2"></i> +1 9047297587</p>
            <p><i className="fas fa-map-marker-alt me-2"></i> Jacksonville, FL</p>
          </div>
          <div className="mt-3">
            <a href={MouniResume} className="btn btn-primary btn-lg" download>
              <i className="fas fa-download me-2"></i>Download Resume
            </a>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-8">
            <div className="resume-section mb-5">
              <h3 className="section-title">Professional Summary</h3>
              <p className="section-content">
                Experienced Full Stack Developer with 4+ years of expertise in building scalable web applications. 
                Proficient in modern JavaScript frameworks and Microsoft technologies, with a strong focus on 
                performance optimization and code quality. Skilled in developing enterprise systems and implementing best practices.
              </p>
            </div>
            
            <div className="resume-section mb-5">
              <h3 className="section-title">Work Experience</h3>
              {experience.map(item => (
                <div key={item.id} className="resume-item mb-4">
                  <div className="item-header">
                    <h4 className="item-title">{item.position}</h4>
                    <h5 className="item-subtitle">{item.company}</h5>
                    <p className="item-period">{item.period}</p>
                  </div>
                  <p className="item-description">{item.description}</p>
                  <div className="technologies mb-3">
                    {item.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  {item.achievements && (
                    <ul className="item-achievements">
                      {item.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            
            <div className="resume-section">
              <h3 className="section-title">Education</h3>
              {education.map(item => (
                <div key={item.id} className="resume-item">
                  <div className="item-header">
                    <h4 className="item-title">{item.degree}</h4>
                    <h5 className="item-subtitle">{item.school}</h5>
                    <p className="item-period">{item.period}</p>
                  </div>
                  <p className="item-description">{item.description}</p>
                  {item.gpa && <p className="item-gpa"><strong>GPA:</strong> {item.gpa}</p>}
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="resume-section">
              <h3 className="section-title">Skills</h3>
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-group mb-4">
                  <h4 className="skill-category">{skillGroup.category}</h4>
                  <div className="skill-items">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume; 