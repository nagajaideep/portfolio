import { motion } from "framer-motion";
import { ExternalLink, Github, MonitorPlay, Layers, Cpu, Code2 } from "lucide-react";

const SaaSSection = () => (
  <section id="saas" className="py-24 px-6 relative">
    <div className="absolute inset-0 bg-primary/5 rounded-3xl -z-10" />
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        <span className="text-primary font-mono text-xl mr-2">04.</span>
        SaaS Platform
      </motion.h2>
      <div className="section-subheading" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card overflow-hidden"
      >
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="p-8 lg:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border/50 bg-secondary/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                <MonitorPlay size={24} />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground">ShiftCV</h3>
            </div>
            <p className="text-primary font-mono text-sm mb-6">Resume Format Transformer</p>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Upload your current resume (PDF/DOCX) and a desired LaTeX or DOCX template. ShiftCV extracts your details with AI and fills the new template automatically, giving you an editable LaTeX editor with live PDF preview.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["React 19", "Vite", "FastAPI", "Gemini 2.5 Flash", "LaTeX"].map((tech) => (
                <span key={tech} className="text-xs font-mono px-3 py-1 bg-secondary border border-border/50 text-foreground rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-auto">
              <a
                href="https://shiftcv-1.onrender.com/"
                className="teal-button flex-1 justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} className="mr-2" />
                Live Demo
              </a>
              <a
                href="https://github.com/nagajaideep/ShiftCV"
                className="outline-button flex-1 justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} className="mr-2" />
                Code
              </a>
            </div>
          </div>

          <div className="p-8 lg:p-12 bg-secondary/10 flex flex-col justify-center">
            <h4 className="font-heading font-semibold text-lg text-foreground mb-6">How It Works</h4>
            <div className="space-y-6">
              {[
                {
                  icon: <Layers size={20} />,
                  title: "1. Upload",
                  desc: "Current resume (PDF/DOCX) + template (TEX/DOCX)"
                },
                {
                  icon: <Cpu size={20} />,
                  title: "2. AI Extraction",
                  desc: "Google Gemini extracts details and fills the new template"
                },
                {
                  icon: <Code2 size={20} />,
                  title: "3. Edit & Preview",
                  desc: "Edit LaTeX source with live PDF preview, then download"
                }
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 text-primary shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground text-sm">{step.title}</h5>
                    <p className="text-muted-foreground text-sm mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SaaSSection;
