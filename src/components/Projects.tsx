import { motion } from 'framer-motion';
import { PROJECTS } from '../utils/constants/projects';
import ProjectCard from './ui/ProjectCard';
import SectionTitle from './ui/SectionTitle';

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle highlight="Projects">Featured</SectionTitle>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}