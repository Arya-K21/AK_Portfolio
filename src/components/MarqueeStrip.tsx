"use client";

import styles from "../app/page.module.css";

// 🔧 CUSTOMIZE: Add/remove tech skills shown in the scrolling strip
const SKILLS = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js",
  "Figma", "Java", "MySQL", "Tailwind CSS", "Framer Motion",
  "Git / GitHub", "HTML & CSS", "REST APIs", "Chart.js", "Vercel",
];

export default function MarqueeStrip() {
  // Duplicate for seamless infinite loop
  const items = [...SKILLS, ...SKILLS];

  return (
    <div className={styles.marqueeWrapper} aria-hidden="true">
      <div className={styles.marqueeTrack}>
        {items.map((skill, i) => (
          <span key={i} className={styles.marqueeItem}>
            {skill}
            <span className={styles.marqueeDot}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
