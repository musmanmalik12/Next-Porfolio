"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [activeSection, setActiveSection] = useState("");

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      // Detect active section by finding which one is most in view
      const sections = ["about", "projects", "experience", "links", "contact"];
      let maxVisibility = 0;
      let activeSection = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          
          // Calculate how much of the element is visible in viewport
          const top = Math.max(0, rect.top);
          const bottom = Math.min(viewportHeight, rect.bottom);
          const visibility = Math.max(0, bottom - top);

          // If this element is more visible than others, mark it as active
          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            activeSection = section;
          }
        }
      }

      if (activeSection) {
        setActiveSection(activeSection);
      }
    }
  });

  const navItemVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-[5000] w-full flex justify-center pt-4 sm:pt-6 px-3 sm:px-4">
      {/* Floating Pill Navbar */}
      <div className={cn(
        "flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full backdrop-blur-2xl bg-slate-900/70 border border-slate-700/50 shadow-lg hover:border-slate-600/70 transition-all duration-300",
        "hover:bg-slate-900/80 hover:shadow-indigo-500/20",
        className
      )}>
        {navItems.map((navItem: any, idx: number) => {
          const isActive = activeSection === navItem.link.substring(1);
          
          return (
            <motion.div
              key={`nav-${idx}`}
              variants={navItemVariants}
              initial="rest"
              whileHover="hover"
              className="relative"
            >
              <Link
                href={navItem.link}
                className={cn(
                  "relative px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap",
                  isActive
                    ? "text-indigo-300"
                    : "text-slate-400 hover:text-slate-200"
                )}
              >
                {navItem.icon && <span className="text-sm">{navItem.icon}</span>}
                <span className="hidden sm:inline">{navItem.name}</span>
                
                {/* Active indicator underline */}
                {isActive && (
                  <motion.div
                    layoutId="active-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-400 to-cyan-400"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          );
        })}
      </div>
    </nav>
  );
};

