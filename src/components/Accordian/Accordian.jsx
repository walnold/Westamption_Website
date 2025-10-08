// src/components/Accordion/Accordion.jsx
import React, { useState } from "react";

import "./Accordian.css";

const Accordion = ({ accordionData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  console.log("Accordion loaded");

  return (
    <div className="accordion-container">
      {accordionData.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className={`accordion-header ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => toggleAccordion(index)}
          >
            {item.header}
            <span className="arrow">{activeIndex === index ? "▲" : "▼"}</span>
          </button>

          <div
            className={`accordion-content ${
              activeIndex === index ? "open" : ""
            }`}
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
