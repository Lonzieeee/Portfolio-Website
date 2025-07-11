import { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "../lib/utils";

export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or a question? I’m available for collaborations
          and opportunities—feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-10 text-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Contact Information</h3>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:wanderilorna@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    wanderilorna@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+254719424977"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +254719424977
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground hover:text-primary transition-colors">
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a href="#" target="_blank" rel="noreferrer">
                  <Linkedin className="hover:text-primary transition" />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  <Twitter className="hover:text-primary transition" />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  <Instagram className="hover:text-primary transition" />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  <Facebook className="hover:text-primary transition" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            {submitted && (
              <div className="bg-green-100 text-green-800 px-4 py-3 rounded-md text-sm mb-4 border border-green-300">
                ✅ Your message has been sent successfully!
              </div>
            )}

            <form
              action="https://formspree.io/f/xyzjqwkv"
              method="POST"
              className="space-y-6 text-left"
              onSubmit={() => {
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 5000);
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Lorna Wanderi..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="lorna@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
