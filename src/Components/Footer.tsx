'use client';

import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6, ease: 'easeInOut' }} 
      className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-slate-500 py-6"
    >
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
        <span>Backed by me</span>
      </div>
      <div className="hidden sm:block w-px h-4 bg-slate-600"></div>
      <span>Built by dreamer, for dreamers.</span>
    </motion.div>
  );
};

export default Footer;
