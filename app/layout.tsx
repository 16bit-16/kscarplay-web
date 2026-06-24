import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KS CarPlay',
  description: 'Roblox 게임 속 차량 오디오 시스템을 폰에서 원격으로 조작하는 컨트롤러 앱',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
