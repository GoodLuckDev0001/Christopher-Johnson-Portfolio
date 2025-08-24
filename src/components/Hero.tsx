import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-muted/20">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 text-center z-10 relative">
        <div className="animate-fade-in-up max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                Christopher Johnson
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl text-muted-foreground mb-6 font-light">
              Mobile App Developer & Full Stack Engineer
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
                Passionate about crafting exceptional mobile and web experiences with cutting-edge technologies.
              </p>
              <p className="text-base md:text-lg text-muted-foreground/80 mb-8 leading-relaxed">
                Specialized in <span className="text-primary font-medium">Flutter</span>, <span className="text-tech-green font-medium">React Native</span>, and modern web frameworks. 
                Creating performant, user-centric applications that bridge the gap between innovative design and robust functionality.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105"
              size="lg"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              size="lg"
              className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-3 text-lg transition-all duration-300 hover:scale-105"
            >
              Let's Connect
            </Button>
          </div>


          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('about')}
              className="hover:text-primary transition-colors"
            >
              <ArrowDown size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;