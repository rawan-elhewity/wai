"use client";

import { motion } from "framer-motion";

export function AIBrain() {
  const nodes = [
    { x: 50, y: 30 }, { x: 80, y: 50 }, { x: 20, y: 50 },
    { x: 35, y: 70 }, { x: 65, y: 70 }, { x: 50, y: 90 },
    { x: 10, y: 30 }, { x: 90, y: 30 }, { x: 50, y: 50 },
  ];

  const connections = [
    [0, 1], [0, 2], [0, 8], [1, 4], [2, 3], [3, 5], [4, 5],
    [6, 2], [7, 1], [8, 3], [8, 4], [6, 0], [7, 0],
  ];

  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Connections */}
        {connections.map(([from, to], i) => (
          <motion.line
            key={i}
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
            stroke="url(#gradient)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0.2, 0.6, 0.2] }}
            transition={{
              pathLength: { duration: 2, delay: i * 0.1 },
              opacity: { duration: 3, repeat: Infinity, delay: i * 0.2 },
            }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r={i === 8 ? 4 : 2.5}
            fill={i === 8 ? "url(#gradient)" : "#7A9AC7"}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.1, type: "spring" }}
          />
        ))}

        {/* Pulse effect on center node */}
        <motion.circle
          cx={50}
          cy={50}
          r={8}
          fill="none"
          stroke="#7A9AC7"
          strokeWidth="0.5"
          initial={{ scale: 0.5, opacity: 0.8 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7A9AC7" />
            <stop offset="100%" stopColor="#4A5578" />
          </linearGradient>
        </defs>
      </svg>

      {/* Data flow particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary"
          initial={{ x: "0%", y: "50%", opacity: 0 }}
          animate={{
            x: ["0%", "100%"],
            y: ["50%", `${30 + i * 10}%`, "50%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
