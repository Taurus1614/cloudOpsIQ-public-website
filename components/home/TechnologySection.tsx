'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Card from '../ui/Card';

const TechnologySection = () => {
  const technologies = [
    { name: '.NET 9', description: 'Backend API' },
    { name: 'Blazor WebAssembly', description: 'Modern SPA' },
    { name: 'HotChocolate GraphQL', description: 'Efficient queries' },
    { name: 'SQL Server', description: 'Enterprise database' },
    { name: 'Hangfire', description: 'Background jobs' },
    { name: 'Azure Service Bus', description: 'Event messaging' },
  ];

  return (
    <Section background="white">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-slate-dark mb-6"
        >
          Built on Modern, Proven Technology
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-medium max-w-2xl mx-auto"
        >
          Enterprise-grade technology stack for reliability, performance, and scalability
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="text-center">
              <h3 className="text-xl font-bold text-slate-dark mb-2">
                {tech.name}
              </h3>
              <p className="text-slate-medium">{tech.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default TechnologySection;
