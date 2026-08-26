import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { ExperienceLayer } from "@/components/ExperienceLayer";
import { CodeBackdrop } from "@/components/CodeBackdrop";

export const metadata: Metadata = {
  metadataBase: new URL("https://jobmatthew.dev"),
  title: {
    default: "Job Matthew Bernardo — Web Developer",
    template: "%s — Job Matthew M. Bernardo"
  },
  description: "Web developer portfolio of Job Matthew Bernardo—responsive interfaces, full-stack applications, and practical digital products.",
  openGraph: {
    title: "Job Matthew Bernardo — Web Developer",
    description: "Web development, responsive interfaces, full-stack applications, and practical digital products.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme-v2');var d=t?t==='dark':true;document.documentElement.classList.toggle('dark',d)}catch(e){document.documentElement.classList.add('dark')}})();`
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ExperienceLayer />
        <CodeBackdrop />
        <a href="#main-content" className="fixed left-3 top-3 z-[100] -translate-y-24 bg-signal px-4 py-3 text-sm font-bold text-white focus:translate-y-0">
          Skip to content
        </a>
        <Header />
        {children}
      </body>
    </html>
  );
}
