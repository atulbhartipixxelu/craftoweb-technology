import React from "react";
import CountUp from "react-countup";
import Styles from '../StatsSection/statsSection.module.css';



const StatsSection = () => {
    return (

        <section className={Styles.CountUp}>
            {/* Falling stripes background */}
            <div class={Styles.background}></div>

            <div className="container">
                <div className={Styles.statsSection}>
                    <div className={Styles.statsLeft}>
                        <div className={Styles.statItem}>
                            <h2>
                                <CountUp end={11} duration={2} />+
                            </h2>
                            <p>
                                Years crafting <br /> digital experiences
                            </p>
                        </div>
                        <div className={Styles.statItem}>
                            <h2>
                                <CountUp end={100} duration={2} />%
                            </h2>
                            <p>
                                Client <br /> Satisfaction Guarantee
                            </p>
                        </div>
                        <div className={Styles.statItem}>
                            <h2>
                                <CountUp end={25} duration={2} />+
                            </h2>
                            <p>
                                Designers & <br /> Developers
                            </p>
                        </div>
                        <div className={Styles.statItem}>
                            <h2>
                                <CountUp end={1500} duration={3} separator="," />+
                            </h2>
                            <p>
                                Projects <br /> Delivered
                            </p>
                        </div>
                    </div>

                    <div className={Styles.statsRight}>
                        <h3>
                            Since 2014, Pixxelu is dedicatedly providing technology-specific
                            services clients across the globe. Regardless of the business size,
                            our team is experienced enough to develop fully functional and
                            innovative solutions.
                        </h3>
                        <p>
                            We achieve this through a wide range of products and services,
                            including an automation suite, products targeted specifically at
                            digitizing your tax experience, and a digital signature solution built
                            on blockchain. Pixxelu’s main goal is to offer comprehensive solutions
                            for clients with the most urgent business requirements.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
