import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EnterpriseDeployment from '@/components/ai/EnterpriseDeployment';
import DeploymentHero from '@/components/ai/DeploymentHero';

export const metadata = {
  title: 'White-Glove AI Deployment | Layer Zero Studio',
  description: 'Professional deployment of OpenClaw agents, on-premise LLMs, and custom AI systems. Same-day setup with security hardening. In-person (Miami) or remote worldwide.',
};

export default function DeploymentPage() {
  return (
    <>
      <Navigation variant="ai" />
      <main>
        {/* Hero Section */}
        <DeploymentHero />

        {/* What We Deploy - Quick Overview */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-[#F3F1ED]">
          <div className="max-w-[1920px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-[#0A0A0A]">
                What We Deploy
              </h2>
              <p className="text-base sm:text-lg text-[#666666] max-w-2xl mx-auto">
                Three categories of AI systems, professionally deployed on your infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* OpenClaw Agents */}
              <div className="bg-white border-2 border-black p-8 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                <div className="w-12 h-12 bg-[#f97316] flex items-center justify-center mb-4 text-white">
                  <iconify-icon icon="solar:user-hands-linear" width="24"></iconify-icon>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#0A0A0A]">Executive AI Agents</h3>
                <p className="text-sm text-[#666666] mb-4 leading-relaxed">
                  OpenClaw agents for inbox management, calendar orchestration, and autonomous task execution. Deploy one per executive or shared team identity.
                </p>
                <ul className="space-y-2 text-sm text-[#666666]">
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
              <div className="bg-[#0A0A0A] border-2 border-[#f97316] p-8 text-[#F3F1ED] hover:shadow-[8px_8px_0px_0px_rgba(249,115,22,1)] transition-all">
                <div className="w-12 h-12 bg-[#f97316] flex items-center justify-center mb-4 text-white">
                  <iconify-icon icon="solar:server-minimalistic-linear" width="24"></iconify-icon>
                </div>
                <h3 className="text-2xl font-bold mb-3">On-Premise LLM Infrastructure</h3>
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
              <div className="bg-white border-2 border-black p-8 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                <div className="w-12 h-12 bg-[#f97316] flex items-center justify-center mb-4 text-white">
                  <iconify-icon icon="solar:code-scan-linear" width="24"></iconify-icon>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[#0A0A0A]">Custom Agent Swarms</h3>
                <p className="text-sm text-[#666666] mb-4 leading-relaxed">
                  Bespoke multi-agent systems for your unique workflows. Research agents, data enrichment pipelines, and autonomous business intelligence.
                </p>
                <ul className="space-y-2 text-sm text-[#666666]">
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
        </section>

        {/* Main Deployment Section */}
        <EnterpriseDeployment />
      </main>
      <Footer />
    </>
  );
}
