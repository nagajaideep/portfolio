import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "C", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Node.js", "Spring Boot", "Flask", "FastAPI"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "Cloud",
    skills: ["AWS (EC2, S3)", "Azure App Service", "Google Earth Engine"],
  },
  {
    title: "GenAI & ML",
    skills: ["LLM API Integration", "Google Gemini 2.5", "TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face"],
  },
  {
    title: "Libraries",
    skills: ["pandas", "NumPy", "OpenCV", "Matplotlib", "SciPy"],
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
