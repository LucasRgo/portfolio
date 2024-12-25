import './about.css';
import profilePic from '/lucas.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'; // Import useEffect here


const About = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="about-container" id="about">
      <div className="about-content" data-aos="fade-up" data-aos-delay="500">
        <div className="about-image-wrapper">
          <div className="image-overlay-text">
            <h2>Lucas 'CJ'</h2>
            <p>Fullstack Developer</p>
          </div>
          <img className="about-image rounded-5" src={profilePic} alt="Lucas 'CJ'" />
        </div>
        <div className="about-text-overlay">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
            I've always been fascinated by computers, from the layers of abstraction that power the internet to the
            algorithms that make real-time communication possible. However, it wasn’t until I took Harvard’s CS50 course
            that I discovered my true passion for software development. The course taught me to focus on the principles
            of great engineering rather than just the tools. Inspired, I built Movie Wizard, a platform with personalized
            movie recommendations, and later developed a website for the local Honda dealership where I worked.
            The website boosted their online sales by 123%. These experiences solidified my decision to chase a career
            in software development, where I’m excited to create impactful solutions and unique experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
