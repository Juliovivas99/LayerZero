'use client';

export default function CustomBuildsHero() {

  return (
    <section className="relative pt-24 sm:pt-32 md:pt-40 pb-28 sm:pb-32 md:pb-40 overflow-hidden bg-[#050505]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-0 inset-x-0 h-[600px] hero-glow pointer-events-none"></div>

      {/* Large gradient orb for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#f97316]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#f97316]/20 bg-[#f97316]/5 text-[#f97316] text-[10px] sm:text-[11px] font-mono mb-6 sm:mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f97316] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f97316]"></span>
            </span>
            CUSTOM INFRASTRUCTURE BUILDS
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-6 sm:mb-8 max-w-5xl leading-tight">
            When Your Workflows Are<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#f97316] to-[#c2410c]">Your Competitive Edge</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-500 max-w-2xl font-light leading-relaxed mb-12 sm:mb-16 px-4 sm:px-0">
            Standard tools and pre-built agents work for 80% of use cases. But when your workflows are your competitive advantage, you need systems built from the ground up—engineered precisely for your business.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16 w-full max-w-3xl px-4">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-xs sm:text-sm text-zinc-500 font-light">Custom Built</div>
            </div>
            <div className="text-center border-l border-r border-white/10">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">2-4 wks</div>
              <div className="text-xs sm:text-sm text-zinc-500 font-light">To Production</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-xs sm:text-sm text-zinc-500 font-light">Monitoring</div>
            </div>
          </div>

          {/* Visual Element - Architecture Diagram */}
          <div className="w-full max-w-4xl rounded-lg sm:rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden relative group">
            {/* Window Controls */}
            <div className="h-7 sm:h-8 border-b border-white/5 flex items-center px-2.5 sm:px-3 md:px-4 gap-1.5 sm:gap-2 bg-white/[0.02]">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              <div className="ml-auto text-[8px] sm:text-[9px] md:text-[10px] font-mono text-zinc-600 hidden xs:block">custom_workflow.yaml</div>
            </div>
            
            {/* Content */}
            <div className="p-6 sm:p-8 md:p-10">
              <div className="flex flex-col gap-6">
                {/* Workflow Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#f97316]/10 border border-[#f97316]/20 flex items-center justify-center">
                      <iconify-icon icon="solar:widget-5-bold-duotone" className="text-[#f97316] text-xl"></iconify-icon>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Custom Pipeline</div>
                      <div className="text-xs text-zinc-500 font-mono">production.layer0.studio</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs text-green-400 font-mono hidden sm:block">RUNNING</span>
                  </div>
                </div>

                {/* Workflow Steps */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 group/item hover:bg-white/5 p-2 rounded-lg transition-colors">
                    <div className="w-8 h-8 rounded bg-zinc-800/50 border border-white/10 flex items-center justify-center text-zinc-400 text-xs font-mono">1</div>
                    <div className="flex-1">
                      <div className="text-sm text-white">Data Enrichment</div>
                      <div className="text-xs text-zinc-500 font-mono">Clearbit + LinkedIn + Internal DB</div>
                    </div>
                    <iconify-icon icon="solar:check-circle-bold" className="text-green-400 text-lg"></iconify-icon>
                  </div>

                  <div className="flex items-center gap-3 group/item hover:bg-white/5 p-2 rounded-lg transition-colors">
                    <div className="w-8 h-8 rounded bg-zinc-800/50 border border-white/10 flex items-center justify-center text-zinc-400 text-xs font-mono">2</div>
                    <div className="flex-1">
                      <div className="text-sm text-white">Scoring Algorithm</div>
                      <div className="text-xs text-zinc-500 font-mono">Multi-factor weighted analysis</div>
                    </div>
                    <iconify-icon icon="solar:check-circle-bold" className="text-green-400 text-lg"></iconify-icon>
                  </div>

                  <div className="flex items-center gap-3 group/item hover:bg-white/5 p-2 rounded-lg transition-colors">
                    <div className="w-8 h-8 rounded bg-zinc-800/50 border border-white/10 flex items-center justify-center text-zinc-400 text-xs font-mono">3</div>
                    <div className="flex-1">
                      <div className="text-sm text-white">CRM Update</div>
                      <div className="text-xs text-zinc-500 font-mono">HubSpot + Slack notification</div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-[#f97316] animate-pulse"></div>
                      <div className="w-1 h-1 rounded-full bg-[#f97316] animate-pulse animation-delay-200"></div>
                      <div className="w-1 h-1 rounded-full bg-[#f97316] animate-pulse animation-delay-400"></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 group/item hover:bg-white/5 p-2 rounded-lg transition-colors opacity-50">
                    <div className="w-8 h-8 rounded bg-zinc-800/50 border border-white/10 flex items-center justify-center text-zinc-400 text-xs font-mono">4</div>
                    <div className="flex-1">
                      <div className="text-sm text-white">Outreach Trigger</div>
                      <div className="text-xs text-zinc-500 font-mono">GPT-4 personalization engine</div>
                    </div>
                    <iconify-icon icon="solar:clock-circle-linear" className="text-zinc-600 text-lg"></iconify-icon>
                  </div>
                </div>

                {/* Stats Footer */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-4">
                    <span className="text-zinc-500">Processed: <span className="text-white font-mono">1,247</span></span>
                    <span className="text-zinc-500">Avg Time: <span className="text-white font-mono">2.3s</span></span>
                  </div>
                  <div className="text-zinc-500 font-mono">Uptime: <span className="text-green-400">99.9%</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
