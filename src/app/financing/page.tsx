"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CreditCard, Check, Calculator, Phone, HelpCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SITE_CONFIG } from "@/lib/constants";

const paymentScenarios = [
  {
    title: "AC System Replacement",
    totalCost: "$8,000",
    monthlyPayment: "$133/month",
    term: "60 months at 0% APR*",
  },
  {
    title: "Heating System Upgrade",
    totalCost: "$6,500",
    monthlyPayment: "$108/month",
    term: "60 months at 0% APR*",
  },
  {
    title: "Complete HVAC System",
    totalCost: "$12,000",
    monthlyPayment: "$200/month",
    term: "60 months at 0% APR*",
  },
];

const financingBenefits = [
  "Quick approval process - decisions in minutes",
  "Competitive interest rates",
  "Flexible payment terms (12-84 months)",
  "No prepayment penalties",
  "0% APR promotional options available",
  "Easy online application",
];

const financingFaqs = [
  {
    question: "What credit score do I need to qualify?",
    answer: "We work with multiple financing partners to accommodate various credit situations. While better credit scores typically receive better rates, we have options available for many credit profiles. The best way to know is to apply - it only takes a few minutes and doesn't affect your credit score.",
  },
  {
    question: "How long does the approval process take?",
    answer: "Most applications receive a decision within minutes. Once approved, you can proceed with your HVAC installation right away.",
  },
  {
    question: "Can I pay off my financing early?",
    answer: "Yes! There are no prepayment penalties. You can pay off your balance at any time without any additional fees.",
  },
  {
    question: "What documentation do I need to apply?",
    answer: "Typically, you'll need a valid ID, proof of income, and your Social Security number. Our financing partners make the process as simple as possible.",
  },
  {
    question: "Is the 0% APR offer really no interest?",
    answer: "Yes, our 0% APR promotional financing means you pay no interest if the balance is paid within the promotional period. Ask us about current promotional offers and terms.",
  },
];

const applicationSteps = [
  {
    step: 1,
    title: "Get Your Quote",
    description: "Schedule a free estimate and receive your system recommendation and pricing.",
  },
  {
    step: 2,
    title: "Apply Online",
    description: "Complete a quick online application. Decisions typically within minutes.",
  },
  {
    step: 3,
    title: "Choose Your Terms",
    description: "Select the payment plan that works best for your budget.",
  },
  {
    step: 4,
    title: "Enjoy Your New System",
    description: "We install your system and you start enjoying improved comfort.",
  },
];

export default function FinancingPage() {
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
            Flexible Financing Options
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t let budget concerns keep you from the comfort you deserve. We offer
            flexible financing options to make your HVAC investment affordable.
          </p>
        </motion.div>

        {/* Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <Card className="bg-gradient-brand text-white">
            <CardContent className="p-8 md:p-12 text-center">
              <CreditCard className="h-16 w-16 mx-auto mb-4 opacity-80" />
              <h2 className="text-3xl font-bold mb-2">0% APR Financing Available*</h2>
              <p className="text-white/80 mb-6 max-w-lg mx-auto">
                Qualified buyers can enjoy promotional 0% APR financing on new system
                installations. Pay over time with no interest charges.
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Check Your Options</Link>
              </Button>
              <p className="text-sm text-white/60 mt-4">
                *Subject to credit approval. Terms and conditions apply.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Payment Scenarios */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-center mb-8">Sample Monthly Payments</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {paymentScenarios.map((scenario, index) => (
              <motion.div
                key={scenario.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <CardTitle>{scenario.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground mb-2">Total Cost</div>
                    <div className="text-2xl font-bold mb-4">{scenario.totalCost}</div>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <div className="text-sm text-muted-foreground">As low as</div>
                      <div className="text-3xl font-bold text-primary">
                        {scenario.monthlyPayment}
                      </div>
                      <div className="text-sm text-muted-foreground">{scenario.term}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            *Example payments based on promotional 0% APR financing. Actual terms may vary.
          </p>
        </motion.section>

        {/* Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-center mb-8">Financing Benefits</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {financingBenefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Application Steps */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {applicationSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-center mb-8">Financing FAQs</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {financingFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-muted/50">
            <CardContent className="p-8 md:p-12 text-center">
              <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Ready to Explore Your Options?</h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Get a free estimate and learn about financing options available to you.
                Our team will help you find the best solution for your budget.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Get Free Estimate</Link>
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
