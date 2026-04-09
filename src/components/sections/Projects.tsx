import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Activity,
  Box,
  Layers,
} from "lucide-react";

const projects = [
  {
    index: "01",
    name: "Briefly.AI",
    subtitle: "Memory-Driven AI Workspace & Autonomous Task Agent",
    type: "Full-Stack · AI · Automation",
    accent: "#60a5fa",
    glow: "rgba(96,165,250,0.08)",
    github: "https://github.com/AyushNigam-1/Briefly.AI",
    live: "https://trybriefly.vercel.app",
    stack: [
      "Next.js",
      "FastAPI",
      "n8n",
      "Groq",
      "Redis",
      "MongoDB",
      "Framer Motion",
      "Virtua",
    ],
    system:
      "A production-grade AI assistant acting as a digital brain and background worker. Features persistent long-term memory extraction, stateless incognito sessions, multi-model routing (Llama, Qwen, Kimi), and real-time voice synthesis with Redis caching.",
    highlight:
      "Engineered a custom n8n automation interceptor for zero-hallucination background task generation. Optimized UI performance using Virtua for infinite chat scrolling, implementing strict mathematical composite keys and pure opacity transitions to completely eliminate DOM layout shifts during real-time LLM streaming.",
    metrics: [
      { label: "LLM Models", value: "6+" },
      { label: "UI Rendering", value: "Virtualized" },
      { label: "Task Engine", value: "n8n Native" },
    ],
  },
  {
    index: "02",
    name: "Skribe",
    subtitle: "Collaborative Role-Based Drafting Platform",
    type: "Full-Stack · GraphQL · RBAC",
    accent: "#a78bfa",
    glow: "rgba(167,139,250,0.08)",
    github: "https://github.com/AyushNigam-1/Skribe",
    live: "https://skribe-workspace.vercel.app/",
    stack: [
      "React",
      "TypeScript",
      "Apollo GraphQL",
      "Node.js",
      "Redis",
      "Framer Motion",
    ],
    system:
      "A full-stack collaborative editor where users co-author drafts via a timeline-based contribution system. Implements strict Role-Based Access Control (Owner, Editor, Contributor) for draft visibility, paragraph approvals, and secure user invitations.",
    highlight:
      "Engineered a secure, viewer-aware Redis caching architecture to prevent data leaks on private drafts. Built a highly optimistic UI using Apollo Client cache mutations and Framer Motion to ensure layout-shift-free interactions during complex state changes.",
    metrics: [
      { label: "Security", value: "Viewer-Aware Cache" },
      { label: "State", value: "Optimistic Apollo" },
      { label: "UI", value: "Glassmorphism" },
    ],
  },
  {
    index: "03",
    name: "Bewise",
    subtitle: "Intelligent Knowledge Synthesis & Continuous Learning Platform",
    type: "AI Engineering · Full-Stack · RAG",
    accent: "#34d399",
    glow: "rgba(52,211,153,0.08)",
    github: "https://github.com/AyushNigam-1/Bewise",
    live: "https://usebewise.vercel.app/",
    stack: [
      "Next.js 14",
      "FastAPI",
      "SQLModel",
      "PostgreSQL",
      "Pinecone",
      "Redis",
      "React Query",
    ],
    system:
      "A specialized RAG-powered reading assistant that utilizes Vector Embeddings to turn static PDF content into an interactive knowledge base. Features a custom 'Hybrid Context' engine where users can granularly select specific books or extracted insights to act as the LLM's grounding truth.",
    highlight:
      "Engineered a high-performance backend featuring Redis-layered caching for SQL/Vector queries, custom Session Auth middleware with strict CORS preflight (OPTIONS) handling, and a Next.js frontend optimized for atomic state synchronization and layout-stable Framer Motion animations.",
    metrics: [
      { label: "Architecture", value: "Decoupled RAG" },
      { label: "State Sync", value: "React Query + Zustand" },
      { label: "Performance", value: "Redis Cached" },
    ],
    features: [
      "Optimized PostgreSQL 'Overlap' queries for multi-category filtering using explicit TEXT[] array type-casting via SQLModel.",
      "Implemented AbortController integration for real-time AI stream cancellation, optimizing LLM token usage and lowering costs.",
      "Built a consolidated, single-pass API layer that reduced frontend network overhead by 50% through combined metadata and content fetching.",
      "Engineered a zero-flash Dark Mode implementation using non-blocking script injection for seamless theme persistence.",
    ],
  },
];

function CornerMark({ accent }: { accent: string }) {
  return (
    <>
      <div className="absolute top-0 right-0 w-8 h-8">
        <div
          className="absolute top-0 right-0 w-px h-6"
          style={{ background: accent + "50" }}
        />
        <div
          className="absolute top-0 right-0 h-px w-6"
          style={{ background: accent + "50" }}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-8 h-8">
        <div
          className="absolute bottom-0 left-0 w-px h-6"
          style={{ background: accent + "30" }}
        />
        <div
          className="absolute bottom-0 left-0 h-px w-6"
          style={{ background: accent + "30" }}
        />
      </div>
    </>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="py-28 relative font-sans border-t border-white/5 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* ── SECTION HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-start justify-between flex-wrap gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono text-blue-400/70 tracking-[0.2em] uppercase">
                  — 02
                </span>
                <div className="h-px w-8 bg-blue-400/40" />
                <span className="text-xs font-mono text-zinc-600 tracking-widest uppercase">
                  Architecture & Build
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-[-0.03em] text-white">
                System Overviews
              </h2>
            </div>
            <div className="flex items-end gap-8 pb-2">
              <div className="text-right">
                <div className="text-3xl font-black text-white font-mono">
                  {projects.length}
                </div>
                <div className="text-xs font-mono text-zinc-500 tracking-widest mt-1">
                  PROJECTS
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-black text-white font-mono">
                  Prod
                </div>
                <div className="text-xs font-mono text-zinc-500 tracking-widest mt-1">
                  GRADE
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 h-px w-full bg-linear-to-r from-blue-400/30 via-white/5 to-transparent" />
        </motion.div>

        {/* ── PROJECT CARDS ── */}
        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Hover glow bg */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 60% 50% at 0% 50%, ${project.glow}, transparent)`,
                }}
              />

              {/* Left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-0.75 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(to bottom, ${project.accent}, transparent)`,
                }}
              />

              <CornerMark accent={project.accent} />

              {/* Large background index */}
              <div
                className="absolute right-8 top-1/2 -translate-y-1/2 text-[120px] font-black leading-none pointer-events-none select-none opacity-[0.04] group-hover:opacity-[0.07] transition-opacity duration-500 font-mono"
                style={{ color: project.accent }}
              >
                {project.index}
              </div>

              <div className="relative p-7 md:p-10 pl-10 md:pl-12">
                {/* Top row */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-7">
                  <div className="flex-1">
                    {/* Index + type */}
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-xs font-mono tracking-widest"
                        style={{ color: project.accent + "99" }}
                      >
                        {project.index}
                      </span>
                      <div
                        className="h-px w-4"
                        style={{ background: project.accent + "60" }}
                      />
                      <span className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase">
                        {project.type}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-black tracking-[-0.03em] text-white flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300">
                      {project.name}
                      <ArrowUpRight
                        size={22}
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0"
                        style={{ color: project.accent }}
                      />
                    </h3>
                    <p className="text-sm text-zinc-500 mt-1.5 max-w-2xl leading-relaxed">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Action buttons + metrics */}
                  <div className="flex flex-col items-end gap-4 shrink-0">
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-400 border border-white/8 bg-white/3 hover:bg-white/[0.07] hover:text-white transition-all"
                      >
                        <Github size={13} />
                        Source
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all"
                        style={{
                          color: project.accent,
                          borderColor: project.accent + "40",
                          background: project.accent + "10",
                        }}
                      >
                        <ExternalLink size={13} />
                        Live
                      </a>
                    </div>

                    {/* Metric pills */}
                    <div className="flex gap-2">
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="text-center px-3 py-1.5 rounded-lg border border-white/5 bg-white/2"
                        >
                          <div
                            className="text-xs font-bold font-mono"
                            style={{ color: project.accent }}
                          >
                            {m.value}
                          </div>
                          <div className="text-[9px] font-mono text-zinc-600 mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-7 pb-7 border-b border-white/5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-mono tracking-wide rounded-md text-zinc-400 border border-white/6 bg-white/3 hover:text-zinc-200 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Two-column detail */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-10">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Box size={14} className="text-zinc-500" />
                      <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase">
                        Problem & System
                      </span>
                    </div>
                    <div
                      className="pl-3 border-l"
                      style={{ borderColor: project.accent + "30" }}
                    >
                      <p className="text-sm leading-relaxed text-zinc-400">
                        {project.system}
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Activity
                        size={14}
                        style={{ color: project.accent + "cc" }}
                      />
                      <span
                        className="text-xs font-mono tracking-widest uppercase"
                        style={{ color: project.accent + "80" }}
                      >
                        Engineering Highlight
                      </span>
                    </div>
                    <div
                      className="pl-3 border-l"
                      style={{ borderColor: project.accent + "50" }}
                    >
                      <p className="text-sm leading-relaxed text-zinc-300">
                        {project.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── BOTTOM CTA ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex items-center justify-between flex-wrap gap-4 pt-8 border-t border-white/5"
        >
          <div className="flex items-center gap-3">
            <Layers size={14} className="text-zinc-600" />
            <span className="text-xs font-mono text-zinc-600">
              All systems production-grade · Containerized · CI/CD enabled
            </span>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 bg-white/3 text-sm font-mono text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/6 transition-all"
          >
            <Github size={14} />
            View All on GitHub
            <ArrowUpRight size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
