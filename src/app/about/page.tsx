"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context";
import { team } from "@/data/team";
import { useRef } from "react";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";
import { CountUp } from "@/components/ui/CountUp";
import { TeamSection } from "@/components/ui/team-section";
import { Linkedin } from "lucide-react";

export default function AboutPage() {
  const { t, locale } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const values = [
    { icon: "💡", title: locale === "ar" ? "الابتكار" : "Innovation", desc: locale === "ar" ? "نسعى دائماً لإيجاد حلول مبتكرة" : "We always seek innovative solutions", color: "from-yellow-500/20 to-orange-500/20" },
    { icon: "🎯", title: locale === "ar" ? "الجودة" : "Quality", desc: locale === "ar" ? "نلتزم بأعلى معايير الجودة" : "We commit to the highest quality standards", color: "from-blue-500/20 to-cyan-500/20" },
    { icon: "🤝", title: locale === "ar" ? "الشراكة" : "Partnership", desc: locale === "ar" ? "نعمل كشركاء مع عملائنا" : "We work as partners with our clients", color: "from-green-500/20 to-emerald-500/20" },
    { icon: "🚀", title: locale === "ar" ? "التطور" : "Growth", desc: locale === "ar" ? "نتعلم ونتطور باستمرار" : "We continuously learn and grow", color: "from-purple-500/20 to-pink-500/20" },
  ];

  const timeline = [
    { year: "2010", title: locale === "ar" ? "البداية" : "The Beginning", desc: locale === "ar" ? "تأسيس الشركة في شبين الكوم، مصر" : "Company founded in Shebin El-Kawm, Egypt", icon: "🌱" },
    { year: "2015", title: locale === "ar" ? "التوسع" : "Expansion", desc: locale === "ar" ? "توسيع الخدمات وبناء فريق متخصص" : "Expanding services and building specialized team", icon: "📈" },
    { year: "2020", title: locale === "ar" ? "التحول الرقمي" : "Digital Transformation", desc: locale === "ar" ? "التركيز على الحلول السحابية والموبايل" : "Focus on cloud solutions and mobile apps", icon: "☁️" },
    { year: "2023", title: locale === "ar" ? "الذكاء الاصطناعي" : "AI Integration", desc: locale === "ar" ? "دمج AI في خدماتنا" : "Integrating AI in our services", icon: "🤖" },
    { year: "2025", title: locale === "ar" ? "المستقبل" : "The Future", desc: locale === "ar" ? "قيادة الابتكار التقني في المنطقة" : "Leading tech innovation in the region", icon: "🚀" },
  ];

  const stats = [
    { value: 15, suffix: "+", label: locale === "ar" ? "سنة خبرة" : "Years Experience", icon: "📅" },
    { value: 50, suffix: "+", label: locale === "ar" ? "مشروع منجز" : "Projects Completed", icon: "🎯" },
    { value: 40, suffix: "+", label: locale === "ar" ? "عميل سعيد" : "Happy Clients", icon: "😊" },
    { value: 10, suffix: "+", label: locale === "ar" ? "عضو فريق" : "Team Members", icon: "👥" },
  ];

  return (
    <div ref={containerRef} className="min-h-screen pt-24 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 overflow-hidden">
        <FloatingOrbs />
        <motion.div 
          className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="relative max-w-6xl mx-auto text-center">
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {locale === "ar" ? "منذ 2010" : "Since 2010"}
          </motion.span>
          
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy dark:text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {t.about.title}
          </motion.h1>

          <motion.p
            className="text-primary font-semibold text-xl mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            We Develop, You Grow
          </motion.p>
          
          <motion.p
            className="text-lg sm:text-xl text-navy/70 dark:text-silver max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t.about.subtitle}
          </motion.p>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="group relative p-6 rounded-2xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 overflow-hidden shadow-sm"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <div className="relative z-10 text-center">
                  <span className="text-2xl mb-2 block">{stat.icon}</span>
                  <CountUp end={stat.value} suffix={stat.suffix} className="text-3xl font-bold text-navy dark:text-white" />
                  <p className="text-navy/70 dark:text-silver text-sm mt-1">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section - Enhanced */}
      <section className="relative py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-navy/20 text-primary text-sm font-medium mb-6 border border-primary/20"
              >
                {t.about.story}
              </motion.span>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-navy dark:text-white mb-6 leading-tight">
                {locale === "ar" ? "15 عاماً من الابتكار والتميز" : "15 Years of Innovation & Excellence"}
              </h2>
              
              <p className="text-navy/70 dark:text-silver mb-8 leading-relaxed text-lg">{t.about.storyText}</p>
              
              <motion.div 
                className="p-6 rounded-2xl bg-gradient-to-r from-primary via-navy to-burgundy relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                  animate={{ translateX: ["100%", "-100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <p className="text-white font-semibold text-xl relative z-10">{t.about.meaningText}</p>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ y }}
            >
              <div className="relative">
                {/* Animated rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary/30"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ width: "300px", height: "300px", margin: "auto" }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary/20"
                  animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  style={{ width: "300px", height: "300px", margin: "auto" }}
                />
                
                <motion.div 
                  className="relative text-center p-16 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-50 dark:to-dark-100 border border-gray-200 dark:border-white/10"
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring" }}
                >
                  <motion.p
                    className="text-7xl font-bold bg-gradient-to-r from-primary via-white to-burgundy bg-clip-text text-transparent mb-2"
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    W + AI
                  </motion.p>
                  <motion.p 
                    className="text-3xl text-white/50"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    =
                  </motion.p>
                  <p className="text-5xl font-bold text-white mt-2">WAY</p>
                  <p className="text-navy/70 dark:text-silver text-sm mt-4">{locale === "ar" ? "طريقك للمستقبل" : "Your Way to Future"}</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Enhanced */}
      <section className="relative py-28 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-burgundy/5" />
        
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="group relative p-10 rounded-3xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-navy to-primary opacity-90" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              />
              <div className="relative z-10">
                <motion.span 
                  className="text-5xl mb-6 block"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  🎯
                </motion.span>
                <h3 className="text-3xl font-bold text-white mb-4">{t.about.mission}</h3>
                <p className="text-white/80 text-lg leading-relaxed">{t.about.missionText}</p>
              </div>
            </motion.div>
            
            <motion.div
              className="group relative p-10 rounded-3xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-50 dark:to-dark-100 border border-gray-200 dark:border-white/10" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              />
              <div className="relative z-10">
                <motion.span 
                  className="text-5xl mb-6 block"
                  whileHover={{ scale: 1.2, rotate: -10 }}
                >
                  👁️
                </motion.span>
                <h3 className="text-3xl font-bold text-navy dark:text-white mb-4">{t.about.vision}</h3>
                <p className="text-navy/70 dark:text-silver text-lg leading-relaxed">{t.about.visionText}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Enhanced */}
      <section className="relative py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-navy/20 text-primary text-sm font-medium mb-6 border border-primary/20">
              {locale === "ar" ? "ما يميزنا" : "What Defines Us"}
            </motion.span>
            <h2 className="text-3xl sm:text-5xl font-bold text-navy dark:text-white mb-4">
              {t.about.values}
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                className="group relative text-center p-8 rounded-3xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 overflow-hidden shadow-sm"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                
                <motion.div
                  className="relative z-10 text-5xl mb-6 inline-block"
                  whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {value.icon}
                </motion.div>
                
                <h3 className="relative z-10 text-xl font-bold text-navy dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="relative z-10 text-navy/70 dark:text-silver text-sm leading-relaxed">{value.desc}</p>
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section - Enhanced */}
      <section className="relative py-28 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100/50 dark:from-dark-100/50 to-transparent" />
        
        <div className="relative max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-navy/20 text-primary text-sm font-medium mb-6 border border-primary/20">
              {locale === "ar" ? "مسيرتنا" : "Our Journey"}
            </motion.span>
            <h2 className="text-3xl sm:text-5xl font-bold text-navy dark:text-white mb-4">
              {t.about.journey}
            </h2>
          </motion.div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <motion.div 
              className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-primary via-navy to-burgundy hidden md:block"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />
            
            <div className="space-y-12 md:space-y-0">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <motion.div
                      className="group p-6 rounded-2xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 hover:border-primary/30 transition-colors shadow-sm"
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <span className="text-3xl mb-3 block">{item.icon}</span>
                      <div className="text-4xl font-bold text-primary mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-navy dark:text-white mb-2">{item.title}</h3>
                      <p className="text-navy/70 dark:text-silver">{item.desc}</p>
                    </motion.div>
                  </div>
                  
                  {/* Center dot */}
                  <motion.div 
                    className="hidden md:flex w-6 h-6 rounded-full bg-primary border-4 border-dark items-center justify-center z-10"
                    whileHover={{ scale: 1.5 }}
                    animate={{ boxShadow: ["0 0 0 0 rgba(122,154,199,0.4)", "0 0 0 10px rgba(122,154,199,0)", "0 0 0 0 rgba(122,154,199,0.4)"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* Empty space for alignment */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection
        title={locale === "ar" ? "فريقنا المبدع" : "Our Creative Team"}
        subtitle={locale === "ar" ? "فريق العمل" : "Our Team"}
        description={locale === "ar" 
          ? "نحن فريق من المحترفين الشغوفين بالتكنولوجيا والابتكار، نعمل معاً لتحويل أفكاركم إلى واقع رقمي متميز"
          : "We are a team of professionals passionate about technology and innovation, working together to transform your ideas into outstanding digital reality"
        }
        locale={locale}
        members={team.map(member => ({
          name: locale === "ar" ? member.name : member.nameEn,
          designation: locale === "ar" ? member.role : member.roleEn,
          imageSrc: member.image,
          socialLinks: member.social.linkedin ? [{ icon: Linkedin, href: member.social.linkedin }] : []
        }))}
      />

      {/* CTA Section */}
      <section className="relative py-28 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-navy to-burgundy opacity-90" />
        <FloatingOrbs />
        
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="text-6xl mb-6 block"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🚀
          </motion.span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            {locale === "ar" ? "جاهز للانطلاق معنا؟" : "Ready to Start with Us?"}
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            {locale === "ar" ? "دعنا نحول فكرتك إلى واقع رقمي مذهل" : "Let us transform your idea into an amazing digital reality"}
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-navy font-bold text-lg hover:bg-white/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {locale === "ar" ? "تواصل معنا الآن" : "Contact Us Now"}
            <motion.span animate={{ x: [0, -5, 0] }} transition={{ duration: 1, repeat: Infinity }}>
              ←
            </motion.span>
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
