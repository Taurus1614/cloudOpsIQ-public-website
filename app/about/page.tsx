'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Target, Shield, Zap, Users, Mail } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge automation solutions that solve real operational challenges.',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security is at the core of everything we build, ensuring your data and operations are always protected.',
    },
    {
      icon: Target,
      title: 'Reliability',
      description: '99.9% uptime SLA and robust architecture ensure your operations never skip a beat.',
    },
    {
      icon: Users,
      title: 'Customer Success',
      description: 'Your success is our success. We\'re committed to helping you achieve operational excellence.',
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
              Built by Operations Experts, for Operations Teams
            </h1>
            <p className="text-xl text-white/90">
              Our mission is to empower every organization to achieve operational excellence through intelligent automation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-dark mb-8 text-center">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-slate-medium leading-relaxed">
              <p>
                CloudOpsIQ was born from a simple observation: IT operations teams spend too much time on repetitive tasks that could be automated, leaving little time for strategic initiatives that drive real business value.
              </p>
              <p>
                After years of experiencing these challenges firsthand in enterprise environments, we set out to build a platform that would fundamentally change how organizations manage their IT operations. We wanted to create a solution that was powerful enough for complex enterprise needs, yet simple enough that any team could start automating their workflows within minutes.
              </p>
              <p>
                Today, CloudOpsIQ serves organizations across industries, helping them automate thousands of workflows, manage complex team structures, and maintain complete visibility and control over their operations - all while meeting the most stringent security and compliance requirements.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section background="gray">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <h3 className="text-3xl font-bold text-slate-dark mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-slate-medium leading-relaxed">
                Empower every organization to achieve operational excellence through intelligent automation, enabling teams to focus on what matters most: innovation and strategic growth.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <h3 className="text-3xl font-bold text-slate-dark mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-slate-medium leading-relaxed">
                A world where every IT operations team is empowered by intelligent automation, where manual work is a thing of the past, and where organizations can scale effortlessly.
              </p>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Values */}
      <Section background="white">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-dark mb-6"
          >
            Our Values
          </motion.h2>
          <p className="text-xl text-slate-medium max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-dark mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-medium">
                    {value.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Info */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-dark mb-8">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-dark mb-2">Support</h3>
                <a href="mailto:support@cloudopsiq.com" className="text-primary hover:underline">
                  support@cloudopsiq.com
                </a>
              </Card>
              <Card>
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-dark mb-2">Sales</h3>
                <a href="mailto:sales@cloudopsiq.com" className="text-primary hover:underline">
                  sales@cloudopsiq.com
                </a>
              </Card>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center text-white max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join Us?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start automating your operations today
          </p>
          <Button
            variant="primary"
            size="lg"
            href="/contact"
            className="bg-white text-primary hover:bg-white/90"
          >
            Start Free Trial
          </Button>
        </div>
      </Section>
    </>
  );
}
