import React from 'react';
import { motion } from 'framer-motion';
import { techBadgeVariants } from '../../utils/animations/projectAnimations';

interface TechBadgeProps {
  tech: string;
  index: number;
}

export default function TechBadge({ tech, index }: TechBadgeProps) {
  return (
    <motion.span
      custom={index}
      variants={techBadgeVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="px-3 py-1 text-sm bg-violet-500/20 text-violet-400 rounded-full"
    >
      {tech}
    </motion.span>
  );
}