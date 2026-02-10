import { useContext } from "react";
import { Carousel, Container } from "react-bootstrap";
import { LanguageContext } from "../../components/LanguageContext";
import "./results.css";

const ResultsSection = () => {
    const { language } = useContext(LanguageContext);

    const results = [
        {
            id: 1,
            image: "/score/1.jpeg",
            summary: language === "pt"
                ? "Otimização completa de App React Native. UI/UX e desempenho em aplicativo mobile."
                : "Complete React Native App optimization. UI/UX and mobile app performance.",
            result: language === "pt"
                ? "Melhorias de UI/UX e desempenho em aplicativo mobile: tempo de carregamento reduzido de 4s para 0,9s e +37% de retenção de usuários."
                : "UI/UX and performance improvements in mobile app: loading time reduced from 4s to 0.9s and +37% user retention.",
            quote: language === "pt"
                ? "Um dos melhores freelancers com quem já trabalhei."
                : "One of the best freelancers I've ever worked with."
        },
        {
            id: 2,
            image: "/score/2.jpeg",
            summary: language === "pt"
                ? "Site de vendas otimizado para SEO local com foco em conversão."
                : "Sales website optimized for local SEO with focus on conversion.",
            result: language === "pt"
                ? "+123% em vendas online e posição de destaque no Google."
                : "+123% in online sales and prominent position on Google.",
            quote: language === "pt"
                ? "Ficou lindo, rápido e superou minhas expectativas, recomendo de olhos fechados."
                : "It was beautiful, fast and exceeded my expectations, I recommend with eyes closed."
        },
        {
            id: 3,
            image: "/score/3.png",
            summary: language === "pt"
                ? "Landing Page de alta conversão com funil de vendas e gatilhos psicológicos (timers, escassez digital, vagas dinâmicas)."
                : "High-conversion Landing Page with sales funnel and psychological triggers (timers, digital scarcity, dynamic slots).",
            result: language === "pt"
                ? "5x mais conversões, 2 projetos diferentes."
                : "5x more conversions, across 2 different projects.",
            quote: language === "pt"
                ? "Segundo trabalho com o Lucas, mais uma vez excelente. Profissional extremamente competente e criativo!"
                : "Second project with Lucas, once again excellent. Extremely competent and creative professional!"
        },
        {
            id: 4,
            image: "/score/4.jpeg",
            summary: language === "pt"
                ? "Marketplace completo para o nicho de parapentes, com chat em tempo real, múltiplos vendedores e pagamentos via Stripe Connect."
                : "Complete marketplace for the paragliding niche, with real-time chat, multiple sellers and payments via Stripe Connect.",
            result: language === "pt"
                ? "Plataforma sólida e escalável pronta para operar em produção."
                : "Solid and scalable platform ready to operate in production.",
            quote: language === "pt"
                ? "Serviço Top, entrega rápida e de alta qualidade."
                : "Top service, fast delivery and high quality."
        },
        {
            id: 5,
            image: "/score/5.png",
            summary: language === "pt"
                ? "Sistema de gestão hoteleira online completo com controle de reservas, quartos e operações."
                : "Complete online hotel management system with bookings, rooms and operations control.",
            result: language === "pt"
                ? "Automação completa das operações do hotel com redução drástica de trabalho manual e zero erros de reserva."
                : "Complete automation of hotel operations with drastic reduction in manual work and zero booking errors.",
            quote: language === "pt"
                ? "Projeto entregue com qualidade, dentro do prazo e com total profissionalismo."
                : "Project delivered with quality, on time and with total professionalism."
        },
        {
            id: 6,
            image: "/score/6.png",
            summary: language === "pt"
                ? "Landing Page moderna para recrutamento com formulário interativo e integração Calendly para agendamento automático."
                : "Modern recruitment landing page with interactive form and Calendly integration for automatic scheduling.",
            result: language === "pt"
                ? "Processo de recrutamento 100% automatizado: candidatos qualificados agendando entrevistas sem intervenção manual."
                : "100% automated recruitment process: qualified candidates scheduling interviews without manual intervention.",
            quote: language === "pt"
                ? "Desenvolveu a nossa landing page de forma moderna, funcional e totalmente alinhada com o objetivo do projeto."
                : "Developed our landing page in a modern, functional way and totally aligned with the project objective."
        },
    ];

    return (
        <section id="results" className="results-section">
            <Container>
                <div className="results-header">
                    <h2 className="results-title" data-aos="fade-up">
                        {language === "pt"
                            ? "O Que Meus Clientes Dizem"
                            : "What My Clients Say"}
                    </h2>
                    <p className="results-subtitle" data-aos="fade-up" data-aos-delay="200">
                        {language === "pt"
                            ? "Confira o feedback de empresas e empreendedores que confiaram no meu trabalho para transformar suas ideias em resultados concretos."
                            : "Check the feedback of companies and founders who trusted my work to transform their ideas into concrete results."}
                    </p>
                </div>

                <div className="results-carousel-container">
                    <Carousel
                        className="results-carousel"
                        indicators={false}
                        controls={true}
                        interval={null}
                        pause="hover"
                        wrap={true}
                    >
                        {results.map((result, index) => (
                            <Carousel.Item key={result.id}>
                                <a
                                    href="https://www.workana.com/freelancer/68c63f846c83b33c90392e8b8bf06fd0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="result-card-carousel"
                                >
                                    <div className="result-image-container">
                                        <img
                                            src={result.image}
                                            alt={`Review ${result.id}`}
                                            className="result-image"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="result-content">
                                        <div className="result-summary">
                                            <p>{result.summary}</p>
                                        </div>
                                        <div className="result-outcome">
                                            <p className="result-highlight">{result.result}</p>
                                        </div>
                                        <div className="result-quote">
                                            <blockquote>"{result.quote}"</blockquote>
                                        </div>
                                    </div>
                                </a>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </Container>
        </section>
    );
};

export default ResultsSection;
