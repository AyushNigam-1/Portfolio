import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Activity, Box } from "lucide-react";

const projects = [
  {
    name: "Briefly.AI",
    subtitle: "Multi-Modal AI Document Analyzer & Agentic Chat Assistant",
    stack: ["Next.js", "FastAPI", "Python", "Google Gemini API", "LangChain", "MongoDB GridFS", "WebSockets", "Docker"],
    system: "Full-stack AI app to ingest, analyze, and summarize multi-modal files (PDFs and Images). Real-time context-aware chat powered by custom AI agent workflows via LangChain and MCP.",
    highlight: "Containerized microservices with custom WebSocket manager for real-time progress updates during heavy async file processing. Optimized Next.js Dockerfiles with secure build arguments, overcame Alpine Linux C++ binding limitations for headless OpenCV image processing."
  },
  {
    name: "Skrible",
    subtitle: "Highly Scalable Collaborative Storytelling Platform",
    stack: ["React", "TypeScript", "Node.js", "Apollo GraphQL", "MongoDB", "Redis", "Docker"],
    system: "Web app democratizing writing through version-controlled collaboration. Granular social engagement with role-based access control (RBAC) for manuscript alterations.",
    highlight: "Bulletproof GraphQL cache-eviction strategy across Apollo Client and backend Redis layer. Strict API rate limiting and instant resolution of stale-data issues during complex state mutations without hard refreshes."
  },
  {
    name: 'Bewise (featuring "Wiser" AI)',
    subtitle: "Intelligent Reading & Continuous Learning Platform",
    stack: ["Next.js", "FastAPI", "LangGraph", "PostgreSQL", "Pinecone", "Redis", "Custom Vector Embeddings"],
    system: "AI reading assistant with custom Hybrid RAG engine. Users attach specific books as context for 100% grounded, accurate AI responses with zero hallucinations.",
    highlight: "Real-time request cancellation (AbortController to save LLM tokens), Redis caching for lightning-fast vector retrieval, dynamic interactive UI with layout-shift-free message editing and inline insight cards."
  }
];

export function Projects() {
  return (
    // Base inherits 'Inter' for paragraph text
    <section id="projects" className="py-24 relative font-sans">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* h2 automatically uses Plus Jakarta Sans. 'tracking-tight' makes it look premium. */}
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 flex items-center gap-4">
            {/* font-mono triggers JetBrains Mono for the '02.' */}
            <span className="text-primary font-mono text-xl md:text-3xl">02.</span>
            System Overviews
          </h2>
          <div className="h-1 w-24 bg-linear-to-r from-primary to-transparent rounded-full" />
        </motion.div>

        <div className="space-y-16">
          {projects.map((project) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative grid lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-12 bg-card border border-white/10 p-8 md:p-10 rounded-2xl hover:border-primary/50 transition-colors shadow-xl">

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    {/* h3 automatically uses Plus Jakarta Sans */}
                    <h3 className="text-3xl font-bold tracking-tight text-white group-hover:text-primary transition-colors flex items-center gap-3">
                      {project.name}
                      <ArrowUpRight className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" size={24} />
                    </h3>
                    <p className="text-lg text-accent font-medium mt-2 tracking-tight">{project.subtitle}</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10" aria-label="View Source">
                      <Github size={20} className="text-zinc-300" />
                    </button>
                    <button className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/10" aria-label="View Live">
                      <ExternalLink size={20} className="text-zinc-300" />
                    </button>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 text-xs font-mono tracking-wide rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 text-muted-foreground">
                  <div className="space-y-3">
                    {/* h4 automatically uses Plus Jakarta Sans */}
                    <h4 className="text-white font-semibold tracking-tight flex items-center gap-2">
                      <Box size={18} className="text-zinc-400" />
                      Problem & System
                    </h4>
                    {/* Paragraph inherits Inter for perfect reading legibility */}
                    <p className="leading-relaxed text-sm md:text-base text-zinc-300">
                      {project.system}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-white font-semibold tracking-tight flex items-center gap-2">
                      <Activity size={18} className="text-accent" />
                      Engineering Highlight
                    </h4>
                    <p className="leading-relaxed text-sm md:text-base text-zinc-300">
                      {project.highlight}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}