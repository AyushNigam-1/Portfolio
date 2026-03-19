import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Philosophy() {
  return (
    // Added font-sans to the base wrapper so it inherits Inter by default
    <section id="philosophy" className="py-32 bg-primary/5 border-y border-primary/10 relative overflow-hidden font-sans">
      <div className="absolute -left-10 -top-10 opacity-[0.03] pointer-events-none">
        <Quote size={400} />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* HEADING UNTOUCHED: 'font-mono' automatically triggers JetBrains Mono */}
          <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-8">Engineering Philosophy</h2>

          {/* QUOTE: Forced Plus Jakarta Sans for that sharp, authoritative SaaS display look */}
          <p className="text-2xl md:text-4xl font-[family:var(--font-heading)] font-bold tracking-tight leading-tight text-white mb-10 text-balance">
            "I build scalable software. I bypassed the traditional academic route to focus entirely on applied engineering."
          </p>

          {/* BODY TEXT: Naturally inherits Inter for maximum long-form reading legibility */}
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            As a self-taught developer, I have cultivated a deep, practical understanding of modern web architecture, artificial intelligence integrations, and containerized systems.
            <br /><br />
            My core philosophy is simple: <span className="text-white font-semibold tracking-tight">software should be fast, secure, and solve real problems.</span> I measure my progress not by certificates, but by the complexity of the systems I can architect and deploy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}