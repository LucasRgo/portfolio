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
                ? "Landing Page otimizada para SEO local com foco em conversão." 
                : "Landing Page optimized for local SEO with focus on conversion.",
            result: language === "pt"
                ? "+123% em vendas online e posição de destaque no Google."
                : "+123% in online sales and prominent position on Google.",
            quote: language === "pt"
                ? "Ficou lindo, rápido e superou minhas expectativas, recomendo de olhos fechados."
                : "It was beautiful, fast and exceeded my expectations, I recommend with eyes closed."
        },
        {
            id: 3,
            image: "/score/3.jpeg",
            summary: language === "pt" 
                ? "Landing Page de alta conversão com funil de vendas e gatilhos psicológicos (timers, escassez digital, vagas dinâmicas)." 
                : "High-conversion Landing Page with sales funnel and psychological triggers (timers, digital scarcity, dynamic slots).",
            result: language === "pt"
                ? "5x mais conversões."
                : "5x more conversions.",
            quote: language === "pt"
                ? "Profissional extremamente competente e criativo."
                : "Extremely competent and creative professional."
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
        }
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
                                <div className="result-card-carousel">
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
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </Container>
        </section>
    );
};

export default ResultsSection;
