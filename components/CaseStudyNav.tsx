"use client";

import { useEffect, useState } from "react";

const chapters = [
  ["context", "Context"],
  ["insight", "Insight"],
  ["decisions", "Decisions"],
  ["outcome", "Outcome"]
] as const;

export function CaseStudyNav() {
  const [active, setActive] = useState("context");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const marker = window.innerHeight * .35;
      let current = "context";
      chapters.forEach(([id]) => {
        const node = document.getElementById(id);
        if (node && node.getBoundingClientRect().top <= marker) current = id;
      });
      setActive(current);
      const article = document.getElementById("case-study");
      if (article) {
        const rect = article.getBoundingClientRect();
        const total = Math.max(article.offsetHeight - window.innerHeight, 1);
        setProgress(Math.min(Math.max(-rect.top / total, 0), 1));
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  return (
    <nav aria-label="Case study chapters" className="sticky top-20 z-40 mx-auto mb-8 w-[calc(100%_-_2rem)] max-w-[900px] overflow-hidden rounded-2xl border border-white/10 bg-[#15181c]/92 text-white shadow-2xl backdrop-blur-xl md:top-24">
      <div className="flex items-center p-1.5">
        {chapters.map(([id, label], index) => (
          <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} className={`flex min-h-10 flex-1 items-center justify-center gap-2 rounded-xl px-2 text-[10px] font-bold transition md:text-xs ${active === id ? "bg-white text-black" : "text-white/55 hover:bg-white/10 hover:text-white"}`}>
            <span className="hidden sm:inline">0{index + 1}</span>{label}
          </a>
        ))}
      </div>
      <div className="h-0.5 bg-white/10"><div className="h-full bg-signal transition-[width] duration-150" style={{ width: `${progress * 100}%` }} /></div>
    </nav>
  );
}
