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
      linkedin: "https://eg.linkedin.com/in/ali-elshaikh",
    },
  },
  {
    id: "2",
    name: "نورهان سامي",
    nameEn: "Nourhan Sami",
    role: "مصممة ومطورة",
    roleEn: "Designer & Developer",
    image: "/team/nourhan.jpg",
    social: {
      linkedin: "https://eg.linkedin.com/in/nourhan-sami-67977227b",
    },
  },
];
