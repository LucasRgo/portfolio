import './about.css';
import profilePic from '/lucas.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useContext } from 'react'; // Added useContext
import { LanguageContext } from '../../components/LanguageContext'; // Import path might need adjustment

const About = () => {
  const { language } = useContext(LanguageContext); // Get language from context
  
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <section className="about-container" id="about">
      <div className="about-content" data-aos="fade-up" data-aos-delay="500">
        <div className="about-image-wrapper">
          <div className="image-overlay-text">
            <h2>Lucas 'CJ'</h2>
            <p>{language === "pt" ? "Desenvolvedor Fullstack" : "Fullstack Developer"}</p>
          </div>
          <img className="about-image rounded-5" src={profilePic} alt="Lucas 'CJ'" />
        </div>
        <div className="about-text-overlay">
          <div className="about-text">
            <h2>{language === "pt" ? "Sobre Mim" : "About Me"}</h2>
            <p>
              {language === "pt" 
                ? "Sempre fui fascinado por computadores, desde as camadas de abstração que alimentam a internet até os algoritmos que tornam possível a comunicação em tempo real. No entanto, foi só quando fiz o curso CS50 de Harvard que descobri minha verdadeira paixão pelo desenvolvimento de software. O curso me ensinou a focar nos princípios base engenharia, não apenas nas ferramentas. Inspirado, construí o Movie Wizard, uma plataforma com recomendações personalizadas de filmes, e posteriormente desenvolvi um site para a concessionária Honda local onde eu trabalhava. O site aumentou suas vendas online em 123%. Essas experiências solidificaram minha decisão de buscar uma carreira na engenharia software, onde estou animado para criar soluções impactantes e experiências únicas." 
                : "I've always been fascinated by computers, from the layers of abstraction that power the internet to the algorithms that make real-time communication possible. However, it wasn't until I took Harvard's CS50 course that I discovered my true passion for software development. The course taught me to focus on the principles of great engineering rather than just the tools. Inspired, I built Movie Wizard, a platform with personalized movie recommendations, and later developed a website for the local Honda dealership where I worked. The website boosted their online sales by 123%. These experiences solidified my decision to chase a career in software development, where I'm excited to create impactful solutions and unique experiences."
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;