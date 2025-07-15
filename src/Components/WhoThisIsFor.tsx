"use client";

import React from "react";

const WhoThisIsFor = () => {
  const personas = [
  {
    icon: "🌱",
    title: "Dreamers & doers in transition",
    description:
      "Whether you're building, rebuilding, or just beginning your next chapter starts with clarity.",
    gradient: "from-[#DBEAFE] to-[#BFDBFE]",
    iconBg: "from-[#2563EB] to-[#1D4ED8]",
    textColor: "text-blue-300",
    decorIcon: "✨"
  },
  {
    icon: "🧭",
    title: "Founders, freelancers, self-starters",
    description:
      "When you're carving your own path, you need tools that help you stay grounded and focused.",
    gradient: "from-[#FEF3C7] to-[#FDE68A]",
    iconBg: "from-[#F59E0B] to-[#D97706]",
    textColor: "text-amber-400",
    decorIcon: "🚀"
  },
  {
    icon: "🧠",
    title: "Anyone craving calm in a chaotic world",
    description:
      "You don’t need to hustle harder you need space to think clearly, feel deeply, and move intentionally.",
    gradient: "from-[#F3E8FF] to-[#E9D5FF]",
    iconBg: "from-[#A855F7] to-[#9333EA]",
    textColor: "text-purple-300",
    decorIcon: "🕊️"
  }
];

  return (
    <section className="bg-gradient-to-br from-[#F0F9FF] via-[#E0F2FE] to-[#F0FDF4] py-20 px-4 sm:px-8 md:px-16 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-[#A7F3D0] to-[#6EE7B7] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-[#BFDBFE] to-[#93C5FD] rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-[#FCE7F3] to-[#FBCFE8] rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/30 mb-6">
            <span className="text-2xl">🪞</span>
            <span className="text-sm font-medium text-slate-600">Community</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-4">
            Who This Is{" "}
            <span className="bg-gradient-to-r from-[#059669] to-[#10B981] bg-clip-text text-transparent">
              For
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            If you recognize yourself in any of these, you're exactly where you need to be.
          </p>
        </div>

        {/* Creative Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {personas.map((persona, index) => (
            <div
              key={index}
              className={`group relative bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/30 hover:bg-white/60 transition-all duration-500 hover:shadow-2xl hover:scale-105 ${
                index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
              }`}
            >
              {/* Enhanced card glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${persona.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500 scale-110`}></div>
              
              {/* Floating decorative element */}
              <div className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${persona.iconBg} rounded-full flex items-center justify-center text-xl opacity-60 group-hover:opacity-80 transition-all duration-300 group-hover:scale-110`}>
                {persona.decorIcon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${persona.iconBg} rounded-3xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  {persona.icon}
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-bold mb-4 ${persona.textColor} group-hover:scale-105 transition-transform duration-300`}>
                  {persona.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed italic text-lg">
                  {persona.description}
                </p>

                {/* Animated decorative line */}
                <div className={`w-0 group-hover:w-16 h-1 bg-gradient-to-r ${persona.iconBg} rounded-full mt-6 transition-all duration-500 ease-out`}></div>
              </div>

              {/* Bottom floating elements */}
              <div className={`absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br ${persona.gradient} rounded-full opacity-40 group-hover:opacity-60 transition-all duration-300`}></div>
              <div className={`absolute bottom-4 right-4 w-2 h-2 bg-gradient-to-br ${persona.iconBg} rounded-full opacity-30 group-hover:opacity-50 transition-all duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Bottom inspirational section */}
        <div className="text-center bg-white/30 backdrop-blur-sm rounded-3xl p-8 border border-white/30 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#059669] to-[#10B981] rounded-full flex items-center justify-center text-2xl">
              🤝
            </div>
            <h3 className="text-2xl font-bold text-slate-800">You belong here</h3>
          </div>
          <p className="text-slate-600 text-lg leading-relaxed italic">
            This space was created by someone who understands the weight of trying, 
            the ache of not fitting in, and the quiet strength it takes to keep going.
          </p>
          <div className="mt-6 flex justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-[#39ca9c] to-[#10B981] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Start Your Clarity Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsFor;