'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Check, X } from 'lucide-react';

export default function PricingPage() {
  const pricingTiers = [
    {
      name: 'Starter',
      price: '$0',
      period: '/month',
      description: 'Perfect for small teams getting started',
      features: [
        { text: 'Up to 5 users', included: true },
        { text: 'Up to 10 teams', included: true },
        { text: '100 workflow runs/month', included: true },
        { text: 'Basic triggers (user/team lifecycle)', included: true },
        { text: 'Email support', included: true },
        { text: 'Community documentation', included: true },
        { text: 'Custom forms and actions', included: false },
        { text: 'Azure AD integration', included: false },
        { text: 'Advanced audit logs', included: false },
      ],
      cta: 'Get Started Free',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/user/month',
      description: 'For growing teams with advanced needs',
      billingNote: 'Billed annually ($59/month if billed monthly)',
      features: [
        { text: 'Unlimited users', included: true },
        { text: 'Unlimited teams', included: true },
        { text: '10,000 workflow runs/month', included: true },
        { text: 'All trigger types', included: true },
        { text: 'Custom forms and actions', included: true },
        { text: 'Azure AD integration', included: true },
        { text: 'Priority email support', included: true },
        { text: 'Advanced audit logs', included: true },
        { text: 'SLA guarantees', included: false },
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with custom requirements',
      features: [
        { text: 'Everything in Professional', included: true },
        { text: 'Unlimited workflow runs', included: true },
        { text: 'Custom integrations', included: true },
        { text: 'Dedicated support engineer', included: true },
        { text: 'SLA guarantees (99.9% uptime)', included: true },
        { text: 'Custom training and onboarding', included: true },
        { text: 'Advanced security features', included: true },
        { text: 'Custom deployment options', included: true },
        { text: 'API access with higher rate limits', included: true },
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const faqs = [
    {
      question: 'Can I switch plans?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.',
    },
    {
      question: 'What happens if I exceed limits?',
      answer: 'We\'ll notify you when you\'re approaching your limits. You can upgrade to a higher tier or purchase additional capacity.',
    },
    {
      question: 'Do you offer discounts?',
      answer: 'Yes, we offer discounts for annual billing, non-profits, and educational institutions. Contact sales for details.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, all plans come with a 30-day free trial. No credit card required to start.',
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
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-white/90">
              Start free, scale as you grow. No hidden fees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <Section background="gray">
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <Card className={`h-full flex flex-col ${tier.popular ? 'border-2 border-primary shadow-2xl' : ''}`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-dark mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-slate-medium text-sm mb-4">
                    {tier.description}
                  </p>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-5xl font-bold text-slate-dark">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-slate-medium mb-2">{tier.period}</span>
                    )}
                  </div>
                  {tier.billingNote && (
                    <p className="text-sm text-slate-medium mt-2">
                      {tier.billingNote}
                    </p>
                  )}
                </div>

                <div className="flex-grow space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-slate-medium/30 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-slate-dark' : 'text-slate-medium/60'}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  variant={tier.popular ? 'primary' : 'outline'}
                  size="lg"
                  href="/contact"
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-dark text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <h3 className="text-xl font-bold text-slate-dark mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-slate-medium leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              </motion.div>
            ))}
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
            Try CloudOpsIQ free for 30 days. No credit card required.
          </p>
          <Button
            variant="primary"
            size="lg"
            href="/contact"
            className="bg-white text-primary hover:bg-white/90"
          >
            Start Your Free Trial
          </Button>
        </div>
      </Section>
    </>
  );
}
