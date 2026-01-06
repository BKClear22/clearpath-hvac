import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG, SERVICES, SERVICE_AREAS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-charcoal text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-brand">
                <span className="text-xl font-bold text-white">CP</span>
              </div>
              <div>
                <p className="text-lg font-bold text-white">{SITE_CONFIG.name}</p>
                <p className="text-xs text-gray-400">{SITE_CONFIG.tagline}</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Your trusted HVAC partner in the Austin area. Licensed, insured, and committed to your comfort with 24/7 emergency service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Service Areas</h3>
            <ul className="grid grid-cols-2 gap-2">
              {SERVICE_AREAS.map((area) => (
                <li key={area}>
                  <Link
                    href={`/service-areas#${area.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/[^0-9]/g, "")}`}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 text-cyan-400" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 text-cyan-400" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <MapPin className="h-4 w-4 text-cyan-400 mt-0.5" />
                  {SITE_CONFIG.address}
                </div>
              </li>
            </ul>

            <h4 className="text-sm font-semibold text-white mb-2">Newsletter</h4>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button type="submit" size="sm">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div className="flex flex-wrap justify-center gap-4">
            <span>© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</span>
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-gray-700">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">24/7</div>
            <div className="text-xs text-gray-400">Emergency Service</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-xs text-gray-400">Satisfaction Guaranteed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">NATE</div>
            <div className="text-xs text-gray-400">Certified Technicians</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">A+</div>
            <div className="text-xs text-gray-400">BBB Rating</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
