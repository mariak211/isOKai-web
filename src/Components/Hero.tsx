/* eslint-disable */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */

'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import EmailCapture from '@/src/Components/EmailCapture';
import MockupImage from './MockUpImage';

const MOCKUP_IMAGES = [
  '/icons/isokaimock.svg',
  '/icons/isokaimock.svg',
  '/icons/isokaimock.svg',
];

const BackgroundLayer = ({ animation }: { animation: any }) => (
  <motion.div
    animate={animation}
    transition={{
      duration: 10,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop',
    }}
    className="absolute inset-0 z-0 overflow-hidden"
  >
    <Image
      src="/icons/bg.jpg"
      alt="Background"
      fill
      className="object-cover blur-sm"
      priority
    />
  </motion.div>
);

const HeroHeading = () => (
  <>
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 text-white"
    >
      <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
        isOKai
      </span>
    </motion.h1>
    
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
      className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed text-center"
    >
      Morning Focus
      <span className="mx-2 text-green-500">•</span>
      Evening Debrief
      <span className="mx-2 text-blue-300">•</span>
      Gamify
      <span className="mx-2 text-purple-400">•</span>
      Build Clarity
    </motion.p>
  </>
);

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen bg-slate-900 flex items-center justify-center py-20 px-4">
      <BackgroundLayer animation={{ y: ['0%', '0%'], opacity: [1, 0.5, 1] }} />
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-4xl w-full mx-auto text-center"
      >
        <HeroHeading />
        <MockupImage />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeInOut' }}
          className="mx-auto mt-10 w-full max-w-md"
        >
          <EmailCapture />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

