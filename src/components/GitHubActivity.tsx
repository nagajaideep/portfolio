import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Github, GitFork, Star, GitCommit, GitPullRequest, MessageSquare, Code } from "lucide-react";

const weeks = 24;
const days = 7;

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

const GitHubActivity = () => {
  const [heatmap, setHeatmap] = useState<number[][]>(
    Array.from({ length: weeks }, () => Array(days).fill(0))
  );

  useEffect(() => {
    fetch('https://github-contributions-api.deno.dev/nagajaideep.json')
      .then(res => res.json())
      .then(data => {
        if (!data?.contributions) return;
        const recentWeeks = data.contributions.slice(-weeks);
        const matrix = recentWeeks.map((weekData: any[]) => {
          return weekData.map((day: any) => {
            const c = day.contributionCount;
            if (c === 0) return 0;
            if (c <= 2) return 1;
            if (c <= 5) return 2;
            if (c <= 8) return 3;
            return 4;
          });
        });
        setHeatmap(matrix);
      })
      .catch(err => console.error("Could not fetch GitHub activity map:", err));
  }, []);

  const months: string[] = [];
  const d = new Date();
  for (let i = 5; i >= 0; i--) {
    const monthDate = new Date(d.getFullYear(), d.getMonth() - i, 1);
    months.push(monthDate.toLocaleString('default', { month: 'short' }));
  }

  return (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass-card p-6 flex flex-col h-full"
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
        <span className="font-heading font-bold text-foreground">26</span>
        <span className="text-muted-foreground text-xs">Repositories</span>
      </div>
      <div className="flex items-center gap-2">
        <Star size={16} className="text-primary" />
        <span className="font-heading font-bold text-foreground">0</span>
        <span className="text-muted-foreground text-xs">Stars</span>
      </div>
    </div>

    {/* Heatmap */}
    <div className="overflow-x-auto mb-6 custom-scrollbar pb-2">
      <div className="flex gap-4 w-max">
        {months.map((m, monthIndex) => (
          <div key={monthIndex} className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground font-mono px-0.5">{m}</span>
            <div className="flex gap-[3px]">
              {heatmap.slice(monthIndex * 4, (monthIndex + 1) * 4).map((week, wi) => (
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
        ))}
      </div>
    </div>

    {/* Contributions breakdown */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-auto">
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
};

export default GitHubActivity;
