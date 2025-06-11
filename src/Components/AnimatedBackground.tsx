'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <motion.div
      animate={{
        y: ['0%', '100%'],
        opacity: [1, 0.5, 0],
      }}
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
};

export default AnimatedBackground;