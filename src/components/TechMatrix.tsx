import React from 'react';
import { Layout, Database, Cloud, Bot } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const TechMatrix: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-primary" />;
      case 'Database':
        return <Database className="w-5 h-5 text-secondary" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-purple-400" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-primary" />;
      default:
        return <Layout className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-8" id="matrix">
      {/* Header */}
      <div className="flex flex-col gap-2 max-w-2xl">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs uppercase text-primary px-2.5 py-0.5 rounded bg-primary/10 border border-primary/20">
            CAPABILITIES STACK
          </span>
          <span className="font-mono text-xs text-slate-400">
            • PRODUCTION-PROVEN
          </span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Hồ sơ Năng lực Kỹ thuật (Core Competencies)
        </h2>

        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Tổng quan năng lực công nghệ thực chiến, từ xây dựng giao diện tối ưu Core Web Vitals, hạ tầng phân tán đến tích hợp tự động hóa trí tuệ nhân tạo (AI Agentic).
        </p>
      </div>

      {/* 4-Column Structured Capabilities Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROFILE.skillsMatrix.map((col, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl glass-panel flex flex-col gap-5 shadow-lg glass-panel-hover"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                {getIcon(col.icon)}
              </div>
              <div className="flex flex-col">
                <h4 className="font-display font-bold text-white text-base">
                  {col.category}
                </h4>
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                  {col.subtitle}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              {col.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="p-2.5 rounded-xl bg-[#08090d]/90 border border-slate-800/80 flex items-center justify-between gap-2"
                >
                  <span className="text-xs font-medium text-slate-200">
                    {skill.name}
                  </span>
                  <span className="font-mono text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20 shrink-0">
                    {skill.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
