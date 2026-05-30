import React from "react";
import { motion } from "framer-motion";
import { workExperience } from "@/data";

const Experience = () => {
  return (
    <section id="experience" className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 section-alt border-y border-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="heading mb-4">Work Experience</h2>
          <p className="text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          2+ years of industry experience building systems across startups and enterprise environments, backed by 6+ years of freelance engineering for international clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-4 sm:gap-5 md:gap-6">
          {workExperience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full flex flex-col justify-between group relative card-premium card-hover rounded-xl p-6 lg:p-8"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-1">
                {exp.title}
              </h3>

              <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
                {exp.company}
              </p>

              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                {exp.location} • {exp.period}
              </p>

              <p className="text-sm text-slate-600 dark:text-slate-400">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;