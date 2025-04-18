import React from 'react';
import './About.css';
import profilePic from '../images/myphoto.jpeg';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        <div className="about-left-side">
          <div className="about-image-container">
            <div className="image-wrapper">
              <img src={profilePic} alt="Mounika" className="profile-image" />
              <div className="image-overlay"></div>
            </div>
            <div className="floating-info">
              <div className="info-item">
                <span className="info-number">4+</span>
                <span className="info-label">Years Experience</span>
              </div>
              <div className="info-item">
                <span className="info-number">MS</span>
                <span className="info-label">Information Technology</span>
              </div>
            </div>
          </div>
          
          <div className="education-highlight">
            <h3>Education</h3>
            <div className="education-item">
              <div className="education-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="education-details">
                <h4>Master of Science in Information Technology</h4>
                <p className="education-institution">St.Fransis College NY</p>
                <p className="education-year">Aug2023 -  May2025</p>
              </div>
            </div>
          </div>
        </div>
        
       
        <div className="about-right-side">
          <h2 className="section-title">About Me</h2>
          <div className="about-text">
            <p>
              I am a passionate Full Stack Developer with a Master's degree in Computer Science and over 4 years of experience in developing enterprise applications. My expertise spans both modern web technologies and Microsoft .NET frameworks, allowing me to create robust, scalable solutions for complex business challenges.
            </p>
            <p>
              As a .NET developer, I specialize in building secure, high-performance applications using C#, ASP.NET Core, and Entity Framework. I'm also proficient in front-end technologies like React and Angular, enabling me to deliver end-to-end solutions with seamless user experiences.
            </p>
          </div>
          
          <div className="skills-highlight">
            <div className="skill-category">
              <h3>Web Technologies</h3>
              <div className="skill-tags">
                <span>React</span>
                <span>JavaScript</span>
                <span>HTML5</span>
                <span>CSS3</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h3>.NET Technologies</h3>
              <div className="skill-tags">
                <span>C#</span>
                <span>ASP.NET Core</span>
                <span>Entity Framework</span>
                <span>SQL Server</span>
              </div>
            </div>
          </div>
          
          <div className="about-cta">
            <a href="/resume" className="download-cv">
              Download CV
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 