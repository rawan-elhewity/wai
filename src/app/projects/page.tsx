"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context";
import { projects, ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";
import { PageHero } from "@/components/ui/PageHero";

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// Project colors based on category
const categoryColors: Record<string, string> = {
  web: "from-primary to-navy",
  mobile: "from-cyan to-primary",
  ai: "from-navy to-burgundy",
};

export default function ProjectsPage() {
  const { t, locale } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const filters: { id: ProjectCategory; label: string }[] = [
    { id: "all", label: t.projects.all },
    { id: "web", label: t.projects.web },
    { id: "mobile", label: t.projects.mobile },
    { id: "ai", label: t.projects.ai },
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const selected = projects.find((p) => p.id === selectedProject);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <PageHero
        title={t.projects.title}
        subtitle={t.projects.subtitle}
        badge={locale === "ar" ? "أعمالنا المميزة" : "Our Featured Work"}
        icon="🚀"
        gradient="cyan"
      />

      {/* Filters */}
      <section className="px-4 sm:px-6 mb-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeFilter === filter.id
                    ? "bg-gradient-primary text-white shadow-glow"
                    : "bg-white/50 dark:bg-dark-50/50 text-navy dark:text-silver hover:bg-primary/10 border border-silver/10"
                )}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="relative h-full bg-white dark:bg-dark-50 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg shadow-gray-200/50 dark:shadow-none overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 dark:hover:shadow-cyan/10 hover:-translate-y-2">
                    {/* Illustration Section */}
                    <div className={`relative h-48 bg-gradient-to-br ${categoryColors[project.category] || "from-primary to-navy"} overflow-hidden`}>
                      {/* Decorative elements */}
                      <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/20 blur-xl" />
                        <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/20 blur-xl" />
                      </div>

                      {/* Project Icon/Illustration */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-2xl"
                          transition={{ duration: 0.3 }}
                        >
                          <span className="text-6xl">
                            {project.category === "web" && "🌐"}
                            {project.category === "mobile" && "📱"}
                            {project.category === "ai" && "🤖"}
                          </span>
                        </motion.div>
                      </div>

                      {/* Category badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold">
                        {project.category === "web" ? "🌐 Web" : project.category === "mobile" ? "📱 Mobile" : "🤖 AI"}
                      </div>

                      {/* AI badge */}
                      {project.hasAI && (
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold">
                          AI ✨
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-navy dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-cyan transition-colors">
                        {locale === "ar" ? project.title : project.titleEn}
                      </h3>

                      <p className="text-navy/60 dark:text-silver text-sm mb-4 line-clamp-2">
                        {locale === "ar" ? project.description : project.descriptionEn}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.technologies.slice(0, 3).map((tech, j) => (
                          <span
                            key={j}
                            className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/10 text-navy/70 dark:text-white/70 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/10 text-navy/70 dark:text-white/70 text-xs font-medium">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Action Button */}
                      <button
                        onClick={() => setSelectedProject(project.id)}
                        className={`w-full py-3 rounded-xl bg-gradient-to-r ${categoryColors[project.category] || "from-primary to-navy"} text-white font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 active:scale-[0.98]`}
                      >
                        {locale === "ar" ? "عرض التفاصيل" : "View Details"}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-dark/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal */}
            <motion.div
              className="relative bg-white dark:bg-dark-50 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-dark/50 text-white hover:bg-dark/70 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header Image */}
              <div className="aspect-video bg-gradient-primary flex items-center justify-center">
                <span className="text-8xl">
                  {selected.category === "web" && "🌐"}
                  {selected.category === "mobile" && "📱"}
                  {selected.category === "ai" && "🤖"}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-2xl font-bold text-navy dark:text-white">
                    {locale === "ar" ? selected.title : selected.titleEn}
                  </h2>
                  {selected.hasAI && (
                    <span className="px-3 py-1 bg-primary text-white text-xs rounded-full">AI</span>
                  )}
                </div>

                <p className="text-navy/70 dark:text-silver mb-6">
                  {locale === "ar" ? selected.description : selected.descriptionEn}
                </p>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-primary/10">
                    <h3 className="font-semibold text-navy dark:text-white mb-2">
                      {t.projects.challenge}
                    </h3>
                    <p className="text-navy/70 dark:text-silver text-sm">
                      {locale === "ar" ? selected.challenge : selected.challengeEn}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/10">
                    <h3 className="font-semibold text-navy dark:text-white mb-2">
                      {t.projects.solution}
                    </h3>
                    <p className="text-navy/70 dark:text-silver text-sm">
                      {locale === "ar" ? selected.solution : selected.solutionEn}
                    </p>
                  </div>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h3 className="font-semibold text-navy dark:text-white mb-3">
                    {t.projects.results}
                  </h3>
                  <div className="flex gap-4">
                    {selected.results.map((result, i) => (
                      <div key={i} className="text-center p-4 rounded-xl bg-gradient-primary flex-1">
                        <p className="text-2xl font-bold text-white">{result.value}</p>
                        <p className="text-white/80 text-sm">
                          {locale === "ar" ? result.metric : result.metricEn}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="font-semibold text-navy dark:text-white mb-3">
                    {t.projects.technologies}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selected.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
