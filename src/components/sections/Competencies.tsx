import { motion } from "framer-motion";
import { Code2, Server, Database, BrainCircuit, Box, ShieldCheck } from "lucide-react";

const skills = [
  {
    category: "Frontend & UI/UX",
    icon: Code2,
    color: { accent: "#60a5fa", glow: "rgba(96,165,250,0.12)", border: "rgba(96,165,250,0.25)", tag: "rgba(96,165,250,0.08)" },
    tags: ["Next.js", "React 19", "Vue.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Headless UI", "Framer Motion", "Apollo Client"],
    depth: 95,
  },
  {
    category: "AI & Machine Learning",
    icon: BrainCircuit,
    color: { accent: "#f472b6", glow: "rgba(244,114,182,0.12)", border: "rgba(244,114,182,0.25)", tag: "rgba(244,114,182,0.08)" },
    tags: ["Groq API", "Gemini API", "LangChain", "LangGraph", "LangServe", "RAG Pipelines", "MCP", "AI Agents", "Vector Embedding ", "Reranker"],
    depth: 88,
  },
  {
    category: "Data & Caching",
    icon: Database,
    color: { accent: "#34d399", glow: "rgba(52,211,153,0.12)", border: "rgba(52,211,153,0.25)", tag: "rgba(52,211,153,0.08)" },
    tags: ["MongoDB", "PostgreSQL", "SQL", "Redis", "Pinecone (Vector DB)", "Mongoose", "Prisma", "FAISS (Vector DB)", "SQLAlchemy",
      "TanStack Query"
    ],
    depth: 82,
  },
  {
    category: "Backend & Systems",
    icon: Server,
    color: { accent: "#a78bfa", glow: "rgba(167,139,250,0.12)", border: "rgba(167,139,250,0.25)", tag: "rgba(167,139,250,0.08)" },
    tags: ["Node.js", "FastAPI", "Flask", "Django", "GraphQL", "WebSockets", "Express"],
    depth: 90,
  },


  {
    category: "DevOps & Infrastructure",
    icon: Box,
    color: { accent: "#fb923c", glow: "rgba(251,146,60,0.12)", border: "rgba(251,146,60,0.25)", tag: "rgba(251,146,60,0.08)" },
    tags: ["Docker", "Docker Compose", "Hosting", "GitHub Actions", "Nginx", "Microservices"],
    depth: 78,
  },
  {
    category: "Security & Cryptography",
    icon: ShieldCheck,
    color: { accent: "#facc15", glow: "rgba(250,204,21,0.12)", border: "rgba(250,204,21,0.25)", tag: "rgba(250,204,21,0.08)" },
    tags: ["OAuth 2.0 & JWT", "RBAC", , "Middleware", "Data Encryption", "Rate Limiter", 'CORS'],
    depth: 75,
  },
];

export function Competencies() {
  return (
    <section id="competencies" className="py-28 bg-transparent border-t border-white/5 relative font-sans overflow-hidden">

      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* ── SECTION HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-start justify-between flex-wrap gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono text-blue-400/70 tracking-[0.2em] uppercase">— 01</span>
                <div className="h-px w-8 bg-blue-400/40" />
                <span className="text-xs font-mono text-zinc-600 tracking-widest uppercase">Skills Matrix</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-[-0.03em] text-white">
                Core Competencies
              </h2>
            </div>
            <div className="flex items-end gap-8 pb-2">
              <div className="text-right">
                <div className="text-3xl font-black text-white font-mono">6</div>
                <div className="text-xs font-mono text-zinc-500 tracking-widest mt-1">DOMAINS</div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-black text-white font-mono">40+</div>
                <div className="text-xs font-mono text-zinc-500 tracking-widest mt-1">TECHNOLOGIES</div>
              </div>
            </div>
          </div>

          {/* Full-width rule */}
          <div className="mt-8 h-px w-full bg-linear-to-r from-blue-400/30 via-white/5 to-transparent" />
        </motion.div>

        {/* ── SKILL CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
                className="group relative flex flex-col rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  transition: "border-color 0.4s, box-shadow 0.4s",
                }}
                whileHover={{
                  boxShadow: `0 0 40px ${skill.color.glow}, inset 0 1px 0 rgba(255,255,255,0.05)`,
                }}
              >
                {/* Top colored bar */}
                <div
                  className="h-0.5 w-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to right, ${skill.color.accent}, transparent)` }}
                />

                {/* Card body */}
                <div className="flex flex-col p-6 flex-1">

                  {/* Icon + title row */}
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300"
                      style={{
                        background: skill.color.glow,
                        border: `1px solid ${skill.color.border}`,
                        color: skill.color.accent,
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white leading-tight">{skill.category}</h3>
                      <div className="flex items-center gap-2 mt-1.5">
                        <div className="w-20 h-0.75 rounded-full bg-white/8 overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ background: skill.color.accent }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.depth}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 + 0.4, duration: 0.8, ease: "easeOut" }}
                          />
                        </div>
                        <span className="text-[10px] font-mono" style={{ color: skill.color.accent }}>
                          {skill.depth}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full mb-5" style={{ background: `linear-gradient(to right, ${skill.color.border}, transparent)` }} />

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {skill.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono tracking-wide rounded-md text-zinc-400 transition-all duration-200 cursor-default group-hover:text-zinc-200"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom-left index */}
                <div className="px-6 py-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-zinc-700 group-hover:text-zinc-500 transition-colors">
                    {String(index + 1).padStart(2, "0")} / {String(skills.length).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-mono" style={{ color: skill.color.accent + "99" }}>
                    {skill.tags.length} tech
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── BOTTOM SPECTRUM BAR ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 p-5 rounded-2xl border border-white/5 bg-white/2"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase">Expertise Spectrum</span>
            <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-600">
              <span>Familiar</span>
              <div className="w-16 h-px bg-linear-to-r from-zinc-700 to-zinc-400" />
              <span>Expert</span>
            </div>
          </div>
          <div className="flex gap-3 flex-wrap">
            {skills.map(skill => (
              <div key={skill.category} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ background: skill.color.accent }} />
                <span className="text-[11px] font-mono text-zinc-500">{skill.category.split(" & ")[0]}</span>
                <span className="text-[11px] font-mono font-bold" style={{ color: skill.color.accent }}>{skill.depth}%</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}