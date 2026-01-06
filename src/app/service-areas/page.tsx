"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SERVICE_AREAS, SITE_CONFIG, SERVICES } from "@/lib/constants";

const cityDetails: Record<string, { population: string; zip: string; description: string }> = {
  Austin: {
    population: "1M+",
    zip: "78701-78799",
    description: "Our headquarters location, serving all Austin neighborhoods with fast response times.",
  },
  "Round Rock": {
    population: "135K",
    zip: "78664-78681",
    description: "Comprehensive HVAC services for Round Rock homes and businesses.",
  },
  Pflugerville: {
    population: "75K",
    zip: "78660",
    description: "Reliable heating and cooling solutions for the Pflugerville community.",
  },
  "Cedar Park": {
    population: "82K",
    zip: "78613",
    description: "Expert HVAC services for Cedar Park residents and businesses.",
  },
  Leander: {
    population: "75K",
    zip: "78641, 78646",
    description: "Growing with Leander - providing quality HVAC care to this expanding community.",
  },
  Georgetown: {
    population: "85K",
    zip: "78626-78633",
    description: "Trusted HVAC partner for Georgetown's historic and modern homes.",
  },
  Buda: {
    population: "20K",
    zip: "78610",
    description: "Serving Buda with professional heating and cooling services.",
  },
  Kyle: {
    population: "55K",
    zip: "78640",
    description: "Dedicated HVAC services for the Kyle community.",
  },
  Lakeway: {
    population: "20K",
    zip: "78734, 78738",
    description: "Premium HVAC solutions for Lakeway homes and lake properties.",
  },
  Manor: {
    population: "15K",
    zip: "78653",
    description: "Reliable HVAC services for Manor residents and surrounding areas.",
  },
};

export default function ServiceAreasPage() {
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
            Service Areas
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Clear Path HVAC proudly serves Austin and the surrounding Central Texas communities.
            See if we service your area below.
          </p>
        </motion.div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <Card>
            <CardContent className="p-0">
              <div className="aspect-video bg-muted flex items-center justify-center rounded-lg">
                <div className="text-center text-muted-foreground p-8">
                  <MapPin className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">Service Area Map</p>
                  <p className="text-sm">Interactive Google Map would be embedded here</p>
                  <p className="text-sm mt-2">Showing coverage across Central Texas</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Area List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {SERVICE_AREAS.map((area) => (
            <a
              key={area}
              href={`#${area.toLowerCase().replace(" ", "-")}`}
              className="px-4 py-2 rounded-full bg-muted hover:bg-muted/80 text-sm font-medium transition-colors"
            >
              {area}
            </a>
          ))}
        </motion.div>

        {/* City Details */}
        <div className="grid gap-6 md:grid-cols-2 mb-16">
          {SERVICE_AREAS.map((area, index) => {
            const details = cityDetails[area];
            return (
              <motion.div
                key={area}
                id={area.toLowerCase().replace(" ", "-")}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{area}</h3>
                        <p className="text-sm text-muted-foreground">
                          ZIP: {details.zip} | Pop: {details.population}
                        </p>
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <MapPin className="h-5 w-5" />
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{details.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES.slice(0, 4).map((service) => (
                        <span
                          key={service.id}
                          className="text-xs px-2 py-1 bg-muted rounded-full"
                        >
                          {service.title}
                        </span>
                      ))}
                      <span className="text-xs px-2 py-1 bg-muted rounded-full">
                        +{SERVICES.length - 4} more
                      </span>
                    </div>
                    <Button asChild variant="link" className="px-0 mt-4">
                      <Link href={`/schedule?area=${area.toLowerCase().replace(" ", "-")}`}>
                        Schedule in {area} →
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Not Listed Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-2 text-center">Don&apos;t See Your City?</h3>
              <p className="text-muted-foreground text-center mb-6">
                We may still be able to help! Enter your ZIP code to check service availability.
              </p>
              <form className="flex gap-3 max-w-md mx-auto">
                <Input type="text" placeholder="Enter ZIP code" className="flex-1" />
                <Button type="submit">Check</Button>
              </form>
              <p className="text-sm text-muted-foreground text-center mt-4">
                Or call us at{" "}
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/[^0-9]/g, "")}`}
                  className="text-primary font-medium"
                >
                  {SITE_CONFIG.phone}
                </a>{" "}
                to discuss your location.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Why Local Matters */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-center mb-8">Why Choose a Local HVAC Company?</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Fast Response", description: "Local techs mean faster arrival times" },
              { title: "Know Your Area", description: "We understand Central Texas climate needs" },
              { title: "Community Trust", description: "Your neighbors are our customers too" },
              { title: "Local Support", description: "We're here when you need us" },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-3">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-4">Ready to Schedule?</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                We serve all of Central Texas with professional HVAC services.
                Book your appointment today!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/schedule">Schedule Service</Link>
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
        </motion.section>
      </div>
    </div>
  );
}
