"use client";

import { motion } from "framer-motion";
import { Shield, Clock, DollarSign, Award, Users, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Same-Day Service",
    description: "Emergency repairs when you need them most. Call before noon for same-day availability.",
  },
  {
    icon: DollarSign,
    title: "Upfront Pricing",
    description: "No hidden fees or surprise charges. Know the cost before any work begins.",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed, bonded, and insured for your peace of mind.",
  },
  {
    icon: Award,
    title: "NATE Certified",
    description: "Our technicians are certified by North American Technician Excellence.",
  },
  {
    icon: ThumbsUp,
    title: "100% Satisfaction",
    description: "We stand behind our work with a satisfaction guarantee.",
  },
  {
    icon: Users,
    title: "Family Owned",
    description: "Local, family-owned business serving the Austin community.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Clear Path HVAC?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;re committed to delivering exceptional service and lasting comfort for your home.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-1 text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
