"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ThumbsUp, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TESTIMONIALS } from "@/lib/constants";

const extendedReviews = [
  ...TESTIMONIALS,
  {
    id: 6,
    quote: "Excellent service from start to finish. The technician was knowledgeable and took the time to explain everything. Highly recommend Clear Path HVAC!",
    author: "Jennifer M.",
    rating: 5,
    service: "AC Installation",
  },
  {
    id: 7,
    quote: "They showed up on time, diagnosed the problem quickly, and had it fixed within an hour. Fair pricing and great communication.",
    author: "Robert H.",
    rating: 5,
    service: "Heating Repair",
  },
  {
    id: 8,
    quote: "We've been using Clear Path for our maintenance plan for 3 years now. Our system runs better than ever and we haven't had a single breakdown.",
    author: "Lisa T.",
    rating: 5,
    service: "Maintenance",
  },
  {
    id: 9,
    quote: "The indoor air quality solutions they recommended have made a huge difference for my allergies. Wish I had done this sooner!",
    author: "David W.",
    rating: 5,
    service: "Indoor Air Quality",
  },
  {
    id: 10,
    quote: "After getting quotes from 5 companies, Clear Path offered the best value. Installation was professional and the new system is amazing.",
    author: "Nancy K.",
    rating: 5,
    service: "AC Installation",
  },
];

const filters = ["All", "AC Repair", "AC Installation", "Heating Repair", "Maintenance", "Indoor Air Quality"];

export default function ReviewsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredReviews = activeFilter === "All"
    ? extendedReviews
    : extendedReviews.filter((r) => r.service === activeFilter);

  const averageRating = (extendedReviews.reduce((acc, r) => acc + r.rating, 0) / extendedReviews.length).toFixed(1);

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
            Customer Reviews
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our customers have to say about their experience with Clear Path HVAC.
          </p>
        </motion.div>

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="text-5xl font-bold text-primary mb-2">{averageRating}</div>
              <div className="flex justify-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground">
                Based on {extendedReviews.length} reviews
              </p>
              <div className="flex justify-center gap-8 mt-6 text-sm">
                <div>
                  <div className="font-semibold text-lg">{extendedReviews.length}</div>
                  <div className="text-muted-foreground">Total Reviews</div>
                </div>
                <div>
                  <div className="font-semibold text-lg">100%</div>
                  <div className="text-muted-foreground">5-Star Ratings</div>
                </div>
                <div>
                  <div className="font-semibold text-lg">A+</div>
                  <div className="text-muted-foreground">BBB Rating</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {filteredReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">&ldquo;{review.quote}&rdquo;</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{review.author}</p>
                      <p className="text-sm text-muted-foreground">{review.service}</p>
                    </div>
                    <ThumbsUp className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Leave a Review CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8 md:p-12 text-center">
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Share Your Experience</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Had a great experience with Clear Path HVAC? We&apos;d love to hear about it!
              </p>
              <Button asChild size="lg">
                <a href="https://g.page/r/review" target="_blank" rel="noopener noreferrer">
                  Leave a Google Review
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-muted-foreground mb-6">
            Join our satisfied customers and see why they recommend Clear Path HVAC.
          </p>
          <Button asChild size="lg">
            <Link href="/schedule">Schedule Your Service</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
