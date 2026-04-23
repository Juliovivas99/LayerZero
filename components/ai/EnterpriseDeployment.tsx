'use client';

import { useContactModal } from '@/components/ContactModalProvider';

export default function EnterpriseDeployment() {
  const { openContactModal } = useContactModal();
  return (
    <section id="deployment" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-[#0A0A0A] text-[#F3F1ED]">
      <div className="max-w-[1920px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#f97316]/20 bg-[#f97316]/5 text-[#f97316] text-[10px] sm:text-[11px] font-mono mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f97316] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f97316]"></span>
            </span>
            WHITE-GLOVE DEPLOYMENT
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
            Deploy AI infrastructure<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#f97316] to-[#c2410c]">on your hardware.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#F3F1ED]/70 max-w-3xl mx-auto mt-6 leading-relaxed">
            Professional deployment and maintenance of AI systems for enterprises. From OpenClaw agents to custom local LLMs—we handle the entire stack, security hardening, and ongoing operations.
          </p>
        </div>

        {/* What We Deploy */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">What We Deploy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* OpenClaw Agents */}
            <div className="bg-white/5 border border-white/10 p-6 sm:p-8 backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-[#f97316] flex items-center justify-center mb-4 text-white">
                <iconify-icon icon="solar:user-hands-linear" width="24"></iconify-icon>
              </div>
              <h4 className="text-xl font-bold mb-3 text-[#F3F1ED]">Executive AI Agents</h4>
              <p className="text-sm text-[#F3F1ED]/70 mb-4 leading-relaxed">
                OpenClaw agents for inbox management, calendar orchestration, and autonomous task execution. Deploy one per executive or shared team identity.
              </p>
              <ul className="space-y-2 text-sm text-[#F3F1ED]/60">
                <li className="flex items-center gap-2">
                  <span className="text-[#f97316]">→</span> Multi-account email triage
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#f97316]">→</span> Meeting scheduling automation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#f97316]">→</span> CRM enrichment workflows
                </li>
              </ul>
            </div>

            {/* Local AI Systems */}
            <div className="bg-white/5 border border-white/10 p-6 sm:p-8 backdrop-blur-sm hover:bg-white/10 transition-all md:border-l-2 md:border-r-2 md:border-[#f97316]">
              <div className="w-12 h-12 bg-[#f97316] flex items-center justify-center mb-4 text-white">
                <iconify-icon icon="solar:server-minimalistic-linear" width="24"></iconify-icon>
              </div>
              <h4 className="text-xl font-bold mb-3 text-[#F3F1ED]">On-Premise LLM Infrastructure</h4>
              <p className="text-sm text-[#F3F1ED]/70 mb-4 leading-relaxed">
                Private LLM deployments on your hardware or VPC. Full data sovereignty, custom model fine-tuning, and zero external API dependencies.
              </p>
              <ul className="space-y-2 text-sm text-[#F3F1ED]/60">
                <li className="flex items-center gap-2">
                  <span className="text-[#f97316]">→</span> Llama 3, Mixtral, custom models
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#f97316]">→</span> RAG systems on private docs
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#f97316]">→</span> API gateway for team access
                </li>
              </ul>
            </div>

            {/* Custom AI Systems */}
            <div className="bg-white/5 border border-white/10 p-6 sm:p-8 backdrop-blur-sm hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-[#f97316] flex items-center justify-center mb-4 text-white">
                <iconify-icon icon="solar:code-scan-linear" width="24"></iconify-icon>
              </div>
              <h4 className="text-xl font-bold mb-3 text-[#F3F1ED]">Custom Agent Swarms</h4>
              <p className="text-sm text-[#F3F1ED]/70 mb-4 leading-relaxed">
                Bespoke multi-agent systems for your unique workflows. Research agents, data enrichment pipelines, and autonomous business intelligence.
              </p>
              <ul className="space-y-2 text-sm text-[#F3F1ED]/60">
                <li className="flex items-center gap-2">
                  <span className="text-[#f97316]">→</span> Web scraping + enrichment
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#f97316]">→</span> Automated report generation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#f97316]">→</span> Real-time competitive intel
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Implementation Options */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Implementation</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            {/* In-Person */}
            <div className="bg-white border-2 border-[#f97316] p-6 text-[#0A0A0A] relative transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#f97316]/20 hover:-translate-y-2">
              <div className="absolute -top-3 left-6 bg-[#f97316] text-white text-xs font-bold px-3 py-1 uppercase">Miami</div>
              <h4 className="text-2xl font-bold mb-3 mt-2">In-Person Setup</h4>
              <p className="text-sm text-[#666666] mb-6">We come to your office. First system + hardening + 14-day hypercare.</p>
              <div className="text-4xl font-bold mb-6">$4,800</div>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-center gap-2">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#f97316]"></iconify-icon>
                  On-site deployment
                </li>
                <li className="flex items-center gap-2">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#f97316]"></iconify-icon>
                  Security hardening
                </li>
                <li className="flex items-center gap-2">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#f97316]"></iconify-icon>
                  Team training session
                </li>
                <li className="flex items-center gap-2">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#f97316]"></iconify-icon>
                  14-day hypercare
                </li>
              </ul>
              <button onClick={openContactModal} className="block w-full py-3 bg-[#0A0A0A] text-white text-center text-sm font-bold hover:bg-[#f97316] transition-colors uppercase">Book setup</button>
            </div>

            {/* Remote */}
            <div className="bg-white border-2 border-black p-6 text-[#0A0A0A] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-2 hover:border-[#f97316]">
              <h4 className="text-2xl font-bold mb-3">Remote Setup</h4>
              <p className="text-sm text-[#666666] mb-6">Deploy over video call on your hardware or VPS. Available worldwide.</p>
              <div className="text-4xl font-bold mb-6">$2,400</div>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-center gap-2">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#f97316]"></iconify-icon>
                  Video call deployment
                </li>
                <li className="flex items-center gap-2">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#f97316]"></iconify-icon>
                  Security checklist
                </li>
                <li className="flex items-center gap-2">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#f97316]"></iconify-icon>
                  Documentation
                </li>
                <li className="flex items-center gap-2">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#f97316]"></iconify-icon>
                  14-day hypercare
                </li>
              </ul>
              <button onClick={openContactModal} className="block w-full py-3 border-2 border-black text-center text-sm font-bold hover:bg-black hover:text-white transition-colors uppercase">Book setup</button>
            </div>

            {/* Additional Systems */}
            <div className="bg-white border-2 border-black p-6 text-[#0A0A0A] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-2 hover:border-[#f97316]">
              <h4 className="text-2xl font-bold mb-3">Additional Systems</h4>
              <p className="text-sm text-[#666666] mb-6">Deploy your full exec team or multiple AI infrastructures.</p>
              <div className="text-4xl font-bold mb-6">+$2,400<span className="text-base font-normal text-[#666666]">/ea</span></div>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-center gap-2">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#f97316]"></iconify-icon>
                  CEO, CFO, Head of Sales
                </li>
                <li className="flex items-center gap-2">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#f97316]"></iconify-icon>
                  Additional LLM instances
                </li>
                <li className="flex items-center gap-2">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#f97316]"></iconify-icon>
                  Department-specific agents
                </li>
                <li className="flex items-center gap-2">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#f97316]"></iconify-icon>
                  Shared team workflows
                </li>
              </ul>
              <button onClick={openContactModal} className="block w-full py-3 border-2 border-black text-center text-sm font-bold hover:bg-black hover:text-white transition-colors uppercase">Book setup</button>
            </div>

          </div>
        </div>

        {/* Managed Care Plans */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-center">Managed Care</h3>
          <p className="text-center text-[#F3F1ED]/60 mb-8 max-w-2xl mx-auto">
            Ongoing monitoring, security updates, workflow optimization, and priority support. Your systems stay reliable as your business evolves.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Standard */}
            <div className="bg-white/5 border border-white/10 p-6 sm:p-8">
              <div className="mb-6">
                <div className="text-xs font-mono text-[#f97316] mb-2 uppercase tracking-wider">Standard</div>
                <h4 className="text-2xl font-bold mb-4">Care Standard</h4>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">$3,750</span>
                  <span className="ml-2 text-sm text-[#F3F1ED]/60">/month</span>
                </div>
              </div>
              <p className="text-sm text-[#F3F1ED]/70 mb-6">Up to 2 systems, monitoring, support, 2 hrs/mo engineering included.</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-[#F3F1ED]/80">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#f97316]"></iconify-icon>
                  Health monitoring
                </li>
                <li className="flex items-center gap-2 text-[#F3F1ED]/80">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#f97316]"></iconify-icon>
                  Security patches
                </li>
                <li className="flex items-center gap-2 text-[#F3F1ED]/80">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#f97316]"></iconify-icon>
                  Slack support (24h response)
                </li>
                <li className="flex items-center gap-2 text-[#F3F1ED]/80">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#f97316]"></iconify-icon>
                  2 engineering hours/month
                </li>
              </ul>
            </div>

            {/* Plus */}
            <div className="bg-white border-2 border-[#f97316] p-6 sm:p-8 text-[#0A0A0A] relative">
              <div className="absolute -top-3 left-6 bg-[#f97316] text-white text-xs font-bold px-3 py-1 uppercase">Popular</div>
              <div className="mb-6">
                <div className="text-xs font-mono text-[#f97316] mb-2 uppercase tracking-wider">Plus</div>
                <h4 className="text-2xl font-bold mb-4">Care Plus</h4>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">$7,500</span>
                  <span className="ml-2 text-sm text-[#666666]">/month</span>
                </div>
              </div>
              <p className="text-sm text-[#666666] mb-6">Up to 5 systems, priority support, monthly review, 6 hrs/mo engineering.</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <iconify-icon icon="solar:check-circle-bold" className="text-[#f97316]"></iconify-icon>
                  Everything in Standard
                </li>
                <li className="flex items-center gap-2">
                  <iconify-icon icon="solar:check-circle-bold" className="text-[#f97316]"></iconify-icon>
                  Priority support (4h response)
                </li>
                <li className="flex items-center gap-2">
                  <iconify-icon icon="solar:check-circle-bold" className="text-[#f97316]"></iconify-icon>
                  Monthly system review
                </li>
                <li className="flex items-center gap-2">
                  <iconify-icon icon="solar:check-circle-bold" className="text-[#f97316]"></iconify-icon>
                  6 engineering hours/month
                </li>
              </ul>
            </div>

            {/* Enterprise */}
            <div className="bg-white/5 border border-white/10 p-6 sm:p-8">
              <div className="mb-6">
                <div className="text-xs font-mono text-[#f97316] mb-2 uppercase tracking-wider">Enterprise</div>
                <h4 className="text-2xl font-bold mb-4">Care Enterprise</h4>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">$15,000+</span>
                  <span className="ml-2 text-sm text-[#F3F1ED]/60">/month</span>
                </div>
              </div>
              <p className="text-sm text-[#F3F1ED]/70 mb-6">SLA, fleet standards, compliance reporting, dedicated engineer.</p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-[#F3F1ED]/80">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#f97316]"></iconify-icon>
                  Everything in Plus
                </li>
                <li className="flex items-center gap-2 text-[#F3F1ED]/80">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#f97316]"></iconify-icon>
                  99.5% uptime SLA
                </li>
                <li className="flex items-center gap-2 text-[#F3F1ED]/80">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#f97316]"></iconify-icon>
                  Compliance audit logs
                </li>
                <li className="flex items-center gap-2 text-[#F3F1ED]/80">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#f97316]"></iconify-icon>
                  Dedicated engineer
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Security Section */}
        <div className="border border-white/10 bg-white/5 p-8 sm:p-12 backdrop-blur-sm">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-[#f97316] flex items-center justify-center text-white flex-shrink-0">
              <iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Security & Your Data</h3>
              <p className="text-[#F3F1ED]/70">AI runs locally on your hardware or private cloud. Your data never leaves your infrastructure.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h5 className="font-bold mb-2 text-[#f97316]">Access Controls</h5>
              <ul className="space-y-1 text-[#F3F1ED]/60">
                <li>→ Allowlist-only access</li>
                <li>→ Role-based permissions</li>
                <li>→ Credential rotation protocols</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-2 text-[#f97316]">Network Security</h5>
              <ul className="space-y-1 text-[#F3F1ED]/60">
                <li>→ Loopback-only binding</li>
                <li>→ No public endpoints</li>
                <li>→ VPN/VPC integration</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-2 text-[#f97316]">Compliance</h5>
              <ul className="space-y-1 text-[#F3F1ED]/60">
                <li>→ Audit logging</li>
                <li>→ SOC 2 readiness</li>
                <li>→ GDPR/HIPAA compatible</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-[#F3F1ED]/70 mb-6">
            Not sure which setup is right for you? Book a free 15-minute consultation.
          </p>
          <button onClick={openContactModal} className="inline-block px-8 py-4 bg-[#f97316] text-white font-bold hover:bg-[#ea580c] transition-colors uppercase">
            Book a call
          </button>
        </div>

      </div>
    </section>
  );
}
