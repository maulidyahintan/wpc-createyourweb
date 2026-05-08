import {
  BarChart3,
  Code2,
  Globe,
  Layers,
  Palette,
  Rocket,
  Settings,
  Smartphone,
  Wrench,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const companyStats = [
  { label: "Project Delivered", value: "120+" },
  { label: "Client Retention", value: "92%" },
  { label: "Avg. Launch Time", value: "21 Hari" },
  { label: "Engineers & Designers", value: "18" },
];

export const heroGallery = [
  {
    title: "Product Strategy Session",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    alt: "Tim digital product sedang berdiskusi di ruang meeting modern",
  },
  {
    title: "UI Review Board",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    alt: "Ruang kerja kreatif dengan layar presentasi desain antarmuka",
  },
  {
    title: "Engineering Delivery",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    alt: "Developer bekerja di depan laptop untuk membangun aplikasi web",
  },
];

export const trustedCompanies = [
  "Finly",
  "Bumi Retail",
  "MedikaOne",
  "Nusantara Logistik",
  "EduGrow",
  "LegalFlow",
];

export const services = [
  {
    icon: Globe,
    title: "Landing Page",
    slug: "landing-page",
    description:
      "Landing page conversion oriented untuk campaign, product launch, dan lead generation.",
    benefits: [
      "Struktur copywriting fokus conversion",
      "A/B-ready section modular",
      "Loading cepat untuk ads",
    ],
    technologies: ["Next.js", "TailwindCSS", "Framer Motion"],
    duration: "7-14 hari",
    pricing: "Mulai Rp 1.500.000",
  },
  {
    icon: Layers,
    title: "Website Company Profile",
    slug: "company-profile",
    description:
      "Website profesional untuk memperkuat positioning brand dan kredibilitas perusahaan.",
    benefits: [
      "Informasi bisnis terstruktur",
      "SEO friendly architecture",
      "Integrasi form & analytics",
    ],
    technologies: ["Next.js", "TypeScript", "SEO Structured Data"],
    duration: "14-30 hari",
    pricing: "Mulai Rp 3.000.000",
  },
  {
    icon: BarChart3,
    title: "Web Admin Panel",
    slug: "web-admin-panel",
    description:
      "Dashboard data real-time untuk operasional internal, reporting, dan pengambilan keputusan.",
    benefits: [
      "Role-based access",
      "Chart dan data table dinamis",
      "Audit trail dan keamanan dasar",
    ],
    technologies: ["Next.js", "PostgreSQL", "REST API"],
    duration: "30-90 hari",
    pricing: "Mulai Rp 8.000.000",
  },
  {
    icon: Code2,
    title: "Custom Web App / SaaS",
    slug: "custom-web-app",
    description:
      "Pengembangan aplikasi web custom dan SaaS platform end-to-end sesuai proses bisnis.",
    benefits: [
      "Scalable architecture",
      "Modular feature rollout",
      "Monitoring dan observability",
    ],
    technologies: ["Next.js", "Node.js", "Cloud Deployment"],
    duration: "45-120 hari",
    pricing: "Mulai Rp 20.000.000",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    slug: "mobile-app",
    description:
      "Build aplikasi mobile Android & iOS dari MVP hingga production-ready release.",
    benefits: [
      "UX native feel",
      "Integrasi backend aman",
      "Release support ke store",
    ],
    technologies: ["React Native", "TypeScript", "Firebase/API"],
    duration: "30-120 hari",
    pricing: "Mulai Rp 15.000.000",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description:
      "Perancangan user flow, wireframe, dan interface modern yang fokus pada pengalaman pengguna.",
    benefits: [
      "Design system konsisten",
      "Interactive prototype",
      "Developer handoff rapi",
    ],
    technologies: ["Figma", "Design System", "UX Research"],
    duration: "7-30 hari",
    pricing: "Mulai Rp 4.000.000",
  },
  {
    icon: Settings,
    title: "API Integration",
    slug: "api-integration",
    description:
      "Integrasi payment gateway, ERP, CRM, dan layanan pihak ketiga ke sistem Anda.",
    benefits: [
      "Dokumentasi endpoint jelas",
      "Error handling resilient",
      "Monitoring request dan retry",
    ],
    technologies: ["REST", "GraphQL", "Webhook"],
    duration: "5-20 hari",
    pricing: "Mulai Rp 2.500.000",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    slug: "maintenance-support",
    description:
      "Perawatan performa, update keamanan, dan support teknis berkelanjutan.",
    benefits: [
      "SLA support prioritas",
      "Monitoring uptime",
      "Routine bug fixing",
    ],
    technologies: ["Monitoring Tools", "CI/CD", "Security Patch"],
    duration: "Bulanan",
    pricing: "Mulai Rp 1.200.000/bulan",
  },
];

export const workflowSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "Analisis kebutuhan, target user, KPI, dan skala teknis proyek.",
  },
  {
    step: "02",
    title: "Planning",
    description: "Menyusun scope, timeline sprint, dan arsitektur implementasi.",
  },
  {
    step: "03",
    title: "Build & Validate",
    description: "Development iteratif dengan QA dan feedback rutin tiap milestone.",
  },
  {
    step: "04",
    title: "Launch & Growth",
    description: "Go-live, monitoring, optimasi conversion, dan maintenance.",
  },
];

export const portfolioItems = [
  {
    title: "NusaRetail Commerce Dashboard",
    category: "Dashboard",
    industry: "Retail",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    alt: "Tampilan dashboard bisnis dengan grafik performa penjualan",
    stack: ["Next.js", "PostgreSQL", "Recharts"],
    summary: "Dashboard operasional multi-cabang dengan analitik penjualan real-time.",
  },
  {
    title: "MedikaOne Appointment Platform",
    category: "SaaS",
    industry: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    alt: "Dokter menggunakan platform digital di klinik modern",
    stack: ["Next.js", "Node.js", "Redis"],
    summary: "Platform booking dan antrean digital untuk 30+ klinik.",
  },
  {
    title: "EduGrow Landing Funnel",
    category: "Landing Page",
    industry: "Education",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    alt: "Tim startup berdiskusi mengenai strategi pertumbuhan produk edukasi",
    stack: ["Next.js", "Tailwind", "GA4"],
    summary: "Landing page funnel yang meningkatkan conversion trial hingga 43%.",
  },
  {
    title: "Finly Mobile MVP",
    category: "Mobile App",
    industry: "Fintech",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    alt: "Orang memegang ponsel dengan aplikasi pembayaran digital terbuka",
    stack: ["React Native", "TypeScript", "Supabase"],
    summary: "MVP aplikasi keuangan personal dengan rilis 8 minggu.",
  },
  {
    title: "LegalFlow Company Profile",
    category: "Company Profile",
    industry: "Legal Tech",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    alt: "Ruang rapat profesional untuk firma hukum dan teknologi",
    stack: ["Next.js", "Framer Motion", "SEO"],
    summary: "Website corporate modern dengan identitas visual premium.",
  },
  {
    title: "LogistikPro Tracking System",
    category: "Custom Web App",
    industry: "Logistics",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    alt: "Gudang logistik modern dengan sistem monitoring digital",
    stack: ["Next.js", "Mapbox", "REST API"],
    summary: "Aplikasi tracking armada dan notifikasi SLA pelanggan.",
  },
];

export const testimonials = [
  {
    name: "Rangga Pradana",
    role: "CEO, NusaRetail",
    quote:
      "Tim CreateYourWeb tidak sekadar coding, tapi membantu kami merancang sistem yang benar-benar dipakai tim operasional setiap hari.",
  },
  {
    name: "Nadia Lestari",
    role: "Head of Marketing, EduGrow",
    quote:
      "Landing page baru meningkatkan kualitas lead secara signifikan. Delivery cepat, rapi, dan komunikatif.",
  },
  {
    name: "Fajar Akbar",
    role: "Founder, MedikaOne",
    quote:
      "Prosesnya sangat terstruktur. Dari discovery sampai launch terasa seperti punya product engineering team sendiri.",
  },
];

export const faqs = [
  {
    question: "Apakah bisa cicilan untuk project besar?",
    answer:
      "Bisa. Skema pembayaran umumnya 40% DP, 30% saat milestone tengah, dan 30% saat handover.",
  },
  {
    question: "Apakah termasuk domain dan hosting?",
    answer:
      "Kami menyediakan opsi add-on hosting management dan pendampingan setup domain end-to-end.",
  },
  {
    question: "Apakah source code menjadi milik client?",
    answer:
      "Ya, source code akan diserahkan penuh setelah pembayaran selesai sesuai perjanjian proyek.",
  },
  {
    question: "Apakah bisa maintenance setelah go-live?",
    answer:
      "Tersedia paket maintenance bulanan meliputi monitoring, bug fixing, dan update minor.",
  },
];

export const pricingPlans = [
  {
    name: "Landing Page Basic",
    range: "Rp 1.500.000 - Rp 3.500.000",
    description: "Untuk campaign cepat dan validasi pasar awal.",
    features: [
      "1 halaman utama",
      "Mobile responsive",
      "CTA & form integrasi",
      "Basic SEO setup",
    ],
  },
  {
    name: "Landing Page Professional",
    range: "Rp 4.000.000 - Rp 8.000.000",
    description: "Untuk bisnis yang butuh conversion lebih agresif.",
    features: [
      "Copywriting section strategy",
      "Animasi premium",
      "A/B test ready",
      "Analytics setup",
    ],
    highlighted: true,
  },
  {
    name: "Landing Page Premium",
    range: "Rp 10.000.000+",
    description: "Untuk brand premium dan funnel berlayer.",
    features: [
      "Custom visual direction",
      "Deep CRO structure",
      "Performance optimization",
      "Priority support",
    ],
  },
  {
    name: "Company Profile Basic",
    range: "Rp 3.000.000 - Rp 6.000.000",
    description: "Website resmi profesional untuk bisnis berkembang.",
    features: ["5-7 halaman", "SEO fundamentals", "CMS sederhana"],
  },
  {
    name: "Company Profile Professional",
    range: "Rp 7.000.000 - Rp 15.000.000",
    description: "Untuk positioning brand yang lebih kuat.",
    features: ["10+ halaman", "Storytelling section", "Lead capture"],
  },
  {
    name: "Company Profile Enterprise",
    range: "Rp 20.000.000+",
    description: "Untuk kebutuhan multi brand atau multi region.",
    features: ["Scalable architecture", "Advanced integrations", "SLA support"],
  },
  {
    name: "Dashboard Basic",
    range: "Rp 8.000.000 - Rp 15.000.000",
    description: "Dashboard internal untuk report dan monitoring.",
    features: ["Role permission", "Chart & table", "Secure auth"],
  },
  {
    name: "Dashboard Medium System",
    range: "Rp 20.000.000 - Rp 50.000.000",
    description: "Sistem operasional lintas divisi.",
    features: ["Module-based features", "Data sync API", "Automated reports"],
  },
  {
    name: "Dashboard Enterprise",
    range: "Rp 75.000.000+",
    description: "Platform enterprise mission critical.",
    features: ["High availability", "Audit & compliance", "Enterprise support"],
  },
  {
    name: "Mobile App MVP",
    range: "Rp 15.000.000 - Rp 40.000.000",
    description: "Bangun MVP mobile untuk validasi produk cepat.",
    features: ["Core 3-5 features", "Android/iOS", "Store deployment"],
  },
  {
    name: "Mobile App Production",
    range: "Rp 50.000.000 - Rp 150.000.000+",
    description: "Untuk scale-up dengan reliability tinggi.",
    features: ["Advanced modules", "Performance tuning", "Security hardening"],
  },
];

export const addOnPricing = [
  { name: "Maintenance Bulanan", price: "Mulai Rp 1.200.000/bulan" },
  { name: "Hosting Management", price: "Mulai Rp 750.000/bulan" },
  { name: "SEO Optimization", price: "Mulai Rp 2.000.000/proyek" },
  { name: "Priority Support", price: "Mulai Rp 1.500.000/bulan" },
];

export const whyChooseUs = [
  {
    icon: Rocket,
    title: "Execution Cepat",
    description: "Sprint delivery jelas dengan progress report terukur.",
  },
  {
    icon: Palette,
    title: "Design yang Menjual",
    description: "UI/UX dibuat untuk conversion, bukan sekadar terlihat bagus.",
  },
  {
    icon: Code2,
    title: "Codebase Scalable",
    description: "Arsitektur clean dan siap dikembangkan jangka panjang.",
  },
  {
    icon: Settings,
    title: "Support Berkelanjutan",
    description: "Pendampingan setelah launch untuk menjaga performa bisnis.",
  },
];
