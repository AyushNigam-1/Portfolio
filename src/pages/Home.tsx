import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/sections/Hero";
import { Competencies } from "../components/sections/Competencies";
import { Projects } from "../components/sections/Projects";
import { Philosophy } from "../components/sections/Philosophy";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/layout/Footer";

export default function Home() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main ref={containerRef} className="relative min-h-screen bg-black w-full overflow-x-hidden selection:bg-primary/30 font-sans text-white scroll-smooth">

      {/* --- ANIMATED MOVING GRADIENT LAYER --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[24px_24px]" />

        {/* Orb 1: Primary Blue */}
        {/* Outer div handles the vertical scroll (y1) */}
        <motion.div style={{ y: y1 }} className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] min-w-125 min-h-125">
          {/* Inner div handles the infinite floating loop */}
          <motion.div
            animate={{ x: [0, 60, -40, 0], scale: [1, 1.1, 0.9, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full bg-blue-500/10 blur-[120px] rounded-full"
          />
        </motion.div>

        {/* Orb 2: Deep Purple */}
        <motion.div style={{ y: y2 }} className="absolute top-[30%] right-[-10%] w-[40vw] h-[40vw] min-w-100 min-h-100">
          <motion.div
            animate={{ x: [0, -50, 50, 0], scale: [0.9, 1.1, 1, 0.9] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full bg-purple-500/10 blur-[120px] rounded-full"
          />
        </motion.div>

        {/* Orb 3: Emerald Green */}
        <motion.div style={{ y: y3 }} className="absolute bottom-[10%] left-[50%] -translate-x-1/2 w-[60vw] h-[60vw] min-w-150 min-h-150">
          <motion.div
            animate={{ x: [0, -30, 30, 0], scale: [1, 0.95, 1.05, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full bg-emerald-500/10 blur-[120px] rounded-full"
          />
        </motion.div>

      </div>

      {/* --- FOREGROUND CONTENT LAYER --- */}
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <Hero />
        <Competencies />
        <Projects />
        <Philosophy />
        <Contact />
        <Footer />
      </div>

    </main>
  );
}