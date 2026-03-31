import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const papers = [
  {
    title: "Urban Cooling Islands Research",
    venue: "IIT Roorkee",
    description: "ML + satellite data for urban heat analysis",
  },
  {
    title: "BioAge-Net",
    venue: "IEEE Accepted",
    description: "Deep learning model for biological age estimation. Achieved MAE of 4.91 years.",
  },
];

const ResearchSection = () => (
  <section id="research" className="py-24 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        <span className="text-primary font-mono text-xl mr-2">05.</span>
        Research
      </motion.h2>
      <div className="section-subheading" />

      <div className="space-y-6">
        {papers.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="glass-card-hover p-6 flex gap-4"
          >
            <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0 h-fit">
              <FileText size={22} />
            </div>
            <div>
              <h3 className="font-heading font-bold text-foreground">{p.title}</h3>
              <p className="text-primary text-xs font-mono mb-2">{p.venue}</p>
              <p className="text-muted-foreground text-sm">{p.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ResearchSection;
