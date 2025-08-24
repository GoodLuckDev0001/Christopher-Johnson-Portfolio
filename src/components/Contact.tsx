import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { EmailService } from "@/lib/emailService";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [configStatus, setConfigStatus] = useState<{ emailjs: boolean; fallback: boolean }>({ emailjs: false, fallback: true });
  const { toast } = useToast();

  useEffect(() => {
    // Check configuration status on component mount
    setConfigStatus(EmailService.getConfigStatus());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Debug: Log form data
    console.log('📧 Sending message:', formData);

    try {
      // Use the EmailService to send email
      const result = await EmailService.sendEmail(formData);

      // Debug: Log result
      console.log('📧 Email result:', result);

      if (result.success) {
        if (result.method === 'EmailJS') {
          toast({
            title: "Message sent successfully! 🎉",
            description: "Your message has been sent to my Gmail inbox. I'll get back to you within 24 hours!",
          });
          // Reset form
          setFormData({ name: '', email: '', message: '' });
        } else if (result.method.includes('Mailto')) {
          // Fallback to mailto - open email client
          const mailtoLink = EmailService.createMailtoLink(formData);
          window.open(mailtoLink, '_blank');

          toast({
            title: "Opening email client 📧",
            description: "Since the direct email service isn't working, I've opened your email client. Please send the message manually.",
          });
        } else {
          toast({
            title: "Message sent successfully! 🎉",
            description: `Your message was sent via ${result.method}. I'll get back to you soon!`,
          });
          // Reset form
          setFormData({ name: '', email: '', message: '' });
        }
      } else {
        // Show error message
        toast({
          title: "Failed to send message",
          description: result.error || "There was an issue sending your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('📧 Email error:', error);
      toast({
        title: "Error",
        description: "There was an issue sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 relative bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 p-3 bg-primary/10 rounded-2xl border border-primary/20">
            <MessageSquare className="w-6 h-6 text-primary" />
            <span className="text-primary font-medium text-sm">Contact Me</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Info */}
          <div className="animate-slide-in-left">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-full overflow-hidden">
              <CardHeader className="pb-4 border-b border-border/30">
                <CardTitle className="flex items-center gap-3 text-2xl font-bold">
                  <div className="p-2.5 bg-primary/10 rounded-xl">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  Get In Touch
                </CardTitle>
                <p className="text-muted-foreground text-base leading-relaxed mt-2">
                  Ready to discuss your next project? Let's create something amazing together.
                </p>
              </CardHeader>

              <CardContent className="p-6 space-y-6">
                {/* Email Section */}
                <div className="group">
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/20 transition-all duration-300 hover:bg-primary/10">
                    <div className="p-2.5 bg-primary/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground mb-1">Email</h3>
                      <p className="text-primary font-medium text-lg">mashmovie58@gmail.com</p>
                      <p className="text-sm text-muted-foreground mt-1">I'll respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                {/* Services Section */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <h3 className="font-semibold text-xl text-foreground">What I can help with</h3>
                  </div>

                  <div className="grid gap-0">
                    {[
                      { icon: "📱", text: "Mobile app development (Flutter & React Native)" },
                      { icon: "🌐", text: "Web application development (React, Vue, Next.js)" },
                      { icon: "⚙️", text: "Backend development (Node.js, PHP, Laravel)" },
                      { icon: "🗄️", text: "Database design and implementation" },
                      { icon: "📱", text: "App Store and Play Store deployment" },
                      { icon: "🔍", text: "Code review and optimization" }
                    ].map((service, index) => (
                      <div key={index} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-secondary/20 transition-colors duration-200 group">
                        <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                          {service.icon}
                        </span>
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                          {service.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats Section */}
                <div className="pt-4 border-t border-border/30">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 rounded-lg bg-accent/5 border border-accent/10">
                      <div className="text-2xl font-bold text-accent mb-1">24h</div>
                      <div className="text-sm text-muted-foreground">Response Time</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-primary/5 border border-primary/10">
                      <div className="text-2xl font-bold text-primary mb-1">Open</div>
                      <div className="text-sm text-muted-foreground">For New Projects</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-full overflow-hidden">
              <CardHeader className="pb-4 border-b border-border/30">
                <CardTitle className="flex items-center gap-3 text-2xl font-bold">
                  <div className="p-2.5 bg-accent/10 rounded-xl">
                    <Send className="w-6 h-6 text-accent" />
                  </div>
                  Send a Message
                </CardTitle>
                <p className="text-muted-foreground text-base leading-relaxed mt-2">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </CardHeader>

              <CardContent className="p-6">
                {/* Configuration Status Indicator */}
                {!configStatus.emailjs && (
                  <div className="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 dark:bg-amber-950/20 dark:border-amber-800">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                          EmailJS Not Loaded
                        </h4>
                        <p className="text-sm text-amber-700 dark:text-amber-300 mb-3">
                          The EmailJS service needs to load. For now, clicking "Send Message" will open your email client.
                        </p>
                        <div className="text-xs text-amber-600 dark:text-amber-400">
                          <strong>To fix this:</strong> Refresh the page and wait for EmailJS to load, or check your internet connection.
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-base font-semibold text-foreground">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-background/60 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200 h-12 text-base"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-base font-semibold text-foreground">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-background/60 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200 h-12 text-base"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-base font-semibold text-foreground">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="bg-background/60 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200 resize-none text-base"
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground font-semibold py-4 text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:scale-100 disabled:shadow-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-3" />
                        {configStatus.emailjs ? 'Send Message' : 'Open Email Client'}
                      </>
                    )}
                  </Button>

                  <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <p className="text-base text-primary font-medium">
                      {configStatus.emailjs
                        ? '✨ Your message will be sent directly to my Gmail inbox'
                        : '📧 Click to open your email client with a pre-filled message'
                      }
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {configStatus.emailjs
                        ? 'No email client needed - instant delivery!'
                        : 'The message will be pre-filled with your details'
                      }
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;