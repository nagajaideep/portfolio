import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";

const focusAreas = ["Graphs", "Dynamic Programming", "Greedy", "System Design"];

const DSASection = () => (
  <section id="dsa" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        <span className="text-primary font-mono text-xl mr-2">07.</span>
        Data Structures & Algorithms
      </motion.h2>
      <div className="section-subheading" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card-hover p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            <Code2 size={24} />
          </div>
          <div>
            <h3 className="font-heading font-bold text-foreground text-xl">250+ Problems Solved</h3>
            <p className="text-muted-foreground text-sm">Across multiple competitive programming platforms</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">Focus Areas</p>
          <div className="flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <span key={area} className="skill-tag">{area}</span>
            ))}
          </div>
        </div>

        <a
          href="https://codolio.com/profile/nagajaideepchowdary"
          className="outline-button text-xs py-2 px-4 w-fit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink size={14} />
          View Profile
        </a>
      </motion.div>
    </div>
  </section>
);

export default DSASection;
