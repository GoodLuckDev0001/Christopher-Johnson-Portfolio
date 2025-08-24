import { Card, CardContent } from "@/components/ui/card";
import { Code2, Smartphone, Globe, Database } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Mobile First",
      description: "Expert in Flutter & React Native with 9+ published apps on both Play Store and App Store"
    },
    {
      icon: <Code2 className="w-8 h-8 text-accent" />,
      title: "Full Stack",
      description: "Comprehensive expertise across frontend, backend, and database technologies"
    },
    {
      icon: <Globe className="w-8 h-8 text-tech-green" />,
      title: "Modern Web",
      description: "Proficient in React, Vue, Angular, Next.js for creating responsive web applications"
    },
    {
      icon: <Database className="w-8 h-8 text-tech-purple" />,
      title: "Scalable Solutions",
      description: "Building robust backends with PHP, Node.js, and various database systems"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A passionate developer dedicated to creating innovative solutions that make a difference
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-bold mb-6 text-foreground">My Journey</h3>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a versatile developer who bridges the gap between innovative mobile solutions and robust web applications.
                  With expertise spanning multiple platforms and technologies, I bring ideas to life through clean, efficient code.
                </p>
                <p>
                  My passion lies in creating user-centric applications that not only look great but perform exceptionally.
                  From concept to deployment, I focus on delivering solutions that exceed expectations and drive real business value.
                </p>
                <p>
                  Having published 9+ applications across major app stores and contributed to high-profile web projects,
                  I understand the importance of scalable, maintainable code that stands the test of time.
                </p>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <Card
                    key={index}
                    className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 flex justify-center">
                        {highlight.icon}
                      </div>
                      <h4 className="font-bold text-lg mb-2 text-foreground">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up">
            {[
              { number: "9", label: "Apps Published" },
              { number: "3", label: "Years Experience" },
              { number: "30", label: "Projects Completed" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;