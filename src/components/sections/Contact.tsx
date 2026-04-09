import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Send, Terminal, ArrowUpRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const SOCIALS = [
  { icon: Github, label: "GitHub", sub: "@ayush-nigam", href: "https://github.com/ayush-nigam" },
  { icon: Linkedin, label: "LinkedIn", sub: "in/ayush-nigam", href: "#" },
  { icon: Twitter, label: "Twitter", sub: "@ayushnigam_dev", href: "#" },
];

const AVAILABILITY = [
  { label: "Status", value: "Open to Work", live: true },
  { label: "Location", value: "Kanpur, IN", live: false },
  { label: "Timezone", value: "UTC +5:30", live: false },
  { label: "Response", value: "< 24 hrs", live: false },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `[Portfolio] New message from ${data.name}`,
          from_name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      const json = await res.json();
      if (!json.success) throw new Error(json.message || "Submission failed");

      reset();
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: any) {
      // setServerError(err.message ?? "Failed to send. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 relative border-t border-white/5 overflow-hidden font-sans">

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-175 h-75 bg-blue-500/5 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-75 h-75 bg-indigo-500/5 blur-[100px] pointer-events-none" />

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
                <span className="text-xs font-mono text-blue-400/70 tracking-[0.2em] uppercase">— 03</span>
                <div className="h-px w-8 bg-blue-400/40" />
                <span className="text-xs font-mono text-zinc-600 tracking-widest uppercase">Get In Touch</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-[-0.03em] text-white leading-none">
                Let's Build<br />
                <span className="text-zinc-500">Something Together</span>
              </h2>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-emerald-400/20 bg-emerald-400/5 h-fit mt-2">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full size-2 bg-emerald-400" />
              </span>
              <span className="text-xs font-mono text-emerald-400">Available for hire</span>
            </div>
          </div>
          <div className="mt-8 h-px w-full bg-linear-to-r from-blue-400/30 via-white/5 to-transparent" />
        </motion.div>

        {/* ── MAIN GRID ── */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 xl:gap-16">

          {/* LEFT — info panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <p className="text-zinc-400 leading-relaxed text-base max-w-md">
              Whether you have a system to architect, an open role to discuss, or
              just want to talk engineering — my inbox is always open.
            </p>

            {/* Availability grid */}
            <div className="grid grid-cols-2 gap-3">
              {AVAILABILITY.map(({ label, value, live }) => (
                <div
                  key={label}
                  className="relative rounded-xl border border-white/6 bg-white/2 px-4 py-3 overflow-hidden group hover:border-white/12 transition-colors"
                >
                  <div className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase mb-1">{label}</div>
                  <div className="flex items-center gap-2">
                    {live && (
                      <span className="relative flex size-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full size-1.5 bg-emerald-400" />
                      </span>
                    )}
                    <span className={`text-sm font-medium font-mono ${live ? "text-emerald-400" : "text-zinc-300"}`}>
                      {value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Email CTA */}
            <a
              href="mailto:hello@ayushnigam.dev"
              className="group flex items-center justify-between p-5 rounded-xl border border-white/8 bg-white/2 hover:bg-white/5 hover:border-blue-400/30 transition-all"
              style={{ boxShadow: "0 0 0 0 rgba(96,165,250,0)" }}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-400/20 flex items-center justify-center">
                  <Mail size={16} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase mb-0.5">Direct Email</div>
                  <div className="text-sm font-medium text-white">hello@ayushnigam.dev</div>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                className="text-zinc-600 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </a>

            {/* Socials */}
            <div className="space-y-2">
              <div className="text-[10px] font-mono text-zinc-600 tracking-widest uppercase mb-3">Find me on</div>
              {SOCIALS.map(({ icon: Icon, label, sub, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 p-3 rounded-xl border border-transparent hover:border-white/8 hover:bg-white/3 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/4 border border-white/8 flex items-center justify-center text-zinc-500 group-hover:text-white group-hover:border-white/15 transition-all">
                    <Icon size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">{label}</div>
                    <div className="text-xs font-mono text-zinc-600">{sub}</div>
                  </div>
                  <ArrowUpRight size={13} className="ml-auto text-zinc-700 group-hover:text-zinc-400 transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — terminal form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative"
          >

            <div className="relative rounded-2xl bg-[#090c14] border border-white/10 overflow-hidden shadow-2xl">

              {/* Terminal bar */}
              <div className="flex items-center gap-3 px-5 py-3.5 bg-white/2 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex items-center gap-2 ml-2">
                  <Terminal size={12} className="text-blue-400/70" />
                  <span className="text-xs font-mono text-zinc-500">initiate_handshake.sh</span>
                </div>
              </div>

              <div className="p-7">

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 gap-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center">
                      <span className="text-emerald-400 text-2xl">✓</span>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-semibold mb-1">Message Transmitted</div>
                      <div className="text-xs font-mono text-zinc-500">Secure connection established. I'll respond within 24 hrs.</div>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                    {/* Name + Email row */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-mono text-zinc-500 tracking-widest uppercase">Name</label>
                        <input
                          {...register("name")}
                          className="w-full bg-white/4 border border-white/8 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/20 transition-all font-mono"
                          placeholder="John Doe"
                        />
                        {errors.name && <p className="text-xs text-red-400 font-mono mt-1">{errors.name.message}</p>}
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-mono text-zinc-500 tracking-widest uppercase">Email</label>
                        <input
                          {...register("email")}
                          className="w-full bg-white/4 border border-white/8 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/20 transition-all font-mono"
                          placeholder="john@example.com"
                        />
                        {errors.email && <p className="text-xs text-red-400 font-mono mt-1">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-zinc-500 tracking-widest uppercase">Message</label>
                      <textarea
                        {...register("message")}
                        rows={5}
                        className="w-full bg-white/4 border border-white/8 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/20 transition-all resize-none font-mono leading-relaxed"
                        placeholder="Describe your project, system requirements, or just say hello..."
                      />
                      {errors.message && <p className="text-xs text-red-400 font-mono mt-1">{errors.message.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full py-3.5 rounded-xl bg-blue-500 text-white font-semibold text-sm overflow-hidden transition-all hover:bg-blue-400 disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{ boxShadow: "0 0 30px rgba(59,130,246,0.3), inset 0 1px 0 rgba(255,255,255,0.15)" }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Transmitting...
                          </>
                        ) : (
                          <>
                            Execute Handshake
                            <Send size={15} className="group-hover:translate-x-0.5 transition-transform" />
                          </>
                        )}
                      </span>
                      {/* Shimmer */}
                      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/15 to-transparent" />
                    </button>

                    <p className="text-center text-[10px] font-mono text-zinc-700">
                      No spam · Direct line to Ayush · Replies within 24 hrs
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}