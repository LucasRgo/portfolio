import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./goiania.css";

const whatsappPhoneNumber = "5563992060528";
const whatsappMessage =
    "Olá Lucas, vi seu vídeo sobre software e empresas de Goiânia. Podemos conversar?";
const whatsappUrl = `https://wa.me/${whatsappPhoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
const resumeUrl = "/resume";

const helpItems = [
    {
        icon: "bi bi-kanban",
        eyebrow: "Produto interno",
        text: "Sistemas web internos, dashboards e plataformas sob medida",
    },
    {
        icon: "bi bi-robot",
        eyebrow: "IA aplicada",
        text: "Automações com IA para operação, atendimento e processos repetitivos",
    },
    {
        icon: "bi bi-cloud-check",
        eyebrow: "Produção",
        text: "Integrações, performance, deploy e manutenção de aplicações em produção",
    },
];

const Goiania = () => {
    useEffect(() => {
        document.body.classList.add("goiania-route");

        return () => {
            document.body.classList.remove("goiania-route");
        };
    }, []);

    return (
        <main className="goiania-page" aria-labelledby="goiania-title">
            <section className="goiania-welcome" aria-label="Boas-vindas">
                <div className="goiania-shell">
                    <p>Bem-vindo ao meu portfólio.</p>
                </div>
            </section>

            <section
                className="goiania-video-section"
                aria-label="Contexto do vídeo"
            >
                <div className="goiania-shell goiania-video-grid">
                    <div className="goiania-context-panel">
                        <span className="goiania-label">
                            Goiânia · software · IA
                        </span>
                        <h2 id="goiania-title">
                            Se você está aqui, não foi por acaso...
                        </h2>

                        <p className="goiania-context-lead">
                            Usei software e IA para mapear empresas de
                            tecnologia em Goiânia e encontrar negócios que
                            realmente valiam uma conversa.
                        </p>

                        <ul
                            className="goiania-proof-list"
                            aria-label="Resumo do processo"
                        >
                            <li>
                                <i
                                    className="bi bi-search"
                                    aria-hidden="true"
                                ></i>
                                Um scraper transformou dados públicos dispersos
                                em uma base organizada.
                            </li>
                            <li>
                                <i
                                    className="bi bi-funnel"
                                    aria-hidden="true"
                                ></i>
                                Um script filtrou e ranqueou as empresas mais
                                relevantes.
                            </li>
                            <li>
                                <i
                                    className="bi bi-lightning-charge"
                                    aria-hidden="true"
                                ></i>
                                Uma busca manual virou uma decisão rápida,
                                objetiva e baseada em dados.
                            </li>
                        </ul>

                        <div className="goiania-context-copy goiania-context-close">
                            <p>
                                A mesma lógica que encontrou sua empresa pode
                                ajudar sua operação a automatizar processos e
                                tomar decisões melhores!
                            </p>
                        </div>
                    </div>

                    <aside
                        className="goiania-video-card"
                        aria-label="Placeholder do vídeo no YouTube"
                    >
                        <div className="goiania-video-frame">
                            <div
                                className="goiania-play-button"
                                aria-hidden="true"
                            >
                                <i className="bi bi-play-fill"></i>
                            </div>
                            <div className="goiania-video-meta">
                                <span>Em breve no YouTube</span>
                                <strong>
                                    Software + IA para encontrar empresas em
                                    Goiânia
                                </strong>
                            </div>
                        </div>
                    </aside>
                </div>

                <div className="goiania-shell">
                    <div className="goiania-context-cta">
                        <p>
                            Quer conversar sobre onde isso poderia gerar valor
                            na sua empresa?
                        </p>
                        <div
                            className="goiania-actions"
                            aria-label="Ações principais"
                        >
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-button rounded-3 goiania-primary-cta"
                            >
                                Chamar no WhatsApp
                            </a>
                            <Link
                                to={resumeUrl}
                                className="goiania-secondary-cta rounded-3"
                            >
                                Ver currículo
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="goiania-build-section"
                aria-labelledby="goiania-help-title"
            >
                <div className="goiania-shell">
                    <div className="goiania-build-intro">
                        <span className="goiania-label">O que eu construo</span>
                        <h2>
                            Eu construo sistemas que reduzem trabalho manual,
                            organizam informações da operação e ajudam empresas
                            a tomar decisões melhores.
                        </h2>
                    </div>

                    <div className="goiania-help-grid">
                        {helpItems.map((item) => (
                            <article
                                className="goiania-help-card"
                                key={item.text}
                            >
                                <span
                                    className="goiania-help-icon"
                                    aria-hidden="true"
                                >
                                    <i className={item.icon}></i>
                                </span>
                                <span className="goiania-help-eyebrow">
                                    {item.eyebrow}
                                </span>
                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="goiania-floating-whatsapp"
                aria-label="Falar com Lucas pelo WhatsApp"
            >
                <i className="bi bi-whatsapp" aria-hidden="true"></i>
                <span>Falar comigo</span>
            </a>
        </main>
    );
};

export default Goiania;
