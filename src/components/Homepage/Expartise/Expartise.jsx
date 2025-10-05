import React from "react";
import "./Expartise.css";
import ServicesList from "./ServiceList";


const Expartise = () => {
  return (
    <section className="container">
      <div className="expartise content">
        <h2>Our Expartise</h2>
        <div className="services">
            <ServicesList />
        </div>
      </div>
    </section>
  );
};

export default Expartise;
