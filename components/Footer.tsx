import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full section-light border-t border-slate-200/50 dark:border-slate-800/50" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="heading mb-6">
            Let's Build Something Great
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Whether you need a scalable backend system, DevOps infrastructure, or AI automation workflow, 
            I&apos;m here to help. Let's discuss how to bring your vision to life with production-grade engineering.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:muhammadusman.ceme@gmail.com">
              <MagicButton
                title="Send Email"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-slate-800/50 my-12 md:my-16" />

        {/* Professional Links & Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-4">
                Skills
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="#skills" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 smooth-transition text-sm">
                    Backend Engineering
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 smooth-transition text-sm">
                    DevOps & Infra
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-4">
                Portfolio
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="#projects" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 smooth-transition text-sm">
                    Featured Projects
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 smooth-transition text-sm">
                    Experience
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-4">
                Connect
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="https://github.com/musmanmalik12" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 smooth-transition text-sm">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/muhammad-usman" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 smooth-transition text-sm">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-4">
                Freelance
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.upwork.com/freelancers/~01d4645dde1883c3cd" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 smooth-transition text-sm">
                    Upwork
                  </a>
                </li>
                <li>
                  <a href="https://www.fiverr.com/niru_craft" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 smooth-transition text-sm">
                    Fiverr
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-200/50 dark:border-slate-800/50 pt-12 text-center space-y-3">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
              © 2024 Muhammad Usman. Backend Engineer • DevOps • AI Automation
            </p>
            <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 tracking-widest uppercase">
              Built for scale.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500 pt-2">
              Designing high-performance, production-grade systems
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;