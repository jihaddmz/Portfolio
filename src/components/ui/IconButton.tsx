import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface IconButtonProps {
  icon: LucideIcon;
  onClick?: () => void;
  className?: string;
}

export default function IconButton({ icon: Icon, onClick, className = '' }: IconButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`p-2 hover:bg-gray-800 rounded-full transition-colors ${className}`}
    >
      <Icon className="w-6 h-6" />
    </motion.button>
  );
}