import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Code, TrendingUp, Target, CheckCircle2 } from "lucide-react";

const weeks = 24;
const days = 7;

const levelColors = [
  "bg-muted/30",
  "bg-primary/20",
  "bg-primary/40",
  "bg-primary/60",
  "bg-primary/90",
];

const stats = [
  { label: "Easy", count: 122, color: "text-green-400" },
  { label: "Medium", count: 67, color: "text-yellow-400" },
  { label: "Hard", count: 6, color: "text-red-400" },
];

const LeetCodeActivity = () => {
  const [heatmap, setHeatmap] = useState<number[][]>(
    Array.from({ length: weeks }, () => Array(days).fill(0))
  );

  useEffect(() => {
    fetch('https://alfa-leetcode-api.onrender.com/jaideepchowdary2/calendar')
      .then(res => res.json())
      .then(data => {
        if (!data?.submissionCalendar) return;
        const calendar = JSON.parse(data.submissionCalendar);
        
        const map = new Map<string, number>();
        Object.entries(calendar).forEach(([ts, count]) => {
          const d = new Date(parseInt(ts) * 1000);
          map.set(d.toISOString().split('T')[0], count as number);
        });

        const matrix: number[][] = [];
        const today = new Date();
        const start = new Date();
        start.setDate(today.getDate() - today.getDay() - (weeks - 1) * days);

        for (let w = 0; w < weeks; w++) {
          const week: number[] = [];
          for (let d = 0; d < days; d++) {
            const dateStr = start.toISOString().split('T')[0];
            const count = map.get(dateStr) || 0;
            
            let level = 0;
            if (count > 0) level = 1;
            if (count >= 2) level = 2;
            if (count >= 4) level = 3;
            if (count >= 6) level = 4;
            
            if (start > today) level = 0;
            
            week.push(level);
            start.setDate(start.getDate() + 1);
          }
          matrix.push(week);
        }
        setHeatmap(matrix);
      })
      .catch(err => console.error("Could not fetch LeetCode map:", err));
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
        <Code size={20} className="text-primary" />
        <h3 className="font-heading font-bold text-foreground">Problem Solving</h3>
      </div>

    </div>

    {/* Stats row */}
    <div className="flex flex-wrap gap-6 mb-6">
      <div className="flex items-center gap-2">
        <Target size={16} className="text-primary" />
        <span className="font-heading font-bold text-foreground">195</span>
        <span className="text-muted-foreground text-xs">Problems Solved</span>
      </div>
      <div className="flex items-center gap-2">
        <TrendingUp size={16} className="text-primary" />
        <span className="font-heading font-bold text-foreground">50</span>
        <span className="text-muted-foreground text-xs">Day Streak</span>
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
                      className={`w-3 h-3 rounded-sm ${levelColors[level]} transition-colors duration-200 hover:scale-125 hover:z-10`}
                      title={`${level} submissions`}
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
    <div className="grid grid-cols-3 gap-4 mt-auto">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <CheckCircle2 size={16} className={`${s.color} mx-auto mb-1`} />
          <p className="font-heading font-bold text-foreground text-lg">{s.count}</p>
          <p className="text-muted-foreground text-xs">{s.label}</p>
        </div>
      ))}
    </div>
  </motion.div>
  );
};

export default LeetCodeActivity;
