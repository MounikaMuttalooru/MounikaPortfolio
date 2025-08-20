import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming & Scripting',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 90 },
        { name: 'SQL', level: 85 },
        { name: 'Shell Scripting', level: 80 }
      ]
    },
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'React Native', level: 80 },
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'Sketch', level: 75 },
        { name: 'InVision', level: 75 }
      ]
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'FastAPI', level: 85 },
        { name: 'Apache Tomcat', level: 80 },
        { name: 'Node.js', level: 90 },
        { name: 'Maven', level: 80 },
        { name: 'JUnit5', level: 85 }
      ]
    },
    {
      category: 'Microservices & Containers',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 80 }
      ]
    },
    {
      category: 'Cloud & Data Platforms',
      skills: [
        { name: 'Google Cloud Platform (GCP)', level: 85 },
        { name: 'BigQuery', level: 80 },
        { name: 'PostgreSQL', level: 85 }
      ]
    },
    {
      category: 'DevOps & CI/CD',
      skills: [
        { name: 'Jenkins', level: 85 },
        { name: 'GitLab CI/CD', level: 80 },
        { name: 'Terraform', level: 80 },
        { name: 'Ansible', level: 75 },
        { name: 'NPM', level: 90 },
        { name: 'Bun', level: 75 },
        { name: 'esbuild', level: 75 }
      ]
    },
    {
      category: 'Testing & QA',
      skills: [
        { name: 'Cypress.io', level: 80 },
        { name: 'Test-Driven Development (TDD)', level: 85 },
        { name: 'Unit & Integration Testing', level: 85 },
        { name: 'SonarQube', level: 80 },
        { name: 'Fortify Security Scanning', level: 75 }
      ]
    },
    {
      category: 'Version Control & Collaboration',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Jira', level: 85 },
        { name: 'Agile/Scrum', level: 85 }
      ]
    },
    {
      category: 'Design & UX',
      skills: [
        { name: 'Wireframing', level: 80 },
        { name: 'Prototyping', level: 80 },
        { name: 'UX Design', level: 80 },
        { name: 'Responsive UI Development', level: 85 }
      ]
    }
  ];

  return (
    <div className="skills">
      <div className="container py-5">
        <h2 className="text-center mb-5">Technical Skills</h2>
        <div className="row">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-lg-6 col-xl-4 mb-4">
              <div className="skill-category">
                <h3 className="category-title">{category.category}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${skill.level}%` }}
                          aria-valuenow={skill.level}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills; 