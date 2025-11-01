"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, githubUrl, liveUrl }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg p-6"
      whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex justify-end">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 mr-4">
          GitHub
        </a>
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
          Live Demo
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
