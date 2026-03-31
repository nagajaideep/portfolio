import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "C", "SQL", "JavaScript", "HTML/CSS", "R"],
  },
  {
    title: "Frameworks & Tools",
    skills: ["React", "Node.js", "Flask", "TensorFlow", "PyTorch", "Scikit-learn", "JUnit"],
  },
  {
    title: "Cloud",
    skills: ["AWS (EC2, S3)", "Azure App Service", "Google Earth Engine"],
  },
  {
    title: "AI/ML Expertise",
    skills: ["Deep Learning", "CNNs", "Transfer Learning", "GANs", "Diffusion Models", "LLM Fine-tuning", "Random Forest", "ANOVA", "MANOVA"],
  },
  {
    title: "Libraries",
    skills: ["pandas", "NumPy", "OpenCV", "Hugging Face", "Matplotlib", "SciPy"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        <span className="text-primary font-mono text-xl mr-2">03.</span>
        Skills
      </motion.h2>
      <div className="section-subheading" />

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6"
          >
            <h3 className="font-heading font-semibold text-primary text-sm mb-4 uppercase tracking-wider">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
