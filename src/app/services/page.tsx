"use client";

import { useState } from "react";
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
  Phone,
} from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";

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

const categories = [
  { id: "all", label: "All Services" },
  { id: "cooling", label: "Cooling" },
  { id: "heating", label: "Heating" },
  { id: "maintenance", label: "Maintenance" },
  { id: "residential", label: "Residential" },
  { id: "iaq", label: "Air Quality" },
];

const categoryStyles: Record<string, string> = {
  cooling: "bg-cyan-100 text-cyan-700",
  heating: "bg-orange-100 text-orange-700",
  maintenance: "bg-blue-100 text-blue-700",
  residential: "bg-green-100 text-green-700",
  iaq: "bg-purple-100 text-purple-700",
};

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices =
    activeCategory === "all"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Services</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From emergency repairs to new installations, we provide comprehensive HVAC solutions
            for residential and commercial properties throughout the Austin area.
          </p>
        </motion.div>

        {/* Filter Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service, index) => {
            const Icon = iconMap[service.icon] || Wrench;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-lg ${
                          service.category === "cooling"
                            ? "bg-cyan-100 text-cyan-600"
                            : service.category === "heating"
                            ? "bg-orange-100 text-orange-600"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        <Icon className="h-7 w-7" />
                      </div>
                      <Badge variant="secondary" className={categoryStyles[service.category]}>
                        {service.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground">{service.description}</p>
                    <p className="mt-4 text-lg font-semibold text-primary">{service.priceRange}</p>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button asChild variant="default" className="flex-1">
                      <Link href={`/services/${service.id}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-2">Not sure what you need?</h3>
              <p className="text-muted-foreground mb-6">
                Our expert technicians can diagnose the issue and recommend the best solution for
                your home.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/schedule">Schedule Diagnostic</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={`tel:${SITE_CONFIG.phone.replace(/[^0-9]/g, "")}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    {SITE_CONFIG.phone}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
