
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Hero from "@/src/Components/Hero";
import Footer from "@/src/Components/Footer";
import WhatIsIsOKai from "@/src/Components/WhatIsIsOKai";
import HowIUseIt from "@/src/Components/HowIUseIt";
import WhoThisIsFor from "@/src/Components/WhoThisIsFor";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const BackgroundLayer = ({ animation }: { animation: any }) => (
  <motion.div
    animate={animation}
    transition={{
      duration: 10,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
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

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative min-h-screen bg-green-200">
      {/* Background layer behind everything */}
      <BackgroundLayer animation={{ y: ["0%", "0%"], opacity: [1, 0.5, 1] }} />

      {/* Foreground content */}
      <div className="relative z-10 space-y-16">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Hero />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <WhatIsIsOKai />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <HowIUseIt />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <WhoThisIsFor />
        </motion.section>

        <motion.footer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Footer />
        </motion.footer>
      </div>
    </div>
  );
}
