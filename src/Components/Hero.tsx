'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import EmailCapture from '@/src/Components/EmailCapture';

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
      layout="fill"
      objectFit="cover"
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
      className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight mb-6"
    >
      <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
        Clarity is your co-founder.
      </span>
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
      className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
    >
      isOK.ai helps founders and ambitious minds track their focus, mood, and momentum, so you can lead with more calm, clarity, and control.
    </motion.p>
  </>
);

const MockupImage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}
    className=""
  >
    <Image
      src="/icons/isokaimock.svg"
      alt="iPhone Mockup"
      layout="responsive"
      width={200}
      height={200}
      className="mx-auto w-full h-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
    />
  </motion.div>
);



const ScrollIndicator = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 1 }}
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
  >
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center"
    >
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="w-1 h-3 bg-slate-400 rounded-full mt-2"
      />
    </motion.div>
  </motion.div>
);

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen bg-slate-900 overflow-hidden flex items-center justify-center py-14">
      <BackgroundLayer animation={{ y: ['0%', '0%'], opacity: [1, 0.5, 1] }} />
      <BackgroundLayer animation={{ y: ['0%', '100%'], opacity: [1, 0.5, 0] }} />

      <motion.div style={{ y, opacity }} className="relative z-5 max-w-4xl mx-auto px-6 text-center">
        <HeroHeading />
        <MockupImage />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
          className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto"
        >
        <EmailCapture />
        </motion.div>
      </motion.div>
      {/* <ScrollIndicator /> */}
    </section>
  );
};

export default Hero;
