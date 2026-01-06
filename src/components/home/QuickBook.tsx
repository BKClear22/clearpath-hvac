"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Snowflake, Flame, Wrench, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const serviceOptions = [
  { id: "ac-repair", label: "AC Not Cooling", icon: Snowflake, color: "text-cyan-600 bg-cyan-100" },
  { id: "heating-repair", label: "Heating Issue", icon: Flame, color: "text-orange-600 bg-orange-100" },
  { id: "maintenance", label: "Tune-Up", icon: Wrench, color: "text-primary bg-primary/10" },
  { id: "ductwork", label: "Airflow Problem", icon: Wind, color: "text-green-600 bg-green-100" },
];

export function QuickBook() {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleContinue = () => {
    if (selectedService) {
      router.push(`/schedule?service=${selectedService}`);
    }
  };

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-3xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Quick Book</CardTitle>
              <p className="text-muted-foreground">What do you need help with today?</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {serviceOptions.map((option) => {
                  const Icon = option.icon;
                  const isSelected = selectedService === option.id;
                  return (
                    <button
                      key={option.id}
                      onClick={() => setSelectedService(option.id)}
                      className={`flex flex-col items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                        isSelected
                          ? "border-primary bg-primary/5"
                          : "border-transparent bg-background hover:border-muted-foreground/20"
                      }`}
                    >
                      <div className={`flex h-12 w-12 items-center justify-center rounded-full ${option.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-sm font-medium text-center">{option.label}</span>
                    </button>
                  );
                })}
              </div>
              <div className="mt-6 flex justify-center">
                <Button
                  size="lg"
                  onClick={handleContinue}
                  disabled={!selectedService}
                  className="w-full max-w-xs"
                >
                  Continue to Schedule
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
