"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context";
import { FloatingOrbs } from "@/components/ui/FloatingOrbs";
import { ParticleField } from "@/components/ui/ParticleField";
import { CodeWindow } from "@/components/ui/CodeWindow";
import { CountUp } from "@/components/ui/CountUp";

export default function Home() {
  const { t, locale } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);



  const services = [
    { icon: "🌐", title: t.services.web, desc: t.services.webDesc, gradient: "from-blue-500 to-cyan-500" },
    { icon: "📱", title: t.services.mobile, desc: t.services.mobileDesc, gradient: "from-purple-500 to-pink-500" },
    { icon: "🎨", title: t.services.design, desc: t.services.designDesc, gradient: "from-orange-500 to-red-500" },
    { icon: "🤖", title: t.services.ai, desc: t.services.aiDesc, gradient: "from-green-500 to-emerald-500" },
  ];

  const featuredProjects = [
    { icon: "🛒", title: locale === "ar" ? "منصة تجارة إلكترونية" : "E-commerce Platform", category: "web", tech: ["Next.js", "Node.js"] },
    { icon: "📱", title: locale === "ar" ? "تطبيق صحي" : "Healthcare App", category: "mobile", tech: ["React Native", "Firebase"] },
    { icon: "🤖", title: locale === "ar" ? "شات بوت ذكي" : "Smart Chatbot", category: "ai", tech: ["Python", "OpenAI"] },
  ];

  const aiCapabilities = [
    { icon: "💬", title: t.aiCapabilities?.chatbot, desc: t.aiCapabilities?.chatbotDesc, color: "from-blue-500/20 to-primary/20" },
    { icon: "⚙️", title: t.aiCapabilities?.automation, desc: t.aiCapabilities?.automationDesc, color: "from-purple-500/20 to-pink-500/20" },
    { icon: "📊", title: t.aiCapabilities?.analytics, desc: t.aiCapabilities?.analyticsDesc, color: "from-green-500/20 to-teal-500/20" },
    { icon: "👁️", title: t.aiCapabilities?.vision, desc: t.aiCapabilities?.visionDesc, color: "from-orange-500/20 to-yellow-500/20" },
  ];

  // Note: These are placeholder testimonials - replace with real client feedback when available
  const testimonials = [
    { name: locale === "ar" ? "عميل راضٍ" : "Satisfied Client", role: locale === "ar" ? "صاحب مشروع" : "Business Owner", company: locale === "ar" ? "مشروع تجاري" : "Business Project", text: locale === "ar" ? "فكرتك غالية، واحنا عارفين قيمتها. من أول سطر في الخطة لآخر كود قبل الإطلاق، فريقنا ماسك بإيدك خطوة بخطوة." : "Your idea is valuable, and we know its worth. From the first line of the plan to the last code before launch, our team holds your hand step by step.", rating: 5 },
    { name: locale === "ar" ? "عميل سعيد" : "Happy Client", role: locale === "ar" ? "مدير تنفيذي" : "CEO", company: locale === "ar" ? "شركة ناشئة" : "Startup", text: locale === "ar" ? "مش كل كود بيعمل فرق، لكن كل تجربة ذكية بتخلق بصمة. منتجك مش مجرد موقع أو تطبيق، ده تجربة كاملة." : "Not every code makes a difference, but every smart experience creates a mark. Your product is not just a website or app, it's a complete experience.", rating: 5 },
    { name: locale === "ar" ? "عميل متميز" : "Premium Client", role: locale === "ar" ? "رائد أعمال" : "Entrepreneur", company: locale === "ar" ? "مؤسسة رقمية" : "Digital Enterprise", text: locale === "ar" ? "التكنولوجيا مش هدف.. دي وسيلة تساعدك تنجز أسرع وتفكر أكبر! كل نظام بنطوره معمول مخصوص علشان يخدمك." : "Technology is not a goal.. it's a tool to help you achieve faster and think bigger! Every system we develop is custom-made to serve you.", rating: 5 },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      <ParticleField />

      {/* Hero Section - Creative Centered */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
          {/* Company Name with AI Badge */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="text-3xl sm:text-4xl font-bold text-primary tracking-wider">WAI SOFT</span>
            <motion.span 
              className="inline-flex items-center gap-2 mx-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs text-primary"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              {t.hero.badge}
            </motion.span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-white">{t.hero.title}</span>
            <br />
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
            className="text-base sm:text-lg text-silver/70 max-w-2xl mx-auto mb-10"
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

          {/* Tech Stack Pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {["Next.js", "React Native", "AI/ML", "Node.js", "Python"].map((tech, i) => (
              <motion.span
                key={tech}
                className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-silver text-xs sm:text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: "rgba(122,154,199,0.3)" }}
              >
                {tech}
              </motion.span>
            ))}
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

      {/* About Section - Enhanced */}
      <section className="relative py-28 px-4 sm:px-6 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 left-10 w-64 h-64 bg-burgundy/10 rounded-full blur-[80px]"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left side - Content */}
            <div>
              <motion.span 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-navy/10 text-primary text-sm font-medium mb-6 border border-primary/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {t.homeAbout?.badge || "من نحن"}
              </motion.span>
              
              <motion.h2 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy dark:text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                {t.homeAbout?.title || "شريكك التقني نحو المستقبل"}
              </motion.h2>
              
              <motion.p 
                className="text-silver text-base sm:text-lg mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {t.homeAbout?.description || "WAI Soft شركة سعودية متخصصة في تطوير البرمجيات وحلول الذكاء الاصطناعي."}
              </motion.p>

              {/* Features list */}
              <motion.div 
                className="space-y-4 mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {[
                  { icon: "🚀", text: locale === "ar" ? "تقنيات حديثة ومتطورة" : "Modern & Advanced Technologies" },
                  { icon: "💡", text: locale === "ar" ? "حلول مبتكرة ومخصصة" : "Innovative & Custom Solutions" },
                  { icon: "🛡️", text: locale === "ar" ? "أمان وجودة عالية" : "High Security & Quality" },
                ].map((feature, i) => (
                  <motion.div 
                    key={i}
                    className="flex items-center gap-3 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-navy/10 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </span>
                    <span className="text-silver group-hover:text-white transition-colors">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Link href="/about" className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary/10 to-navy/10 text-primary font-medium border border-primary/20 hover:border-primary/40 hover:bg-primary/20 transition-all">
                  {t.common.learnMore}
                  <motion.span animate={{ x: [0, -5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>←</motion.span>
                </Link>
              </motion.div>
            </div>

            {/* Right side - Stats & Code Window */}
            <div className="space-y-6">
              {/* Stats Grid - New Design */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {[
                  { value: 15, suffix: "+", label: t.homeAbout?.experience || "سنوات من الخبرة", icon: "📅", color: "from-blue-500/20 to-cyan-500/20" },
                  { value: 50, suffix: "+", label: t.homeAbout?.projects || "مشروع ناجح", icon: "🎯", color: "from-purple-500/20 to-pink-500/20" },
                  { value: 40, suffix: "+", label: t.homeAbout?.clients || "عميل راضٍ", icon: "😊", color: "from-green-500/20 to-emerald-500/20" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="group relative text-center p-4 sm:p-5 rounded-2xl bg-dark-50/80 backdrop-blur-sm border border-white/5 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    {/* Gradient background on hover */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    
                    {/* Icon */}
                    <motion.div 
                      className="relative z-10 text-2xl sm:text-3xl mb-2"
                      whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      {stat.icon}
                    </motion.div>
                    
                    <div className="relative z-10">
                      <CountUp 
                        end={stat.value} 
                        suffix={stat.suffix} 
                        className="text-2xl sm:text-3xl font-bold text-white" 
                      />
                      <p className="text-silver/80 text-[10px] sm:text-xs mt-1 leading-tight">{stat.label}</p>
                    </div>

                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Code Window */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative"
              >
                {/* Glow behind code window */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-burgundy/20 rounded-3xl blur-2xl opacity-50" />
                <div className="relative">
                  <CodeWindow />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced Cards */}
      <section className="relative py-28 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-100/50 to-transparent" />
        
        <div className="relative max-w-6xl mx-auto">
          <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <motion.span 
              className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-navy/20 text-primary text-sm font-medium mb-6 border border-primary/20"
              whileHover={{ scale: 1.05 }}
            >
              {t.services.badge}
            </motion.span>
            <h2 className="text-3xl sm:text-5xl font-bold text-navy dark:text-white mb-4">{t.services.title}</h2>
            <p className="text-silver max-w-xl mx-auto text-lg">{t.services.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="group relative p-8 rounded-3xl bg-white/5 dark:bg-dark-50/50 border border-silver/10 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, borderColor: "rgba(122,154,199,0.3)" }}
              >
                {/* Gradient overlay on hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                {/* Icon with glow */}
                <motion.div 
                  className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-4xl mb-6 border border-white/10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {service.icon}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity`}
                  />
                </motion.div>

                <h3 className="relative z-10 text-2xl font-bold text-navy dark:text-white mb-3">{service.title}</h3>
                <p className="relative z-10 text-silver leading-relaxed">{service.desc}</p>

                {/* Arrow indicator */}
                <motion.div 
                  className="absolute bottom-8 left-8 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
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
            <p className="text-silver max-w-xl mx-auto text-lg">{t.homeProjects?.subtitle}</p>
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
                <div className="absolute inset-0 bg-gradient-to-br from-dark-50 to-dark-100 border border-silver/10 group-hover:border-primary/30 transition-colors rounded-3xl" />
                
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

                  <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="px-2 py-1 rounded-full bg-white/5 text-silver text-xs border border-white/10">
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

      {/* AI Capabilities Section - Enhanced */}
      <section className="relative py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <motion.span 
              className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 text-sm font-medium mb-6 border border-green-500/20"
              animate={{ boxShadow: ["0 0 0 0 rgba(34,197,94,0)", "0 0 0 10px rgba(34,197,94,0)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🧠 {t.aiCapabilities?.badge || "الذكاء الاصطناعي"}
            </motion.span>
            <h2 className="text-3xl sm:text-5xl font-bold text-navy dark:text-white mb-4">{t.aiCapabilities?.title}</h2>
            <p className="text-silver max-w-xl mx-auto text-lg">{t.aiCapabilities?.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiCapabilities.map((cap, i) => (
              <motion.div
                key={i}
                className="group relative p-6 rounded-3xl bg-white/5 dark:bg-dark-50/50 border border-silver/10 overflow-hidden"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, borderColor: "rgba(34,197,94,0.3)" }}
              >
                {/* Gradient background */}
                <motion.div className={`absolute inset-0 bg-gradient-to-br ${cap.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 text-center">
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center text-4xl border border-green-500/20"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    {cap.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold text-navy dark:text-white mb-3">{cap.title}</h3>
                  <p className="text-silver text-sm leading-relaxed">{cap.desc}</p>
                </div>

                {/* Pulse effect */}
                <motion.div
                  className="absolute top-6 right-6 w-2 h-2 rounded-full bg-green-500"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced */}
      <section className="relative py-28 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-100/50 to-transparent" />
        
        <div className="relative max-w-6xl mx-auto">
          <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <motion.span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 text-sm font-medium mb-6 border border-yellow-500/20">
              ⭐ {t.testimonials?.badge || "آراء العملاء"}
            </motion.span>
            <h2 className="text-3xl sm:text-5xl font-bold text-navy dark:text-white mb-4">{t.testimonials?.title}</h2>
            <p className="text-silver max-w-xl mx-auto text-lg">{t.testimonials?.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                className="group relative p-8 rounded-3xl bg-white/5 dark:bg-dark-50/50 border border-silver/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -5, borderColor: "rgba(122,154,199,0.3)" }}
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-4xl text-primary/20">"</div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <motion.span 
                      key={j} 
                      className="text-yellow-500 text-xl"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + j * 0.1 }}
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>

                <p className="text-silver mb-8 leading-relaxed italic">&quot;{testimonial.text}&quot;</p>

                <div className="flex items-center gap-4">
                  <motion.div 
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-navy flex items-center justify-center text-white text-xl font-bold"
                    whileHover={{ scale: 1.1 }}
                  >
                    {testimonial.name.charAt(0)}
                  </motion.div>
                  <div>
                    <p className="font-bold text-navy dark:text-white">{testimonial.name}</p>
                    <p className="text-silver text-sm">{testimonial.role}</p>
                    <p className="text-primary text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              <p className="text-silver text-base sm:text-lg mb-8 sm:mb-10 max-w-xl mx-auto">{t.cta.subtitle}</p>
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
