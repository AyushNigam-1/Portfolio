import { AlertCircle, Terminal } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black relative overflow-hidden font-sans">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-red-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full max-w-md mx-4 p-8 rounded-3xl bg-white/2 backdrop-blur-xl border border-white/8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] relative z-10">

        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              <AlertCircle size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">404_NOT_FOUND</h1>
              <p className="text-sm font-mono text-zinc-500 mt-1 uppercase tracking-widest">System_Exception</p>
            </div>
          </div>
        </div>

        <p className="text-zinc-400 leading-relaxed mb-8">
          The requested routing path could not be resolved. The endpoint may have been moved, deleted, or never existed in this architecture.
        </p>

        {/* Wouter Link back to home */}
        <Link href="/">
          <a className="w-full py-3.5 rounded-xl bg-white/3 backdrop-blur-md border border-white/8 text-zinc-300 font-medium hover:bg-white/8 hover:text-white transition-all flex items-center justify-center gap-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <Terminal size={18} />
            Return to Base System
          </a>
        </Link>

      </div>
    </div>
  );
}