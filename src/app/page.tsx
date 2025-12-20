"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useLanguage, useTheme } from "@/context";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";
import { ParticleField } from "@/components/ui/ParticleField";
import { CountUp } from "@/components/ui/CountUp";
import { AnimatedLogo } from "@/components/ui/AnimatedLogo";
import { ServiceIcon, type ServiceType } from "@/components/ui/ServiceIcons";
import { SplineScene } from "@/components/ui/splite";

export default function Home() {
  const { t, locale } = useLanguage();
  useTheme(); // Keep context connected
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: aboutScrollProgress } = useScroll({
    target: aboutRef,
    offset: ["start start", "end end"],
  });

  // For horizontal scroll: move content from right to left (0% to -66.666% for 3 panels)
  const aboutX = useTransform(aboutScrollProgress, [0, 1], ["0%", "-66.666%"]);



  const services: { iconType: ServiceType; title: string; desc: string; gradient: string }[] = [
    { iconType: "web", title: t.services.web, desc: t.services.webDesc, gradient: "from-blue-500 to-cyan-500" },
    { iconType: "mobile", title: t.services.mobile, desc: t.services.mobileDesc, gradient: "from-purple-500 to-pink-500" },
    { iconType: "design", title: t.services.design, desc: t.services.designDesc, gradient: "from-orange-500 to-red-500" },
    { iconType: "cloud", title: t.services.cloud, desc: t.services.cloudDesc, gradient: "from-sky-500 to-indigo-500" },
    { iconType: "ai", title: t.services.ai, desc: t.services.aiDesc, gradient: "from-green-500 to-emerald-500" },
  ];

  const featuredProjects = [
    { icon: "🛒", title: locale === "ar" ? "منصة تجارة إلكترونية" : "E-commerce Platform", category: "web", tech: ["Next.js", "Node.js"] },
    { icon: "📱", title: locale === "ar" ? "تطبيق صحي" : "Healthcare App", category: "mobile", tech: ["React Native", "Firebase"] },
    { icon: "🤖", title: locale === "ar" ? "شات بوت ذكي" : "Smart Chatbot", category: "ai", tech: ["Python", "OpenAI"] },
  ];

  return (
    <div className="min-h-screen">
      <AnimatedLogo />
      <ParticleField />

      {/* Logo Intro Section - Black background for AnimatedLogo */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Empty section - AnimatedLogo component handles the logo display */}
      </section>

      {/* Hero Section - Creative Centered */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Light mode radial gradient background - blue edges, white center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_white_0%,_rgba(141,228,242,0.3)_50%,_rgba(122,154,199,0.4)_100%)] dark:bg-transparent" />
        
        <FloatingOrbs />
        
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-primary/30 rounded-full blur-[120px] sm:blur-[150px]"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-burgundy/25 rounded-full blur-[100px] sm:blur-[120px]"
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-[200px] h-[200px] bg-navy/20 rounded-full blur-[80px]"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          {/* Company Name with Slogan */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-3xl sm:text-4xl font-bold text-primary tracking-wider">WAI SOFT</span>
            <motion.p
              className="text-navy/60 dark:text-silver/80 text-lg sm:text-xl md:text-2xl mt-2 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              We Develop, You Grow
            </motion.p>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight whitespace-nowrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-navy dark:text-white">{t.hero.title}</span>{" "}
            <motion.span 
              className="gradient-text"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              {t.hero.titleHighlight}
            </motion.span>
          </motion.h1>

          {/* Subtitle - Services */}
          <motion.p
            className="text-xl sm:text-2xl text-primary/80 font-medium mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg text-navy/60 dark:text-silver/70 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {t.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button href="/contact" size="lg" className="group px-8 shadow-glow hover:shadow-glow-lg transition-shadow">
              <span>{t.hero.cta}</span>
              <motion.span 
                className={`inline-block ${locale === "ar" ? "mr-2" : "ml-2"}`}
                animate={{ x: locale === "ar" ? [0, -5, 0] : [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {locale === "ar" ? "←" : "→"}
              </motion.span>
            </Button>
            <Button href="/projects" variant="outline" size="lg" className="px-8 hover:bg-white/5 transition-colors">
              {t.hero.viewWork}
            </Button>
          </motion.div>


        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
              <motion.div 
                className="w-1.5 h-1.5 bg-primary rounded-full" 
                animate={{ y: [0, 12, 0] }} 
                transition={{ duration: 2, repeat: Infinity }} 
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section - Horizontal Scroll */}
      <section ref={aboutRef} className="relative" style={{ height: "300vh" }}>
        <div className="sticky top-0 h-screen flex items-center overflow-hidden" style={{ direction: "ltr" }}>
          {/* Progress indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-white/30"
                style={{
                  scale: useTransform(aboutScrollProgress, 
                    [i * 0.33, i * 0.33 + 0.1, (i + 1) * 0.33], 
                    [1, 1.5, 1]
                  ),
                  opacity: useTransform(aboutScrollProgress,
                    [i * 0.33, i * 0.33 + 0.1, (i + 1) * 0.33],
                    [0.3, 1, 0.3]
                  )
                }}
              />
            ))}
          </div>

          <motion.div 
            className="flex" 
            style={{ x: aboutX, width: "300vw" }}
          >
            {/* Panel 1 - About Content with Spline Robot */}
            <div className="w-screen h-screen relative bg-gradient-to-b from-gray-100 to-white dark:from-dark-100 dark:to-dark-50" style={{ flexShrink: 0, direction: "rtl" }}>
              {/* Content */}
              <div className="h-full flex">
                {/* Robot - Left Side (Full Height) */}
                <div className="w-1/2 h-full">
                  <SplineScene 
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                  />
                </div>

                {/* Text Content - Right Side */}
                <div className="w-1/2 h-full flex items-center justify-center px-8">
                  <div className="text-center lg:text-right max-w-lg">
                    <motion.span
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-navy/20 text-primary text-base font-medium mb-5 border border-primary/30 backdrop-blur-sm"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <motion.span 
                        className="w-2 h-2 rounded-full bg-primary"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      {t.homeAbout?.badge || "من نحن"}
                    </motion.span>

                    <motion.h2
                      className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy dark:text-white mb-4 leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      {t.homeAbout?.title || "شريكك التقني نحو المستقبل"}
                    </motion.h2>

                    <motion.p
                      className="text-navy/70 dark:text-silver text-base sm:text-lg mb-6 leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      {t.homeAbout?.description ||
                        "WAI Soft شركة متخصصة في تطوير البرمجيات وحلول الذكاء الاصطناعي."}
                    </motion.p>

                    <motion.div
                      className="flex flex-wrap gap-3 justify-center lg:justify-start"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <Link
                        href="/about"
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-navy text-white font-medium hover:shadow-glow transition-all text-sm"
                      >
                        {t.common.learnMore}
                        <motion.span animate={{ x: [0, -5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                          ←
                        </motion.span>
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy/5 dark:bg-white/10 text-navy dark:text-white font-medium border border-navy/10 dark:border-white/20 hover:border-primary/40 hover:bg-navy/10 dark:hover:bg-white/20 transition-all text-sm"
                      >
                        {locale === "ar" ? "تواصل معنا" : "Contact Us"}
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2 - Features Grid */}
            <div className="w-screen h-screen flex items-center justify-center px-4 sm:px-8 bg-gradient-to-b from-gray-100 to-white dark:from-dark-100 dark:to-dark-50" style={{ flexShrink: 0, direction: "rtl" }}>
              <div className="flex flex-col items-center justify-center">
                <motion.div className="text-center mb-10">
                  <motion.span
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 text-base font-medium mb-5 border border-green-500/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    ✨ {locale === "ar" ? "مميزاتنا" : "Our Features"}
                  </motion.span>
                  <h3 className="text-4xl sm:text-5xl font-bold text-navy dark:text-white">
                    {locale === "ar" ? "لماذا نحن مميزون؟" : "Why We're Different"}
                  </h3>
                </motion.div>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-5">
                  {[
                    { icon: "🚀", title: locale === "ar" ? "تقنيات حديثة" : "Modern Tech", desc: locale === "ar" ? "نستخدم أحدث التقنيات" : "Latest technologies", color: "from-blue-500/20 to-cyan-500/20" },
                    { icon: "💡", title: locale === "ar" ? "حلول مبتكرة" : "Innovative", desc: locale === "ar" ? "أفكار إبداعية مخصصة" : "Creative custom ideas", color: "from-yellow-500/20 to-orange-500/20" },
                    { icon: "🛡️", title: locale === "ar" ? "أمان عالي" : "High Security", desc: locale === "ar" ? "حماية بيانات متقدمة" : "Advanced data protection", color: "from-green-500/20 to-emerald-500/20" },
                    { icon: "⚡", title: locale === "ar" ? "سرعة التنفيذ" : "Fast Delivery", desc: locale === "ar" ? "إنجاز في الوقت المحدد" : "On-time completion", color: "from-purple-500/20 to-pink-500/20" },
                    { icon: "🤝", title: locale === "ar" ? "دعم متواصل" : "24/7 Support", desc: locale === "ar" ? "فريق دعم متاح دائماً" : "Always available team", color: "from-red-500/20 to-rose-500/20" },
                    { icon: "🎯", title: locale === "ar" ? "جودة عالية" : "High Quality", desc: locale === "ar" ? "معايير جودة صارمة" : "Strict quality standards", color: "from-indigo-500/20 to-violet-500/20" },
                  ].map((feature, i) => (
                    <motion.div
                      key={i}
                      className="group relative p-5 rounded-2xl bg-navy/5 dark:bg-white/5 border border-navy/10 dark:border-white/10 hover:border-primary/30 transition-all overflow-hidden min-w-[140px]"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ y: -3, scale: 1.02 }}
                    >
                      <motion.div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className="relative z-10 text-center">
                        <motion.span 
                          className="inline-flex w-14 h-14 rounded-xl bg-navy/10 dark:bg-white/10 items-center justify-center text-2xl mb-3"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                        >
                          {feature.icon}
                        </motion.span>
                        <h4 className="text-base font-bold text-navy dark:text-white mb-1">{feature.title}</h4>
                        <p className="text-navy/70 dark:text-silver text-sm">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Panel 3 - Stats */}
            <div className="w-screen h-screen flex items-center justify-center px-4 sm:px-8 bg-gradient-to-b from-gray-100 to-white dark:from-dark-100 dark:to-dark-50" style={{ flexShrink: 0, direction: "rtl" }}>
              <div className="flex flex-col items-center justify-center">
                <motion.div className="text-center mb-10">
                  <motion.span
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-navy/20 text-primary text-base font-medium mb-5 border border-primary/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    📊 {locale === "ar" ? "إنجازاتنا" : "Our Achievements"}
                  </motion.span>
                  <h3 className="text-4xl sm:text-5xl font-bold text-navy dark:text-white">
                    {locale === "ar" ? "أرقام نفخر بها" : "Numbers We're Proud Of"}
                  </h3>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { value: 15, suffix: "+", label: t.homeAbout?.experience || "سنوات من الخبرة", icon: "📅", color: "from-blue-500 to-cyan-500" },
                    { value: 50, suffix: "+", label: t.homeAbout?.projects || "مشروع ناجح", icon: "🎯", color: "from-purple-500 to-pink-500" },
                    { value: 40, suffix: "+", label: t.homeAbout?.clients || "عميل راضٍ", icon: "😊", color: "from-green-500 to-emerald-500" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      className="group relative text-center p-8 rounded-2xl bg-navy/5 dark:bg-white/5 backdrop-blur-sm border border-navy/10 dark:border-white/10 overflow-hidden min-w-[160px]"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <motion.div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                      <motion.div 
                        className="relative z-10 text-4xl mb-4" 
                        whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }} 
                        transition={{ duration: 0.4 }}
                      >
                        {stat.icon}
                      </motion.div>
                      <div className="relative z-10">
                        <CountUp end={stat.value} suffix={stat.suffix} className="text-4xl sm:text-5xl font-bold text-navy dark:text-white" />
                        <p className="text-navy/70 dark:text-silver text-base mt-3">{stat.label}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section - Enhanced with animated icons */}
      <section className="relative py-28 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-navy to-burgundy opacity-90" />
        <FloatingOrbs />
        
        {/* Animated background pattern */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
          animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">{t.whyUs?.title}</h2>
            <p className="text-white/70 max-w-xl mx-auto text-lg">{t.whyUs?.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "⚡", title: t.whyUs?.speed, desc: t.whyUs?.speedDesc, delay: 0 },
              { icon: "🎯", title: t.whyUs?.quality, desc: t.whyUs?.qualityDesc, delay: 0.15 },
              { icon: "🤝", title: t.whyUs?.support, desc: t.whyUs?.supportDesc, delay: 0.3 },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group relative text-center p-10 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                />

                <motion.div 
                  className="text-6xl mb-6 inline-block"
                  whileHover={{ scale: 1.3, rotate: [0, -15, 15, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced Cards */}
      <section className="relative py-28 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan/5 via-transparent to-primary/5 dark:from-dark-100/50 dark:via-transparent dark:to-transparent" />
        
        <div className="relative max-w-6xl mx-auto">
          <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <motion.span 
              className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan/20 to-primary/20 dark:from-primary/20 dark:to-navy/20 text-cyan-700 dark:text-primary text-sm font-medium mb-6 border border-cyan/30 dark:border-primary/20"
              whileHover={{ scale: 1.05 }}
            >
              {t.services.badge}
            </motion.span>
            <h2 className="text-3xl sm:text-5xl font-bold text-navy dark:text-white mb-4">{t.services.title}</h2>
            <p className="text-navy/70 dark:text-silver max-w-xl mx-auto text-lg">{t.services.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="group relative p-8 rounded-3xl bg-white dark:bg-dark-50/50 border border-cyan/20 dark:border-silver/10 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, borderColor: "rgba(141,228,242,0.5)" }}
              >
                {/* Gradient overlay on hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                {/* Icon with glow */}
                <motion.div 
                  className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan/20 to-primary/20 dark:from-white/10 dark:to-white/5 flex items-center justify-center mb-6 border border-cyan/30 dark:border-white/10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <ServiceIcon type={service.iconType} className="w-8 h-8 text-cyan-600 dark:text-primary" />
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity`}
                  />
                </motion.div>

                <h3 className="relative z-10 text-2xl font-bold text-navy dark:text-white mb-3">{service.title}</h3>
                <p className="relative z-10 text-navy/70 dark:text-silver leading-relaxed">{service.desc}</p>

                {/* Arrow indicator */}
                <motion.div 
                  className="absolute bottom-8 left-8 text-cyan-600 dark:text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ x: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ←
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Enhanced */}
      <section className="relative py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <motion.span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-navy/20 text-primary text-sm font-medium mb-6 border border-primary/20">
              {t.homeProjects?.badge || "أعمالنا"}
            </motion.span>
            <h2 className="text-3xl sm:text-5xl font-bold text-navy dark:text-white mb-4">{t.homeProjects?.title || "مشاريع نفخر بها"}</h2>
            <p className="text-navy/70 dark:text-silver max-w-xl mx-auto text-lg">{t.homeProjects?.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={i}
                className="group relative rounded-3xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10 }}
              >
                {/* Card background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-50 dark:to-dark-100 border border-silver/10 group-hover:border-primary/30 transition-colors rounded-3xl" />
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"
                />

                <div className="relative p-8">
                  {/* Category badge */}
                  <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                    {project.category === "web" ? "🌐 Web" : project.category === "mobile" ? "📱 Mobile" : "🤖 AI"}
                  </div>

                  {/* Icon */}
                  <motion.div 
                    className="text-7xl mb-6 mt-8"
                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {project.icon}
                  </motion.div>

                  <h3 className="text-xl font-bold text-navy dark:text-white mb-4">{project.title}</h3>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="px-2 py-1 rounded-full bg-navy/5 dark:bg-white/5 text-navy/70 dark:text-silver text-xs border border-navy/10 dark:border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button href="/projects" variant="outline" size="lg">{t.homeProjects?.viewAll || "عرض جميع المشاريع"}</Button>
          </motion.div>
        </div>
      </section>

      {/* Technologies We Use Section */}
      <section className="relative py-28 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/30 dark:via-dark-100/30 to-transparent" />
        
        <div className="relative max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <motion.span 
              className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-6 border border-cyan-500/20"
            >
              💻 {locale === "ar" ? "التقنيات" : "Technologies"}
            </motion.span>
            <h2 className="text-3xl sm:text-5xl font-bold text-navy dark:text-white mb-4">
              {locale === "ar" ? "التقنيات التي نستخدمها" : "Technologies We Use"}
            </h2>
            <p className="text-navy/70 dark:text-silver max-w-xl mx-auto text-lg">
              {locale === "ar" ? "نستخدم أحدث التقنيات لبناء حلول متطورة وموثوقة" : "We use cutting-edge technologies to build advanced and reliable solutions"}
            </p>
          </motion.div>

          {/* Tech Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: locale === "ar" ? "الواجهة الأمامية" : "Frontend",
                icon: "🎨",
                color: "from-blue-500/20 to-cyan-500/20",
                borderColor: "border-blue-500/20",
                techs: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"]
              },
              {
                category: locale === "ar" ? "الواجهة الخلفية" : "Backend",
                icon: "⚙️",
                color: "from-green-500/20 to-emerald-500/20",
                borderColor: "border-green-500/20",
                techs: ["Node.js", "Python", "Django", "Express", "GraphQL"]
              },
              {
                category: locale === "ar" ? "الموبايل" : "Mobile",
                icon: "📱",
                color: "from-purple-500/20 to-pink-500/20",
                borderColor: "border-purple-500/20",
                techs: ["React Native", "Flutter", "Swift", "Kotlin"]
              },
              {
                category: locale === "ar" ? "السحابة وقواعد البيانات" : "Cloud & Database",
                icon: "☁️",
                color: "from-orange-500/20 to-yellow-500/20",
                borderColor: "border-orange-500/20",
                techs: ["AWS", "Firebase", "MongoDB", "PostgreSQL", "Docker"]
              }
            ].map((cat, i) => (
              <motion.div
                key={i}
                className={`group relative p-6 rounded-3xl bg-white dark:bg-dark-50/50 border ${cat.borderColor} overflow-hidden shadow-sm`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{cat.icon}</span>
                    <h3 className="text-lg font-bold text-navy dark:text-white">{cat.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.techs.map((tech, j) => (
                      <motion.span
                        key={j}
                        className="px-3 py-1.5 rounded-full bg-navy/10 dark:bg-white/10 text-navy dark:text-silver text-sm border border-navy/10 dark:border-white/10 hover:border-primary/30 hover:text-primary transition-all"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + j * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative py-28 px-4 sm:px-6 overflow-hidden">
        <div className="relative max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <motion.span 
              className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-navy/20 text-primary text-sm font-medium mb-6 border border-primary/20"
            >
              🤝 {locale === "ar" ? "شركاؤنا" : "Partners"}
            </motion.span>
            <h2 className="text-3xl sm:text-5xl font-bold text-navy dark:text-white mb-4">
              {locale === "ar" ? "شركاء النجاح" : "Our Partners"}
            </h2>
            <p className="text-navy/70 dark:text-silver max-w-xl mx-auto text-lg">
              {locale === "ar" ? "نفخر بالتعاون مع أفضل الشركات والمؤسسات" : "We're proud to collaborate with leading companies and organizations"}
            </p>
          </motion.div>

          {/* Partners Marquee */}
          <div className="relative overflow-hidden py-8 group">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-dark-100 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-dark-100 to-transparent z-10 pointer-events-none" />
            
            <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex items-center shrink-0 pr-6">
                  {[
                    { name: "Google Cloud", icon: "☁️" },
                    { name: "AWS", icon: "🔶" },
                    { name: "Microsoft", icon: "🪟" },
                    { name: "Meta", icon: "Ⓜ️" },
                    { name: "OpenAI", icon: "🤖" },
                    { name: "Stripe", icon: "💳" },
                    { name: "Vercel", icon: "▲" },
                    { name: "GitHub", icon: "🐙" },
                  ].map((partner, i) => (
                    <div
                      key={`${setIndex}-${i}`}
                      className="flex items-center gap-3 px-6 py-4 mx-3 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-primary/30 hover:scale-105 transition-all shrink-0 shadow-sm"
                    >
                      <span className="text-2xl">{partner.icon}</span>
                      <span className="text-navy dark:text-white font-medium whitespace-nowrap">{partner.name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Trust badges */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { label: locale === "ar" ? "شريك معتمد" : "Certified Partner", icon: "✓" },
              { label: locale === "ar" ? "دعم 24/7" : "24/7 Support", icon: "🕐" },
              { label: locale === "ar" ? "أمان عالي" : "High Security", icon: "🔒" },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="text-primary">{badge.icon}</span>
                <span className="text-navy/70 dark:text-silver text-sm">{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-28 px-4 sm:px-6">
        <motion.div
          className="max-w-5xl mx-auto relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-dark-50 to-burgundy/50" />
          
          {/* Animated orbs */}
          <motion.div
            className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/40 rounded-full blur-[100px] sm:blur-[120px]"
            animate={{ scale: [1, 1.3, 1], x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-56 sm:w-80 h-56 sm:h-80 bg-burgundy/40 rounded-full blur-[80px] sm:blur-[100px]"
            animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0], y: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
          />

          {/* Grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />

          {/* Content */}
          <div className="relative z-10 text-center p-10 sm:p-16 md:p-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.span 
                className="inline-block text-5xl sm:text-6xl mb-6"
                animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🚀
              </motion.span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">{t.cta.title}</h2>
              <p className="text-white/70 text-base sm:text-lg mb-8 sm:mb-10 max-w-xl mx-auto">{t.cta.subtitle}</p>
              <Button href="/contact" size="lg" className="px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg shadow-glow hover:shadow-glow-lg transition-shadow">
                {t.cta.button}
                <motion.span className="inline-block mr-2" animate={{ x: [0, -5, 0] }} transition={{ duration: 1, repeat: Infinity }}>←</motion.span>
              </Button>
            </motion.div>
          </div>

          {/* Border glow */}
          <motion.div 
            className="absolute inset-0 rounded-[2rem] sm:rounded-[3rem] border border-primary/30"
            animate={{ borderColor: ["rgba(122,154,199,0.2)", "rgba(122,154,199,0.4)", "rgba(122,154,199,0.2)"] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      </section>
    </div>
  );
}
