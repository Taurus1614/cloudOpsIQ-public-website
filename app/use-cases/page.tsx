'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import {
  Headphones, Infinity, Building2, Building, GraduationCap
} from 'lucide-react';

export default function UseCasesPage() {
  const useCases = [
    {
      icon: Headphones,
      title: 'IT Service Management',
      scenario: 'Automate ticket routing, user provisioning, and incident response workflows',
      benefits: [
        'Reduce response time by 60%',
        'Automatic user onboarding/offboarding',
        'Integrated approval workflows',
      ],
      emoji: '🎧',
    },
    {
      icon: Infinity,
      title: 'DevOps Automation',
      scenario: 'Trigger deployment workflows, manage team permissions, and track changes across environments',
      benefits: [
        'Automated deployment approvals',
        'Environment access management',
        'Change tracking and compliance',
      ],
      emoji: '♾️',
    },
    {
      icon: Building2,
      title: 'MSP & IT Consulting',
      scenario: 'Manage multiple client teams, standardize processes, and maintain client separation',
      benefits: [
        'Multi-tenant team structures',
        'Standardized workflows per client',
        'Comprehensive client reporting',
      ],
      emoji: '🏢',
    },
    {
      icon: Building,
      title: 'Enterprise IT Operations',
      scenario: 'Coordinate large-scale operations across departments with centralized governance',
      benefits: [
        'Hierarchical team management',
        'Centralized audit and compliance',
        'Scalable to thousands of users',
      ],
      emoji: '🏛️',
    },
    {
      icon: GraduationCap,
      title: 'Educational Institutions',
      scenario: 'Manage student/staff lifecycles, department access, and course-based teams',
      benefits: [
        'Semester-based automation',
        'Student/staff onboarding',
        'Department-based permissions',
      ],
      emoji: '🎓',
    },
  ];

  const testimonials = [
    {
      quote: "CloudOpsIQ has transformed how we manage our IT operations. We've reduced manual work by 70% and our team can focus on strategic initiatives.",
      author: 'Sarah Johnson',
      role: 'IT Director',
      company: 'TechCorp Industries',
      avatar: '👩‍💼',
    },
    {
      quote: "The automation capabilities are incredible. We've automated over 50 workflows and saved hundreds of hours every month.",
      author: 'Michael Chen',
      role: 'DevOps Manager',
      company: 'Digital Solutions Inc',
      avatar: '👨‍💻',
    },
    {
      quote: "As an MSP, CloudOpsIQ allows us to standardize operations across all our clients while maintaining complete separation and compliance.",
      author: 'Emily Rodriguez',
      role: 'Operations Lead',
      company: 'CloudServices Pro',
      avatar: '👩‍💼',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }} />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Built for IT Operations Teams Across Industries
            </h1>
            <p className="text-xl text-white/90">
              See how CloudOpsIQ helps teams automate operations and achieve excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <Section background="white">
        <div className="space-y-16">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
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
                  <useCase.icon className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-slate-dark mb-4">
                  {useCase.title}
                </h2>
                <p className="text-lg text-slate-medium mb-6 leading-relaxed">
                  {useCase.scenario}
                </p>
                <div className="space-y-3">
                  <h3 className="font-semibold text-slate-dark">Key Benefits:</h3>
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-success rounded-full" />
                      </div>
                      <span className="text-slate-dark">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="relative bg-slate-light rounded-2xl shadow-xl p-12 flex items-center justify-center min-h-[300px]">
                  <div className="text-9xl">{useCase.emoji}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section background="gray">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-dark mb-6"
          >
            What Our Customers Say
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <div className="flex flex-col h-full">
                  <p className="text-slate-dark italic mb-6 flex-grow leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-light rounded-full flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-dark">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-slate-medium">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-slate-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center text-white max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join organizations across industries who trust CloudOpsIQ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              href="/contact"
              className="bg-white text-primary hover:bg-white/90"
            >
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/contact"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
