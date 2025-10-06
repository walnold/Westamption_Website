import React from "react";
import "./HomePage.css";
import Overview from "../components/Homepage/Overview/Overview";
import ServicesList from "../components/Homepage/Servies/ServiceList";
import Expartise from "../components/Homepage/Expartise/Expartise.jsx";

const HomePage = () => {
  return (
    <div className="home">
      {/* hero */}
      <div className="welcome-hero">
        <h2 className="fade-in">Welcome to</h2>
        <h1 className=" fade-delay-2">WESTAMPTON SOLUTIONS</h1>
        <p className=" fade-delay-4">
          Your premier partner for market entry and business expansion in Kenya
          and the broader sub-Saharan Africa region.
        </p>
      </div>

      {/* overview */}
      <section className="container">
        <Overview />
        <Expartise />
        <ServicesList/>  
      </section>
    </div>
  );
};

export default HomePage;
