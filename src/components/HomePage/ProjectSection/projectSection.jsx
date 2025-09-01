import React from "react";
import Styles from "../ProjectSection/projectSection.module.css";
import { Framer, Coinbase, Atlassion, Medium, Tinder } from "@Images/index";

const CallToAction = () => {
  // Store as objects, not JSX
  const logos = [
    { src: Framer, alt: "Framer" },
    { src: Coinbase, alt: "Coinbase" },
    { src: Atlassion, alt: "Atlassian" },
    { src: Medium, alt: "Medium" },
    { src: Tinder, alt: "Tinder" },
  ];

  return (
    <section className={Styles.ctaSection}>
      <div className="container">
        <h2 className={Styles.heading}>
          Have Project <br /> in Mind? <span>Let’s Talk</span>
        </h2>

        <button className={Styles.ctaButton}>Book a Call →</button>

        <p className={Styles.subtext}>
          OUR CLIENTS ARE BACKED BY TOP INVESTORS
        </p>

        <div className={Styles.logoRow}>
          {logos.map((logo, index) => (
            <img key={index} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
