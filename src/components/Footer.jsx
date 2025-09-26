import React from 'react';
import { FaTwitter, FaGithub, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center mb-4">
          <span className="text-2xl font-bold">Metaverse</span>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaGithub size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaDiscord size={24} />
          </a>
        </div>
        <p className="text-gray-500">Made for the Future</p>
      </div>
    </footer>
  );
};

export default Footer;