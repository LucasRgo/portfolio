import {
    FaReact,
    FaPython,
    FaJsSquare,
    FaHtml5,
    FaFlask,
    FaDatabase,
    FaDocker,
} from "react-icons/fa";
import {
    SiDjango,
    SiTypescript,
    SiC,
    SiPostgresql,
    SiSqlite,
} from "react-icons/si";
import "./skills.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useContext } from 'react'; // Added useContext
import { LanguageContext } from '../../components/LanguageContext'; // Adjust path if needed

const Skills = () => {
  const { language } = useContext(LanguageContext); // Get language from context
  
    useEffect(() => {
        AOS.init();
    }, []);
    const technologies = [
        {
            name: "React",
            level: 5,
            icon: <FaReact style={{ color: "#00FFFF" }} />,
            color: "#00FFFF",
        },
        {
            name: "Django",
            level: 5,
            icon: <SiDjango style={{ color: "#2ECC71" }} />,
            color: "#2ECC71",
        },
        {
            name: "Flask",
            level: 5,
            icon: <FaFlask style={{ color: "#9B59B6" }} />,
            color: "#9B59B6",
        },
        {
            name: "Python",
            level: 5,
            icon: <FaPython style={{ color: "#3498DB" }} />,
            color: "#3498DB",
        },
        {
            name: "JavaScript",
            level: 5,
            icon: <FaJsSquare style={{ color: "#FFE100" }} />,
            color: "#FFE100",
        },
        {
            name: "TypeScript",
            level: 5,
            icon: <SiTypescript style={{ color: "#0088FF" }} />,
            color: "#0088FF",
        },
        {
            name: "C",
            level: 5,
            icon: <SiC style={{ color: "#4834D4" }} />,
            color: "#4834D4",
        },
        {
            name: "HTML/CSS",
            level: 5,
            icon: <FaHtml5 style={{ color: "#FF4757" }} />,
            color: "#FF4757",
        },
        {
            name: "Docker",
            level: 5,
            icon: <FaDocker style={{ color: "#00A8FF" }} />,
            color: "#00A8FF",
        },
        {
            name: "SQL",
            level: 5,
            icon: <FaDatabase style={{ color: "#FFA502" }} />,
            color: "#FFA502",
        },
    ];

    return (
        <div className="technologies-container">
            <div className="technologies-wrapper">
                <h2 className="technologies-title">
                    {language === "pt"
                        ? "Tecnologias que Domino"
                        : "Technologies I Master"}
                </h2>
                <div
                    className="technologies-grid"
                    data-aos="fade-up"
                    data-aos-delay="500"
                >
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="technology-card"
                            style={{
                                "--card-color": tech.color,
                                "--shadow-color": `${tech.color}`,
                            }}
                        >
                            <div className="technology-icon">{tech.icon}</div>
                            <div className="technology-details">
                                <h3>{tech.name}</h3>
                                <div className="technology-proficiency">
                                    {[...Array(5)].map((_, i) => (
                                        <span
                                            key={i}
                                            className={`proficiency-dot ${
                                                i < tech.level ? "filled" : ""
                                            }`}
                                        ></span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
