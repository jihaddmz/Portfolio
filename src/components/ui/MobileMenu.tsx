import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { NAV_ITEMS } from '../../utils/constants';
import { menuVariants, menuItemVariants } from '../../utils/animations/menuAnimations';
import IconButton from './IconButton';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavClick: (item: string, e: React.MouseEvent) => void;
}

export default function MobileMenu({ isOpen, onClose, onNavClick }: MobileMenuProps) {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === 'Home') return location.pathname === '/';
    return location.pathname.includes(path.toLowerCase());
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed right-0 top-0 h-full w-64 bg-gray-900/95 backdrop-blur-lg border-l border-gray-800 p-6 z-50"
          >
            <div className="flex justify-end mb-8">
              <IconButton 
                icon={X} 
                onClick={onClose}
                className="text-gray-400"
              />
            </div>
            <nav className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item}
                  custom={i}
                  variants={menuItemVariants}
                >
                  <a
                    href={item === 'Blog' ? '/blog' : `#${item.toLowerCase()}`}
                    onClick={(e) => onNavClick(item, e)}
                    className={`text-gray-300 hover:text-violet-400 transition-colors py-2 px-4 rounded-lg hover:bg-gray-800/50 ${
                      isActive(item) ? 'text-violet-400' : ''
                    }`}
                  >
                    {item}
                  </a>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}