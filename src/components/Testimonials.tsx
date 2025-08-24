import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, Boutique Fashion",
      company: "Fashion Forward Inc.",
      rating: 5,
      text: "Christoper delivered an exceptional Flutter app that exceeded our expectations. The user experience is seamless, and our customers love the intuitive design. His attention to detail and professional communication made the entire process smooth.",
      project: "Boutique User App"
    },
    {
      name: "Michael Chen",
      role: "CTO, Real Estate",
      company: "Helpbit Technologies",
      rating: 5,
      text: "Outstanding work on both our mobile applications. Christoper's expertise in Flutter development is remarkable. He delivered high-quality code, met all deadlines, and provided excellent post-launch support. Highly recommended!",
      project: "Helpbit Homes & Home Apps"
    },
    {
      name: "David Rodriguez",
      role: "Product Manager",
      company: "Auto Solutions Group",
      rating: 5,
      text: "Working with Christoper was a game-changer for our business. He transformed our concept into a beautiful, functional app that our users absolutely love. His React Native skills are top-notch, and he brings valuable insights to every project.",
      project: "Local Wreckers Platform"
    },
    {
      name: "Emily Watson",
      role: "Startup Founder",
      company: "Travel Tech Innovations",
      rating: 5,
      text: "Christoper's full-stack development skills are impressive. He built our entire web platform using MERN stack with exceptional performance and scalability. His code quality is excellent, and he's always available for support.",
      project: "UzTrip Travel Platform"
    },
    {
      name: "James Liu",
      role: "Technical Director",
      company: "Enterprise Solutions",
      rating: 5,
      text: "Incredible developer with deep expertise across multiple technologies. Christoper delivered our complex booking platform on time and within budget. His problem-solving skills and technical knowledge are outstanding.",
      project: "BookWithStar Platform"
    },
    {
      name: "Anna Martinez",
      role: "Marketing Director", 
      company: "Cinema Entertainment",
      rating: 5,
      text: "Christoper created a stunning mobile app that perfectly captured our brand vision. His ability to understand business requirements and translate them into technical solutions is remarkable. The app performs flawlessly!",
      project: "Cinerama Maps App"
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Client Reviews
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it - here's what my clients say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/30 mb-3" />
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-star text-star" />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-border/30 pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground/80">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {testimonial.project}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-card/30 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-star text-star" />
              ))}
            </div>
            <span className="text-sm font-medium">5.0 Average Rating</span>
            <span className="text-xs text-muted-foreground">• 50+ Happy Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;