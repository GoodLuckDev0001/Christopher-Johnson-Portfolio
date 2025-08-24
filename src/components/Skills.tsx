import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Globe, Code, Database, Palette, Server } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      skills: ["Flutter", "React Native", "Swift", "Kotlin"],
      color: "primary",
      description: "Creating beautiful, performant mobile applications for iOS and Android"
    },
    {
      title: "Frontend Development", 
      icon: <Palette className="w-8 h-8 text-tech-green" />,
      skills: ["React.js", "Vue.js", "Angular.js", "Next.js", "Nuxt.js", "HTML", "CSS", "JavaScript"],
      color: "tech-green",
      description: "Building responsive, user-friendly web interfaces with modern frameworks"
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8 text-accent" />,
      skills: ["PHP", "Node.js", "Laravel"],
      color: "accent",
      description: "Developing robust server-side applications and RESTful APIs"
    },
    {
      title: "Databases & Cloud",
      icon: <Database className="w-8 h-8 text-tech-purple" />,
      skills: ["MySQL", "MongoDB", "Firebase", "Supabase"],
      color: "tech-purple",
      description: "Managing data with scalable database solutions and cloud services"
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive skills across the full development stack, from mobile apps to scalable web applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 animate-fade-in-up hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-4 text-2xl mb-3">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    {category.title}
                  </span>
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {category.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-primary/20 transition-all duration-300 hover:scale-105 px-3 py-1 text-sm font-medium border border-border/30 hover:border-primary/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Proficiency */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            Technology Proficiency
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { tech: "Flutter", level: 95 },
              { tech: "React Native", level: 93 },
              { tech: "React.js", level: 92 },
              { tech: "Node.js", level: 90 },
              { tech: "Vue.js", level: 91 },
              { tech: "Laravel", level: 90 },
              { tech: "Firebase", level: 94 },
              { tech: "MongoDB", level: 90 }
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-muted/20"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="transparent"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-primary"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="transparent"
                      strokeDasharray={`${item.level}, 100`}
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold">{item.level}%</span>
                  </div>
                </div>
                <p className="text-sm font-medium">{item.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;