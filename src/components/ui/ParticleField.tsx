"use client";

import { useEffect, useRef, useCallback, memo } from "react";
import { useTheme } from "@/context";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export const ParticleField = memo(function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const isVisibleRef = useRef(true);

  const createParticles = useCallback((width: number, height: number) => {
    // تقليل عدد الجزيئات بشكل كبير لتحسين الأداء
    const count = Math.min(Math.floor((width * height) / 30000), 40);
    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }
    return particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let lastTime = 0;
    const targetFPS = 30; // تقليل FPS
    const frameInterval = 1000 / targetFPS;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      particlesRef.current = createParticles(window.innerWidth, window.innerHeight);
    };

    const drawParticles = (timestamp: number) => {
      if (!isVisibleRef.current) {
        animationRef.current = requestAnimationFrame(drawParticles);
        return;
      }

      const elapsed = timestamp - lastTime;
      if (elapsed < frameInterval) {
        animationRef.current = requestAnimationFrame(drawParticles);
        return;
      }
      lastTime = timestamp - (elapsed % frameInterval);

      const width = window.innerWidth;
      const height = window.innerHeight;
      ctx.clearRect(0, 0, width, height);
      
      const primaryColor = theme === "dark" ? "122, 154, 199" : "74, 85, 120";
      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${primaryColor}, ${p.opacity})`;
        ctx.fill();

        // تقليل عدد الخطوط المرسومة
        for (let j = i + 1; j < Math.min(i + 5, particles.length); j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const d = dx * dx + dy * dy;
          if (d < 10000) { // 100^2
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${primaryColor}, ${0.1 * (1 - Math.sqrt(d) / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(drawParticles);
    };

    // Intersection Observer لإيقاف الرسم عند عدم الظهور
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    resize();
    animationRef.current = requestAnimationFrame(drawParticles);

    const handleResize = () => {
      resize();
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, [theme, createParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.5 }}
    />
  );
});
