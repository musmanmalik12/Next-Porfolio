"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const RecentProjects = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section id="projects" className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 section-alt border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-12 md:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="heading mb-6">Featured Projects</h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
        Selected production systems highlighting scalable backend engineering, DevOps infrastructure, and AI automation workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, margin: '-100px' }}
              className="group relative card-premium card-hover rounded-2xl overflow-hidden hover-lift flex flex-col"
            >
              {/* Project Video with overlay */}
              <div className="relative w-full h-64 sm:h-72 md:h-80 bg-slate-900 overflow-hidden">
                <video
                  src={project.videoUrl}
                  controls
                  preload="metadata"
                  className="w-full h-full"
                  poster={project.img}
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Project Info */}
              <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow">
                {/* Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Featured</span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-50 mb-3 group-hover:text-indigo-400 smooth-transition">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 mb-6 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-4 sm:line-clamp-none">
                  {project.des}
                </p>

                {/* CTA Button - Premium styled */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-medium text-xs sm:text-sm shadow-md hover:shadow-lg smooth-transition interactive-button w-fit"
                >
                  <FaGithub className="w-4 h-4" />
                  View Source
                  <FaExternalLinkAlt className="w-3 h-3 opacity-70" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16 px-2 sm:px-0"
        >
          <p className="text-slate-400 text-base sm:text-lg mb-4 max-w-2xl mx-auto">
            Looking to build scalable backend systems, DevOps infrastructure, or AI automation workflows? Let's talk.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 card-premium rounded-lg font-medium text-indigo-400 hover:text-indigo-300 hover:shadow-md hover:shadow-indigo-600/20 smooth-transition text-sm sm:text-base"
          >
            Schedule a Call →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentProjects;