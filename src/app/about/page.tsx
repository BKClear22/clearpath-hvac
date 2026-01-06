"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Users, Shield, Heart, Clock, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "Honest assessments, transparent pricing, and work we stand behind.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "NATE-certified technicians committed to quality workmanship.",
  },
  {
    icon: Heart,
    title: "Care",
    description: "We treat your home like our own and your family like ours.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "On-time arrivals, same-day service, and keeping our promises.",
  },
];

const team = [
  {
    name: "Mike Thompson",
    role: "Founder & Lead Technician",
    bio: "25+ years of HVAC experience. NATE Master Certified.",
  },
  {
    name: "Sarah Chen",
    role: "Operations Manager",
    bio: "Ensures every customer receives exceptional service and support.",
  },
  {
    name: "David Rodriguez",
    role: "Senior Technician",
    bio: "Specializes in complex installations and system optimization.",
  },
  {
    name: "Emily Parker",
    role: "Customer Experience",
    bio: "Your first point of contact for scheduling and questions.",
  },
];

const certifications = [
  "NATE Certified",
  "EPA 608 Certified",
  "TDLR Licensed",
  "BBB A+ Rated",
  "Carrier Factory Authorized",
  "Trane Comfort Specialist",
];

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            About {SITE_CONFIG.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Family-owned and operated since 2008, we&apos;ve been keeping Austin families comfortable
            through every season. Our commitment to quality service and customer satisfaction
            has made us one of the most trusted HVAC companies in Central Texas.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                To deliver reliable comfort solutions with integrity, expertise, and care.
                We believe every home deserves professional HVAC service at fair prices,
                backed by technicians who treat you like family.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Values */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-10">Our Values</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full text-center">
                    <CardContent className="p-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years in Business</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.9</div>
              <div className="flex items-center justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Emergency Service</div>
            </div>
          </div>
        </motion.section>

        {/* Team */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted mx-auto mb-4">
                      <Users className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-primary mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-10">Certifications & Awards</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted"
              >
                <Award className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Community */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-muted/50">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-4">Community Involvement</h2>
              <p className="text-muted-foreground mb-6">
                We believe in giving back to the community that has supported us. Clear Path HVAC
                proudly partners with local organizations to provide HVAC services to families
                in need, sponsors youth sports teams, and participates in neighborhood clean-up
                events throughout Austin.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Heart className="h-4 w-4 text-primary" />
                  <span>Habitat for Humanity Partner</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Heart className="h-4 w-4 text-primary" />
                  <span>Austin Youth Sports Sponsor</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Heart className="h-4 w-4 text-primary" />
                  <span>Keep Austin Beautiful</span>
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
          <h2 className="text-2xl font-bold mb-4">Ready to Experience the Clear Path Difference?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join thousands of satisfied Austin homeowners who trust us with their comfort.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/schedule">Schedule Service</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
