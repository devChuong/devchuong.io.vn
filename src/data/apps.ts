export interface AppItem {
  id: string;
  name: string;
  subdomain: string;
  url: string;
  status: 'ONLINE / PRODUCTION' | 'ONLINE / ENTERPRISE' | 'AVAILABLE / DESKTOP' | 'IN ACTIVE DEV';
  statusColor: 'secondary' | 'primary' | 'tertiary' | 'amber';
  frameworkBadge: string;
  description: string;
  features: {
    label: string;
    value: string;
  }[];
  ctaText: string;
  metricsText: string;
  isExternal: boolean;
  featured?: boolean;
}

export const APPS_DATA: AppItem[] = [
  {
    id: 'chitieu',
    name: 'Quản Lý Chi Tiêu (Chitieu App)',
    subdomain: 'chitieu.devchuong.io.vn',
    url: 'https://chitieu.devchuong.io.vn',
    status: 'ONLINE / PRODUCTION',
    statusColor: 'secondary',
    frameworkBadge: 'NEXT.JS 15 + PWA',
    description: 'Nền tảng quản lý tài chính cá nhân & gia đình chuyên sâu, hỗ trợ đa tài khoản ngân hàng, đồng bộ hóa IndexedDB ngoại tuyến, phân loại ngân sách tự động và biểu đồ phân tích dòng tiền.',
    features: [
      { label: 'Local-First', value: 'IndexedDB + Offline Sync' },
      { label: 'Analytics', value: 'Trực quan hóa dòng tiền' },
      { label: 'Export Data', value: 'Xuất CSV / Excel / Backup' }
    ],
    ctaText: 'Truy cập chitieu.devchuong.io.vn',
    metricsText: 'TỐC ĐỘ PHẢN HỒI < 5MS • 100% OFFLINE-READY',
    isExternal: true
  },
  {
    id: 'eams',
    name: 'EAMS - Quản Lý Thiết Bị & Vật Tư',
    subdomain: 'eams.devchuong.io.vn',
    url: 'https://eams.devchuong.io.vn',
    status: 'ONLINE / ENTERPRISE',
    statusColor: 'primary',
    frameworkBadge: 'REACT 19 + TS',
    description: 'Hệ thống Quản lý Vòng đời Tài sản Doanh nghiệp (Enterprise Asset Management System), điều phối lệnh bảo trì phòng ngừa, kiểm kê tài sản bằng mã QR/Barcode và nhật ký kiểm toán bất biến.',
    features: [
      { label: 'Asset Ledger', value: 'Quản lý vòng đời phần cứng' },
      { label: 'Work Orders', value: 'Quy trình bảo trì tự động' },
      { label: 'Governance', value: 'Phân quyền RBAC & Audit Log' }
    ],
    ctaText: 'Truy cập eams.devchuong.io.vn',
    metricsText: 'POSTGRESQL + RPC BACKEND • ENTERPRISE SLA',
    isExternal: true
  },
  {
    id: 'mac-cleaner',
    name: 'Mac Disk Cleaner Pro 🍏',
    subdomain: 'Tiện ích macOS Portable',
    url: 'https://github.com/devChuong',
    status: 'AVAILABLE / DESKTOP',
    statusColor: 'secondary',
    frameworkBadge: 'PYTHON 3 + APFS ENGINE',
    description: 'Ứng dụng dọn dẹp và tối ưu dung lượng ổ cứng an toàn dành cho MacBook. Thiết kế Zero-dependency không cần cài đặt, đo đạc phân vùng APFS thời gian thực, dọn sạch rác Developer Caches (NPM, Brew, Pip, Crash logs) an toàn tuyệt đối cho dữ liệu cá nhân.',
    features: [
      { label: 'Zero-Dependency', value: 'Chạy trực tiếp native macOS' },
      { label: 'APFS Realtime', value: 'Đo dung lượng chuẩn xác' },
      { label: 'Safe Clean', value: 'Bảo vệ dữ liệu & mật khẩu' }
    ],
    ctaText: 'Xem tài liệu & Bộ cài Portable',
    metricsText: 'PORTABLE 1-CLICK • ZERO MEMORY FOOTPRINT',
    isExternal: true
  },
  {
    id: 'pinyin-tones',
    name: 'Pinyin Tones Pro',
    subdomain: 'Tiện ích macOS & Web',
    url: 'https://github.com/devChuong',
    status: 'AVAILABLE / DESKTOP',
    statusColor: 'tertiary',
    frameworkBadge: 'SWIFT + WASM',
    description: 'Công cụ gõ và chuyển đổi thanh điệu Pinyin siêu tốc, phục vụ người học tiếng Trung, dịch thuật và nghiên cứu học thuật với kiến trúc chạy ngầm native không rò rỉ bộ nhớ.',
    features: [
      { label: 'Performance', value: 'Daemon siêu nhẹ < 15MB RAM' },
      { label: 'Trigger Engine', value: 'Phím tắt toàn hệ thống' },
      { label: 'Lexicon', value: 'Từ điển ngoại tuyến tích hợp' }
    ],
    ctaText: 'Xem tài liệu & Bộ cài đặt',
    metricsText: 'NATIVE MACOS APP / DMG PACKAGED',
    isExternal: true
  },
  {
    id: 'ai-labs',
    name: 'AI Automation Labs & MCP',
    subdomain: 'ai.devchuong.io.vn',
    url: '#matrix',
    status: 'IN ACTIVE DEV',
    statusColor: 'amber',
    frameworkBadge: 'PYTHON + MCP + RAG',
    description: 'Phòng thí nghiệm nghiên cứu các workflow tự động hóa với Agentic AI, triển khai các server Model Context Protocol (MCP) tùy biến và quy trình Vibe Coding tối ưu hóa năng suất kỹ thuật.',
    features: [
      { label: 'Protocol', value: 'Model Context Protocol (MCP)' },
      { label: 'Tooling', value: 'LangGraph Orchestration' },
      { label: 'Pipelines', value: 'Vibe-Coding Automations' }
    ],
    ctaText: 'Xem Lộ trình & Nghiên cứu',
    metricsText: 'AGENTIC TOOLING EXPERIMENTS',
    isExternal: false,
    featured: true
  }
];
