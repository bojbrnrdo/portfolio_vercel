"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/data/projects";

export function ProjectWorkbench() {
  const [selected, setSelected] = useState(0);
  const project = projects[selected];

  return (
    <div className="workspace-panel overflow-hidden">
      <div className="workspace-titlebar"><div className="flex gap-1.5"><i /><i /><i /></div><span>projects.workspace</span><span className="text-signal">● ready</span></div>
      <div className="grid min-h-[680px] lg:grid-cols-[250px_1fr]">
        <aside className="border-b border-ink/10 bg-ash/50 p-3 lg:border-b-0 lg:border-r">
          <p className="px-3 py-2 text-[9px] font-black uppercase tracking-[.16em] text-muted">Explorer / projects</p>
          <div className="mt-2 flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-1 lg:overflow-visible">
            {projects.map((item, index) => <button key={item.slug} type="button" onClick={() => setSelected(index)} className={`flex min-w-[210px] items-center gap-3 rounded-xl px-3 py-3 text-left transition lg:w-full lg:min-w-0 ${selected === index ? "bg-ink text-paper shadow-lg" : "hover:bg-paper"}`}><span className={`size-2 rounded-full ${selected === index ? "bg-signal" : "bg-muted/30"}`} /><span className="min-w-0"><strong className="block truncate text-xs">{item.slug}.tsx</strong><small className={`mt-1 block truncate text-[9px] ${selected === index ? "text-paper/45" : "text-muted"}`}>{item.category}</small></span></button>)}
          </div>
        </aside>
        <div className="grid min-w-0 lg:grid-rows-[1fr_auto]">
          <div className="relative min-h-[390px] overflow-hidden bg-[#080b11] p-4 md:p-7">
            <div className="absolute inset-0 micro-grid opacity-20" />
            <div className="relative h-full min-h-[350px] overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
              <Image key={project.image} src={project.image} alt={project.imageAlt} fill sizes="(min-width:1024px) 70vw, 100vw" className="object-contain animate-[enter_.55s_cubic-bezier(.22,1,.36,1)]" />
              <span className="absolute right-3 top-3 rounded-lg border border-white/10 bg-black/70 px-3 py-2 text-[9px] font-bold uppercase tracking-wider text-white/55 backdrop-blur">Preview 0{selected + 1}</span>
            </div>
          </div>
          <div className="grid gap-6 border-t border-ink/10 bg-paper p-5 md:grid-cols-[1fr_auto] md:items-end md:p-7">
            <div><div className="flex items-center gap-3"><span className="font-mono text-xs text-signal">0{selected + 1}</span><span className="text-[9px] font-black uppercase tracking-wider text-muted">{project.role} · {project.year}</span></div><h3 className="mt-3 max-w-3xl font-display text-3xl leading-tight md:text-4xl">{project.title}</h3><p className="mt-3 max-w-3xl leading-7 text-muted">{project.summary}</p><p className="mt-4 text-sm"><strong className="text-signal">{project.result}</strong> <span className="text-muted">— {project.resultLabel}</span></p></div>
            <Link href={`/projects/${project.slug}`} className="inline-flex min-h-12 items-center justify-center rounded-xl bg-signal px-5 text-xs font-black text-white transition hover:-translate-y-1 dark:text-[#090b12]">Open case file ↗</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
