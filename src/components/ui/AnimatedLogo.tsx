"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const AnimatedLogo = memo(function AnimatedLogo() {
  return (
    <motion.div
      className="flex flex-col items-center gap-8 mb-16"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <Image
          src="/logo.png"
          alt="WAI Soft"
          width={600}
          height={200}
          className="w-auto h-auto max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[550px] drop-shadow-2xl"
          priority
        />
      </motion.div>

      {/* Slogan */}
      <motion.div
        className="text-center relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.h2 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white tracking-wide whitespace-nowrap"
          initial={{ letterSpacing: "0.05em" }}
          animate={{ letterSpacing: "0.1em" }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <span className="inline-block bg-gradient-to-r from-primary via-cyan to-white bg-clip-text text-transparent drop-shadow-lg">
            we develop,
          </span>
          {" "}
          <span className="inline-block bg-gradient-to-r from-white via-silver to-primary bg-clip-text text-transparent drop-shadow-lg">
            you grow.
          </span>
        </motion.h2>
        
        {/* Decorative line */}
        <motion.div
          className="mt-6 mx-auto h-1 max-w-md bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        />

        {/* Animated particles around slogan */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary/60 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: i % 2 === 0 ? "-20px" : "auto",
              bottom: i % 2 === 1 ? "-20px" : "auto",
            }}
            animate={{
              y: i % 2 === 0 ? [0, -15, 0] : [0, 15, 0],
              opacity: [0.3, 0.9, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
});
