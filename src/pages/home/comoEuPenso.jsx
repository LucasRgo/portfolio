import { useContext, useEffect } from "react";
import { LanguageContext } from "../../components/LanguageContext";
import "./comoEuPenso.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ComoEuPenso = () => {
    const { language } = useContext(LanguageContext);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="como-eu-penso-container" id="como-eu-penso">
            <div className="como-eu-penso-content" data-aos="fade-up" data-aos-delay="400">
                <div className="como-eu-penso-header">
                    <h2>
                        {language === "pt"
                            ? "Como eu penso e construo!"
                            : "How I think and build!"}
                    </h2>
                </div>

                <div className="como-eu-penso-cards">
                    <div 
                        className="como-eu-penso-card" 
                        data-aos="fade-right" 
                        data-aos-delay="250"
                        style={{
                            "--card-color": "#1e3a8a",
                            "--shadow-color": "#1e3a8a"
                        }}
                    >
                        <div className="card-icon">
                            <i className="fas fa-server"></i>
                        </div>
                        <div className="card-content">
                            <h3>
                                {language === "pt"
                                    ? "Backend Sólido"
                                    : "Solid Backend"}
                            </h3>
                            <p>
                                {language === "pt"
                                    ? "Arquitetura robusta em Django que garante segurança e performance."
                                    : "Robust architecture in Django that ensures security and performance."}
                            </p>
                        </div>
                    </div>

                    <div 
                        className="como-eu-penso-card" 
                        data-aos="fade-left" 
                        data-aos-delay="300"
                        style={{
                            "--card-color": "#00FFFF",
                            "--shadow-color": "#00FFFF"
                        }}
                    >
                        <div className="card-icon">
                            <i className="fas fa-desktop"></i>
                        </div>
                        <div className="card-content">
                            <h3>
                                {language === "pt"
                                    ? "Frontend Intuitivo"
                                    : "Intuitive Frontend"}
                            </h3>
                            <p>
                                {language === "pt"
                                    ? "Interfaces modernas e responsivas com React e HTMX para engajar usuários."
                                    : "Modern and responsive interfaces with React and HTMX to engage users."}
                            </p>
                        </div>
                    </div>

                    <div 
                        className="como-eu-penso-card" 
                        data-aos="fade-right" 
                        data-aos-delay="700"
                        style={{
                            "--card-color": "#2ECC71",
                            "--shadow-color": "#2ECC71"
                        }}
                    >
                        <div className="card-icon">
                            <i className="fas fa-chart-line"></i>
                        </div>
                        <div className="card-content">
                            <h3>
                                {language === "pt"
                                    ? "Escalabilidade"
                                    : "Scalability"}
                            </h3>
                            <p>
                                {language === "pt"
                                    ? "Sistemas que crescem com seu negócio, sem perder performance ou estabilidade."
                                    : "Systems that grow with your business, without losing performance or stability."}
                            </p>
                        </div>
                    </div>

                    <div 
                        className="como-eu-penso-card" 
                        data-aos="fade-left" 
                        data-aos-delay="800"
                        style={{
                            "--card-color": "#FFE100",
                            "--shadow-color": "#FFE100"
                        }}
                    >
                        <div className="card-icon">
                            <i className="fas fa-trophy"></i>
                        </div>
                        <div className="card-content">
                            <h3>
                                {language === "pt"
                                    ? "Resultados Concretos"
                                    : "Concrete Results"}
                            </h3>
                            <p>
                                {language === "pt"
                                    ? "Impacto real: +123% em vendas online e aumento comprovado de conversões."
                                    : "Real impact: +123% in online sales and proven increase in conversions."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComoEuPenso;
