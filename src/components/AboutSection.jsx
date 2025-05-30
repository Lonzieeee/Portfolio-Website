import { Code, User } from "lucide-react";
import { Briefcase } from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-24 relative">

<div className="container mx-auto max-w-5xl">
    <h2 className="text-3xl md:texttext-4xl font-bold mb-12 text-center">
        About<span className="text-primary"> Me</span>
    </h2>

    <div className="grid gri-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">

<h3 className="text-2xl font-semibold">Passionate Web Developer and UI/UX designer</h3>
<p className="text-muted-foreground">I'm a Front-End Developer and UI/UX Designer with over 1 year of experience creating visually appealing, user-centered websites and interfaces. I specialize in translating complex ideas into clean, responsive designs that prioritize usability and aesthetics. </p>
<p className="text-muted-foreground">With a strong foundation in HTML, CSS, JavaScript, and modern frameworks, I’m passionate about building digital experiences that not only look great but also function seamlessly across all devices</p>


<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">

<a href="#contact" className="cosmic-button">
    Get In Touch
</a>


<a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
   Download CV
</a>



</div>

        </div>

        <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary"/>
                    
                    </div>
                    <div className="text-left ">
                        <h4 className="font-semibold text-lg"> Web Development</h4>
                        <p className="text-muted-foreground">Creating responsive websites and web applications with modern frameworks.</p>
                    </div>

                </div>
            </div>

             <div className="gradient-border p-6 card-hover">

<div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary"/>
                    
                    </div>
                    <div className="text-left ">
                        <h4 className="font-semibold text-lg"> UI/UX Design</h4>
                        <p className="text-muted-foreground">Designing intuitive user interfaces and seamless user experiences.</p>
                    </div>

                </div>




             </div>


 <div className="gradient-border p-6 card-hover">


<div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary"/>
                    
                    </div>
                    <div className="text-left ">
                        <h4 className="font-semibold text-lg"> Work Experience</h4>
                        <p className="text-muted-foreground">Crafting real-world solutions through code and design one project at a time.</p>
                    </div>

                </div>

 </div>


        </div>
    </div>

</div>



    </section>;
}