// import React from "react";

export default function Informational() {
  return (
    <section className="w-full bg-gray-100 pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE - UNIQUE VISUAL BLOCK */}
          <div className="relative">

            <div className="absolute -top-10 -left-10 h-36 w-36 bg-blue-200 rounded-full blur-3xl opacity-30" />
            <div className="absolute bottom-0 right-0 h-28 w-28 bg-blue-300 rounded-full blur-2xl opacity-30" />

            <div className="relative bg-white rounded-3xl p-10 ring-1 ring-slate-200 shadow-sm">

              <h3 className="text-2xl font-extrabold text-slate-900">
                Built for Real Businesses
              </h3>

              <p className="mt-4 text-slate-600">
                We don’t just build pretty websites — we build systems that actually work in the real world.
              </p>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="text-blue-600">✓</span>
                  Fast, modern, conversion-focused designs
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600">✓</span>
                  SEO-optimized structure and content
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600">✓</span>
                  Lead capture and automation ready
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600">✓</span>
                  Scalable code for long-term growth
                </li>
              </ul>

            </div>
          </div>

          {/* RIGHT SIDE - SEO FRIENDLY TEXT */}
          <div>

            <h3 className="text-2xl font-extrabold text-slate-900">
              More Than Just Websites
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Every project we take on is designed with performance, user experience, and business goals in mind. Modern web development is about more than visuals — it’s about creating a digital system that helps your company grow.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              From clean code and responsive layouts to advanced SEO strategies and lead generation tools, we combine development and marketing into one powerful solution.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Whether you need a brand-new site, a redesign, or a complete digital platform, our approach ensures your website becomes a real asset — not just an online brochure.
            </p>

         

          </div>

        </div>

      </div>
    </section>
  );
}
