import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'SaaS Dashboard',
    description: 'A responsive dashboard for a SaaS application, built with Next.js, Recharts, and TailwindCSS.',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Booking App',
    description: 'A full-stack booking application with a custom booking system and payment integration.',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'AI Tool Clone',
    description: 'A clone of a popular AI tool, demonstrating my ability to work with AI APIs and complex UIs.',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'E-commerce Admin',
    description: 'An admin panel for an e-commerce store, with features like order management and product tracking.',
    githubUrl: '#',
    liveUrl: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
