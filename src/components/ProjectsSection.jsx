import { useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import styles from "./ProjectsSection.module.css";

const Projects = [
    {
        id:1,
        title: "Naturecent",
        description: "A wellness brand dedicated to harnessing the power of nature through premium organic oils for skin, hair, and body care. Each oil is cold-pressed, pure, and sustainably sourced to nourish, hydrate, and rejuvenate naturally.",
        media: "/Projects/Naturecent.webm",
        fallbackImage: "/Projects/Naturecentfallback.png",
        mediaType: "video",
        tags: ["React", "E-commerce", "Wellness"],
        demoURL: "https://naturecent.com/",
    },

    {
        id:2,
        title: "GridStreak",
        description: "A clean-energy company that focuses on converting plastic waste into carbon-negative thermal energy storage systems. They develop modular 'thermal brick' technology that stores heat generated from recycled plastic, designed to provide stable, distributed energy solutions for applications such as grid stabilization, resilient healthcare, and cold-chain systems.",
        media: "/Projects/gridstreak.webm",
        fallbackImage: "/Projects/gridstreak.png",
        mediaType: "video",
        tags: ["React", "Clean Energy", "Sustainability"],
        demoURL: "https://www.gridstreak.com/",
    },

    {
        id:3,
        title: "PapCon Kenya",
        description: "One of Kenya's leading manufacturers and suppliers of high-quality paper and stationery products. Established in 1971, the company specializes in producing office and school supplies such as files, envelopes, exercise books, and thermal rolls, as well as offering commercial printing and customized branding services.",
        media: "/Projects/papconkenya.webm",
        fallbackImage: "/Projects/papconkenyafallback.png",
        mediaType: "video",
        tags: ["React", "E-commerce", "Manufacturing"],
        demoURL: "https://papconkenya.magical.africa/",
    },

]

export const ProjectsSection = () => {
    const [videoErrors, setVideoErrors] = useState({});

    const handleVideoError = (projectId) => {
        setVideoErrors(prev => ({ ...prev, [projectId]: true }));
    };

    return<section id="projects" className={styles.projects}>
        <div className={styles.container}>
            <h2 className={styles.title}> Featured <span className={styles.primaryText}> Projects </span></h2>
            <p className={styles.subtitle}>Here are some of my recent projects.</p>

            <div className={styles.grid}>
                {Projects.map((Project, key) => (
                    <div key={key} className={styles.projectCard}>
                        <div className={styles.imageWrapper}>
                          {Project.mediaType === "video" && !videoErrors[Project.id] ? (
                            <video 
                              src={Project.media} 
                              className={styles.projectImage}
                              autoPlay
                              loop
                              muted
                              playsInline
                              onError={() => handleVideoError(Project.id)}
                            />
                          ) : (
                            <img 
                              src={Project.mediaType === "video" && Project.fallbackImage ? Project.fallbackImage : Project.media} 
                              alt={Project.title} 
                              className={styles.projectImage} 
                            />
                          )}
                        </div>

                        <div className={styles.cardContent}>
                            <div className={styles.tagsList}>
                                {Project.tags.map((tag) => (
                                    <span className={styles.tag} key={tag}>
    {tag}                                    
                                    </span>
                                ))}

                            </div>
                      

    <h3 className={styles.projectTitle}>{Project.title}</h3>  
    <p className={styles.projectDescription}>{Project.description}</p>  

<div className={styles.linksWrapper}>
    <div className={styles.links}>
        <a href ={Project.demoURL}
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.link}
        aria-label={`Visit ${Project.title} website`}>
          <ExternalLink size={20} />
        </a>
        {Project.githubUrl && (
         <a href ={Project.githubUrl}
             target="_blank"
             rel="noopener noreferrer"
             className={styles.link}
             aria-label={`View ${Project.title} on GitHub`}>
            <Github size={20}/>
          </a>
        )}
    </div> 
     </div>

    <div>

    </div>
</div>
                    </div>
                ))}
            </div>

<div className={styles.ctaWrapper}>
    <a  className={styles.githubButton} target="_blank"href="https://github.com/Lonzieeee">Check My Github <ArrowRight size={16}/></a>
</div>

        </div>
    </section>;
};