export interface Client {
  id: string;
  name: string;
  nameEn: string;
  logo?: string;
  website?: string;
  projectType: string;
  projectTypeEn: string;
}

// العملاء الذين وثقوا بنا
export const clients: Client[] = [
  {
    id: "fekra",
    name: "فكرة",
    nameEn: "Fekra",
    projectType: "موقع ويب",
    projectTypeEn: "Website",
  },
  {
    id: "tenhat",
    name: "تنهات",
    nameEn: "Tenhat",
    projectType: "موقع ويب / تحفة فنية",
    projectTypeEn: "Website / Masterpiece",
  },
  {
    id: "laavenir",
    name: "لافينير",
    nameEn: "L'avenir",
    projectType: "موقع ويب / مشروع",
    projectTypeEn: "Website / Project",
  },
  {
    id: "trueidea",
    name: "ترو آيديا",
    nameEn: "True Idea",
    projectType: "موقع ويب",
    projectTypeEn: "Website",
  },
  {
    id: "learning-home",
    name: "بيت التعلم",
    nameEn: "Learning Home",
    projectType: "موقع ويب",
    projectTypeEn: "Website",
  },
  {
    id: "majamah",
    name: "مجمعة",
    nameEn: "Majamah",
    projectType: "موقع ويب",
    projectTypeEn: "Website",
  },
];

// منصات WAI الخاصة
export interface Platform {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  website?: string;
  email?: string;
  since: string;
  category: "news" | "social" | "app";
}

export const waiPlatforms: Platform[] = [
  {
    id: "rtarab",
    name: "RT Arab",
    nameEn: "RT Arab",
    description: "منصة إخبارية عربية كبرى",
    descriptionEn: "Major Arabic news platform",
    website: "https://rtarab.com",
    email: "info@rtarab.com",
    since: "2015",
    category: "news",
  },
  {
    id: "dw-arab",
    name: "DW Arab",
    nameEn: "DW Arab",
    description: "منصة إخبارية عربية رائدة",
    descriptionEn: "Leading Arabic news platform",
    website: "https://dw-arab.com",
    email: "info@dw-arab.com",
    since: "2016",
    category: "news",
  },
  {
    id: "dite-ar",
    name: "Dite AR",
    nameEn: "Dite AR",
    description: "منصة محتوى عربي متنوع",
    descriptionEn: "Diverse Arabic content platform",
    website: "https://dite-ar.com",
    email: "info@dite-ar.com",
    since: "2017",
    category: "news",
  },
  {
    id: "as-screen-record",
    name: "AS Screen Record",
    nameEn: "AS Screen Record",
    description: "برنامج تسجيل شاشة احترافي",
    descriptionEn: "Professional screen recording software",
    since: "2016",
    category: "app",
  },
  {
    id: "princess",
    name: "البرنسيسة",
    nameEn: "The Princess",
    description: "صفحة فيسبوك موجهة للمرأة العربية",
    descriptionEn: "Facebook page targeting Arab women",
    since: "2015",
    category: "social",
  },
  {
    id: "housewives",
    name: "إلى ربات البيوت",
    nameEn: "To Housewives",
    description: "صفحة فيسبوك متخصصة في نصائح المنزل والطبخ",
    descriptionEn: "Facebook page specialized in home and cooking tips",
    since: "2013",
    category: "social",
  },
];

// الشركاء
export interface Partner {
  id: string;
  name: string;
  nameEn: string;
  logo?: string;
  website?: string;
}

export const partners: Partner[] = [
  // يمكن إضافة الشركاء هنا
];

// معلومات التواصل
export const contactInfo = {
  emails: ["info@wai-soft.com", "support@wai-soft.com"],
  phones: ["002-0107-053-7446", "002-0107-053-7447"],
  address: {
    ar: "39 شارع سوزان مبارك، شبين الكوم، المنوفية، مصر",
    en: "39 Sozan Mobarak St, Shebin Elkoom, MNF, EG",
  },
};

// الخدمات من الموقع القديم
export const services = [
  {
    id: "ux-ui",
    icon: "🎨",
    title: "تصميم UX/UI",
    titleEn: "UX and UI Design",
    description: "بدءاً من المفهوم، هندسة المعلومات، الهوية البصرية وتصميم UX/UI، يقدم فريقنا تجارب مذهلة لأقصى تفاعل للمستخدم.",
    descriptionEn: "Starting from concept, information architecture, visual identity and UI/UX design, our team delivers dazzling experiences for maximum user engagement.",
  },
  {
    id: "mobile",
    icon: "📱",
    title: "تطبيقات الموبايل",
    titleEn: "Mobile Applications",
    description: "نبني تطبيقات Android و iOS وتطبيقات متعددة المنصات بديهية وجذابة للشركات والمستهلكين.",
    descriptionEn: "We build intuitive and engaging Android, iOS and cross-platform apps for businesses, consumers and enterprises that end users love and adapt to them very quickly.",
  },
  {
    id: "web",
    icon: "🌐",
    title: "تطوير الويب",
    titleEn: "Web Development",
    description: "يقوم مطورو الويب لدينا بإنشاء حلول ويب مخصصة. نقدم حضوراً رقمياً لمساعدتك على تنمية أعمالك باستخدام أفضل تقنيات الويب.",
    descriptionEn: "Our web developers create custom web and web application solutions. We deliver web presence to help you grow your business using the best web technologies.",
  },
];

// مراحل العمل
export const workProcess = [
  {
    step: "01",
    title: "اكتشاف",
    titleEn: "Discover",
    description: "نشكل العلامات التجارية من خلال الاستكشاف، وتطبيق البحث المتعمق لتحدي الافتراضات في كل منعطف.",
    descriptionEn: "We shape brands through exploration, applying in-depth research to challenge assumptions at every turn.",
  },
  {
    step: "02",
    title: "تصميم",
    titleEn: "Design",
    description: "نهجنا في التصميم هو التبسيط. نحتضن متعة إنشاء شيء فريد وسهل للمستخدمين.",
    descriptionEn: "Our design approach is to simplify. We embrace the joy in creating something unique that is easy for end users.",
  },
  {
    step: "03",
    title: "تطوير",
    titleEn: "Develop",
    description: "باستخدام التقنيات الحديثة، نطور بكفاءة ومهارة، وننشئ حلولاً مرنة وقابلة للتطوير.",
    descriptionEn: "Using modern technologies, we develop with efficiency and skill, creating flexible and scalable business-driven solutions.",
  },
  {
    step: "04",
    title: "تسليم",
    titleEn: "Deliver",
    description: "نتبع نهجاً تكرارياً في عملنا وممارستنا، ونبحث دائماً عن طرق لتحسين ما نقوم به.",
    descriptionEn: "We take an iterative approach to both our work and our practice, always looking for ways to improve what we do.",
  },
];
