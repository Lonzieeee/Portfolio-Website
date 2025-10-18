import { useState } from "react";
import styles from "./SkillsSection.module.css";

const skills = [
    // Core Technical Skills
    { name: "HTML/CSS", Level: "95", category: "technical"},
    { name: "JavaScript", Level: "90", category: "technical"},
    { name: "React.js", Level: "85", category: "technical"},
    { name: "CSS Modules", Level: "90", category: "technical"},
    { name: "Git & GitHub", Level: "85", category: "technical"},
    { name: "MySQL", Level: "75", category: "technical"},
    { name: "Firebase", Level: "80", category: "technical"},
    { name: "Flutter & Dart", Level: "70", category: "technical"},

    // Networking Skills
    { name: "CCNA 1 Fundamentals", Level: "85", category: "networking"},
    { name: "CCNA 2 Routing", Level: "85", category: "networking"},
    { name: "CCNA 3 Switching", Level: "85", category: "networking"},
    { name: "Network Protocols", Level: "80", category: "networking"},
    { name: "System Architecture", Level: "75", category: "networking"},

    // Design Skills
    { name: "Figma", Level: "90", category: "design"},
    { name: "UI Prototyping", Level: "85", category: "design"},
    { name: "Wireframing", Level: "90", category: "design"},
    { name: "UX Research", Level: "80", category: "design"},
    { name: "Design Thinking", Level: "85", category: "design"},

    // Soft Skills
    { name: "Communication", Level: "95", category: "soft"},
    { name: "Team Collaboration", Level: "90", category: "soft"},
    { name: "Problem Solving", Level: "90", category: "soft"},
    { name: "Time Management", Level: "85", category: "soft"},
    { name: "Adaptability", Level: "90", category: "soft"},
];

const categories = ["all", "technical", "networking", "design", "soft"]



export const SkillsSection = () => { 
    const [activeCategory, setAciveCategory] = useState("all");
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory );

    return <section id="skills" className={styles.skills}>

<div className={styles.container}>
    <h2 className={styles.title}>
        My <span className={styles.primaryText}> Skills</span>
    </h2>

    <div className={styles.filterWrapper}>
        {categories.map((category, key) =>(
            <button key={key} 
            onClick={() => setAciveCategory(category)}
            
            
            className={`${styles.filterButton} ${activeCategory === category ? styles.active : styles.inactive}`}>
                {category}
            </button>

        ))}
    </div>





<div className={styles.grid}>
    
   {filteredSkills.map((skill, key) => (
    <div key={key} className={styles.skillCard}>


<div className={styles.skillHeader}>

<h3 className={styles.skillName}> {skill.name}</h3>
    </div>

    <div className={styles.progressBarOuter}>

    <div className={styles.progressBarInner}
    style={{width: skill.Level + "%"}}/>
        </div>

        <div className={styles.progressText}>
            <span className={styles.progressPercentage}>{skill.Level}%</span>
        </div>

        </div>

   )
)}

</div>


</div>


    </section>;
};