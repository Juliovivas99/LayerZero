'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    <section id="contact" className="bg-[#0A0A0A] text-[#F3F1ED] px-6 md:px-12 py-32 relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#FF4D00] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

      <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
        <div>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-8 leading-[0.85]">
            Start<br />A Project
          </h2>
          <div className="text-2xl md:text-3xl font-light mb-12 max-w-md">
            Ready to build something iconic? Let&apos;s make some noise.
          </div>
          
          <div className="flex flex-col gap-2">
            <a href="mailto:studiolabs0x@gmail.com" className="text-xl font-mono hover:text-[#FF4D00] transition-colors flex items-center gap-3">
              studiolabs0x@gmail.com
              <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
            </a>
          </div>
        </div>

        <form className="space-y-12 mt-12 lg:mt-0" onSubmit={handleSubmit}>
          <div className="group">
            <label className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2 block">Name</label>
            <input
              type="text"
              className="w-full input-minimal input-minimal-dark text-white"
              placeholder="Type your name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            />
          </div>
          <div className="group">
            <label className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2 block">Email</label>
            <input
              type="email"
              className="w-full input-minimal input-minimal-dark text-white"
              placeholder="Type your email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>
          <div className="group">
            <label className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4 block">Services Needed</label>
            <div className="flex flex-wrap gap-4">
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox-custom bg-transparent"
                  checked={formData.services.includes('Design')}
                  onChange={() => handleCheckbox('Design')}
                />
                <span className="text-lg">Design</span>
              </label>
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox-custom bg-transparent"
                  checked={formData.services.includes('Development')}
                  onChange={() => handleCheckbox('Development')}
                />
                <span className="text-lg">Development</span>
              </label>
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox-custom bg-transparent"
                  checked={formData.services.includes('Strategy')}
                  onChange={() => handleCheckbox('Strategy')}
                />
                <span className="text-lg">Strategy</span>
              </label>
            </div>
          </div>
          
          <div className="pt-8">
            <button
              type="submit"
              className="btn-fill bg-[#FF4D00] text-white px-10 py-5 text-sm font-bold uppercase tracking-widest w-full md:w-auto hover:bg-white hover:text-black transition-all"
            >
              Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
