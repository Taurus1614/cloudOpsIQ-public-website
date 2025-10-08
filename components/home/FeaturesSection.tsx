'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, Shield, FileText, Search, Lock } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: 'Event-Driven Automation',
      description: 'Automatically trigger workflows when teams are created, users join, profiles change, or any operational event occurs',
    },
    {
      icon: Users,
      title: 'Intelligent Team Management',
      description: 'Organize teams with custom types, attributes, and hierarchies. Assign operators, manage permissions, and track everything',
    },
    {
      icon: Shield,
      title: 'Granular Access Control',
      description: 'Four-tier role system (Reader, Team Operator, Global Operator, Administrator) with profile-based permissions',
    },
    {
      icon: FileText,
      title: 'Custom Forms & Actions',
      description: 'Build dynamic forms with validation, collect data, and trigger automated actions based on responses',
    },
    {
      icon: Search,
      title: 'Comprehensive Audit Trails',
      description: 'Track every change, action, and event with detailed audit logs for compliance and governance',
    },
    {
      icon: Lock,
      title: 'Microsoft Entra Integration',
      description: 'Seamless single sign-on with Azure AD, group-based role assignments, and enterprise identity management',
    },
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
          Everything You Need to Automate Operations
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-medium max-w-3xl mx-auto"
        >
          Powerful features designed for enterprise teams who need reliable, secure, and intelligent workflow automation
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={feature.title}>
            <div className="flex flex-col h-full">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-medium leading-relaxed">
                {feature.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default FeaturesSection;
