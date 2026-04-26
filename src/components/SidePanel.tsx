import { motion, AnimatePresence } from "framer-motion";
import { X, Briefcase, FileText, MapPin, Sparkles, Mail } from "lucide-react";
import { useState } from "react";

const SidePanel = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed left-0 top-1/4 z-[60] hidden xl:flex flex-col w-64"
      >
        <div className="bg-card/70 backdrop-blur-xl border border-border/50 border-l-0 rounded-r-2xl shadow-[10px_10px_30px_rgba(0,0,0,0.5)] p-5 relative overflow-hidden group">
          {/* Decorative gradient */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -ml-10 -mt-10 pointer-events-none"></div>

          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close panel"
          >
            <X size={16} />
          </button>

          <div className="flex items-center gap-2 mb-5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="font-heading font-bold text-sm text-foreground tracking-wide uppercase">Open to Work</span>
          </div>

          <div className="space-y-4 text-sm">
            <div>
              <div className="flex items-center gap-2 text-primary font-mono mb-1">
                <Briefcase size={14} />
                <span>Target Roles</span>
              </div>
              <p className="text-muted-foreground ml-5 leading-relaxed">
                AI Engineering <br/> Backend Infrastructure <br/> Internships
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-primary font-mono mb-1">
                <MapPin size={14} />
                <span>Availability</span>
              </div>
              <p className="text-muted-foreground ml-5">
                Remote / Open to Relocation
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-primary font-mono mb-1">
                <Sparkles size={14} />
                <span>Current Focus</span>
              </div>
              <p className="text-muted-foreground ml-5 leading-relaxed">
                Scalable Systems <br/> Applied AI Models
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_15px_hsl(166_100%_70%/0.3)] transition-all duration-300 text-sm"
            >
              <FileText size={16} />
              View Resume
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 w-full py-2 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 text-sm"
            >
              <Mail size={16} />
              Get in Touch
            </a>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SidePanel;
