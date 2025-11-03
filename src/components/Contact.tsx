import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);

      // Call edge function to send email
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: validatedData,
      });

      if (error) throw error;

      toast({
        title: "Message sent! ✨",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "kunalsaha1107@gmail.com",
      href: "mailto:kunalsaha1107@gmail.com",
      color: "text-primary",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Korags05",
      href: "https://github.com/Korags05",
      color: "text-secondary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "kunalsaha1107",
      href: "https://linkedin.com/in/kunalsaha1107",
      color: "text-accent",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-12 animate-fade-in-up text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's <span className="text-primary">Collaborate</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have an exciting project or opportunity? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-8 bg-card-glass backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project or idea..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold shadow-lg hover:shadow-glow-cyan transition-all duration-300 hover:scale-105"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Social Links */}
          <div className="space-y-4">
            {socialLinks.map((link, index) => (
              <Card
                key={index}
                className="p-6 bg-card-glass backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => window.open(link.href, '_blank')}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-card/80 ${link.color}`}>
                    <link.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{link.label}</p>
                    <p className="text-foreground font-medium">{link.value}</p>
                  </div>
                </div>
              </Card>
            ))}

            {/* AI Touch */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <p className="text-sm text-muted-foreground text-center italic">
                ✨ Crafted with precision by a curious mind and a touch of AI magic
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
