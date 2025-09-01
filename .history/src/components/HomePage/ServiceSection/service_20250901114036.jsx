import React from 'react';
import Styles from '../ServiceSection/service.module.css';
import { ArrowUpRight } from "lucide-react";


// ✅ Import all your service images
import { UIUX, fullstack, eCommerce, web, wordpress, shopify } from '@Images/index';

const services = [
    { img: UIUX, title: "Web Development", desc: "Visual communication matters. With our services, we cater to an interface that can engage with the users and drive more traffic." },
    { img: fullstack, title: "FullStack Development", desc: "Custom-designed mobile app solution to engross excellent browsing experience and optimize the viewing experience.", highlight: true },
    { img: eCommerce, title: "Custom eCommerce Development", desc: "Our experts develop and design websites that provide complete functionality for your business and craft websites that draw better conversions as well." },
    { img: web, title: "Web, UI/UX Design", desc: "With the power of web designing, we create a site that articulates a voice of the brand and builds a strong presence over the web to gather sales that convert." },
    { img: wordpress, title: "WordPress Development", desc: "Our skilled developers assist with customization, designing, and plugin development to build powerful websites with advanced features." },
    { img: shopify, title: "Shopify Development", desc: "We are aligned to create Shopify development that drives more sales. The structured sites are fully secured and sturdy." },
];

const techs = [
    "PHP", "Laravel", "WHMCS", "Shopify", "Magento", "WordPress",
    "AWS", "NodeJs", "AngularJs", "React", "iOS", "Android",
    "UI/UX"
];

function Service() {
    return (
        <div className={Styles.ServiceSection}>
            <div className="container">
                <div className={Styles.free}>
                    <div className={Styles.everything}>
                        <h1>
                            Everything your website <br />
                            Needs <span>for success</span>
                        </h1>
                        <p>
                            Turn to our services and consulting solutions and make your business
                            a part of the digital transformation.
                        </p>
                    </div>


                    {/* ---------------- Services Section ---------------- */}
                    <section className={Styles.services}>
                        <div className={Styles["services-grid"]}>
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className={`${Styles.card} ${service.highlight ? Styles.highlight : ""}`}
                                >
                                    <div className={Styles.icon}>
                                        <img src={service.img} alt={service.title}  />
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                    <div className={Styles["read-more"]}>
                                        <span>Read more</span>
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>


                {/* ----------------TECH---------------- */}


                <div className={Styles.wrapper}>
                    <div className={Styles.techList}>
                        {techs.map((tech, index) => (
                            <span key={index} className={Styles.techItem}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Service;
