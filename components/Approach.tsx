'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Approach = () => {
  const phases = [
    {
      phase: '01',
      title: 'Discovery & Planning',
      description:
        'In-depth analysis of your requirements, systems architecture, and business goals. We identify challenges and opportunities.',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      phase: '02',
      title: 'Design & Architecture',
      description:
        'Design scalable systems, database schemas, API specifications, and deployment strategies optimized for your needs.',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      phase: '03',
      title: 'Implementation & Deploy',
      description:
        'Build production-grade code, comprehensive testing, monitoring setup, and seamless deployment with full documentation.',
      color: 'from-emerald-500 to-teal-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 section-light border-y border-slate-800/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="heading mb-6">My Engineering Process</h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A structured, proven methodology for building production-grade systems
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
        >
          {phases.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative card-premium card-hover rounded-2xl overflow-hidden hover-lift"
            >
              {/* Top accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />

              {/* Content */}
              <div className="p-5 sm:p-6 md:p-8 relative z-10">
                {/* Phase number */}
                <div className="mb-6">
                  <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-br from-slate-700 to-slate-600 dark:from-slate-800 dark:to-slate-700 bg-clip-text text-transparent opacity-50 group-hover:opacity-70 smooth-transition">
                    {item.phase}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-50 mb-4 group-hover:text-indigo-400 smooth-transition">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;
