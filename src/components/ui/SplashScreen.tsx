"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export function SplashScreen({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [typingComplete, setTypingComplete] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Split animation - left and right panels with smoother transitions
  const leftX = useTransform(scrollYProgress, [0.2, 0.6], ["0%", "-100%"]);
  const rightX = useTransform(scrollYProgress, [0.2, 0.6], ["0%", "100%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6], [0, 0, 1]);
  const contentY = useTransform(scrollYProgress, [0.4, 0.6], [100, 0]);
  const splashOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0]);
  const splashScale = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 0.98, 0.95]);

  // Typing animation text
  const sloganText = "we develop, you grow.";
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < sloganText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + sloganText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100); // Typing speed
      return () => clearTimeout(timeout);
    } else if (currentIndex === sloganText.length) {
      setTypingComplete(true);
    }
  }, [currentIndex, sloganText]);

  return (
    <div ref={containerRef} className="relative" style={{ height: "300vh" }}>
      {/* Splash Screen - Fixed position */}
      <div className="sticky top-0 h-screen overflow-hidden bg-gradient-to-b from-black via-navy/95 to-dark-100">
        {/* Left Panel */}
        <motion.div
          className="absolute inset-0 w-1/2 left-0 bg-gradient-to-br from-black via-navy/95 to-dark-100 z-30"
          style={{ x: leftX }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </motion.div>

        {/* Right Panel */}
        <motion.div
          className="absolute inset-0 w-1/2 right-0 bg-gradient-to-bl from-black via-navy/95 to-dark-100 z-30"
          style={{ x: rightX }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </motion.div>

        {/* Splash Content - Logo & Slogan */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4"
          style={{ opacity: splashOpacity, scale: splashScale }}
        >
          {/* Animated background gradients */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[150px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan/20 rounded-full blur-[120px]"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
            className="mb-12 sm:mb-16"
          >
            <Image
              src="/logo.png"
              alt="WAI Soft"
              width={600}
              height={200}
              className="w-auto h-auto max-w-[320px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[650px] drop-shadow-2xl"
              priority
              style={{ width: "auto", height: "auto" }}
            />
          </motion.div>

          {/* Slogan with Typing Animation */}
          <motion.div
            className="text-center relative max-w-5xl px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="relative inline-block min-h-[60px] sm:min-h-[80px] md:min-h-[100px] lg:min-h-[120px]">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-wide whitespace-nowrap">
                <span className="bg-gradient-to-r from-primary via-cyan to-white bg-clip-text text-transparent drop-shadow-lg">
                  {displayedText}
                </span>
                {/* Cursor */}
                {!typingComplete && (
                  <motion.span
                    className="inline-block w-0.5 sm:w-1 h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 bg-primary ml-1 sm:ml-2 align-middle"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  />
                )}
              </h2>
            </div>

            {/* Decorative line */}
            {typingComplete && (
              <motion.div
                className="mx-auto mt-6 sm:mt-8 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full max-w-sm sm:max-w-md"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            )}

            {/* Animated particles */}
            {typingComplete &&
              [...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary/60 rounded-full hidden lg:block"
                  style={{
                    left: `${10 + i * 12}%`,
                    top: i % 2 === 0 ? "-30px" : "auto",
                    bottom: i % 2 === 1 ? "-30px" : "auto",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{
                    y: i % 2 === 0 ? [0, -20, 0] : [0, 20, 0],
                    opacity: [0.3, 0.9, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
          </motion.div>

          {/* Scroll indicator */}
          {typingComplete && (
            <motion.div
              className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              onClick={() => {
                const scrollAmount = window.innerHeight * 0.8;
                window.scrollTo({ top: scrollAmount, behavior: "smooth" });
              }}
            >
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-white/60 text-sm">Scroll</span>
                  <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
                    <motion.div
                      className="w-1.5 h-1.5 bg-primary rounded-full"
                      animate={{ y: [0, 12, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        {/* Hero Content - Revealed after split */}
        <motion.div className="absolute inset-0 z-0" style={{ opacity: contentOpacity, y: contentY }}>
          {children}
        </motion.div>
      </div>
    </div>
  );
}
