import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

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
    title: "OpsPilot - Guarded LLM Agent",
    description: "Infrastructure change-management tool where an LLM agent uses 5 read-only tools to draft risk ratings and rollout plans, behind a deterministic guardrail, prompt-injection defences and mandatory human approval with an append-only audit log.",
    tech: ["Java", "Spring Boot", "React", "PostgreSQL", "LLM Agents"],
    impact: "30-case evaluation set, rule-based fallback when the LLM fails, 68 automated tests",
    status: "Live" as ProjectStatus,
    demoLink: "https://opspilot-3vu3.onrender.com",
    githubLink: "https://github.com/nagajaideep/opspilot",
  },
  {
    title: "ShiftCV",
    description: "AI resume transformer that reads uploaded PDF resumes and converts them into clean LaTeX templates with a live split-pane editor.",
    tech: ["React", "FastAPI", "PostgreSQL", "Gemini 2.5"],
    impact: "Cuts resume conversion from 3 hours to under 90 seconds",
    status: "Live" as ProjectStatus,
    demoLink: "https://shiftcv-1.onrender.com/",
    githubLink: "https://github.com/nagajaideep/ResumeX",
  },
  {
    title: "Food Wastage Management System",
    description: "Database-driven system tracking surplus food from restaurants, events, and individuals, routing it to nearby NGOs and people in need. Built with 9 tables from public datasets (NFHS-5, FAO, FCI, Kaggle) featuring stored procedures and triggers for automation.",
    tech: ["PostgreSQL", "PL/SQL", "Python", "Data Engineering"],
    impact: "Reduces food wastage, routes surplus to NGOs; 27,000+ restaurant donors, real-time availability tracking",
    status: "Production" as ProjectStatus,
    demoLink: "#",
    githubLink: "https://github.com/nagajaideep/food-wastage-management",
  },
  {
    title: "RouteIQ",
    description: "NLP-based query routing engine that reads incoming customer messages and routes them to the right department instantly.",
    tech: ["FastAPI", "DistilBERT", "Python", "NLP"],
    impact: "Under 200ms classification latency and 80% less manual ticket sorting",
    status: "Production" as ProjectStatus,
    demoLink: "https://nlp-based-query-routing-engine.onrender.com/",
    githubLink: "https://github.com/nagajaideep/NLP-BASED-QUERY-ROUTING-ENGINE",
  },
  {
    title: "Restaurant Booking Voice Agent",
    description: "Voice-driven reservation demo that lets users complete table bookings through natural speech interactions.",
    tech: ["React", "Web Speech API", "NLP", "Flask"],
    impact: "Completes bookings in under 2 minutes and reduces booking friction by 60%",
    status: "Completed" as ProjectStatus,
    demoLink: "https://restaurant-booking-voice-agent.netlify.app/",
    githubLink: "https://github.com/nagajaideep/restaurant-booking-voice-agent",
  },
  {
    title: "AI-Powered Customer Support Agent",
    description: "Multi-agent LLM routing system for intelligent customer support. Routes queries to specialized agents for faster resolution.",
    tech: ["Python", "LangChain", "FastAPI", "GPT-4"],
    impact: "Multi-agent LLM routing system",
    status: "Production" as ProjectStatus,
    demoLink: "#",
    githubLink: "https://github.com/nagajaideep/AI-powered-customer-support",
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
    impact: "Team Alpha ranked 55th of 165 in the ISIC MILK10k Benchmark",
    status: "Research" as ProjectStatus,
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
    githubLink: "https://github.com/nagajaideep/kitchen-talk-recorder",
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

const featuredProjectCount = 3;
const hasLink = (url: string) => url && url !== "#";

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, featuredProjectCount);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <span className="text-primary font-mono text-xl mr-2">05.</span>
          Projects
        </motion.h2>
        <div className="section-subheading" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-6 flex flex-col"
            >
              <div className="flex justify-end mb-4">
                <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${statusColors[p.status]}`}>
                  {p.status}
                </span>
              </div>

              <h3 className="font-heading font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm flex-1 mb-2">{p.description}</p>
              <p className="text-primary text-xs font-mono mb-4">Impact: {p.impact}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs font-mono text-primary/80">{t}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-auto">
                {hasLink(p.demoLink) && (
                  <a
                    href={p.demoLink}
                    className="teal-button text-xs py-2 px-4 w-fit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={14} />
                    Live
                  </a>
                )}
                {hasLink(p.githubLink) && (
                  <a
                    href={p.githubLink}
                    className="outline-button text-xs py-2 px-4 w-fit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="outline-button text-sm py-2.5 px-5"
          >
            {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            {showAll ? "Show fewer projects" : `Show ${projects.length - featuredProjectCount} more projects`}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
