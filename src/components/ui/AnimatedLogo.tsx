"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function AnimatedLogo() {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  // اختفاء تدريجي عند الـ scroll
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsVisible(latest < 350);
    });
    return () => unsubscribe();
  }, [scrollY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-1/2 left-1/2 z-40 pointer-events-none -translate-x-1/2 -translate-y-1/2"
      style={{ opacity }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src="/logo.png"
          alt="WAI Soft"
          width={400}
          height={133}
          className="w-auto h-auto max-w-[300px] sm:max-w-[400px]"
          priority
        />
      </motion.div>
    </motion.div>
  );
}
