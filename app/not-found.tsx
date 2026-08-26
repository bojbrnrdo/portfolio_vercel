import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="container-grid grid min-h-[70svh] content-center py-20">
      <p className="eyebrow text-signal">404 / Signal not found</p>
      <h1 className="mt-6 max-w-4xl font-display text-6xl leading-[.9] md:text-9xl">This route has no accountable owner.</h1>
      <p className="mt-8 max-w-xl text-lg leading-8 text-muted">The page may have moved, but the evidence is still available from the project index.</p>
      <Link href="/" className="mt-8 inline-flex min-h-12 w-fit items-center bg-ink px-6 text-sm font-bold text-paper hover:bg-signal">Return to the portfolio</Link>
    </main>
  );
}
