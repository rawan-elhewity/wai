"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion"

interface LocationMapProps {
  location?: string
  coordinates?: string
  latitude?: number
  longitude?: number
  className?: string
}

export function LocationMap({
  location = "San Francisco, CA",
  coordinates = "37.7749° N, 122.4194° W",
  latitude = 30.5579,
  longitude = 31.0097,
  className,
}: LocationMapProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-50, 50], [8, -8])
  const rotateY = useTransform(mouseX, [-50, 50], [-8, 8])

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  const handleClick = () => {
    if (isExpanded) {
      // Open Google Maps when clicking on expanded map
      const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=17`
      window.open(mapsUrl, '_blank')
    } else {
      setIsExpanded(true)
    }
  }

  // OpenStreetMap embed URL - works without API key
  const openStreetMapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.01}%2C${latitude - 0.01}%2C${longitude + 0.01}%2C${latitude + 0.01}&layer=mapnik&marker=${latitude}%2C${longitude}`

  return (
    <motion.div
      ref={containerRef}
      className={`relative cursor-pointer select-none ${className}`}
      style={{
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl bg-white dark:bg-dark-100 border border-gray-200 dark:border-white/10 shadow-lg"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          width: isExpanded ? 480 : 340,
          height: isExpanded ? 380 : 200,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 35,
        }}
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan/20 pointer-events-none z-20" />

        {/* Map Content */}
        <div className="absolute inset-0">
          {/* OpenStreetMap Embed - Always visible */}
          <iframe
            src={openStreetMapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="pointer-events-auto"
            title="Location Map"
          />

          {/* Overlay when not expanded */}
          <AnimatePresence>
            {!isExpanded && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-dark-100/80 via-white/40 dark:via-dark-100/40 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Content overlay */}
        <div className="relative z-10 h-full flex flex-col justify-between p-5 pointer-events-none">
          {/* Top section */}
          <div className="flex items-start justify-between">
            <div className="relative">
              <motion.div
                className="relative"
                animate={{
                  opacity: isExpanded ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Map Icon SVG */}
                <motion.div
                  className="w-10 h-10 rounded-xl bg-white/90 dark:bg-dark-50/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
                  animate={{
                    scale: isHovered ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </motion.div>
              </motion.div>
            </div>

            {/* Status indicator */}
            <motion.div
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-dark-50/90 backdrop-blur-sm shadow-lg"
              animate={{
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-navy/70 dark:text-silver tracking-wide">
                Live
              </span>
            </motion.div>
          </div>

          {/* Bottom section */}
          <motion.div
            className="space-y-2 bg-white/90 dark:bg-dark-50/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
            animate={{
              opacity: isExpanded ? 0.95 : 1,
              y: isExpanded ? 10 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3
              className="text-navy dark:text-white font-semibold text-base tracking-tight"
              animate={{
                x: isHovered ? 4 : 0,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              📍 {location}
            </motion.h3>

            <motion.p
              className="text-navy/70 dark:text-silver text-sm font-mono"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
            >
              {coordinates}
            </motion.p>

            {/* Hint text */}
            <motion.p
              className="text-primary dark:text-cyan text-xs font-medium"
              animate={{
                opacity: isHovered ? 1 : 0.7,
              }}
            >
              {isExpanded ? "🔗 Click to open in Google Maps" : "👆 Click to expand"}
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
