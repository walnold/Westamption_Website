import React from "react";
import "./ServiceList.css";
import { services } from "./Services.js";

const ServicesList = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-flex">
        {services.map((service, index) => (
          <div className="service-card fade-in-on-scroll" key={index}>
            <img
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
