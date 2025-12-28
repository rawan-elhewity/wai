export interface TeamMember {
  id: string;
  name: string;
  nameEn: string;
  role: string;
  roleEn: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
  };
}

export const team: TeamMember[] = [
  {
    id: "1",
    name: "علي الشيخ",
    nameEn: "Ali Elshaikh",
    role: "المؤسس والمدير التنفيذي",
    roleEn: "Founder & CEO",
    image: "/team/ali.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/ali-elshaikh",
    },
  },
  {
    id: "2",
    name: "روان الحويطي",
    nameEn: "Rawan Elhewity",
    role: "مطورة واجهات أمامية",
    roleEn: "Front-end Developer",
    image: "/team/rawan.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/rawan-elhewity",
    },
  },
  {
    id: "3",
    name: "نورهان سامي",
    nameEn: "Nourhan Sami",
    role: "مطورة ويب",
    roleEn: "Web Developer",
    image: "/team/nourhan.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/nourhan-sami-67977227b",
    },
  },
  {
    id: "4",
    name: "عمرو الديب",
    nameEn: "Amr Aldeeb",
    role: "مطور برمجيات",
    roleEn: "Software Developer",
    image: "/team/amr.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/amr-aldeeb-a4a919384",
    },
  },
  {
    id: "5",
    name: "أحمد عقل",
    nameEn: "Ahmed Akl",
    role: "مدير تطوير المنتجات",
    roleEn: "Product Development Manager",
    image: "/team/ahmed.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/ahmedakl1971",
    },
  },
];
