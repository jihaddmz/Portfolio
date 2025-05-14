import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { projectCardVariants } from '../../utils/animations/projectAnimations';
import TechBadge from './TechBadge';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  icon: LucideIcon;
  link: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  icon: Icon,
  link,
  index
}: ProjectCardProps) {
  return (
    <motion.div
      custom={index}
      variants={projectCardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-violet-500 transition-colors"
    >
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-violet-500/20 rounded-lg">
            <Icon className="w-6 h-6 text-violet-400" />
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <TechBadge key={tech} tech={tech} index={i} />
          ))}
        </div>
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 5 }}
          className="inline-flex items-center text-violet-400 hover:text-violet-300"
        >
          View Project
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
}