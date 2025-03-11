import React from "react";
import "./Services.css";
import AOS from "aos";
import "aos/dist/aos.css";

const servicesData = [
    {
        title: "Pacote Presença Online",
        subtitle: "Site Institucional Prático e Elegante",
        discountedPrice: 999,
        originalPrice: 1500,
        deadline: "1-2 semanas",
        forWho: "Pequenas empresas, freelancers ou profissionais que desejam marcar presença digital com estilo e eficiência.",
        features: [
            "Site responsivo e otimizado para Google (SEO)",
            "Páginas essenciais: 'Sobre', 'Serviços' e 'Contato'",
            "Formulário de contato com captura de leads",
            "Hospedagem grátis por 3 meses (economia de R$ 150)",
        ],
    },
    {
        title: "Pacote Blog Profissional",
        subtitle: "Plataforma de Conteúdo Dinâmica",
        discountedPrice: 1999,
        originalPrice: 2700,
        deadline: "2-3 semanas",
        forWho: "Blogueiros, criadores de conteúdo ou empresas que querem engajar seu público com artigos impactantes.",
        features: [
            "Site responsivo com design moderno e personalizável",
            "Painel simples para criar e editar posts em minutos",
            "SEO avançado e integração com redes sociais",
            "Newsletter integrada + template inicial grátis",
        ],
    },
    {
        title: "Pacote Agendamento Inteligente",
        subtitle: "Sistema de Reservas Automatizado",
        discountedPrice: 2999,
        originalPrice: 5000,
        deadline: "3-4 semanas",
        forWho: "Clínicas, salões ou consultores que querem reduzir faltas e aumentar a receita com agendamentos online.",
        features: [
            "Plataforma web para reservas 24/7",
            "Calendário interativo com lembretes automáticos",
            "Integração com pagamentos (ex.: Pix, cartão via Stripe)",
            "Notificações inclusas",
            "Relatórios detalhados para otimizar seu negócio",
        ],
    },
    {
        title: "Pacote Gestão de Clientes",
        subtitle: "CRM Sob Medida",
        discountedPrice: 3999,
        originalPrice: 5500,
        deadline: "4-5 semanas",
        forWho: "Empresas que querem transformar contatos em vendas com organização e inteligência.",
        features: [
            "Sistema web para gerenciar clientes e funil de vendas",
            "Automações de acompanhamento (e-mails pré-configurados)",
            "Relatórios de desempenho com insights acionáveis",
            "Integração com WhatsApp e e-mail inclusa",
        ],
    },
    {
        title: "Pacote Aplicativo Mobile",
        subtitle: "App Android Exclusivo",
        discountedPrice: 4999,
        originalPrice: 6250,
        deadline: "4-8 semanas",
        forWho: "Empresas ou startups que querem se destacar com um app personalizado e funcional.",
        features: [
            "App em React Native com design premium",
            "Funcionalidades sob medida para seu público",
            "Integração com APIs ou sistemas existentes",
            "Publicação na Play Store + 1 mês de suporte grátis",
        ],
    },
    {
        title: "Pacote Loja Virtual",
        subtitle: "E-commerce Pronto para Vender",
        discountedPrice: 5999,
        originalPrice: 7500,
        deadline: "4-6 semanas",
        forWho: "Empreendedores que querem lucrar online com uma loja prática e profissional.",
        features: [
            "Loja com catálogo, carrinho e checkout otimizado",
            "Design interativo (React) e backend robusto (Django/Flask)",
            "Integração com Pix, Mercado Pago, Stripe e mais",
            "Treinamento de uso + 30 dias de ajustes grátis",
        ],
    },
    {
        title: "Pacote Sistema de Gerenciamento Interno",
        subtitle: "ERP Simplificado e Poderoso",
        discountedPrice: 6999,
        originalPrice: 8750,
        deadline: "6-8 semanas",
        forWho: "Pequenas e médias empresas que buscam controle total de estoque, finanças ou RH.",
        features: [
            "Sistema web para unificar processos do negócio",
            "Dashboards interativos com dados em tempo real",
            "Controle de acesso e backups automáticos",
            "Suporte técnico por 60 dias incluso",
        ],
    },
    {
        title: "Pacote Combo",
        subtitle: "E-commerce + App Mobile Integrados",
        discountedPrice: 9999,
        originalPrice: 15000,
        deadline: "8-10 semanas",
        forWho: "Empresas que querem dominar o mercado com uma solução completa web + mobile.",
        features: [
            "Loja virtual completa com pagamentos integrados",
            "App Android sincronizado para compras em tempo real",
            "Design unificado e experiência premium",
            "Suporte prioritário por 90 dias",
        ],
    },
];

const ServiceCard = ({
    title,
    subtitle,
    discountedPrice,
    originalPrice,
    deadline,
    forWho,
    features,
}) => {
    const formattedOriginalPrice = `R$ ${originalPrice.toLocaleString(
        "pt-BR"
    )}`;
    const formattedDiscountedPrice = `R$ ${discountedPrice.toLocaleString(
        "pt-BR"
    )}`;

    return (
        <div className="service-card">
            <div className="card-header">
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
            </div>
            <div className="card-body">
                <div className="price-tag">
                    <div className="original-price">
                        De {formattedOriginalPrice}
                    </div>
                    <div className="discounted-price-container">
                        <span className="price-label">Por apenas </span>
                        <span className="price-value">
                            {formattedDiscountedPrice}
                        </span>
                    </div>
                </div>
                <p className="deadline">Prazo estimado: {deadline}</p>
                <div className="for-who">
                    <h5>Para quem é indicado:</h5>
                    <p>{forWho}</p>
                </div>
                <div className="features">
                    <h5>O que você recebe:</h5>
                    <ul>
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const Services = () => {
    return (
        <>
            <section className="services-section">
                <h2>Soluções que Impulsionam seu Sucesso</h2>
                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
                <div className="special-touch">
                    <h3>Não encontrou o que queria?</h3>
                    <p>
                        Se você tem uma ideia inovadora, mas não sabe como
                        transformá-la em um produto funcional, eu faço isso
                        acontecer. Com alto domínio técnico e um olhar
                        estratégico, traduzo conceitos abstratos em soluções
                        digitais sólidas. Meu foco é entregar não apenas um
                        sistema funcional, mas uma experiência otimizada, com
                        desempenho excepcional e design que impressiona. Seja
                        qual for a complexidade da sua ideia, eu tenho as
                        habilidades para torná-la realidade. Entre em contato!
                    </p>
                </div>
            </section>
            <section className="additional-services">
                <h2>Serviços Adicionais para personalizar seu projeto</h2>
                <div className="services-list">
                    <div className="service-item">
                        <h5>
                            <i className="fas fa-plug"></i>
                            Integração de APIs
                        </h5>
                        <p>
                            $ 500 por API. Conecte seu projeto a ferramentas
                            poderosas como Google Maps, WhatsApp, Mercado Pago,
                            Twitter/X, Instagram e outras. Potencialize sua
                            ideia com o que há de mais relevante na tecnologia.
                        </p>
                    </div>
                    <div className="service-item">
                        <h5>
                            <i className="fas fa-tools"></i>
                            Manutenção e Suporte
                        </h5>
                        <p>
                            Pacotes mensais a partir de R$ 300, garantindo
                            desempenho contínuo e tranquilidade. Para sites que
                            eu construí, ofereço 50% de novas funcionalidades,
                            potencializando seu projeto com custo reduzido e
                            qualidade máxima.
                        </p>
                    </div>
                    <div className="service-item">
                        <h5>
                            <i className="fas fa-puzzle-piece"></i>
                            Funcionalidades Extras
                        </h5>
                        <p>
                            Preço ajustado à complexidade, com soluções sob
                            medida como sistema de login, chat em tempo real,
                            dashboard interativo com gráficos, galeria de fotos
                            dinâmica, formulário personalizado com envio de
                            e-mails, tudo personalizado para atender exatamente
                            às suas necessidades!
                        </p>
                    </div>

                    <div className="service-item">
                        <h5>
                            <i className="fas fa-server"></i>
                            Hospedagem e Servidor
                        </h5>
                        <p>
                            Preços variam conforme o tamanho do seu projeto.
                            Para sites pequenos, custa entre R$ 20 e R$ 40 por
                            mês, já com domínio personalizado. Para projetos
                            grandes, como lojas online ou sites com muito
                            tráfego, fica entre R$ 300 e R$ 1.500 por mês, tudo
                            ajustado ao que você precisa.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
