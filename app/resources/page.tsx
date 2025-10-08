'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import {
  BookOpen, Code, Video, FileText, Zap, Users, ArrowRight
} from 'lucide-react';

export default function ResourcesPage() {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: 'Getting Started',
      description: 'Quick start guides and tutorials to get you up and running',
      resources: [
        'Quick Start Guide',
        'Installation Instructions',
        'First Workflow Tutorial',
        'Video Walkthrough',
      ],
    },
    {
      icon: Users,
      title: 'Administrator Guides',
      description: 'Comprehensive guides for system administrators',
      resources: [
        'Team Management Best Practices',
        'User Lifecycle Workflows',
        'Security Configuration',
        'Azure AD Integration Setup',
      ],
    },
    {
      icon: Code,
      title: 'Developer Documentation',
      description: 'Technical documentation for developers and integrators',
      resources: [
        'GraphQL API Reference',
        'Custom Action Development',
        'Integration Guides',
        'Webhook Setup',
      ],
    },
    {
      icon: Zap,
      title: 'Workflow Library',
      description: 'Pre-built workflow templates and automation scenarios',
      resources: [
        'User Onboarding Workflow',
        'Team Provisioning Template',
        'Approval Process Template',
        'Incident Response Automation',
      ],
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides and feature demonstrations',
      resources: [
        'Platform Overview',
        'Creating Your First Flow',
        'Team Management Deep Dive',
        'Security & Compliance Features',
      ],
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Complete platform documentation and API reference',
      resources: [
        'User Guide',
        'API Documentation',
        'Security White Paper',
        'Compliance Guide',
      ],
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
              Everything You Need to Succeed
            </h1>
            <p className="text-xl text-white/90">
              Comprehensive resources, guides, and documentation to help you get the most out of CloudOpsIQ
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      <Section background="white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resourceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-dark mb-3">
                    {category.title}
                  </h3>
                  <p className="text-slate-medium mb-6 flex-grow">
                    {category.description}
                  </p>
                  <div className="space-y-2">
                    {category.resources.map((resource, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="flex items-center justify-between text-primary hover:text-primary-dark transition-colors group"
                      >
                        <span className="text-sm">{resource}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Featured Resources */}
      <Section background="gray">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-dark mb-6"
          >
            Featured Resources
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card>
            <div className="aspect-video bg-slate-light rounded-lg mb-6 flex items-center justify-center">
              <Video className="w-16 h-16 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-slate-dark mb-3">
              Platform Overview Video
            </h3>
            <p className="text-slate-medium mb-4">
              Watch a comprehensive 15-minute walkthrough of CloudOpsIQ's core features and capabilities.
            </p>
            <Button variant="primary" size="md">
              Watch Now
            </Button>
          </Card>

          <Card>
            <div className="aspect-video bg-slate-light rounded-lg mb-6 flex items-center justify-center">
              <BookOpen className="w-16 h-16 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-slate-dark mb-3">
              Complete User Guide
            </h3>
            <p className="text-slate-medium mb-4">
              Download our comprehensive user guide with step-by-step instructions for all features.
            </p>
            <Button variant="primary" size="md">
              Download PDF
            </Button>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center text-white max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Help Getting Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help you succeed with CloudOpsIQ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              href="/contact"
              className="bg-white text-primary hover:bg-white/90"
            >
              Contact Support
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/contact"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm"
            >
              Schedule Training
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
