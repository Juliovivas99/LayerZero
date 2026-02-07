'use client';

import { useState } from 'react';

export default function ContactForm() {
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
                <a href="mailto:studiolabs0x@gmail.com" className="text-[#0A0A0A] hover:text-[#FF4D00] transition-colors font-bold text-lg">studiolabs0x@gmail.com</a>
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
                  Submit Request
                </button>
                <p className="text-xs text-white/50 text-center mt-3">By clicking above, you agree to our Terms of Service.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
