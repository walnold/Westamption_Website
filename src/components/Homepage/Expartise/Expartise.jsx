import React from "react";
import "./Expartise.css";
import ExpartiseList from "./ExpertiseList.jsx";

const Expartise = () => {
  return (
    <section className="container">
      <div className="expartise content">
        <h2>Our Expartise</h2>
        <div className="services">
          
          <ExpartiseList />
        </div>
      </div>
    </section>
  );
};

export default Expartise;
