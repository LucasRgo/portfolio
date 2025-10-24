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
                    <p className="como-eu-penso-subtitle">
                        {language === "pt"
                            ? "Eu construo sistemas que geram receita, retêm usuários e escalam com facilidade. Enquanto outros devs entregam tarefas, eu entrego produtos"
                            : "Every product I build is thought of as a business, not just code. I combine solid engineering, strategic UX and growth vision to create sustainable solutions"}
                    </p>
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
                                    ? "Backend com Propósito"
                                    : "Backend with Purpose"}
                            </h3>
                            <p>
                                {language === "pt"
                                    ? <>Arquitetura robusta em Django que <strong>protege dados</strong>, mantém <strong>alta disponibilidade</strong> e <strong>reduz custos operacionais</strong>. Cada decisão técnica impacta diretamente a <strong>confiança do usuário</strong> e a longevidade do produto.</>
                                    : <>Robust architecture in Django that <strong>protects data</strong>, maintains <strong>high availability</strong> and <strong>reduces operational costs</strong>. Every technical decision directly impacts <strong>user trust</strong> and product longevity.</>}
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
                                    ? "Frontend que Converte"
                                    : "Frontend that Converts"}
                            </h3>
                            <p>
                                {language === "pt"
                                    ? <>Interfaces modernas com React e HTMX que não apenas agradam visualmente, mas <strong>guiam o usuário até a ação desejada</strong>. Design pensado para <strong>reduzir fricção</strong> e aumentar <strong>engajamento real</strong>.</>
                                    : <>Modern interfaces with React and HTMX that not only please visually, but <strong>guide the user to the desired action</strong>. Design crafted to <strong>reduce friction</strong> and increase <strong>real engagement</strong>.</>}
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
                                    ? "Escalabilidade Inteligente"
                                    : "Smart Scalability"}
                            </h3>
                            <p>
                                {language === "pt"
                                    ? <>Sistemas preparados para crescer <strong>sem reescritas caras</strong> ou <strong>migrações emergenciais</strong>. Arquitetura que sustenta desde MVPs até operações de alto volume, <strong>protegendo seu investimento</strong> a longo prazo.</>
                                    : <>Systems prepared to grow <strong>without expensive rewrites</strong> or <strong>emergency migrations</strong>. Architecture that supports from MVPs to high-volume operations, <strong>protecting your investment</strong> long-term.</>}
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
                                    ? "Impacto Mensurável"
                                    : "Measurable Impact"}
                            </h3>
                            <p>
                                {language === "pt"
                                    ? <>Entrego resultados sólidos: <strong>+123% em vendas online</strong>, <strong>taxas de conversão elevadas</strong> e <strong>usuários mais engajados</strong>. Código que se traduz em <strong>crescimento de negócio</strong>.</>
                                    : <>I deliver results that appear on dashboards: <strong>+123% in online sales</strong>, <strong>elevated conversion rates</strong> and <strong>more engaged users</strong>. Code that translates into <strong>business growth</strong>.</>}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComoEuPenso;
