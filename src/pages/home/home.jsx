import { useContext, useEffect } from "react";
import { LanguageContext } from "../../components/LanguageContext";
import "./home.css";
import code from "/BG.webp";
import About from "./about";
import CertificatesSection from "./certifcates";
import Dynamic from "./dynamic";
import Skills from "./skills";
import AOS from "aos";
import "aos/dist/aos.css";
import perfil from "/perfil.webp";
import Avatar from "@mui/material/Avatar";

const Home = () => {
    const { language } = useContext(LanguageContext);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <section id="">
                <div className="home-container">
                    <div
                        className="intro-text"
                        data-aos="flip-up"
                        data-aos-delay="600"
                    >
                        <Avatar
                            alt={
                                language === "pt"
                                    ? "Perfil Lucas"
                                    : "Lucas Profile"
                            }
                            src={perfil}
                            sx={{ width: 300, height: 300 }}
                            className="avatar"
                        />
                        <div className="intro-content">
                            <h1>
                                {language === "pt"
                                    ? "Lucas R. Goveia"
                                    : "Hi, I’m Lucas"}
                            </h1>
                            <p>
                                {language === "pt"
                                    ? "Transformo suas ideias em sites excepcionais, com código de alto nível e design impecável."
                                    : "A Full Stack Developer passionate about creating refined and polished web experiences"}
                            </p>
                            <button
                                onClick={() =>
                                    window.open(
                                        "mailto:lucas.lrg.0005@gmail.com",
                                        "_blank"
                                    )
                                }
                                className="contact-button rounded-3"
                            >
                                {language === "pt"
                                    ? "Entre em Contato"
                                    : "Get in Touch"}
                            </button>
                        </div>
                    </div>
                    <img
                        id="code"
                        src={code}
                        alt={
                            language === "pt"
                                ? "Fundo de código"
                                : "Code background"
                        }
                    />
                </div>
            </section>
            <About />
            <Skills />
            <Dynamic />
            <CertificatesSection />
        </>
    );
};

export default Home;
