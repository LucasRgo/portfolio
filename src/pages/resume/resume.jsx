import React, { useContext, useEffect } from "react";
import resumePT from "./Curriculo_Lucas_R_Goveia.pdf";
import resumeEN from "./RESUME_Lucas_R_Goveia.pdf";
import "./resume.css";
import { LanguageContext } from "../../components/LanguageContext";
import "aos/dist/aos.css";

const Resume = () => {
    const resumeUrl = `${resumePT}#zoom=page-width`;
    const resumeEnUrl = `${resumeEN}#zoom=page-width`;
    const { language } = useContext(LanguageContext);

    return (
        <div className="resume-container">
            <div className="resume-buttons">
                <a
                    data-aos="flip-up"
                    data-aos-delay="300"
                    href={resumeUrl}
                    download="CURRICULO_Lucas_Goveia_Desenvolvedor_Fullstack.pdf"
                    className="resume-download">
                    {language === "pt"
                        ? "Baixar Currículo (Português)"
                        : "Download Resume (Portuguese)"}
                </a>
                <a
                    data-aos="flip-up"
                    data-aos-delay="400"
                    href={resumeEnUrl}
                    download="RESUME_Lucas_Goveia_Fullstack_Developer.pdf"
                    className="resume-download">
                    {language === "pt" ? "Download Resume (English)" : "Download Resume (English)"}
                </a>
            </div>

            <div className="resume-iframe-container" data-aos="fade-up" data-aos-delay="500">
                {language === "pt" ? (
                    <iframe src={resumeUrl} title="Resume PDF" className="resume-iframe" />
                ) : (
                    <iframe src={resumeEnUrl} title="Resume PDF" className="resume-iframe" />
                )}
            </div>
        </div>
    );
};

export default Resume;
