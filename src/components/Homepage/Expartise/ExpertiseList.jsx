import React from "react";
import { expartiseItems } from "./Expartise.js";
import "./ExpartiseList.css";

const ExpertiseList = () => {
  console.log("inside list");
  console.log("Full expartise array:", expartiseItems);

  // return (
  //   <div className="services-container">
  //     {expartiseItems.map((item, index) => (
  //       <div key={index} className="service-card">
  //         <h3>{item.header}</h3>
  //         <p>{item.content}</p>
  //       </div>
  //     ))}
  //   </div>
  // );

 

  return(
      <div className="services-container">
        
        {expartiseItems.map((item,index)=> (
        <div key={index} className="service-item">
          <h3>{item.header}</h3>
          <p>{item.content}</p>
        </div>
        )
         
        )
      }
      </div>
  );
};

export default ExpertiseList;
