"use client";

import { useEffect, useRef, useState } from "react";

const plans = [
  {
    name: "Starter",
    description: "For individuals ready to augment their thinking",
    price: "$2,500",
    period: "one-time",
    features: [
      "AI second brain setup",
      "Notion/Obsidian integration",
      "2 training sessions",
      "30 days support",
      "Basic automation workflows",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    description: "For executives who want ongoing optimization",
    price: "$1,000",
    period: "/month",
    features: [
      "Everything in Starter",
      "Weekly strategy calls",
      "Custom AI agent development",
      "Unlimited support",
      "Advanced integrations",
      "Quarterly system reviews",
    ],
    cta: "Start Your Journey",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For teams and organizations",
    price: "Custom",
    period: "",
    features: [
      "Multi-user AI infrastructure",
      "Enterprise security",
      "Custom integrations",
      "Team training program",
      "Dedicated support",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
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
    <section id="pricing" ref={sectionRef} className="py-24 bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Investment in{" "}
            <span className="gradient-text">Your Potential</span>
          </h2>
          <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto">
            Transparent pricing. No hidden fees. Pay for results, not promises.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } ${
                plan.popular
                  ? "bg-gradient-to-b from-cyan-500/10 to-[#18181b] border-2 border-cyan-500/50"
                  : "bg-[#18181b] border border-[#27272a]"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-cyan-500 text-black text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan header */}
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-[#a1a1aa] text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-[#a1a1aa]">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-[#a1a1aa]">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`block w-full text-center py-4 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? "bg-cyan-500 hover:bg-cyan-400 text-black"
                      : "bg-[#27272a] hover:bg-[#3f3f46] text-white"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <div className="mt-12 text-center">
          <p className="text-[#71717a] text-sm">
            All plans include a 14-day satisfaction guarantee. Not happy? Full refund.
          </p>
        </div>
      </div>
    </section>
  );
}
