"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
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
  Check,
  ArrowRight,
  Phone,
  Calendar,
  Star,
  Clock,
  DollarSign,
  Shield,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SERVICES, SITE_CONFIG, TESTIMONIALS } from "@/lib/constants";

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

const serviceDetails: Record<string, {
  symptoms: string[];
  included: string[];
  process: string[];
}> = {
  "ac-repair": {
    symptoms: [
      "AC not blowing cold air",
      "Unit making strange noises",
      "System short cycling",
      "High humidity indoors",
      "Unusual odors from vents",
      "Refrigerant leaks",
    ],
    included: [
      "Complete system diagnostic",
      "Refrigerant level check",
      "Electrical component inspection",
      "Thermostat calibration",
      "Filter inspection",
      "Written repair estimate",
    ],
    process: [
      "Schedule your service call",
      "Technician performs diagnostic",
      "Review repair options and pricing",
      "Expert repair completed",
      "System tested for performance",
    ],
  },
  "ac-installation": {
    symptoms: [
      "Current system over 15 years old",
      "Frequent costly repairs",
      "Uneven cooling throughout home",
      "Rising energy bills",
      "System uses R-22 refrigerant",
      "Inadequate cooling capacity",
    ],
    included: [
      "Free in-home estimate",
      "Load calculation for proper sizing",
      "Equipment and labor warranty",
      "Removal of old equipment",
      "Professional installation",
      "System setup and testing",
    ],
    process: [
      "Schedule free estimate",
      "Review system options",
      "Choose financing if needed",
      "Professional installation",
      "Final walkthrough and training",
    ],
  },
  "heating-repair": {
    symptoms: [
      "No heat from furnace",
      "Pilot light issues",
      "Strange furnace noises",
      "Cold spots in home",
      "Frequent cycling",
      "Carbon monoxide detector alerts",
    ],
    included: [
      "Complete heating diagnostic",
      "Safety inspection",
      "Gas pressure check",
      "Heat exchanger inspection",
      "Thermostat calibration",
      "Written repair estimate",
    ],
    process: [
      "Schedule your service call",
      "Technician performs diagnostic",
      "Review repair options",
      "Expert repair completed",
      "Safety verification",
    ],
  },
  "heating-installation": {
    symptoms: [
      "Current furnace over 15 years old",
      "Frequent repairs needed",
      "High heating bills",
      "Uneven heating",
      "System lacks modern features",
      "Home additions requiring more heat",
    ],
    included: [
      "Free in-home estimate",
      "Heat load calculation",
      "Equipment and labor warranty",
      "Old system removal",
      "Professional installation",
      "System optimization",
    ],
    process: [
      "Schedule free estimate",
      "Review heating options",
      "Select financing option",
      "Professional installation",
      "Final testing and walkthrough",
    ],
  },
  "maintenance": {
    symptoms: [
      "Haven't had a tune-up in over a year",
      "System running less efficiently",
      "Want to prevent breakdowns",
      "Extend equipment lifespan",
      "Maintain warranty coverage",
      "Improve indoor air quality",
    ],
    included: [
      "Seasonal tune-up visits",
      "Priority scheduling",
      "15% discount on repairs",
      "No overtime charges",
      "Filter reminders",
      "Transferable coverage",
    ],
    process: [
      "Choose your plan level",
      "Schedule first tune-up",
      "Technician optimizes system",
      "Receive maintenance report",
      "Enjoy year-round comfort",
    ],
  },
  "ductwork": {
    symptoms: [
      "Rooms that don't cool/heat evenly",
      "Excessive dust in home",
      "High energy bills",
      "Whistling or rattling from ducts",
      "Visible duct damage",
      "Old or deteriorating duct tape",
    ],
    included: [
      "Duct system inspection",
      "Airflow testing",
      "Leak detection",
      "Professional sealing",
      "Balance adjustments",
      "Before/after documentation",
    ],
    process: [
      "Schedule duct inspection",
      "Receive detailed assessment",
      "Review repair options",
      "Professional duct work",
      "Verify improved airflow",
    ],
  },
  "indoor-air-quality": {
    symptoms: [
      "Allergy symptoms at home",
      "Excessive dust accumulation",
      "Musty or stale odors",
      "Dry or humid air",
      "Respiratory irritation",
      "Visible mold concerns",
    ],
    included: [
      "Indoor air quality assessment",
      "Filtration recommendations",
      "Humidity level testing",
      "Product demonstrations",
      "Professional installation",
      "Maintenance guidance",
    ],
    process: [
      "Schedule IAQ assessment",
      "Review air quality report",
      "Select solutions",
      "Professional installation",
      "Enjoy cleaner air",
    ],
  },
  "smart-thermostats": {
    symptoms: [
      "Want remote temperature control",
      "Looking to save on energy",
      "Current thermostat is outdated",
      "Want scheduling features",
      "Interested in smart home integration",
      "Need better temperature accuracy",
    ],
    included: [
      "Thermostat selection guidance",
      "Professional installation",
      "WiFi setup and configuration",
      "App setup assistance",
      "Programming optimization",
      "Usage training",
    ],
    process: [
      "Choose your thermostat",
      "Schedule installation",
      "Professional setup",
      "App configuration",
      "Start saving energy",
    ],
  },
};

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const service = SERVICES.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  const details = serviceDetails[slug] || serviceDetails["ac-repair"];
  const Icon = iconMap[service.icon] || Wrench;
  const relatedServices = SERVICES.filter((s) => s.id !== slug && s.category === service.category).slice(0, 3);
  const relevantTestimonials = TESTIMONIALS.filter((t) =>
    t.service.toLowerCase().includes(service.title.toLowerCase().split(" ")[0])
  ).slice(0, 2);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-primary">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{service.title}</span>
        </nav>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-xl ${
                  service.category === "cooling"
                    ? "bg-cyan-100 text-cyan-600"
                    : service.category === "heating"
                    ? "bg-orange-100 text-orange-600"
                    : "bg-primary/10 text-primary"
                }`}
              >
                <Icon className="h-8 w-8" />
              </div>
              <Badge variant="secondary" className="text-sm">
                {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
              </Badge>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">{service.description}</p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-sm">Same-Day Available</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                <span className="text-sm">Upfront Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm">Satisfaction Guaranteed</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href={`/schedule?service=${service.id}`}>
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule Service
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`tel:${SITE_CONFIG.phone.replace(/[^0-9]/g, "")}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {SITE_CONFIG.phone}
                </a>
              </Button>
            </div>
          </div>

          {/* Price Card */}
          <Card className="lg:sticky lg:top-24">
            <CardHeader>
              <CardTitle>Pricing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary mb-2">{service.priceRange}</div>
              <p className="text-sm text-muted-foreground mb-6">
                Final price depends on system type and repair complexity. We always provide upfront pricing before work begins.
              </p>
              <Separator className="mb-6" />
              <h4 className="font-semibold mb-3">What&apos;s Included:</h4>
              <ul className="space-y-2">
                {details.included.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full mt-6">
                <Link href="/contact">Get a Free Estimate</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Symptoms Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">Signs You May Need {service.title}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {details.symptoms.map((symptom) => (
              <div
                key={symptom}
                className="flex items-start gap-3 p-4 rounded-lg bg-muted/50"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                  !
                </div>
                <span>{symptom}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Process Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6">Our Process</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {details.process.map((step, index) => (
              <div key={step} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg mb-3">
                    {index + 1}
                  </div>
                  <p className="text-sm">{step}</p>
                </div>
                {index < details.process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials */}
        {relevantTestimonials.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {relevantTestimonials.map((testimonial) => (
                <Card key={testimonial.id}>
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                    <p className="font-semibold">{testimonial.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button asChild variant="outline">
                <Link href="/reviews">Read All Reviews</Link>
              </Button>
            </div>
          </motion.section>
        )}

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6">Related Services</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {relatedServices.map((related) => {
                const RelatedIcon = iconMap[related.icon] || Wrench;
                return (
                  <Card key={related.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-lg mb-4 ${
                          related.category === "cooling"
                            ? "bg-cyan-100 text-cyan-600"
                            : related.category === "heating"
                            ? "bg-orange-100 text-orange-600"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        <RelatedIcon className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold mb-2">{related.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {related.shortDescription}
                      </p>
                      <Button asChild variant="ghost" className="p-0 h-auto">
                        <Link href={`/services/${related.id}`}>
                          Learn More <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
