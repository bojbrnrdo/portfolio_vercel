"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function ScrollPortrait() {
  const [depth, setDepth] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const viewport = Math.max(window.innerHeight, 1);
        setDepth(Math.min(window.scrollY / (viewport * 1.8), 1));
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const portrait = (
    <>
      <div className="absolute inset-[8%] rounded-full border border-white/10" />
      <div className="absolute inset-[18%] animate-[spin_18s_linear_infinite] rounded-full border border-dashed border-signal/35" />
      <div className="absolute bottom-[4%] left-1/2 h-[12%] w-[72%] -translate-x-1/2 rounded-[50%] bg-black/80 blur-2xl" />
      <Image
        src="/me.png"
        alt="Job Matthew Bernardo wearing a light suit and dark tie"
        fill
        priority
        sizes="(min-width: 1024px) 48vw, 90vw"
        className="hero-portrait object-contain object-bottom drop-shadow-[0_35px_60px_rgba(0,0,0,.8)]"
      />
      <div className="scanline pointer-events-none z-10 opacity-40" />
      <span className="absolute bottom-[8%] right-0 z-20 border-r-2 border-signal bg-black/65 px-4 py-3 text-right text-[9px] font-bold uppercase tracking-[.18em] text-white/70 backdrop-blur">
        Dev · QA · Web<br /><b className="text-signal">Profile 2026</b>
      </span>
    </>
  );

  return (
    <div className="relative z-10 mx-auto aspect-[4/5] w-full max-w-[34rem] self-end md:col-span-5 lg:col-span-6">
      <div className="absolute inset-0 md:hidden">{portrait}</div>
      <div
        className="pointer-events-none fixed bottom-0 right-[max(2rem,calc((100vw-1440px)/2))] z-[8] hidden h-[78vh] w-[47vw] max-w-[680px] transition-[filter,opacity,transform] duration-200 ease-out md:block"
        style={{
          opacity: 1 - depth * 0.94,
          filter: `blur(${depth * 20}px) saturate(${1 - depth * 0.45})`,
          transform: `translateY(${depth * 28}px) scale(${1 + depth * 0.045})`
        }}
      >
        {portrait}
      </div>
    </div>
  );
}
