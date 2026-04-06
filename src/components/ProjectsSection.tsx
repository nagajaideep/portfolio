import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

type ProjectStatus = "Completed" | "Production" | "In Progress" | "Research" | "Under Review" | "Live";

const statusColors: Record<ProjectStatus, string> = {
  Completed: "bg-green-500/20 text-green-400 border-green-500/30",
  Production: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "In Progress": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Research: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "Under Review": "bg-orange-500/20 text-orange-400 border-orange-500/30",
  Live: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
};

const projects = [
  {
    title: "AI-Powered Customer Support Agent",
    description: "Multi-agent LLM routing system for intelligent customer support. Routes queries to specialized agents for faster resolution.",
    tech: ["Python", "LangChain", "FastAPI", "GPT-4"],
    impact: "Multi-agent LLM routing system",
    status: "Production" as ProjectStatus,
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Multilingual Recipe Translation System",
    description: "AI-powered recipe translation platform supporting 20+ languages with cultural context preservation.",
    tech: ["Python", "Transformers", "React", "Node.js"],
    impact: "1,00,000+ daily users",
    status: "Production" as ProjectStatus,
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "MILK10k Skin Lesion Classifier",
    description: "Multimodal skin cancer detection combining dermoscopic images + clinical metadata with attention fusion.",
    tech: ["Python", "ResNet", "EfficientNet", "Grad-CAM"],
    impact: "Targeting >95% accuracy with explainability",
    status: "Research" as ProjectStatus,
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Restaurant Booking Voice Agent",
    description: "Voice-powered restaurant booking system using speech recognition and NLP for hands-free reservations.",
    tech: ["Python", "Speech Recognition", "NLP", "Flask"],
    impact: "Hands-free booking experience",
    status: "Completed" as ProjectStatus,
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Kitchen Talk Recorder",
    description: "Smart kitchen assistant that records and organizes cooking conversations, recipes, and tips using voice AI.",
    tech: ["React", "Node.js", "Whisper AI", "MongoDB"],
    impact: "Real-time voice transcription",
    status: "Live" as ProjectStatus,
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Gesture Presentation System",
    description: "Hand gesture-based slide control system using computer vision. Won 3rd place in hackathon.",
    tech: ["Python", "OpenCV", "MediaPipe", "Flask"],
    impact: "3rd place hackathon winner",
    status: "Completed" as ProjectStatus,
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Customer Churn Prediction",
    description: "ML pipeline for predicting customer churn using ensemble methods and feature engineering on telecom data.",
    tech: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
    impact: "Predictive analytics for retention",
    status: "In Progress" as ProjectStatus,
    demoLink: "#",
    githubLink: "#",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        <span className="text-primary font-mono text-xl mr-2">04.</span>
        Projects
      </motion.h2>
      <div className="section-subheading" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card-hover p-6 flex flex-col"
          >
            <div className="flex justify-between items-start mb-4">
              <a
                href={p.demoLink}
                className="teal-button text-xs py-1.5 px-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={14} />
                Demo
              </a>
              <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${statusColors[p.status]}`}>
                {p.status}
              </span>
            </div>

            <h3 className="font-heading font-bold text-foreground mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm flex-1 mb-2">{p.description}</p>
            <p className="text-primary text-xs font-mono mb-4">⚡ {p.impact}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span key={t} className="text-xs font-mono text-primary/80">{t}</span>
              ))}
            </div>

            <a
              href={p.githubLink}
              className="outline-button text-xs py-2 px-4 w-fit mt-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={14} />
              GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
