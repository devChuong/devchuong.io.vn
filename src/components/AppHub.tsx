import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { APPS_DATA } from '../data/apps';

export const AppHub: React.FC = () => {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-8" id="ecosystem">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase text-primary px-2.5 py-0.5 rounded bg-primary/10 border border-primary/20">
              LIVE SUBDOMAINS
            </span>
            <span className="font-mono text-xs text-slate-400">
              • AUTONOMOUS CONTAINERS
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Hệ sinh thái Ứng dụng Thực tế
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Trạm trung chuyển truy cập duy nhất. Bạn không cần nhớ nhiều link rời rạc — tất cả ứng dụng phục vụ công việc, tài chính cá nhân và nghiên cứu công nghệ đều quy tụ tại đây.
          </p>
        </div>

        {/* Global Cluster Status */}
        <div className="flex items-center gap-2 font-mono text-xs text-slate-300 bg-slate-900/90 border border-slate-800 px-3.5 py-2 rounded-xl self-start">
          <span className="h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
          <span>TẤT CẢ DỊCH VỤ HOẠT ĐỘNG BÌNH THƯỜNG (5/5 SẴN SÀNG)</span>
        </div>
      </div>

      {/* Featured Application Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {APPS_DATA.map((app) => {
          const isGreen = app.statusColor === 'secondary';
          const isCyan = app.statusColor === 'primary';
          const isViolet = app.statusColor === 'tertiary';

          const badgeBg = isGreen
            ? 'bg-secondary/10 border-secondary/30 text-secondary'
            : isCyan
            ? 'bg-primary/10 border-primary/30 text-primary'
            : isViolet
            ? 'bg-purple-500/10 border-purple-500/30 text-purple-400'
            : 'bg-amber-500/10 border-amber-500/30 text-amber-400';

          const dotBg = isGreen ? 'bg-secondary' : isCyan ? 'bg-primary' : isViolet ? 'bg-purple-400' : 'bg-amber-400';

          return (
            <div
              key={app.id}
              className={`group relative rounded-2xl glass-panel p-6 sm:p-7 flex flex-col justify-between gap-6 shadow-xl glass-panel-hover ${
                app.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="flex flex-col gap-4">
                {/* Top Row Status & Domain */}
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-1 rounded-full font-mono text-[11px] font-semibold border flex items-center gap-1.5 ${badgeBg}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${dotBg} animate-pulse`}></span>
                      {app.status}
                    </span>
                    <span className="font-mono text-[10px] text-slate-400 bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-800">
                      {app.frameworkBadge}
                    </span>
                  </div>

                  <span className="font-mono text-xs text-primary font-medium tracking-tight">
                    {app.subdomain}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                    <span>{app.name}</span>
                    {app.isExternal && (
                      <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    )}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {app.description}
                  </p>
                </div>

                {/* Feature Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                  {app.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#08090d]/90 border border-slate-800/80 flex flex-col gap-0.5"
                    >
                      <span className="font-mono text-[10px] text-primary uppercase font-bold tracking-wider">
                        {feat.label}
                      </span>
                      <span className="text-xs text-slate-200 font-medium">
                        {feat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer CTA & Telemetry Note */}
              <div className="pt-4 border-t border-slate-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <span className="font-mono text-[10px] text-slate-500 tracking-wider">
                  {app.metricsText}
                </span>

                {app.isExternal ? (
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-slate-950 font-mono text-xs font-bold hover:bg-primary-light shadow-glow-primary transition-all active:scale-95"
                  >
                    <span>{app.ctaText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <a
                    href={app.url}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 text-slate-200 font-mono text-xs font-semibold hover:bg-slate-700 transition-all"
                  >
                    <span>{app.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
