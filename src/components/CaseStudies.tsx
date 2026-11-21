import React from 'react';
import { CASE_STUDIES } from '../data/caseStudies';

export const CaseStudies: React.FC = () => {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-8" id="case-studies">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase text-primary px-2.5 py-0.5 rounded bg-primary/10 border border-primary/20">
              ARCHITECTURAL DEEP DIVES
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering Case Studies
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Các bài toán kiến trúc thực tế được giải quyết bằng First Principles: tối ưu độ trễ dưới 5ms, vận hành đa subdomain với chi phí $0 và quy trình kiểm kê tài sản doanh nghiệp.
          </p>
        </div>

        <span className="font-mono text-xs text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-xl self-start">
          PHƯƠNG PHÁP LUẬN: FIRST PRINCIPLES
        </span>
      </div>

      {/* 3 Case Study Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {CASE_STUDIES.map((cs) => (
          <div
            key={cs.id}
            className="rounded-2xl glass-panel p-6 sm:p-7 flex flex-col justify-between gap-6 shadow-xl glass-panel-hover"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-primary font-semibold uppercase">
                  {cs.category}
                </span>
                <span className="text-secondary font-bold px-2 py-0.5 rounded bg-secondary/10 border border-secondary/20 text-[10px]">
                  {cs.badge}
                </span>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-snug">
                {cs.title}
              </h3>

              <div className="flex flex-col gap-3 mt-1">
                {/* Challenge */}
                <div className="p-3 rounded-xl bg-[#08090d]/90 border border-slate-800/80 flex flex-col gap-1">
                  <span className="font-mono text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                    Thách thức kỹ thuật
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cs.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="p-3 rounded-xl bg-[#08090d]/90 border border-slate-800/80 flex flex-col gap-1">
                  <span className="font-mono text-[10px] text-primary uppercase font-bold tracking-wider">
                    Giải pháp Kiến trúc
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cs.solution}
                  </p>
                </div>

                {/* Impact */}
                <div className="p-3 rounded-xl bg-[#08090d]/90 border border-slate-800/80 flex flex-col gap-1">
                  <span className="font-mono text-[10px] text-secondary uppercase font-bold tracking-wider">
                    Hiệu quả định lượng
                  </span>
                  <p className="text-xs text-white font-medium leading-relaxed">
                    {cs.impact}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between font-mono text-[10px] text-slate-400">
              <span>{cs.telemetryLeft}</span>
              <span className="text-secondary font-bold">{cs.telemetryRight}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
