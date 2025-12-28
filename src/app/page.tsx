"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo, memo, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/Button";
import { useLanguage, useTheme } from "@/context";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";
import { CountUp } from "@/components/ui/CountUp";
import { ServiceIcon, type ServiceType } from "@/components/ui/ServiceIcons";

// Lazy load heavy components
const ParticleField = dynamic(
  () => import("@/components/ui/ParticleField").then((mod) => ({ default: mod.ParticleField })),
  { ssr: false }
);
const SplineScene = dynamic(
  () => import("@/components/ui/splite").then((mod) => ({ default: mod.SplineScene })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <span className="loader"></span>
      </div>
    ),
  }
);

// Memoized service card - Modern Design
const ServiceCard = memo(function ServiceCard({ service, index }: { service: { iconType: ServiceType; title: string; desc: string; gradient: string }; index: number }) {
  return (
    <motion.div
      className="group relative h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="relative h-full p-6 sm:p-8 rounded-2xl bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-lg shadow-gray-200/50 dark:shadow-none overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-cyan/10 hover:-translate-y-2 hover:border-primary/40 dark:hover:border-cyan/30">
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Decorative corner */}
        <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.gradient} opacity-20 dark:opacity-20 rounded-full blur-3xl group-hover:opacity-30 dark:group-hover:opacity-30 transition-opacity duration-500`} />
        
        {/* Icon */}
        <div className="relative z-10 mb-6">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 shadow-lg`}>
            <div className="w-full h-full rounded-xl bg-white dark:bg-dark-100 flex items-center justify-center">
              <ServiceIcon type={service.iconType} className="w-7 h-7 text-navy dark:text-white" />
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-navy dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-cyan transition-colors duration-300">{service.title}</h3>
          <p className="text-navy/70 dark:text-silver text-sm leading-relaxed">{service.desc}</p>
        </div>
        
        {/* Arrow indicator */}
        <div className="relative z-10 mt-6 flex items-center text-primary/70 dark:text-white/40 group-hover:text-primary dark:group-hover:text-cyan transition-colors duration-300">
          <span className="text-sm font-medium">{service.title.includes("تطوير") || service.title.includes("Web") ? "اكتشف المزيد" : "Learn more"}</span>
          <svg className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2 transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
});

export default function Home() {
  const { t, locale } = useLanguage();
  useTheme();
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  // AI-like Typing animation state with loop
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isWaiting, setIsWaiting] = useState(false);
  const sloganText = "We develop, you grow...";

  useEffect(() => {
    // Typing phase
    if (!isWaiting && currentIndex < sloganText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + sloganText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 80); // Faster typing speed for AI effect
      return () => clearTimeout(timeout);
    }
    
    // Cursor blinking for 5 seconds after typing
    if (currentIndex === sloganText.length && !isWaiting) {
      const cursorTimeout = setTimeout(() => {
        setShowCursor(true);
      }, 100);
      
      const waitTimeout = setTimeout(() => {
        setIsWaiting(true);
      }, 5000); // Wait 5 seconds with cursor blinking
      
      return () => {
        clearTimeout(cursorTimeout);
        clearTimeout(waitTimeout);
      };
    }
    
    // Wait 5 more seconds then restart
    if (isWaiting) {
      const restartTimeout = setTimeout(() => {
        setDisplayedText("");
        setCurrentIndex(0);
        setIsWaiting(false);
        setShowCursor(true);
      }, 5000); // Wait another 5 seconds before restart
      
      return () => clearTimeout(restartTimeout);
    }
  }, [currentIndex, sloganText, isWaiting]);

  const { scrollYProgress: aboutScrollProgress } = useScroll({
    target: aboutRef,
    offset: ["start start", "end end"],
  });

  const aboutX = useTransform(
    aboutScrollProgress,
    [0, 1],
    locale === "ar" ? ["-66.666%", "0%"] : ["0%", "-66.666%"]
  );

  // Memoize static data
  const services = useMemo(() => [
    { iconType: "web" as ServiceType, title: t.services.web, desc: t.services.webDesc, gradient: "from-blue-500 to-cyan-500" },
    { iconType: "mobile" as ServiceType, title: t.services.mobile, desc: t.services.mobileDesc, gradient: "from-purple-500 to-pink-500" },
    { iconType: "design" as ServiceType, title: t.services.design, desc: t.services.designDesc, gradient: "from-orange-500 to-red-500" },
    { iconType: "cloud" as ServiceType, title: t.services.cloud, desc: t.services.cloudDesc, gradient: "from-sky-500 to-indigo-500" },
    { iconType: "ai" as ServiceType, title: t.services.ai, desc: t.services.aiDesc, gradient: "from-green-500 to-emerald-500" },
    { iconType: "web" as ServiceType, title: locale === "ar" ? "الاستشارات التقنية" : "Tech Consulting", desc: locale === "ar" ? "نقدم استشارات تقنية متخصصة لمساعدتك في اتخاذ القرارات الصحيحة" : "Expert technical consulting to help you make the right decisions", gradient: "from-rose-500 to-pink-500" },
  ], [t, locale]);

  const stats = useMemo(() => [
    { value: "15+", label: locale === "ar" ? "سنة خبرة" : "Years Experience", icon: "📅" },
    { value: "50+", label: locale === "ar" ? "مشروع منجز" : "Projects", icon: "🎯" },
    { value: "40+", label: locale === "ar" ? "عميل سعيد" : "Happy Clients", icon: "😊" },
    { value: "10+", label: locale === "ar" ? "عضو فريق" : "Team Members", icon: "👥" },
  ], [locale]);

  const featuredProjects = useMemo(() => [
    { 
      icon: "📰",  
      title: locale === "ar" ? "RT Arab" : "RT Arab", 
      description: locale === "ar" ? "منصة إخبارية عربية كبرى تخدم ملايين المستخدمين العرب حول العالم" : "Major Arabic news platform serving millions of Arab users worldwide",
      category: "web", 
      tech: ["PHP", "MySQL", "WordPress", "CDN"],
      image: "/projects/rtarab.svg",
      color: "from-primary to-navy",
      link: "#"
    },
    { 
      icon: "📱", 
      title: locale === "ar" ? "AS Screen Record" : "AS Screen Record", 
      description: locale === "ar" ? "برنامج تسجيل شاشة احترافي سهل الاستخدام مع أكثر من 500 ألف تحميل" : "Professional and easy-to-use screen recording software with 500K+ downloads",
      category: "mobile", 
      tech: ["Java", "Android SDK", "FFmpeg"],
      image: "/projects/as-screen-record.svg",
      color: "from-cyan to-primary",
      link: "#"
    },
    { 
      icon: "📚", 
      title: locale === "ar" ? "بيت التعلم" : "Learning Home", 
      description: locale === "ar" ? "منصة تعليمية إلكترونية متكاملة مع فصول افتراضية ونظام تقييم ذكي" : "Complete e-learning platform with virtual classrooms and smart assessment system",
      category: "ai", 
      tech: ["React", "Node.js", "MongoDB", "AI"],
      image: "/projects/learning-home.svg",
      color: "from-navy to-burgundy",
      link: "#"
    },
  ], [locale]);

  // Modal state for project details
  const [selectedProject, setSelectedProject] = useState<typeof featuredProjects[0] | null>(null);

  return (
    <div className="min-h-screen">
      <ParticleField />

      {/* Logo & Slogan Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-dark dark:via-dark-50 dark:to-dark-100">
        <FloatingOrbs />
        
        {/* Animated background gradients */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 dark:bg-primary/30 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan/15 dark:bg-cyan/20 rounded-full blur-[120px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        <div className="relative z-10 flex flex-col items-center justify-center px-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-12 sm:mb-16"
          >
            <Image
              src="/logo.png"
              alt="WAI Soft"
              width={600}
              height={200}
              className="w-auto h-auto max-w-[320px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[650px] drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Slogan with AI-like Typing Animation */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            dir="ltr"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-navy dark:text-white tracking-wide min-h-[60px] sm:min-h-[80px] md:min-h-[100px] lg:min-h-[120px] flex items-center justify-center">
              <span className="bg-gradient-to-r from-primary via-cyan to-navy dark:to-white bg-clip-text text-transparent drop-shadow-lg">
                {displayedText}
                {showCursor && (
                  <motion.span
                    className="inline-block w-0.5 sm:w-1 h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 bg-primary ml-1 align-middle"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  />
                )}
              </span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Hero Section - Modern Split Design */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white dark:from-dark-100 dark:via-navy/90 dark:to-dark-100">
        {/* Background decorations */}
        <div className="absolute inset-0">
          {/* Gradient orbs */}
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 dark:bg-primary/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan/15 dark:bg-cyan/25 rounded-full blur-[120px]" />
          
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="w-full py-16 lg:py-0">
            {/* Main content */}
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-navy/10 dark:border-white/10 shadow-lg mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan"></span>
                </span>
                <span className="text-sm font-medium text-navy/80 dark:text-white/80">{t.hero.subtitle}</span>
              </motion.div>

              {/* Title */}
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy dark:text-white mb-6 leading-[1.1]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {t.hero.title}
                <br />
                <span className="bg-gradient-to-r from-primary via-cyan to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  {t.hero.titleHighlight}
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-lg sm:text-xl text-navy/60 dark:text-silver max-w-2xl mx-auto mb-10 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t.hero.description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button href="/contact" size="lg" className="group px-8 py-4 bg-gradient-to-r from-primary to-cyan hover:shadow-glow rounded-2xl text-base font-semibold">
                  <span>{t.hero.cta}</span>
                  <motion.span 
                    className={`inline-block ${locale === "ar" ? "mr-2" : "ml-2"}`}
                    animate={{ x: locale === "ar" ? [0, -5, 0] : [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    {locale === "ar" ? "←" : "→"}
                  </motion.span>
                </Button>
                <Button href="/projects" variant="outline" size="lg" className="px-8 py-4 border-2 border-navy/20 dark:border-white/20 text-navy dark:text-white hover:bg-navy/5 dark:hover:bg-white/10 rounded-2xl text-base font-semibold">
                  {t.hero.viewWork}
                </Button>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <div className="text-center p-6 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-navy/5 dark:border-white/10 hover:border-primary/30 dark:hover:border-cyan/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="text-3xl mb-2">{stat.icon}</div>
                      <div className="text-3xl sm:text-4xl font-bold text-navy dark:text-white mb-1">{stat.value}</div>
                      <p className="text-sm text-navy/50 dark:text-silver">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-navy/20 dark:border-white/20 flex justify-center pt-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-navy/40 dark:bg-white/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section - Horizontal Scroll */}
      <section ref={aboutRef} className="relative" style={{ height: "300vh" }}>
        <div className="sticky top-0 h-screen flex items-center overflow-hidden" style={{ direction: "ltr" }}>
          {/* Progress indicator - simplified */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-white/30" />
            ))}
          </div>

          <motion.div 
            className={`flex ${locale === "ar" ? "flex-row-reverse" : ""}`}
            style={{ 
              x: aboutX, 
              width: "300vw"
            }}
          >
            {/* Panel 1 - About Content with Spline Robot */}
            <div className="w-screen h-screen relative bg-gradient-to-b from-gray-100 to-white dark:from-dark-100 dark:to-dark-50" style={{ flexShrink: 0, direction: locale === "ar" ? "rtl" : "ltr" }}>
              {/* Content */}
              <div className="h-full flex">
                {/* Robot Side - Hidden on mobile only */}
                <div className="hidden md:block w-1/2 h-full">
                  <SplineScene
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                  />
                </div>

                {/* Text Content Side */}
                <div className="w-full md:w-1/2 h-full flex items-center justify-center px-8">
                  <div className={`text-center ${locale === "ar" ? "lg:text-right" : "lg:text-left"} max-w-lg`}>
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
                        <motion.span animate={{ x: locale === "ar" ? [0, -5, 0] : [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                          {locale === "ar" ? "←" : "→"}
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
            <div className="w-screen h-screen flex items-center justify-center px-4 sm:px-8 bg-gradient-to-b from-gray-100 to-white dark:from-dark-100 dark:to-dark-50" style={{ flexShrink: 0, direction: locale === "ar" ? "rtl" : "ltr" }}>
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
            <div className="w-screen h-screen flex items-center justify-center px-4 sm:px-8 bg-gradient-to-b from-gray-100 to-white dark:from-dark-100 dark:to-dark-50" style={{ flexShrink: 0, direction: locale === "ar" ? "rtl" : "ltr" }}>
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

      {/* Why Us Section - Simplified */}
      <section className="relative py-28 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-navy to-burgundy opacity-90" />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">{t.whyUs?.title}</h2>
            <p className="text-white/70 max-w-xl mx-auto text-lg">{t.whyUs?.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "⚡", title: t.whyUs?.speed, desc: t.whyUs?.speedDesc },
              { icon: "🎯", title: t.whyUs?.quality, desc: t.whyUs?.qualityDesc },
              { icon: "🤝", title: t.whyUs?.support, desc: t.whyUs?.supportDesc },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group relative text-center p-10 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-6xl mb-6 inline-block">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Modern Grid Design */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-dark-100 dark:to-dark-50">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan/10 dark:bg-cyan/20 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
          >
            <motion.span 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-sm text-primary dark:text-cyan text-sm font-medium mb-6 border border-primary/20 dark:border-cyan/20 shadow-sm"
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-2 h-2 rounded-full bg-primary dark:bg-cyan animate-pulse" />
              {t.services.badge}
            </motion.span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy dark:text-white mb-4">{t.services.title}</h2>
            <p className="text-navy/60 dark:text-silver max-w-2xl mx-auto text-lg">{t.services.subtitle}</p>
          </motion.div>

          {/* Services Grid - 3x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <ServiceCard key={i} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Enhanced */}
      <section className="relative py-28 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white dark:from-dark-100 dark:to-dark-50">
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
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="relative h-full bg-white dark:bg-dark-50 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg shadow-gray-200/50 dark:shadow-none overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-cyan/10 hover:-translate-y-2">
                  {/* Illustration Section */}
                  <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
                    {/* Decorative elements */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/20 blur-xl" />
                      <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/20 blur-xl" />
                    </div>
                    
                    {/* Project Icon/Illustration */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-2xl"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-6xl">{project.icon}</span>
                      </motion.div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold">
                      {project.category === "web" ? "🌐 Web" : project.category === "mobile" ? "📱 Mobile" : "🤖 AI"}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-cyan transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-navy/60 dark:text-silver text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.slice(0, 3).map((tech, j) => (
                        <span 
                          key={j} 
                          className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/10 text-navy/70 dark:text-white/70 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/10 text-navy/70 dark:text-white/70 text-xs font-medium">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className={`w-full py-3 rounded-xl bg-gradient-to-r ${project.color} text-white font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 active:scale-[0.98]`}
                    >
                      {locale === "ar" ? "عرض التفاصيل" : "View Details"}
                    </button>
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

      {/* Technologies We Use Section - Modern Design with Logos */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-dark-100 dark:via-navy/20 dark:to-dark-100">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <motion.span 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-6 border border-cyan-500/30 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              {locale === "ar" ? "تقنياتنا" : "Our Stack"}
            </motion.span>
            <h2 className="text-3xl sm:text-5xl font-bold text-navy dark:text-white mb-4">
              {locale === "ar" ? "التقنيات التي نتقنها" : "Technologies We Master"}
            </h2>
            <p className="text-navy/70 dark:text-silver max-w-2xl mx-auto text-lg">
              {locale === "ar" ? "نستخدم أحدث وأقوى التقنيات لبناء منتجات رقمية استثنائية" : "We leverage cutting-edge technologies to build exceptional digital products"}
            </p>
          </motion.div>

          {/* Tech Logos Grid - Infinite Scroll Style */}
          <div className="relative">
            {/* First Row */}
            <motion.div 
              className="flex justify-center flex-wrap gap-4 sm:gap-6 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {[
                { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "from-cyan-500/20 to-blue-500/20" },
                { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "from-gray-500/20 to-black/20", darkInvert: true },
                { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "from-blue-500/20 to-blue-600/20" },
                { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "from-green-500/20 to-green-600/20" },
                { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "from-yellow-500/20 to-blue-500/20" },
                { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", color: "from-cyan-400/20 to-cyan-600/20" },
              ].map((tech, i) => (
                <motion.div
                  key={tech.name}
                  className={`group relative flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-primary/30 dark:hover:border-cyan/30 transition-all duration-300`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <img 
                    src={tech.logo} 
                    alt={tech.name} 
                    className={`relative z-10 w-8 h-8 sm:w-10 sm:h-10 object-contain ${tech.darkInvert ? 'dark:invert' : ''}`}
                  />
                  <span className="relative z-10 font-medium text-navy dark:text-white text-sm sm:text-base">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Second Row */}
            <motion.div 
              className="flex justify-center flex-wrap gap-4 sm:gap-6 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {[
                { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "from-cyan-500/20 to-purple-500/20" },
                { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", color: "from-blue-400/20 to-cyan-500/20" },
                { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "from-green-500/20 to-green-700/20" },
                { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "from-blue-600/20 to-blue-800/20" },
                { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", color: "from-yellow-500/20 to-orange-500/20" },
                { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "from-blue-500/20 to-blue-700/20" },
              ].map((tech, i) => (
                <motion.div
                  key={tech.name}
                  className="group relative flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-primary/30 dark:hover:border-cyan/30 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <img src={tech.logo} alt={tech.name} className="relative z-10 w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                  <span className="relative z-10 font-medium text-navy dark:text-white text-sm sm:text-base">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Third Row */}
            <motion.div 
              className="flex justify-center flex-wrap gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {[
                { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", color: "from-orange-500/20 to-yellow-500/20" },
                { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", color: "from-pink-500/20 to-pink-600/20" },
                { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "from-orange-500/20 to-red-500/20" },
                { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "from-purple-500/20 to-pink-500/20" },
                { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", color: "from-blue-500/20 to-blue-600/20" },
              ].map((tech, i) => (
                <motion.div
                  key={tech.name}
                  className="group relative flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/50 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-primary/30 dark:hover:border-cyan/30 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <img src={tech.logo} alt={tech.name} className="relative z-10 w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                  <span className="relative z-10 font-medium text-navy dark:text-white text-sm sm:text-base">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Stats */}
          <motion.div 
            className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {[
              { value: "17+", label: locale === "ar" ? "تقنية نتقنها" : "Technologies" },
              { value: "100%", label: locale === "ar" ? "كود نظيف" : "Clean Code" },
              { value: "24/7", label: locale === "ar" ? "دعم مستمر" : "Support" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-cyan bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-navy/60 dark:text-silver text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
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
            
            <div className={`flex ${locale === "ar" ? "animate-marquee-rtl" : "animate-marquee"} group-hover:[animation-play-state:paused]`}>
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

      {/* CTA Section - Simplified */}
      <section className="py-28 px-4 sm:px-6">
        <motion.div
          className="max-w-5xl mx-auto relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-dark-50 to-burgundy/50" />
          
          {/* Static orbs for better performance */}
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/30 rounded-full blur-[100px] sm:blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-56 sm:w-80 h-56 sm:h-80 bg-burgundy/30 rounded-full blur-[80px] sm:blur-[100px]" />

          {/* Content */}
          <div className="relative z-10 text-center p-10 sm:p-16 md:p-20">
            <div>
              <span className="inline-block text-5xl sm:text-6xl mb-6">🚀</span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">{t.cta.title}</h2>
              <p className="text-white/70 text-base sm:text-lg mb-8 sm:mb-10 max-w-xl mx-auto">{t.cta.subtitle}</p>
              <Button href="/contact" size="lg" className="px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg shadow-glow hover:shadow-glow-lg transition-shadow">
                {t.cta.button}
                <span className="inline-block mr-2">←</span>
              </Button>
            </div>
          </div>

          {/* Border */}
          <div className="absolute inset-0 rounded-[2rem] sm:rounded-[3rem] border border-primary/30" />
        </motion.div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />
          
          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-lg bg-white dark:bg-dark-50 rounded-2xl shadow-2xl overflow-hidden"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
          >
            {/* Header with gradient */}
            <div className={`relative h-40 bg-gradient-to-br ${selectedProject.color}`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                  <span className="text-5xl">{selectedProject.icon}</span>
                </div>
              </div>
              
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Category badge */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold">
                {selectedProject.category === "web" ? "🌐 Web" : selectedProject.category === "mobile" ? "📱 Mobile" : "🤖 AI"}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-navy dark:text-white mb-3">
                {selectedProject.title}
              </h3>
              
              <p className="text-navy/70 dark:text-silver mb-6">
                {selectedProject.description}
              </p>

              {/* Tech stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-navy dark:text-white mb-3">
                  {locale === "ar" ? "التقنيات المستخدمة" : "Technologies Used"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, j) => (
                    <span 
                      key={j} 
                      className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-white/10 text-navy/70 dark:text-white/70 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3">
                {selectedProject.link && selectedProject.link !== "#" && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-3 rounded-xl bg-gradient-to-r ${selectedProject.color} text-white font-medium text-sm text-center transition-all duration-300 hover:shadow-lg`}
                  >
                    {locale === "ar" ? "زيارة المشروع" : "Visit Project"}
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 py-3 rounded-xl bg-gray-100 dark:bg-white/10 text-navy dark:text-white font-medium text-sm transition-all duration-300 hover:bg-gray-200 dark:hover:bg-white/20"
                >
                  {locale === "ar" ? "إغلاق" : "Close"}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
