import { motion } from "framer-motion";
import { Trophy, Award, Medal, Code } from "lucide-react";

const achievements = [
  { icon: Trophy, text: "NASA Space Settlement Contest Winner" },
  { icon: Award, text: "1st Place – State-Level Project Expo" },
  { icon: Medal, text: "Smart India Hackathon Finalist" },
  { icon: Medal, text: "3rd Place – Gesture AI Hackathon" },
  { icon: Code, text: "Solved 100+ DSA Problems" },
];

const AchievementsSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        <span className="text-primary font-mono text-xl mr-2">08.</span>
        Achievements
      </motion.h2>
      <div className="section-subheading" />

      <div className="flex flex-wrap gap-3">
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
    </div>
  </section>
);

export default AchievementsSection;
