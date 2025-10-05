import React from "react";
import { services } from "./services.js";
import "./ServicesList.css";

const ServicesList = () => {
  return (
    <div className="services-container">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <h3>{service.header}</h3>
          <p>{service.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;
