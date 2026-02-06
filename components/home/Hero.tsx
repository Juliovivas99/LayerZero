export default function Hero() {
  return (
    <header className="relative pt-48 pb-20 px-6 md:px-12 min-h-screen flex flex-col justify-between bg-[#0A0A0A] text-[#F3F1ED]">
      <div className="max-w-[1920px] mx-auto w-full h-full flex flex-col justify-center flex-grow">
        <div className="fade-in-up">
          <h1 className="text-[13vw] leading-[0.8] font-bold tracking-tighter mb-8 uppercase break-words">
            Digital Product<br />
            <span className="text-transparent stroke-text">Mastery</span>
          </h1>
        </div>
        
        <div className="fade-in-up delay-100 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-xl md:text-3xl font-medium leading-tight mb-10 text-[#F3F1ED]">
              We are a digital product studio for ambitious brands. We fuse bold design with surgical engineering to build software that screams quality.
            </p>
            
            <div className="flex items-center gap-6">
              <a href="#work" className="w-16 h-16 rounded-full bg-[#F3F1ED] text-black flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <iconify-icon icon="solar:arrow-down-linear" className="text-2xl rotate-45"></iconify-icon>
              </a>
              <span className="text-sm font-mono uppercase tracking-widest opacity-60">Scroll for work</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 py-6 bg-[#0A0A0A]">
        <div className="marquee-container">
          <div className="marquee-content text-lg md:text-xl font-mono uppercase tracking-widest text-white/50">
            Strategy <span className="mx-4 text-[#FF4D00]">{'//'}{'//'}</span> Design <span className="mx-4 text-[#FF4D00]">{'//'}{'//'}</span> Development <span className="mx-4 text-[#FF4D00]">{'//'}{'//'}</span> Performance <span className="mx-4 text-[#FF4D00]">{'//'}{'//'}</span> Identity <span className="mx-4 text-[#FF4D00]">{'//'}{'//'}</span> Strategy <span className="mx-4 text-[#FF4D00]">{'//'}{'//'}</span> Design <span className="mx-4 text-[#FF4D00]">{'//'}{'//'}</span> Development <span className="mx-4 text-[#FF4D00]">{'//'}{'//'}</span> Performance <span className="mx-4 text-[#FF4D00]">{'//'}{'//'}</span> Identity <span className="mx-4 text-[#FF4D00]">{'//'}{'//'}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
