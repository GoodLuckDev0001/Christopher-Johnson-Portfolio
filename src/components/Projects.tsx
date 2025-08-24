import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Smartphone, Globe, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      category: "Flutter Applications",
      tech: "Flutter",
      icon: <Smartphone className="w-6 h-6" />,
      color: "primary",
      description: "Cross-platform mobile applications built with Flutter framework",
      apps: [
        {
          name: "Boutique User App",
          url: "https://play.google.com/store/apps/details?id=com.boutique.user",
          platform: "Google Play Store",
          description: "Fashion e-commerce mobile application with intuitive shopping experience"
        },
        {
          name: "Helpbit Homes",
          url: "https://play.google.com/store/apps/details?id=main.com.helpbithomes",
          platform: "Google Play Store",
          description: "Real estate platform connecting buyers with property listings"
        },
        {
          name: "Helpbit Home",
          url: "https://apps.apple.com/us/app/helpbit-home/id6462407327",
          platform: "Apple App Store",
          description: "iOS version of the comprehensive real estate solution"
        },
        {
          name: "Local Wreckers",
          url: "https://play.google.com/store/apps/details?id=main.com.local_wreckers",
          platform: "Google Play Store",
          description: "Auto parts marketplace connecting sellers and buyers"
        },
        {
          name: "LocalWreckers",
          url: "https://apps.apple.com/us/app/localwreckers/id6483807518",
          platform: "Apple App Store",
          description: "iOS auto parts trading platform with location-based services"
        },
        {
          name: "Cinerama Maps",
          url: "https://play.google.com/store/apps/details?id=main.com.cineramamaps",
          platform: "Google Play Store",
          description: "Interactive cinema location finder with showtimes"
        }
      ]
    },
    {
      category: "React Native Apps",
      tech: "React Native",
      icon: <Code className="w-6 h-6" />,
      color: "tech-green",
      description: "Native mobile applications using React Native framework",
      apps: [
        {
          name: "UzTrip",
          url: "https://play.google.com/store/apps/details?id=com.uztrip.application&hl=en&gl=US",
          platform: "Google Play Store",
          description: "Comprehensive travel booking platform for Uzbekistan tourism"
        },
        {
          name: "BookWithStar",
          url: "https://play.google.com/store/apps/details?id=com.bookwithstar.app&hl=en&gl=US",
          platform: "Google Play Store",
          description: "Premium booking service with loyalty rewards system"
        },
        {
          name: "SirMaya External",
          url: "https://play.google.com/store/apps/details?id=com.sirmaya.external",
          platform: "Google Play Store",
          description: "External service management application for business operations"
        }
      ]
    },
    {
      category: "Web Applications",
      tech: "MERN / Next.js",
      icon: <Globe className="w-6 h-6" />,
      color: "accent",
      description: "Full-stack web applications with modern frameworks",
      apps: [
        {
          name: "AVIS India",
          url: "https://www.avis.co.in/",
          platform: "MERN Stack",
          description: "Car rental platform with booking management and fleet tracking"
        },
        {
          name: "Huntington Gateway",
          url: "https://www.huntingtongateway.com/",
          platform: "MERN Stack",
          description: "Real estate gateway with property management system"
        },
        {
          name: "PUMA US",
          url: "https://us.puma.com/us/en",
          platform: "Next.js",
          description: "E-commerce platform for athletic wear and lifestyle products"
        }
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-gradient-to-br from-muted/10 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Published applications and web platforms built with cutting-edge technologies, showcasing expertise across mobile and web development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((category, categoryIndex) => (
            <Card
              key={categoryIndex}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 animate-fade-in-up group hover:scale-105 flex flex-col h-[600px]"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader className="pb-4 flex-shrink-0">
                <div className="flex items-center gap-3 mb-3">
                  <div className="group-hover:scale-110 transition-transform duration-300 text-primary">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                </div>
                <Badge className={`w-fit bg-${category.color}/10 text-${category.color} border-${category.color}/20 hover:bg-${category.color}/20 transition-colors`}>
                  {category.tech}
                </Badge>
                <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                  {category.description}
                </p>
              </CardHeader>
              <CardContent className="flex-1 overflow-hidden">
                <div className="space-y-4 h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-primary scrollbar-smooth">
                  {category.apps.map((app, appIndex) => (
                    <div
                      key={appIndex}
                      className="group/app p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-all duration-300 border border-border/30 hover:border-primary/20 flex-shrink-0"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground group-hover/app:text-primary transition-colors">
                            {app.name}
                          </h4>
                          <p className="text-xs text-muted-foreground mb-2">{app.platform}</p>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          asChild
                          className="hover:text-primary hover:bg-primary/10 transition-colors"
                        >
                          <a href={app.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground/80 leading-relaxed">
                        {app.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Statistics */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { number: "9+", label: "Apps Published" },
              { number: "6", label: "Platforms" },
              { number: "100K+", label: "Downloads" },
              { number: "4.8★", label: "Average Rating" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl font-bold text-primary mb-2">
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

export default Projects;