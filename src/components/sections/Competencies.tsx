import { motion } from "framer-motion";
import { Code2, Server, Database, BrainCircuit, Box, ShieldCheck } from "lucide-react";

// Removed hardcoded 'text-primary' from icons so the card hover state can control them
// Added a 6th category to perfectly balance the 3-column grid
const skills = [
  {
    category: "Frontend & UI/UX",
    icon: <Code2 size={24} />,
    tags: ["Next.js (Turbopack)", "React 19", "Vue.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Headless UI", "Framer Motion", "Apollo Client"]
  },
  {
    category: "Backend & Systems",
    icon: <Server size={24} />,
    tags: ["Python", "Node.js", "FastAPI", "Flask", "Django", "GraphQL (Apollo Server)", "WebSockets", "Better Auth"]
  },
  {
    category: "Data & Caching",
    icon: <Database size={24} />,
    tags: ["MongoDB Atlas (GridFS)", "PostgreSQL", "Redis", "Pinecone (Vector DB)"]
  },
  {
    category: "AI & Machine Learning",
    icon: <BrainCircuit size={24} />,
    tags: ["Google Gemini API", "LangChain", "LangGraph", "RAG", "Model Context Protocol (MCP)"]
  },
  {
    category: "DevOps & Infrastructure",
    icon: <Box size={24} />,
    tags: ["Docker", "Docker Compose", "GitHub Actions (CI/CD)", "Nginx", "Microservices Architecture"]
  },
  {
    category: "Security & Cryptography",
    icon: <ShieldCheck size={24} />,
    tags: ["OAuth 2.0 & JWT", "Role-Based Access Control", "Rust (Solana Escrow)", "Smart Contracts", "Data Encryption"]
  }
];

export function Competencies() {
  return (
    // 'bg-transparent' lets the global animated background shine through
    <section id="competencies" className="py-24 bg-transparent border-t border-white/5 relative font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          {/* h2 automatically uses Plus Jakarta Sans */}
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 flex items-center gap-4">
            <span className="text-primary font-mono text-xl md:text-3xl">01.</span>
            Core Competencies
          </h2>
          <div className="h-1 w-24 bg-linear-to-r from-primary to-transparent rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              // --- TRUE GLASS CARD ---
              className="group relative flex flex-col p-6 sm:p-8 rounded-3xl bg-white/2 backdrop-blur-xl border border-white/8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:bg-white/4 hover:border-white/15 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500 overflow-hidden"
            >
              {/* Internal ambient glow on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="flex items-center gap-4 mb-6 relative z-10">
                {/* --- GLASS ICON WRAPPER --- */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/3 backdrop-blur-md border border-white/8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] text-zinc-400 group-hover:scale-110 group-hover:text-primary group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                  {skill.icon}
                </div>
                {/* h3 automatically uses Plus Jakarta Sans */}
                <h3 className="text-xl font-bold tracking-tight text-white">{skill.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                {skill.tags.map(tag => (
                  <span
                    key={tag}
                    // --- GLASS TAGS (JetBrains Mono) ---
                    className="px-3 py-1.5 bg-black/40 backdrop-blur-sm border border-white/8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] text-zinc-300 text-xs font-mono tracking-wide rounded-full group-hover:border-primary/50 group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}