export type ProjectCategory = "all" | "web" | "mobile" | "ai";

export interface Project {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  category: ProjectCategory;
  hasAI: boolean;
  client: string;
  clientEn: string;
  technologies: string[];
  challenge: string;
  challengeEn: string;
  solution: string;
  solutionEn: string;
  results: { metric: string; metricEn: string; value: string }[];
  image: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "ecommerce-platform",
    title: "منصة تجارة إلكترونية متكاملة",
    titleEn: "Complete E-commerce Platform",
    description: "منصة تجارة إلكترونية حديثة مع نظام توصيات ذكي",
    descriptionEn: "Modern e-commerce platform with smart recommendation system",
    category: "web",
    hasAI: true,
    client: "شركة التجارة الذكية",
    clientEn: "Smart Commerce Co.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "OpenAI"],
    challenge: "بناء منصة قادرة على التعامل مع آلاف المنتجات",
    challengeEn: "Building a platform capable of handling thousands of products",
    solution: "منصة متكاملة مع نظام بحث ذكي وتوصيات مخصصة",
    solutionEn: "Integrated platform with smart search and personalized recommendations",
    results: [
      { metric: "زيادة المبيعات", metricEn: "Sales Increase", value: "150%" },
      { metric: "معدل التحويل", metricEn: "Conversion Rate", value: "35%" },
    ],
    image: "/projects/ecommerce.jpg",
    featured: true,
  },
  {
    id: "2",
    slug: "healthcare-app",
    title: "تطبيق الرعاية الصحية",
    titleEn: "Healthcare App",
    description: "تطبيق موبايل للرعاية الصحية مع مساعد ذكي",
    descriptionEn: "Mobile healthcare app with AI assistant",
    category: "mobile",
    hasAI: true,
    client: "مستشفى الأمل",
    clientEn: "Al-Amal Hospital",
    technologies: ["React Native", "Firebase", "TensorFlow"],
    challenge: "تسهيل الوصول للخدمات الصحية",
    challengeEn: "Facilitating access to healthcare services",
    solution: "تطبيق شامل للحجز والاستشارات",
    solutionEn: "Comprehensive app for booking and consultations",
    results: [
      { metric: "تقليل وقت الانتظار", metricEn: "Wait Time Reduction", value: "60%" },
      { metric: "المستخدمين النشطين", metricEn: "Active Users", value: "50K+" },
    ],
    image: "/projects/healthcare.jpg",
    featured: true,
  },
  {
    id: "3",
    slug: "chatbot-platform",
    title: "منصة شات بوت ذكية",
    titleEn: "Smart Chatbot Platform",
    description: "منصة لبناء وإدارة شات بوت ذكي للشركات",
    descriptionEn: "Platform for building and managing smart chatbots for businesses",
    category: "ai",
    hasAI: true,
    client: "شركة الاتصالات المتقدمة",
    clientEn: "Advanced Telecom Co.",
    technologies: ["OpenAI", "LangChain", "Python", "React"],
    challenge: "توفير خدمة عملاء آلية ذكية",
    challengeEn: "Providing intelligent automated customer service",
    solution: "منصة شات بوت قابلة للتخصيص",
    solutionEn: "Customizable chatbot platform",
    results: [
      { metric: "دقة الإجابات", metricEn: "Answer Accuracy", value: "94%" },
      { metric: "تقليل تكاليف الدعم", metricEn: "Support Cost Reduction", value: "70%" },
    ],
    image: "/projects/chatbot.jpg",
    featured: true,
  },
  {
    id: "4",
    slug: "fintech-dashboard",
    title: "لوحة تحكم مالية",
    titleEn: "Fintech Dashboard",
    description: "لوحة تحكم متقدمة لإدارة العمليات المالية",
    descriptionEn: "Advanced dashboard for financial operations management",
    category: "web",
    hasAI: false,
    client: "بنك المستقبل",
    clientEn: "Future Bank",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    challenge: "تصميم واجهة سهلة لعمليات معقدة",
    challengeEn: "Designing an easy interface for complex operations",
    solution: "تصميم UX/UI حديث مع تصور بيانات تفاعلي",
    solutionEn: "Modern UX/UI design with interactive data visualization",
    results: [
      { metric: "كفاءة العمليات", metricEn: "Operations Efficiency", value: "40%" },
      { metric: "رضا المستخدمين", metricEn: "User Satisfaction", value: "95%" },
    ],
    image: "/projects/fintech.jpg",
    featured: false,
  },
];

export function filterProjects(category: ProjectCategory): Project[] {
  if (category === "all") return projects;
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
