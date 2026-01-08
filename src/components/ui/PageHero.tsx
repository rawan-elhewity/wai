"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
    title: string;
    subtitle: string;
    badge?: string;
    icon?: string;
    gradient?: "primary" | "cyan" | "burgundy";
    children?: ReactNode;
}

export function PageHero({
    title,
    subtitle,
    badge,
    icon = "✨",
    gradient = "primary",
    children,
}: PageHeroProps) {
    const gradientColors = {
        primary: "from-primary/30 via-navy/20 to-cyan/30",
        cyan: "from-cyan/30 via-primary/20 to-navy/30",
        burgundy: "from-burgundy/30 via-navy/20 to-primary/30",
    };

    const accentColors = {
        primary: "from-primary to-navy",
        cyan: "from-cyan to-primary",
        burgundy: "from-burgundy to-navy",
    };

    return (
        <section className="relative pt-20 pb-16 px-4 sm:px-6 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Gradient Mesh */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors[gradient]} opacity-50`} />

                {/* Animated Orbs */}
                <motion.div
                    className="absolute top-10 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[120px]"
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 30, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan/20 rounded-full blur-[100px]"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        x: [0, -20, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#hero-grid)" className="text-navy dark:text-white" />
                    </svg>
                </div>

                {/* Decorative Lines */}
                <motion.div
                    className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                />
            </div>

            {/* Content */}
            <div className="relative max-w-6xl mx-auto">
                <div className="text-center">


                    {/* Title with Gradient */}
                    <motion.div
                        className="relative mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >


                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy dark:text-white leading-tight">
                            {title}
                        </h1>

                        {/* Animated underline */}
                        <motion.div
                            className={`mx-auto mt-4 h-1.5 rounded-full bg-gradient-to-r ${accentColors[gradient]}`}
                            initial={{ width: 0 }}
                            animate={{ width: 120 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        />
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        className="text-lg sm:text-xl text-navy/70 dark:text-silver max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {subtitle}
                    </motion.p>



                    {/* Children (additional content like stats) */}
                    {children && (
                        <motion.div
                            className="mt-12"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {children}
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Bottom Wave/Separator */}
            <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
                <motion.svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="absolute bottom-0 w-full h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <path
                        d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
                        className="fill-gray-50 dark:fill-dark-50"
                    />
                </motion.svg>
            </div>
        </section>
    );
}
