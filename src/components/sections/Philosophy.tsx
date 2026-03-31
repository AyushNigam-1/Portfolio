import { motion } from "framer-motion";
import { Zap, Shield, Cpu, GitMerge } from "lucide-react";

const PRINCIPLES = [
  {
    icon: Zap,
    title: "Ship or it doesn't exist",
    body: "Code that's never deployed has zero value. I bias toward working software over perfect plans.",
    accent: "#60a5fa",
  },
  {
    icon: Shield,
    title: "Fast, secure, purposeful",
    body: "Every system I architect meets a real constraint — performance, resilience, or user trust.",
    accent: "#a78bfa",
  },
  {
    icon: Cpu,
    title: "Complexity is earned",
    body: "I don't over-engineer. Architecture scales with problem complexity, not personal preference.",
    accent: "#34d399",
  },
  {
    icon: GitMerge,
    title: "Self-taught by choice",
    body: "I bypassed the academic route to spend that time building production systems instead.",
    accent: "#f472b6",
  },
];

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative py-28 border-y border-white/5 overflow-hidden font-sans"
    >
      {/* Layered background */}
      <div className="absolute inset-0 bg-[#05070f] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(96,165,250,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96,165,250,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Radial fade over grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, #05070f 100%)" }}
      />
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* ── SECTION LABEL ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-xs font-mono text-blue-400/70 tracking-[0.2em] uppercase">— 04</span>
          <div className="h-px w-8 bg-blue-400/40" />
          <span className="text-xs font-mono text-zinc-600 tracking-widest uppercase">Engineering Philosophy</span>
        </motion.div>

        {/* ── TWO COLUMN LAYOUT ── */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 xl:gap-24 items-start mb-16">

          {/* LEFT — Manifesto */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Big quote */}
            <div className="relative mb-10">
              {/* Decorative quote mark */}
              <div
                className="absolute -top-6 -left-4 text-[100px] leading-none font-black text-blue-400/10 select-none pointer-events-none"
                aria-hidden
              >
                "
              </div>

              <blockquote className="relative">
                <p className="text-3xl md:text-[2.6rem] font-black tracking-[-0.03em] leading-[1.15] text-white">
                  I build scalable software.
                  <br />
                  <span className="text-zinc-500">
                    I bypassed the traditional
                    <br />
                    academic route to focus
                    <br />
                    entirely on
                  </span>
                  {" "}
                  <span
                    className="relative inline-block"
                    style={{
                      background: "linear-gradient(135deg, #60a5fa, #a78bfa)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    applied engineering.
                  </span>
                </p>
              </blockquote>

              {/* Animated accent line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "6rem" }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                className="mt-8 h-[2px] rounded-full"
                style={{ background: "linear-gradient(to right, #60a5fa, #a78bfa, transparent)" }}
              />
            </div>

            {/* Body paragraphs */}
            <div className="space-y-5 text-zinc-400 leading-relaxed text-base max-w-lg">
              <p>
                As a self-taught developer, I've cultivated a deep, practical
                understanding of modern web architecture, AI integrations, and
                containerized systems — built through real projects, not coursework.
              </p>
              <p>
                My core philosophy is simple:{" "}
                <span className="text-white font-semibold">
                  software should be fast, secure, and solve real problems.
                </span>{" "}
                I measure my progress not by certificates, but by the complexity of
                the systems I can architect and deploy.
              </p>
            </div>

            {/* Divider with label */}
            <div className="flex items-center gap-3 mt-10">
              <div className="h-px flex-1 bg-white/5" />
              <span className="text-[10px] font-mono text-zinc-700 tracking-widest uppercase">Veni · Vidi · Vici</span>
              <div className="h-px flex-1 bg-white/5" />
            </div>
          </motion.div>

          {/* RIGHT — Principles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PRINCIPLES.map(({ icon: Icon, title, body, accent }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative rounded-xl border border-white/6 bg-white/[0.02] p-5 hover:border-white/12 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden"
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[1.5px] opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to right, ${accent}, transparent)` }}
                />

                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 transition-all duration-300"
                  style={{
                    background: accent + "15",
                    border: `1px solid ${accent}30`,
                    color: accent,
                  }}
                >
                  <Icon size={16} />
                </div>

                <h4 className="text-sm font-bold text-white mb-2 leading-tight">{title}</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── FULL-WIDTH STAT BAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 border border-white/6 rounded-2xl overflow-hidden"
        >
          {[
            { value: "100%", label: "Self-Taught" },
            { value: "3+", label: "Years Building" },
            { value: "Zero", label: "Certificate Dependency" },
            { value: "∞", label: "Problems to Solve" },
          ].map(({ value, label }, i) => (
            <div
              key={label}
              className={`relative px-6 py-5 bg-white/[0.015] hover:bg-white/[0.035] transition-colors group ${i < 3 ? "border-r border-white/6" : ""
                }`}
            >
              <div className="text-2xl font-black text-white font-mono mb-0.5">{value}</div>
              <div className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase">{label}</div>
              <div
                className="absolute bottom-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(to right, #60a5fa40, transparent)" }}
              />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}