import React, { useEffect, useRef } from 'react';
import './projects.css';
import ProjectCard from './projectsCard';
import a1 from '/a1.webp';
import commerce from '/commerce.webp';
import movie from '/movie.webp';
import flow from '/flow.webp';
import neidi from '/neidi.webp';
import AOS from 'aos';
import objectDectition from '/objectDetection.png';
import 'aos/dist/aos.css';

const Projects = () => {
    const firstProjectRef = useRef(null);

    const handleScrollToFirstProject = () => {
        firstProjectRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        AOS.init();
    }, []);

    const projects = [
        {
            id: 1,
            title: "Movie Wizard",
            subtitle: "A web application for personalized movie recommendations, ratings, and watchlist management.",
            description: `
                Originally developed using Flask, the latest version has been rebuilt with Django and React for improved performance and scalability.
                This is the project I am most proud of, featuring a sleek and interactive user interface coupled with a robust backend.
                It includes a custom recommendation script that suggests movies based on your preferences.
                Additionally, users can search for movies and explore individual movie pages, which showcase similar movie suggestions.`,
            image: movie,
            youtubeUrl: "YWIYZWkl66I?start=7"
        },
        {
            id: 2,
            title: "Flow Reader",
            subtitle: "A PDF reader with a word-by-word display to enhance reading speed and reduce distractions.",
            description: `
                Built with React on the frontend and Django on the backend, Flow Reader is a web application designed to optimize reading.
                Users can upload PDF books and read them with a word-by-word display, adjusting the speed of word transitions.
                The platform also features an intelligent system that adjusts word intervals based on punctuation.
                Additionally, it remembers the last page the user was reading, so they can easily pick up where they left off.`,
            image: flow,
            youtubeUrl: "PSks1SQWFGM"
        },
        {
            id: 3,
            title: "Real-Time Video Object Detection",
            subtitle: "An AI detection system with real-time confidence and IoU adjustments.",
            description: `
                    This project combines Flask and an ONNX model on the backend with a React frontend using Fabric.js to deliver real-time video object detection. 
                    Users can adjust confidence and IoU thresholds, instantly seeing how these changes affect detection accuracy through a dynamic dashboard. 
                    The system offers a seamless integration of AI and interactive visualization, making it easy to fine-tune model parameters and view the results in real-time, 
                    demonstrating the power of full-stack AI applications in video analysis.`,
            image: objectDectition,
            youtubeUrl: "4jSHvC8fDk0?start=6"
        },
        {
            id: 4,
            title: "Neidi Cred",
            subtitle: "A complete sales website where users can view prices and calculate monthly installments.",
            description: `
                    Built using plain JavaScript and raw HTML/CSS, Neidi Cred showcases the power of mastering the basics.
                    The website not only features a clean and consistent design but also includes interactive elements like a bid calculator and carousels.
                    The standout feature is the contact bar, where users can easily input their contact information, which is then sent directly to the company's email address.`,
            image: neidi,
            youtubeUrl: "https://neidicred.com.br"
        },
        {
            id: 5,
            title: "CS50 commerce exercise",
            subtitle: "An auction site where users can create listings, place bids, and manage a watchlist.",
            description: `
                    Built with Django and HTML/CSS, this auction site allows users to create listings, place bids, and manage their watchlist.
                    Users can also comment on listings, close auctions, and browse items by category.
                    It showcases my ability to seamlessly integrate the backend and frontend, handle user authentication, and manage databases.
                    `,
            image: commerce,
            youtubeUrl: "4zg9OpkBTSA"
        }
    ];

    return (
        <>
            <div className="projects-container">
                <div className="projects-content" data-aos="flip-up" data-aos-delay="400" >
                    <h1 id="projects-heading">PROJECTS</h1>
                    <p id="projects-p">
                        Here are some of my most prestigious works
                    </p>
                    <button
                        onClick={handleScrollToFirstProject}
                        className="contact-button rounded-3"
                    >
                        Start the Tour
                    </button>
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
