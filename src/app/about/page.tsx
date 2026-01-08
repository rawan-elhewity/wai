"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/context";
import { team } from "@/data/team";
import { useRef } from "react";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";
import { CountUp } from "@/components/ui/CountUp";
import { TeamSection } from "@/components/ui/team-section";
import { Linkedin, Crown, Layout, Globe, Code2, Zap } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";

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
    <div ref={containerRef} className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <PageHero
        title={t.about.title}
        subtitle={t.about.subtitle}
        badge={locale === "ar" ? "منذ 2010" : "Since 2010"}
        icon="🏢"
        gradient="primary"
      >
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="group relative p-6 rounded-2xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
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
        </div>
      </PageHero>

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
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-navy to-primary opacity-90" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              />
              <div className="relative z-10">
                <motion.span
                  className="text-5xl mb-6 block"
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
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-50 dark:to-dark-100 border border-gray-200 dark:border-white/10" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              />
              <div className="relative z-10">
                <motion.span
                  className="text-5xl mb-6 block"
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
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <motion.div
                  className="relative z-10 text-5xl mb-6 inline-block"
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

      {/* Timeline Section - Modern Horizontal Design */}
      <section className="relative py-28 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/5 via-transparent to-primary/5" />

        {/* Animated background elements */}
        <motion.div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-burgundy/10 rounded-full blur-[120px]"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/20 to-navy/20 text-primary text-sm font-medium mb-6 border border-primary/20 backdrop-blur-sm"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {locale === "ar" ? "مسيرتنا" : "Our Journey"}
            </motion.span>
            <h2 className="text-3xl sm:text-5xl font-bold text-navy dark:text-white mb-4">
              {t.about.journey}
            </h2>
            <p className="text-navy/60 dark:text-silver/60 max-w-xl mx-auto">
              {locale === "ar" ? "رحلة من الابتكار والنمو المستمر" : "A journey of innovation and continuous growth"}
            </p>
          </motion.div>

          {/* Modern Timeline - Horizontal on desktop, vertical on mobile */}
          <div className="relative">
            {/* Horizontal line - desktop */}
            <motion.div
              className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />

            {/* Animated progress line */}
            <motion.div
              className="hidden lg:block absolute top-1/2 left-0 h-1 bg-gradient-to-r from-primary via-navy to-burgundy -translate-y-1/2 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
            />

            {/* Timeline items */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  className="relative group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                >
                  {/* Connector dot */}
                  <motion.div
                    className="hidden lg:flex absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[calc(50%+60px)] w-5 h-5 rounded-full bg-gradient-to-br from-primary to-navy items-center justify-center z-20 shadow-lg shadow-primary/30"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(122,154,199,0.4)",
                        "0 0 0 15px rgba(122,154,199,0)",
                        "0 0 0 0 rgba(122,154,199,0.4)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </motion.div>

                  {/* Vertical connector line */}
                  <motion.div
                    className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[60px] w-0.5 h-[60px] bg-gradient-to-b from-primary/50 to-transparent"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.5 }}
                  />

                  {/* Card */}
                  <motion.div
                    className="relative p-6 rounded-3xl bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 overflow-hidden shadow-xl shadow-gray-200/50 dark:shadow-none h-full min-h-[280px] flex flex-col"
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Gradient overlay on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-burgundy/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    />

                    {/* Icon with animated background */}
                    <div className="relative mb-4">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/20 to-navy/20 rounded-2xl blur-xl"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                      />
                      <motion.div
                        className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-50 dark:to-dark-100 flex items-center justify-center text-3xl border border-gray-200 dark:border-white/10"
                        transition={{ duration: 0.5 }}
                      >
                        {item.icon}
                      </motion.div>
                    </div>

                    {/* Year badge */}
                    <motion.div
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-navy text-white text-sm font-bold mb-3 shadow-lg shadow-primary/20"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                      {item.year}
                    </motion.div>

                    {/* Content */}
                    <h3 className="relative z-10 text-xl font-bold text-navy dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="relative z-10 text-navy/60 dark:text-silver/80 text-sm leading-relaxed flex-grow">
                      {item.desc}
                    </p>

                    {/* Bottom accent line */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-navy to-burgundy transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    />
                  </motion.div>
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
        members={team.map(member => {
          // Map roles to icons
          let roleIcon = Code2;
          if (member.roleEn.includes("Founder") || member.roleEn.includes("CEO")) roleIcon = Crown;
          else if (member.roleEn.includes("Front-end")) roleIcon = Layout;
          else if (member.roleEn.includes("Web")) roleIcon = Globe;
          else if (member.roleEn.includes("Product")) roleIcon = Zap;

          return {
            name: locale === "ar" ? member.name : member.nameEn,
            designation: locale === "ar" ? member.role : member.roleEn,
            icon: roleIcon,
            socialLinks: member.social.linkedin ? [{ icon: Linkedin, href: member.social.linkedin }] : []
          }
        })}
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
