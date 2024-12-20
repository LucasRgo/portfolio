import './home.css';
import code from '/BG.webp';
import About from'./about'
import CertificatesSection from './certifcates';
import Dynamic from './dynamic';
import Skills from './skills';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'; // Import useEffect here
import perfil from '/perfil.webp'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const Home = () => {
    useEffect(() => {
      AOS.init();
    }, []);

    return (
        <>
            <section id=''>
            <div className="home-container">
                <div className="intro-text" data-aos="flip-up" data-aos-delay="500">
                    <Avatar
                        alt="Lucas Profile"
                        src={perfil}
                        sx={{ width: 300, height: 300 }}
                        className="avatar"
                    />
                    <div className="intro-content">
                        <h1>Hi, I’m Lucas</h1>
                        <p>
                            A Full Stack Developer passionate about creating refined and polished web experiences
                        </p>
                        <button onClick={() => window.open('mailto:lucas.lrg.0005@gmail.com', '_blank')} className="contact-button rounded-3">
                            Get in Touch
                        </button>
                    </div>

                </div>
                <img id="code" src={code} alt="Code background" />
            </div>
            </section>
            <About />
            <Skills />
            <Dynamic />
            <CertificatesSection />
        </>
    );
};

export default Home;

