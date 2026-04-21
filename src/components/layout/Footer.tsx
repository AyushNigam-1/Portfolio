const NAV_LINKS = [
  { name: "Competencies", href: "#competencies" },
  { name: "Projects", href: "#projects" },
  { name: "Philosophy", href: "#philosophy" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#05070f] font-sans overflow-hidden">

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(96,165,250,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96,165,250,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Radial fade */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, transparent 30%, #05070f 100%)" }}
      />
      {/* Top glow line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(96,165,250,0.3), transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        {/* ── UPPER ROW ── */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-10 md:gap-16 items-start border-b border-white/5">

          {/* Brand blurb */}
          <div className="flex flex-col gap-5 max-w-xs">
            <a href="#" className="group flex items-center gap-3 w-fit">
              <img src="/favicon.ico" className="w-7" />

              <span className="font-semibold text-base text-white/80 group-hover:text-white transition-colors">
                Ayush Nigam
              </span>
            </a>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Full-stack engineer building production-grade systems across AI & modern web.
            </p>
            {/* Status pill */}
            <div className="flex items-center gap-2 w-fit px-3 py-1.5 rounded-lg border border-emerald-400/20 bg-emerald-400/5">
              <span className="relative flex size-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full size-1.5 bg-emerald-400" />
              </span>
              <span className="text-xs font-mono text-emerald-400">Open to Work</span>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <div className="text-[10px] font-mono text-zinc-700 tracking-widest uppercase mb-1">Navigation</div>
            {NAV_LINKS.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-zinc-500 hover:text-white transition-colors duration-150 w-fit"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* ── LOWER ROW ── */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-center gap-4">

          <p className="text-xs font-mono text-zinc-700 flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span>© {new Date().getFullYear()} Ayush Nigam</span>
            <span className="text-zinc-800">·</span>
            <span>All rights reserved</span>
          </p>



        </div>

      </div>
    </footer>
  );
}