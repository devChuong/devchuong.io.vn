import React from 'react';
import { ArrowRight, Terminal, FileText, Activity, Gauge, Server, DollarSign } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 flex flex-col gap-10">
      {/* Top Ambient Glow Accents */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -top-20 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Telemetry Beacon Eyebrow */}
      <div className="flex items-center gap-3 self-start flex-wrap">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
          </span>
          <span className="font-mono text-[11px] text-slate-200 uppercase tracking-wider">
            PORTAL HUB & HỒ SƠ NĂNG LỰC • DEVCHUONG.IO.VN
          </span>
        </div>

        <span className="font-mono text-[11px] text-secondary uppercase px-2.5 py-0.5 rounded bg-secondary/10 border border-secondary/30">
          EDGE_PROD::ACTIVE
        </span>
      </div>

      {/* Main Headline & Action Stack */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-8 flex flex-col gap-5">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
            High-Performance Systems.
            <span className="block mt-1 bg-gradient-to-r from-primary via-cyan-400 to-secondary bg-clip-text text-transparent">
              Resilient Architectures.
            </span>
            Zero-Downtime Delivery.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Tôi là <span className="text-white font-semibold">{PROFILE.name}</span> — {PROFILE.title}. 
            Website này là <span className="text-primary font-mono">Trạm trung chuyển tập trung</span> kết nối toàn bộ hệ sinh thái sản phẩm thực tế, 
            vận hành trên mô hình phân tách độc lập (Decoupled Micro-Frontends) tối ưu tốc độ và chi phí $0.
          </p>
        </div>

        {/* Quick Action CTAs */}
        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
          <a
            href="#ecosystem"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-slate-950 font-mono text-sm font-bold shadow-glow-primary hover:bg-primary-light transition-all active:scale-[0.98]"
          >
            <span>Khám phá Hệ sinh thái</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#architecture"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-200 font-mono text-sm hover:border-primary/50 hover:bg-slate-800 transition-all"
          >
            <Terminal className="w-4 h-4 text-primary" />
            <span>Sơ đồ Kiến trúc Decoupled</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-slate-950/60 text-slate-400 font-mono text-xs hover:text-white transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Tải Hồ sơ Năng lực / Spec Sheet</span>
          </a>
        </div>
      </div>

      {/* Quick Telemetry Stats Bar (Glass Dashboard Panel) */}
      <div className="w-full mt-2 p-4 sm:p-5 rounded-2xl glass-panel shadow-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Metric 1 */}
          <div className="flex flex-col gap-1 p-3.5 rounded-xl bg-[#08090d]/80 border border-slate-800/80">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="uppercase tracking-wider">Uptime Reliability</span>
              <Activity className="w-4 h-4 text-secondary" />
            </div>
            <span className="font-mono text-2xl font-bold text-secondary">99.98%</span>
            <span className="font-mono text-[10px] text-slate-500 uppercase">SLA Verified (365d Rolling)</span>
          </div>

          {/* Metric 2 */}
          <div className="flex flex-col gap-1 p-3.5 rounded-xl bg-[#08090d]/80 border border-slate-800/80">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="uppercase tracking-wider">Global Latency</span>
              <Gauge className="w-4 h-4 text-primary" />
            </div>
            <span className="font-mono text-2xl font-bold text-primary">&lt; 42ms</span>
            <span className="font-mono text-10px text-slate-500 uppercase">Cloudflare PoP Anycast</span>
          </div>

          {/* Metric 3 */}
          <div className="flex flex-col gap-1 p-3.5 rounded-xl bg-[#08090d]/80 border border-slate-800/80">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="uppercase tracking-wider">Architecture</span>
              <Server className="w-4 h-4 text-tertiary" />
            </div>
            <span className="font-display text-xl font-bold text-white">Decoupled</span>
            <span className="font-mono text-[10px] text-slate-500 uppercase">Zero Blast Radius</span>
          </div>

          {/* Metric 4 */}
          <div className="flex flex-col gap-1 p-3.5 rounded-xl bg-[#08090d]/80 border border-slate-800/80">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="uppercase tracking-wider">Infra Cost Base</span>
              <DollarSign className="w-4 h-4 text-secondary" />
            </div>
            <span className="font-mono text-2xl font-bold text-secondary">$0 Base</span>
            <span className="font-mono text-[10px] text-slate-500 uppercase">Edge Free-Tier Mastery</span>
          </div>
        </div>
      </div>
    </section>
  );
};
