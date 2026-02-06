export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
              Full Cycle<br />
              Development.
            </h2>
            <p className="text-xl leading-relaxed max-w-md">
              We don&apos;t just write code. We build businesses. From the first pixel to the final deploy, we own the process.
            </p>
          </div>
          
          <div className="space-y-0 border-t-2 border-black">
            {/* Item 1 */}
            <div className="group py-8 border-b border-black/10 hover:border-black transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-4">
                  <span className="text-xs font-mono text-gray-400 group-hover:text-[#FF4D00]">01</span>
                  Product Design
                </h3>
                <iconify-icon icon="solar:add-linear" className="text-2xl group-hover:rotate-45 transition-transform"></iconify-icon>
              </div>
              <div className="h-0 overflow-hidden group-hover:h-auto transition-all">
                <p className="pt-4 text-gray-600 max-w-lg text-lg">UI/UX, Design Systems, Prototyping. We design interfaces that are intuitive, accessible, and beautiful.</p>
              </div>
            </div>
            
            {/* Item 2 */}
            <div className="group py-8 border-b border-black/10 hover:border-black transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-4">
                  <span className="text-xs font-mono text-gray-400 group-hover:text-[#FF4D00]">02</span>
                  Frontend Engineering
                </h3>
                <iconify-icon icon="solar:add-linear" className="text-2xl group-hover:rotate-45 transition-transform"></iconify-icon>
              </div>
              <div className="h-0 overflow-hidden group-hover:h-auto transition-all">
                <p className="pt-4 text-gray-600 max-w-lg text-lg">Next.js, React, WebGL. We build performant, responsive frontends that feel like native apps.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="group py-8 border-b border-black/10 hover:border-black transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-4">
                  <span className="text-xs font-mono text-gray-400 group-hover:text-[#FF4D00]">03</span>
                  Backend &amp; Infra
                </h3>
                <iconify-icon icon="solar:add-linear" className="text-2xl group-hover:rotate-45 transition-transform"></iconify-icon>
              </div>
              <div className="h-0 overflow-hidden group-hover:h-auto transition-all">
                <p className="pt-4 text-gray-600 max-w-lg text-lg">Node, Python, AWS. Scalable architecture that handles millions of requests without breaking a sweat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
