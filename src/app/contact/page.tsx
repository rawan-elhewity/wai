"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const { t, locale } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center px-4">
        <motion.div
          className="text-center max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <motion.div
            className="w-20 h-20 mx-auto mb-6 bg-green-500 rounded-full flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
          >
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          <h1 className="text-3xl font-bold text-navy dark:text-white mb-4">
            {t.contact.success}
          </h1>
          <p className="text-silver mb-8">{t.contact.successText}</p>
          <Button href="/">{t.common.back}</Button>
        </motion.div>
      </div>
    );
  }

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
            {t.contact.title}
          </motion.h1>
          <motion.p
            className="text-lg text-silver max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {t.contact.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-navy dark:text-white mb-8">
                {t.contact.info}
              </h2>
              
              <div className="space-y-6">
                {/* Email */}
                <motion.div
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/50 dark:bg-dark-50/50 border border-silver/10"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy dark:text-white">{t.contact.email}</h3>
                    <a href="mailto:info@wai-soft.com" className="text-silver hover:text-primary transition-colors">
                      info@wai-soft.com
                    </a>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/50 dark:bg-dark-50/50 border border-silver/10"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy dark:text-white">Website</h3>
                    <a href="https://wai-soft.com" target="_blank" rel="noopener noreferrer" className="text-silver hover:text-primary transition-colors">
                      wai-soft.com
                    </a>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/50 dark:bg-dark-50/50 border border-silver/10"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy dark:text-white">Address</h3>
                    <p className="text-silver">{t.contact.address}</p>
                  </div>
                </motion.div>
              </div>

              {/* Map Placeholder */}
              <motion.div
                className="mt-8 aspect-video rounded-2xl bg-gradient-primary/20 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-6xl">🗺️</span>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-white/50 dark:bg-dark-50/50 rounded-2xl p-8 border border-silver/10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-navy dark:text-white mb-2">
                      {t.contact.name}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-silver/20 bg-white dark:bg-dark-100 text-navy dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder={t.contact.name}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-navy dark:text-white mb-2">
                      {t.contact.email}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-silver/20 bg-white dark:bg-dark-100 text-navy dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="email@example.com"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-navy dark:text-white mb-2">
                      {t.contact.subject}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-silver/20 bg-white dark:bg-dark-100 text-navy dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder={t.contact.subject}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-navy dark:text-white mb-2">
                      {t.contact.message}
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-silver/20 bg-white dark:bg-dark-100 text-navy dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder={t.contact.message}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Loading...
                      </span>
                    ) : (
                      t.contact.send
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
