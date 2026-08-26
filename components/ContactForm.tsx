"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !validEmail || !message) {
      setState("error");
      return;
    }
    setState("sending");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nReply to: ${email}`);
    window.setTimeout(() => {
      setState("success");
      window.location.href = `mailto:jobmatthewbernardo@gmail.com?subject=${subject}&body=${body}`;
    }, 350);
  }

  if (state === "success") {
    return (
      <div className="border border-paper/30 p-6" role="status">
        <p className="eyebrow text-signal">Email prepared</p>
        <h3 className="mt-3 font-display text-3xl">Your email app should now be open.</h3>
        <p className="mt-4 text-sm leading-6 text-paper/65">Review the prepared message and press send. If nothing opened, email jobmatthewbernardo@gmail.com directly.</p>
        <button onClick={() => setState("idle")} className="mt-5 min-h-11 border-b border-paper text-sm font-bold">Send another</button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="grid gap-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-bold">Name</label>
        <input id="name" name="name" autoComplete="name" required className="min-h-12 w-full border border-paper/35 bg-transparent px-4 text-paper placeholder:text-paper/35" placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-bold">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required className="min-h-12 w-full border border-paper/35 bg-transparent px-4 text-paper placeholder:text-paper/35" placeholder="you@organization.com" />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-bold">What needs to change?</label>
        <textarea id="message" name="message" required rows={5} className="w-full border border-paper/35 bg-transparent p-4 text-paper placeholder:text-paper/35" placeholder="The context, what is not working, and what success should look like." />
      </div>
      {state === "error" && <p className="text-sm font-bold text-[#ff8c7c]" role="alert">Please provide your name, a valid email address, and a message.</p>}
      <button disabled={state === "sending"} className="min-h-12 bg-signal px-6 text-sm font-bold text-white transition hover:bg-[#c93624] disabled:cursor-wait disabled:opacity-60">
        {state === "sending" ? "Preparing message…" : "Start a conversation →"}
      </button>
      <a className="text-center text-sm font-bold text-paper/70 hover:text-signal" href="mailto:jobmatthewbernardo@gmail.com">Or email me directly ↗</a>
    </form>
  );
}
