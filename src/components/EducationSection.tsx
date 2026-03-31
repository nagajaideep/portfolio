import { motion } from "framer-motion";

const education = [
  {
    degree: "B.Tech in Computer Science (AI & ML)",
    school: "Mahatma Gandhi Institute of Technology",
    period: "2023 – 2027",
    grade: "CGPA: 9.24",
  },
  {
    degree: "Intermediate (TSBIE)",
    school: "Narayana Junior College",
    period: "2021 – 2023",
    grade: "CGPA: 9.01",
  },
];

const EducationSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        <span className="text-primary font-mono text-xl mr-2">01.</span>
        Education
      </motion.h2>
      <div className="section-subheading" />

      <div className="relative border-l-2 border-primary/30 ml-4 space-y-10">
        {education.map((ed, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="relative pl-8"
          >
            {/* Dot */}
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
            <div className="glass-card-hover p-6">
              <p className="font-mono text-primary text-xs mb-1">{ed.period}</p>
              <h3 className="font-heading font-bold text-lg text-foreground">{ed.degree}</h3>
              <p className="text-muted-foreground text-sm">{ed.school}</p>
              <p className="text-primary text-sm font-semibold mt-2">{ed.grade}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
