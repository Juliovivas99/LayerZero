export default function ProcessTimeline() {
  return (
    <section id="process" className="py-16 sm:py-20 md:py-24 bg-[#0A0A0A] text-[#F3F1ED]">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-3 sm:mb-4">Deployment Protocol</h2>
          <p className="text-base sm:text-lg md:text-xl text-[#F3F1ED]/70 mt-2 px-4 sm:px-0">From audit to autonomous execution in 4 weeks.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px bg-white/20 sm:-translate-x-1/2"></div>

          {/* Step 1 */}
          <div className="relative flex flex-col sm:flex-row items-center justify-between mb-12 sm:mb-16 group">
            <div className="sm:w-5/12 sm:text-right pl-14 sm:pl-0 order-1 mb-4 sm:mb-0">
              <h3 className="text-[#F3F1ED] font-bold text-lg sm:text-xl mb-2">Deep Dive Audit</h3>
              <p className="text-sm sm:text-base text-[#F3F1ED]/70 leading-relaxed">We map your current logic flow. Identification of bottlenecks and API feasibility check.</p>
            </div>
            <div className="absolute left-5 sm:left-1/2 w-4 h-4 bg-[#F3F1ED] border-2 border-[#0A0A0A] -translate-x-[7px] sm:-translate-x-[7px] z-10 group-hover:bg-[#FF4D00] transition-colors"></div>
            <div className="sm:w-5/12 pl-14 sm:pl-0 order-1">
              <span className="inline-block px-3 py-1 border border-white/20 text-[10px] sm:text-xs font-mono text-[#F3F1ED] uppercase">Week 01</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col sm:flex-row items-center justify-between mb-12 sm:mb-16 group">
            <div className="sm:w-5/12 sm:text-right pl-14 sm:pl-0 order-1 sm:order-1 mb-4 sm:mb-0">
              <span className="inline-block px-3 py-1 border border-white/20 text-[10px] sm:text-xs font-mono text-[#F3F1ED] uppercase">Week 02-03</span>
            </div>
            <div className="absolute left-5 sm:left-1/2 w-4 h-4 bg-[#F3F1ED] border-2 border-[#0A0A0A] -translate-x-[7px] sm:-translate-x-[7px] z-10 group-hover:bg-[#FF4D00] transition-colors"></div>
            <div className="sm:w-5/12 pl-14 sm:pl-0 order-1 sm:order-1">
              <h3 className="text-[#F3F1ED] font-bold text-lg sm:text-xl mb-2">Development &amp; Logic</h3>
              <p className="text-sm sm:text-base text-[#F3F1ED]/70 leading-relaxed">Code-first implementation. We build the webhooks, configure the LLM prompts, and set up error handling.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col sm:flex-row items-center justify-between group">
            <div className="sm:w-5/12 sm:text-right pl-14 sm:pl-0 order-1 mb-4 sm:mb-0">
              <h3 className="text-[#F3F1ED] font-bold text-lg sm:text-xl mb-2">Live Handover</h3>
              <p className="text-sm sm:text-base text-[#F3F1ED]/70 leading-relaxed">Deployment to your environment. Includes Loom documentation, SOPs, and team training.</p>
            </div>
            <div className="absolute left-5 sm:left-1/2 w-4 h-4 bg-[#FF4D00] border-2 border-[#0A0A0A] -translate-x-[7px] sm:-translate-x-[7px] z-10"></div>
            <div className="sm:w-5/12 pl-14 sm:pl-0 order-1">
              <span className="inline-block px-3 py-1 bg-[#FF4D00] border border-[#FF4D00] text-[10px] sm:text-xs font-mono text-black uppercase font-bold">Week 04</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
