import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Machine Learning Specialization",
    provider: "DeepLearning.AI (Coursera)",
    description: "Comprehensive ML course covering supervised, unsupervised learning, and neural networks.",
    link: "/certificates/Coursera_ml specialisation.pdf",
  },

  {
    title: "Microsoft Future Ready",
    provider: "Microsoft (Azure & Cloud)",
    description: "Azure cloud services, app deployment, and cloud-native architecture.",
    link: "#",
  },
  {
    title: "Postman API Fundamentals",
    provider: "Postman",
    description: "API design, testing, and documentation best practices.",
    link: "#",
  },
  {
    title: "Software Engineering Simulation",
    provider: "J.P. Morgan Chase",
    description: "Financial software engineering simulation covering real-world banking tech challenges.",
    link: "#",
  },
  {
    title: "Google Cloud Agentic AI Day",
    provider: "Google Cloud (2025)",
    description: "Agentic AI architectures and multi-agent systems on Google Cloud.",
    link: "#",
  },
  {
    title: "AWSome Days",
    provider: "Amazon Web Services",
    description: "AWS cloud fundamentals including EC2, S3, and serverless computing.",
    link: "#",
  },
];

const CertificationsSection = () => (
  <section id="certifications" className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        <span className="text-primary font-mono text-xl mr-2">09.</span>
        Certifications
      </motion.h2>
      <div className="section-subheading" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card-hover p-6 flex flex-col"
          >
            <div className="p-2.5 rounded-lg bg-primary/10 text-primary w-fit mb-4">
              <Award size={20} />
            </div>
            <h3 className="font-heading font-bold text-foreground text-sm mb-1">{cert.title}</h3>
            <p className="text-primary text-xs font-mono mb-2">{cert.provider}</p>
            <p className="text-muted-foreground text-xs flex-1 mb-4">{cert.description}</p>
            <a
              href={cert.link}
              className="outline-button text-xs py-1.5 px-3 w-fit mt-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={14} />
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
