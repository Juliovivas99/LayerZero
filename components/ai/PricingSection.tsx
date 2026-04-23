'use client';

import { useContactModal } from '@/components/ContactModalProvider';

export default function PricingSection() {
  const { openContactModal } = useContactModal();

  return (
    <section id="pricing" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-[#F3F1ED]">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 sm:mb-12">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-3 sm:mb-4 leading-[0.9]">
                Engagement<br />Models
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#0A0A0A]">Transparent pricing. Blueprint included in every build.</p>
            </div>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Tier 1: Build (Blueprint included) */}
          <div className="relative bg-[#0A0A0A] border-2 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(255,77,0,1)]">
            <div className="absolute top-0 right-0 bg-[#FF4D00] text-white text-xs font-bold px-3 py-1 uppercase">Popular</div>
            <div className="mb-6">
              <div className="text-xs font-mono text-[#FF4D00] mb-2 uppercase tracking-wider">Design + Build</div>
              <h3 className="text-3xl font-bold text-[#F3F1ED] mb-4">Autonomous Infrastructure Build</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-[#F3F1ED]">$10,000</span>
                <span className="ml-2 text-sm text-[#F3F1ED]/70">start price</span>
              </div>
            </div>
            <p className="text-sm text-[#F3F1ED]/70 mb-8 min-h-[60px] leading-relaxed">Includes a Systems Blueprint Session plus build and deploy of production automations. Final price based on complexity.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-[#F3F1ED]">
                <iconify-icon icon="solar:check-circle-bold" className="text-[#FF4D00] text-lg"></iconify-icon> Systems Blueprint Session (workflow map, integration plan, architecture diagram, build plan + timeline)
              </li>
              <li className="flex items-center gap-3 text-sm text-[#F3F1ED]">
                <iconify-icon icon="solar:check-circle-bold" className="text-[#FF4D00] text-lg"></iconify-icon> Custom workflow automation (code-first)
              </li>
              <li className="flex items-center gap-3 text-sm text-[#F3F1ED]">
                <iconify-icon icon="solar:check-circle-bold" className="text-[#FF4D00] text-lg"></iconify-icon> Integrations (CRM/email/calendar/support)
              </li>
              <li className="flex items-center gap-3 text-sm text-[#F3F1ED]">
                <iconify-icon icon="solar:check-circle-bold" className="text-[#FF4D00] text-lg"></iconify-icon> Data layer + monitoring
              </li>
              <li className="flex items-center gap-3 text-sm text-[#F3F1ED]">
                <iconify-icon icon="solar:check-circle-bold" className="text-[#FF4D00] text-lg"></iconify-icon> Error handling + fallbacks
              </li>
              <li className="flex items-center gap-3 text-sm text-[#F3F1ED]">
                <iconify-icon icon="solar:check-circle-bold" className="text-[#FF4D00] text-lg"></iconify-icon> Documentation + handoff
              </li>
              <li className="flex items-center gap-3 text-sm text-[#F3F1ED]">
                <iconify-icon icon="solar:check-circle-bold" className="text-[#FF4D00] text-lg"></iconify-icon> 30-day hypercare
              </li>
            </ul>
            <button
              onClick={openContactModal}
              className="block w-full py-4 min-h-[48px] bg-[#F3F1ED] text-center text-sm font-bold text-black hover:bg-white transition-colors uppercase touch-manipulation disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Get Custom Quote
            </button>
          </div>

          {/* Tier 2: Partnership */}
          <div className="bg-white border-2 border-black p-6 sm:p-8 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
            <div className="mb-6">
              <div className="text-xs font-mono text-[#666666] mb-2 uppercase tracking-wider">Optimize</div>
              <h3 className="text-3xl font-bold text-[#0A0A0A] mb-4">Managed Momentum Partnership</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-[#0A0A0A]">$15,000</span>
                <span className="ml-2 text-sm text-[#666666]">/month</span>
              </div>
            </div>
            <p className="text-sm text-[#666666] mb-8 min-h-[60px] leading-relaxed">Ongoing engineering + optimization. Your systems evolve as your business grows. Fixed monthly retainer.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-[#0A0A0A]">
                <iconify-icon icon="solar:check-circle-linear" className="text-[#FF4D00] text-lg"></iconify-icon> Weekly iteration cycles
              </li>
              <li className="flex items-center gap-3 text-sm text-[#0A0A0A]">
                <iconify-icon icon="solar:check-circle-linear" className="text-[#FF4D00] text-lg"></iconify-icon> Monitoring + fixes
              </li>
              <li className="flex items-center gap-3 text-sm text-[#0A0A0A]">
                <iconify-icon icon="solar:check-circle-linear" className="text-[#FF4D00] text-lg"></iconify-icon> New workflows each month
              </li>
              <li className="flex items-center gap-3 text-sm text-[#0A0A0A]">
                <iconify-icon icon="solar:check-circle-linear" className="text-[#FF4D00] text-lg"></iconify-icon> Quarterly roadmap review
              </li>
              <li className="flex items-center gap-3 text-sm text-[#0A0A0A]">
                <iconify-icon icon="solar:check-circle-linear" className="text-[#FF4D00] text-lg"></iconify-icon> Priority support
              </li>
              <li className="flex items-center gap-3 text-sm text-[#0A0A0A]">
                <iconify-icon icon="solar:check-circle-linear" className="text-[#FF4D00] text-lg"></iconify-icon> Performance tuning and optimization
              </li>
              <li className="flex items-center gap-3 text-sm text-[#0A0A0A]">
                <iconify-icon icon="solar:check-circle-linear" className="text-[#FF4D00] text-lg"></iconify-icon> Integration updates as your stack changes
              </li>
              <li className="flex items-center gap-3 text-sm text-[#0A0A0A]">
                <iconify-icon icon="solar:check-circle-linear" className="text-[#FF4D00] text-lg"></iconify-icon> Dedicated Slack or channel
              </li>
            </ul>
            <button
              onClick={openContactModal}
              className="block w-full py-4 min-h-[48px] border-2 border-black bg-white text-center text-sm font-bold text-black hover:bg-black hover:text-white transition-colors uppercase touch-manipulation"
            >
              Apply for Partnership
            </button>
          </div>

          {/* Tier 3: Enterprise / quote */}
          <div className="bg-white border-2 border-black p-6 sm:p-8 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
            <div className="mb-6">
              <div className="text-xs font-mono text-[#666666] mb-2 uppercase tracking-wider">Enterprise</div>
              <h3 className="text-3xl font-bold text-[#0A0A0A] mb-4">Tailored Engagement</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-[#0A0A0A]">Proposal</span>
                <span className="text-sm text-[#666666]">after discovery</span>
              </div>
            </div>
            <p className="text-sm text-[#666666] mb-8 min-h-[60px] leading-relaxed">Multi-system builds, dedicated capacity, or complex requirements. We learn your needs, then send a clear proposal.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-[#0A0A0A]">
                <iconify-icon icon="solar:check-circle-linear" className="text-[#FF4D00] text-lg"></iconify-icon> Multi-workflow and multi-team scope
              </li>
              <li className="flex items-center gap-3 text-sm text-[#0A0A0A]">
                <iconify-icon icon="solar:check-circle-linear" className="text-[#FF4D00] text-lg"></iconify-icon> Dedicated engineering capacity
              </li>
              <li className="flex items-center gap-3 text-sm text-[#0A0A0A]">
                <iconify-icon icon="solar:check-circle-linear" className="text-[#FF4D00] text-lg"></iconify-icon> Custom SLAs and priority support
              </li>
              <li className="flex items-center gap-3 text-sm text-[#0A0A0A]">
                <iconify-icon icon="solar:check-circle-linear" className="text-[#FF4D00] text-lg"></iconify-icon> Security and compliance support
              </li>
              <li className="flex items-center gap-3 text-sm text-[#0A0A0A]">
                <iconify-icon icon="solar:check-circle-linear" className="text-[#FF4D00] text-lg"></iconify-icon> Architecture review and roadmap
              </li>
              <li className="flex items-center gap-3 text-sm text-[#0A0A0A]">
                <iconify-icon icon="solar:check-circle-linear" className="text-[#FF4D00] text-lg"></iconify-icon> Cross-system integration
              </li>
              <li className="flex items-center gap-3 text-sm text-[#0A0A0A]">
                <iconify-icon icon="solar:check-circle-linear" className="text-[#FF4D00] text-lg"></iconify-icon> Phased rollout and change management
              </li>
              <li className="flex items-center gap-3 text-sm text-[#0A0A0A]">
                <iconify-icon icon="solar:check-circle-linear" className="text-[#FF4D00] text-lg"></iconify-icon> Dedicated success contact
              </li>
            </ul>
            <button onClick={openContactModal} className="block w-full py-4 min-h-[48px] border-2 border-black bg-white text-center text-sm font-bold text-black hover:bg-black hover:text-white transition-colors uppercase touch-manipulation">Get a Proposal</button>
          </div>
        </div>

        {/* Add-ons Section */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#0A0A0A] mb-6">Add-ons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Security Hardening Pack */}
            <div className="bg-white border-2 border-black p-6 sm:p-8">
              <div className="mb-4">
                <h4 className="text-xl font-bold text-[#0A0A0A] mb-2">Security Hardening Pack</h4>
                <p className="text-sm text-[#666666] leading-relaxed">Enterprise-grade security controls for production systems.</p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-[#0A0A0A]">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#FF4D00]"></iconify-icon> Least privilege access controls
                </li>
                <li className="flex items-center gap-2 text-sm text-[#0A0A0A]">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#FF4D00]"></iconify-icon> Secret management
                </li>
                <li className="flex items-center gap-2 text-sm text-[#0A0A0A]">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#FF4D00]"></iconify-icon> Audit logging
                </li>
              </ul>
            </div>

            {/* Executive Workflow Suite */}
            <div className="bg-white border-2 border-black p-6 sm:p-8">
              <div className="mb-4">
                <h4 className="text-xl font-bold text-[#0A0A0A] mb-2">Executive Workflow Suite</h4>
                <p className="text-sm text-[#666666] leading-relaxed">Personal automation for executives and founders.</p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-[#0A0A0A]">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#FF4D00]"></iconify-icon> Inbox triage automation
                </li>
                <li className="flex items-center gap-2 text-sm text-[#0A0A0A]">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#FF4D00]"></iconify-icon> Scheduling automation
                </li>
                <li className="flex items-center gap-2 text-sm text-[#0A0A0A]">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#FF4D00]"></iconify-icon> Briefings + summaries
                </li>
                <li className="flex items-center gap-2 text-sm text-[#0A0A0A]">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#FF4D00]"></iconify-icon> Proposal follow-ups
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </section>
  );
}
