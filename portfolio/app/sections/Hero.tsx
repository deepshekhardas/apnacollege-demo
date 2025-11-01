import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">MERN Stack Developer & AI Enthusiast</h1>
        <p className="text-xl mb-8">I build modern, interactive, and AI-powered web applications.</p>
        <div className="flex justify-center gap-8 mb-8">
          <div>
            <p className="text-3xl font-bold">10+</p>
            <p>Projects Delivered</p>
          </div>
          <div>
            <p className="text-3xl font-bold">2+</p>
            <p>Years of Experience</p>
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Let's Talk
        </button>
      </div>
    </section>
  );
};

export default Hero;
