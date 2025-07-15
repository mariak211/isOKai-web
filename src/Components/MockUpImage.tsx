
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

const MOCKUP_IMAGES = [
  '/icons/morningfocus.svg',
'/icons/moodcheckin.svg',
    '/icons/ClarityScore.svg',
  '/icons/isokaistreak.svg',
];


const MockupImage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % MOCKUP_IMAGES.length);
    }, 7000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[180px] h-[320px] sm:w-[240px] sm:h-[400px] lg:w-[300px] lg:h-[500px] mx-auto mt-10 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <Image
            src={MOCKUP_IMAGES[index]}
            alt={`Mockup ${index + 1}`}
            width={360}
            height={720}
            className="w-full h-full object-contain"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MockupImage;
