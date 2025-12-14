"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context";
import { team } from "@/data/team";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function AboutPage() {
  const { t, locale } = useLanguage();

  const values = [
    { icon: "💡", title: locale === "ar" ? "الابتكار" : "Innovation", desc: locale === "ar" ? "نسعى دائماً لإيجاد حلول مبتكرة" : "We always seek innovative solutions" },
    { icon: "🎯", title: locale === "ar" ? "الجودة" : "Quality", desc: locale === "ar" ? "نلتزم بأعلى معايير الجودة" : "We commit to the highest quality standards" },
    { icon: "🤝", title: locale === "ar" ? "الشراكة" : "Partnership", desc: locale === "ar" ? "نعمل كشركاء مع عملائنا" : "We work as partners with our clients" },
    { icon: "🚀", title: locale === "ar" ? "التطور" : "Growth", desc: locale === "ar" ? "نتعلم ونتطور باستمرار" : "We continuously learn and grow" },
  ];

  const timeline = [
    { year: "2020", title: locale === "ar" ? "البداية" : "The Beginning", desc: locale === "ar" ? "تأسيس الشركة في شبين الكوم، مصر" : "Company founded in Shebin El-Kawm, Egypt" },
    { year: "2021", title: locale === "ar" ? "النمو" : "Growth", desc: locale === "ar" ? "توسيع الخدمات والعملاء" : "Expanding services and clients" },
    { year: "2023", title: locale === "ar" ? "الذكاء الاصطناعي" : "AI Integration", desc: locale === "ar" ? "دمج AI في خدماتنا" : "Integrating AI in our services" },
    { year: "2024", title: locale === "ar" ? "التطور" : "Evolution", desc: locale === "ar" ? "تطوير حلول مبتكرة" : "Developing innovative solutions" },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-navy dark:text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t.about.title}
          </motion.h1>
          <motion.p
            className="text-lg text-silver max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {t.about.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 bg-white/50 dark:bg-dark-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-navy dark:text-white mb-6">
                {t.about.story}
              </h2>
              <p className="text-silver mb-6 leading-relaxed">{t.about.storyText}</p>
              <div className="p-6 rounded-2xl bg-gradient-primary">
                <p className="text-white font-semibold text-lg">{t.about.meaningText}</p>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="text-center p-12 rounded-3xl bg-dark-50 dark:bg-dark-100">
                  <motion.p
                    className="text-6xl font-bold text-primary mb-4"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    W + AI
                  </motion.p>
                  <p className="text-2xl text-white">=</p>
                  <p className="text-4xl font-bold text-white mt-4">WAY</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="p-8 rounded-2xl bg-gradient-primary text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">{t.about.mission}</h3>
              <p className="text-white/90">{t.about.missionText}</p>
            </motion.div>
            <motion.div
              className="p-8 rounded-2xl bg-dark-50 dark:bg-dark-100 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-4">{t.about.vision}</h3>
              <p className="text-silver">{t.about.visionText}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 bg-white/50 dark:bg-dark-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center text-navy dark:text-white mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t.about.values}
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {values.map((value, i) => (
              <motion.div
                key={i}
                className="text-center p-6 rounded-2xl bg-white dark:bg-dark-100 border border-silver/10"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="text-4xl mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-lg font-semibold text-navy dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-silver text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center text-navy dark:text-white mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t.about.journey}
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{item.year}</div>
                <h3 className="text-xl font-semibold text-navy dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-silver text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 bg-white/50 dark:bg-dark-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center text-navy dark:text-white mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t.about.team}
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {team.map((member) => (
              <motion.div
                key={member.id}
                className="text-center"
                variants={fadeInUp}
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-3xl">👤</span>
                </div>
                <h3 className="text-lg font-semibold text-navy dark:text-white">
                  {locale === "ar" ? member.name : member.nameEn}
                </h3>
                <p className="text-silver text-sm">
                  {locale === "ar" ? member.role : member.roleEn}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
