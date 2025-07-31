import React from "react";
import "./Services.css";
import AOS from "aos";
import "aos/dist/aos.css";

const servicesData = [
    {
        title: "Agendamento Inteligente",
        subtitle: "Sistema de reservas e atendimento 24h com IA e WhatsApp",
        discountedPrice: 3999,
        originalPrice: 5500,
        deadline: "3-4 semanas",
        forWho: "Clínicas, consultórios, salões e academias que querem reduzir faltas, aumentar faturamento e oferecer atendimento imediato aos clientes.",
        features: [
            "Agenda online com lembretes automáticos por WhatsApp e e-mail",
            "Atendimento inteligente com IA para confirmar e reagendar horários",
            "Integração com pagamentos para garantir reservas confirmadas",
            "Painel web para gestão completa dos agendamentos",
            "Relatórios com métricas para otimizar o negócio",
        ],
    },
    {
        title: "Gestão de Clientes (CRM)",
        subtitle: "Transforme contatos em vendas com IA",
        discountedPrice: 4999,
        originalPrice: 7200,
        deadline: "4-5 semanas",
        forWho: "Empresas que querem organizar leads e clientes, aumentar conversão e ter follow-up automático sem esforço manual.",
        features: [
            "CRM personalizado com funil de vendas intuitivo",
            "IA que envia lembretes e acompanha leads automaticamente",
            "Relatórios de conversão e insights para fechar mais negócios",
            "Integração com WhatsApp e e-mail marketing inclusa",
            "30 dias de suporte e ajustes estratégicos inclusos",
        ],
    },
    {
        title: "Loja Virtual Inteligente",
        subtitle: "E-commerce que vende sozinho com automação",
        discountedPrice: 6999,
        originalPrice: 9500,
        deadline: "4-6 semanas",
        forWho: "Empreendedores que querem vender online com uma loja otimizada e automatizada, sem depender de anúncios caros ou processos manuais.",
        features: [
            "Loja virtual moderna com checkout otimizado e responsivo",
            "Integração com Pix, cartão e gateways como Stripe ou Mercado Pago",
            "Automações de remarketing por WhatsApp e e-mail inclusas",
            "Relatórios inteligentes para acompanhar vendas em tempo real",
            "Treinamento completo + 30 dias de suporte premium",
        ],
    },
    {
        title: "Aplicativo Mobile",
        subtitle: "Seu app exclusivo conectado ao seu negócio",
        discountedPrice: 6999,
        originalPrice: 9500,
        deadline: "4-8 semanas",
        forWho: "Empresas e startups que querem ter presença mobile premium ou estender seu e-commerce/SaaS para os celulares dos clientes.",
        features: [
            "App em React Native com design moderno e rápido",
            "Integração direta com seu sistema web ou e-commerce",
            "Push notifications para engajamento em tempo real",
            "Publicação na Play Store e suporte inicial incluído",
        ],
    },
    {
        title: "ERP Sob Medida",
        subtitle: "Controle total da sua empresa em tempo real",
        discountedPrice: 8999,
        originalPrice: 12000,
        deadline: "6-8 semanas",
        forWho: "Empresas que precisam centralizar estoque, vendas, finanças ou RH em um único sistema para crescer com organização.",
        features: [
            "Painel web completo para gestão de processos internos",
            "Dashboards interativos com dados em tempo real",
            "Controle de usuários, permissões e backups automáticos",
            "Integração com e-commerce, pagamentos e automações",
            "Suporte premium por 60 dias incluso",
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
    const formattedOriginalPrice = `R$ ${originalPrice.toLocaleString("pt-BR")}`;
    const formattedDiscountedPrice = `R$ ${discountedPrice.toLocaleString("pt-BR")}`;

    return (
        <div className="service-card">
            <div className="card-header">
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
            </div>
            <div className="card-body">
                <div className="price-tag">
                    <div className="original-price">De {formattedOriginalPrice}</div>
                    <div className="discounted-price-container">
                        <span className="price-label">Por apenas </span>
                        <span className="price-value">{formattedDiscountedPrice}</span>
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
                        Se você tem uma ideia inovadora, mas não sabe como transformá-la em um
                        produto funcional, eu faço isso acontecer. Com alto domínio técnico e um
                        olhar estratégico, traduzo conceitos abstratos em soluções digitais sólidas.
                        Meu foco é entregar não apenas um sistema funcional, mas uma experiência
                        otimizada, com desempenho excepcional e design que impressiona. Seja qual
                        for a complexidade da sua ideia, eu tenho as habilidades para torná-la
                        realidade. Entre em contato!
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
                            $ 500 por API. Conecte seu projeto a ferramentas poderosas como Google
                            Maps, WhatsApp, Mercado Pago, Twitter/X, Instagram e outras.
                            Potencialize sua ideia com o que há de mais relevante na tecnologia.
                        </p>
                    </div>
                    <div className="service-item">
                        <h5>
                            <i className="fas fa-tools"></i>
                            Manutenção e Suporte
                        </h5>
                        <p>
                            Pacotes mensais a partir de R$ 300, garantindo desempenho contínuo e
                            tranquilidade. Para sites que eu construí, ofereço 50% de novas
                            funcionalidades, potencializando seu projeto com custo reduzido e
                            qualidade máxima.
                        </p>
                    </div>
                    <div className="service-item">
                        <h5>
                            <i className="fas fa-puzzle-piece"></i>
                            Funcionalidades Extras
                        </h5>
                        <p>
                            Preço ajustado à complexidade, com soluções sob medida como sistema de
                            login, chat em tempo real, dashboard interativo com gráficos, galeria de
                            fotos dinâmica, formulário personalizado com envio de e-mails, tudo
                            personalizado para atender exatamente às suas necessidades!
                        </p>
                    </div>

                    <div className="service-item">
                        <h5>
                            <i className="fas fa-server"></i>
                            Hospedagem e Servidor
                        </h5>
                        <p>
                            Preços variam conforme o tamanho do seu projeto. Para sites pequenos,
                            custa entre R$ 20 e R$ 40 por mês, já com domínio personalizado. Para
                            projetos grandes, como lojas online ou sites com muito tráfego, fica
                            entre R$ 300 e R$ 1.500 por mês, tudo ajustado ao que você precisa.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
