import { motion } from "framer-motion";
import { Github, GitFork, Star, GitCommit, GitPullRequest, MessageSquare, Code } from "lucide-react";

const weeks = 20;
const days = 7;

// Generate a mock contribution heatmap
const generateHeatmap = () => {
  const data: number[][] = [];
  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < days; d++) {
      week.push(Math.floor(Math.random() * 5));
    }
    data.push(week);
  }
  return data;
};

const heatmap = generateHeatmap();

const levelColors = [
  "bg-muted/30",
  "bg-primary/20",
  "bg-primary/40",
  "bg-primary/60",
  "bg-primary/90",
];

const contributions = [
  { label: "Commits", pct: 70, icon: GitCommit },
  { label: "Pull Requests", pct: 22, icon: GitPullRequest },
  { label: "Code Review", pct: 5, icon: Code },
  { label: "Issues", pct: 3, icon: MessageSquare },
];

const GitHubActivity = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass-card p-6 mt-12"
  >
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <Github size={20} className="text-primary" />
        <h3 className="font-heading font-bold text-foreground">GitHub Activity</h3>
      </div>
      <span className="badge-achievement text-xs">
        <Star size={12} className="text-primary" />
        Active Open Source Contributor
      </span>
    </div>

    {/* Stats row */}
    <div className="flex flex-wrap gap-6 mb-6">
      <div className="flex items-center gap-2">
        <GitFork size={16} className="text-primary" />
        <span className="font-heading font-bold text-foreground">27</span>
        <span className="text-muted-foreground text-xs">Repositories</span>
      </div>
      <div className="flex items-center gap-2">
        <Star size={16} className="text-primary" />
        <span className="font-heading font-bold text-foreground">20</span>
        <span className="text-muted-foreground text-xs">Stars</span>
      </div>
    </div>

    {/* Heatmap */}
    <div className="overflow-x-auto mb-6">
      <div className="flex gap-[3px]">
        {heatmap.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.map((level, di) => (
              <div
                key={di}
                className={`w-3 h-3 rounded-sm ${levelColors[level]} transition-colors duration-200`}
                title={`${level} contributions`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>

    {/* Contributions breakdown */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {contributions.map((c) => (
        <div key={c.label} className="text-center">
          <c.icon size={16} className="text-primary mx-auto mb-1" />
          <p className="font-heading font-bold text-foreground text-lg">{c.pct}%</p>
          <p className="text-muted-foreground text-xs">{c.label}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

export default GitHubActivity;
