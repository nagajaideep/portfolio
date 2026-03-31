import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Multimodal Skin Cancer Detection System",
    description: "AI-based system combining dermoscopic images + clinical metadata. CNN architectures (ResNet, EfficientNet) with attention fusion. Targeting >95% accuracy with explainability (Grad-CAM).",
    tech: ["Python", "TensorFlow", "ResNet", "EfficientNet", "Grad-CAM"],
    highlight: true,
  },
  {
    title: "TeamPulse – Collaborative Workspace",
    description: "Real-time collaboration platform with task tracking. Integrated with GitHub + Notion. Deployed on Vercel & Render.",
    tech: ["React", "Node.js", "Socket.IO", "GitHub API", "Vercel"],
    highlight: false,
  },
  {
    title: "Gesture Presentation System",
    description: "Hand gesture-based slide control system. Won 3rd place in hackathon.",
    tech: ["Python", "OpenCV", "MediaPipe", "Flask"],
    highlight: false,
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
            transition={{ delay: i * 0.15 }}
            className={`glass-card-hover p-6 flex flex-col ${p.highlight ? "md:col-span-2 lg:col-span-1" : ""}`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <ExternalLink size={18} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
            </div>

            <h3 className="font-heading font-bold text-foreground mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm flex-1 mb-4">{p.description}</p>

            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="text-xs font-mono text-primary/80">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
