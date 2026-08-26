const nodes = [
  ["DEV", "left-[8%] top-[18%]"],
  ["QA", "right-[7%] top-[16%]"],
  ["UI", "left-[5%] bottom-[16%]"],
  ["DATA", "right-[8%] bottom-[19%]"]
];

export function ExpertiseMap() {
  return (
    <div className="micro-grid relative aspect-square overflow-hidden rounded-3xl border border-ink/15 bg-ash" aria-label="Job Matthew's connected expertise: software development, quality assurance, interface design, and data workflows">
      <div className="absolute inset-[16%] animate-[spin_24s_linear_infinite] rounded-full border border-dashed border-signal/60" />
      <div className="absolute inset-[31%] animate-[spin_16s_linear_infinite_reverse] rounded-full border border-ink/20" />
      <div className="absolute left-1/2 top-1/2 grid size-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-signal bg-paper font-display text-3xl shadow-[0_0_45px_rgb(var(--signal-rgb)/.2)]">JB</div>
      <div className="glow-line absolute left-1/2 top-[12%] h-[76%] w-px -translate-x-1/2 rotate-45 bg-signal/50" />
      <div className="glow-line absolute left-1/2 top-[12%] h-[76%] w-px -translate-x-1/2 -rotate-45 bg-signal/50" />
      {nodes.map(([label, position], index) => (
        <span key={label} className={`cyber-chip absolute ${position} grid size-14 place-items-center rounded-full text-[10px] font-black tracking-[.12em] transition duration-500 hover:scale-110 hover:border-signal md:size-16`}>
          {label}
          <i className="absolute -right-1 -top-1 size-2 rounded-full bg-signal" style={{ animation: `pulse 1.8s ease-in-out ${index * .3}s infinite` }} />
        </span>
      ))}
      <span className="absolute bottom-4 left-5 text-[9px] font-bold uppercase tracking-[.18em] text-muted">Connected practice / 2026</span>
    </div>
  );
}
