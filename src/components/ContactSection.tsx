import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "2f10d28e-1cb7-4525-91c5-de33b116dd0f",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-mono text-sm mb-2"
        >
          {/* Use 11 since it's the 11th section sequentially on the page */}
          11. What's Next?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4"
        >
          Let's Build Something Impactful
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted-foreground mb-10"
        >
          I'm always open to collaborating on innovative projects, research opportunities, or just a friendly conversation about AI & technology.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 text-left space-y-4 mb-8 relative"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              required
              disabled={isSubmitting}
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/40 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors disabled:opacity-50"
            />
            <input
              type="email"
              placeholder="Email"
              required
              disabled={isSubmitting}
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/40 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors disabled:opacity-50"
            />
          </div>
          <textarea
            placeholder="Your message..."
            required
            disabled={isSubmitting}
            maxLength={1000}
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/40 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none disabled:opacity-50"
          />
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="teal-button w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed transition-all"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          
          {status === "success" && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-green-400 text-center mt-3 font-mono">
              Message sent successfully! I'll get back to you soon.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-red-400 text-center mt-3 font-mono">
              Failed to send message. Please try again.
            </motion.p>
          )}
        </motion.form>

        {/* Social links */}
        <div className="flex justify-center gap-6 mb-8">
          <a href="mailto:Jaideepchowdary2@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
          <a href="tel:+918919102340" className="text-muted-foreground hover:text-primary transition-colors">
            <Phone size={20} />
          </a>
          <a href="https://github.com/nagajaideep" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/nagajaideepchowdary/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://leetcode.com/u/jaideepchowdary2/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <ExternalLink size={20} />
          </a>
        </div>

        <a href="/resume.pdf" className="outline-button">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
