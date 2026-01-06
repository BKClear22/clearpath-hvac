"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Phone, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";

const pricingCategories = [
  {
    title: "Repairs",
    description: "Fix what's broken and get your system running again",
    priceRange: "$180 - $1,200",
    examples: [
      { item: "Capacitor replacement", price: "$180 - $300" },
      { item: "Contactor replacement", price: "$200 - $400" },
      { item: "Refrigerant recharge", price: "$250 - $600" },
      { item: "Blower motor replacement", price: "$400 - $800" },
      { item: "Compressor replacement", price: "$800 - $1,200" },
    ],
    note: "Diagnostic fee of $89 applies and is waived with repair",
  },
  {
    title: "Maintenance",
    description: "Keep your system running efficiently year-round",
    priceRange: "$79 - $349/year",
    examples: [
      { item: "Single tune-up", price: "$79 - $129" },
      { item: "Basic Plan (2 visits)", price: "$149/year" },
      { item: "Premium Plan (2 visits + priority)", price: "$249/year" },
      { item: "Ultimate Plan (2 visits + parts)", price: "$349/year" },
    ],
    note: "Plan members receive 15% off all repairs",
  },
  {
    title: "Installations",
    description: "New system installation with professional setup",
    priceRange: "$3,800 - $15,000",
    examples: [
      { item: "Basic AC system (2-3 ton)", price: "$3,800 - $5,500" },
      { item: "Mid-range AC system", price: "$5,500 - $8,000" },
      { item: "High-efficiency AC system", price: "$8,000 - $12,000" },
      { item: "Full HVAC system replacement", price: "$10,000 - $15,000" },
    ],
    note: "Includes removal of old equipment, installation, and 1-year warranty",
  },
];

const pricingFactors = [
  {
    title: "System Size",
    description: "Larger homes require larger systems, which cost more to repair or replace.",
  },
  {
    title: "Equipment Type",
    description: "Heat pumps, furnaces, and AC units have different cost structures.",
  },
  {
    title: "Efficiency Rating",
    description: "Higher SEER ratings provide better efficiency but cost more upfront.",
  },
  {
    title: "Complexity",
    description: "Ductwork modifications or electrical upgrades add to installation costs.",
  },
  {
    title: "Brand",
    description: "Premium brands like Carrier and Trane cost more than economy options.",
  },
  {
    title: "Warranty",
    description: "Extended warranties and maintenance plans affect overall pricing.",
  },
];

export default function PricingPage() {
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
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We believe in upfront, honest pricing. Below are typical price ranges for our most
            common services. Your exact quote will be provided before any work begins.
          </p>
        </motion.div>

        {/* Pricing Categories */}
        <div className="grid gap-8 lg:grid-cols-3 mb-16">
          {pricingCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                  <div className="text-2xl font-bold text-primary mt-2">
                    {category.priceRange}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.examples.map((example) => (
                      <li key={example.item} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{example.item}</span>
                        <span className="font-medium">{example.price}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 p-3 bg-muted rounded-lg">
                    <div className="flex items-start gap-2 text-sm">
                      <Info className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{category.note}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* All Services */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Service Price Ranges</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <Card key={service.id}>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1">{service.title}</h3>
                  <p className="text-lg font-bold text-primary">{service.priceRange}</p>
                  <p className="text-sm text-muted-foreground mt-1">{service.shortDescription}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Pricing Factors */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">What Affects Pricing?</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pricingFactors.map((factor) => (
              <div key={factor.title} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold">{factor.title}</h3>
                  <p className="text-sm text-muted-foreground">{factor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Our Promise */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Our Pricing Promise</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-3">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-1">Upfront Quotes</h3>
                  <p className="text-sm text-muted-foreground">
                    Know the cost before we start
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-3">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-1">No Hidden Fees</h3>
                  <p className="text-sm text-muted-foreground">
                    The price quoted is the price paid
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-3">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-1">Fair Pricing</h3>
                  <p className="text-sm text-muted-foreground">
                    Competitive rates for quality work
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-3">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-1">Financing Available</h3>
                  <p className="text-sm text-muted-foreground">
                    Flexible payment options
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Get Your Free Estimate</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Ready to know exactly what your project will cost? Contact us for a free,
            no-obligation estimate.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Request Free Estimate</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={`tel:${SITE_CONFIG.phone.replace(/[^0-9]/g, "")}`}>
                <Phone className="mr-2 h-4 w-4" />
                {SITE_CONFIG.phone}
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            <Link href="/financing" className="text-primary hover:underline">
              View financing options →
            </Link>
          </p>
        </motion.section>
      </div>
    </div>
  );
}
