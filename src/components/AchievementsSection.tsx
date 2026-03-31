import { motion } from "framer-motion";
import { Trophy, Award, Medal, Code } from "lucide-react";

const achievements = [
  { icon: Trophy, text: "NASA Space Settlement Contest Winner" },
  { icon: Award, text: "1st Place – State-Level Project Expo" },
  { icon: Medal, text: "Smart India Hackathon Finalist" },
  { icon: Medal, text: "3rd Place – Gesture AI Hackathon" },
  { icon: Code, text: "Solved 100+ DSA Problems" },
];

const certifications = [
  "Google Cloud Agentic AI Day (2025)",
  "DeepLearning.AI ML Certification",
  "Simplilearn AI Courses",
  "AWSome Days (AWS)",
  "Postman API Fundamentals",
];

const AchievementsSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      {/* Achievements */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        <span className="text-primary font-mono text-xl mr-2">06.</span>
        Achievements
      </motion.h2>
      <div className="section-subheading" />

      <div className="flex flex-wrap gap-3 mb-20">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="badge-achievement"
          >
            <a.icon size={16} className="text-primary" />
            {a.text}
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        <span className="text-primary font-mono text-xl mr-2">07.</span>
        Certifications
      </motion.h2>
      <div className="section-subheading" />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {certifications.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-4 text-sm text-foreground font-mono"
          >
            <span className="text-primary mr-2">✦</span>
            {c}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
