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
  // WAI Platforms - منصات WAI
  {
    id: "rtarab",
    slug: "rtarab",
    title: "RT Arab",
    titleEn: "RT Arab",
    description: "منصة إخبارية عربية كبرى تخدم ملايين المستخدمين العرب حول العالم",
    descriptionEn: "Major Arabic news platform serving millions of Arab users worldwide",
    category: "web",
    hasAI: false,
    client: "WAI",
    clientEn: "WAI",
    technologies: ["PHP", "MySQL", "WordPress", "CDN"],
    challenge: "بناء منصة إخبارية قادرة على التعامل مع ملايين الزوار يومياً",
    challengeEn: "Building a news platform capable of handling millions of daily visitors",
    solution: "منصة محسنة للأداء مع نظام تخزين مؤقت متقدم",
    solutionEn: "Performance-optimized platform with advanced caching system",
    results: [
      { metric: "الزوار الشهريين", metricEn: "Monthly Visitors", value: "5M+" },
      { metric: "منذ", metricEn: "Since", value: "2015" },
    ],
    image: "/projects/rtarab.jpg",
    featured: true,
  },
  {
    id: "dw-arab",
    slug: "dw-arab",
    title: "DW Arab",
    titleEn: "DW Arab",
    description: "منصة إخبارية عربية رائدة في منطقة الشرق الأوسط وشمال أفريقيا",
    descriptionEn: "Leading Arabic news platform in the MENA region",
    category: "web",
    hasAI: false,
    client: "WAI",
    clientEn: "WAI",
    technologies: ["PHP", "MySQL", "WordPress", "AWS"],
    challenge: "توفير محتوى إخباري موثوق وسريع للمستخدمين العرب",
    challengeEn: "Providing reliable and fast news content to Arab users",
    solution: "منصة متكاملة مع نظام إدارة محتوى متقدم",
    solutionEn: "Integrated platform with advanced content management system",
    results: [
      { metric: "الزوار الشهريين", metricEn: "Monthly Visitors", value: "3M+" },
      { metric: "منذ", metricEn: "Since", value: "2016" },
    ],
    image: "/projects/dw-arab.jpg",
    featured: true,
  },
  {
    id: "dite-ar",
    slug: "dite-ar",
    title: "Dite AR",
    titleEn: "Dite AR",
    description: "منصة محتوى عربي متنوع تخدم المستخدمين في المنطقة العربية",
    descriptionEn: "Diverse Arabic content platform serving users in the Arab region",
    category: "web",
    hasAI: false,
    client: "WAI",
    clientEn: "WAI",
    technologies: ["PHP", "MySQL", "Laravel", "Vue.js"],
    challenge: "إنشاء منصة محتوى متنوعة وجذابة",
    challengeEn: "Creating a diverse and engaging content platform",
    solution: "منصة مرنة مع تصميم عصري وتجربة مستخدم ممتازة",
    solutionEn: "Flexible platform with modern design and excellent UX",
    results: [
      { metric: "المستخدمين", metricEn: "Users", value: "1M+" },
      { metric: "منذ", metricEn: "Since", value: "2017" },
    ],
    image: "/projects/dite-ar.jpg",
    featured: false,
  },
  {
    id: "as-screen-record",
    slug: "as-screen-record",
    title: "AS Screen Record",
    titleEn: "AS Screen Record",
    description: "برنامج تسجيل شاشة احترافي سهل الاستخدام",
    descriptionEn: "Professional and easy-to-use screen recording software",
    category: "mobile",
    hasAI: false,
    client: "WAI",
    clientEn: "WAI",
    technologies: ["Java", "Android SDK", "FFmpeg"],
    challenge: "تطوير برنامج تسجيل شاشة بجودة عالية وحجم صغير",
    challengeEn: "Developing high-quality screen recording software with small size",
    solution: "تطبيق محسن مع ضغط فيديو متقدم",
    solutionEn: "Optimized app with advanced video compression",
    results: [
      { metric: "التحميلات", metricEn: "Downloads", value: "500K+" },
      { metric: "منذ", metricEn: "Since", value: "2016" },
    ],
    image: "/projects/as-screen-record.jpg",
    featured: false,
  },
  {
    id: "princess",
    slug: "princess",
    title: "البرنسيسة",
    titleEn: "The Princess",
    description: "صفحة فيسبوك موجهة للمرأة العربية مع ملايين المتابعين",
    descriptionEn: "Facebook page targeting Arab women with millions of followers",
    category: "web",
    hasAI: false,
    client: "WAI",
    clientEn: "WAI",
    technologies: ["Social Media", "Content Marketing", "Analytics"],
    challenge: "بناء مجتمع نسائي عربي كبير على وسائل التواصل",
    challengeEn: "Building a large Arab women's community on social media",
    solution: "محتوى مخصص وتفاعلي يلبي احتياجات المرأة العربية",
    solutionEn: "Customized and interactive content meeting Arab women's needs",
    results: [
      { metric: "المتابعين", metricEn: "Followers", value: "2M+" },
      { metric: "منذ", metricEn: "Since", value: "2015" },
    ],
    image: "/projects/princess.jpg",
    featured: false,
  },
  {
    id: "housewives",
    slug: "housewives",
    title: "إلى ربات البيوت",
    titleEn: "To Housewives",
    description: "صفحة فيسبوك متخصصة في نصائح المنزل والطبخ للمرأة العربية",
    descriptionEn: "Facebook page specialized in home and cooking tips for Arab women",
    category: "web",
    hasAI: false,
    client: "WAI",
    clientEn: "WAI",
    technologies: ["Social Media", "Content Marketing", "Video Production"],
    challenge: "تقديم محتوى مفيد وعملي لربات البيوت",
    challengeEn: "Providing useful and practical content for housewives",
    solution: "محتوى متنوع من وصفات ونصائح منزلية",
    solutionEn: "Diverse content of recipes and home tips",
    results: [
      { metric: "المتابعين", metricEn: "Followers", value: "3M+" },
      { metric: "منذ", metricEn: "Since", value: "2013" },
    ],
    image: "/projects/housewives.jpg",
    featured: false,
  },
  // Client Projects - مشاريع العملاء
  {
    id: "fekra",
    slug: "fekra",
    title: "فكرة",
    titleEn: "Fekra",
    description: "موقع ويب احترافي لشركة فكرة",
    descriptionEn: "Professional website for Fekra company",
    category: "web",
    hasAI: false,
    client: "فكرة",
    clientEn: "Fekra",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
    challenge: "تصميم موقع يعكس هوية الشركة",
    challengeEn: "Designing a website that reflects the company's identity",
    solution: "تصميم عصري مع تجربة مستخدم سلسة",
    solutionEn: "Modern design with smooth user experience",
    results: [
      { metric: "رضا العميل", metricEn: "Client Satisfaction", value: "100%" },
      { metric: "وقت التحميل", metricEn: "Load Time", value: "<2s" },
    ],
    image: "/projects/fekra.jpg",
    featured: false,
  },
  {
    id: "tenhat",
    slug: "tenhat",
    title: "تنهات",
    titleEn: "Tenhat",
    description: "موقع ويب وتحفة فنية رقمية لشركة تنهات",
    descriptionEn: "Website and digital masterpiece for Tenhat company",
    category: "web",
    hasAI: false,
    client: "تنهات",
    clientEn: "Tenhat",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    challenge: "إنشاء تجربة رقمية فريدة",
    challengeEn: "Creating a unique digital experience",
    solution: "تصميم إبداعي مع تقنيات حديثة",
    solutionEn: "Creative design with modern technologies",
    results: [
      { metric: "التفاعل", metricEn: "Engagement", value: "+200%" },
      { metric: "الزوار", metricEn: "Visitors", value: "50K+" },
    ],
    image: "/projects/tenhat.jpg",
    featured: true,
  },
  {
    id: "laavenir",
    slug: "laavenir",
    title: "لافينير",
    titleEn: "L'avenir",
    description: "موقع ويب ومشروع متكامل لشركة لافينير",
    descriptionEn: "Website and complete project for L'avenir company",
    category: "web",
    hasAI: false,
    client: "لافينير",
    clientEn: "L'avenir",
    technologies: ["Next.js", "Tailwind CSS", "Strapi", "PostgreSQL"],
    challenge: "بناء منصة متكاملة للشركة",
    challengeEn: "Building a complete platform for the company",
    solution: "حل شامل يغطي جميع احتياجات العميل",
    solutionEn: "Comprehensive solution covering all client needs",
    results: [
      { metric: "المبيعات", metricEn: "Sales", value: "+150%" },
      { metric: "الكفاءة", metricEn: "Efficiency", value: "+80%" },
    ],
    image: "/projects/laavenir.jpg",
    featured: false,
  },
  {
    id: "trueidea",
    slug: "trueidea",
    title: "ترو آيديا",
    titleEn: "True Idea",
    description: "موقع ويب احترافي لوكالة ترو آيديا الإبداعية",
    descriptionEn: "Professional website for True Idea creative agency",
    category: "web",
    hasAI: false,
    client: "ترو آيديا",
    clientEn: "True Idea",
    technologies: ["Vue.js", "Laravel", "MySQL", "Docker"],
    challenge: "عرض أعمال الوكالة بشكل جذاب",
    challengeEn: "Showcasing agency work attractively",
    solution: "معرض أعمال تفاعلي مع تصميم مميز",
    solutionEn: "Interactive portfolio with distinctive design",
    results: [
      { metric: "العملاء الجدد", metricEn: "New Clients", value: "+40%" },
      { metric: "التحويلات", metricEn: "Conversions", value: "+60%" },
    ],
    image: "/projects/trueidea.jpg",
    featured: false,
  },
  {
    id: "learning-home",
    slug: "learning-home",
    title: "بيت التعلم",
    titleEn: "Learning Home",
    description: "منصة تعليمية إلكترونية متكاملة",
    descriptionEn: "Complete e-learning platform",
    category: "web",
    hasAI: true,
    client: "بيت التعلم",
    clientEn: "Learning Home",
    technologies: ["React", "Node.js", "MongoDB", "WebRTC", "AI"],
    challenge: "بناء منصة تعليمية تفاعلية",
    challengeEn: "Building an interactive educational platform",
    solution: "منصة مع فصول افتراضية ونظام تقييم ذكي",
    solutionEn: "Platform with virtual classrooms and smart assessment system",
    results: [
      { metric: "الطلاب", metricEn: "Students", value: "10K+" },
      { metric: "الدورات", metricEn: "Courses", value: "100+" },
    ],
    image: "/projects/learning-home.jpg",
    featured: true,
  },
  {
    id: "majamah",
    slug: "majamah",
    title: "مجمعة",
    titleEn: "Majamah",
    description: "موقع ويب لمنصة مجمعة",
    descriptionEn: "Website for Majamah platform",
    category: "web",
    hasAI: false,
    client: "مجمعة",
    clientEn: "Majamah",
    technologies: ["WordPress", "PHP", "MySQL", "JavaScript"],
    challenge: "إنشاء منصة سهلة الإدارة",
    challengeEn: "Creating an easy-to-manage platform",
    solution: "نظام إدارة محتوى مخصص وسهل الاستخدام",
    solutionEn: "Custom and user-friendly content management system",
    results: [
      { metric: "سهولة الإدارة", metricEn: "Ease of Management", value: "95%" },
      { metric: "الأداء", metricEn: "Performance", value: "A+" },
    ],
    image: "/projects/majamah.jpg",
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
