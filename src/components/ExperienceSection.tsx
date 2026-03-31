import { motion } from "framer-motion";
import { Briefcase, FlaskConical, Code2 } from "lucide-react";

const experiences = [
  {
    icon: FlaskConical,
    title: "Research Intern – Machine Learning",
    company: "IIT Roorkee (CoDA Lab)",
    period: "Apr 2025 – May 2025",
    points: [
      "Achieved 81.68% accuracy in land cover classification using satellite + socio-economic data",
      "Built scalable climate analysis framework using Random Forest, ANOVA, MANOVA",
      "Identified high-risk urban heat zones using ML-driven geospatial analysis",
    ],
  },
  {
    icon: Briefcase,
    title: "Tech Lead Intern – AI",
    company: "Viswam.AI",
    period: "May 2025 – Jul 2025",
    points: [
      "Led NLP pipeline development using Transformer models",
      "Contributed 40GB+ dataset and 800+ annotations",
      "Fine-tuned AI models for Indic language applications",
    ],
  },
  {
    icon: Code2,
    title: "Software Engineering Intern (Open Source)",
    company: "Open Sciences Lab",
    period: "May 2025 – Aug 2025",
    points: [
      "Improved transpiler efficiency by 70%",
      "Achieved 100% test pass rate with version-specific modules",
      "Boosted developer adoption by 40%",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        <span className="text-primary font-mono text-xl mr-2">02.</span>
        Experience
      </motion.h2>
      <div className="section-subheading" />

      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card-hover p-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                <exp.icon size={22} />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-lg text-foreground">{exp.title}</h3>
                <p className="text-primary text-sm font-mono">{exp.company}</p>
                <p className="text-muted-foreground text-xs font-mono mb-3">{exp.period}</p>
                <ul className="space-y-2">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1 shrink-0">▹</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
