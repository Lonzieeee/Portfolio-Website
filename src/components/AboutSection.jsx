import { Code, User } from "lucide-react";
import { Briefcase } from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-24 relative">

<div className="container mx-auto max-w-5xl">
    <h2 className="text-3xl md:texttext-4xl font-bold mb-12 text-center">
        About<span className="text-primary"> Me</span>
    </h2>

    <div className="grid gri-cols-1 md:grid-cols-2 gap-12 items-centre">
        <div className="space-y-6 text-left">

<h3 className="text-2xl font-semibold">Passionate  Developer and UI/UX designer</h3>
<p className="text-muted-foreground">I'm a Front-End Developer and UI/UX Designer with a passion for building clean, responsive, and user-focused digital experiences. With over a year of hands-on experience, I specialize in creating modern web interfaces using HTML,CSS,JavaScript, and React and I've recently expanded into mobile app development using Flutter and Dart. </p>
<p className="text-muted-foreground">From websites to mobile apps,I love turning complex ideas into intuitive, visually appealing designs that work seamlessly across all screen sizes. Whether it's a bold new layout or a smooth user journey, I focus on usability and performance.</p>


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
                        <h4 className="font-semibold text-lg"> Software Development</h4>
                        <p className="text-muted-foreground">Creating responsive websites and Mobile applications with modern frameworks.</p>
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