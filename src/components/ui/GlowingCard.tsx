"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowingCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  delay?: number;
}

export function GlowingCard({
  children,
  className,
  glowColor = "primary",
  delay = 0,
}: GlowingCardProps) {
  return (
    <motion.div
      className={cn(
        "relative group rounded-2xl p-[1px] overflow-hidden",
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
    >
      {/* Animated border gradient */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(122,154,199,0.5), transparent)`,
        }}
        animate={{
          backgroundPosition: ["200% 0", "-200% 0"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Card content */}
      <div className="relative rounded-2xl bg-white/80 dark:bg-dark-50/80 backdrop-blur-xl p-6 h-full border border-silver/10 dark:border-primary/10 group-hover:border-primary/30 transition-all duration-300">
        {/* Glow effect on hover */}
        <div
          className={cn(
            "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10",
            glowColor === "primary" && "bg-primary/5",
            glowColor === "burgundy" && "bg-burgundy/5"
          )}
          style={{ filter: "blur(20px)" }}
        />
        {children}
      </div>
    </motion.div>
  );
}
