import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-[#F3F1ED] px-4 sm:px-6 md:px-12 pb-8 sm:pb-12 pt-8 sm:pt-12 border-t border-white/10">
      <div className="max-w-[1920px] mx-auto py-6 sm:py-8">
        <div className="text-[12vw] sm:text-[10vw] md:text-[8vw] font-bold tracking-tighter leading-none opacity-20 select-none pointer-events-none">
          LAYERZERO
        </div>
      </div>
      <div className="max-w-[1920px] mx-auto flex flex-col sm:flex-row justify-between gap-2 text-xs font-mono opacity-40">
        <p>© 2026 Layer Zero Studio.</p>
        <p>Made in Miami.</p>
      </div>
    </footer>
  );
}
