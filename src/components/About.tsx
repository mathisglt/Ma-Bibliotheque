import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h2>À propos de Moi</h2>
      <p>
        Bonjour, je suis <span>Gaultier Mathis</span>,<br></br> étudiant en Master 1 Ingénierie Logicielle (M1 IL).
      </p>
      <p>Bienvenue sur mon projet !</p>
      <button
        className="cta-button"
        onClick={() => window.open('https://github.com/mathisglt', '_blank')}
      >
        Mon GitHub
      </button>

    </div>
  );
};

export default About;
