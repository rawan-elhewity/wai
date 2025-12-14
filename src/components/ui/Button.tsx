"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variants = {
  primary: `
    bg-gradient-primary text-white
    hover:shadow-glow
    border border-transparent
  `,
  secondary: `
    bg-navy dark:bg-dark-50 text-white
    hover:bg-navy/90 dark:hover:bg-dark-100
    border border-transparent
  `,
  outline: `
    bg-transparent text-primary
    border-2 border-primary
    hover:bg-primary/10
  `,
  ghost: `
    bg-transparent text-navy dark:text-silver
    hover:bg-primary/10 hover:text-primary
    border border-transparent
  `,
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-sm rounded-xl",
  lg: "px-8 py-4 text-base rounded-xl",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  onClick,
  href,
  className,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center gap-2",
    "font-semibold",
    "transition-all duration-300 ease-smooth",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={baseStyles}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseStyles}
      whileHover={disabled ? undefined : { y: -2 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
