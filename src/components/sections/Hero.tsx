import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export function Hero() {
  const [typedTitle, setTypedTitle] = useState("");
  const fullTitle = "Ayush Nigam";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedTitle(fullTitle.substring(0, i));
      i++;
      if (i > fullTitle.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 bg-grid-fade pointer-events-none" />

      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-accent/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">

        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-mono text-muted-foreground tracking-wide">SYSTEMS_ONLINE</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4 min-h-20">
            {typedTitle}
            <span className="animate-pulse text-primary">_</span>
          </h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-2xl md:text-3xl font-medium text-zinc-400 mb-6 leading-snug"
          >
            Full-Stack Software Engineer & Systems Architect
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed"
          >
            Building production-grade, scalable systems across AI, Modern Web, and distributed architectures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            >
              View Architecture & Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all"
            >
              <Terminal size={18} />
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* CUSTOM TAILWIND TERMINAL BOX */}
        <div className="lg:pl-8 mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-full rounded-xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden"
          >
            {/* Terminal Top Bar */}
            <div className="flex items-center px-4 py-3 bg-white/3 border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]" />
                <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]" />
              </div>
              <div className="mx-auto text-xs font-mono text-zinc-500 mr-12 select-none">
                ayush@portfolio:~
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6">
              <div className="flex flex-col gap-3 text-sm md:text-base font-mono">
                <div className="flex gap-2">
                  <span className="text-primary">ayush@portfolio</span>
                  <span className="text-zinc-500">~</span>
                  <span className="text-white">$</span>
                  <span className="text-zinc-300">cat philosophy.txt</span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="text-accent pl-4 border-l-2 border-accent/30 italic"
                >
                  "Veni, Vidi, Vici — I came, I saw, I built. Action proves the skill. Shipping production-ready code is the only metric that matters."
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                  className="flex gap-2 mt-2"
                >
                  <span className="text-primary">ayush@portfolio</span>
                  <span className="text-zinc-500">~</span>
                  <span className="text-white">$</span>
                  <span className="w-2 h-5 bg-white/80 animate-pulse inline-block align-middle" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}