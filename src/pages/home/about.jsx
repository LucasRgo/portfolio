import "./about.css";
import profilePic from "/lucas.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useContext } from "react"; // Added useContext
import { LanguageContext } from "../../components/LanguageContext"; // Import path might need adjustment

const About = () => {
    const { language } = useContext(LanguageContext); // Get language from context

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="about-container" id="about">
            <div
                className="about-content"
                data-aos="fade-up"
                data-aos-delay="500"
            >
                <div className="about-image-wrapper">
                    <div className="image-overlay-text">
                        <h2>Lucas 'CJ'</h2>
                        <p>
                            {language === "pt"
                                ? "Desenvolvedor Fullstack"
                                : "Fullstack Developer"}
                        </p>
                    </div>
                    <img
                        className="about-image rounded-5"
                        src={profilePic}
                        alt="Lucas 'CJ'"
                    />
                </div>
                <div className="about-text-overlay">
                    <div className="about-text">
                        <h2>{language === "pt" ? "Sobre Mim" : "About Me"}</h2>
                        <p>
                            "No curso <strong>CS50 de Harvard</strong>, descobri
                            minha paixão pela engenharia de software, explorando
                            os princípios por trás da internet aos algoritmos de
                            comunicação em tempo real. Sempre fascinado por
                            computadores desde cedo, transformei essa
                            curiosidade em ação. Desenvolvi o{" "}
                            <strong> Movie Wizard</strong>, uma plataforma de
                            recomendações personalizadas de filmes, e o site da
                            NeidiCred, que
                            <strong>
                                {" "}
                                aumentou suas vendas online em 123%{" "}
                            </strong>
                            Esses projetos são provas concretas da minha
                            capacidade de criar um impacto real. Hoje, como
                            programador freelancer, conduzo projetos do início
                            ao fim com autonomia, transformando ideias em sites
                            de excelência, com de alto nível e design
                            impecável!"
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
