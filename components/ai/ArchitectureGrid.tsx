export default function ArchitectureGrid() {
  return (
    <section id="architecture" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-[#F3F1ED]">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 sm:mb-12">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-3 sm:mb-4 leading-[0.9]">
              Core<br />Architecture
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-md text-[#0A0A0A]">
              We replace fragile, manual SOPs with robust, code-based agents. Choose your modules.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[280px] sm:auto-rows-[300px]">
        
        {/* Card 1: Growth */}
        <div className="group relative bg-white border-2 border-black p-6 sm:p-8 flex flex-col justify-between overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer">
          <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
            <iconify-icon icon="solar:graph-new-up-linear" width="100"></iconify-icon>
          </div>
          <div className="z-10">
            <div className="w-12 h-12 bg-[#FF4D00] flex items-center justify-center mb-4 text-white">
              <iconify-icon icon="solar:rocket-2-linear" width="24"></iconify-icon>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-[#0A0A0A]">Growth Engine</h3>
            <p className="text-sm text-[#666666] leading-relaxed">Multi-channel outbound systems. AI agents scrape, enrich, and qualify leads 24/7 before your sales team wakes up.</p>
          </div>
          <div className="mt-4 pt-4 border-t border-black/10">
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-xs text-[#0A0A0A] font-mono">
                <span className="text-[#FF4D00]">+</span> Waterfall Enrichment
              </li>
              <li className="flex items-center gap-2 text-xs text-[#0A0A0A] font-mono">
                <span className="text-[#FF4D00]">+</span> Personalized Sequencing
              </li>
            </ul>
          </div>
        </div>

        {/* Card 2: Ops (Featured - Large) */}
        <div className="md:col-span-2 group relative bg-[#0A0A0A] border-2 border-black p-6 sm:p-8 flex flex-col justify-between overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer">
          {/* Visual Background Element */}
          <div className="absolute inset-y-0 right-0 w-1/2 mask-sides opacity-10 hidden md:block">
            <div className="space-y-2 font-mono text-[10px] text-white/50 pt-8">
              <p>&gt; Initiating onboarding.js...</p>
              <p>&gt; Stripe webhook received_</p>
              <p>&gt; Generating contract PDF...</p>
              <p>&gt; Slack notification sent_</p>
              <p>&gt; Client folder created in Drive_</p>
            </div>
          </div>

          <div className="z-10 max-w-md">
            <div className="w-12 h-12 bg-[#FF4D00] flex items-center justify-center mb-4 text-white">
              <iconify-icon icon="solar:cpu-bolt-linear" width="24"></iconify-icon>
            </div>
            <h3 className="text-3xl font-bold text-[#F3F1ED] mb-3">Operations Autopilot</h3>
            <p className="text-base text-[#F3F1ED]/70 mb-6 leading-relaxed">
              The silent engine of your business. We automate the &quot;boring&quot; work: invoicing, onboarding, project setup, and reporting. Turn 10 hours of admin into 0.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 border border-white/20 text-[10px] text-[#F3F1ED] font-mono uppercase">n8n Orchestration</span>
              <span className="px-3 py-1 border border-white/20 text-[10px] text-[#F3F1ED] font-mono uppercase">Custom Python</span>
            </div>
          </div>
        </div>

        {/* Card 3: Data */}
        <div className="group relative bg-white border-2 border-black p-6 sm:p-8 flex flex-col justify-between overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer">
          <div className="absolute bottom-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity rotate-12 translate-y-4">
            <iconify-icon icon="solar:database-linear" width="120"></iconify-icon>
          </div>
          <div className="z-10">
            <div className="w-12 h-12 bg-[#FF4D00] flex items-center justify-center mb-4 text-white">
              <iconify-icon icon="solar:server-square-linear" width="24"></iconify-icon>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-[#0A0A0A]">Data Foundry</h3>
            <p className="text-sm text-[#666666] leading-relaxed">Unify your fragmented tools. We build a central database (Supabase/Postgres) that feeds clean data to your dashboards.</p>
          </div>
          <div className="mt-4 pt-4 border-t border-black/10">
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-xs text-[#0A0A0A] font-mono">
                <span className="text-[#FF4D00]">+</span> ETL Pipelines
              </li>
              <li className="flex items-center gap-2 text-xs text-[#0A0A0A] font-mono">
                <span className="text-[#FF4D00]">+</span> Real-time BI Dashboards
              </li>
            </ul>
          </div>
        </div>

        {/* Card 4: Support Agents */}
        <div className="md:col-span-2 group relative bg-white border-2 border-black p-6 sm:p-8 flex flex-row items-center justify-between overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer">
          <div className="z-10 max-w-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-[#FF4D00] flex items-center justify-center text-white">
                <iconify-icon icon="solar:chat-round-line-linear" width="24"></iconify-icon>
              </div>
              <h3 className="text-2xl font-bold text-[#0A0A0A]">Knowledge Agents</h3>
            </div>
            <p className="text-sm text-[#666666] leading-relaxed">
              Internal bots trained on your Wiki/Notion/Slack history. Ask questions, get answers instantly. No more &quot;where is that file?&quot;
            </p>
          </div>
          <div className="hidden sm:flex gap-4">
            <div className="w-14 h-14 border-2 border-black flex items-center justify-center relative bg-[#F3F1ED]">
              <iconify-icon icon="simple-icons:slack" className="text-black text-xl"></iconify-icon>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF4D00] border-2 border-white"></div>
            </div>
            <div className="w-14 h-14 border-2 border-black flex items-center justify-center bg-[#F3F1ED]">
              <iconify-icon icon="simple-icons:notion" className="text-black text-xl"></iconify-icon>
            </div>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
}
