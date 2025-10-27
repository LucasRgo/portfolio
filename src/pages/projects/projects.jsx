import React, { useEffect, useRef, useContext } from "react";
import "./projects.css";
import ProjectCard from "./projectsCard";
import { LanguageContext } from "../../components/LanguageContext";
import a1 from "/a1.webp";
import AOS from "aos";
import objectDectition from "/objectDetection.png";
import agendai from "/dash.webp";
import commerce from "/commerce.webp";
import flow from "/flow.webp";
import movie from "/movie.webp";
import neidi from "/neidi.webp";
import "aos/dist/aos.css";

const Projects = () => {
    const { language } = useContext(LanguageContext);
    const firstProjectRef = useRef(null);

    const paraplaceImages = [
        "/1.webp",
        "/2.webp",
        "/3.webp",
        "/4.webp",
        "/5.webp",
    ];

    const handleScrollToFirstProject = () => {
        firstProjectRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        AOS.init();
    }, []);

    const projects = [
        {
            id: 1,
            title: "AgendAI",
            subtitle:
                language === "pt"
                    ? "SaaS multi tenant com agente de IA no WhatsApp para gestão automatizada de salões e barbearias."
                    : "Multi tenant SaaS with AI agent on WhatsApp for automated salon and barbershop management.",
            description:
                language === "pt"
                    ? `SaaS completo com arquitetura multi tenant escalável, featuring agente de IA integrado ao WhatsApp que processa agendamentos em linguagem natural. Inclui sistema de pagamentos recorrentes automatizado, dashboard de insights financeiros e gestão completa de clientes. Projeto próprio em produção com clientes ativos, demonstrando expertise em arquitetura enterprise, IA aplicada a negócios e capacidade de entregar soluções do conceito ao mercado.`
                    : `Complete SaaS with scalable multi tenant architecture, featuring AI agent integrated with WhatsApp that processes bookings in natural language. Includes automated recurring payment system, financial insights dashboard, and complete client management. Own project in production with active clients, demonstrating expertise in enterprise architecture, applied AI for business, and ability to deliver solutions from concept to market.`,
            image: agendai,
            mediaType: "youtube",
            youtubeUrl: "cIUXZlHVqK0",
        },
        {
            id: 2,
        title: "ParaPlace",
        subtitle:
            language === "pt"
                ? "Marketplace especializado em parapentes com arquitetura Docker escalável e chat em tempo real."
                    : "Specialized paragliding marketplace with scalable Docker architecture and real time chat.",
            description:
                language === "pt"
                    ? `Marketplace de nicho desenvolvido com Django e arquitetura Docker preparada para alta demanda. Integra Stripe Connect para pagamentos seguros, WebSockets para chat em tempo real, autenticação social e busca inteligente com filtros avançados. Sistema de notificações dinâmico e SEO técnico otimizado completam a solução enterprise pronta para escalar com milhares de usuários simultâneos.`
                    : `Niche marketplace built with Django and Docker architecture prepared for high demand. Integrates Stripe Connect for secure payments, WebSockets for real time chat, social authentication, and intelligent search with advanced filters. Dynamic notification system and optimized technical SEO complete the enterprise solution ready to scale with thousands of concurrent users.`,
            image: paraplaceImages[0],
            mediaType: "carousel",
            mediaContent: paraplaceImages,
        },
        {
            id: 3,
            title: "Movie Wizard",
            subtitle:
                language === "pt"
                    ? "Uma aplicação web para recomendações personalizadas de filmes."
                    : "A web application for personalized movie recommendations, ratings, and watchlist management.",
            description:
                language === "pt"
                    ? `Plataforma full stack desenvolvida com Django e React que oferece recomendações personalizadas através de algoritmo customizado. Interface moderna e responsiva com sistema de busca avançada, páginas detalhadas de filmes e sugestões de conteúdo similar. Migrado de Flask para Django para otimização de performance e escalabilidade.`
                    : `Full stack platform built with Django and React featuring a custom recommendation algorithm. Modern, responsive interface with advanced search, detailed movie pages, and similar content suggestions. Migrated from Flask to Django for enhanced performance and scalability.`,
            image: movie,
            mediaType: "youtube",
            mediaContent: "YWIYZWkl66I?start=7",
        },
        {
            id: 4,
            title: "Flow Reader",
            subtitle:
                language === "pt"
                    ? "Um leitor de PDF com exibição palavra por palavra para aumentar a velocidade de leitura e reduzir distrações."
                    : "A PDF reader with a word-by-word display to enhance reading speed and reduce distractions.",
            description:
                language === "pt"
                    ? `Aplicação React e Django que revoluciona a experiência de leitura digital com exibição palavra por palavra em velocidade ajustável. Sistema inteligente de pausas baseado em pontuação e funcionalidade de bookmark automático. Interface intuitiva focada em produtividade e retenção de conteúdo.`
                    : `React and Django application that revolutionizes digital reading with adjustable word by word display. Intelligent punctuation based pause system and automatic bookmark functionality. Intuitive interface focused on productivity and content retention.`,
            image: flow,
            mediaType: "youtube",
            mediaContent: "PSks1SQWFGM",
        },
        {
            id: 5,
            title:
                language === "pt"
                    ? "Detecção de Objetos em Vídeo em Tempo Real"
                    : "Real Time Video Object Detection",
            subtitle:
                language === "pt"
                    ? "Um sistema de detecção com IA com ajustes de confiança e IoU em tempo real."
                    : "An AI detection system with real-time confidence and IoU adjustments.",
            description:
                language === "pt"
                    ? `Solução de IA integrando Flask, modelo ONNX e React com Fabric.js para detecção de objetos em tempo real. Dashboard interativo permite ajuste dinâmico de parâmetros (confiança e IoU) com visualização instantânea dos resultados. Demonstra expertise em machine learning aplicado e arquitetura full stack de IA.`
                    : `AI solution integrating Flask, ONNX model, and React with Fabric.js for real time object detection. Interactive dashboard enables dynamic parameter adjustment (confidence and IoU) with instant result visualization. Demonstrates expertise in applied machine learning and full stack AI architecture.`,
            image: objectDectition,
            mediaType: "youtube",
            mediaContent: "4jSHvC8fDk0?start=6",
        },
        {
            id: 6,
            title: "Neidi Cred",
            subtitle:
                language === "pt"
                    ? "Landing page de alta conversão que gerou +123% de aumento nas vendas online."
                    : "High conversion landing page that generated +123% increase in online sales.",
            description:
                language === "pt"
                    ? `Projeto que aumentou as vendas online em 123% através de landing page desenvolvida com JavaScript puro, HTML e CSS. Combina engenharia front end otimizada, SEO técnico e design estratégico focado em conversão. Features incluem calculadora de lances interativa, sistema de captura de leads integrado ao email e interface que transmite credibilidade profissional.`
                    : `Project that increased online sales by 123% through a landing page built with vanilla JavaScript, HTML and  CSS. Combines optimized front end engineering, technical SEO, and strategic conversion focused design. Features include interactive bid calculator, lead capture system integrated with email, and interface that conveys professional credibility.`,
            image: neidi,
            mediaType: "link",
            mediaContent: "https://neidicred.com.br",
        },
        {
            id: 7,
            title: language === "pt" ? "Exercício de comércio CS50" : "CS50 commerce exercise",
            subtitle:
                language === "pt"
                    ? "Um site de leilões onde os usuários podem criar listagens, fazer lances e gerenciar uma lista de observação."
                    : "An auction site where users can create listings, place bids, and manage a watchlist.",
            description:
                language === "pt"
                    ? `Plataforma de leilões construída com Django implementando autenticação completa, CRUD de listagens, sistema de lances em tempo real e watchlist personalizada. Inclui funcionalidades de comentários, categorização de produtos e encerramento de leilões. Projeto que solidificou conhecimentos em arquitetura MVC e gerenciamento de banco de dados.`
                    : `Auction platform built with Django implementing complete authentication, listing CRUD, real time bidding system, and personalized watchlist. Includes comment functionality, product categorization, and auction closing. Project that solidified knowledge in MVC architecture and database management.`,
            image: commerce,
            mediaType: "youtube",
            mediaContent: "4zg9OpkBTSA",
        },
    ];

    return (
        <>
            <div className="projects-container">
                <div className="projects-content" data-aos="flip-up" data-aos-delay="250">
                    <h1 id="projects-heading">{language === "pt" ? "PROJETOS" : "PROJECTS"}</h1>
                    <p id="projects-p">
                        {language === "pt"
                            ? "Aqui estão alguns dos meus trabalhos mais prestigiados"
                            : "Here are some of my most prestigious works"}
                    </p>
                    <button onClick={handleScrollToFirstProject} className="contact-button rounded-3">
                        {language === "pt" ? "Iniciar o Tour" : "Start the Tour"}
                    </button>
                </div>
                <img id="projects" src={a1} alt={language === "pt" ? "Fundo de código" : "Code background"} />
            </div>
            <div className="my-projects">
                <div className="projects-container">
                    {projects.map((project, index) => (
                        <div key={project.id} ref={index === 0 ? firstProjectRef : null}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Projects;
