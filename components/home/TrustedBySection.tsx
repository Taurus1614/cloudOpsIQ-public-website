'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';

const TrustedBySection = () => {
  const stats = [
    { value: '10,000+', label: 'Automated Workflows' },
    { value: '99.9%', label: 'Uptime SLA' },
    { value: 'Enterprise', label: 'Grade Security' },
    { value: '50+', label: 'Integration Points' },
  ];

  return (
    <Section background="gray">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-slate-dark mb-4"
        >
          Trusted by Forward-Thinking Organizations
        </motion.h2>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold bg-cta-gradient bg-clip-text text-transparent mb-2">
              {stat.value}
            </div>
            <div className="text-slate-medium">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default TrustedBySection;
