import React from 'react';
import { motion } from 'framer-motion';
import { useParallax } from '../../utils/hooks/useParallax';

interface ParallaxContainerProps {
  children: React.ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
}

export default function ParallaxContainer({
  children,
  speed = 0.1,
  reverse = false,
  className = '',
}: ParallaxContainerProps) {
  const offset = useParallax({ speed, reverse });

  return (
    <motion.div
      animate={{
        x: offset.x,
        y: offset.y,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}