// ProjectCard.jsx
import {React , useEffect, useState } from 'react';
import './projects.css'; // Adjust the path as necessary
import AOS from 'aos';
import 'aos/dist/aos.css';


const ProjectCard = ({ project }) => {
    const [wasPlayButtonClicked, SetWasPlayButtonClicked] = useState(false);

    const handleClick = () => {
        if (project.id === 3) {
            window.open(project.youtubeUrl, '_blank');
        } else {
            SetWasPlayButtonClicked(true);
            console.log("You're click worked!!");
        }
    };

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="project-card" data-aos="fade-up" data-aos-delay="300" id="project">
            <div className="project-image-container">
                {!wasPlayButtonClicked ? (
                    <>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <button id="play" onClick={handleClick}>
                            <span className="play-icon">▶</span>
                        </button>
                    </>
                ) : (
                    <iframe
                        className="project-video"
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${project.youtubeUrl}`}
                        title={project.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                )}
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
