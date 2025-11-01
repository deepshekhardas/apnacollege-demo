import React from 'react';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    title: 'Web App Development',
    description: 'Building responsive and high-performance web applications using the MERN stack.',
  },
  {
    title: 'Dashboard Creation',
    description: 'Designing and developing intuitive and data-driven dashboards for your business.',
  },
  {
    title: 'API Integration',
    description: 'Integrating third-party APIs to extend the functionality of your applications.',
  },
  {
    title: 'AI Automation',
    description: 'Leveraging AI to automate tasks and improve the efficiency of your business processes.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
