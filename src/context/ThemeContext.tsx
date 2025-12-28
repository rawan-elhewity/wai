"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (event?: React.MouseEvent) => void;
  setTheme: (theme: Theme) => void;
  isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionOrigin, setTransitionOrigin] = useState({ x: 0, y: 0 });
  const [pendingTheme, setPendingTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme") as Theme;
    if (saved && (saved === "light" || saved === "dark")) {
      setThemeState(saved);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  const toggleTheme = useCallback((event?: React.MouseEvent) => {
    if (isTransitioning) return;

    const newTheme = theme === "light" ? "dark" : "light";
    
    if (event) {
      const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
      setTransitionOrigin({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    } else {
      setTransitionOrigin({ x: window.innerWidth / 2, y: 0 });
    }

    setPendingTheme(newTheme);
    setIsTransitioning(true);
  }, [theme, isTransitioning]);

  // Handle transition completion
  useEffect(() => {
    if (isTransitioning && pendingTheme) {
      const themeToApply = pendingTheme;
      
      // Apply theme after overlay fully covers the screen (at 35% of animation = 280ms)
      const timer = setTimeout(() => {
        setThemeState(themeToApply);
      }, 300);

      const endTimer = setTimeout(() => {
        setIsTransitioning(false);
        setPendingTheme(null);
      }, 700); // Total animation duration

      return () => {
        clearTimeout(timer);
        clearTimeout(endTimer);
      };
    }
  }, [isTransitioning, pendingTheme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  // Calculate the maximum radius needed to cover the screen
  const getMaxRadius = () => {
    if (typeof window === "undefined") return 2000;
    const maxX = Math.max(transitionOrigin.x, window.innerWidth - transitionOrigin.x);
    const maxY = Math.max(transitionOrigin.y, window.innerHeight - transitionOrigin.y);
    return Math.sqrt(maxX * maxX + maxY * maxY) + 100;
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, isTransitioning }}>
      {children}
      {/* Theme transition overlay */}
      {mounted && isTransitioning && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: transitionOrigin.x,
              top: transitionOrigin.y,
              width: getMaxRadius() * 2,
              height: getMaxRadius() * 2,
              marginLeft: -getMaxRadius(),
              marginTop: -getMaxRadius(),
              borderRadius: "50%",
              backgroundColor: pendingTheme === "dark" ? "#0A0A0F" : "#ffffff",
              transform: "scale(0)",
              animation: "theme-slide 700ms ease-out forwards",
            }}
          />
        </div>
      )}
      <style jsx global>{`
        @keyframes theme-slide {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
