import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <p className="text-lg mb-4">
              I'm a freelance MERN stack developer with a passion for building modern, interactive, and AI-powered web applications. I specialize in creating seamless user experiences and leveraging AI to enhance functionality.
            </p>
            <p className="text-lg mb-4">
              My expertise includes Next.js, React, Node.js, and MongoDB, and I'm always exploring new technologies to stay ahead of the curve. I'm proficient in using tools like Cursor IDE and GPT-4 to accelerate my workflow and deliver high-quality code.
            </p>
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Why Hire Me?</h3>
              <ul className="list-disc list-inside">
                <li className="mb-2">AI-Powered Coding: I use AI tools to code faster and more efficiently.</li>
                <li className="mb-2">Modern Tech Stack: I'm proficient in the latest MERN stack technologies.</li>
                <li className="mb-2">Clean and Scalable Code: I write clean, maintainable, and scalable code.</li>
                <li className="mb-2">Client-Focused: I'm dedicated to understanding your needs and delivering the best solution.</li>
              </ul>
            </div>
            <div className="mt-8">
              <a
                href="/resume.pdf"
                download
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Skills</h3>
            <div className="flex flex-wrap">
              <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2">Next.js</span>
              <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2">React</span>
              <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2">Node.js</span>
              <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2">MongoDB</span>
              <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2">TailwindCSS</span>
              <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2">Framer Motion</span>
              <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-semibold mr-2 mb-2">AI Integration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
