import { ArrowDown } from "lucide-react"
import styles from "./HeroSection.module.css"

export const HeroSection = () => {
    return <section id="hero" className={styles.hero}>

<div className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>
            <span className={styles.fadeIn}> Hi, I'm</span>
            <span className={styles.fadeInDelay1}> Lorna</span>
            <span className={styles.fadeInDelay2}> Wanderi</span>

        </h1>

        <p className={styles.subtitle}>
            A passionate Front-End Developer and UI/UX Designer with a strong foundation in networking (CCNA 1–3). I love creating visually appealing, responsive, and user-centered interfaces while understanding how systems connect and communicate at a deeper level.
        </p>
        <p className={styles.subtitle2}>
            I combine technical precision with creative design to build digital experiences that feel seamless and engaging.
        </p>
        <div className={styles.ctaWrapper}>
            <a href= "#projects" className={styles.ctaButton}>
               View My Work 
            </a>
        </div>


    </div>
</div>

<div className={styles.scrollIndicator}>
<span className={styles.scrollText}> Scroll </span>
<ArrowDown className={styles.scrollIcon} />

</div>


    </section>
    
}