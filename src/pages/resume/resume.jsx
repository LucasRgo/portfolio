import React from 'react';
import resume from '/resume.pdf';
import './resume.css';

const Resume = () => {
    const resumeUrl = `${resume}#zoom=page-width`;

    return (
        <div className="resume-container">
            <a
                href={resumeUrl}
                download="RESUME Lucas R Goveia - Fullstack Developer.pdf"
                className="resume-download"
            >
                Download PDF Resume
            </a>

            <div className="resume-iframe-container">
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
