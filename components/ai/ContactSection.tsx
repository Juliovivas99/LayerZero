'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    services: [] as string[],
  });

  const handleCheckbox = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="bg-black text-white px-6 md:px-12 py-32 relative overflow-hidden border-t border-white/10">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Deploy Your AI Infrastructure
          </h2>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto">
            Ready to automate your operations? Let&apos;s architect a system that scales with your ambition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-4">
                Get In Touch
              </h3>
              <a 
                href="mailto:hello@layerzero.studio" 
                className="text-2xl md:text-3xl font-mono hover:text-blue-400 transition-colors flex items-center gap-3 group"
              >
                hello@layerzero.studio
                <iconify-icon 
                  icon="solar:arrow-right-up-linear" 
                  class="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                ></iconify-icon>
              </a>
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/50">
                What We Build
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start gap-3">
                  <iconify-icon icon="solar:widget-5-bold" class="text-2xl text-blue-400 mt-1"></iconify-icon>
                  <div>
                    <div className="font-semibold">AI Agent Systems</div>
                    <div className="text-sm text-white/60">Autonomous workflows that think ahead</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <iconify-icon icon="solar:structure-bold" class="text-2xl text-blue-400 mt-1"></iconify-icon>
                  <div>
                    <div className="font-semibold">Infrastructure Architecture</div>
                    <div className="text-sm text-white/60">Scalable systems built for growth</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <iconify-icon icon="solar:shield-check-bold" class="text-2xl text-blue-400 mt-1"></iconify-icon>
                  <div>
                    <div className="font-semibold">System Integration</div>
                    <div className="text-sm text-white/60">Seamless connection of your entire stack</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form className="space-y-8 glass p-8 md:p-10 rounded-2xl" onSubmit={handleSubmit}>
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3 block">
                Name
              </label>
              <input
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-400/50 transition-colors"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3 block">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-400/50 transition-colors"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3 block">
                Company
              </label>
              <input
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-400/50 transition-colors"
                placeholder="Your company name"
                value={formData.company}
                onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4 block">
                Services You Need
              </label>
              <div className="space-y-3">
                {['AI Agent Development', 'System Architecture', 'Infrastructure Automation', 'Custom Integration'].map((service) => (
                  <label key={service} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-2 border-white/20 bg-white/5 checked:bg-blue-500 checked:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all cursor-pointer"
                      checked={formData.services.includes(service)}
                      onChange={() => handleCheckbox(service)}
                    />
                    <span className="text-base group-hover:text-blue-400 transition-colors">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold uppercase tracking-widest px-8 py-4 rounded-lg transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              Request System Audit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
