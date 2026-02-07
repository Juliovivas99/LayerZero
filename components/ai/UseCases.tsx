'use client';

import { useContactModal } from '@/components/ContactModalProvider';

export default function UseCases() {
  const { openContactModal } = useContactModal();
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-[#0A0A0A] text-[#F3F1ED]">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-3">
            How Companies Use Our Systems
          </h2>
          <p className="text-sm sm:text-base text-[#F3F1ED]/70 max-w-2xl mx-auto">
            Real deployments solving real problems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          
          {/* Use Case 1: CEO Inbox */}
          <div className="bg-white/5 border border-white/10 p-6 backdrop-blur-sm">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 bg-[#f97316] flex items-center justify-center text-white flex-shrink-0">
                <iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
              </div>
              <div>
                <div className="text-[10px] font-mono text-[#f97316] uppercase tracking-wider mb-1">Executive Agent</div>
                <h3 className="text-lg font-bold">CEO Cleared 6,000 Emails in One Day</h3>
              </div>
            </div>
            <p className="text-xs text-[#F3F1ED]/70 mb-4 leading-relaxed">
              <span className="text-[#F3F1ED] font-medium">Company:</span> Series A SaaS, 12 employees<br />
              <span className="text-[#F3F1ED] font-medium">Solution:</span> OpenClaw agent with custom rules
            </p>
            <div className="border-t border-white/10 pt-4">
              <ul className="space-y-1.5 text-xs text-[#F3F1ED]/60">
                <li className="flex items-center gap-2">
                  <span className="text-[#f97316]">→</span> 6,000 emails processed in 24 hours
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#f97316]">→</span> 3 hrs/day → 20 min/day inbox time
                </li>
              </ul>
            </div>
          </div>

          {/* Use Case 2: Private LLM */}
          <div className="bg-white/5 border border-white/10 p-6 backdrop-blur-sm">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 bg-[#f97316] flex items-center justify-center text-white flex-shrink-0">
                <iconify-icon icon="solar:lock-keyhole-minimalistic-linear" width="20"></iconify-icon>
              </div>
              <div>
                <div className="text-[10px] font-mono text-[#f97316] uppercase tracking-wider mb-1">On-Premise LLM</div>
                <h3 className="text-lg font-bold">Law Firm Deploys Private AI</h3>
              </div>
            </div>
            <p className="text-xs text-[#F3F1ED]/70 mb-4 leading-relaxed">
              <span className="text-[#F3F1ED] font-medium">Company:</span> Boutique law firm, 8 attorneys<br />
              <span className="text-[#F3F1ED] font-medium">Solution:</span> Llama 3 70B on-premise with RAG
            </p>
            <div className="border-t border-white/10 pt-4">
              <ul className="space-y-1.5 text-xs text-[#F3F1ED]/60">
                <li className="flex items-center gap-2">
                  <span className="text-[#f97316]">→</span> 100% data sovereignty
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#f97316]">→</span> Research time: 4 hrs → 30 min
                </li>
              </ul>
            </div>
          </div>

          {/* Use Case 3: Revenue Operations */}
          <div className="bg-white/5 border border-white/10 p-6 backdrop-blur-sm">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 bg-[#f97316] flex items-center justify-center text-white flex-shrink-0">
                <iconify-icon icon="solar:graph-new-up-linear" width="20"></iconify-icon>
              </div>
              <div>
                <div className="text-[10px] font-mono text-[#f97316] uppercase tracking-wider mb-1">Custom Build</div>
                <h3 className="text-lg font-bold">B2B Lead Enrichment Automation</h3>
              </div>
            </div>
            <p className="text-xs text-[#F3F1ED]/70 mb-4 leading-relaxed">
              <span className="text-[#F3F1ED] font-medium">Company:</span> B2B SaaS, 25 employees<br />
              <span className="text-[#F3F1ED] font-medium">Solution:</span> Agent swarm scraping LinkedIn, Clearbit
            </p>
            <div className="border-t border-white/10 pt-4">
              <ul className="space-y-1.5 text-xs text-[#F3F1ED]/60">
                <li className="flex items-center gap-2">
                  <span className="text-[#f97316]">→</span> 1,200+ leads/week automated
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#f97316]">→</span> 40 hours/month saved
                </li>
              </ul>
            </div>
          </div>

          {/* Use Case 4: Multi-Agent Setup */}
          <div className="bg-white/5 border border-white/10 p-6 backdrop-blur-sm">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 bg-[#f97316] flex items-center justify-center text-white flex-shrink-0">
                <iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
              </div>
              <div>
                <div className="text-[10px] font-mono text-[#f97316] uppercase tracking-wider mb-1">Multi-Agent</div>
                <h3 className="text-lg font-bold">5 Executive Agents Deployed</h3>
              </div>
            </div>
            <p className="text-xs text-[#F3F1ED]/70 mb-4 leading-relaxed">
              <span className="text-[#F3F1ED] font-medium">Company:</span> E-commerce brand, 40 employees<br />
              <span className="text-[#F3F1ED] font-medium">Solution:</span> Agents for CEO, CFO, Sales, Ops, CS
            </p>
            <div className="border-t border-white/10 pt-4">
              <ul className="space-y-1.5 text-xs text-[#F3F1ED]/60">
                <li className="flex items-center gap-2">
                  <span className="text-[#f97316]">→</span> 15 hours/week reclaimed per exec
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#f97316]">→</span> 60% faster customer response
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm">
          <h3 className="text-xl sm:text-2xl font-bold mb-3">
            Ready to Build Your System?
          </h3>
          <p className="text-xs sm:text-sm text-[#F3F1ED]/70 mb-4 max-w-xl mx-auto">
            Book a free strategy session to see what&apos;s possible for your business.
          </p>
          <button 
            onClick={openContactModal}
            className="inline-block px-6 py-3 bg-[#f97316] text-white text-sm font-bold hover:bg-[#ea580c] transition-colors uppercase"
          >
            Book strategy session
          </button>
        </div>

      </div>
    </section>
  );
}
