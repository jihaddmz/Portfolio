import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { NAV_ITEMS, SOCIAL_LINKS } from '../utils/constants';
import MobileMenu from './ui/MobileMenu';
import IconButton from './ui/IconButton';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  const isActive = (path: string) => {
    if (path === 'Home') return location.pathname === '/';
    return location.pathname.includes(path.toLowerCase());
  };

  const handleNavClick = (item: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (item === 'Blogs') {
      navigate('/blog');
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(item.toLowerCase());
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-violet-400 font-bold text-xl"
              >
                JM
              </motion.div>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map((item, index) => (
                <motion.div key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item === 'Blogs' ? '/blog' : `#${item.toLowerCase()}`}
                    onClick={(e) => handleNavClick(item, e)}
                    className={`text-gray-300 hover:text-violet-400 transition-colors ${
                      isActive(item) ? 'text-violet-400' : ''
                    }`}
                  >
                    {item}
                  </a>
                </motion.div>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              {SOCIAL_LINKS.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-300 hover:text-violet-400 transition-colors"
                >
                  {item.platform === 'GitHub' ? (
                    <Github size={20} />
                  ) : (
                    <Linkedin size={20} />
                  )}
                </motion.a>
              ))}
              <div className="md:hidden">
                <IconButton
                  icon={Menu}
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="text-gray-300 hover:text-violet-400"
                />
              </div>
            </div>
          </div>
        </nav>
      </motion.header>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavClick={handleNavClick}
      />
    </>
  );
}