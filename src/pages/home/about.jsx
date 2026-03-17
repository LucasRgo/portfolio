import "./about.css";
import profilePic from "/dark_sem.png";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useContext } from "react";
import { LanguageContext } from "../../components/LanguageContext";

const About = () => {
    const { language } = useContext(LanguageContext);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="about-container" id="about">
            <h2
                className="about-heading"
                data-aos="fade-down"
                data-aos-delay="300"
            >
                {language === "pt"
                    ? "POR QUE EMPRESAS E EMPREENDEDORES CONFIAM EM MIM?"
                    : "WHY DO COMPANIES AND FOUNDERS TRUST ME?"}
            </h2>
            <div
                className="about-content"
                data-aos="fade-up"
                data-aos-delay="250"
            >
                <div className="about-image-wrapper rounded-5">
                    <div className="about-image-card rounded-5"></div>
                    <img
                        className="about-image rounded-5"
                        src={profilePic}
                        alt="Lucas 'CJ'"
                    />
                </div>
                <div className="about-text-overlay">
                    <div className="about-text">
                        <h4 className="about-subtitle">
                            {language === "pt"
                                ? '"Arquitetura sólida. Sistemas que escalam."'
                                : '"Solid architecture. Systems that scale."'}
                        </h4>

                        <p>
                            {language === "pt" ? (
                                <>
                                    Sou <strong>Lucas R Goveia</strong>,
                                    engenheiro de software focado em{" "}
                                    <span className="tech-highlight">
                                        Django + React
                                    </span>{" "}
                                    e sistemas distribuídos.
                                </>
                            ) : (
                                <>
                                    I'm <strong>Lucas R Goveia</strong>, a
                                    software engineer focused on{" "}
                                    <span className="tech-highlight">
                                        Django + React
                                    </span>{" "}
                                    and distributed systems.
                                </>
                            )}
                        </p>

                        <p>
                            {language === "pt"
                                ? "Desenvolvo sistemas escaláveis, observáveis e prontos para produção, incluindo aplicações com IA e integrações assíncronas."
                                : "I build scalable, observable, production-ready systems, including AI-powered applications and asynchronous integrations."}
                        </p>

                        <p>
                            {language === "pt"
                                ? "Impacto comprovado: +123% em receita e +77% em performance."
                                : "Proven impact: +123% revenue and +77% performance improvement."}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
