"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HorizontalScrollSectionProps {
  children: ReactNode;
  className?: string;
}

export function HorizontalScrollSection({ children, className = "" }: HorizontalScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666%"]);

  return (
    <section ref={containerRef} className={`relative h-[300vh] ${className}`}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div 
          className="flex gap-8 px-8"
          style={{ x }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
