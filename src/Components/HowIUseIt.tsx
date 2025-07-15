"use client";

import React from "react";

const HowIUseIt = () => {
  const features = [
    {
      icon: "🕯️",
      title: "Morning Focus",
      subtitle: "One sentence: What matters most today?",
      gradient: "from-[#FEF3C7] to-[#FDE68A]",
      iconBg: "from-[#FBBF24] to-[#F59E0B]",
      textColor: "text-amber-800"
    },
    {
      icon: "🌑",
      title: "Evening Debrief",
      subtitle: "A moment to ask: What got in the way? What gave me peace?",
      gradient: "from-[#E0E7FF] to-[#C7D2FE]",
      iconBg: "from-[#6366F1] to-[#4F46E5]",
      textColor: "text-indigo-700"
    },
    {
      icon: "📈",
      title: "Clarity Score",
      subtitle: "A quiet nudge toward direction, not performance.",
      gradient: "from-[#A7F3D0] to-[#6EE7B7]",
      iconBg: "from-[#059669] to-[#10B981]",
      textColor: "text-emerald-800"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-[#F0F9FF] via-[#E0F2FE] to-[#F0FDF4] py-20 px-4 sm:px-8 md:px-16 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-20 w-24 h-24 bg-gradient-to-br from-[#A7F3D0] to-[#6EE7B7] rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-br from-[#BFDBFE] to-[#93C5FD] rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/30 mb-6">
            <span className="text-2xl">🧭</span>
            <span className="text-sm font-medium text-slate-600">Daily Ritual</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            How I Use it, {" "}
            <span className="bg-gradient-to-r from-[#059669]/50 to-[#10B981] bg-clip-text text-transparent">
              and Maybe You Will Too
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:bg-white/60 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              {/* Card glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 scale-110`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.iconBg} rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg`}>
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-bold mb-4 ${feature.textColor}`}>
                  {feature.title}
                </h3>

                {/* Subtitle */}
                <p className="text-slate-600 leading-relaxed italic">
                  {feature.subtitle}
                </p>

                {/* Decorative element */}
                <div className={`w-12 h-1 bg-gradient-to-r ${feature.iconBg} rounded-full mt-6 opacity-60`}></div>
              </div>

              {/* Floating decorative elements */}
              <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br ${feature.iconBg} rounded-full opacity-60`}></div>
              <div className={`absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br ${feature.gradient} rounded-full opacity-40`}></div>
            </div>
          ))}
        </div>

        {/* Bottom decorative text */}
        <div className="text-center mt-16">
          <p className="text-slate-500 italic text-lg max-w-2xl mx-auto">
            Simple rituals that help you find your center, one check-in at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowIUseIt;