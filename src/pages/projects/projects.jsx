import React, { useEffect, useRef, useContext } from 'react';
import './projects.css';
import ProjectCard from './projectsCard';
import { LanguageContext } from '../../components/LanguageContext';
import a1 from '/a1.webp';
import commerce from '/commerce.webp';
import movie from '/movie.webp';
import flow from '/flow.webp';
import neidi from '/neidi.webp';
import AOS from 'aos';
import objectDectition from '/objectDetection.png';
import 'aos/dist/aos.css';

const Projects = () => {
    const { language } = useContext(LanguageContext);
    const firstProjectRef = useRef(null);

    const handleScrollToFirstProject = () => {
        firstProjectRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        AOS.init();
    }, []);

    const projects = [
        {
            id: 1,
            title: "Movie Wizard",
            subtitle: language === "pt" 
                ? "Uma aplicação web para recomendações personalizadas de filmes, avaliações e gerenciamento de lista de filmes para assistir."
                : "A web application for personalized movie recommendations, ratings, and watchlist management.",
            description: language === "pt"
                ? `Originalmente desenvolvido usando Flask, a versão mais recente foi reconstruída com Django e React para melhor desempenho e escalabilidade.
                   Este é o projeto do qual mais me orgulho, apresentando uma interface de usuário elegante e interativa, junto com um backend robusto.
                   Inclui um script de recomendação personalizado que sugere filmes com base nas suas preferências.
                   Além disso, os usuários podem pesquisar filmes e explorar páginas individuais de filmes, que mostram sugestões de filmes semelhantes.`
                : `Originally developed using Flask, the latest version has been rebuilt with Django and React for improved performance and scalability.
                   This is the project I am most proud of, featuring a sleek and interactive user interface coupled with a robust backend.
                   It includes a custom recommendation script that suggests movies based on your preferences.
                   Additionally, users can search for movies and explore individual movie pages, which showcase similar movie suggestions.`,
            image: movie,
            youtubeUrl: "YWIYZWkl66I?start=7"
        },
        {
            id: 2,
            title: "Flow Reader",
            subtitle: language === "pt" 
                ? "Um leitor de PDF com exibição palavra por palavra para aumentar a velocidade de leitura e reduzir distrações."
                : "A PDF reader with a word-by-word display to enhance reading speed and reduce distractions.",
            description: language === "pt"
                ? `Construído com React no frontend e Django no backend, o Flow Reader é uma aplicação web projetada para otimizar a leitura.
                   Os usuários podem fazer upload de livros em PDF e lê-los com uma exibição palavra por palavra, ajustando a velocidade das transições.
                   A plataforma também possui um sistema inteligente que ajusta os intervalos de palavras com base na pontuação.
                   Além disso, ele se lembra da última página que o usuário estava lendo, para que possam facilmente continuar de onde pararam.`
                : `Built with React on the frontend and Django on the backend, Flow Reader is a web application designed to optimize reading.
                   Users can upload PDF books and read them with a word-by-word display, adjusting the speed of word transitions.
                   The platform also features an intelligent system that adjusts word intervals based on punctuation.
                   Additionally, it remembers the last page the user was reading, so they can easily pick up where they left off.`,
            image: flow,
            youtubeUrl: "PSks1SQWFGM"
        },
        {
            id: 3,
            title: language === "pt" ? "Detecção de Objetos em Vídeo em Tempo Real" : "Real-Time Video Object Detection",
            subtitle: language === "pt"
                ? "Um sistema de detecção com IA com ajustes de confiança e IoU em tempo real."
                : "An AI detection system with real-time confidence and IoU adjustments.",
            description: language === "pt"
                ? `Este projeto combina Flask e um modelo ONNX no backend com um frontend React usando Fabric.js para fornecer detecção de objetos em vídeo em tempo real.
                   Os usuários podem ajustar os limiares de confiança e IoU, vendo instantaneamente como essas mudanças afetam a precisão da detecção através de um painel dinâmico.
                   O sistema oferece uma integração perfeita de IA e visualização interativa, facilitando o ajuste fino dos parâmetros do modelo e a visualização dos resultados em tempo real,
                   demonstrando o poder das aplicações de IA full-stack na análise de vídeo.`
                : `This project combines Flask and an ONNX model on the backend with a React frontend using Fabric.js to deliver real-time video object detection. 
                   Users can adjust confidence and IoU thresholds, instantly seeing how these changes affect detection accuracy through a dynamic dashboard. 
                   The system offers a seamless integration of AI and interactive visualization, making it easy to fine-tune model parameters and view the results in real-time, 
                   demonstrating the power of full-stack AI applications in video analysis.`,
            image: objectDectition,
            youtubeUrl: "4jSHvC8fDk0?start=6"
        },
        {
            id: 4,
            title: "Neidi Cred",
            subtitle: language === "pt" 
                ? "Um site de vendas completo onde os usuários podem ver preços e calcular parcelas mensais."
                : "A complete sales website where users can view prices and calculate monthly installments.",
            description: language === "pt"
                ? `Construído usando JavaScript puro e HTML/CSS bruto, o Neidi Cred mostra o poder de dominar o básico.
                   O site não apenas apresenta um design limpo e consistente, mas também inclui elementos interativos como uma calculadora de ofertas e carrosséis.
                   O destaque é a barra de contato, onde os usuários podem facilmente inserir suas informações de contato, que são então enviadas diretamente para o e-mail da empresa.`
                : `Built using plain JavaScript and raw HTML/CSS, Neidi Cred showcases the power of mastering the basics.
                   The website not only features a clean and consistent design but also includes interactive elements like a bid calculator and carousels.
                   The standout feature is the contact bar, where users can easily input their contact information, which is then sent directly to the company's email address.`,
            image: neidi,
            youtubeUrl: "https://neidicred.com.br"
        },
        {
            id: 5,
            title: language === "pt" ? "Exercício de comércio CS50" : "CS50 commerce exercise",
            subtitle: language === "pt"
                ? "Um site de leilões onde os usuários podem criar listagens, fazer lances e gerenciar uma lista de observação."
                : "An auction site where users can create listings, place bids, and manage a watchlist.",
            description: language === "pt"
                ? `Construído com Django e HTML/CSS, este site de leilões permite aos usuários criar listagens, fazer lances e gerenciar sua lista de observação.
                   Os usuários também podem comentar nas listagens, fechar leilões e navegar por itens por categoria.
                   Demonstra minha capacidade de integrar perfeitamente o backend e o frontend, lidar com autenticação de usuários e gerenciar bancos de dados.`
                : `Built with Django and HTML/CSS, this auction site allows users to create listings, place bids, and manage their watchlist.
                   Users can also comment on listings, close auctions, and browse items by category.
                   It showcases my ability to seamlessly integrate the backend and frontend, handle user authentication, and manage databases.`,
            image: commerce,
            youtubeUrl: "4zg9OpkBTSA"
        }
    ];

    return (
        <>
            <div className="projects-container">
                <div className="projects-content" data-aos="flip-up" data-aos-delay="400" >
                    <h1 id="projects-heading">{language === "pt" ? "PROJETOS" : "PROJECTS"}</h1>
                    <p id="projects-p">
                        {language === "pt" 
                            ? "Aqui estão alguns dos meus trabalhos mais prestigiados" 
                            : "Here are some of my most prestigious works"}
                    </p>
                    <button
                        onClick={handleScrollToFirstProject}
                        className="contact-button rounded-3"
                    >
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