import React from 'react';
import { Shield, ArrowDown, GitFork, CheckCircle, Cpu, Zap } from 'lucide-react';

export const ArchitectureShowcase: React.FC = () => {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-8" id="architecture">
      {/* Header */}
      <div className="flex flex-col gap-2 max-w-3xl">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs uppercase text-secondary px-2.5 py-0.5 rounded bg-secondary/10 border border-secondary/20 font-semibold">
            SYSTEM TOPOLOGY
          </span>
          <span className="font-mono text-xs text-slate-400">
            • ZERO-BLAST-RADIUS BLUEPRINT
          </span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Kiến trúc Decoupled & Tách biệt Rủi ro Kỹ thuật
        </h2>

        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Trang chủ <span className="text-primary font-mono font-medium">devchuong.io.vn</span> hoàn toàn độc lập với các ứng dụng con. 
          Kể cả khi một ứng dụng ở subdomain nâng cấp hay tạm ngừng bảo trì, trang chủ vẫn luôn online 100%, bảo đảm hình ảnh thương hiệu và hồ sơ năng lực chuyên nghiệp.
        </p>
      </div>

      {/* Visual Circuit Schematic Diagram */}
      <div className="w-full rounded-2xl glass-panel p-6 sm:p-8 shadow-2xl flex flex-col gap-6 relative overflow-hidden">
        {/* Level 1: Global Edge Entry */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-primary font-bold uppercase tracking-wider">
              TẦNG 01 // GLOBAL EDGE ANYCAST (CLOUDFLARE)
            </span>
            <span className="text-secondary font-semibold">
              SSL STRICT • CHỐNG DDOS WAF • CF-CONNECTING-IP
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-[#08090d]/90 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 text-primary flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-base font-bold text-white">
                  *.devchuong.io.vn
                </span>
                <span className="text-xs text-slate-400">
                  Cloudflare Proxy đám mây cam: Tự động cache tĩnh, tăng tốc độ truy cập từ 300+ PoPs toàn cầu và chặn tấn công mạng.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-[11px] shrink-0">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-secondary">
                TLS 1.3 Strict
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-primary">
                &lt; 15ms DNS
              </span>
            </div>
          </div>
        </div>

        {/* Downward Connector Arrow */}
        <div className="flex justify-center -my-1">
          <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-primary shadow-md">
            <ArrowDown className="w-4 h-4" />
          </div>
        </div>

        {/* Level 2: Edge Routing Layer */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-purple-400 font-bold uppercase tracking-wider">
              TẦNG 02 // INTELLIGENT HOST DISPATCHER
            </span>
            <span className="text-slate-400">
              SUBDOMAIN ROUTING • HEADER SANITIZATION
            </span>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-[#08090d]/90 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0">
                <GitFork className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-semibold text-white text-base">
                  Cloudflare Edge Dispatcher + Vercel Ingress Routing
                </span>
                <span className="text-xs text-slate-400">
                  Tự động phân luồng hostname sang repository và project riêng biệt dựa trên subdomain request.
                </span>
              </div>
            </div>

            <span className="font-mono text-xs text-primary bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg shrink-0">
              MATCH: {`{app}`}.devchuong.io.vn
            </span>
          </div>
        </div>

        {/* Downward Connector Arrow */}
        <div className="flex justify-center -my-1">
          <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-secondary shadow-md">
            <ArrowDown className="w-4 h-4" />
          </div>
        </div>

        {/* Level 3: Decoupled Independent Hosts Grid */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-secondary font-bold uppercase tracking-wider">
              TẦNG 03 // 4 CONTAINER ĐỘC LẬP (ZERO BLAST RADIUS)
            </span>
            <span className="text-secondary font-semibold">
              CÔ LẬP NGUY CƠ 100%
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {/* Node 1: Root Hub */}
            <div className="p-4 rounded-xl bg-[#08090d]/90 border border-slate-800/80 flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-slate-400 uppercase">NODE_ROOT</span>
                <span className="h-2 w-2 rounded-full bg-secondary"></span>
              </div>
              <span className="font-mono text-sm font-bold text-primary">devchuong.io.vn</span>
              <p className="text-xs text-slate-400">
                Landing Page & Portal Hub tĩnh thuần túy trên Vercel Edge. Tốc độ tải tức thì, 0 database.
              </p>
              <div className="mt-auto pt-2 flex items-center justify-between font-mono text-[10px] text-slate-500 border-t border-slate-800">
                <span>Vercel Static</span>
                <span className="text-secondary">Uptime 99.99%</span>
              </div>
            </div>

            {/* Node 2: Chitieu */}
            <div className="p-4 rounded-xl bg-[#08090d]/90 border border-slate-800/80 flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-slate-400 uppercase">NODE_FINANCE</span>
                <span className="h-2 w-2 rounded-full bg-secondary"></span>
              </div>
              <span className="font-mono text-sm font-bold text-primary">chitieu.*</span>
              <p className="text-xs text-slate-400">
                Container Next.js 15 PWA quản lý chi tiêu. Lưu trữ IndexedDB cục bộ và đồng bộ nền an toàn.
              </p>
              <div className="mt-auto pt-2 flex items-center justify-between font-mono text-[10px] text-slate-500 border-t border-slate-800">
                <span>Client IndexedDB</span>
                <span className="text-secondary">Offline-First</span>
              </div>
            </div>

            {/* Node 3: EAMS */}
            <div className="p-4 rounded-xl bg-[#08090d]/90 border border-slate-800/80 flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-slate-400 uppercase">NODE_ENTERPRISE</span>
                <span className="h-2 w-2 rounded-full bg-secondary"></span>
              </div>
              <span className="font-mono text-sm font-bold text-primary">eams.*</span>
              <p className="text-xs text-slate-400">
                Hệ thống EAMS Quản lý thiết bị doanh nghiệp. State-machine quản lý vòng đời tài sản.
              </p>
              <div className="mt-auto pt-2 flex items-center justify-between font-mono text-[10px] text-slate-500 border-t border-slate-800">
                <span>React 19 / RPC</span>
                <span className="text-primary">Secured RBAC</span>
              </div>
            </div>

            {/* Node 4: Serverless Edge */}
            <div className="p-4 rounded-xl bg-[#08090d]/90 border border-slate-800/80 flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-slate-400 uppercase">NODE_SERVERLESS</span>
                <span className="h-2 w-2 rounded-full bg-secondary"></span>
              </div>
              <span className="font-mono text-sm font-bold text-primary">api.* / Workers</span>
              <p className="text-xs text-slate-400">
                Cloudflare Workers & Vercel Functions xử lý tác vụ ngầm, gateway và điều phối AI.
              </p>
              <div className="mt-auto pt-2 flex items-center justify-between font-mono text-[10px] text-slate-500 border-t border-slate-800">
                <span>Edge Compute</span>
                <span className="text-secondary">&lt; 8ms Coldstart</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Architecture Perks Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-[#08090d]/80 border border-slate-800/80 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
            <div className="flex flex-col">
              <span className="font-display font-semibold text-white text-sm">
                Zero Blast Radius (Triệt tiêu rủi ro lan truyền)
              </span>
              <p className="text-xs text-slate-400 mt-0.5">
                Nếu một subdomain có lỗi triển khai, toàn bộ các ứng dụng khác và trang chủ devchuong.io.vn vẫn chạy ổn định 100%.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#08090d]/80 border border-slate-800/80 flex items-start gap-3">
            <Zap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div className="flex flex-col">
              <span className="font-display font-semibold text-white text-sm">
                Quy trình CI/CD Độc lập
              </span>
              <p className="text-xs text-slate-400 mt-0.5">
                Mỗi sản phẩm nằm ở một GitHub repository riêng, git push và test độc lập, không xung đột dependency hay build lock.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#08090d]/80 border border-slate-800/80 flex items-start gap-3">
            <Cpu className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
            <div className="flex flex-col">
              <span className="font-display font-semibold text-white text-sm">
                Chi phí Vận hành Cố định = $0
              </span>
              <p className="text-xs text-slate-400 mt-0.5">
                Tận dụng triệt để gói miễn phí vĩnh viễn cực mạnh của Vercel và Cloudflare, tối ưu hiệu quả đầu tư công nghệ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
