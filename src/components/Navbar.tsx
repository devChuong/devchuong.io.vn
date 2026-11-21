import React, { useState } from 'react';
import { ShieldCheck, Download, Mail, Menu, X, Terminal } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#08090d]/85 backdrop-blur-xl border-b border-slate-800/60">
      <div className="h-16 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand & Uptime telemetry */}
        <div className="flex items-center gap-4 shrink-0">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/40 flex items-center justify-center font-mono font-bold text-primary group-hover:border-primary transition-all">
              <Terminal className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base text-white tracking-tight group-hover:text-primary transition-colors">
                {PROFILE.brandName}
              </span>
              <span className="font-mono text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
                SOLUTIONS ARCHITECT
              </span>
            </div>
          </a>

          {/* Uptime Pill */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="uppercase tracking-wider">
              99.9% UPTIME | VERCEL EDGE & CLOUDFLARE WAF
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 font-mono text-xs">
          <a
            href="#ecosystem"
            className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            Hệ sinh thái Apps
          </a>
          <a
            href="#architecture"
            className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            Kiến trúc Decoupled
          </a>
          <a
            href="#case-studies"
            className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            Case Studies
          </a>
          <a
            href="#matrix"
            className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            Tech Matrix
          </a>
          <a
            href="#contact"
            className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            Liên hệ
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-slate-700 font-mono text-xs text-slate-200 hover:bg-slate-800 hover:text-white transition-all"
          >
            <Download className="w-3.5 h-3.5 text-primary" />
            <span>Hồ sơ / Resume</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-primary text-slate-950 font-mono text-xs font-semibold shadow-glow-primary hover:bg-primary-light transition-all active:scale-95"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-slate-950 animate-pulse"></span>
            <span>Kết nối</span>
            <Mail className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-[#0c0e14] border-b border-slate-800 flex flex-col gap-3 font-mono text-sm">
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-xs text-secondary mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Uptime 99.9% • Cloudflare WAF Protected</span>
          </div>
          <a
            href="#ecosystem"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-md hover:bg-slate-800 text-slate-200"
          >
            Hệ sinh thái Apps
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-md hover:bg-slate-800 text-slate-200"
          >
            Kiến trúc Decoupled
          </a>
          <a
            href="#case-studies"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-md hover:bg-slate-800 text-slate-200"
          >
            Case Studies
          </a>
          <a
            href="#matrix"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-md hover:bg-slate-800 text-slate-200"
          >
            Tech Matrix
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-md hover:bg-slate-800 text-slate-200"
          >
            Liên hệ trực tiếp
          </a>
        </div>
      )}
    </header>
  );
};
