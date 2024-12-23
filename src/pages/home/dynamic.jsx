import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import d1 from '/d1.webp';
import d2 from '/d2.webp';
import d3 from '/d3.webp';
import './dynamic.css';
import 'aos/dist/aos.css';

const Dynamic = () => {
  const images = [d1, d2, d3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="dynamic-container" className="container-fluid">
      <div id="dynamic-row" className="row" data-aos="fade-up" data-aos-delay="500">
        <div id="dynamic-text" className="col-lg-4">
          <div id="dynamic-h1" className="h1">
            SOMEONE CAPABLE OF BUILDING DYNAMIC WEBSITES
          </div>
        </div>
        <div id="dynamic-col" className="col-lg-8">
          <div id="carousel" className="carousel-container">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Carousel image ${index + 1}`}
                className={`carousel-image ${
                  index === currentImageIndex ? 'active' : ''
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dynamic;