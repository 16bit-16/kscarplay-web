'use client';

import { motion } from 'framer-motion';
import { Music, Share2, RefreshCw, Moon } from 'lucide-react';

const FEATURES = [
  { icon: Music, title: '재생 관리', desc: '재생·정지·이전/다음곡, 볼륨, 거리감, EQ까지 폰 하나로.' },
  { icon: Share2, title: '플레이리스트 공유', desc: '6자리 코드 하나로 친구한테 노래 목록을 그대로 공유.' },
  { icon: RefreshCw, title: '실시간 동기화', desc: '게임 안에서 바꿔도, 폰에서 바꿔도 항상 같은 상태로.' },
  { icon: Moon, title: '다크 / 화이트 모드', desc: '취향대로 테마를 바꿔서 사용하세요.' },
];

export default function Features() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15">
              <f.icon className="h-5 w-5 text-accent" />
            </div>
            <h3 className="text-lg font-bold text-white">{f.title}</h3>
            <p className="mt-1.5 text-sm text-textMuted">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
