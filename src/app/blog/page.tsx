"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categories = ["All", "AC Tips", "Heating Tips", "Energy Savings", "Indoor Air Quality"];

const blogPosts = [
  {
    id: 1,
    title: "5 Reasons Your AC Isn't Blowing Cold Air",
    excerpt:
      "Is your air conditioner running but not cooling your home? Here are the most common causes and what you can do about them.",
    category: "AC Tips",
    date: "Jan 5, 2026",
    readTime: "5 min read",
    featured: true,
    image: "/blog/ac-not-cooling.jpg",
  },
  {
    id: 2,
    title: "Heat Pump vs. Furnace: What's Best for Your Home?",
    excerpt:
      "Trying to decide between a heat pump and a furnace? We break down the pros and cons of each to help you make the right choice.",
    category: "Heating Tips",
    date: "Jan 3, 2026",
    readTime: "7 min read",
    featured: false,
    image: "/blog/heat-pump-vs-furnace.jpg",
  },
  {
    id: 3,
    title: "How to Lower Your Summer Energy Bills",
    excerpt:
      "Beat the Texas heat without breaking the bank. Simple tips to reduce your cooling costs this summer.",
    category: "Energy Savings",
    date: "Dec 28, 2025",
    readTime: "4 min read",
    featured: false,
    image: "/blog/energy-savings.jpg",
  },
  {
    id: 4,
    title: "Signs Your HVAC System Is Oversized",
    excerpt:
      "Bigger isn't always better when it comes to HVAC. Learn how to tell if your system is too large for your home.",
    category: "AC Tips",
    date: "Dec 20, 2025",
    readTime: "6 min read",
    featured: false,
    image: "/blog/oversized-hvac.jpg",
  },
  {
    id: 5,
    title: "MERV Ratings Explained: Choosing the Right Filter",
    excerpt:
      "Not all air filters are created equal. Understanding MERV ratings can help you breathe easier at home.",
    category: "Indoor Air Quality",
    date: "Dec 15, 2025",
    readTime: "5 min read",
    featured: false,
    image: "/blog/air-filters.jpg",
  },
  {
    id: 6,
    title: "Why Maintenance Prevents Breakdowns",
    excerpt:
      "Regular HVAC maintenance isn't just about efficiency—it's your best defense against unexpected repairs.",
    category: "Heating Tips",
    date: "Dec 10, 2025",
    readTime: "4 min read",
    featured: false,
    image: "/blog/maintenance.jpg",
  },
  {
    id: 7,
    title: "The Benefits of a Smart Thermostat",
    excerpt:
      "Smart thermostats do more than just look cool. Discover how they can save you money and improve comfort.",
    category: "Energy Savings",
    date: "Dec 5, 2025",
    readTime: "5 min read",
    featured: false,
    image: "/blog/smart-thermostat.jpg",
  },
  {
    id: 8,
    title: "Indoor Air Quality: What You Need to Know",
    excerpt:
      "The air inside your home could be more polluted than outdoor air. Here's how to improve your indoor air quality.",
    category: "Indoor Air Quality",
    date: "Nov 28, 2025",
    readTime: "6 min read",
    featured: false,
    image: "/blog/indoor-air-quality.jpg",
  },
];

const categoryColors: Record<string, string> = {
  "AC Tips": "bg-cyan-100 text-cyan-700",
  "Heating Tips": "bg-orange-100 text-orange-700",
  "Energy Savings": "bg-green-100 text-green-700",
  "Indoor Air Quality": "bg-purple-100 text-purple-700",
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

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
            HVAC Tips & Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert advice, maintenance tips, and industry insights to help you stay comfortable
            and save money on your HVAC system.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Post */}
        {activeCategory === "All" && featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="aspect-video md:aspect-auto bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground p-8">
                    <div className="h-24 w-24 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Tag className="h-12 w-12 text-primary" />
                    </div>
                    <p className="text-sm">Featured Article Image</p>
                  </div>
                </div>
                <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                    <Badge className={categoryColors[featuredPost.category]}>
                      {featuredPost.category}
                    </Badge>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">{featuredPost.title}</h2>
                  <p className="text-muted-foreground mb-4">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <Button asChild className="w-fit">
                    <Link href={`/blog/${featuredPost.id}`}>
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Post Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(activeCategory === "All" ? regularPosts : filteredPosts).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground p-4">
                    <Tag className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p className="text-xs">Article Image</p>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <Badge className={`w-fit ${categoryColors[post.category]}`}>
                    {post.category}
                  </Badge>
                </CardHeader>
                <CardContent className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex items-center justify-between pt-0">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <Button asChild variant="ghost" size="sm" className="p-0">
                    <Link href={`/blog/${post.id}`}>
                      Read <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Subscribe to our newsletter for the latest HVAC tips, seasonal maintenance
                reminders, and exclusive offers.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border bg-background"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
