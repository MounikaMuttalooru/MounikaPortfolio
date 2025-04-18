import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'Typescript', level: 90 },
        { name: 'XML', level: 80 },
        { name: 'React', level: 85 },
        { name: 'Redux', level: 80 },
        { name: 'Bootstrap', level: 85 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 95 },
        { name: 'Express.js', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'MySQL', level: 75 },
        { name: '.NET', level: 80 },
        { name: 'Python', level: 70 },
        { name: 'C#', level: 80 },
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'npm', level: 85 },
        { name: 'Webpack', level: 75 }
      ]
    }
  ];

  return (
    <div className="skills">
      <div className="container py-5">
        <h2 className="text-center mb-5">Technical Skills</h2>
        <div className="row">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-lg-4 mb-4">
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