export function Footer() {
  return (
    <footer className="px-4 pb-4">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 border-t border-paper/15 bg-ink px-6 py-7 text-xs text-paper/50 md:flex-row md:items-center md:justify-between md:px-14">
        <p>© {new Date().getFullYear()} Job Matthew Bernardo</p>
        <p>Designed and developed with care in Bulacan, Philippines.</p>
      </div>
    </footer>
  );
}
