import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";

type ResearchStatus = "Published" | "Accepted" | "Under Peer Review" | "In Progress" | "Under Manuscript Preparation" | "Completed";

const statusColors: Record<ResearchStatus, string> = {
  Published: "bg-green-500/20 text-green-400 border-green-500/30",
  Accepted: "bg-green-500/20 text-green-400 border-green-500/30",
  "Under Peer Review": "bg-orange-500/20 text-orange-400 border-orange-500/30",
  "In Progress": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  "Under Manuscript Preparation": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Completed: "bg-green-500/20 text-green-400 border-green-500/30",
};

const papers = [
  {
    title: "Perturbation Fingerprints: Is LLM Inconsistency One Failure or Two?",
    organization: "Undergraduate Research Fellowship, MGIT",
    description: "A fresh 900-item logic benchmark with 5 perturbation axes and a mitigation x axis transfer matrix. Surface noise and belief conflict fail differently, and fixes overfit to the axis they were designed for, so a model can look robust on one test while the underlying problem is untouched.",
    status: "In Progress" as ResearchStatus,
    link: "https://github.com/nagajaideep/Research-Work",
  },
  {
    title: "Regret Under Elicitation: Do LLM Agent Regret Numbers Depend on How You Ask?",
    organization: "Undergraduate Research Fellowship, MGIT",
    description: "LLM agents in repeated games where the opponent switches strategy. Scoring actions vs asking the model for a distribution gives different controllers (TV gap 0.29-0.37 across 3 models), so evaluation protocol must be reported with the result.",
    status: "Under Manuscript Preparation" as ResearchStatus,
    link: "https://github.com/nagajaideep/Research-Work",
  },
  {
    title: "Corrective Machine Unlearning for Backdoors, Label Noise and Bias",
    organization: "Independent Research, faculty-guided (MGIT)",
    description: "Can a model be repaired when only part of the bad training data is found? Extends Goel et al. (TMLR 2024) to spurious bias: SCRUB removed 48% of a bias but only 4% of a backdoor. 585-run multi-seed design with a validation/test split; caught and fixed an evaluator that scored a destroyed model as fixed.",
    status: "In Progress" as ResearchStatus,
    link: "#",
  },
  {
    title: "BioAge-Net",
    organization: "IEEE Xplore (ICSCST 2026) - First Author",
    description: "Biological age estimation from chest radiographs with ResNet-50, age-gap risk stratification and Grad-CAM explainability. MAE of 4.91 years on the held-out NIH ChestX-Ray14 test set.",
    status: "Published" as ResearchStatus,
    link: "#",
  },
  {
    title: "BrainRiskNet",
    organization: "ISED 2026 (NIT Warangal) - Co-author",
    description: "Dual-head CNN-ConvLSTM for brain tumor MRI classification with uncertainty-aware severity assessment.",
    status: "Accepted" as ResearchStatus,
    link: "#",
  },
  {
    title: "Skin Lesion Classification",
    organization: "Independent Research",
    description: "Multimodal skin cancer detection system combining dermoscopic images with clinical metadata using attention fusion, with Grad-CAM to check what the model attends to. Team Alpha ranked 55th of 165 in the ISIC MILK10k Benchmark.",
    status: "Completed" as ResearchStatus,
    link: "#",
  },
  {
    title: "Urban Cooling Islands Research",
    organization: "IIT Roorkee",
    description: "ML + satellite data for urban heat analysis and identification of high-risk zones. Submitted to the Journal of Water and Climate Change (IWA Publishing).",
    status: "Under Peer Review" as ResearchStatus,
    link: "#",
  },
  {
    title: "Amazon ML Challenge 2025",
    organization: "Independent Research",
    description: "Built machine learning model to predict product prices using product images and text descriptions. Improved SMAPE from 57% to 52% through iterative approach.",
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
        <span className="text-primary font-mono text-xl mr-2">06.</span>
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
