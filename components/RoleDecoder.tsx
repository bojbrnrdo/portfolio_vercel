"use client";

import { useEffect, useState } from "react";

const finalText = "Full-Stack Developer · Software QA";
const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[]";

export function RoleDecoder() {
  const [text, setText] = useState(finalText);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let iteration = 0;
    const timer = window.setInterval(() => {
      setText(finalText.split("").map((character, index) => {
        if (character === " " || character === "·") return character;
        if (index < iteration) return finalText[index];
        return glyphs[Math.floor(Math.random() * glyphs.length)];
      }).join(""));
      iteration += 1.2;
      if (iteration >= finalText.length) {
        window.clearInterval(timer);
        setText(finalText);
      }
    }, 34);
    return () => window.clearInterval(timer);
  }, []);

  return <span aria-label={finalText}>{text}</span>;
}
