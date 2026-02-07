export default function WhyUs() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-white">
      <div className="max-w-[1920px] mx-auto">
        
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-[#0A0A0A]">
            Why Layer Zero Studio
          </h2>
          <p className="text-base sm:text-lg text-[#666666] max-w-2xl mx-auto">
            We're not another chatbot wrapper or automation agency. We're infrastructure engineers who build production-grade AI systems.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* DIY Column */}
          <div className="border-2 border-black p-8">
            <div className="text-center mb-6">
              <div className="text-sm font-mono text-[#666666] uppercase tracking-wider mb-2">Option 1</div>
              <h3 className="text-2xl font-bold text-[#0A0A0A]">DIY Open Source</h3>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span className="text-[#666666]">40+ hours learning + setup</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span className="text-[#666666]">Security vulnerabilities if misconfigured</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span className="text-[#666666]">Ongoing maintenance burden</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span className="text-[#666666]">No support when things break</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-[#666666]">Free (except your time)</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t-2 border-black/10">
              <p className="text-xs text-[#666666] font-mono">Best for: Engineers with 40+ hours to spare</p>
            </div>
          </div>

          {/* Layer Zero Column */}
          <div className="border-2 border-[#f97316] bg-[#0A0A0A] p-8 text-[#F3F1ED] relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f97316] text-white text-xs font-bold px-4 py-1 uppercase whitespace-nowrap">
              Recommended
            </div>
            <div className="text-center mb-6 mt-2">
              <div className="text-sm font-mono text-[#f97316] uppercase tracking-wider mb-2">Option 2</div>
              <h3 className="text-2xl font-bold">Layer Zero Studio</h3>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-[#F3F1ED]/80">Same-day deployment (5-8 hours)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-[#F3F1ED]/80">Security hardening included</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-[#F3F1ED]/80">Optional managed care ($1,875+/mo)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-[#F3F1ED]/80">Dedicated Slack support channel</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <span className="text-[#F3F1ED]/80">White-glove OR custom builds</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t-2 border-white/10">
              <p className="text-xs text-[#f97316] font-mono">Best for: Companies that need leverage now</p>
            </div>
          </div>

          {/* Traditional Agency Column */}
          <div className="border-2 border-black p-8">
            <div className="text-center mb-6">
              <div className="text-sm font-mono text-[#666666] uppercase tracking-wider mb-2">Option 3</div>
              <h3 className="text-2xl font-bold text-[#0A0A0A]">Traditional Agency</h3>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span className="text-[#666666]">$50k-200k+ for "discovery"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span className="text-[#666666]">6-12 month timelines</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span className="text-[#666666]">Vendor lock-in, no code ownership</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span className="text-[#666666]">Bloated tech stack</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-[#666666]">Enterprise sales process</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t-2 border-black/10">
              <p className="text-xs text-[#666666] font-mono">Best for: Enterprises with $500k+ budgets</p>
            </div>
          </div>

        </div>

        {/* Key Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-[#F3F1ED] border-2 border-black p-6">
            <div className="w-12 h-12 bg-[#f97316] flex items-center justify-center mb-4 text-white">
              <iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
            </div>
            <h4 className="font-bold mb-2 text-[#0A0A0A]">Security-First</h4>
            <p className="text-sm text-[#666666] leading-relaxed">
              We follow hardening protocols: least privilege, audit logging, credential management, and allowlist-only access. Pass InfoSec review.
            </p>
          </div>

          <div className="bg-[#F3F1ED] border-2 border-black p-6">
            <div className="w-12 h-12 bg-[#f97316] flex items-center justify-center mb-4 text-white">
              <iconify-icon icon="solar:code-linear" width="24"></iconify-icon>
            </div>
            <h4 className="font-bold mb-2 text-[#0A0A0A]">Code Ownership</h4>
            <p className="text-sm text-[#666666] leading-relaxed">
              For custom builds, you own 100% of the code. No vendor lock-in. Open-source deployments mean you control the config. Full transparency.
            </p>
          </div>

          <div className="bg-[#F3F1ED] border-2 border-black p-6">
            <div className="w-12 h-12 bg-[#f97316] flex items-center justify-center mb-4 text-white">
              <iconify-icon icon="solar:cpu-bolt-linear" width="24"></iconify-icon>
            </div>
            <h4 className="font-bold mb-2 text-[#0A0A0A]">Production-Grade</h4>
            <p className="text-sm text-[#666666] leading-relaxed">
              Not prototype demos. We build error handling, monitoring, fallback logic, and CI/CD from day one. Systems that actually work at scale.
            </p>
          </div>

          <div className="bg-[#F3F1ED] border-2 border-black p-6">
            <div className="w-12 h-12 bg-[#f97316] flex items-center justify-center mb-4 text-white">
              <iconify-icon icon="solar:rocket-2-linear" width="24"></iconify-icon>
            </div>
            <h4 className="font-bold mb-2 text-[#0A0A0A]">Fast Execution</h4>
            <p className="text-sm text-[#666666] leading-relaxed">
              White-glove deployments in hours. Custom builds in weeks, not months. We don't do "discovery phases"—we build and iterate.
            </p>
          </div>

        </div>

        {/* Technology Agnostic */}
        <div className="mt-16 text-center border-2 border-black p-8 sm:p-12 bg-[#F3F1ED]">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[#0A0A0A]">Technology Agnostic</h3>
          <p className="text-base text-[#666666] mb-8 max-w-3xl mx-auto leading-relaxed">
            We're not married to any single tool or framework. OpenClaw for exec workflows, Ollama for local LLMs, custom Python for complex pipelines, LangChain for RAG systems, FastAPI for APIs, Postgres for databases. We pick the right tool for your use case.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 border-2 border-black bg-white font-mono">OpenClaw</span>
            <span className="px-4 py-2 border-2 border-black bg-white font-mono">Llama 3</span>
            <span className="px-4 py-2 border-2 border-black bg-white font-mono">Mixtral</span>
            <span className="px-4 py-2 border-2 border-black bg-white font-mono">LangChain</span>
            <span className="px-4 py-2 border-2 border-black bg-white font-mono">Python</span>
            <span className="px-4 py-2 border-2 border-black bg-white font-mono">TypeScript</span>
            <span className="px-4 py-2 border-2 border-black bg-white font-mono">Ollama</span>
            <span className="px-4 py-2 border-2 border-black bg-white font-mono">FastAPI</span>
            <span className="px-4 py-2 border-2 border-black bg-white font-mono">Postgres</span>
          </div>
        </div>

      </div>
    </section>
  );
}
