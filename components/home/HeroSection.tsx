'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Play, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient pt-20">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Transform Your IT Operations with{' '}
              <span className="text-secondary">Intelligent Automation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
            >
              CloudOpsIQ empowers enterprise teams to automate workflows, manage operations efficiently, and maintain complete control with enterprise-grade security and compliance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                href="/contact"
                className="group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 flex items-center gap-6 text-sm text-white/80"
            >
              <span>✓ No credit card required</span>
              <span>✓ 30-day free trial</span>
              <span>✓ Cancel anytime</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            {/* Dashboard Mockup */}
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>

              {/* Mock Dashboard Content */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                    className="bg-white/20 backdrop-blur rounded-lg p-4"
                  >
                    <div className="text-white/60 text-sm mb-1">Teams</div>
                    <div className="text-white text-2xl font-bold">127</div>
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    className="bg-white/20 backdrop-blur rounded-lg p-4"
                  >
                    <div className="text-white/60 text-sm mb-1">Users</div>
                    <div className="text-white text-2xl font-bold">2,451</div>
                  </motion.div>
                </div>

                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="bg-white/20 backdrop-blur rounded-lg p-4"
                >
                  <div className="text-white/60 text-sm mb-2">Active Workflows</div>
                  <div className="space-y-2">
                    <div className="h-2 bg-secondary rounded-full w-3/4" />
                    <div className="h-2 bg-success rounded-full w-1/2" />
                    <div className="h-2 bg-warning rounded-full w-5/6" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  className="bg-white/20 backdrop-blur rounded-lg p-4"
                >
                  <div className="text-white/60 text-sm mb-1">Automation Runs Today</div>
                  <div className="text-white text-2xl font-bold">10,247</div>
                </motion.div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-success rounded-xl p-4 shadow-lg"
            >
              <div className="text-white text-sm font-semibold">99.9% Uptime</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-secondary rounded-xl p-4 shadow-lg"
            >
              <div className="text-white text-sm font-semibold">10K+ Workflows</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
