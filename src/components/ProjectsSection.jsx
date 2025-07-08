import { ArrowRight, ExternalLink, Github } from "lucide-react";

const Projects = [
    {
        id:1,
        title: "Truedote",
        description: "Truedote is an AI-powered healthcare platform revolutionizing diagnostics with fast, accurate, and accessible tools for hospitals and clinics.",
        image:"/Projects/Project1.png",
        tags: ["React"],
        demoURL: "https://truedote.magical.africa/",
        githubUrl:"https://github.com/Lonzieeee/truedote",
    },

    {
        id:2,
        title: "GridStreak",
        description: "GridStreak is a clean energy platform using thermal brick technology to convert plastic waste into renewable energy storage, helping stabilize power grids ",
        image:"/Projects/Project2.png",
        tags: ["React"],
        demoURL: "https://www.gridstreak.com/",
        githubUrl:"https://github.com/Lonzieeee/GridStreak",
    },

    {
        id:3,
        title: "To Do",
        description: "A minimal and responsive To-Do web app that lets users add, edit, and manage tasks with a clean, intuitive interface.",
        image:"/Projects/Project3.png",
        tags: ["Html", "Css"],
        demoURL: "https://to-do-ten-eta.vercel.app/",
        githubUrl:"https://github.com/Lonzieeee/To-Do",
    },

]

export const ProjectsSection = () => {
    return<section id="projects" className="py-24 px-24 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects </span></h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here are some of my recent projects.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Projects.map((Project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                          <img src={Project.image} alt={Project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                           
                        </div>

                        <div className="p-6 text-left">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {Project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondart-foreground">
    {tag}                                    
                                    </span>
                                ))}

                            </div>
                      

    <h3 className="text-xl font-semibold mb-1">{Project.title}</h3>  
    <p className="text-muted-foreground text-sm mb-4">{Project.description}</p>  

<div className="flex justify-between items-center">
    <div className="flex space-x-3">
        <a href ={Project.demoURL}
        target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink size={20} />
       
        </a>
         <a href ={Project.githubUrl}
             target="_blank"className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size={20}/></a>
        
    </div> 
     </div>

    <div>

    </div>
</div>
                    </div>
                ))}
            </div>

<div className="text-center mt-12">
    <a  className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank"href="https://github.com/Lonzieeee">Check My Github <ArrowRight size={16}/></a>
</div>

        </div>
    </section>;
};