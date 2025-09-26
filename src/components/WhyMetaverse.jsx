import React from 'react';
import { motion } from 'framer-motion';

const WhyMetaverse = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="bg-purple-500 rounded-lg h-96"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Why the Metaverse Matters</h2>
          <p className="text-gray-400 mb-4">
            The metaverse represents the next evolution of the internet, a persistent, shared, 3D virtual space where people can interact with each other and with digital objects. It's not just for gaming; it's a new platform for social connection, work, and creativity.
          </p>
          <p className="text-gray-400">
            By blurring the lines between the physical and digital worlds, the metaverse will unlock new opportunities for everyone. From attending virtual concerts to collaborating in virtual offices, the possibilities are limitless.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyMetaverse;