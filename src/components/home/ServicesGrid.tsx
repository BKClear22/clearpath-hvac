"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Snowflake,
  AirVent,
  Flame,
  Heater,
  Wrench,
  Wind,
  Leaf,
  Thermometer,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Snowflake,
  AirVent,
  Flame,
  Heater,
  Wrench,
  Wind,
  Leaf,
  Thermometer,
};

const categoryStyles: Record<string, string> = {
  cooling: "bg-cyan-100 text-cyan-700",
  heating: "bg-orange-100 text-orange-700",
  maintenance: "bg-blue-100 text-blue-700",
  residential: "bg-green-100 text-green-700",
  iaq: "bg-purple-100 text-purple-700",
};

export function ServicesGrid() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive HVAC solutions for your home or business. From repairs to installations,
            we&apos;ve got you covered.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Wrench;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                        service.category === "cooling" ? "bg-cyan-100 text-cyan-600" :
                        service.category === "heating" ? "bg-orange-100 text-orange-600" :
                        "bg-primary/10 text-primary"
                      }`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge variant="secondary" className={categoryStyles[service.category]}>
                        {service.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground text-sm">{service.shortDescription}</p>
                    <p className="mt-3 font-semibold text-primary">{service.priceRange}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="ghost" className="w-full group">
                      <Link href={`/services/${service.id}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
