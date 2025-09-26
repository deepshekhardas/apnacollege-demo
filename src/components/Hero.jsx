import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Sphere args={[1, 100, 200]} scale={2.4}>
          <MeshDistortMaterial
            color="#3d1c56"
            attach="material"
            distort={0.5}
            speed={2}
          />
        </Sphere>
      </Canvas>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Step Into the Metaverse
        </motion.h1>
        <div className="mt-8 space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-8 py-3 font-semibold text-white bg-purple-600 rounded-lg"
          >
            Explore Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-8 py-3 font-semibold text-white bg-gray-700 rounded-lg"
          >
            Join Community
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;