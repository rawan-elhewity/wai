"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "AI/ML", icon: "🧠" },
  { name: "Cloud", icon: "☁️" },
];

export function TechStack() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {technologies.map((tech, i) => (
        <motion.div
          key={tech.name}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-primary/20 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, type: "spring" }}
          whileHover={{ scale: 1.1, borderColor: "rgba(122,154,199,0.5)" }}
        >
          <span className="text-xl">{tech.icon}</span>
          <span className="text-sm text-silver font-medium">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );
}

export function FloatingTechIcons() {
  const icons = ["⚛️", "▲", "🐍", "🧠", "☁️", "📱", "🌐", "⚡"];
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl opacity-20"
          style={{
            top: `${10 + (i * 12) % 80}%`,
            left: `${5 + (i * 13) % 90}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
}
