"use client";

import { memo } from "react";

// استخدام CSS animations بدلاً من Framer Motion للأداء الأفضل
export const FloatingOrbs = memo(function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main gradient orb - CSS animation */}
      <div
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full animate-float-slow will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(122,154,199,0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Secondary orb */}
      <div
        className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full animate-float-reverse will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(45,26,36,0.25) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Accent orb - static for better performance */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(74,85,120,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
    </div>
  );
});
