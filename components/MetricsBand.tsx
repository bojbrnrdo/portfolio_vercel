"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 4, suffix: "", label: "featured software projects" },
  { value: 61, suffix: "", label: "Salesforce Trailhead badges" },
  { value: 33475, suffix: "", label: "Trailhead points earned" },
  { value: 2, suffix: "×", label: "Dean’s List recognition" }
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [shown, setShown] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      if (reduce) {
        setShown(value);
      } else {
        const started = performance.now();
        const duration = 1300;
        const tick = (now: number) => {
          const progress = Math.min((now - started) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 4);
          setShown(Math.round(value * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
      observer.disconnect();
    }, { threshold: .6 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{shown.toLocaleString()}{suffix}</span>;
}

export function MetricsBand() {
  return (
    <section className="border-y border-ink/15 bg-ash/75 py-8 backdrop-blur">
      <div className="container-grid grid gap-px overflow-hidden rounded-2xl bg-ink/15 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <article key={metric.label} className="group relative bg-paper p-6 md:p-8">
            <span className="eyebrow text-muted">Evidence / 0{index + 1}</span>
            <strong className="metric-value mt-5 block font-display text-5xl text-signal md:text-6xl">
              <Counter value={metric.value} suffix={metric.suffix} />
            </strong>
            <p className="mt-3 max-w-[14rem] text-sm font-semibold leading-5 text-muted">{metric.label}</p>
            <i className="absolute bottom-0 left-0 h-1 w-0 bg-signal transition-all duration-700 group-hover:w-full" />
          </article>
        ))}
      </div>
    </section>
  );
}
