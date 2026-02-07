'use client';

export default function DeploymentHero() {

  return (
    <section className="relative pt-24 sm:pt-32 md:pt-40 pb-28 sm:pb-32 md:pb-40 overflow-hidden bg-[#050505] text-zinc-400">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-0 inset-x-0 h-[600px] hero-glow pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Terminal Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#f97316]/20 bg-[#f97316]/5 text-[#f97316] text-[10px] sm:text-[11px] font-mono mb-6 sm:mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f97316] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f97316]"></span>
            </span>
            WHITE-GLOVE DEPLOYMENT
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-6 sm:mb-8 max-w-5xl leading-tight">
            Deploy AI infrastructure.<br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#f97316] to-[#c2410c]">Same day. Your hardware.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-500 max-w-2xl font-light leading-relaxed mb-8 sm:mb-10 px-4 sm:px-0">
            Professional deployment and maintenance of OpenClaw agents, on-premise LLMs, and custom AI systems. Security hardening included. In-person (Miami) or remote worldwide.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center w-full sm:w-auto px-4 sm:px-0">
            <a href="#deployment" className="w-full sm:w-auto min-h-[48px] h-12 px-6 sm:px-8 rounded-lg bg-[#f97316] text-white font-medium text-sm flex items-center justify-center hover:bg-[#ea580c] transition-all shadow-[0_0_30px_-5px_rgba(249,115,22,0.5)] touch-manipulation">
              See deployment options
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
