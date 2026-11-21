export interface CaseStudy {
  id: string;
  category: string;
  badge: string;
  title: string;
  challenge: string;
  solution: string;
  impact: string;
  telemetryLeft: string;
  telemetryRight: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'decoupled-routing',
    category: 'CASE STUDY 01 // DEVOPS & CLOUD EDGE',
    badge: 'PROD_VERIFIED',
    title: 'Định tuyến Subdomain Decoupled Đa Nền Tảng Chi Phí $0',
    challenge: 'Yêu cầu vận hành nhiều ứng dụng web độc lập, có security context riêng biệt mà không phải chịu chi phí duy trì cụm máy chủ container Kubernetes đắt đỏ.',
    solution: 'Kết hợp ủy quyền DNS tự động của Cloudflare với Vercel Wildcard Custom Domains và GitHub Actions CI/CD matrix phân luồng độc lập theo từng repository.',
    impact: 'Khoanh vùng lỗi 100% (Zero Blast Radius), chi phí hosting hàng tháng = $0 và triển khai Preview môi trường tự động cho mỗi Pull Request.',
    telemetryLeft: 'DEPLOY: GITHUB ACTIONS CI/CD',
    telemetryRight: '$0 / THÁNG HẠ TẦNG'
  },
  {
    id: 'offline-first-finance',
    category: 'CASE STUDY 02 // OFFLINE-FIRST ARCHITECTURE',
    badge: 'ACTIVE IN PROD',
    title: 'Kiến trúc Lưu trữ Ngoại tuyến & Đồng bộ Hai chiều (Chitieu App)',
    challenge: 'Người dùng thường xuyên ghi chép chi tiêu tại những nơi sóng di động chập chờn hoặc không có mạng, dẫn đến mất dữ liệu hoặc trải nghiệm giật lag.',
    solution: 'Sử dụng IndexedDB cục bộ làm Single Source of Truth kết hợp Event-Sourced Mutation Queue và background service worker tự động giải quyết xung đột khi có mạng.',
    impact: 'Độ trễ ghi nhận thao tác người dùng < 5ms, 0 sự cố mất dữ liệu trên 10,000+ giao dịch và trải nghiệm mượt mà không phụ thuộc Internet.',
    telemetryLeft: 'STORAGE: INDEXEDDB + QUEUE',
    telemetryRight: '< 5MS WRITE LATENCY'
  },
  {
    id: 'enterprise-eams-lifecycle',
    category: 'CASE STUDY 03 // ENTERPRISE DATA PIPELINE',
    badge: 'ENTERPRISE SLA',
    title: 'Quản trị Vòng đời & Kiểm toán Thiết bị Phần cứng (EAMS)',
    challenge: 'Quy trình bàn giao thiết bị thủ công gây thất thoát tài sản, bỏ sót lịch bảo trì phòng ngừa và tốn nhiều tuần để đối soát kiểm kê định kỳ.',
    solution: 'Xây dựng máy trạng thái hữu hạn (FSM) kiểm soát chuyển giao thiết bị kết hợp quét mã QR/Barcode trên camera và append-only audit trail logging trên PostgreSQL.',
    impact: 'Rút ngắn 85% thời gian chu kỳ kiểm kê tài sản và loại bỏ hoàn toàn tình trạng sai lệch vật tư giữa báo cáo và kho thực tế.',
    telemetryLeft: 'DATA: POSTGRESQL + IMMUTABLE LOG',
    telemetryRight: '-85% THỜI GIAN KIỂM KÊ'
  }
];
