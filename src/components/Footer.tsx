import React from 'react';
import { Terminal, Mail, MapPin, PhoneCall } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { ZaloIcon, WhatsAppIcon } from './icons/ContactIcons';

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

          {/* Col 4: Direct Protocols & Hotline */}
          <div className="flex flex-col gap-3 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold uppercase text-slate-500 tracking-wider text-[11px]">
                Kênh Liên Lạc & Hotline
              </span>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] text-emerald-400 font-semibold">LIVE</span>
              </div>
            </div>

            {/* Direct Phone Call Button */}
            <a
              href={`tel:${PROFILE.phone}`}
              className="group p-2.5 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/5 border border-emerald-500/30 hover:border-emerald-400/70 hover:shadow-glow-secondary transition-all flex items-center justify-between"
              title="Gọi điện thoại trực tiếp cho Trần Văn Chương"
            >
              <div className="flex items-center gap-2.5">
                <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 group-hover:scale-105 transition-transform">
                  <PhoneCall className="w-3.5 h-3.5 animate-pulse" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase text-emerald-400/90 tracking-wider">
                    Điện thoại trực tiếp
                  </span>
                  <span className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {PROFILE.phoneDisplay}
                  </span>
                </div>
              </div>
              <span className="text-[10px] text-emerald-400 font-bold uppercase px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/40 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                Gọi ngay
              </span>
            </a>

            {/* Quick OTT Chat: Zalo & WhatsApp */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href={PROFILE.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-2.5 py-2 rounded-xl bg-blue-500/10 border border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/20 text-blue-300 transition-all text-xs group"
                title="Chat trực tiếp qua Zalo"
              >
                <ZaloIcon className="w-4 h-4 rounded-md" />
                <span className="font-semibold text-[11px] group-hover:text-white">Zalo Chat</span>
              </a>

              <a
                href={PROFILE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-2.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-500/20 text-emerald-300 transition-all text-xs group"
                title="Chat trực tiếp qua WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-[11px] group-hover:text-white">WhatsApp</span>
              </a>
            </div>

            {/* Standard Channels: Email, GitHub, Location */}
            <div className="flex flex-col gap-2 pt-1 border-t border-slate-800/60">
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
