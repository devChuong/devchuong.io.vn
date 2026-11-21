import React from 'react';
import { Terminal, Mail, MapPin } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 w-full bg-[#050608] border-t border-slate-800/80 mt-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1-2: Brand & Profile */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/40 flex items-center justify-center font-mono font-bold text-primary">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                {PROFILE.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Senior Full-stack Engineer & Solutions Architect. Xây dựng các hệ sinh thái web phân tán, có khả năng chịu lỗi cao, tối ưu độ trễ và quy trình tự động hóa thế hệ mới.
            </p>

            <div className="flex items-center gap-2 flex-wrap pt-1 font-mono text-[10px]">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-secondary">
                DECOUPLED_EDGE
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-primary">
                CLOUDFLARE_WAF
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-purple-400">
                VERCEL_HOSTED
              </span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="flex flex-col gap-2.5 font-mono text-xs">
            <span className="font-bold uppercase text-slate-500 tracking-wider text-[11px] mb-1">
              Điều hướng Hệ thống
            </span>
            <a href="#ecosystem" className="text-slate-400 hover:text-primary transition-colors">
              Hệ sinh thái Apps
            </a>
            <a href="#architecture" className="text-slate-400 hover:text-primary transition-colors">
              Kiến trúc Decoupled
            </a>
            <a href="#case-studies" className="text-slate-400 hover:text-primary transition-colors">
              Engineering Case Studies
            </a>
            <a href="#matrix" className="text-slate-400 hover:text-primary transition-colors">
              Ma trận Kỹ năng (Tech Matrix)
            </a>
            <a href="#contact" className="text-slate-400 hover:text-primary transition-colors">
              Kênh liên hệ trực tiếp
            </a>
          </div>

          {/* Col 4: Direct Protocols */}
          <div className="flex flex-col gap-2.5 font-mono text-xs">
            <span className="font-bold uppercase text-slate-500 tracking-wider text-[11px] mb-1">
              Kênh Liên Lạc
            </span>
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-primary" />
              <span>{PROFILE.email}</span>
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2"
            >
              <Terminal className="w-3.5 h-3.5 text-secondary" />
              <span>github.com/devChuong</span>
            </a>
            <div className="text-slate-400 flex items-center gap-2 text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>Việt Nam // Remote Toàn cầu</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px]">
              Build 2026.11 // Cloudflare Edge Cached
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
            <span className="text-secondary text-[10px] font-bold">SYS_ONLINE</span>
          </div>

          <p className="text-center sm:text-right text-[11px]">
            © {new Date().getFullYear()} Trần Văn Chương (devchuong.io.vn). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
