import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Competencies", href: "#competencies" },
  { name: "Projects", href: "#projects" },
  { name: "Philosophy", href: "#philosophy" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const isActive = (href: string) => activeSection === href.slice(1);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
          ? "py-3 border-b border-white/5"
          : "py-5 border-b border-transparent"
          }`}
        style={scrolled ? {
          background: "rgba(5, 7, 15, 0.85)",
          backdropFilter: "blur(20px) saturate(180%)",
          boxShadow: "0 1px 40px rgba(0,0,0,0.5)",
        } : undefined}
      >
        {scrolled && (
          <div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{ background: "linear-gradient(to right, transparent, rgba(96,165,250,0.4), transparent)" }}
          />
        )}

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

          <motion.a
            href="#"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="group flex items-center gap-3"
          >
            <div className="relative w-9 h-9 rounded-lg flex items-center justify-center overflow-hidden border border-white/10 group-hover:border-blue-400/40 transition-colors duration-300"
              style={{ background: "rgba(96,165,250,0.08)" }}
            >
              <div className="absolute top-0 left-0 w-2 h-px bg-blue-400/60" />
              <div className="absolute top-0 left-0 h-2 w-px bg-blue-400/60" />
              <div className="absolute bottom-0 right-0 w-2 h-px bg-blue-400/40" />
              <div className="absolute bottom-0 right-0 h-2 w-px bg-blue-400/40" />
              <span className="font-mono font-black text-sm text-blue-400 tracking-tighter">AN</span>
            </div>
            <span className="hidden sm:block font-semibold text-base tracking-tight text-white/90 group-hover:text-white transition-colors duration-200">
              Ayush Nigam
            </span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.07, duration: 0.4 }}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${isActive(link.href)
                  ? "text-white"
                  : "text-zinc-500 hover:text-zinc-200"
                  }`}
              >
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: "rgba(96,165,250,0.08)",
                      border: "1px solid rgba(96,165,250,0.2)",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.36, duration: 0.4 }}
              className="group relative ml-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white overflow-hidden"
              style={{
                background: "rgba(59,130,246,1)",
                boxShadow: "0 0 20px rgba(59,130,246,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Let's Talk
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-linear-to-r from-transparent via-white/20 to-transparent" />
            </motion.a>
          </nav>

          <button
            className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-lg border border-white/8 bg-white/3 text-zinc-400 hover:text-white hover:border-white/16 transition-all"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? "x" : "menu"}
                initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                transition={{ duration: 0.18 }}
                className="absolute"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14.25 inset-x-0 z-40 md:hidden border-b border-white/8 px-6 py-4 flex flex-col gap-1"
            style={{
              background: "rgba(5, 7, 15, 0.97)",
              backdropFilter: "blur(24px)",
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive(link.href)
                  ? "text-white bg-blue-400/8 border border-blue-400/20"
                  : "text-zinc-500 hover:text-white hover:bg-white/4"
                  }`}
              >
                <span>{link.name}</span>
                {isActive(link.href) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                )}
              </motion.a>
            ))}

            <div className="mt-2 pt-3 border-t border-white/5">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white"
                style={{
                  background: "rgba(59,130,246,1)",
                  boxShadow: "0 0 20px rgba(59,130,246,0.3)",
                }}
              >
                Let's Talk
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}