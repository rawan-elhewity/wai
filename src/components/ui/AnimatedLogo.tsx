"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export function AnimatedLogo() {
  const [isVisible, setIsVisible] = useState(true);
  const [windowHeight, setWindowHeight] = useState(800);
  const { scrollY } = useScroll();

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // اللوجو يرتفع لأعلى ويختفي تدريجياً مع التمرير
  const fadeEnd = windowHeight * 0.7;
  
  // Raw transforms
  const rawOpacity = useTransform(scrollY, [0, fadeEnd * 0.3, fadeEnd], [1, 0.9, 0]);
  const rawY = useTransform(scrollY, [0, fadeEnd], [0, -250]);
  const rawScale = useTransform(scrollY, [0, fadeEnd], [1, 0.6]);

  // Spring config for smooth animation
  const springConfig = { stiffness: 100, damping: 30, mass: 0.5 };
  
  // Apply spring for smoother motion
  const opacity = useSpring(rawOpacity, springConfig);
  const yOffset = useSpring(rawY, springConfig);
  const scale = useSpring(rawScale, springConfig);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsVisible(latest < windowHeight * 0.85);
    });
    return () => unsubscribe();
  }, [scrollY, windowHeight]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-1/2 left-1/2 z-40 pointer-events-none"
      style={{
        opacity,
        scale,
        x: "-50%",
        y: yOffset,
        translateY: "-50%",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src="/logo.png"
          alt="WAI Soft"
          width={600}
          height={200}
          className="w-auto h-auto max-w-[400px] sm:max-w-[500px] md:max-w-[600px]"
          priority
        />
      </motion.div>
    </motion.div>
  );
}
