"use client";

import { useEffect, useRef, useState } from "react";

export function ExperienceLayer() {
  const trailCanvas = useRef<HTMLCanvasElement>(null);
  const trail = useRef<Array<{ x: number; y: number; life: number }>>([]);
  const [progress, setProgress] = useState(0);
  const [cursor, setCursor] = useState({ x: -100, y: -100, label: "", visible: false });

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal], main > section, main > article > section")
    );

    if (reduceMotion) {
      revealTargets.forEach((target) => target.classList.add("is-visible"));
    } else {
      const observer = new IntersectionObserver(
        (entries) => entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          const repeats = target.hasAttribute("data-reveal-repeat");
          if (entry.isIntersecting) {
            target.classList.add("is-visible");
            if (!repeats) observer.unobserve(target);
          } else if (repeats) {
            target.classList.remove("is-visible");
          }
        }),
        { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
      );
      revealTargets.forEach((target) => {
        target.classList.add("scroll-reveal");
        observer.observe(target);
      });

      const updatePointer = (event: PointerEvent) => {
        document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
        document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
        if (event.pointerType !== "touch") trail.current.push({ x: event.clientX, y: event.clientY, life: 1 });
        const element = (event.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
        setCursor({
          x: event.clientX,
          y: event.clientY,
          label: element?.dataset.cursor ?? "",
          visible: Boolean(element)
        });
      };
      window.addEventListener("pointermove", updatePointer, { passive: true });

      return () => {
        observer.disconnect();
        window.removeEventListener("pointermove", updatePointer);
      };
    }
  }, []);

  useEffect(() => {
    const canvas = trailCanvas.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    let animation = 0;
    const resize = () => { const ratio = Math.min(devicePixelRatio, 2); canvas.width = innerWidth * ratio; canvas.height = innerHeight * ratio; canvas.style.width = `${innerWidth}px`; canvas.style.height = `${innerHeight}px`; context.setTransform(ratio, 0, 0, ratio, 0, 0); };
    const draw = () => {
      context.clearRect(0, 0, innerWidth, innerHeight);
      trail.current = trail.current.slice(-24).filter((point) => (point.life -= .035) > 0);
      trail.current.forEach((point, index) => { const size = 1 + (index / Math.max(1, trail.current.length)) * 3; context.beginPath(); context.arc(point.x, point.y, size, 0, Math.PI * 2); context.fillStyle = `rgba(184,255,56,${point.life * .42})`; context.fill(); });
      animation = requestAnimationFrame(draw);
    };
    resize(); draw(); window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(animation); window.removeEventListener("resize", resize); };
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(available > 0 ? window.scrollY / available : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <>
      <canvas ref={trailCanvas} className="pointer-events-none fixed inset-0 z-[65] hidden lg:block" aria-hidden="true" />
      <div className="fixed left-0 top-0 z-[70] h-[3px] bg-signal transition-[width] duration-100" style={{ width: `${progress * 100}%` }} aria-hidden="true" />
      <div
        className={`pointer-events-none fixed z-[90] hidden -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal px-4 py-3 text-[10px] font-bold uppercase tracking-[.14em] text-white transition-[opacity,transform] duration-200 lg:block ${cursor.visible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
        style={{ left: cursor.x, top: cursor.y }}
        aria-hidden="true"
      >
        {cursor.label}
      </div>
    </>
  );
}
