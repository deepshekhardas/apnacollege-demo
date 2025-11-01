import React from 'react';

const testimonials = [
  {
    name: 'John Doe',
    company: 'Tech Solutions Inc.',
    review: 'Working with this developer was a fantastic experience. They delivered a high-quality product on time and exceeded my expectations.',
  },
  {
    name: 'Jane Smith',
    company: 'Creative Minds Agency',
    review: 'I was impressed by their professionalism and attention to detail. They transformed my vision into a stunning reality.',
  },
  {
    name: 'Sam Wilson',
    company: 'Innovate Co.',
    review: 'Their expertise in AI integration was a game-changer for my project. I highly recommend their services.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <p className="text-gray-400 mb-4">"{testimonial.review}"</p>
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
