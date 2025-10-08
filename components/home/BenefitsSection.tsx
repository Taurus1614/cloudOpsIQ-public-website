'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, TrendingUp } from 'lucide-react';
import Section from '../ui/Section';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Eliminate Repetitive Tasks',
      description: 'CloudOpsIQ automatically handles onboarding, offboarding, team provisioning, and operational workflows - freeing your team to focus on strategic initiatives',
      metric: 'Save 15+ hours per week per team',
      image: '⚙️',
    },
    {
      icon: ShieldCheck,
      title: 'Complete Audit Trail & Compliance',
      description: 'Every action, change, and event is logged with user attribution, timestamps, and full context. Meet SOC2, ISO 27001, and internal compliance requirements effortlessly',
      metric: '100% audit coverage',
      image: '📋',
    },
    {
      icon: TrendingUp,
      title: 'Built for Enterprise Scale',
      description: 'From 10 to 10,000 users, CloudOpsIQ scales with your organization. Background job processing, queue-based architecture, and optimized GraphQL queries ensure peak performance',
      metric: 'Handle 1M+ events/day',
      image: '📈',
    },
  ];

  return (
    <Section background="gray">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-slate-dark mb-6"
        >
          Transform Your Operations
        </motion.h2>
      </div>

      <div className="space-y-24">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Content */}
            <div className={index % 2 === 1 ? 'md:order-2' : ''}>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-slate-dark mb-4">
                {benefit.title}
              </h3>
              <p className="text-lg text-slate-medium mb-6 leading-relaxed">
                {benefit.description}
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-lg">
                <span className="text-secondary font-semibold">{benefit.metric}</span>
              </div>
            </div>

            {/* Visual */}
            <div className={index % 2 === 1 ? 'md:order-1' : ''}>
              <div className="relative bg-white rounded-2xl shadow-xl p-12 flex items-center justify-center min-h-[300px]">
                <div className="text-9xl">{benefit.image}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default BenefitsSection;
