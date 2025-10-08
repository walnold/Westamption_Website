import React from "react";
import "./About.css";
import { reasons } from "./reasons";
import Accordion from "../../Accordian/Accordian";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* ===== Headings ===== */}
        <div className="about-header">
          <h3 className="about-subtitle">Who We Are</h3>
          <h2 className="about-title">About Us</h2>
          <p className="about-description">
            Founded in 2017, we specialize in providing multinational companies
            with tailored solutions to navigate the complexities of dynamic
            markets, ensuring successful and sustainable growth.
          </p>
        </div>

        {/* ===== Core Values ===== */}
        <div className="about-block">
          <h3 className="block-title">Our Core Values</h3>
          <p>
            At Westampton Solutions Limited, our core values are accuracy,
            impartiality, and transparency. We measure our success by the
            success of our clients. Our commitment is to deliver customized
            solutions that meet your unique needs and exceed your expectations.
            We prioritize building solid, collaborative relationships based on
            mutual trust, respect, and open communication.
          </p>
        </div>

        {/* ===== Overview ===== */}
        <div className="about-block">
          <h3 className="block-title">Overview</h3>
          <p>
            Westampton Solutions Limited leverages proven technology to enhance
            business solutions, making us your trusted partner for navigating
            the Kenyan and sub-Saharan African markets.
          </p>
        </div>

        {/* ===== Why Choose Us ===== */}
        <div className="about-block">
          <h3 className="block-title">Why Choose Us</h3>
          <p>
            We combine local expertise with global standards to deliver
            exceptional value to our clients. Our dedicated team is committed to
            guiding you through the intricacies of the Kenyan and sub-Saharan
            markets, providing strategic insights and practical support.
          </p>

          {/* Accordion */}
          <div className="reasons-wrapper">
            <Accordion accordionData={reasons} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
