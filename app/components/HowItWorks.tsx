"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We map your current workflows, pain points, and cognitive bottlenecks. I learn how you think and where AI can eliminate friction.",
  },
  {
    number: "02",
    title: "Architecture",
    description: "I design a custom AI system blueprint tailored to your specific needs. Every component serves a purpose in your workflow.",
  },
  {
    number: "03",
    title: "Implementation",
    description: "The system is built and integrated into your existing tools. I handle the technical complexity—you get the benefits.",
  },
  {
    number: "04",
    title: "Optimization",
    description: "We refine the system based on real usage. Continuous improvement ensures your AI second brain gets smarter over time.",
  },
];

export default function HowItWorks() {
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
    <section id="how-it-works" ref={sectionRef} className="py-24 bg-[#0a0a0b] border-y border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How It{" "}
            <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto">
            A proven 4-phase process that takes you from overwhelmed to optimized 
            in 30 days.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-cyan-500/50 to-transparent" />
              )}

              {/* Number */}
              <div className="text-5xl font-bold text-cyan-500/20 mb-4">
                {step.number}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-[#a1a1aa] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline visualization */}
        <div
          className={`mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative bg-[#18181b] rounded-2xl border border-[#27272a] p-8">
            <div className="flex items-center justify-between">
              {["Week 1", "Week 2", "Week 3", "Week 4"].map((week, index) => (
                <div key={index} className="flex items-center flex-1">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-cyan-500 mb-2" />
                    <span className="text-sm text-[#a1a1aa]">{week}</span>
                  </div>
                  {index < 3 && (
                    <div className="flex-1 h-px bg-cyan-500/30 mx-4" />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 text-center text-[#71717a] text-sm">
              Typical implementation timeline
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
