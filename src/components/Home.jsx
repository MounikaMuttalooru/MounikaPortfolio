import { Link } from 'react-router-dom';
import './Home.css';
import backgroundVideo from '../videos/Backgroundvedio.mp4';

const Home = () => {
  return (
    <section className="home" id="home">
      <video
        className="video-background"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="content-overlay">
        <h1>Mounika Muttalooru</h1>
        <h2>Software Developer</h2>
        <p>
          Passionate about creating innovative web solutions and turning complex problems 
          into elegant, user-friendly applications. Specialized in modern web technologies 
          and best development practices.
        </p>
        <div className="cta-buttons">
          <Link to="/resume" className="btn btn-primary">
            Resume
          </Link>
          <Link to="/contact" className="btn btn-outline-light">
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home; 