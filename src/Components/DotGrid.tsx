import { motion } from 'framer-motion';

const DotGrid = () => {
  const dots = [];
  const rows = 20;
  const cols = 30;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      dots.push(
        <motion.div
          key={`${i}-${j}`}
          className="w-1 h-1 bg-slate-600/20 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: (i + j) * 0.1,
            ease: "easeInOut",
          }}
        />
      );
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="grid grid-cols-30 gap-8 p-8 opacity-30">
        {dots}
      </div>
    </div>
  );
};

export default DotGrid;
