"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-[#0a0a0b] border-y border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 rounded-3xl blur-2xl" />
              
              {/* Main image container */}
              <div className="relative bg-[#18181b] rounded-2xl border border-[#27272a] overflow-hidden aspect-square">
                {/* Abstract AI visualization */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0b] via-[#18181b] to-[#0a0a0b]">
                  {/* Neural network visualization */}
                  <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 400">
                    {/* Nodes */}
                    <circle cx="100" cy="100" r="8" fill="#22d3ee" />
                    <circle cx="200" cy="80" r="8" fill="#22d3ee" />
                    <circle cx="300" cy="100" r="8" fill="#22d3ee" />
                    <circle cx="80" cy="200" r="8" fill="#818cf8" />
                    <circle cx="200" cy="200" r="12" fill="#22d3ee" />
                    <circle cx="320" cy="200" r="8" fill="#818cf8" />
                    <circle cx="100" cy="300" r="8" fill="#22d3ee" />
                    <circle cx="200" cy="320" r="8" fill="#22d3ee" />
                    <circle cx="300" cy="300" r="8" fill="#22d3ee" />
                    
                    {/* Connections */}
                    <line x1="100" y1="100" x2="200" y2="80" stroke="#22d3ee" strokeWidth="1" opacity="0.5" />
                    <line x1="200" y1="80" x2="300" y2="100" stroke="#22d3ee" strokeWidth="1" opacity="0.5" />
                    <line x1="100" y1="100" x2="80" y2="200" stroke="#22d3ee" strokeWidth="1" opacity="0.5" />
                    <line x1="200" y1="80" x2="200" y2="200" stroke="#22d3ee" strokeWidth="2" opacity="0.7" />
                    <line x1="300" y1="100" x2="320" y2="200" stroke="#22d3ee" strokeWidth="1" opacity="0.5" />
                    <line x1="80" y1="200" x2="200" y2="200" stroke="#818cf8" strokeWidth="1" opacity="0.5" />
                    <line x1="200" y1="200" x2="320" y2="200" stroke="#818cf8" strokeWidth="1" opacity="0.5" />
                    <line x1="80" y1="200" x2="100" y2="300" stroke="#818cf8" strokeWidth="1" opacity="0.5" />
                    <line x1="200" y1="200" x2="200" y2="320" stroke="#22d3ee" strokeWidth="2" opacity="0.7" />
                    <line x1="320" y1="200" x2="300" y2="300" stroke="#818cf8" strokeWidth="1" opacity="0.5" />
                    <line x1="100" y1="300" x2="200" y2="320" stroke="#22d3ee" strokeWidth="1" opacity="0.5" />
                    <line x1="200" y1="320" x2="300" y2="300" stroke="#22d3ee" strokeWidth="1" opacity="0.5" />
                  </svg>
                  
                  {/* Center content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center mx-auto mb-4 glow">
                        <span className="text-4xl font-bold text-white">H</span>
                      </div>
                      <div className="text-white font-bold text-lg">Howard</div>
                      <div className="text-cyan-400 text-sm">AI Systems Architect</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Stats floating card */}
              <div className="absolute -bottom-6 -right-6 bg-[#18181b] rounded-xl border border-[#27272a] p-4 shadow-2xl">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">50+</div>
                    <div className="text-xs text-[#71717a]">Systems Built</div>
                  </div>
                  <div className="w-px h-10 bg-[#27272a]" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">100%</div>
                    <div className="text-xs text-[#71717a]">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              I Build{" "}
              <span className="gradient-text">Cognitive Extensions</span>
            </h2>
            
            <div className="space-y-4 text-[#a1a1aa] leading-relaxed">
              <p>
                I'm Howard, an AI systems architect specializing in second brain implementations 
                for executives, founders, and knowledge workers. I don't just set up tools—I 
                design integrated cognitive systems that think the way you do.
              </p>
              <p>
                My approach combines deep technical expertise with an understanding of human 
                workflow psychology. Every system I build is custom-tailored to how you 
                process information, make decisions, and execute on ideas.
              </p>
              <p>
                The result? You spend less time managing information and more time using it. 
                Less cognitive load, more cognitive output. A mind that's truly amplified.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mr-3 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Custom Built</div>
                  <div className="text-sm text-[#71717a]">No templates, ever</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mr-3 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Results First</div>
                  <div className="text-sm text-[#71717a]">Measurable outcomes</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mr-3 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Privacy First</div>
                  <div className="text-sm text-[#71717a]">Your data stays yours</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mr-3 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Always Available</div>
                  <div className="text-sm text-[#71717a]">Ongoing support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
