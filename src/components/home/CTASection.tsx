"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-brand p-8 md:p-12 lg:p-16"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          </div>

          <div className="relative text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Ready for Reliable Comfort?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Schedule your service today and experience the Clear Path difference.
              Same-day appointments available.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link href="/schedule">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Service
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg bg-transparent border-white text-white hover:bg-white/10"
              >
                <a href={`tel:${SITE_CONFIG.phone.replace(/[^0-9]/g, "")}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call {SITE_CONFIG.phone}
                </a>
              </Button>
            </div>

            <p className="mt-6 text-sm text-white/60">
              24/7 Emergency Service Available
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
