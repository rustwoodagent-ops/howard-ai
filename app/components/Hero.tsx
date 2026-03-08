"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[#0a0a0b]">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-[120px] opacity-50" />
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse" />
            Available for new clients
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Your Mind,{" "}
            <span className="gradient-text">Amplified</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-[#a1a1aa] max-w-2xl mx-auto mb-10 leading-relaxed">
            I build custom AI second brains for executives who want to think faster, 
            remember everything, and automate the mundane. Transform your cognitive 
            workflow in 30 days.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-lg transition-all hover:scale-105 glow"
            >
              Start Your Transformation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-[#18181b] hover:bg-[#27272a] text-white font-semibold text-lg transition-all border border-[#27272a]"
            >
              Explore Services
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-[#71717a] text-sm">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              30-day implementation
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Custom-built for you
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Ongoing support included
            </div>
          </div>
        </div>

        {/* Dashboard preview */}
        <div
          className={`mt-20 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-2xl blur opacity-30" />
            <div className="relative bg-[#18181b] rounded-2xl border border-[#27272a] overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center px-4 py-3 bg-[#0a0a0b] border-b border-[#27272a]">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="ml-4 flex-1 text-center">
                  <div className="inline-block px-4 py-1 rounded-md bg-[#18181b] text-[#71717a] text-sm">
                    howard-ai.second-brain
                  </div>
                </div>
              </div>
              {/* Dashboard mockup */}
              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#0a0a0b] rounded-xl p-4 border border-[#27272a]">
                    <div className="text-[#71717a] text-sm mb-2">Knowledge Base</div>
                    <div className="text-2xl font-bold text-white">2,847</div>
                    <div className="text-cyan-400 text-sm">notes indexed</div>
                  </div>
                  <div className="bg-[#0a0a0b] rounded-xl p-4 border border-[#27272a]">
                    <div className="text-[#71717a] text-sm mb-2">Time Saved</div>
                    <div className="text-2xl font-bold text-white">12.5 hrs</div>
                    <div className="text-cyan-400 text-sm">this week</div>
                  </div>
                  <div className="bg-[#0a0a0b] rounded-xl p-4 border border-[#27272a]">
                    <div className="text-[#71717a] text-sm mb-2">AI Interactions</div>
                    <div className="text-2xl font-bold text-white">156</div>
                    <div className="text-cyan-400 text-sm">conversations</div>
                  </div>
                </div>
                <div className="mt-4 bg-[#0a0a0b] rounded-xl p-4 border border-[#27272a]">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <span className="text-cyan-400 text-xs">AI</span>
                    </div>
                    <div className="text-white text-sm">Howard</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-[#27272a] rounded w-3/4" />
                    <div className="h-2 bg-[#27272a] rounded w-1/2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
