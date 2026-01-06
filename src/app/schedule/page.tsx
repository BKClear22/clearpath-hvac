"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Snowflake,
  Flame,
  Wrench,
  Wind,
  Leaf,
  Thermometer,
  AirVent,
  Heater,
  Calendar,
  Clock,
  MapPin,
  User,
  Phone,
  Mail,
  Check,
  ArrowRight,
  ArrowLeft,
  Shield,
  CreditCard,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { SERVICES, SERVICE_AREAS, SITE_CONFIG } from "@/lib/constants";

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

const timeSlots = [
  "8:00 AM - 10:00 AM",
  "10:00 AM - 12:00 PM",
  "12:00 PM - 2:00 PM",
  "2:00 PM - 4:00 PM",
  "4:00 PM - 6:00 PM",
];

function SchedulePageContent() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: preselectedService,
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleServiceSelect = (serviceId: string) => {
    setFormData({ ...formData, service: serviceId });
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Booking submitted:", formData);
    setIsSubmitted(true);
  };

  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const availableDates = generateDates();

  const selectedService = SERVICES.find((s) => s.id === formData.service);

  if (isSubmitted) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="text-center">
              <CardContent className="p-8 md:p-12">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600 mx-auto mb-6">
                  <Check className="h-10 w-10" />
                </div>
                <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
                <p className="text-muted-foreground mb-6">
                  Thank you for scheduling with Clear Path HVAC. We&apos;ve sent a confirmation
                  email to <span className="font-medium text-foreground">{formData.email}</span>.
                </p>

                <div className="bg-muted rounded-lg p-6 text-left mb-6">
                  <h3 className="font-semibold mb-4">Appointment Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Service:</span>
                      <span className="font-medium">{selectedService?.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date:</span>
                      <span className="font-medium">{formData.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Time:</span>
                      <span className="font-medium">{formData.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Address:</span>
                      <span className="font-medium">
                        {formData.address}, {formData.city}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  A technician will arrive during your selected time window. If you need to
                  reschedule, please call us at least 24 hours in advance.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button asChild>
                    <Link href="/">Return Home</Link>
                  </Button>
                  <Button asChild variant="outline">
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

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Schedule Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Book your appointment in just a few steps. Same-day service available for most requests.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex items-center justify-between">
            {[
              { num: 1, label: "Service" },
              { num: 2, label: "Date & Time" },
              { num: 3, label: "Your Info" },
              { num: 4, label: "Confirm" },
            ].map((s, index) => (
              <div key={s.num} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold transition-colors ${
                      step >= s.num
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step > s.num ? <Check className="h-5 w-5" /> : s.num}
                  </div>
                  <span className="text-xs mt-1 text-muted-foreground hidden sm:block">
                    {s.label}
                  </span>
                </div>
                {index < 3 && (
                  <div
                    className={`h-0.5 w-16 sm:w-24 mx-2 transition-colors ${
                      step > s.num ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Select Your Service</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {SERVICES.map((service) => {
                        const Icon = iconMap[service.icon] || Wrench;
                        const isSelected = formData.service === service.id;
                        return (
                          <button
                            key={service.id}
                            onClick={() => handleServiceSelect(service.id)}
                            className={`flex items-start gap-3 p-4 rounded-lg border-2 text-left transition-all ${
                              isSelected
                                ? "border-primary bg-primary/5"
                                : "border-transparent bg-muted hover:border-muted-foreground/20"
                            }`}
                          >
                            <div
                              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                                service.category === "cooling"
                                  ? "bg-cyan-100 text-cyan-600"
                                  : service.category === "heating"
                                  ? "bg-orange-100 text-orange-600"
                                  : "bg-primary/10 text-primary"
                              }`}
                            >
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                              <div className="font-medium">{service.title}</div>
                              <div className="text-sm text-muted-foreground">
                                {service.shortDescription}
                              </div>
                            </div>
                            {isSelected && (
                              <Check className="h-5 w-5 text-primary shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                    <div className="mt-6 flex justify-end">
                      <Button onClick={handleNext} disabled={!formData.service}>
                        Continue
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Step 2: Date & Time Selection */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Choose Date & Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <label className="text-sm font-medium mb-3 block">
                        <Calendar className="inline h-4 w-4 mr-2" />
                        Select Date
                      </label>
                      <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                        {availableDates.map((date) => {
                          const dateStr = date.toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          });
                          const dayName = date.toLocaleDateString("en-US", {
                            weekday: "short",
                          });
                          const isSelected = formData.date === dateStr;
                          const isWeekend = date.getDay() === 0;

                          return (
                            <button
                              key={dateStr}
                              onClick={() =>
                                !isWeekend && setFormData({ ...formData, date: dateStr })
                              }
                              disabled={isWeekend}
                              className={`p-2 rounded-lg text-center transition-all ${
                                isWeekend
                                  ? "opacity-50 cursor-not-allowed bg-muted"
                                  : isSelected
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted hover:bg-muted/80"
                              }`}
                            >
                              <div className="text-xs">{dayName}</div>
                              <div className="font-medium">{date.getDate()}</div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="text-sm font-medium mb-3 block">
                        <Clock className="inline h-4 w-4 mr-2" />
                        Select Time Window
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {timeSlots.map((slot) => {
                          const isSelected = formData.time === slot;
                          return (
                            <button
                              key={slot}
                              onClick={() => setFormData({ ...formData, time: slot })}
                              className={`p-3 rounded-lg text-sm font-medium transition-all ${
                                isSelected
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted hover:bg-muted/80"
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={handleBack}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back
                      </Button>
                      <Button
                        onClick={handleNext}
                        disabled={!formData.date || !formData.time}
                      >
                        Continue
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Step 3: Contact Information */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Your Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="text-sm font-medium">
                            First Name *
                          </label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) =>
                              setFormData({ ...formData, firstName: e.target.value })
                            }
                            placeholder="John"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="lastName" className="text-sm font-medium">
                            Last Name *
                          </label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) =>
                              setFormData({ ...formData, lastName: e.target.value })
                            }
                            placeholder="Smith"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Phone *
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            placeholder="(555) 123-4567"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="address" className="text-sm font-medium">
                          Service Address *
                        </label>
                        <Input
                          id="address"
                          value={formData.address}
                          onChange={(e) =>
                            setFormData({ ...formData, address: e.target.value })
                          }
                          placeholder="123 Main Street"
                          required
                        />
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="city" className="text-sm font-medium">
                            City *
                          </label>
                          <Input
                            id="city"
                            value={formData.city}
                            onChange={(e) =>
                              setFormData({ ...formData, city: e.target.value })
                            }
                            placeholder="Austin"
                            list="cities"
                            required
                          />
                          <datalist id="cities">
                            {SERVICE_AREAS.map((area) => (
                              <option key={area} value={area} />
                            ))}
                          </datalist>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="zip" className="text-sm font-medium">
                            ZIP Code *
                          </label>
                          <Input
                            id="zip"
                            value={formData.zip}
                            onChange={(e) =>
                              setFormData({ ...formData, zip: e.target.value })
                            }
                            placeholder="78701"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="notes" className="text-sm font-medium">
                          Additional Notes (Optional)
                        </label>
                        <Textarea
                          id="notes"
                          value={formData.notes}
                          onChange={(e) =>
                            setFormData({ ...formData, notes: e.target.value })
                          }
                          placeholder="Describe the issue, gate code, pet info, etc."
                          rows={3}
                        />
                      </div>
                    </div>

                    <div className="mt-6 flex justify-between">
                      <Button variant="outline" onClick={handleBack}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back
                      </Button>
                      <Button
                        onClick={handleNext}
                        disabled={
                          !formData.firstName ||
                          !formData.lastName ||
                          !formData.email ||
                          !formData.phone ||
                          !formData.address ||
                          !formData.city ||
                          !formData.zip
                        }
                      >
                        Review Booking
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Review & Confirm</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {/* Service Summary */}
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Wrench className="h-4 w-4" />
                          Service
                        </h4>
                        <div className="flex items-center gap-3">
                          {selectedService && (
                            <>
                              <Badge>{selectedService.category}</Badge>
                              <span className="font-medium">{selectedService.title}</span>
                            </>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {selectedService?.shortDescription}
                        </p>
                      </div>

                      {/* Date & Time */}
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Appointment
                        </h4>
                        <div className="grid gap-2 sm:grid-cols-2">
                          <div>
                            <span className="text-sm text-muted-foreground">Date: </span>
                            <span className="font-medium">{formData.date}</span>
                          </div>
                          <div>
                            <span className="text-sm text-muted-foreground">Time: </span>
                            <span className="font-medium">{formData.time}</span>
                          </div>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <User className="h-4 w-4" />
                          Contact Information
                        </h4>
                        <div className="space-y-1 text-sm">
                          <p>
                            <span className="font-medium">
                              {formData.firstName} {formData.lastName}
                            </span>
                          </p>
                          <p className="flex items-center gap-2">
                            <Mail className="h-3 w-3" /> {formData.email}
                          </p>
                          <p className="flex items-center gap-2">
                            <Phone className="h-3 w-3" /> {formData.phone}
                          </p>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          Service Address
                        </h4>
                        <p className="text-sm">
                          {formData.address}
                          <br />
                          {formData.city}, TX {formData.zip}
                        </p>
                        {formData.notes && (
                          <p className="text-sm text-muted-foreground mt-2">
                            Notes: {formData.notes}
                          </p>
                        )}
                      </div>

                      {/* Trust Badges */}
                      <div className="flex flex-wrap gap-4 justify-center text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Shield className="h-4 w-4 text-primary" />
                          <span>Licensed & Insured</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CreditCard className="h-4 w-4 text-primary" />
                          <span>Pay After Service</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Check className="h-4 w-4 text-primary" />
                          <span>Satisfaction Guaranteed</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-between">
                      <Button variant="outline" onClick={handleBack}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back
                      </Button>
                      <Button onClick={handleSubmit} size="lg">
                        Confirm Booking
                        <Check className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Phone Fallback */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Prefer to book by phone?{" "}
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/[^0-9]/g, "")}`}
                className="text-primary font-medium hover:underline"
              >
                Call {SITE_CONFIG.phone}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SchedulePage() {
  return (
    <Suspense fallback={<div className="py-16 text-center">Loading...</div>}>
      <SchedulePageContent />
    </Suspense>
  );
}
