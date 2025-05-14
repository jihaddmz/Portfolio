import React from 'react';
import { Code, Globe, Database, Smartphone } from 'lucide-react';
import Card from './ui/Card';
import SectionTitle from './ui/SectionTitle';

const skills = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Passionate in building responsive and interactive web applications using modern frameworks and tools.'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Proficient in creating scalable, Responsive & intuitive mobile applications.'
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Skilled in designing and optimizing database structures for efficient data management.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <SectionTitle highlight="Me">About</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}