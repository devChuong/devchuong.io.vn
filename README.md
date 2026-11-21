# DevChuong Studio — Ecosystem Portal & Landing Page (`devchuong.io.vn`)

> **Executive Ecosystem Hub & Senior Solutions Architect Portfolio** for **Trần Văn Chương** (`devchuong@gmail.com` | GitHub: [`devChuong`](https://github.com/devChuong)).

[![Uptime](https://img.shields.io/badge/Uptime-99.98%25-10b981?style=flat-square&logo=cloudflare)](https://devchuong.io.vn)
[![Edge Latency](https://img.shields.io/badge/Latency-%3C42ms-38bdf8?style=flat-square&logo=fastly)](https://devchuong.io.vn)
[![Hosting](https://img.shields.io/badge/Vercel-Edge%20Static-white?style=flat-square&logo=vercel)](https://vercel.com)
[![DNS & WAF](https://img.shields.io/badge/Cloudflare-Proxied%20%2B%20WAF-orange?style=flat-square&logo=cloudflare)](https://cloudflare.com)
[![Bundle Size](https://img.shields.io/badge/Bundle-%3C70KB%20gzip-blueviolet?style=flat-square)](https://devchuong.io.vn)

---

## 🏛️ System Architecture: Decoupled Zero-Blast-Radius

Trang chủ **`devchuong.io.vn`** đóng vai trò là **Trạm trung chuyển tập trung (Central Hub)** và **Hồ sơ năng lực kỹ thuật**, điều hướng người dùng tới các ứng dụng thực tế chạy độc lập tại các subdomain:

```
                                 [ Users / Global Traffic ]
                                             │
                                             ▼
                     ┌───────────────────────────────────────────────┐
                     │   Cloudflare Anycast Edge (DNS, WAF, SSL)     │
                     │   TLS 1.3 Strict, DDoS Shield, Header Sanitize│
                     └───────────────────────┬───────────────────────┘
                                             │
                       ┌─────────────────────┴─────────────────────┐
                       │                                           │
                       ▼                                           ▼
          [ devchuong.io.vn ]                           [ *.devchuong.io.vn ]
    ┌─────────────────────────────┐               ┌─────────────────────────────────┐
    │ Vercel Static Edge CDN      │               │ Subdomain Micro-Frontends       │
    │ - Fast 100/100 Lighthouse   │               │ - chitieu.devchuong.io.vn       │
    │ - Zero Database Dependency  │               │ - eams.devchuong.io.vn          │
    │ - Zero Blast Radius         │               │ - api.devchuong.io.vn           │
    └─────────────────────────────┘               └─────────────────────────────────┘
```

### 💎 Key Architectural Highlights:
1. **Zero Blast Radius**: Nếu bất kỳ ứng dụng nào ở subdomain gặp lỗi bảo trì, trang chủ `devchuong.io.vn` vẫn hoạt động bình thường 100%.
2. **$0 Base Overhead**: Tận dụng tối đa gói miễn phí của Vercel và Cloudflare mà vẫn đạt chuẩn bảo mật doanh nghiệp.
3. **Google Stitch Commercial Design**: Được thiết kế dựa trên Design System **Obsidian Telemetry** sinh bởi Google Stitch (`projects/8043355730025899365`).

---

## 🚀 Live App Ecosystem

| Ứng dụng | Subdomain / Target | Tech Stack | Trạng thái |
|---|---|---|---|
| **Quản Lý Chi Tiêu (Chitieu App)** | `chitieu.devchuong.io.vn` | Next.js 15, IndexedDB, Tailwind | `ONLINE / PRODUCTION` |
| **EAMS Thiết Bị & Vật Tư** | `eams.devchuong.io.vn` | React 19, TypeScript, PostgreSQL | `ONLINE / ENTERPRISE` |
| **Pinyin Tones Pro** | Native macOS / Web Utility | Swift, WASM, Desktop Daemon | `AVAILABLE / DESKTOP` |
| **AI Automation Labs** | `ai.devchuong.io.vn` | Python, MCP Servers, LangGraph | `IN ACTIVE DEV` |

---

## 🛠️ Local Development

```bash
# Cài đặt thư viện
npm install

# Khởi chạy môi trường Dev
npm run dev

# Build Static Bundle kiểm tra production
npm run build
```

---

## 📬 Contact & Verification

- **Tác giả**: Trần Văn Chương
- **Email**: `devchuong@gmail.com`
- **GitHub**: [github.com/devChuong](https://github.com/devChuong)
- **Domain chính thức**: [devchuong.io.vn](https://devchuong.io.vn)
