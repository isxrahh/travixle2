import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Globe,
  Phone,
  Mail,
  MapPin,
  CreditCard,
  Shield,
  Truck,
  HeadphonesIcon,
  ChevronRight,
  Apple,
  PlayCircle,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import { footerColumns } from "@/constants";
import { toast } from "sonner";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-3xl px-8 py-14 mb-20 text-center text-white shadow-2xl">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Unlock exclusive travel deals
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Subscribe for personalized offers, flash sales, and inspiration
            delivered straight to your inbox. Join millions of smart travelers
            saving big!
          </p>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const emailInput = e.currentTarget.elements.namedItem(
                "email"
              ) as HTMLInputElement;
              const email = emailInput.value.trim();

              if (!email) {
                toast.error("Please enter your email");
                return;
              }

              const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
              });

              if (res.ok) {
                toast.success(
                  "Welcome aboard! 🎉 Check your inbox for travel inspiration!"
                );
                emailInput.value = "";
              } else {
                toast.error("Something went wrong. Try again later.");
              }
            }}
            className="max-w-xl mx-auto flex flex-col sm:flex-row gap-5"
          >
            <Input
            name="email"
              type="email"
              placeholder="Your email address"
              className="bg-white/10 backdrop-blur border-white/20 text-white placeholder:text-gray-300 rounded-2xl px-8 py-7 text-lg"
              required
            />
            <Button
              size="lg"
              className="bg-white cursor-pointer text-blue-700 hover:bg-gray-100 font-bold rounded-2xl px-10 py-7 text-xl shadow-lg hover:shadow-xl transition-all"
            >
              Subscribe Now
            </Button>
          </form>
          <p className="mt-6 text-sm opacity-80">
            Zero spam. Unsubscribe anytime with one click.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-16">
          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-5">
              <h3 className="text-xl font-bold text-white">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="flex items-center gap-2 hover:text-blue-400 transition"
                    >
                      <ChevronRight className="w-4 h-4" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-12 bg-gray-700" />

        <div className="space-y-12">
          <div className="flex flex-wrap justify-center gap-10">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-green-400" />
              <span className="text-sm font-medium">Secure Booking</span>
            </div>
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-blue-400" />
              <span className="text-sm font-medium">
                Multiple Payment Options
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="w-6 h-6 text-purple-400" />
              <span className="text-sm font-medium">
                Free Cancellation on Most Bookings
              </span>
            </div>
            <div className="flex items-center gap-3">
              <HeadphonesIcon className="w-6 h-6 text-orange-400" />
              <span className="text-sm font-medium">24/7 Customer Support</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-8">
              <p className="text-lg font-semibold text-white">Follow us</p>
              <div className="flex gap-6">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="hover:text-blue-400 transition"
                >
                  <FaFacebookF className="w-7 h-7" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-blue-400 transition"
                >
                  <FaInstagram className="w-7 h-7" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="hover:text-blue-400 transition"
                >
                  <FaTwitter className="w-7 h-7" />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="hover:text-blue-400 transition"
                >
                  <FaYoutube className="w-7 h-7" />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6">
              <p className="text-lg font-semibold text-white">
                Download our app
              </p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition"
                >
                  <Apple className="w-8 h-8" />
                  <div>
                    <p className="text-xs">Download on the</p>
                    <p className="font-bold">App Store</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition"
                >
                  <PlayCircle className="w-8 h-8" />
                  <div>
                    <p className="text-xs">Get it on</p>
                    <p className="font-bold">Google Play</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Globe className="w-6 h-6 text-gray-400" />
              <span className="font-medium">English (United States)</span>
            </div>
          </div>

          <div className="text-center text-sm space-y-4">
            <p className="font-semibold text-white">
              © 2025 Travixle, Inc. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>123 Explorer Avenue, Wanderlust City, Global 98765</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+1 (800) 555-TRAVEL</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>support@travixle.com</span>
              </div>
            </div>
            <p className="mt-6 text-xs text-gray-500">
              Travixle is a registered trademark. Licensed by relevant
              authorities in multiple jurisdictions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
