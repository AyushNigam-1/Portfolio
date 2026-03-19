import { Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 bg-zinc-950 border-t border-white/5 text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center gap-4">
        <a href="#" className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center border border-primary/20">
          <span className="font-mono font-bold text-primary text-sm tracking-tighter">AN</span>
        </a>
        <p className="text-sm text-muted-foreground flex items-center gap-2">
          Designed & Architected by Ayush Nigam 
          <span className="mx-2 text-zinc-700">|</span> 
          <Code2 size={14} className="text-primary" /> 
          Built with React
        </p>
        <p className="text-xs font-mono text-zinc-600">
          © {new Date().getFullYear()} Ayush Nigam. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
