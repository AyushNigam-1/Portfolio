import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Terminal, Cpu, Globe } from "lucide-react";

const STATS = [
  { label: "Stack Depth", value: "Full", icon: Cpu },
  { label: "Uptime", value: "99.9%", icon: Globe },
];

const TERMINAL_LINES = [
  { delay: 0.8, prompt: true, text: "cat ./skills.yml" },
  { delay: 1.2, prompt: false, text: "AI_ML:   [LangChain, RAG, Agents, MCP, N8N]" },
  { delay: 1.5, prompt: false, text: "Backend: [FastAPI, Express, GraphQL, PostgreSQL, MongoDB]" },
  { delay: 1.8, prompt: false, text: "Frontend: [Next.js, TanStack Query, Vue.js, React.js]" },
  { delay: 2.4, prompt: true, text: "cat ./philosophy.md" },
  { delay: 3.0, prompt: false, text: "→  Veni, Vidi, Vici. Shipping is the only metric.", accent: true },
  { delay: 3.6, prompt: true, text: "", cursor: true },
];

function Scanlines() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 opacity-[0.03]"
      style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.8) 2px, rgba(255,255,255,0.8) 4px)",
      }}
    />
  );
}

function CornerBracket({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const isTop = position.startsWith("t");
  const isLeft = position.endsWith("l");
  return (
    <div className={`absolute w-6 h-6 ${isTop ? "top-0" : "bottom-0"} ${isLeft ? "left-0" : "right-0"}`}>
      <div className={`absolute w-px h-6 bg-blue-400/40 ${isLeft ? "left-0" : "right-0"} ${isTop ? "top-0" : "bottom-0"}`} />
      <div className={`absolute h-px w-6 bg-blue-400/40 ${isLeft ? "left-0" : "right-0"} ${isTop ? "top-0" : "bottom-0"}`} />
    </div>
  );
}

export function Hero() {
  const [typedTitle, setTypedTitle] = useState("");
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const fullTitle = "Ayush Nigam";
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedTitle(fullTitle.substring(0, i));
      i++;
      if (i > fullTitle.length) clearInterval(interval);
    }, 90);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    TERMINAL_LINES.forEach((line, idx) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, idx]);
      }, line.delay * 1000);
    });
  }, []);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 30);
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 30);
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-0 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      <Scanlines />

      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 40%, rgba(0,0,0,0.7) 100%)" }}
      />

      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute top-1/4 -left-48 w-125 h-125 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute bottom-1/4 -right-48 w-100 h-100 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Top status bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-10 pb-4 border-b border-white/5"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex size-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-emerald-400" />
            </span>
            <span className="text-xs font-mono text-emerald-400/80 tracking-widest uppercase">Systems Online</span>
          </div>

          <span className="text-xs font-mono text-white/20">v2.0.0</span>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 xl:gap-16 items-start">
          {/* LEFT COLUMN */}
          <div className="flex flex-col">
            {/* <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 mb-6 w-fit"
            >
              <div className="h-px w-8 bg-blue-400/60" />
              <span className="text-xs font-mono text-blue-400/80 tracking-[0.2em] uppercase">Full-Stack · AI Systems · Open Source</span>
            </motion.div> */}

            <div className="mb-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[clamp(3rem,7vw,7rem)] md:text-[clamp(2rem,5vw,5rem)] font-black tracking-[-0.04em] leading-[0.9] text-white"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {typedTitle || "\u00A0"}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-blue-400 ml-1"
                >_</motion.span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-start gap-3 mb-6"
            >
              <div className="w-1 self-stretch bg-blue-400/60 rounded-full mt-1 shrink-0" />
              <p className="text-xl md:text-2xl font-medium text-zinc-300 leading-snug">
                Building production-grade, scalable systems
                <br />
                <span className="text-zinc-500">across AI & Modern Web.</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-3 mb-8"
            >
              {STATS.map(({ label, value, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="relative group rounded-lg border border-white/8 bg-white/3 px-4 py-3 hover:border-blue-400/30 hover:bg-white/5 transition-all"
                >
                  <CornerBracket position="tl" />
                  <CornerBracket position="br" />
                  <div className="flex items-center gap-2">
                    <Icon size={12} className="text-blue-400/60 shrink-0" />
                    <span className="text-lg font-bold text-white font-mono">{value}</span>
                  </div>
                  <p className="text-[10px] text-zinc-500 font-mono tracking-wide mt-0.5">{label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold text-sm overflow-hidden transition-all hover:bg-blue-400"
                style={{ boxShadow: "0 0 30px rgba(59,130,246,0.35), inset 0 1px 0 rgba(255,255,255,0.15)" }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Architecture & Projects
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/10 bg-white/3 text-white/80 font-medium text-sm hover:bg-white/[0.07] hover:border-white/20 hover:text-white transition-all"
              >
                <Terminal size={15} className="text-blue-400" />
                Contact Me
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-px rounded-xl bg-linear-to-br from-blue-500/20 via-transparent to-indigo-500/10 blur-sm pointer-events-none" />

            <div className="relative rounded-xl bg-[#090c14] border border-white/10 overflow-hidden shadow-2xl">
              <div className="flex items-center px-4 py-3 bg-white/3 border-b border-white/5 gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/4 border border-white/5">
                    <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-mono text-zinc-400">ayush@portfolio:~</span>
                  </div>
                </div>
                <div className="w-16" />
              </div>

              {/* 🌟 FIX: Cleaned up mapping logic to prevent double arrows and fix alignment */}
              <div className="p-5 min-h-64 font-mono text-sm space-y-1.5">
                {TERMINAL_LINES.map((line, idx) =>
                  visibleLines.includes(idx) ? (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-3 leading-relaxed min-h-6"
                    >
                      {line.prompt && <span className="text-blue-400 font-bold shrink-0">❯</span>}

                      {!line.prompt && !line.accent && (
                        <span className="text-zinc-500 pl-5">{line.text}</span>
                      )}

                      {line.accent && (
                        <span className="text-emerald-400/90 pl-3 italic border-l-2 border-emerald-400/30">
                          {line.text}
                        </span>
                      )}

                      {line.prompt && line.text && (
                        <span className="text-zinc-200">{line.text}</span>
                      )}

                      {line.cursor && (
                        <motion.span
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="w-2.5 h-4 bg-blue-400 inline-block align-middle ml-1"
                        />
                      )}
                    </motion.div>
                  ) : null
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 px-4 py-3 sm:py-2 bg-blue-500/10 border-t border-blue-500/20">

                <div className="flex items-center justify-between w-full sm:w-auto sm:justify-start gap-4">
                  <span className="text-[10px] font-mono text-blue-400/70">BRANCH: main</span>
                  <span className="text-[10px] font-mono text-emerald-400/70">● CLEAN</span>
                </div>


              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="my-6 pt-4 border-t border-white/5 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-4"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {["INDIA", "UTC+5:30", "Open to Remote"].map((item) => (
              <span key={item} className="text-xs font-mono text-zinc-600 hover:text-zinc-400 transition-colors text-center">
                {item}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-12 md:w-16 bg-linear-to-r from-transparent to-blue-400/40" />
            <span className="text-[10px] font-mono text-zinc-600 tracking-widest text-center">SCROLL TO EXPLORE</span>
            <div className="h-px w-12 md:w-16 bg-linear-to-l from-transparent to-blue-400/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}