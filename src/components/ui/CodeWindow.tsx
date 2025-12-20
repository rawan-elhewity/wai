"use client";

import { motion } from "framer-motion";

export function CodeWindow() {
  const codeLines = [
    { text: "const", color: "#C678DD" },
    { text: " waiSoft", color: "#E5C07B" },
    { text: " = ", color: "#ABB2BF" },
    { text: "{", color: "#ABB2BF" },
  ];

  const properties = [
    { key: "innovation", value: "true", delay: 0.5 },
    { key: "ai", value: "'advanced'", delay: 0.7 },
    { key: "quality", value: "'premium'", delay: 0.9 },
    { key: "support", value: "'24/7'", delay: 1.1 },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto" dir="ltr">
      <motion.div
        className="rounded-xl overflow-hidden border border-primary/20 bg-[#1E1E2E]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Window header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#181825] border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-xs text-navy/50 dark:text-silver/50 ml-2">waisoft.ts</span>
        </div>

        {/* Code content - Always LTR for code */}
        <div className="p-4 font-mono text-sm text-left">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {codeLines.map((part, i) => (
              <span key={i} style={{ color: part.color }}>{part.text}</span>
            ))}
          </motion.div>

          {properties.map((prop, i) => (
            <motion.div
              key={i}
              className="pl-4"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: prop.delay }}
            >
              <span style={{ color: "#E06C75" }}>{prop.key}</span>
              <span style={{ color: "#ABB2BF" }}>: </span>
              <span style={{ color: prop.value.includes("'") ? "#98C379" : "#D19A66" }}>
                {prop.value}
              </span>
              <span style={{ color: "#ABB2BF" }}>,</span>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.3 }}
          >
            <span style={{ color: "#ABB2BF" }}>{"}"}</span>
            <span style={{ color: "#ABB2BF" }}>;</span>
          </motion.div>

          {/* Cursor */}
          <motion.span
            className="inline-block w-2 h-4 bg-primary ml-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
}
