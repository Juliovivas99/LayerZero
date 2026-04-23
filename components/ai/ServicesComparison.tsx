'use client';

'use client';

import { useContactModal } from '@/components/ContactModalProvider';

export default function ServicesComparison() {
  const { openContactModal } = useContactModal();
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-[#F3F1ED]">
      <div className="max-w-[1920px] mx-auto">
        
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
            Two Ways We Work
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#666666] max-w-3xl mx-auto">
            Choose white-glove deployment for rapid setup, or custom infrastructure for unique business logic. Most teams start with deployment, then scale into custom builds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* White-Glove Deployment */}
          <div className="bg-white border-2 border-black p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-[#f97316] flex items-center justify-center text-white">
                <iconify-icon icon="solar:rocket-2-linear" width="28"></iconify-icon>
              </div>
              <div>
                <div className="text-xs font-mono text-[#666666] uppercase tracking-wider">Fast Track</div>
                <h3 className="text-2xl font-bold text-[#0A0A0A]">White-Glove Deployment</h3>
              </div>
            </div>
            
            <p className="text-sm text-[#666666] mb-6 leading-relaxed">
              We professionally deploy proven AI systems (OpenClaw, local LLMs, agent frameworks) on your hardware with security hardening. Go live in hours, not weeks.
            </p>

            <div className="mb-6">
              <h4 className="text-sm font-bold text-[#0A0A0A] mb-3 uppercase tracking-wide">Best For:</h4>
              <ul className="space-y-2 text-sm text-[#666666]">
                <li className="flex items-start gap-2">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#f97316] mt-0.5 flex-shrink-0"></iconify-icon>
                  <span>Executives who need inbox/calendar automation now</span>
                </li>
                <li className="flex items-start gap-2">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#f97316] mt-0.5 flex-shrink-0"></iconify-icon>
                  <span>Companies requiring local AI (no cloud APIs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#f97316] mt-0.5 flex-shrink-0"></iconify-icon>
                  <span>Teams with 4-50 employees needing leverage fast</span>
                </li>
                <li className="flex items-start gap-2">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#f97316] mt-0.5 flex-shrink-0"></iconify-icon>
                  <span>Standard workflows: email, meetings, CRM, Slack</span>
                </li>
              </ul>
            </div>

            <div className="border-t-2 border-black/10 pt-6 mb-6">
              <h4 className="text-sm font-bold text-[#0A0A0A] mb-3 uppercase tracking-wide">What You Get:</h4>
              <ul className="space-y-2 text-sm text-[#666666]">
                <li className="flex items-center gap-2">
                  <span className="text-[#f97316] font-bold">→</span> Same-day deployment
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#f97316] font-bold">→</span> Security hardening included
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#f97316] font-bold">→</span> 14-day hypercare support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#f97316] font-bold">→</span> Standard integrations configured
                </li>
              </ul>
            </div>

            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-xs font-mono text-[#666666] uppercase">From</span>
              <span className="text-3xl font-bold text-[#0A0A0A]">$2,400</span>
              <span className="text-sm text-[#666666]">+ optional managed care</span>
            </div>

            <a href="/deployment" className="block w-full py-3 border-2 border-black bg-white text-center text-sm font-bold text-black hover:bg-black hover:text-white transition-colors uppercase">
              View deployment options
            </a>
          </div>

          {/* Custom Infrastructure Build */}
          <div className="bg-[#0A0A0A] border-2 border-black p-8 sm:p-10 text-[#F3F1ED] relative">
            <div className="absolute top-0 right-0 bg-[#f97316] text-white text-xs font-bold px-3 py-1 uppercase">
              Bespoke
            </div>
            
            <div className="flex items-center gap-3 mb-6 mt-2">
              <div className="w-14 h-14 bg-[#f97316] flex items-center justify-center text-white">
                <iconify-icon icon="solar:code-scan-linear" width="28"></iconify-icon>
              </div>
              <div>
                <div className="text-xs font-mono text-[#f97316] uppercase tracking-wider">Custom Build</div>
                <h3 className="text-2xl font-bold">AI Infrastructure Engineering</h3>
              </div>
            </div>
            
            <p className="text-sm text-[#F3F1ED]/70 mb-6 leading-relaxed">
              We design and build custom autonomous systems tailored to your unique workflows. Code-first approach with full control, extensibility, and zero vendor lock-in.
            </p>

            <div className="mb-6">
              <h4 className="text-sm font-bold mb-3 uppercase tracking-wide text-[#f97316]">Best For:</h4>
              <ul className="space-y-2 text-sm text-[#F3F1ED]/70">
                <li className="flex items-start gap-2">
                  <iconify-icon icon="solar:check-circle-bold" className="text-[#f97316] mt-0.5 flex-shrink-0"></iconify-icon>
                  <span>Complex multi-step workflows beyond standard tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <iconify-icon icon="solar:check-circle-bold" className="text-[#f97316] mt-0.5 flex-shrink-0"></iconify-icon>
                  <span>Proprietary business logic that requires custom code</span>
                </li>
                <li className="flex items-start gap-2">
                  <iconify-icon icon="solar:check-circle-bold" className="text-[#f97316] mt-0.5 flex-shrink-0"></iconify-icon>
                  <span>Revenue operations requiring deep CRM integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <iconify-icon icon="solar:check-circle-bold" className="text-[#f97316] mt-0.5 flex-shrink-0"></iconify-icon>
                  <span>Teams needing data pipelines + custom dashboards</span>
                </li>
              </ul>
            </div>

            <div className="border-t-2 border-white/10 pt-6 mb-6">
              <h4 className="text-sm font-bold mb-3 uppercase tracking-wide text-[#f97316]">What You Get:</h4>
              <ul className="space-y-2 text-sm text-[#F3F1ED]/70">
                <li className="flex items-center gap-2">
                  <span className="text-[#f97316] font-bold">→</span> Custom architecture design
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#f97316] font-bold">→</span> Production-grade code (Python/TypeScript)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#f97316] font-bold">→</span> Error handling + monitoring
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#f97316] font-bold">→</span> 30-day hypercare + documentation
                </li>
              </ul>
            </div>

            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-xs font-mono text-[#F3F1ED]/60 uppercase">From</span>
              <span className="text-3xl font-bold">$10,000</span>
              <span className="text-sm text-[#F3F1ED]/60">+ optional managed care</span>
            </div>

            <a href="/custom-builds" className="block w-full py-3 bg-[#F3F1ED] text-center text-sm font-bold text-black hover:bg-white transition-colors uppercase">
              View build pricing
            </a>
          </div>

        </div>

        {/* Comparison Table */}
        <div className="border-2 border-black bg-white overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#0A0A0A] text-[#F3F1ED]">
              <tr>
                <th className="p-4 font-bold">Feature</th>
                <th className="p-4 font-bold">White-Glove Deployment</th>
                <th className="p-4 font-bold">Custom Infrastructure Build</th>
              </tr>
            </thead>
            <tbody className="text-[#0A0A0A]">
              <tr className="border-t border-black/10">
                <td className="p-4 font-medium">Time to Go-Live</td>
                <td className="p-4">Same day</td>
                <td className="p-4">1-4 weeks</td>
              </tr>
              <tr className="border-t border-black/10 bg-[#F3F1ED]">
                <td className="p-4 font-medium">Approach</td>
                <td className="p-4">Deploy proven open-source systems</td>
                <td className="p-4">Build custom from scratch</td>
              </tr>
              <tr className="border-t border-black/10">
                <td className="p-4 font-medium">Workflows</td>
                <td className="p-4">Standard (email, calendar, CRM, Slack)</td>
                <td className="p-4">Unlimited custom logic</td>
              </tr>
              <tr className="border-t border-black/10 bg-[#F3F1ED]">
                <td className="p-4 font-medium">Integrations</td>
                <td className="p-4">Pre-built (Gmail, HubSpot, etc.)</td>
                <td className="p-4">Bespoke API integrations</td>
              </tr>
              <tr className="border-t border-black/10">
                <td className="p-4 font-medium">Code Access</td>
                <td className="p-4">Open-source (you own the config)</td>
                <td className="p-4">Full code ownership</td>
              </tr>
              <tr className="border-t border-black/10 bg-[#F3F1ED]">
                <td className="p-4 font-medium">Security Hardening</td>
                <td className="p-4">✓ Included</td>
                <td className="p-4">✓ Included</td>
              </tr>
              <tr className="border-t border-black/10">
                <td className="p-4 font-medium">Hypercare Support</td>
                <td className="p-4">14 days</td>
                <td className="p-4">30 days</td>
              </tr>
              <tr className="border-t border-black/10 bg-[#F3F1ED]">
                <td className="p-4 font-medium">Managed Care Available</td>
                <td className="p-4">✓ Optional</td>
                <td className="p-4">✓ Optional</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* FAQ Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#666666] mb-4">
            <span className="font-bold text-[#0A0A0A]">Not sure which path to take?</span> Most teams start with white-glove deployment to solve immediate pain points, then transition to custom builds as needs evolve.
          </p>
          <button onClick={openContactModal} className="inline-block px-6 py-3 bg-[#0A0A0A] text-white font-bold hover:bg-[#f97316] transition-colors text-sm uppercase">
            Book a strategy call
          </button>
        </div>

      </div>
    </section>
  );
}
