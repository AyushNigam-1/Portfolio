import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/sections/Hero";
import { Competencies } from "../components/sections/Competencies";
import { Projects } from "../components/sections/Projects";
import { Philosophy } from "../components/sections/Philosophy";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/layout/Footer";

export default function Home() {
  const containerRef = useRef<HTMLElement>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  /* ── Scroll progress ── */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring for the progress bar
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  /* ── Parallax orbs ── */
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  /* ── Back to top visibility ── */
  useEffect(() => {
    const unsub = scrollYProgress.on("change", v => setShowBackToTop(v > 0.15));
    return unsub;
  }, [scrollYProgress]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen bg-black w-full overflow-x-hidden selection:bg-blue-500/25 font-sans text-white scroll-smooth"
    >
      {/* ── SCROLL PROGRESS BAR ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left pointer-events-none"
        style={{
          scaleX: smoothProgress,
          background: "linear-gradient(to right, #3b82f6, #8b5cf6, #10b981)",
        }}
      />

      {/* ── ANIMATED BACKGROUND LAYER ── */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

        {/* Fine global grid — slightly more visible than before */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Orb 1 — Blue, top-left hero region */}
        <motion.div style={{ y: y1 }} className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] min-w-[500px] min-h-[500px]">
          <motion.div
            animate={{ x: [0, 60, -40, 0], scale: [1, 1.1, 0.9, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full rounded-full blur-[120px]"
            style={{ background: "rgba(59,130,246,0.12)" }}
          />
        </motion.div>

        {/* Orb 2 — Purple, right mid */}
        <motion.div style={{ y: y2 }} className="absolute top-[30%] right-[-10%] w-[40vw] h-[40vw] min-w-[400px] min-h-[400px]">
          <motion.div
            animate={{ x: [0, -50, 50, 0], scale: [0.9, 1.1, 1, 0.9] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full rounded-full blur-[120px]"
            style={{ background: "rgba(139,92,246,0.10)" }}
          />
        </motion.div>

        {/* Orb 3 — Emerald, bottom center */}
        <motion.div style={{ y: y3 }} className="absolute bottom-[10%] left-[50%] -translate-x-1/2 w-[60vw] h-[60vw] min-w-[600px] min-h-[600px]">
          <motion.div
            animate={{ x: [0, -30, 30, 0], scale: [1, 0.95, 1.05, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full rounded-full blur-[120px]"
            style={{ background: "rgba(16,185,129,0.08)" }}
          />
        </motion.div>

        {/* Orb 4 — Indigo, center-left for Projects/Philosophy sections */}
        <motion.div style={{ y: y4 }} className="absolute top-[60%] left-[-5%] w-[35vw] h-[35vw] min-w-[350px] min-h-[350px]">
          <motion.div
            animate={{ x: [0, 40, -30, 0], scale: [1, 0.95, 1.08, 1] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full rounded-full blur-[140px]"
            style={{ background: "rgba(99,102,241,0.08)" }}
          />
        </motion.div>

        {/* Noise grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />
      </div>

      {/* ── FOREGROUND CONTENT ── */}
      <motion.div
        className="relative z-10 flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Navbar />
        <Hero />
        <Competencies />
        <Projects />
        <Philosophy />
        <Contact />
        <Footer />
      </motion.div>

      {/* ── BACK TO TOP ── */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 text-zinc-400 hover:text-white hover:border-blue-400/40 transition-colors duration-200"
            style={{
              background: "rgba(5,7,15,0.9)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 0 20px rgba(0,0,0,0.5)",
            }}
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}