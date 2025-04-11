
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

// substitui estas constantes pelos teus próprios IDs
const SERVICE_ID = "service_nxla8ug";
const TEMPLATE_ID = "template_ywl8jhr";
const PUBLIC_KEY = "k55U9_joXLMgKvh1e";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    console.log("Sending formData to EmailJS:", formData); // DEBUG
    
    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then((result) => {
        console.log("Email sent:", result.text);
        setFormData({ name: "", email: "", message: "" });
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error); // DEBUG
        toast({
          title: "Oops!",
          description: "Something went wrong. Please try again later.",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-cesar-blue" />,
      title: "Phone",
      value: "+351 913 210 173", // Replace with actual number when available
    },
    {
      icon: <Mail className="h-5 w-5 text-cesar-blue" />,
      title: "Email",
      value: "cesar.soares.co@gmail.com", // Replace with actual email when available
    },
    {
      icon: <MapPin className="h-5 w-5 text-cesar-blue" />,
      title: "Location",
      value: "Maia, Porto, Portugal",
    },
  ];

  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-heading">Contact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-8 animate-on-scroll">
            <p className="text-lg text-cesar-gray">
              Interested in working together or have a question? Feel free to reach out!
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-cesar-light p-3 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-cesar-dark">{item.title}</h3>
                    <p className="text-cesar-gray mt-1">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-cesar-dark mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-cesar-dark mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="w-full"
                />
              </div> 

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-cesar-dark mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              
              <Button 
                type="submit"
                className="btn-primary w-full flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
