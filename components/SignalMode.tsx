"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

export function SignalMode() {
  const [active, setActive] = useState(false);

  return (
    <section className="border-y border-ink bg-ink py-5 text-paper" aria-label="Signal mode">
      <div className="container-grid">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow text-paper/55">Signature view / 00</p>
            <h2 className="mt-2 text-xl font-semibold">Short on time? Reduce the portfolio to evidence.</h2>
          </div>
          <button
            type="button"
            aria-pressed={active}
            onClick={() => setActive((value) => !value)}
            className="min-h-12 shrink-0 border border-paper px-5 text-sm font-bold transition hover:bg-paper hover:text-ink"
          >
            {active ? "Close signal mode" : "Activate signal mode"}
          </button>
        </div>
        {active && (
          <div className="mt-6 grid gap-px bg-paper/25 md:grid-cols-3" role="status">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} data-cursor="Inspect" className="group bg-ink p-5 transition duration-500 hover:-translate-y-1 hover:bg-[#24231f]">
                <span className="eyebrow text-signal">{project.result}</span>
                <h3 className="mt-3 max-w-xs font-display text-2xl">{project.title}</h3>
                <p className="mt-4 text-sm leading-6 text-paper/65">{project.resultLabel}</p>
                <span className="mt-6 inline-block text-sm font-bold group-hover:text-signal">Inspect evidence →</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
