"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context";
import { projects, ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
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
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-navy dark:text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t.projects.title}
          </motion.h1>
          <motion.p
            className="text-lg text-silver max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {t.projects.subtitle}
          </motion.p>
        </div>
      </section>

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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={fadeInUp}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="bg-white/50 dark:bg-dark-50/50 rounded-2xl overflow-hidden border border-silver/10 hover:border-primary/50 transition-all duration-300 hover:shadow-card-hover">
                    {/* Image */}
                    <div className="aspect-video bg-gradient-primary/20 relative flex items-center justify-center">
                      <span className="text-6xl">
                        {project.category === "web" && "🌐"}
                        {project.category === "mobile" && "📱"}
                        {project.category === "ai" && "🤖"}
                      </span>
                      {project.hasAI && (
                        <span className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-xs rounded-full">
                          AI
                        </span>
                      )}
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-navy dark:text-white mb-2 group-hover:text-primary transition-colors">
                        {locale === "ar" ? project.title : project.titleEn}
                      </h3>
                      <p className="text-silver text-sm mb-4">
                        {locale === "ar" ? project.description : project.descriptionEn}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
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

                <p className="text-silver mb-6">
                  {locale === "ar" ? selected.description : selected.descriptionEn}
                </p>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-primary/10">
                    <h3 className="font-semibold text-navy dark:text-white mb-2">
                      {t.projects.challenge}
                    </h3>
                    <p className="text-silver text-sm">
                      {locale === "ar" ? selected.challenge : selected.challengeEn}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/10">
                    <h3 className="font-semibold text-navy dark:text-white mb-2">
                      {t.projects.solution}
                    </h3>
                    <p className="text-silver text-sm">
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
