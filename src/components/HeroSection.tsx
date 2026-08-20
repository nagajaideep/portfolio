import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Code } from "lucide-react";
import GitHubActivity from "./GitHubActivity";
import LeetCodeActivity from "./LeetCodeActivity";

const roles = [
  "Full Stack Developer Intern",
  "Software Engineer",
  "AI/ML Engineer",
  "Research Enthusiast",
  "Open to Work",
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/nagajaideepchowdary/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/nagajaideep", label: "GitHub" },
  { icon: Code, href: "https://leetcode.com/u/jaideepchowdary2/", label: "LeetCode" },
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 30 : 60;

    if (!deleting && charIndex === current.length) {
      setTimeout(() => setDeleting(true), 2000);
      return;
    }
    if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (deleting ? -1 : 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-6xl mx-auto w-full">
        {/* Latest Achievements Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            Full Stack Intern @ Anshap
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            Open to Work
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-yellow-400 animate-pulse"></span>
            IEEE Xplore Acceptance
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-primary text-sm mb-5"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-heading font-black text-5xl md:text-7xl text-foreground mb-3"
        >
          Nagajaideep Chowdary
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-heading font-bold text-3xl md:text-5xl text-muted-foreground mb-6 h-14 md:h-16"
        >
          {roles[roleIndex].substring(0, charIndex)}
          <span className="animate-blink text-primary">|</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-muted-foreground max-w-xl text-lg leading-relaxed mb-8"
        >
          Building intelligent systems with real world impact using AI, Machine Learning, and scalable software solutions.
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex items-center gap-4 mb-10"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 relative group"
              aria-label={link.label}
              title={link.label}
            >
              <link.icon size={20} />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <a href="#projects" className="teal-button">
            View Projects
          </a>
          <a href="#contact" className="outline-button">
            Contact Me
          </a>
        </motion.div>

        {/* Activity Maps */}
        <div className="grid lg:grid-cols-2 gap-6 mt-12 items-stretch">
          <GitHubActivity />
          <LeetCodeActivity />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
