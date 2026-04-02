import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";

type ResearchStatus = "Under Peer Review" | "In Progress" | "Under Manuscript Preparation" | "Completed";

const statusColors: Record<ResearchStatus, string> = {
  "Under Peer Review": "bg-orange-500/20 text-orange-400 border-orange-500/30",
  "In Progress": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  "Under Manuscript Preparation": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Completed: "bg-green-500/20 text-green-400 border-green-500/30",
};

const papers = [
  {
    title: "BioAge-Net",
    organization: "IEEE",
    description: "Deep learning model for biological age estimation. Achieved MAE of 4.91 years.",
    status: "Under Peer Review" as ResearchStatus,
    link: "#",
  },
  {
    title: "Skin Lesion Classification",
    organization: "Independent Research",
    description: "Multimodal skin cancer detection system combining dermoscopic images with clinical metadata using attention fusion.",
    status: "In Progress" as ResearchStatus,
    link: "#",
  },
  {
    title: "Urban Cooling Islands Research",
    organization: "IIT Roorkee",
    description: "ML + satellite data for urban heat analysis and identification of high-risk zones.",
    status: "Under Manuscript Preparation" as ResearchStatus,
    link: "#",
  },
  {
    title: "Land Cover Classification",
    organization: "IIT Roorkee (CoDA Lab)",
    description: "81.68% accuracy in land cover classification using satellite + socio-economic data with Random Forest, ANOVA, MANOVA.",
    status: "Completed" as ResearchStatus,
    link: "#",
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
            transition={{ delay: i * 0.15 }}
            className="glass-card-hover p-6 flex gap-4"
          >
            <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0 h-fit">
              <FileText size={22} />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="font-heading font-bold text-foreground">{p.title}</h3>
                <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${statusColors[p.status]}`}>
                  {p.status}
                </span>
              </div>
              <p className="text-primary text-xs font-mono mb-2">{p.organization}</p>
              <p className="text-muted-foreground text-sm mb-4">{p.description}</p>
              <a
                href={p.link}
                className="outline-button text-xs py-1.5 px-3 w-fit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={14} />
                View Paper
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ResearchSection;
