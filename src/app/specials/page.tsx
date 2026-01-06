"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Tag, Clock, Gift, Percent } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SPECIALS, SITE_CONFIG } from "@/lib/constants";

const seasonalOffers = [
  {
    id: 5,
    title: "Summer AC Check-Up",
    description: "Complete AC tune-up to prepare for the hot Texas summer",
    originalPrice: "$129",
    salePrice: "$79",
    savings: "$50",
    icon: Percent,
    expiry: "Ends August 31st",
    popular: true,
  },
  {
    id: 6,
    title: "New Customer Discount",
    description: "First-time customers save on any service",
    discount: "15% Off",
    icon: Gift,
    expiry: "Always available",
    popular: false,
  },
  {
    id: 7,
    title: "Referral Bonus",
    description: "Refer a friend and you both receive a discount",
    discount: "$50 Each",
    icon: Tag,
    expiry: "No expiration",
    popular: false,
  },
];

export default function SpecialsPage() {
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
            Current Specials & Promotions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Save on quality HVAC services with our current offers. Limited time deals on
            repairs, installations, and maintenance plans.
          </p>
        </motion.div>

        {/* Featured Specials */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {SPECIALS.map((special, index) => (
            <motion.div
              key={special.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <Badge className="w-fit mb-2">Special Offer</Badge>
                  <CardTitle className="text-xl">{special.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{special.description}</p>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Use code:</p>
                    <p className="font-mono font-bold text-primary">{special.code}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {special.expiry}
                  </div>
                  <Button asChild className="w-full">
                    <Link href={`/schedule?promo=${special.code}`}>Claim Offer</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Seasonal Offers */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Seasonal Offers</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {seasonalOffers.map((offer, index) => {
              const Icon = offer.icon;
              return (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`h-full ${offer.popular ? "border-2 border-primary" : ""}`}>
                    {offer.popular && (
                      <div className="bg-primary text-primary-foreground text-center text-sm font-medium py-1">
                        Most Popular
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{offer.description}</p>

                      {offer.salePrice ? (
                        <div className="mb-4">
                          <span className="text-sm text-muted-foreground line-through mr-2">
                            {offer.originalPrice}
                          </span>
                          <span className="text-2xl font-bold text-primary">{offer.salePrice}</span>
                          <Badge variant="secondary" className="ml-2 bg-green-100 text-green-800">
                            Save {offer.savings}
                          </Badge>
                        </div>
                      ) : (
                        <div className="text-2xl font-bold text-primary mb-4">{offer.discount}</div>
                      )}

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {offer.expiry}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href="/schedule">Get This Deal</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Fine Print */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">Terms & Conditions</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Offers cannot be combined with other promotions or discounts</li>
                <li>• Valid for residential customers in our service area only</li>
                <li>• Must mention promotion at time of booking</li>
                <li>• Some restrictions may apply based on equipment and service type</li>
                <li>• Clear Path HVAC reserves the right to modify or end promotions at any time</li>
              </ul>
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
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-4">Don&apos;t Miss Out!</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Ready to save on your HVAC service? Schedule now and mention your promo code.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/schedule">Schedule Service</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={`tel:${SITE_CONFIG.phone.replace(/[^0-9]/g, "")}`}>
                    Call {SITE_CONFIG.phone}
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
