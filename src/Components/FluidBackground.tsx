import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const FluidBackground = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      element.style.setProperty('--mouse-x', `${x * 100}%`);
      element.style.setProperty('--mouse-y', `${y * 100}%`);
    };

    element.addEventListener('mousemove', handleMouseMove);
    return () => element.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-green-500/5" />
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/10 to-green-400/10 blur-3xl"
        animate={{ x: [0, 100, -50, 0], y: [0, -100, 50, 0], scale: [1, 1.2, 0.8, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{ left: 'var(--mouse-x, 20%)', top: 'var(--mouse-y, 30%)' }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-purple-400/8 to-blue-400/8 blur-2xl"
        animate={{ x: [0, -80, 120, 0], y: [0, 80, -60, 0], scale: [1, 0.7, 1.3, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ right: 'calc(100% - var(--mouse-x, 70%))', bottom: 'calc(100% - var(--mouse-y, 60%))' }}
      />
    </div>
  );
};

export default FluidBackground;