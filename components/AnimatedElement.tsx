// file: components/AnimatedElement.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Komponen ini membungkus elemen lain untuk memberikan animasi
 * "fade-in & slide-up" saat elemen masuk ke dalam layar.
 */
const AnimatedElement = ({
  children,
  className,
  delay = 0,
}: AnimatedElementProps) => {
  // Konfigurasi varian animasi
  const variants = {
    hidden: { opacity: 0, y: 20 }, // Keadaan awal: tidak terlihat dan sedikit di bawah
    visible: { opacity: 1, y: 0 }, // Keadaan akhir: terlihat sepenuhnya di posisi asli
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible" // Memicu animasi saat elemen masuk ke viewport
      viewport={{ once: true, amount: 0.2 }} // Animasi hanya berjalan sekali
      transition={{ duration: 0.6, delay }} // Durasi dan jeda animasi
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement;
