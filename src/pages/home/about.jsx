import "./about.css";
import profilePic from "/dark.png";
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
            <h2 className="about-heading" data-aos="fade-down" data-aos-delay="300">
                {language === "pt"
                    ? "POR QUE EMPRESAS E EMPREENDEDORES CONFIAM EM MIM?"
                    : "WHY DO COMPANIES AND FOUNDERS TRUST ME?"}
            </h2>
            <div className="about-content" data-aos="fade-up" data-aos-delay="500">
                <div className="about-image-wrapper">
                    <img className="about-image rounded-5" src={profilePic} alt="Lucas 'CJ'" />
                </div>
                <div className="about-text-overlay">
                    <div className="about-text">
                        <h4 className="about-subtitle" data-aos="fade-down" data-aos-delay="300">
                            {language === "pt"
                                ? '"Meu código não é só limpo ele é ESTRATÉGICO"'
                                : '"My code isn\'t just clean it\'s STRATEGIC"'}
                        </h4>
                        <p>
                            {language === "pt" ? (
                                <>
                                    Sou <strong>Lucas Goveia</strong>, desenvolvedor fullstack especializado em{" "}
                                    <span className="tech-highlight">Django + React</span>.
                                </>
                            ) : (
                                <>
                                    I'm <strong>Lucas Goveia</strong>, a fullstack developer specialized in{" "}
                                    <span className="tech-highlight">Django + React</span>.
                                </>
                            )}
                        </p>
                        <p>
                            {language === "pt"
                                ? "Não entrego apenas funcionalidades. Crio "
                                : "I don't just deliver features. I create "}
                            <strong className="gradient-text">
                                {language === "pt"
                                    ? "soluções que geram receita recorrente"
                                    : "solutions that generate recurring revenue"}
                            </strong>
                            {language === "pt" ? " e escalam com o negócio." : " and scale with the business."}
                        </p>
                        <p>
                            {language === "pt" ? "Já " : "I've already "}
                            <strong className="gradient-text">
                                {language === "pt"
                                    ? "aumentei vendas online em 123%"
                                    : "increased online sales by 123%"}
                            </strong>
                            {language === "pt" ? " e construí sistemas que processam " : " and built systems that process "}
                            <strong>{language === "pt" ? "milhares de transações mensais" : "thousands of monthly transactions"}</strong>.
                        </p>
                        <p>
                            {language === "pt"
                                ? "Se você busca um desenvolvedor que entende tanto de "
                                : "If you're looking for a developer who understands both "}
                            <span className="code-highlight">{language === "pt" ? "código" : "code"}</span>
                            {language === "pt" ? " quanto de " : " and "}
                            <span className="business-highlight">{language === "pt" ? "negócio" : "business"}</span>
                            {language === "pt"
                                ? ", vamos conversar sobre seu próximo "
                                : ", let's talk about your next "}
                            <strong>SaaS</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;