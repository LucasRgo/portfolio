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
            <h2 className="about-heading" data-aos="fade-down" data-aos-delay="300">
                POR QUE EMPRESAS E EMPREENDEDORES CONFIAM EM MIM?
            </h2>
            <div className="about-content" data-aos="fade-up" data-aos-delay="500">
                <div className="about-image-wrapper">
                    <img className="about-image rounded-5" src={profilePic} alt="Lucas 'CJ'" />
                </div>
                <div className="about-text-overlay">
                    <div className="about-text">
                        <h4 className="about-subtitle" data-aos="fade-down" data-aos-delay="300">
                            "Meu código não é só limpo ele é ESTRATÉGICO"
                        </h4>
                        <p>
                            Sou <strong>Lucas Goveia</strong>, desenvolvedor fullstack especializado em{" "}
                            <span className="tech-highlight">Django + React</span>.
                        </p>
                        <p>
                            Não entrego apenas funcionalidades. Crio{" "}
                            <strong className="gradient-text">soluções que geram receita recorrente</strong> e
                            escalam com o negócio.
                        </p>
                        <p>
                            Já <strong className="gradient-text">aumentei vendas online em 123%</strong> e construí
                            sistemas que processam <strong>milhares de transações mensais</strong>.
                        </p>
                        <p>
                            Se você busca um desenvolvedor que entende tanto de{" "}
                            <span className="code-highlight">código</span> quanto de{" "}
                            <span className="business-highlight">negócio</span>, vamos conversar sobre seu próximo{" "}
                            <strong>SaaS</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
