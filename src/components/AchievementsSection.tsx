import { motion } from "framer-motion";
import { Trophy, Award, Medal, Code } from "lucide-react";

const achievements = [
  { icon: Award, text: "Silver Medal for academic excellence in 2nd year B.Tech with 9.38 CGPA" },
  { icon: Medal, text: "IEEE Xplore acceptance - Biological Age Estimation from Chest Radiographs (ICSCT 2026)" },
  { icon: Code, text: "Vice Chair, ACM Student Chapter, MGIT" },
  { icon: Trophy, text: "NASA Space Settlement Contest Winner" },
  { icon: Award, text: "1st Place - State-Level Project Expo" },
  { icon: Medal, text: "Smart India Hackathon Finalist" },
  { icon: Medal, text: "3rd Place - Gesture AI Hackathon" },
  { icon: Code, text: "Solved 300+ DSA Problems" },
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

      <div className="space-y-3">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card-hover px-5 py-4 flex items-center gap-4"
          >
            <span className="font-mono text-primary text-sm w-8 shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
              <a.icon size={18} />
            </div>
            <p className="text-muted-foreground text-sm sm:text-base">{a.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
