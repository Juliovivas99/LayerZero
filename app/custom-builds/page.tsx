import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ArchitectureGrid from '@/components/ai/ArchitectureGrid';
import ProcessTimeline from '@/components/ai/ProcessTimeline';
import PricingSection from '@/components/ai/PricingSection';
import ContactForm from '@/components/ai/ContactForm';
import CustomBuildsHero from '@/components/ai/CustomBuildsHero';

export const metadata = {
  title: 'Custom AI Infrastructure Builds | Layer Zero Studio',
  description: 'Bespoke AI systems engineered from scratch for your unique workflows. Growth engines, operations automation, data pipelines, and revenue operations.',
};

export default function CustomBuildsPage() {
  return (
    <>
      <Navigation variant="ai" />
      <main>
        {/* Hero Section - When You Need Custom Builds */}
        <CustomBuildsHero />

        {/* When You Need Custom Builds Section */}
        <section id="examples" className="relative py-20 sm:py-28 md:py-32 px-4 sm:px-6 md:px-12 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
                When You Need Custom Builds
              </h2>
              <p className="text-base sm:text-lg text-zinc-500 max-w-2xl mx-auto">
                These scenarios require bespoke engineering, not off-the-shelf solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm hover:bg-white/10 transition-all rounded-lg group">
                <div className="w-12 h-12 bg-[#f97316] flex items-center justify-center mb-4 text-white rounded-lg group-hover:scale-110 transition-transform">
                  <iconify-icon icon="solar:code-linear" width="24"></iconify-icon>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Proprietary Business Logic</h3>
                <p className="text-sm text-zinc-300 mb-4 leading-relaxed">
                  Your revenue operations have unique steps that can't be templated. We encode your secret sauce into production-grade code.
                </p>
                <p className="text-xs text-zinc-400 font-mono">
                  Example: Custom lead scoring that combines Clearbit data, LinkedIn signals, and internal buyer intent metrics.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm hover:bg-white/10 transition-all rounded-lg group">
                <div className="w-12 h-12 bg-[#f97316] flex items-center justify-center mb-4 text-white rounded-lg group-hover:scale-110 transition-transform">
                  <iconify-icon icon="solar:graph-new-up-linear" width="24"></iconify-icon>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Complex Multi-Step Workflows</h3>
                <p className="text-sm text-zinc-300 mb-4 leading-relaxed">
                  Workflows with 10+ decision points, conditional logic, and external API dependencies need custom engineering.
                </p>
                <p className="text-xs text-zinc-400 font-mono">
                  Example: Onboarding automation that triggers contract generation, Stripe setup, Slack channels, and Google Drive folders.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm hover:bg-white/10 transition-all rounded-lg group">
                <div className="w-12 h-12 bg-[#f97316] flex items-center justify-center mb-4 text-white rounded-lg group-hover:scale-110 transition-transform">
                  <iconify-icon icon="solar:database-linear" width="24"></iconify-icon>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Data Pipelines + Dashboards</h3>
                <p className="text-sm text-zinc-300 mb-4 leading-relaxed">
                  Unify fragmented data sources into a central database with real-time BI dashboards. ETL pipelines that run 24/7.
                </p>
                <p className="text-xs text-zinc-400 font-mono">
                  Example: Pull data from HubSpot, Stripe, and Zendesk into Supabase, transform it, and feed custom Grafana dashboards.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm hover:bg-white/10 transition-all rounded-lg group">
                <div className="w-12 h-12 bg-[#f97316] flex items-center justify-center mb-4 text-white rounded-lg group-hover:scale-110 transition-transform">
                  <iconify-icon icon="solar:settings-linear" width="24"></iconify-icon>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Deep CRM Integration</h3>
                <p className="text-sm text-zinc-300 mb-4 leading-relaxed">
                  Go beyond Zapier. Custom agents that understand your CRM schema, custom fields, and business rules.
                </p>
                <p className="text-xs text-zinc-400 font-mono">
                  Example: HubSpot agent that auto-enriches leads, updates deal stages, and triggers personalized sequences based on engagement.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Architecture Grid */}
        <ArchitectureGrid />

        {/* Pricing Section */}
        <PricingSection />

        {/* Process Timeline */}
        <ProcessTimeline />

        {/* Contact Form */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
