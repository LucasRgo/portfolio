// ProjectCard.jsx
import {React , useEffect } from 'react';
import './projects.css'; // Adjust the path as necessary
import AOS from 'aos';
import 'aos/dist/aos.css';


const ProjectCard = ({ project }) => {

    useEffect(() => {
        AOS.init();
    }, []);

    const handleClick = () => {
        console.log("You're click worked!!");
    }

    return (
        <div className="project-card" data-aos="fade-up" data-aos-delay="300">
            <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <button id="play" className="btn play-button" onClick={handleClick}>
                    <span className="play-icon">▶</span>
                </button>
            </div>
            <div className="project-content">
                <div className="project-header">
                    <h3>
                        <span className="project-title">{project.title}</span>
                        <span className="project-subtitle"> - {project.subtitle}</span>
                    </h3>
                </div>
                <p>{project.description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
