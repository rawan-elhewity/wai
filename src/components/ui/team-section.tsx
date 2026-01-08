// components/ui/team-section.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Linkedin } from "lucide-react";

interface SocialLink {
  icon: React.ElementType;
  href: string;
}

interface TeamMember {
  name: string;
  designation: string;
  image?: string;
  icon?: React.ElementType;
  socialLinks?: SocialLink[];
}

interface TeamSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  description: string;
  members: TeamMember[];
  locale?: "ar" | "en";
}

export const TeamSection = React.forwardRef<HTMLDivElement, TeamSectionProps>(
  (
    {
      title,
      subtitle,
      description,
      members,
      locale = "ar",
      className,
      ...props
    },
    ref
  ) => {
    const isRTL = locale === "ar";

    // Colors for cards
    const cardColors = [
      "from-primary/20 to-cyan/20",
      "from-cyan/20 to-navy/20",
      "from-navy/20 to-burgundy/20",
      "from-burgundy/20 to-primary/20",
      "from-green-500/20 to-emerald-500/20",
    ];

    return (
      <section
        ref={ref}
        dir={isRTL ? "rtl" : "ltr"}
        className={cn(
          "relative w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-dark-100 dark:to-dark-50 py-16 md:py-24 lg:py-32",
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-4 md:px-6">
          {/* Background Grid */}
          <div className="absolute inset-0 z-0 opacity-5">
            <svg className="h-full w-full" fill="none">
              <defs>
                <pattern
                  id="team-grid"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M20 0L0 0 0 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-navy dark:text-white"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#team-grid)" />
            </svg>
          </div>

          {/* Header Section */}
          <div className="relative z-10 flex w-full flex-col items-center justify-center gap-4 text-center mb-16">
            <div className="grid gap-4">
              <span className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-navy/20 text-primary text-base font-medium border border-primary/30 backdrop-blur-sm mx-auto">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {subtitle || (isRTL ? "فريقنا" : "Our Team")}
              </span>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-navy dark:text-white">
                {title}
              </h2>
              <p className="max-w-[700px] text-navy/70 dark:text-silver md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                {description}
              </p>
            </div>
          </div>

          {/* Team Members Grid */}
          <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {members.map((member, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center justify-end overflow-hidden rounded-2xl bg-white dark:bg-white/5 p-6 text-center shadow-lg border border-gray-200 dark:border-white/10 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-2xl hover:border-primary/30 dark:hover:border-cyan/30"
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cardColors[index % cardColors.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Background wave animation */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/2 origin-bottom scale-y-0 transform rounded-t-full bg-gradient-to-t from-primary/20 to-transparent transition-transform duration-500 ease-out group-hover:scale-y-100"
                  style={{ transitionDelay: `${index * 50}ms` }}
                />

                {/* Member Avatar / Icon */}
                <div
                  className={`relative z-10 h-32 w-32 overflow-hidden rounded-full border-4 border-gray-100 dark:border-white/10 bg-gradient-to-br ${[
                      "from-primary to-cyan",
                      "from-cyan to-navy",
                      "from-navy to-primary",
                      "from-emerald-500 to-teal-500",
                      "from-violet-500 to-purple-500",
                    ][index % 5]
                    } transition-all duration-500 ease-out group-hover:border-primary dark:group-hover:border-cyan group-hover:scale-105 shadow-lg flex items-center justify-center`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  ) : member.icon ? (
                    <member.icon className="h-16 w-16 text-white drop-shadow-xl" />
                  ) : (
                    <span className="text-4xl font-bold text-white drop-shadow-lg select-none">
                      {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  )}

                  {/* Glass overlay */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                <h3 className="relative z-10 mt-4 text-xl font-semibold text-navy dark:text-white">
                  {member.name}
                </h3>
                <p className="relative z-10 text-sm text-navy/70 dark:text-silver">
                  {member.designation}
                </p>

                {/* Social Links - Always visible */}
                {member.socialLinks && member.socialLinks.length > 0 && (
                  <div className="relative z-10 mt-4 flex gap-3">
                    {member.socialLinks.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0A66C2] hover:text-[#004182] dark:text-[#0A66C2] dark:hover:text-cyan transition-all p-2 rounded-full bg-white dark:bg-white/10 hover:bg-[#0A66C2]/10 dark:hover:bg-cyan/10 shadow-sm hover:shadow-md hover:scale-110"
                      >
                        <link.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

TeamSection.displayName = "TeamSection";
