// ProjectCard.jsx
import React, { useEffect, useState } from 'react';
import './projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectCard = ({ project }) => {
    const [wasPlayButtonClicked, setWasPlayButtonClicked] = useState(false);
    const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);

    const isYoutube = project.mediaType === 'youtube';
    const isCarousel = project.mediaType === 'carousel' && Array.isArray(project.mediaContent);
    const youtubeId = project.youtubeUrl || project.mediaContent;

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        setWasPlayButtonClicked(false);
        setActiveCarouselIndex(0);
    }, [project]);

    const handleClick = () => {
        if (!isYoutube) {
            if (project.mediaType === 'link' && project.mediaContent) {
                window.open(project.mediaContent, '_blank', 'noopener,noreferrer');
            }
            return;
        }

        if (project.id === 4 && youtubeId) {
            window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank', 'noopener,noreferrer');
        } else {
            setWasPlayButtonClicked(true);
        }
    };

    const goToPreviousImage = () => {
        if (!isCarousel) {
            return;
        }
        setActiveCarouselIndex((prevIndex) => (prevIndex === 0 ? project.mediaContent.length - 1 : prevIndex - 1));
    };

    const goToNextImage = () => {
        if (!isCarousel) {
            return;
        }
        setActiveCarouselIndex((prevIndex) =>
            prevIndex === project.mediaContent.length - 1 ? 0 : prevIndex + 1,
        );
    };

    return (
        <div className="project-card" data-aos="fade-up" data-aos-delay="300" id="project">
            <div className="project-image-container">
                {isCarousel ? (
                    <div className="project-carousel">
                        <img
                            src={project.mediaContent[activeCarouselIndex] || project.image}
                            alt={`${project.title} slide ${activeCarouselIndex + 1}`}
                            className="project-image"
                        />
                        {project.mediaContent.length > 1 && (
                            <>
                                <button
                                    type="button"
                                    className="carousel-button prev"
                                    onClick={goToPreviousImage}
                                    aria-label="Previous slide"
                                >
                                    ‹
                                </button>
                                <button
                                    type="button"
                                    className="carousel-button next"
                                    onClick={goToNextImage}
                                    aria-label="Next slide"
                                >
                                    ›
                                </button>
                                <div className="carousel-indicators">
                                    {project.mediaContent.map((_, index) => (
                                        <button
                                            type="button"
                                            key={`${project.id}-indicator-${index}`}
                                            className={`carousel-dot ${index === activeCarouselIndex ? 'active' : ''}`}
                                            onClick={() => setActiveCarouselIndex(index)}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                ) : isYoutube ? (
                    wasPlayButtonClicked && youtubeId ? (
                        <iframe
                            className="project-video"
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${youtubeId}`}
                            title={project.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ) : (
                        <>
                            <img src={project.image} alt={project.title} className="project-image" />
                            <button id="play" type="button" onClick={handleClick}>
                                <span className="play-icon">▶</span>
                            </button>
                        </>
                    )
                ) : (
                    <img src={project.image} alt={project.title} className="project-image" />
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
