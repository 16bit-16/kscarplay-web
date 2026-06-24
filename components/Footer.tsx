import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 text-center text-sm text-textMuted">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} KSCarPlay</p>
        <div className="flex gap-5">
          <Link href="/privacy" className="transition hover:text-white">
            개인정보처리방침
          </Link>
          <Link href="/terms" className="transition hover:text-white">
            서비스 이용약관
          </Link>
        </div>
      </div>
    </footer>
  );
}
