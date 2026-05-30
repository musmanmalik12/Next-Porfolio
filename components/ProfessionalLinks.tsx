import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork, SiFiverr } from "react-icons/si";

const ProfessionalLinks = () => {
  const links = [
    {
      id: 1,
      name: "GitHub",
      description: "View my open-source projects and contributions",
      icon: <FaGithub className="w-8 h-8" />,
      url: "https://github.com/musmanmalik12",
      color: "bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200",
    },
    {
      id: 2,
      name: "LinkedIn",
      description: "Connect with me professionally and view my career history",
      icon: <FaLinkedin className="w-8 h-8" />,
      url: "https://linkedin.com/in/musmanmalik12",
      color: "bg-blue-600 text-white hover:bg-blue-700",
    },
    {
      id: 3,
      name: "Upwork",
      description: "Check my Upwork profile and client reviews",
      icon: <SiUpwork className="w-8 h-8" />,
      url: "https://www.upwork.com/freelancers/~01d4645dde1883c3cd",
      color: "bg-green-600 text-white hover:bg-green-700",
    },
    {
      id: 4,
      name: "Fiverr",
      description: "Browse my Fiverr gigs and service offerings",
      icon: <SiFiverr className="w-8 h-8" />,
      url: "https://www.fiverr.com/niru_craft",
      color: "bg-green-600 text-white hover:bg-green-700",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="links" className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-y border-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading mb-4">Professional Presence</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Connect with me across multiple platforms. I'm active on GitHub, LinkedIn, Upwork, and Fiverr.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {links.map((link) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group relative h-full"
            >
              <div className="h-full card-premium card-hover rounded-xl p-6 flex flex-col">
<div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white">
                  {link.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-50 mb-2">
                  {link.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 mb-4 flex-grow line-clamp-3">
                  {link.description}
                </p>

                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold text-sm group-hover:gap-3 transition-all duration-300 mt-auto">
                  View Profile
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalLinks;
