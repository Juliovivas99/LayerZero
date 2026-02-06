import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-[#F3F1ED] px-4 sm:px-6 md:px-12 pb-8 sm:pb-12 pt-8 sm:pt-12 border-t border-white/10">
      <div className="max-w-[1920px] mx-auto py-6 sm:py-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div className="text-[12vw] sm:text-[10vw] md:text-[8vw] font-bold tracking-tighter leading-none opacity-20 select-none pointer-events-none">
          LAYERZERO
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 mb-0 sm:mb-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase hover:text-[#FF4D00] transition-colors min-h-[44px] flex items-center touch-manipulation">
            Twitter
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase hover:text-[#FF4D00] transition-colors min-h-[44px] flex items-center touch-manipulation">
            LinkedIn
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase hover:text-[#FF4D00] transition-colors min-h-[44px] flex items-center touch-manipulation">
            Instagram
          </a>
        </div>
      </div>
      <div className="max-w-[1920px] mx-auto flex flex-col sm:flex-row justify-between gap-2 text-xs font-mono opacity-40">
        <p>© 2026 Layer Zero Studio.</p>
        <p>Made in Miami.</p>
      </div>
    </footer>
  );
}
