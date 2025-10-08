import React, { useEffect, useRef, useState } from "react";
import "./ServiceList.css";
import { services } from "./Services.js";

/* ✅ Lazy-loading image component */
const LazyImage = ({ src, alt, className }) => {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "50px" } // start loading a bit before it appears
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="} 
      /* tiny transparent gif placeholder */
      alt={alt}
      className={`${className} ${isVisible ? "loaded" : "loading"}`}
      loading="lazy"
    />
  );
};

const ServicesList = () => {
  /* ✅ Fade-in animation for cards */
  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-on-scroll");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-flex">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            <LazyImage
              src={service.image}
              alt={service.title}
              className="service-img"
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesList;
