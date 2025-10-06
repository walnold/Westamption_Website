import React from "react";
import { expartise } from "./Expartise";
import "./ExpartiseList.css";

const ExpertiseList = () => {
  return (
    <div className="services-container">
      {expartise.map((e, index) => (
        <div key={index} className="service-card">
          <h3>{e.header}</h3>
          <p>{e.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ExpertiseList;
