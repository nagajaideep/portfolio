import { motion } from "framer-motion";
import { GitPullRequest, Github, Star, ExternalLink } from "lucide-react";

const contributions = [
  {
    repo: "data-umbrella",
    contribution: "Date filtering feature",
    description: "Implemented a comprehensive date filtering system for data processing pipelines.",
  },
  {
    repo: "arxlang/astx",
    contribution: "70% performance boost",
    description: "Optimized transpiler efficiency, achieving 100% test pass rate with version-specific modules.",
    link: "https://github.com/arxlang/astx/pull/288",
  },
];

const programs = ["GSSoC (Girl Script Summer of Code)", "Winter of Blockchain"];

const OpenSourceSection = () => (
  <section id="opensource" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        <span className="text-primary font-mono text-xl mr-2">09.</span>
        Open Source
      </motion.h2>
      <div className="section-subheading" />

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-6 mb-8 flex flex-wrap gap-6 items-center"
      >
        <div className="flex items-center gap-2">
          <GitPullRequest size={18} className="text-primary" />
          <span className="font-heading font-bold text-foreground">5+ PRs Merged</span>
        </div>
        <div className="flex items-center gap-2">
          <Star size={18} className="text-primary" />
          <span className="text-muted-foreground text-sm font-mono">Active Open Source Contributor</span>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <span className="badge-achievement text-xs">
            <Github size={14} className="text-primary" />
            Open Source
          </span>
        </div>
      </motion.div>

      {/* Contributions */}
      <div className="space-y-4 mb-8">
        {contributions.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card-hover p-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
          >
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Github size={16} className="text-primary" />
                <h3 className="font-heading font-bold text-foreground">{c.repo}</h3>
                <span className="text-xs font-mono text-primary">→ {c.contribution}</span>
              </div>
              <p className="text-muted-foreground text-sm">{c.description}</p>
            </div>
            {c.link && (
              <a
                href={c.link}
                className="outline-button text-xs py-1.5 px-3 w-fit shrink-0 mt-2 sm:mt-0 flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={14} />
                View PR
              </a>
            )}
          </motion.div>
        ))}
      </div>

      {/* Programs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">Programs</p>
        <div className="flex flex-wrap gap-2">
          {programs.map((p) => (
            <span key={p} className="skill-tag">{p}</span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default OpenSourceSection;
