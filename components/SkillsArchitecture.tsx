'use client'

import React from 'react'
import { motion } from 'framer-motion'

const SkillsArchitecture = () => {
  const skillPillars = [
    {
      id: 1,
      title: 'Backend Engineering',
      subtitle: 'APIs, services, and distributed systems',
      tools: ['Go', 'Node.js', 'TypeScript', 'Python', 'Flask', 'REST APIs', 'Microservices'],
      color: 'from-indigo-500/10 to-indigo-600/10 border-indigo-500/30',
      textColor: 'text-indigo-600 dark:text-indigo-400',
    },
    {
      id: 2,
      title: 'DevOps & Infrastructure',
      subtitle: 'Deployment and reliability automation',
      tools: ['Docker', 'Jenkins', 'GitHub Actions', 'CI/CD', 'Linux', 'Bash', 'Terraform'],
      color: 'from-cyan-500/10 to-blue-600/10 border-cyan-500/30',
      textColor: 'text-cyan-600 dark:text-cyan-400',
    },
    {
      id: 3,
      title: 'AI Automation',
      subtitle: 'Workflow and AI-driven systems',
      tools: ['n8n', 'Zapier', 'GoHighLevel', 'AI Workflows', 'Make.com'],
      color: 'from-purple-500/10 to-pink-600/10 border-purple-500/30',
      textColor: 'text-purple-600 dark:text-purple-400',
    },
    {
      id: 4,
      title: 'Databases & Caching',
      subtitle: 'Data systems and performance',
      tools: ['PostgreSQL', 'MongoDB', 'MySQL', 'Cassandra', 'Redis'],
      color: 'from-emerald-500/10 to-teal-600/10 border-emerald-500/30',
      textColor: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      id: 5,
      title: 'Observability',
      subtitle: 'Monitoring and system visibility',
      tools: ['Prometheus', 'Grafana', 'Logging', 'Alerting', 'ELK Stack', 'Metrics'],
      color: 'from-orange-500/10 to-amber-600/10 border-orange-500/30',
      textColor: 'text-orange-600 dark:text-orange-400',
    },
    {
      id: 6,
      title: 'Networking & Systems',
      subtitle: 'Infrastructure and network engineering',
      tools: ['TCP/IP', 'SIP', 'RTP', 'VoLTE', 'VRRP', 'PCAP', 'Load Balancing'],
      color: 'from-rose-500/10 to-red-600/10 border-rose-500/30',
      textColor: 'text-rose-600 dark:text-rose-400',
    },
    {
      id: 7,
      title: 'Testing & Performance',
      subtitle: 'Validation and scalability testing',
      tools: ['Playwright', 'Selenium', 'API Testing', 'Stress Testing', 'Performance Testing'],
      color: 'from-fuchsia-500/10 to-pink-600/10 border-fuchsia-500/30',
      textColor: 'text-fuchsia-600 dark:text-fuchsia-400',
    },
    {
      id: 8,
      title: 'Architecture & Design',
      subtitle: 'Scalable and resilient systems',
      tools: ['Distributed Systems', 'Event-Driven', 'High Availability', 'Queues', 'Caching'],
      color: 'from-blue-500/10 to-indigo-600/10 border-blue-500/30',
      textColor: 'text-blue-600 dark:text-blue-400',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section id="skills" className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 section-light border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="heading mb-6">Backend • DevOps • AI Automation • Systems</h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            8 core competency pillars spanning distributed systems, cloud infrastructure, automation, and reliability. 
            Production-grade expertise across the full stack.
          </p>
        </motion.div>

        {/* Skills Grid - 8 Pillars (2x4) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6"
        >
          {skillPillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              variants={itemVariants}
              className={`group relative h-full flex flex-col card-premium card-hover rounded-xl p-6 border backdrop-blur-sm ${pillar.color} transition-all duration-300`}
            >
              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.color.split(' ')[0]} opacity-0 group-hover:opacity-100 transition-opacity`} />

              {/* Title & Subtitle */}
              <div className="mb-5">
                <h3 className={`text-lg font-bold mb-1 ${pillar.textColor}`}>
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {pillar.subtitle}
                </p>
              </div>

              {/* Tools Divider */}
              <div className="border-t border-slate-200/30 dark:border-slate-700/30 my-4" />

              {/* Tools Tags */}
              <div className="flex flex-wrap gap-1.5 items-start">
                {pillar.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2 sm:px-2.5 py-1 sm:py-1.5 text-xs font-medium bg-slate-800/60 text-slate-300 rounded-md hover:bg-slate-700/80 transition-colors smooth-transition whitespace-nowrap"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-10 md:mt-14"
        >
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-3">
            Want to explore specific projects or discuss your technical needs?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 card-premium card-hover rounded-lg font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
          >
            Get in Touch →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsArchitecture
