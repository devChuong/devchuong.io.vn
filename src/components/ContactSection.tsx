import React, { useState } from 'react';
import { Mail, Check, Copy, Terminal, Send, ArrowUpRight, Globe, CheckCircle2, PhoneCall } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { ZaloIcon, WhatsAppIcon } from './icons/ContactIcons';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16" id="contact">
      <div className="w-full rounded-2xl glass-panel p-6 sm:p-10 lg:p-12 shadow-2xl flex flex-col lg:flex-row gap-10 items-start justify-between">
        {/* Left Column: Architect Profile & Contact Points */}
        <div className="flex flex-col gap-5 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase text-secondary px-2.5 py-0.5 rounded bg-secondary/10 border border-secondary/20 font-semibold">
              DIRECT ACCESS PROTOCOL
            </span>
            <span className="font-mono text-xs text-slate-400">
              • SOLUTIONS ARCHITECT
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Sẵn sàng hợp tác hoặc trao đổi cơ hội việc làm?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Tôi luôn sẵn sàng đón nhận các cơ hội hợp tác vị trí <span className="text-white font-semibold">Senior Full-Stack Engineer</span>, <span className="text-white font-semibold">Solutions Architect</span>, tư vấn phân rã kiến trúc micro-frontend hoặc hợp tác phát triển dự án công nghệ cao.
          </p>

          {/* Direct Contact Badges */}
          <div className="flex flex-col gap-3 pt-2">
            {/* Phone Hotline Live Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-emerald-500/10 via-[#08090d]/90 to-teal-500/5 border border-emerald-500/30 gap-3">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
                  <PhoneCall className="w-4 h-4 animate-pulse" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[10px] uppercase font-bold text-emerald-400">
                      Hotline Trực Tiếp
                    </span>
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                  </div>
                  <span className="font-mono text-xs sm:text-sm text-white font-bold">
                    {PROFILE.phoneDisplay}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href={PROFILE.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-blue-300 hover:text-white px-2.5 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/20 transition-all flex items-center gap-1.5"
                  title="Nhắn tin qua Zalo"
                >
                  <ZaloIcon className="w-3.5 h-3.5" />
                  <span>Zalo</span>
                </a>

                <a
                  href={PROFILE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-emerald-300 hover:text-white px-2.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-500/20 transition-all flex items-center gap-1.5"
                  title="Nhắn tin qua WhatsApp"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={`tel:${PROFILE.phone}`}
                  className="font-mono text-xs text-slate-950 font-bold px-3 py-1.5 rounded-lg bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center gap-1 shadow-glow-secondary"
                  title="Gọi ngay"
                >
                  <span>Gọi ngay</span>
                </a>
              </div>
            </div>

            {/* Email Copy Row */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#08090d]/90 border border-slate-800">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-mono text-xs sm:text-sm text-slate-200">
                  {PROFILE.email}
                </span>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="font-mono text-xs text-primary hover:text-white px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-primary/50 transition-all flex items-center gap-1.5"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-secondary" />
                    <span className="text-secondary font-bold">Đã chép</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Sao chép</span>
                  </>
                )}
              </button>
            </div>

            {/* GitHub Link */}
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-[#08090d]/90 border border-slate-800 hover:border-primary/40 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Terminal className="w-5 h-5 text-primary" />
                <span className="font-mono text-xs sm:text-sm text-slate-200 group-hover:text-primary transition-colors">
                  github.com/devChuong
                </span>
              </div>

              <span className="font-mono text-xs text-secondary flex items-center gap-1">
                <span>REPOSITORIES</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>

            {/* Master Domain */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#08090d]/90 border border-slate-800">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-purple-400" />
                <span className="font-mono text-xs sm:text-sm text-slate-200">
                  {PROFILE.domain}
                </span>
              </div>
              <span className="font-mono text-[10px] text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-md">
                CENTRAL HUB
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-mono text-xs text-slate-400 uppercase">
              {PROFILE.location}
            </span>
          </div>
        </div>

        {/* Right Column: Interactive Terminal Form */}
        <div className="w-full lg:w-[480px] p-6 sm:p-7 rounded-2xl bg-[#08090d]/95 border border-slate-800 shadow-2xl flex flex-col gap-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block"></span>
              <span className="font-mono text-xs text-slate-400 ml-2">
                dispatch_inquiry.sh
              </span>
            </div>
            <span className="font-mono text-[10px] text-secondary uppercase font-bold">
              TERMINAL READY
            </span>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-slate-400 uppercase font-bold">
                Tên cá nhân / Doanh nghiệp
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="VD: Nguyễn Văn A / Công ty XYZ"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 font-mono text-xs placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-slate-400 uppercase font-bold">
                Email liên hệ
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 font-mono text-xs placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-mono text-[11px] text-slate-400 uppercase font-bold">
                Nội dung trao đổi / Quy mô dự án
              </label>
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mô tả tóm tắt nhu cầu hợp tác, tuyển dụng hoặc bài toán kỹ thuật..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 font-mono text-xs placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors resize-none"
              ></textarea>
            </div>

            {formSubmitted && (
              <div className="p-3 rounded-xl bg-secondary/10 border border-secondary/30 text-secondary font-mono text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Đã ghi nhận yêu cầu! Tôi sẽ phản hồi qua email trong vòng 24h.</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full mt-1 py-3 rounded-xl bg-primary text-slate-950 font-mono text-xs font-bold hover:bg-primary-light shadow-glow-primary transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
            >
              <span>Gửi thông điệp kết nối</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
