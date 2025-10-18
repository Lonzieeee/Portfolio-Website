import { Navbar } from "../components/Navbar"

import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"
import styles from "./Home.module.css"


export const Home = () => {
    return <div className={styles.home}>
{/* Theme toogle */}
<ThemeToggle />
{/* Background */}
<StarBackground />
{/* Navbar */}
<Navbar />
{/* Main content */}

<main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
</main>



{/* Footer */}


<Footer />



    </div>
}