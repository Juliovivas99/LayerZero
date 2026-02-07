export default function ProcessTimeline() {
  return (
    <section id="process" className="py-16 sm:py-20 md:py-24 bg-[#0A0A0A] text-[#F3F1ED]">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-3 sm:mb-4">How It Works</h2>
          <p className="text-base sm:text-lg md:text-xl text-[#F3F1ED]/70 mt-2 px-4 sm:px-0">From blueprint to production in 4 weeks.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-white/20 sm:-translate-x-1/2"></div>

          {/* Step 1 */}
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 sm:mb-16 group">
            <div className="w-full sm:w-5/12 sm:text-right pl-16 sm:pl-0 mb-4 sm:mb-0">
              <h3 className="text-[#F3F1ED] font-bold text-lg sm:text-xl mb-2">Blueprint Session</h3>
              <p className="text-sm sm:text-base text-[#F3F1ED]/70 leading-relaxed">Map workflows, define success metrics, and produce a build-ready scope.</p>
            </div>
            <div className="absolute left-6 sm:left-1/2 top-0 sm:top-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-[#F3F1ED] border-2 border-[#0A0A0A] -translate-x-1/2 sm:-translate-y-1/2 z-10 group-hover:bg-[#FF4D00] transition-colors"></div>
            <div className="w-full sm:w-5/12 pl-16 sm:pl-0">
              <span className="inline-block px-3 py-1 border border-white/20 text-[10px] sm:text-xs font-mono text-[#F3F1ED] uppercase">Week 01</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 sm:mb-16 group">
            <div className="w-full sm:w-5/12 sm:text-right pl-16 sm:pl-0 mb-4 sm:mb-0">
              <span className="inline-block px-3 py-1 border border-white/20 text-[10px] sm:text-xs font-mono text-[#F3F1ED] uppercase mb-3 sm:mb-0">Week 02</span>
            </div>
            <div className="absolute left-6 sm:left-1/2 top-0 sm:top-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-[#F3F1ED] border-2 border-[#0A0A0A] -translate-x-1/2 sm:-translate-y-1/2 z-10 group-hover:bg-[#FF4D00] transition-colors"></div>
            <div className="w-full sm:w-5/12 pl-16 sm:pl-0">
              <h3 className="text-[#F3F1ED] font-bold text-lg sm:text-xl mb-2">Build</h3>
              <p className="text-sm sm:text-base text-[#F3F1ED]/70 leading-relaxed">Deploy production automations integrated into your existing stack.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 sm:mb-16 group">
            <div className="w-full sm:w-5/12 sm:text-right pl-16 sm:pl-0 mb-4 sm:mb-0">
              <h3 className="text-[#F3F1ED] font-bold text-lg sm:text-xl mb-2">Hypercare</h3>
              <p className="text-sm sm:text-base text-[#F3F1ED]/70 leading-relaxed">30 days of monitoring, fixes, and adjustments as your team adopts the new system.</p>
            </div>
            <div className="absolute left-6 sm:left-1/2 top-0 sm:top-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-[#F3F1ED] border-2 border-[#0A0A0A] -translate-x-1/2 sm:-translate-y-1/2 z-10 group-hover:bg-[#FF4D00] transition-colors"></div>
            <div className="w-full sm:w-5/12 pl-16 sm:pl-0">
              <span className="inline-block px-3 py-1 border border-white/20 text-[10px] sm:text-xs font-mono text-[#F3F1ED] uppercase">Week 03</span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between group">
            <div className="w-full sm:w-5/12 sm:text-right pl-16 sm:pl-0 mb-4 sm:mb-0">
              <span className="inline-block px-3 py-1 bg-[#FF4D00] border border-[#FF4D00] text-[10px] sm:text-xs font-mono text-black uppercase font-bold mb-3 sm:mb-0">Week 04+</span>
            </div>
            <div className="absolute left-6 sm:left-1/2 top-0 sm:top-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-[#FF4D00] border-2 border-[#0A0A0A] -translate-x-1/2 sm:-translate-y-1/2 z-10"></div>
            <div className="w-full sm:w-5/12 pl-16 sm:pl-0">
              <h3 className="text-[#F3F1ED] font-bold text-lg sm:text-xl mb-2">Managed Momentum</h3>
              <p className="text-sm sm:text-base text-[#F3F1ED]/70 leading-relaxed">Continuous optimization, new workflows, and priority support.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
