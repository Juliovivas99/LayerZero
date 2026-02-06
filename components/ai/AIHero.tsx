import UnicornScene from "unicornstudio-react/next";

export default function AIHero() {
  return (
    <section className="relative pt-24 sm:pt-32 md:pt-40 pb-28 sm:pb-32 md:pb-40 overflow-hidden bg-[#050505] text-zinc-400">
      {/* Unicorn Studio WebGL Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <UnicornScene 
          projectId="lShQIWNKALfEqpQ4k9aD" 
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js"
          width="100%" 
          height="100%" 
        />
      </div>
      
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
            SYSTEM_STATUS: OPERATIONAL
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-6 sm:mb-8 max-w-5xl leading-tight">
            The neural nervous system<br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#f97316] to-[#c2410c]">for your enterprise.</span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-500 max-w-2xl font-light leading-relaxed mb-8 sm:mb-10 px-4 sm:px-0">
            We don&apos;t build chatbots. We engineer autonomous infrastructure. 
            Connect your data, logic, and actions into a self-healing operational machine.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center w-full sm:w-auto px-4 sm:px-0">
            <a href="#pricing" className="w-full sm:w-auto min-h-[48px] h-12 px-6 sm:px-8 rounded-lg bg-[#f97316] text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#ea580c] transition-all shadow-[0_0_30px_-5px_rgba(249,115,22,0.5)] touch-manipulation">
              <iconify-icon icon="solar:play-circle-linear" className="text-lg"></iconify-icon>
              Deploy Infrastructure
            </a>
            <a href="#architecture" className="w-full sm:w-auto min-h-[48px] h-12 px-6 sm:px-8 rounded-lg border border-white/10 bg-white/5 text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-all backdrop-blur-md touch-manipulation">
              <iconify-icon icon="solar:layers-minimalistic-linear" className="text-lg"></iconify-icon>
              View Stack
            </a>
          </div>

          {/* Code Visual (The "Terminal") */}
          <div className="mt-6 sm:mt-10 md:mt-16 mb-8 sm:mb-12 w-full max-w-3xl rounded-lg sm:rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden relative group">
            {/* Window Controls */}
            <div className="h-7 sm:h-8 border-b border-white/5 flex items-center px-2.5 sm:px-3 md:px-4 gap-1.5 sm:gap-2 bg-white/[0.02]">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
              <div className="ml-auto text-[8px] sm:text-[9px] md:text-[10px] font-mono text-zinc-600 hidden xs:block">setupclaw_agent.py</div>
            </div>
            {/* Code Content */}
            <div className="p-3 sm:p-5 md:p-6 text-left font-mono text-[9px] xs:text-[10px] sm:text-xs md:text-sm text-zinc-400 leading-relaxed overflow-x-auto">
              <div className="flex"><span className="text-zinc-600 w-6 sm:w-8 select-none">1</span><span className="text-purple-400">import</span> <span className="text-white">SetupClaw</span> <span className="text-purple-400">as</span> <span className="text-white">sc</span></div>
              <div className="flex"><span className="text-zinc-600 w-6 sm:w-8 select-none">2</span></div>
              <div className="flex"><span className="text-zinc-600 w-6 sm:w-8 select-none">3</span><span className="text-zinc-500"># Initialize agent swarm</span></div>
              <div className="flex"><span className="text-zinc-600 w-6 sm:w-8 select-none">4</span><span className="text-blue-400">class</span> <span className="text-yellow-200">RevenueEngine</span>:</div>
              <div className="flex"><span className="text-zinc-600 w-6 sm:w-8 select-none">5</span><span className="pl-3 sm:pl-4 text-blue-400">def</span> <span className="text-yellow-200">__init__</span>(<span className="text-orange-300">self</span>):</div>
              <div className="flex"><span className="text-zinc-600 w-6 sm:w-8 select-none">6</span><span className="pl-6 sm:pl-8 text-orange-300">self</span>.enrichment = sc.Agent(<span className="text-green-400">&quot;Clearbit&quot;</span>)</div>
              <div className="flex"><span className="text-zinc-600 w-6 sm:w-8 select-none">7</span><span className="pl-6 sm:pl-8 text-orange-300">self</span>.crm = sc.Connect(<span className="text-green-400">&quot;HubSpot&quot;</span>)</div>
              <div className="flex"><span className="text-zinc-600 w-6 sm:w-8 select-none">8</span><span className="pl-6 sm:pl-8 text-orange-300">self</span>.outreach = sc.LLM(<span className="text-green-400">&quot;GPT-4o&quot;</span>)</div>
              <div className="hidden sm:flex"><span className="text-zinc-600 w-6 sm:w-8 select-none">9</span></div>
              <div className="hidden sm:flex"><span className="text-zinc-600 w-6 sm:w-8 select-none">10</span><span className="pl-3 sm:pl-4 text-blue-400">async def</span> <span className="text-yellow-200">execute_workflow</span>(<span className="text-orange-300">self</span>, lead):</div>
              <div className="hidden sm:flex"><span className="text-zinc-600 w-6 sm:w-8 select-none">11</span><span className="pl-6 sm:pl-8 text-purple-400">await</span> <span className="text-orange-300">self</span>.enrichment.process(lead)</div>
              <div className="hidden sm:flex"><span className="text-zinc-600 w-6 sm:w-8 select-none">12</span><span className="pl-6 sm:pl-8 text-purple-400">if</span> lead.score &gt; <span className="text-orange-400">80</span>:</div>
              <div className="hidden sm:flex"><span className="text-zinc-600 w-6 sm:w-8 select-none">13</span><span className="pl-10 sm:pl-12 text-zinc-300 typing-cursor">return self.outreach.generate(lead)</span></div>
            </div>
            {/* Status Bar */}
            <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-zinc-900 border border-white/10 px-2 sm:px-3 py-1 rounded text-[9px] sm:text-[10px] font-mono text-green-400 flex items-center gap-1.5 sm:gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="hidden xs:inline">connected: wss://api.setupclaw.com</span>
              <span className="xs:hidden">connected</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Integrations Label */}
      <div className="absolute bottom-[101px] left-4 sm:left-6 md:left-8">
        <span className="text-[10px] sm:text-xs font-mono text-[#f97316] uppercase tracking-[0.2em]">integrations</span>
      </div>
      
      {/* Tech Stack Marquee - PRESERVED FROM ORIGINAL */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/5 bg-[#F3F1ED] overflow-hidden py-8">
        <div className="marquee-container">
          <div className="marquee-content items-center gap-12">
            {/* Chat Providers */}
            <iconify-icon icon="logos:whatsapp-icon" className="text-4xl flex-shrink-0 mx-6"></iconify-icon>
            <iconify-icon icon="logos:telegram" className="text-4xl flex-shrink-0 mx-6"></iconify-icon>
            <iconify-icon icon="logos:discord-icon" className="text-4xl flex-shrink-0 mx-6"></iconify-icon>
            <iconify-icon icon="logos:slack-icon" className="text-4xl flex-shrink-0 mx-6"></iconify-icon>
            <iconify-icon icon="simple-icons:signal" className="text-4xl flex-shrink-0 mx-6 text-[#3A76F0]"></iconify-icon>
            <iconify-icon icon="simple-icons:imessage" className="text-4xl flex-shrink-0 mx-6 text-[#0066FF]"></iconify-icon>
            <iconify-icon icon="logos:microsoft-teams" className="text-4xl flex-shrink-0 mx-6"></iconify-icon>
            <iconify-icon icon="simple-icons:matrix" className="text-4xl flex-shrink-0 mx-6 text-[#000000]"></iconify-icon>
            <iconify-icon icon="simple-icons:nostr" className="text-4xl flex-shrink-0 mx-6 text-[#8E30EB]"></iconify-icon>
            
            {/* AI Models */}
            <iconify-icon icon="simple-icons:anthropic" className="text-4xl flex-shrink-0 mx-6 text-[#D4A574]"></iconify-icon>
            <iconify-icon icon="simple-icons:openai" className="text-4xl flex-shrink-0 mx-6 text-[#412991]"></iconify-icon>
            <iconify-icon icon="logos:google-icon" className="text-4xl flex-shrink-0 mx-6"></iconify-icon>
            <iconify-icon icon="simple-icons:mistral" className="text-4xl flex-shrink-0 mx-6 text-[#FF7000]"></iconify-icon>
            <iconify-icon icon="simple-icons:perplexity" className="text-4xl flex-shrink-0 mx-6 text-[#20808D]"></iconify-icon>
            <iconify-icon icon="simple-icons:huggingface" className="text-4xl flex-shrink-0 mx-6 text-[#FFD21E]"></iconify-icon>
            <iconify-icon icon="simple-icons:ollama" className="text-4xl flex-shrink-0 mx-6 text-[#000000]"></iconify-icon>
            
            {/* Productivity */}
            <iconify-icon icon="logos:notion-icon" className="text-4xl flex-shrink-0 mx-6"></iconify-icon>
            <iconify-icon icon="simple-icons:obsidian" className="text-4xl flex-shrink-0 mx-6 text-[#7C3AED]"></iconify-icon>
            <iconify-icon icon="logos:github-icon" className="text-4xl flex-shrink-0 mx-6"></iconify-icon>
            <iconify-icon icon="logos:trello" className="text-4xl flex-shrink-0 mx-6"></iconify-icon>
            <iconify-icon icon="logos:apple" className="text-4xl flex-shrink-0 mx-6"></iconify-icon>
            
            {/* Music & Audio */}
            <iconify-icon icon="logos:spotify-icon" className="text-4xl flex-shrink-0 mx-6"></iconify-icon>
            <iconify-icon icon="simple-icons:sonos" className="text-4xl flex-shrink-0 mx-6 text-[#000000]"></iconify-icon>
            <iconify-icon icon="simple-icons:shazam" className="text-4xl flex-shrink-0 mx-6 text-[#0088FF]"></iconify-icon>
            
            {/* Smart Home */}
            <iconify-icon icon="simple-icons:philipshue" className="text-4xl flex-shrink-0 mx-6 text-[#0E4194]"></iconify-icon>
            <iconify-icon icon="simple-icons:homeassistant" className="text-4xl flex-shrink-0 mx-6 text-[#41BDF5]"></iconify-icon>
            
            {/* Tools & Automation */}
            <iconify-icon icon="logos:chrome" className="text-4xl flex-shrink-0 mx-6"></iconify-icon>
            <iconify-icon icon="logos:google-gmail" className="text-4xl flex-shrink-0 mx-6"></iconify-icon>
            <iconify-icon icon="logos:1password" className="text-4xl flex-shrink-0 mx-6"></iconify-icon>
            
            {/* Social */}
            <iconify-icon icon="logos:twitter" className="text-4xl flex-shrink-0 mx-6"></iconify-icon>
            
            {/* Duplicate for seamless loop */}
            <iconify-icon icon="logos:whatsapp-icon" className="text-4xl flex-shrink-0 mx-6"></iconify-icon>
            <iconify-icon icon="logos:telegram" className="text-4xl flex-shrink-0 mx-6"></iconify-icon>
            <iconify-icon icon="logos:discord-icon" className="text-4xl flex-shrink-0 mx-6"></iconify-icon>
            <iconify-icon icon="logos:slack-icon" className="text-4xl flex-shrink-0 mx-6"></iconify-icon>
            <iconify-icon icon="simple-icons:signal" className="text-4xl flex-shrink-0 mx-6 text-[#3A76F0]"></iconify-icon>
            <iconify-icon icon="simple-icons:imessage" className="text-4xl flex-shrink-0 mx-6 text-[#0066FF]"></iconify-icon>
            <iconify-icon icon="logos:microsoft-teams" className="text-4xl flex-shrink-0 mx-6"></iconify-icon>
            <iconify-icon icon="simple-icons:matrix" className="text-4xl flex-shrink-0 mx-6 text-[#000000]"></iconify-icon>
            <iconify-icon icon="simple-icons:nostr" className="text-4xl flex-shrink-0 mx-6 text-[#8E30EB]"></iconify-icon>
            <iconify-icon icon="simple-icons:anthropic" className="text-4xl flex-shrink-0 mx-6 text-[#D4A574]"></iconify-icon>
            <iconify-icon icon="simple-icons:openai" className="text-4xl flex-shrink-0 mx-6 text-[#412991]"></iconify-icon>
            <iconify-icon icon="logos:google-icon" className="text-4xl flex-shrink-0 mx-6"></iconify-icon>
            <iconify-icon icon="simple-icons:mistral" className="text-4xl flex-shrink-0 mx-6 text-[#FF7000]"></iconify-icon>
            <iconify-icon icon="simple-icons:perplexity" className="text-4xl flex-shrink-0 mx-6 text-[#20808D]"></iconify-icon>
            <iconify-icon icon="simple-icons:huggingface" className="text-4xl flex-shrink-0 mx-6 text-[#FFD21E]"></iconify-icon>
            <iconify-icon icon="simple-icons:ollama" className="text-4xl flex-shrink-0 mx-6 text-[#000000]"></iconify-icon>
            <iconify-icon icon="logos:notion-icon" className="text-4xl flex-shrink-0 mx-6"></iconify-icon>
            <iconify-icon icon="simple-icons:obsidian" className="text-4xl flex-shrink-0 mx-6 text-[#7C3AED]"></iconify-icon>
            <iconify-icon icon="logos:github-icon" className="text-4xl flex-shrink-0 mx-6"></iconify-icon>
            <iconify-icon icon="logos:trello" className="text-4xl flex-shrink-0 mx-6"></iconify-icon>
            <iconify-icon icon="logos:apple" className="text-4xl flex-shrink-0 mx-6"></iconify-icon>
            <iconify-icon icon="logos:spotify-icon" className="text-4xl flex-shrink-0 mx-6"></iconify-icon>
            <iconify-icon icon="simple-icons:sonos" className="text-4xl flex-shrink-0 mx-6 text-[#000000]"></iconify-icon>
            <iconify-icon icon="simple-icons:shazam" className="text-4xl flex-shrink-0 mx-6 text-[#0088FF]"></iconify-icon>
            <iconify-icon icon="simple-icons:philipshue" className="text-4xl flex-shrink-0 mx-6 text-[#0E4194]"></iconify-icon>
            <iconify-icon icon="simple-icons:homeassistant" className="text-4xl flex-shrink-0 mx-6 text-[#41BDF5]"></iconify-icon>
            <iconify-icon icon="logos:chrome" className="text-4xl flex-shrink-0 mx-6"></iconify-icon>
            <iconify-icon icon="logos:google-gmail" className="text-4xl flex-shrink-0 mx-6"></iconify-icon>
            <iconify-icon icon="logos:1password" className="text-4xl flex-shrink-0 mx-6"></iconify-icon>
            <iconify-icon icon="logos:twitter" className="text-4xl flex-shrink-0 mx-6"></iconify-icon>
          </div>
        </div>
      </div>
    </section>
  );
}
