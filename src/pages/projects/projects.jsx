import a1 from '/a1.webp';
import './projects.css';
import React, { useEffect , useRef } from 'react';
import commerce from '/commerce.webp';
import movie from '/movie.webp';
import flow from '/flow.webp';
import neidi from '/neidi.webp';


const Projects = () => {

    const firstProjectRef = useRef(null);

    const handleScrollToFirstProject = () => {
        firstProjectRef.current?.scrollIntoView({ behavior: 'smooth' });
    };


    const projects = [
        {
            "id": 1,
            "title": "Movie Wizard",
            "subtitle": "A web application for personalized movie recommendations, ratings, and watchlist management.",
            "description": `
              Originally developed using Flask, the latest version has been rebuilt with Django and React for improved performance and scalability.
              This is the project I am most proud of, featuring a sleek and interactive user interface coupled with a robust backend.
              It includes a custom recommendation script that suggests movies based on your preferences.
              Additionally, users can search for movies and explore individual movie pages, which showcase similar movie suggestions.`,
            "image": movie,
            "youtubeUrl": "https://youtu.be/xT9839JWf34"
        },
        {
            "id": 2,
            "title": "Flow Reader",
            "subtitle": "A PDF reader with a word-by-word display to enhance reading speed and reduce distractions.",
            "description": `
              Built with React on the frontend and Django on the backend, Flow Reader is a web application designed to optimize reading.
              Users can upload PDF books and read them with a word-by-word display, adjusting the speed of word transitions.
              The platform also features an intelligent system that adjusts word intervals based on punctuation.
              Additionally, it remembers the last page the user was reading, so they can easily pick up where they left off.`,
            "image": flow,
            "youtubeUrl": "https://youtu.be/PSks1SQWFGM"
        },
        {
            "id": 3,
            "title": "Neidi Cred",
            "subtitle": "A complete sales website where users can view prices and calculate monthly installments.",
            "description": `
                Built using plain JavaScript and raw HTML/CSS, Neidi Cred showcases the power of mastering the basics.
                The website not only features a clean and consistent design but also includes interactive elements like a bid calculator and carousels.
                The standout feature is the contact bar, where users can easily input their contact information, which is then sent directly to the company's email address.`,
            "image": neidi,
            "youtubeUrl": "https://neidicred.com.br"
        },
        {
            "id": 3,
            "title": "CS50 commerce exercise",
            "subtitle": "An auction site where users can create listings, place bids, and manage a watchlist.",
            "description": `
                Built with Django and HTML/CSS, this auction site allows users to create listings, place bids, and manage their watchlist.
                Users can also comment on listings, close auctions, and browse items by category.
                It showcases my ability to seamlessly integrate the backend and frontend, handle user authentication, and manage databases.
                .`,
            "image": commerce,
            "youtubeUrl": "https://youtu.be/4zg9OpkBTSA?si=v5Ci_eFUqaRnPB1s"
        }
    ];

    const ProjectCard = ({ project }) => {
        return (
            <div className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
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


    return (
        <>
            <div className="projects-container">
                <div className="intro-text">
                    <div className="projects-content">
                        <h1 id="projects-heading">PROJECTS</h1>
                        <p id="projects-p">
                            Here are some of my most prestigious works
                        </p>
                        <button
                            onClick={handleScrollToFirstProject}  // Use this function to scroll
                            className="contact-button rounded-3"
                        >
                            Start the Tour
                        </button>
                    </div>
                </div>
                <img id="projects" src={a1} alt="Code background" />
            </div>
            <div className="my-projects">
                <div className="projects-container">
                    {projects.map((project, index) => (
                        <div key={project.id} ref={index === 0 ? firstProjectRef : null}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Projects;
