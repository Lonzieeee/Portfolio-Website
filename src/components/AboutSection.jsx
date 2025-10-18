import { Code, User, Network } from "lucide-react";
import styles from "./AboutSection.module.css";

export const AboutSection = () => {
    return <section id="about" className={styles.about}>

<div className={styles.container}>
    <h2 className={styles.title}>
        About<span className={styles.primaryText}> Me</span>
    </h2>

    <div className={styles.grid}>
        <div className={styles.leftColumn}>

<h3 className={styles.subtitle}>Developer, Designer & Network Enthusiast</h3>
<p className={styles.description}>I'm a Front-End Developer and UI/UX Designer with a unique blend of creative design skills and technical networking knowledge (CCNA 1–3 Certified). With over a year of hands-on experience, I specialize in creating modern web interfaces using HTML, CSS, JavaScript, and React, while understanding how data flows and systems communicate beneath the surface.</p>
<p className={styles.description}>I've expanded into mobile app development using Flutter and Dart, and work with databases like MySQL and Firebase. My networking background gives me a deeper appreciation for building scalable, efficient applications that truly understand the infrastructure they run on.</p>
<p className={styles.description}>Whether it's a bold new layout, a smooth user journey, or ensuring seamless connectivity, I combine technical precision with creative design to deliver digital experiences that work beautifully across all devices.</p>


<div className={styles.ctaWrapper}>

<a href="#contact" className={styles.primaryButton}>
    Get In Touch
</a>


<a href="" className={styles.secondaryButton}>
   Download CV
</a>



</div>

        </div>

        <div className={styles.rightColumn}>
            <div className={styles.card}>
                <div className={styles.cardContent}>
                    <div className={styles.iconWrapper}>
                    <Code className={styles.icon}/>
                    
                    </div>
                    <div className={styles.cardText}>
                        <h4 className={styles.cardTitle}> Software Development</h4>
                        <p className={styles.cardDescription}>Creating responsive websites and Mobile applications with modern frameworks.</p>
                    </div>

                </div>
            </div>

             <div className={styles.card}>

<div className={styles.cardContent}>
                    <div className={styles.iconWrapper}>
                    <User className={styles.icon}/>
                    
                    </div>
                    <div className={styles.cardText}>
                        <h4 className={styles.cardTitle}> UI/UX Design</h4>
                        <p className={styles.cardDescription}>Designing intuitive user interfaces and seamless user experiences.</p>
                    </div>

                </div>




             </div>


 <div className={styles.card}>


<div className={styles.cardContent}>
                    <div className={styles.iconWrapper}>
                    <Network className={styles.icon}/>
                    
                    </div>
                    <div className={styles.cardText}>
                        <h4 className={styles.cardTitle}> Network Foundation</h4>
                        <p className={styles.cardDescription}>CCNA 1–3 Certified with deep understanding of networking protocols and system architecture.</p>
                    </div>

                </div>

 </div>


        </div>
    </div>

</div>



    </section>;
}