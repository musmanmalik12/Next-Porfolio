'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Confetti ────────────────────────────────────────────────────────────────

const COLORS = ['#a78bfa', '#60a5fa', '#34d399', '#fbbf24', '#f87171', '#fb923c', '#f472b6'];

const Confetti = ({ trigger }: { trigger: boolean }) => {
  const pieces = Array.from({ length: 60 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.5,
    duration: 1.6 + Math.random() * 1.2,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    size: 6 + Math.random() * 6,
    round: Math.random() > 0.5,
    drift: (Math.random() - 0.5) * 18,
  }));

  return (
    <AnimatePresence>
      {trigger && (
        <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden rounded-2xl">
          {pieces.map((p) => (
            <motion.div
              key={p.id}
              initial={{ y: -20, x: `${p.left}vw`, opacity: 1, rotate: 0 }}
              animate={{ y: 600, x: `calc(${p.left}vw + ${p.drift}px)`, opacity: 0, rotate: 720 }}
              transition={{ duration: p.duration, delay: p.delay, ease: 'easeIn' }}
              style={{
                position: 'absolute',
                width: p.size,
                height: p.size,
                borderRadius: p.round ? '50%' : 3,
                backgroundColor: p.color,
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

// ─── Typing terminal ──────────────────────────────────────────────────────────

const COMMANDS = [
  'deploy --env production --scale auto',
  'kubectl rollout status deployment/api',
  'python run_agent.py --workflow=auto',
  'terraform apply --auto-approve',
  'docker build -t backend:latest .',
];

const useTypingEffect = (paused: boolean = false) => {
  const [text, setText] = useState('');
  const [cmdIndex, setCmdIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const frame = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const cmd = COMMANDS[cmdIndex];

    if (paused) {
      return () => { if (frame.current) clearTimeout(frame.current); };
    }

    if (!deleting) {
      if (text.length < cmd.length) {
        frame.current = setTimeout(() => setText(cmd.slice(0, text.length + 1)), 55);
      } else {
        frame.current = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (text.length > 0) {
        frame.current = setTimeout(() => setText(cmd.slice(0, text.length - 1)), 28);
      } else {
        setDeleting(false);
        setCmdIndex((i) => (i + 1) % COMMANDS.length);
      }
    }

    return () => { if (frame.current) clearTimeout(frame.current); };
  }, [text, cmdIndex, deleting, paused]);

  return text;
};

// ─── Chip ─────────────────────────────────────────────────────────────────────

type ChipVariant = 'blue' | 'teal' | 'orange';

const chipStyles: Record<ChipVariant, string> = {
  blue:   'bg-blue-500/10   text-blue-400   border border-blue-500/20',
  teal:   'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
  orange: 'bg-orange-500/10 text-orange-400  border border-orange-500/20',
};

const Chip = ({ label, variant }: { label: string; variant: ChipVariant }) => (
  <span className={`text-[11.5px] px-3 py-1 rounded-full font-medium tracking-wide ${chipStyles[variant]}`}>
    {label}
  </span>
);

// ─── Stat card ────────────────────────────────────────────────────────────────

const Stat = ({
  value, label, gradient,
}: { value: string; label: string; gradient: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    className="text-center cursor-default"
  >
    <div
      className="text-3xl font-bold mb-1"
      style={{ background: gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
    >
      {value}
    </div>
    <div className="text-[11px] text-slate-500 uppercase tracking-widest font-medium">{label}</div>
  </motion.div>
);

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const Hero = () => {
  const [confetti, setConfetti] = useState(false);
  const [terminalHovered, setTerminalHovered] = useState(false);
  const typedCmd = useTypingEffect(terminalHovered);

  const triggerConfetti = () => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 2500);
  };

  const handleHireMe = () => {
    triggerConfetti();
    window.location.href = 'mailto:usman@example.com';
  };

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#060b18] py-20 md:py-32">

      {/* ── Confetti ── */}
      <Confetti trigger={confetti} />

      {/* ── Background layers ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* dot grid */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(100,116,139,0.15) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Left side - Automation nodes network */}
        <svg className="absolute left-0 top-0 w-1/3 h-full" viewBox="0 0 300 800" preserveAspectRatio="xMidYMid slice" style={{ opacity: 0.07, filter: 'blur(0.3px)' }}>
          <defs>
            <linearGradient id="left-line" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Connecting lines */}
          <line x1="80" y1="240" x2="150" y2="320" stroke="url(#left-line)" strokeWidth="1.5" />
          <line x1="150" y1="320" x2="100" y2="400" stroke="url(#left-line)" strokeWidth="1.5" />
          <line x1="100" y1="400" x2="200" y2="480" stroke="url(#left-line)" strokeWidth="1.5" />
          <line x1="80" y1="240" x2="200" y2="480" stroke="url(#left-line)" strokeWidth="1.5" opacity="0.2" />

          {/* Node 1 - Backend */}
          <circle cx="80" cy="240" r="10" fill="rgba(96, 165, 250, 0.08)" stroke="#60a5fa" strokeWidth="1.5" />
          <text x="80" y="245" textAnchor="middle" fill="#60a5fa" fontSize="11" fontWeight="bold" fontFamily="monospace">{"{"}</text>

          {/* Node 2 - Terminal */}
          <circle cx="150" cy="320" r="10" fill="rgba(129, 140, 248, 0.08)" stroke="#818cf8" strokeWidth="1.5" />
          <text x="150" y="324" textAnchor="middle" fill="#818cf8" fontSize="8" fontWeight="bold" fontFamily="monospace">&gt;_</text>

          {/* Node 3 - Cloud */}
          <circle cx="100" cy="400" r="10" fill="rgba(168, 85, 247, 0.08)" stroke="#a78bfa" strokeWidth="1.5" />
          <text x="100" y="405" textAnchor="middle" fill="#a78bfa" fontSize="9" fontWeight="bold">☁</text>

          {/* Node 4 - Automation */}
          <circle cx="200" cy="480" r="10" fill="rgba(96, 165, 250, 0.08)" stroke="#60a5fa" strokeWidth="1.5" />
          <text x="200" y="485" textAnchor="middle" fill="#60a5fa" fontSize="8" fontWeight="bold">↻</text>
        </svg>

        {/* Right side - Automation nodes network */}
        <svg className="absolute right-0 top-0 w-1/3 h-full" viewBox="0 0 300 800" preserveAspectRatio="xMidYMid slice" style={{ opacity: 0.07, filter: 'blur(0.3px)' }}>
          <defs>
            <linearGradient id="right-line" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Connecting lines */}
          <line x1="220" y1="250" x2="150" y2="330" stroke="url(#right-line)" strokeWidth="1.5" />
          <line x1="150" y1="330" x2="200" y2="410" stroke="url(#right-line)" strokeWidth="1.5" />
          <line x1="200" y1="410" x2="100" y2="490" stroke="url(#right-line)" strokeWidth="1.5" />
          <line x1="220" y1="250" x2="100" y2="490" stroke="url(#right-line)" strokeWidth="1.5" opacity="0.2" />

          {/* Node 1 - Automation */}
          <circle cx="220" cy="250" r="10" fill="rgba(52, 211, 153, 0.08)" stroke="#34d399" strokeWidth="1.5" />
          <text x="220" y="255" textAnchor="middle" fill="#34d399" fontSize="8" fontWeight="bold">↻</text>

          {/* Node 2 - Cloud */}
          <circle cx="150" cy="330" r="10" fill="rgba(6, 182, 212, 0.08)" stroke="#06b6d4" strokeWidth="1.5" />
          <text x="150" y="335" textAnchor="middle" fill="#06b6d4" fontSize="9" fontWeight="bold">☁</text>

          {/* Node 3 - Terminal */}
          <circle cx="200" cy="410" r="10" fill="rgba(34, 197, 94, 0.08)" stroke="#22c55e" strokeWidth="1.5" />
          <text x="200" y="414" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="bold" fontFamily="monospace">&gt;_</text>

          {/* Node 4 - Backend */}
          <circle cx="100" cy="490" r="10" fill="rgba(59, 130, 246, 0.08)" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="100" y="495" textAnchor="middle" fill="#3b82f6" fontSize="11" fontWeight="bold" fontFamily="monospace">{"}"}</text>
        </svg>

        {/* Subtle background geometry */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.4 }}>
          <defs>
            <linearGradient id="subtle-grid" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          {/* Subtle vertical and horizontal guides */}
          <line x1="25%" y1="0" x2="25%" y2="100%" stroke="url(#subtle-grid)" strokeWidth="1" />
          <line x1="75%" y1="0" x2="75%" y2="100%" stroke="url(#subtle-grid)" strokeWidth="1" />
          <line x1="0" y1="25%" x2="100%" y2="25%" stroke="url(#subtle-grid)" strokeWidth="1" />
          <line x1="0" y1="75%" x2="100%" y2="75%" stroke="url(#subtle-grid)" strokeWidth="1" />
        </svg>

        {/* blue glow */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)' }}
        />

        {/* purple glow */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1.5 }}
          className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)' }}
        />
      </div>

      {/* ── Main content ── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center"
      >

        {/* Name */}
        <motion.p variants={item} className="text-[13px] tracking-[0.2em] uppercase text-slate-500 font-medium mb-5">
          Muhammad Usman
        </motion.p>

        {/* Role titles */}
        <motion.div variants={item} className="mb-8 leading-loose">
<span
  className="block font-bold mb-3 sm:mb-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.3]"
  style={{
    background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #a78bfa 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    paddingBottom: '2px',
    opacity: 0.95,
  }}
>
  Senior Software Engineer
</span>
        </motion.div>

        {/* Tech chips */}
        <motion.div variants={item} className="flex justify-center flex-wrap gap-2 mb-8">
          <Chip label="Python · Golang · Node.js" variant="blue" />
          <Chip label="Linux · Docker · Kubernetes"  variant="teal" />
          <Chip label="LLMs · n8n · LangChain"     variant="orange" />
        </motion.div>

        {/* Tagline */}
        <motion.p variants={item} className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto px-2 sm:px-0">
      Building scalable backend systems, automating cloud infrastructure, and shipping AI automation workflows that run at production scale.
        </motion.p>

        {/* Terminal */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-700/50 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 mb-8 font-mono text-xs sm:text-sm text-slate-400 overflow-x-auto max-w-xs sm:max-w-none"
          onMouseEnter={() => setTerminalHovered(true)}
          onMouseLeave={() => setTerminalHovered(false)}
        >
          <span className="text-blue-400">~$</span>
          <span className="text-emerald-400 whitespace-nowrap">{typedCmd}</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-block w-[6px] h-4 bg-blue-400 rounded-[1px] align-middle ml-0.5"
            style={{ opacity: 0.8 }}
          />
        </motion.div>

        {/* CTA buttons */}
        <motion.div variants={item} className="flex flex-col sm:flex-row justify-center gap-3 mb-12 px-2 sm:px-0">
          <motion.a
            href="mailto:usman@example.com"
            onClick={handleHireMe}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold text-sm sm:text-base text-white border-none cursor-pointer transition-all duration-300 shadow-[0_0_28px_rgba(99,102,241,0.4)] hover:shadow-[0_0_44px_rgba(99,102,241,0.6)]"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #818cf8)',
            }}
          >
            Hire Me
          </motion.a>

          <motion.button
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold text-sm sm:text-base text-slate-300 bg-transparent border border-slate-600/50 cursor-pointer hover:bg-slate-800/50 hover:border-slate-500/80 hover:text-slate-100 transition-all duration-300"
          >
            View Projects
          </motion.button>
        </motion.div>

        {/* Contact Info Display */}
        <motion.div variants={item} className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 px-2 sm:px-0">
          <div className="text-center">
            <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-1">Email</p>
            <a href="mailto:muhammadusman.ceme@gmail.com" className="text-sm sm:text-base text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
              muhammadusman.ceme@gmail.com
            </a>
          </div>
          <div className="hidden sm:block w-px h-8 bg-slate-700/50" />
          <div className="text-center">
            <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-1">WhatsApp</p>
            <a href="https://wa.me/923095259950" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
              +92 309 5259950
            </a>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Hero;