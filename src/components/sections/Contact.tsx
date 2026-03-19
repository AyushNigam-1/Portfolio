import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Send, Terminal } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useToast } from "../../hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  // const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Form data:", data);

    // toast({
    //   title: "Message Initiated",
    //   description: "Secure connection established. I'll review your message shortly.",
    //   className: "bg-card border-primary text-white",
    // });

    reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 relative bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 flex items-center gap-4">
            <span className="text-primary font-mono text-xl md:text-3xl">03.</span>
            Let's Build Something Together
          </h2>
          <div className="h-1 w-24 bg-linear-to-r from-primary to-transparent rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Whether you have a question about my architecture, want to discuss an open role, or just want to say hi, my inbox is always open.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <div className="text-sm font-mono text-muted-foreground">Email</div>
                  <a href="mailto:hello@ayushnigam.dev" className="text-lg font-medium">hello@ayushnigam.dev</a>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/ayush-nigam" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                <Github size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-white/10 p-8 rounded-2xl shadow-xl"
          >
            <div className="flex items-center gap-2 mb-6 text-sm font-mono text-primary">
              <Terminal size={16} />
              <span>initiate_handshake.sh</span>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Name</label>
                <input
                  {...register("name")}
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Email</label>
                <input
                  {...register("email")}
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Message</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Tell me about your project or system requirements..."
                />
                {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Transmitting...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Execute <Send size={18} />
                  </span>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
