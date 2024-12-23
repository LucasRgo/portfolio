import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import resume from '/resume.pdf';
import './resume.css';
import 'pdfjs-dist/build/pdf.worker.entry';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

// Configure worker
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const Resume = () => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="resume-container">
            <a
                href={resume}
                download="RESUME Lucas R Goveia - Fullstack Developer.pdf"
                className="resume-download"
            >
                Download PDF Resume
            </a>

            <div className="resume-viewer">
                {isLoading && <div className="loading">Loading...</div>}
                <Document
                    file={resume}
                    onLoadSuccess={() => setIsLoading(false)}
                    error={<div className="error">Failed to load PDF.</div>}
                >
                    <Page
                        pageNumber={1}
                        renderTextLayer={false}
                        scale={1.2}
                    />
                </Document>
            </div>
        </div>
    );
};

export default Resume;
