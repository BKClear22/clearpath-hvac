export const SITE_CONFIG = {
  name: "Clear Path HVAC",
  tagline: "Comfort you can count on",
  phone: "(555) 014-0188",
  email: "info@clearpathhvac.com",
  address: "123 Main Street, Austin, TX 78701",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Financing", href: "/financing" },
  { label: "Specials", href: "/specials" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    id: "ac-repair",
    title: "AC Repair",
    shortDescription: "Fix no-cool, leaks, short cycling",
    description: "Expert diagnosis and repair for all air conditioning issues including refrigerant leaks, compressor problems, and electrical failures.",
    icon: "Snowflake",
    priceRange: "$180 - $1,200",
    category: "cooling",
  },
  {
    id: "ac-installation",
    title: "AC Installation",
    shortDescription: "High-efficiency systems installed right",
    description: "Professional installation of energy-efficient air conditioning systems with proper sizing and ductwork optimization.",
    icon: "AirVent",
    priceRange: "$3,800 - $15,000",
    category: "cooling",
  },
  {
    id: "heating-repair",
    title: "Heating Repair",
    shortDescription: "Furnace + heat pump diagnostics",
    description: "Fast, reliable repairs for furnaces, heat pumps, and all heating systems to keep your home warm.",
    icon: "Flame",
    priceRange: "$180 - $1,200",
    category: "heating",
  },
  {
    id: "heating-installation",
    title: "Heating Installation",
    shortDescription: "Replace aging systems efficiently",
    description: "Expert installation of high-efficiency furnaces, heat pumps, and hybrid heating systems.",
    icon: "Heater",
    priceRange: "$3,800 - $15,000",
    category: "heating",
  },
  {
    id: "maintenance",
    title: "Maintenance Plans",
    shortDescription: "Seasonal tune-ups + priority scheduling",
    description: "Comprehensive maintenance programs to extend equipment life, improve efficiency, and prevent breakdowns.",
    icon: "Wrench",
    priceRange: "$79 - $349/year",
    category: "maintenance",
  },
  {
    id: "ductwork",
    title: "Ductwork & Airflow",
    shortDescription: "Balance rooms, seal leaks",
    description: "Professional duct sealing, cleaning, and airflow balancing to maximize comfort and efficiency.",
    icon: "Wind",
    priceRange: "$300 - $2,500",
    category: "residential",
  },
  {
    id: "indoor-air-quality",
    title: "Indoor Air Quality",
    shortDescription: "Filters, purifiers, humidifiers",
    description: "Improve your home's air quality with advanced filtration, UV purifiers, and humidity control systems.",
    icon: "Leaf",
    priceRange: "$200 - $3,000",
    category: "iaq",
  },
  {
    id: "smart-thermostats",
    title: "Smart Thermostats",
    shortDescription: "Install + setup for savings",
    description: "Professional installation and configuration of smart thermostats for optimal comfort and energy savings.",
    icon: "Thermometer",
    priceRange: "$150 - $500",
    category: "residential",
  },
] as const;

export const SERVICE_AREAS = [
  "Austin",
  "Round Rock",
  "Pflugerville",
  "Cedar Park",
  "Leander",
  "Georgetown",
  "Buda",
  "Kyle",
  "Lakeway",
  "Manor",
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "Fast, honest, and explained everything clearly.",
    author: "Jamie R.",
    rating: 5,
    service: "AC Repair",
  },
  {
    id: 2,
    quote: "Same-day fix and the house cooled down immediately.",
    author: "Alex T.",
    rating: 5,
    service: "AC Repair",
  },
  {
    id: 3,
    quote: "Maintenance plan is worth it—priority scheduling is huge.",
    author: "Morgan L.",
    rating: 5,
    service: "Maintenance",
  },
  {
    id: 4,
    quote: "Professional installation team. System runs perfectly.",
    author: "Chris D.",
    rating: 5,
    service: "AC Installation",
  },
  {
    id: 5,
    quote: "Fixed our heating issue in under an hour. Great service!",
    author: "Sam K.",
    rating: 5,
    service: "Heating Repair",
  },
] as const;

export const FAQS = [
  {
    question: "Do you offer same-day service?",
    answer: "Yes! We offer same-day service for most repairs. Call us before noon for same-day availability, or schedule online 24/7.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Absolutely. Clear Path HVAC is fully licensed, bonded, and insured. All our technicians are NATE-certified professionals.",
  },
  {
    question: "Do you provide upfront estimates?",
    answer: "Yes, we always provide upfront, transparent pricing before any work begins. No hidden fees or surprise charges.",
  },
  {
    question: "What brands do you install?",
    answer: "We install and service all major brands including Carrier, Trane, Lennox, Rheem, Goodman, and more.",
  },
  {
    question: "How often should I replace filters?",
    answer: "We recommend replacing standard filters every 1-3 months, depending on usage, pets, and air quality. HEPA filters can last 6-12 months.",
  },
  {
    question: "Do you service heat pumps?",
    answer: "Yes, we specialize in heat pump installation, repair, and maintenance for both heating and cooling modes.",
  },
] as const;

export const SPECIALS = [
  {
    id: 1,
    title: "$50 Off Any Repair",
    description: "Save on your next HVAC repair service",
    code: "REPAIR50",
    expiry: "Limited time offer",
  },
  {
    id: 2,
    title: "Free Estimate on New Systems",
    description: "Get a no-obligation quote for AC or heating installation",
    code: "FREEESTIMATE",
    expiry: "Always available",
  },
  {
    id: 3,
    title: "$200 Off New AC Installation",
    description: "Upgrade to a high-efficiency cooling system",
    code: "COOLSAVE200",
    expiry: "Summer special",
  },
  {
    id: 4,
    title: "First Year Maintenance Free",
    description: "With any new system installation",
    code: "FREEMAINT",
    expiry: "New customers only",
  },
] as const;
