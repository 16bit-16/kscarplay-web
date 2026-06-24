'use client';

import { motion } from 'framer-motion';
import { Smartphone, Cloud, Gamepad2 } from 'lucide-react';

const STEPS = [
  { icon: Smartphone, label: '폰 앱', desc: 'Roblox 계정으로 로그인 후 노래 선택' },
  { icon: Cloud, label: '백엔드', desc: '명령을 게임으로 중계 + 상태 동기화' },
  { icon: Gamepad2, label: 'Roblox 게임', desc: '차량 스피커에 즉시 반영' },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 text-center text-3xl font-bold text-white"
      >
        어떻게 동작하나요
      </motion.h2>

      <div className="mx-auto flex max-w-3xl flex-col items-center gap-10 sm:flex-row sm:justify-between sm:gap-6">
        {STEPS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-surface">
              <s.icon className="h-7 w-7 text-accent" />
            </div>
            <p className="font-semibold text-white">{s.label}</p>
            <p className="mt-1 max-w-[160px] text-xs text-textMuted">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
