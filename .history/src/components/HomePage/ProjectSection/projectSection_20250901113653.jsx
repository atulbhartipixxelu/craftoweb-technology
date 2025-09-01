import React from "react";
import Styles from "../ProjectSection/projectSection.module.css";
import {Framer, Coinbase, atlassion} from "@Images/index";
const CallToAction = () => {

    const logos = [
        <image src={Framer} alt='Framer' />,
        <image src={Coinbase}alt='Framer' />,
        <image src={atlassion} alt='Framer' />,
        <image src={Framer} alt='Framer' />,
        <image src={Framer} alt='Framer' />,
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
                        <image key={index} src={logo.src} alt={logo.alt} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
