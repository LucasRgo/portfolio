import {
  FaReact,
  FaPython,
  FaJsSquare,
  FaHtml5,
  FaFlask,
  FaDatabase,
  FaDocker
} from 'react-icons/fa';
import { SiDjango, SiTypescript, SiC, SiPostgresql, SiSqlite } from 'react-icons/si';
import './skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'; // Import useEffect here

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
    const technologies = [
        {
          name: 'React',
          level: 5,
          icon: <FaReact style={{ color: '#61DAFB' }} />,
          color: '#61DAFB'
        },
        {
          name: 'Django',
          level: 5,
          icon: <SiDjango style={{ color: '#00b000' }} />,
          color: '#00b000'
        },
        {
          name: 'Python',
          level: 5,
          icon: <FaPython style={{ color: '#3776AB' }} />,
          color: '#3776AB'
        },
        {
          name: 'JavaScript',
          level: 5,
          icon: <FaJsSquare style={{ color: '#F7DF1E' }} />,
          color: '#F7DF1E'
        },
        {
          name: 'HTML/CSS',
          level: 5,
          icon: <FaHtml5 style={{ color: '#E34F26' }} />,
          color: '#E34F26'
        },
        {
          name: 'Flask',
          level: 5,
          icon: <FaFlask style={{ color: '#00FF00' }} />,
          color: '#00FF00'
        },
        {
          name: 'C',
          level: 4,
          icon: <SiC style={{ color: '#A8B9CC' }} />,
          color: '#A8B9CC'
        },
        {
          name: 'TypeScript',
          level: 4,
          icon: <SiTypescript style={{ color: '#3178C6' }} />,
          color: '#3178C6'
        },
        {
            name: 'PostgreSQL',
            level: 4,
            icon: <SiPostgresql style={{ color: '#336791' }} />,
            color: '#336791'
        },
        {
          name: 'MySQL',
          level: 5,
          icon: <FaDatabase style={{ color: '#4479A1' }} />,
          color: '#4479A1'
        }
    ];


  return (
    <div className="technologies-container">
      <div className="technologies-wrapper">
        <h2 className="technologies-title">Technologies I Master</h2>
        <div className="technologies-grid" data-aos="fade-up" data-aos-delay="500">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="technology-card"
              style={{
                '--card-color': tech.color,
                '--shadow-color': `${tech.color}`
              }}
            >
              <div className="technology-icon">{tech.icon}</div>
              <div className="technology-details">
                <h3>{tech.name}</h3>
                <div className="technology-proficiency">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`proficiency-dot ${i < tech.level ? 'filled' : ''}`}
                    ></span>
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
