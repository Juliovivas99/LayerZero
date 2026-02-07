'use client';

import { useState } from 'react';

export default function PricingSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    company: '',
    email: '',
    bottleneck: 'Lead Generation / Outbound',
    stack: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-[#F3F1ED]">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 sm:mb-12">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-3 sm:mb-4 leading-[0.9]">
                Engagement<br />Models
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-[#0A0A0A]">Transparent pricing. No hidden &quot;consulting fees&quot;.</p>
            </div>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Tier 1 */}
          <div className="bg-white border-2 border-black p-6 sm:p-8 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
            <div className="mb-6">
              <div className="text-xs font-mono text-[#666666] mb-2 uppercase tracking-wider">Design</div>
              <h3 className="text-3xl font-bold text-[#0A0A0A] mb-4">Systems Blueprint Session</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-[#0A0A0A]">$995</span>
                <span className="ml-2 text-sm text-[#666666]">one-time</span>
              </div>
            </div>
            <p className="text-sm text-[#666666] mb-8 min-h-[60px] leading-relaxed">A focused working session to map workflows, define success metrics, and produce a build-ready scope.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-[#0A0A0A]">
                <iconify-icon icon="solar:check-circle-linear" className="text-[#FF4D00] text-lg"></iconify-icon> Workflow map
              </li>
              <li className="flex items-center gap-3 text-sm text-[#0A0A0A]">
                <iconify-icon icon="solar:check-circle-linear" className="text-[#FF4D00] text-lg"></iconify-icon> Integration plan
              </li>
              <li className="flex items-center gap-3 text-sm text-[#0A0A0A]">
                <iconify-icon icon="solar:check-circle-linear" className="text-[#FF4D00] text-lg"></iconify-icon> Architecture diagram
              </li>
              <li className="flex items-center gap-3 text-sm text-[#0A0A0A]">
                <iconify-icon icon="solar:check-circle-linear" className="text-[#FF4D00] text-lg"></iconify-icon> Prioritized automation backlog
              </li>
              <li className="flex items-center gap-3 text-sm text-[#0A0A0A]">
                <iconify-icon icon="solar:check-circle-linear" className="text-[#FF4D00] text-lg"></iconify-icon> Build plan + timeline
              </li>
            </ul>
            <a href="#contact" className="block w-full py-4 min-h-[48px] border-2 border-black bg-white text-center text-sm font-bold text-black hover:bg-black hover:text-white transition-colors uppercase touch-manipulation">Book a call</a>
          </div>

          {/* Tier 2 */}
          <div className="relative bg-[#0A0A0A] border-2 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(255,77,0,1)]">
            <div className="absolute top-0 right-0 bg-[#FF4D00] text-white text-xs font-bold px-3 py-1 uppercase">Popular</div>
            <div className="mb-6">
              <div className="text-xs font-mono text-[#FF4D00] mb-2 uppercase tracking-wider">Build</div>
              <h3 className="text-3xl font-bold text-[#F3F1ED] mb-4">Autonomous Infrastructure Build</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-[#F3F1ED]">$3,500</span>
                <span className="ml-2 text-sm text-[#F3F1ED]/70">start price</span>
              </div>
            </div>
            <p className="text-sm text-[#F3F1ED]/70 mb-8 min-h-[60px] leading-relaxed">Build and deploy production automations integrated into your existing stack.</p>
            <ul className="space-y-3 mb-8">
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
            <a href="#contact" className="block w-full py-4 min-h-[48px] bg-[#F3F1ED] text-center text-sm font-bold text-black hover:bg-white transition-colors uppercase touch-manipulation">Book a call</a>
          </div>

          {/* Tier 3 */}
          <div className="bg-white border-2 border-black p-6 sm:p-8 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
            <div className="mb-6">
              <div className="text-xs font-mono text-[#666666] mb-2 uppercase tracking-wider">Optimize</div>
              <h3 className="text-3xl font-bold text-[#0A0A0A] mb-4">Managed Momentum Partnership</h3>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-[#0A0A0A]">$7,500</span>
                <span className="ml-2 text-sm text-[#666666]">/month</span>
              </div>
            </div>
            <p className="text-sm text-[#666666] mb-8 min-h-[60px] leading-relaxed">Ongoing engineering + optimization. Your systems evolve as your business grows.</p>
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
            </ul>
            <a href="#contact" className="block w-full py-4 min-h-[48px] border-2 border-black bg-white text-center text-sm font-bold text-black hover:bg-black hover:text-white transition-colors uppercase touch-manipulation">Book a call</a>
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

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-[#F3F1ED]">
        <div className="max-w-[1920px] mx-auto">
          <div className="border-2 border-black overflow-hidden bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left */}
              <div className="p-6 sm:p-10 md:p-16 border-b-2 lg:border-b-0 lg:border-r-2 border-black relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight text-[#0A0A0A]">Build faster.</h2>
                <p className="text-[#666666] mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed max-w-sm">
                  Ready to eliminate manual work? Book a call to see if your stack is compatible.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 border-2 border-black bg-[#F3F1ED] flex items-center justify-center text-[#FF4D00]">
                      <iconify-icon icon="solar:code-scan-linear" className="text-2xl"></iconify-icon>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#0A0A0A]">Stack Analysis</h4>
                      <p className="text-sm text-[#666666]">We map your API capabilities.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 border-2 border-black bg-[#F3F1ED] flex items-center justify-center text-[#FF4D00]">
                      <iconify-icon icon="solar:presentation-graph-linear" className="text-2xl"></iconify-icon>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#0A0A0A]">Build-Ready Scope</h4>
                      <p className="text-sm text-[#666666]">You receive a detailed architecture plan.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-16 pt-8 border-t-2 border-black">
                  <p className="text-xs text-[#666666] font-mono mb-2 uppercase tracking-wider">Direct Line</p>
                  <a href="mailto:hello@layerzero.studio" className="text-[#0A0A0A] hover:text-[#FF4D00] transition-colors font-bold text-lg">hello@layerzero.studio</a>
                </div>
              </div>

              {/* Right (Form) */}
              <div className="p-6 sm:p-10 md:p-16 bg-[#0A0A0A]">
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#F3F1ED] uppercase tracking-wider">First Name</label>
                      <input
                        type="text"
                        className="w-full bg-transparent border-b-2 border-white/20 px-0 py-3 sm:py-4 text-sm text-[#F3F1ED] focus:outline-none focus:border-[#FF4D00] transition-all placeholder:text-white/30 touch-manipulation"
                        placeholder="Jane"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#F3F1ED] uppercase tracking-wider">Company</label>
                      <input
                        type="text"
                        className="w-full bg-transparent border-b-2 border-white/20 px-0 py-3 sm:py-4 text-sm text-[#F3F1ED] focus:outline-none focus:border-[#FF4D00] transition-all placeholder:text-white/30 touch-manipulation"
                        placeholder="Acme Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#F3F1ED] uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      className="w-full bg-transparent border-b-2 border-white/20 px-0 py-3 sm:py-4 text-sm text-[#F3F1ED] focus:outline-none focus:border-[#FF4D00] transition-all placeholder:text-white/30 touch-manipulation"
                      placeholder="jane@acme.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#F3F1ED] uppercase tracking-wider">Primary Bottleneck</label>
                    <select
                      className="w-full bg-transparent border-b-2 border-white/20 px-0 py-3 sm:py-4 text-sm text-[#F3F1ED] focus:outline-none focus:border-[#FF4D00] transition-all appearance-none cursor-pointer touch-manipulation"
                      value={formData.bottleneck}
                      onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                    >
                      <option className="bg-[#0A0A0A]">Lead Generation / Outbound</option>
                      <option className="bg-[#0A0A0A]">Operations / Admin</option>
                      <option className="bg-[#0A0A0A]">Customer Support</option>
                      <option className="bg-[#0A0A0A]">Data / Reporting</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#F3F1ED] uppercase tracking-wider">Current Stack (Optional)</label>
                    <textarea
                      className="w-full bg-transparent border-b-2 border-white/20 px-0 py-3 sm:py-4 text-sm text-[#F3F1ED] focus:outline-none focus:border-[#FF4D00] transition-all placeholder:text-white/30 min-h-[80px] resize-none touch-manipulation"
                      placeholder="e.g. HubSpot, Slack, Airtable..."
                      value={formData.stack}
                      onChange={(e) => setFormData({ ...formData, stack: e.target.value })}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#F3F1ED] text-black font-bold text-sm py-4 hover:bg-white transition-colors mt-6 uppercase tracking-wider touch-manipulation min-h-[48px]"
                  >
                    Book a call
                  </button>
                  <p className="text-xs text-white/50 text-center mt-3">By clicking above, you agree to our Terms of Service.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
