import React from 'react';
import resume from '/resume.pdf';
import './resume.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Resume = () => {
    const resumeUrl = `${resume}#zoom=page-width`;

    return (
        <div className="resume-container">
            <a
                data-aos="flip-up" data-aos-delay="300"
                href={resumeUrl}
                download="RESUME Lucas R Goveia - Fullstack Developer.pdf"
                className="resume-download"
            >
                Download PDF Resume
            </a>

            <div className="resume-iframe-container" data-aos="fade-up" data-aos-delay="500">
                <iframe
                    src={resumeUrl}
                    title="Resume PDF"
                    className="resume-iframe"
                />
            </div>
        </div>
    );
};

export default Resume;

