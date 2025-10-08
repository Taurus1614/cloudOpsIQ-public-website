'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import {
  Workflow, Users, Shield, FileText, Activity,
  MessageSquare, BarChart3, Zap
} from 'lucide-react';

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState(0);

  const featureCategories = [
    {
      id: 'automation',
      icon: Workflow,
      title: 'Workflow Automation Engine',
      description: 'Build, deploy, and monitor automated workflows with our powerful automation engine',
      details: [
        'Event-driven triggers (16+ built-in trigger types)',
        'Drag-and-drop flow designer',
        'Conditional logic and branching',
        'Parallel action execution',
        'Real-time monitoring and logging',
        'Manual and automated triggers',
        'Scheduled/cron-based automation',
        'Webhook and API request triggers',
      ],
    },
    {
      id: 'team-management',
      icon: Users,
      title: 'Team & User Management',
      description: 'Sophisticated team structures with hierarchies and custom attributes',
      details: [
        'Hierarchical team structures',
        'Team Types with custom attributes',
        'User Types for categorization',
        'Custom attributes for teams and users',
        'Profile-based role assignments',
        'Team operator assignments',
        'Bulk user operations',
        'User lifecycle management (create, update, disable, delete, reactivate)',
      ],
    },
    {
      id: 'access-control',
      icon: Shield,
      title: 'Access Control & Security',
      description: 'Enterprise-grade security with granular permissions and Azure AD integration',
      details: [
        'Four-tier role hierarchy (Reader → Team Operator → Global Operator → Administrator)',
        'Profile-based permissions',
        'Group-based role assignments',
        'Azure AD/Microsoft Entra integration',
        'Identity provider support',
        'Fine-grained authorization policies',
        'Team-scoped permissions',
      ],
    },
    {
      id: 'forms',
      icon: FileText,
      title: 'Forms & Data Collection',
      description: 'Dynamic form builder with validation and conditional fields',
      details: [
        'Dynamic form builder',
        'Multiple field types (text, number, dropdown, checkbox, date, file upload)',
        'Validation rules and regex patterns',
        'Conditional fields',
        'Signature capture',
        'User type attribute mapping',
        'Form versioning',
        'Submission tracking',
      ],
    },
    {
      id: 'actions',
      icon: Zap,
      title: 'Actions & Executors',
      description: 'Pre-built and custom actions to automate any operational task',
      details: [
        'Pre-built action executors',
        'Custom action development',
        'Configurable parameters',
        'Message/notification actions',
        'Form-based actions',
        'Manual approval actions',
        'Integration actions (REST API, webhooks)',
        'Action versioning and rollback',
      ],
    },
    {
      id: 'audit',
      icon: Activity,
      title: 'Audit & Compliance',
      description: 'Complete audit trail for every action, change, and event',
      details: [
        'Comprehensive audit logging',
        'User-attributed changes',
        'Before/after field comparisons',
        'Searchable audit trail',
        'Export capabilities',
        'Retention policies',
        'Compliance reporting',
      ],
    },
    {
      id: 'messaging',
      icon: MessageSquare,
      title: 'Messaging & Notifications',
      description: 'Template-based messaging system with multi-channel support',
      details: [
        'Template-based messaging',
        'Variable substitution (Scriban templating)',
        'Multi-channel support',
        'Scheduled messages',
        'Message tracking',
        'Delivery confirmation',
      ],
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'Dashboard & Analytics',
      description: 'Real-time operational metrics and performance insights',
      details: [
        'Real-time operational metrics',
        'Flow run statistics',
        'Team and user analytics',
        'Running/pending/completed flows',
        'Performance charts (ApexCharts integration)',
        'Customizable widgets',
        'Export and reporting',
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
              Everything You Need to Automate IT Operations
            </h1>
            <p className="text-xl text-white/90">
              Comprehensive platform for workflow automation, team management, and operational excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <Section background="white">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-2">
              {featureCategories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                    activeTab === index
                      ? 'bg-primary text-white'
                      : 'text-slate-medium hover:bg-slate-light'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span className="font-medium">{category.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="mb-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      {React.createElement(featureCategories[activeTab].icon, {
                        className: 'w-8 h-8 text-primary',
                      })}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-slate-dark mb-2">
                        {featureCategories[activeTab].title}
                      </h2>
                      <p className="text-lg text-slate-medium">
                        {featureCategories[activeTab].description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {featureCategories[activeTab].details.map((detail, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-success rounded-full" />
                        </div>
                        <p className="text-slate-dark">{detail}</p>
                      </motion.div>
                    ))}
                  </div>
                </Card>

                {/* Visual Placeholder */}
                <div className="bg-slate-light rounded-2xl p-12 flex items-center justify-center min-h-[300px]">
                  <div className="text-center">
                    <div className="text-6xl mb-4">
                      {React.createElement(featureCategories[activeTab].icon, {
                        className: 'w-24 h-24 text-primary mx-auto',
                      })}
                    </div>
                    <p className="text-slate-medium">Feature visualization</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center text-white max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            See how CloudOpsIQ can transform your operations
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
