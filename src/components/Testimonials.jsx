import React from 'react';
import { motion } from 'framer-motion';

const testimonialsData = [
  {
    avatar: 'https://i.pravatar.cc/150?img=1',
    name: 'Alex Johnson',
    quote: 'The metaverse is a game-changer! The possibilities for social interaction and creativity are endless.',
  },
  {
    avatar: 'https://i.pravatar.cc/150?img=2',
    name: 'Samantha Lee',
    quote: 'I\'ve met so many amazing people in the metaverse. It\'s a new frontier for community building.',
  },
  {
    avatar: 'https://i.pravatar.cc/150?img=3',
    name: 'David Chen',
    quote: 'As a creator, the metaverse has opened up a whole new world of opportunities for my work.',
  },
];

const Testimonials = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Community is Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 border border-gray-700"
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
              <p className="text-gray-400">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;