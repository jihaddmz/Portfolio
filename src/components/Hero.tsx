import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="relative w-32 h-32 mb-8"
          >
            <img
              src="https://avatars.githubusercontent.com/u/124468932?v=4"
              alt="Jihad Mahfouz"
              className="rounded-full object-cover w-full h-full border-4 border-violet-500"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-20 animate-pulse"></div>
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text animate-gradient">
              Jihad Mahfouz
            </span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl md:text-2xl text-gray-400 mb-8"
          >
            Software Developer
          </motion.p>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-300 max-w-2xl mb-12"
          >
            Passionate about creating elegant solutions and building exceptional digital experiences.
            Specializing in modern web & mobile technologies.
          </motion.p>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex gap-4"
          >
            <Button href="#projects" icon={ArrowRight}>View My Work</Button>
            <Button href="#contact" variant="outline">Contact Me</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}