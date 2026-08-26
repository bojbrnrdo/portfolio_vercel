"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";

type Command = {
  label: string;
  hint: string;
  keywords: string;
  action: () => void;
};

export function CommandPalette() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const commands = useMemo<Command[]>(() => [
    { label: "Selected work", hint: "Navigate", keywords: "projects case studies work", action: () => router.push("/#work") },
    { label: "Capabilities", hint: "Navigate", keywords: "skills expertise cybersecurity qa", action: () => router.push("/#capabilities") },
    { label: "About Matthew", hint: "Navigate", keywords: "profile experience background", action: () => router.push("/#about") },
    { label: "Contact", hint: "Navigate", keywords: "email opportunity hire", action: () => router.push("/#contact") },
    ...projects.map((project) => ({
      label: project.title,
      hint: `Project ${project.number}`,
      keywords: `${project.category} ${project.role} ${project.client}`,
      action: () => router.push(`/projects/${project.slug}`)
    })),
    {
      label: "Download résumé",
      hint: "PDF",
      keywords: "cv resume download",
      action: () => {
        const anchor = document.createElement("a");
        anchor.href = "/JobMatthewBernardo-Resume.pdf";
        anchor.download = "JobMatthewBernardo-Resume.pdf";
        anchor.click();
      }
    },
    {
      label: "Switch color theme",
      hint: "Appearance",
      keywords: "dark light mode color",
      action: () => {
        const next = !document.documentElement.classList.contains("dark");
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("portfolio-theme", next ? "dark" : "light");
      }
    },
    {
      label: "Email Job Matthew",
      hint: "Contact",
      keywords: "message email hire",
      action: () => { window.location.href = "mailto:jobmatthewbernardo@gmail.com"; }
    }
  ], [router]);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return commands;
    return commands.filter((command) => `${command.label} ${command.keywords}`.toLowerCase().includes(normalized));
  }, [commands, query]);

  function close() {
    setOpen(false);
    setQuery("");
    setActive(0);
  }

  function run(command: Command) {
    close();
    command.action();
  }

  useEffect(() => {
    const openPalette = () => setOpen(true);
    const keyboard = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") close();
    };
    window.addEventListener("open-command-palette", openPalette);
    window.addEventListener("keydown", keyboard);
    return () => {
      window.removeEventListener("open-command-palette", openPalette);
      window.removeEventListener("keydown", keyboard);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => setActive(0), [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[120] grid items-start bg-[#020305]/75 px-3 pt-[10vh] backdrop-blur-md md:pt-[15vh]" onMouseDown={(event) => event.target === event.currentTarget && close()}>
      <section role="dialog" aria-modal="true" aria-label="Portfolio command palette" className="mx-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-white/15 bg-[#101318] text-[#f3f4ed] shadow-[0_35px_100px_rgba(0,0,0,.55)]">
        <div className="flex items-center gap-3 border-b border-white/10 p-4">
          <span className="text-signal" aria-hidden="true">⌘</span>
          <label htmlFor="command-search" className="sr-only">Search portfolio commands</label>
          <input
            ref={inputRef}
            id="command-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "ArrowDown") {
                event.preventDefault();
                setActive((value) => Math.min(value + 1, results.length - 1));
              }
              if (event.key === "ArrowUp") {
                event.preventDefault();
                setActive((value) => Math.max(value - 1, 0));
              }
              if (event.key === "Enter" && results[active]) run(results[active]);
            }}
            placeholder="Go to a project, section, or action…"
            className="min-h-12 flex-1 bg-transparent text-base outline-none placeholder:text-white/35"
          />
          <button onClick={close} className="min-h-10 rounded-lg border border-white/15 px-3 text-[10px] font-bold uppercase tracking-wider text-white/60 hover:text-white">Esc</button>
        </div>
        <div className="max-h-[55vh] overflow-y-auto p-2" role="listbox" aria-label="Commands">
          {results.length ? results.map((command, index) => (
            <button
              key={`${command.hint}-${command.label}`}
              type="button"
              role="option"
              aria-selected={active === index}
              onMouseEnter={() => setActive(index)}
              onClick={() => run(command)}
              className={`flex min-h-14 w-full items-center justify-between rounded-xl px-4 text-left transition ${active === index ? "bg-signal text-[#080a0d]" : "text-white/75 hover:bg-white/5"}`}
            >
              <span className="font-semibold">{command.label}</span>
              <span className={`text-[10px] font-black uppercase tracking-[.12em] ${active === index ? "text-[#080a0d]/60" : "text-white/30"}`}>{command.hint}</span>
            </button>
          )) : (
            <p className="p-8 text-center text-sm text-white/45">No matching evidence or action.</p>
          )}
        </div>
        <div className="flex justify-between border-t border-white/10 px-5 py-3 text-[10px] uppercase tracking-wider text-white/35">
          <span>↑↓ Navigate · Enter select</span><span>Quick access</span>
        </div>
      </section>
    </div>
  );
}
