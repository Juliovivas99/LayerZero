import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-[#F3F1ED] px-6 md:px-12 pb-12 pt-12 border-t border-white/10">
      <div className="max-w-[1920px] mx-auto py-8 flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="text-[10vw] md:text-[8vw] font-bold tracking-tighter leading-none opacity-20 select-none pointer-events-none">
          LAYERZERO
        </div>
        
        <div className="flex gap-8 mb-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase hover:text-[#FF4D00] transition-colors">
            Twitter
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase hover:text-[#FF4D00] transition-colors">
            LinkedIn
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase hover:text-[#FF4D00] transition-colors">
            Instagram
          </a>
        </div>
      </div>
      <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between gap-2 text-xs font-mono opacity-40">
        <p>© 2026 Layer Zero Studio.</p>
        <p>Made in San Francisco.</p>
      </div>
    </footer>
  );
}
