import React from 'react';
import { motion } from 'framer-motion';
import { FaCube, FaVrCardboard, FaUsers } from 'react-icons/fa';

const featuresData = [
  {
    icon: <FaCube size={40} />,
    title: 'Decentralized Worlds',
    description: 'Explore vast, user-owned virtual spaces where creativity and ownership thrive.',
  },
  {
    icon: <FaVrCardboard size={40} />,
    title: 'Immersive VR/AR',
    description: 'Engage with the metaverse through cutting-edge virtual and augmented reality experiences.',
  },
  {
    icon: <FaUsers size={40} />,
    title: 'Community Driven',
    description: 'Join a vibrant community of creators, explorers, and innovators shaping the future.',
  },
];

const Features = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">What is the Metaverse?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 border border-gray-700"
            >
              <div className="text-purple-400 mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;