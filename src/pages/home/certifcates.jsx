import CS50P from '/CS50P.webp'
import CS50W from '/CS50W.webp'
import CS50x from '/CS50x.webp'
import './certificates.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useContext } from 'react';
import { LanguageContext } from '../../components/LanguageContext'; 

const CertificatesSection = () => {
  const { language } = useContext(LanguageContext); 
  
  useEffect(() => {
    AOS.init();
  }, []);
  
  const certificates = [
    {
      title: language === "pt" 
        ? "CS50's Introdução à Ciência da Computação" 
        : "CS50's Introduction to Computer Science",
      image: CS50x,
      link: 'https://certificates.cs50.io/0d48086f-f2b9-41fe-8e7c-56f08e6590d7.png?size=letter',
    },
    {
      title: language === "pt"
        ? "CS50's Desenvolvimento Web"
        : "CS50's Web Development",
      image: CS50W,
      link: 'https://certificates.cs50.io/1716e3f8-e8f4-4da1-a391-bea2b2b81727.png?size=letter',
    },
    {
      title: language === "pt"
        ? "CS50's Programação com Python"
        : "CS50's Introduction to Programming With Python",
      image: CS50P,
      link: 'https://certificates.cs50.io/84d58ce9-277d-4f33-807f-502d50176bb2.png?size=letter',
    },
  ];
  
  return (
    <section className="certificates-section" >
      <h2 className="certificates-title">
        {language === "pt" 
          ? "Meus Certificados Harvard CS50" 
          : "My Harvard's CS50 Certificates"}
      </h2>
      <div className="certificates-grid" data-aos="flip-up" data-aos-delay="500">
        {certificates.map((certificate, index) => (
          <div className="certificate-card" key={index}>
            <a href={certificate.link} target="_blank" rel="noopener noreferrer">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="certificate-image"
              />
            </a>
            <p className="certificate-title">{certificate.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
};

export default CertificatesSection;