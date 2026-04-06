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

      <div className="space-y-6">
        {education.map((ed, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card-hover p-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
              <h3 className="font-heading font-bold text-lg text-foreground leading-tight">{ed.degree}</h3>
              <p className="font-mono text-primary text-base sm:text-lg font-bold shrink-0">{ed.period}</p>
            </div>
            <p className="text-muted-foreground text-sm">{ed.school}</p>
            <p className="text-primary text-sm font-semibold mt-4">{ed.grade}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
