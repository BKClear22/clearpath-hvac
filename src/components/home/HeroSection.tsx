"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Calendar, Snowflake, Flame, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-800">
                <Shield className="h-4 w-4" />
                Licensed & Insured
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800">
                <Clock className="h-4 w-4" />
                24/7 Emergency
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              <span className="text-gradient-brand">{SITE_CONFIG.name}</span>
              <br />
              <span className="text-muted-foreground">{SITE_CONFIG.tagline}</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Professional HVAC services for the Austin area. From emergency repairs to new installations,
              our NATE-certified technicians deliver reliable comfort solutions with upfront pricing.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg">
                <Link href="/schedule">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Service
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <a href={`tel:${SITE_CONFIG.phone.replace(/[^0-9]/g, "")}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {SITE_CONFIG.phone}
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <span>Same-Day Service</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <span>Upfront Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                  <span className="text-green-600 font-bold">✓</span>
                </div>
                <span>100% Satisfaction</span>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main card */}
              <div className="rounded-2xl bg-card p-8 shadow-2xl border">
                <div className="flex items-center justify-center gap-8 mb-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100">
                      <Snowflake className="h-8 w-8 text-cyan-600" />
                    </div>
                    <span className="mt-2 text-sm font-medium">Cooling</span>
                  </div>
                  <div className="h-12 w-px bg-border" />
                  <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                      <Flame className="h-8 w-8 text-orange-600" />
                    </div>
                    <span className="mt-2 text-sm font-medium">Heating</span>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground">Expert HVAC Care</h3>
                  <p className="mt-2 text-muted-foreground">
                    Serving Austin & surrounding areas
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                  <div className="rounded-lg bg-muted p-4">
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-xs text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="rounded-lg bg-muted p-4">
                    <div className="text-2xl font-bold text-primary">5000+</div>
                    <div className="text-xs text-muted-foreground">Happy Customers</div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 rounded-lg bg-green-500 px-4 py-2 text-white shadow-lg"
              >
                <span className="font-semibold">A+ BBB Rating</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
