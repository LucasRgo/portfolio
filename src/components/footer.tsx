import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import "./footer.css";

function Footer() {
    const { language } = useContext(LanguageContext); // Acessando o idioma através do contexto

    return (
        <footer id="footer" className="footer bg-dark text-light py-4">
            <div className="container text-center" id="footer-container">
                <div className="row">
                    <div className="col-md-6" id="footer-brand">
                        <h1 className="red-orange">
                            <i className="bi bi-code-slash red-orange">!</i>
                        </h1>
                        <h5 className="footer-copyright">
                            &copy; 2024 {language === "pt" ? "Coded by" : "Desenvolvido por"}{" "}
                            <a href="https://lucasrgoveia.tech/" className="lucas">
                                Lucas R Goveia
                            </a>
                            , Inc. {language === "pt" ? "Todos os direitos reservados." : "All rights reserved."}
                        </h5>
                    </div>

                    <div className="col-md-3" id="footer-social-media">
                        <h4 className="footer-title">{language === "pt" ? "Redes sociais" : "Social media"}</h4>
                        <ul className="footer-list list-unstyled">
                            <li className="footer-list-item">
                                <a
                                    href="https://www.linkedin.com/in/lucasrgoveiadev/"
                                    className="footer-link"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <i className="bi bi-linkedin footer-icon"></i>LinkedIn
                                </a>
                            </li>
                            <li className="footer-list-item">
                                <a
                                    href="https://github.com/LucasRgo?tab=repositories"
                                    className="footer-link"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <i className="bi bi-github footer-icon"></i>GitHub
                                </a>
                            </li>
                            <li className="footer-list-item">
                                <a
                                    href="mailto:lucas.lrg.0005@gmail.com"
                                    className="footer-link"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <i className="bi bi-envelope footer-icon"></i>
                                    {language === "pt" ? "E-mail" : "E-mail"}
                                </a>
                            </li>
                            <li className="footer-list-item">
                                <a
                                    href="https://www.instagram.com/lucass_cj/"
                                    className="footer-link"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <i className="bi bi-instagram footer-icon"></i>Instagram
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3" id="footer-reference">
                        <h4 className="footer-title">{language === "pt" ? "Referências" : "Reference"}</h4>
                        <ul className="footer-list list-unstyled">
                            <li className="footer-list-item">
                                <a href="/#about" className="footer-link">
                                    {language === "pt" ? "Sobre mim" : "About me"}
                                </a>
                            </li>

                            <li className="footer-list-item">
                                <a href="mailto:lucas.lrg.0005@gmail.com" className="footer-link">
                                    {language === "pt" ? "Contato" : "Contact"}
                                </a>
                            </li>
                            <li className="footer-list-item">
                                <a href="/projects#project" className="footer-link">
                                    {language === "pt" ? "Projetos" : "Projects"}
                                </a>
                            </li>
                            <li className="footer-list-item">
                                <a href="/" className="footer-link">
                                    {language === "pt" ? "Página inicial" : "Homepage"}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
