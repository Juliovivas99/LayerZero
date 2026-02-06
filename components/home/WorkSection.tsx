export default function WorkSection() {
  return (
    <section id="work" className="bg-[#F3F1ED] text-black">
      {/* Sticky Header for Section */}
      <div className="px-6 md:px-12 py-8 border-b border-black flex justify-between items-center sticky top-0 bg-[#F3F1ED] z-40">
        <h2 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 bg-[#FF4D00]"></span> Selected Cases
        </h2>
        <div className="text-xs font-mono">001 — 006</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 border-b border-black">
        
        {/* Case 1 (Span 8) */}
        <article className="lg:col-span-8 group border-b lg:border-b-0 lg:border-r border-black relative min-h-[60vh] flex flex-col justify-between overflow-hidden cursor-pointer">
          <div className="absolute inset-0 z-0 bg-[#EAE8E4] overflow-hidden">
            {/* Abstract UI Mockup */}
            <div className="w-full h-full relative hover-scale-img">
              <div className="absolute top-[20%] left-[10%] w-[80%] h-[120%] bg-white border-2 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-8">
                <div className="flex justify-between items-center mb-8">
                  <div className="w-12 h-12 bg-black rounded-full"></div>
                  <div className="w-32 h-4 bg-black/10"></div>
                </div>
                <div className="space-y-4">
                  <div className="w-full h-12 bg-gray-100"></div>
                  <div className="w-2/3 h-12 bg-gray-100"></div>
                  <div className="w-full h-64 bg-gray-100 mt-8"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-10 p-8 md:p-12 mt-auto bg-gradient-to-t from-[#F3F1ED] via-[#F3F1ED]/80 to-transparent pt-32">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 group-hover:underline decoration-2 underline-offset-4">Finite Finance</h3>
                <p className="text-lg opacity-60">Wealth management dashboard</p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 border border-black text-xs font-bold uppercase">React</span>
                <span className="px-3 py-1 border border-black text-xs font-bold uppercase">Fintech</span>
              </div>
            </div>
          </div>
        </article>

        {/* Case 2 (Span 4) */}
        <article className="lg:col-span-4 group border-b lg:border-b-0 border-black relative min-h-[60vh] flex flex-col justify-between overflow-hidden cursor-pointer bg-black text-white">
          <div className="absolute inset-0 z-0 opacity-40 hover-scale-img">
            {/* Abstract Gradient Graphic */}
            <div className="w-full h-full bg-gradient-to-br from-[#FF4D00] to-purple-900"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30"></div>
          </div>
          <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end">
            <h3 className="text-4xl font-bold tracking-tight mb-2 group-hover:text-[#FF4D00] transition-colors">Vanguard AI</h3>
            <p className="text-lg opacity-60 mb-6">LLM Infrastructure &amp; Vector Search</p>
            <ul className="text-sm font-mono space-y-2 border-t border-white/20 pt-4">
              <li className="flex justify-between"><span>Stack</span> <span>Python / Rust</span></li>
              <li className="flex justify-between"><span>Year</span> <span>2023</span></li>
            </ul>
          </div>
        </article>

        {/* Case 3 (Span 6) */}
        <article className="lg:col-span-6 group border-r border-b lg:border-b-0 border-black relative aspect-square md:aspect-auto md:min-h-[50vh] cursor-pointer bg-white">
          <div className="p-8 md:p-12 h-full flex flex-col">
            <div className="mb-auto flex justify-between items-start">
              <div className="w-16 h-16 bg-[#FF4D00] flex items-center justify-center text-white text-2xl font-bold rounded-none">
                S
              </div>
              <iconify-icon icon="solar:arrow-right-up-linear" className="text-3xl group-hover:rotate-45 transition-transform"></iconify-icon>
            </div>
            <div>
              <h3 className="text-3xl font-bold tracking-tight mb-2">Struct CRM</h3>
              <p className="opacity-60 max-w-sm">A minimalist CRM built for speed. Designed to reduce click-depth by 40%.</p>
            </div>
          </div>
        </article>

        {/* Case 4 (Span 6) */}
        <article className="lg:col-span-6 group relative aspect-square md:aspect-auto md:min-h-[50vh] cursor-pointer bg-[#F3F1ED]">
          <div className="absolute inset-8 border border-dashed border-black/30 group-hover:border-black transition-colors flex items-center justify-center">
            <div className="text-center">
              <iconify-icon icon="solar:lock-keyhole-minimalistic-linear" className="text-5xl mb-4"></iconify-icon>
              <h3 className="text-2xl font-bold tracking-tight">Project Onyx</h3>
              <p className="text-xs font-mono uppercase tracking-widest mt-2 bg-black text-white px-2 py-1 inline-block">Stealth Mode</p>
            </div>
          </div>
        </article>

      </div>
      
      <div className="p-4 md:p-8 text-center border-b border-black hover:bg-black hover:text-white transition-colors cursor-pointer group">
        <h3 className="text-[5vw] font-bold uppercase tracking-tighter leading-none group-hover:tracking-normal transition-all duration-500">
          View All Projects
        </h3>
      </div>
    </section>
  );
}
