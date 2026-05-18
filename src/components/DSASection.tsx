import { motion } from "framer-motion";
import { Code2, ExternalLink, Trophy } from "lucide-react";

const focusAreas = ["Graphs", "Dynamic Programming", "Greedy", "System Design"];

const contestHighlights = [
  "Ranked 1290 out of 12,500+ in CodeChef Starters 238",
  "Ranked 4554 out of 26,000+ in CodeChef Starters 220",
];

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
            <h3 className="font-heading font-bold text-foreground text-xl">300+ Problems Solved</h3>
            <p className="text-muted-foreground text-sm">Across LeetCode, GeeksforGeeks, and CodeChef</p>
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

      <div className="grid sm:grid-cols-2 gap-4 mt-5">
        {contestHighlights.map((highlight, i) => (
          <motion.div
            key={highlight}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="border border-primary/25 bg-primary/10 rounded-lg px-5 py-4 flex items-start gap-3"
          >
            <div className="p-2 rounded-md bg-primary/10 text-primary shrink-0">
              <Trophy size={18} />
            </div>
            <div>
              <p className="text-xs font-mono text-primary uppercase tracking-wider mb-1">Contest Highlight</p>
              <p className="text-sm text-foreground font-medium">{highlight}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DSASection;
