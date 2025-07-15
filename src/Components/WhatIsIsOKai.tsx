"use client";

import React from "react";
import Image from "next/image";

const WhatIsIsOKai = () => {
  return (
    <section className="bg-gradient-to-br from-[#F0F9FF] via-[#E0F2FE] to-[#F0FDF4] py-20 px-4 sm:px-8 md:px-16 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#A7F3D0] to-[#6EE7B7] rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#BFDBFE] to-[#93C5FD] rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            💬 What is{" "}
            <span className="bg-gradient-to-r from-[#059669] to-[#10B981] bg-clip-text text-transparent">
              isOKai
            </span>
            ?
          </h2>

          <div className="space-y-5">
            <p className="text-lg text-slate-700 leading-relaxed">
              isOKai is a personal ritual I created after hitting wall after wall in my job search after I graduated.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              It began as a quiet space to{" "}
              <span className="px-2 py-1 bg-gradient-to-r from-[#A7F3D0] to-[#6EE7B7] text-emerald-800 rounded-md font-semibold">
                reset my focus
              </span>{" "}
              in the morning,{" "}
              <span className="px-2 py-1 bg-gradient-to-r from-[#FBBF24] to-[#a9a7a3] text-orange-800 rounded-md font-semibold">
                reflect at night
              </span>
              , and track{" "}
              <span className="italic font-medium text-slate-800">clarity, not productivity</span>.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              Now, I'm turning it into a real app for anyone who needs to breathe, realign, and move forward.
            </p>

            <div className="p-4 bg-gray-500/20 backdrop-blur-sm rounded-xl border border-white/30">
              <p className="text-lg text-slate-600 italic font-medium">
                It's not perfect. But it's honest. And it's helping me breathe again.
              </p>
            </div>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-wrap gap-3 pt-4">
            <button className="px-6 py-3 bg-gradient-to-r from-[#059669] to-[#10B981] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Try isOKai
            </button>
            <button className="px-6 py-3 bg-white/60 backdrop-blur-sm text-slate-700 font-semibold rounded-full border border-white/30 hover:bg-white/80 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Clarity Widget Image */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Glow effect behind the phone */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#A7F3D0] via-[#BFDBFE] to-[#FDE68A] rounded-3xl blur-2xl opacity-40 scale-110"></div>
            
            {/* Phone container */}
            <div className="relative w-[300px] h-auto rounded-3xl shadow-2xl overflow-hidden border border-white/30 bg-white/10 backdrop-blur-sm">
              <Image
                src="icons/clarity-widget.svg"
                alt="Clarity Score Widget"
                width={300}
                height={200}
                className="object-cover"
                priority
              />
            </div>

            {/* Floating elements around the phone */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
              ✓
            </div>
            <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-[#FBBF24] to-[#F59E0B] rounded-full flex items-center justify-center text-white text-lg shadow-lg">
              ☀️
            </div>
            <div className="absolute top-1/2 -left-6 w-6 h-6 bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] rounded-full shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsIsOKai;