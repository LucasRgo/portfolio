import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../../components/LanguageContext";
import "./home.css";
import code from "/BG.webp";
import About from "./about";
import ComoEuPenso from "./comoEuPenso";
import CertificatesSection from "./certifcates";
import Dynamic from "./dynamic";
import Skills from "./skills";
import ResultsSection from "./results";
import AOS from "aos";
import "aos/dist/aos.css";
import perfil from "/pic.webp";
import Avatar from "@mui/material/Avatar";

const Home = () => {
    const { language } = useContext(LanguageContext);
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <section id="">
                <div className="home-container">
                    <div className="intro-text" data-aos="flip-up" data-aos-delay="600">
                        <Avatar
                            alt={language === "pt" ? "Perfil Lucas" : "Lucas Profile"}
                            src={perfil}
                            sx={{ width: 300, height: 300 }}
                            className="avatar"
                        />
                        <div className="intro-content me-2">
                            <h1>{language === "pt" ? "Lucas R. Goveia" : "Lucas R. Goveia"}</h1>
                            <p>
                                {language === "pt"
                                    ? "Transformo ideias em SaaS lucrativos com Django + React e visão de negócio."
                                    : "I transform ideas into profitable SaaS with Django + React and business vision."}
                            </p>
                            <button
                                onClick={() => window.open("mailto:lucas.lrg.0005@gmail.com", "_blank")}
                                className="contact-button rounded-3">
                                {language === "pt" ? "Entre em Contato" : "Get in Touch"}
                            </button>
                            <button
                                onClick={() => navigate("/projects")}
                                className="contact-button rounded-3">
                                {language === "pt" ? "Ver Projetos" : "See Projects"}
                            </button>
                        </div>
                    </div>
                    <img id="code" src={code} alt={language === "pt" ? "Fundo de código" : "Code background"} />
                </div>
            </section>
            <About />
            <ResultsSection />
            <ComoEuPenso />
            <Dynamic />
            <Skills />
            <CertificatesSection />
        </>
    );
};

export default Home;
