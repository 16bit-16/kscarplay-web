'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <Glow />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="z-10 flex flex-col items-center"
      >
        <div className="mb-6 flex h-32 w-32 items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface">
          <img src="/logo_black.png" alt="KS CarPlay Logo" />
        </div>

        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
          KS<span className="text-accent">CarPlay</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-5 max-w-md text-lg text-textMuted"
        >
          Roblox 속 차량 오디오를, 손끝에서 그대로 컨트롤하세요.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10"
        >
          <Visualizer />
        </motion.div>
      </motion.div>
    </section>
  );
}

function Glow() {
  return (
    <>
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[100px]" />
    </>
  );
}

function Visualizer() {
  const bars = [0, 1, 2, 3, 4];
  return (
    <div className="flex items-end gap-1.5" style={{ height: 32 }}>
      {bars.map((i) => (
        <motion.span
          key={i}
          className="w-2 origin-bottom rounded-full bg-accent"
          style={{ height: 32 }}
          animate={{ scaleY: [0.3, 1, 0.45, 0.8, 0.3] }}
          transition={{ duration: 1.2 + i * 0.15, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}