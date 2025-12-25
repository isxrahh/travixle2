// app/auth/register/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Plane, Globe, Calendar, Phone, Mail, User, HeartHandshake, MapPin, DollarSign, Users, Info, Home, Flag, CreditCard } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  type FormData = {
    firstName: string;
    lastName: string;
    preferredName: string;
    email: string;
    phone: string;
    dob: string;
    gender: string;
    nationality: string;
    passport: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    travelType: string;
    currency: string;
    emergencyName: string;
    emergencyPhone: string;
    referral: string[];
    newsletter: boolean;
    terms: boolean;
    password: string;
  };

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    preferredName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    nationality: "",
    passport: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    travelType: "",
    currency: "USD",
    emergencyName: "",
    emergencyPhone: "",
    referral: [],
    newsletter: true,
    terms: false,
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleReferralChange = (source: string) => {
    setFormData(prev => ({
      ...prev,
      referral: prev.referral.includes(source)
        ? prev.referral.filter(s => s !== source)
        : [...prev.referral, source],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.terms) {
      setError("You must accept the terms and privacy policy");
      return;
    }
    setIsLoading(true);
    setError("");

    // For now, only send required fields to API (you can extend later)
    const { firstName, lastName, email, password } = formData;
    const name = `${firstName} ${lastName}`.trim();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    setIsLoading(false);

    if (res.ok) {
      const signInRes = await fetch("/api/auth/callback/credentials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (signInRes.ok) {
        router.push("/");
        router.refresh();
      }
    } else {
      setError(data.error || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-700 via-cyan-900 to-indigo-700 flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <Plane className="absolute top-10 left-5 size-40 text-white/10 animate-pulse" />
        <Plane className="absolute bottom-20 right-10 size-60 text-white/10 animate-ping" />
        <Globe className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-120 text-white/5" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-4">
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          {/* Hero Header */}
          <div className="bg-gradient-to-r from-blue-700/30 to-cyan-700/30 px-10 py-16 text-center">
            <div className="mx-auto size-24 rounded-full bg-white/20 flex items-center justify-center mb-8">
              <Plane className="size-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Begin Your Travel Adventure
            </h1>
            <p className="text-2xl text-white/90">
              Fill in your details to get personalized recommendations
            </p>
          </div>

          {/* Form Section */}
          <div className="px-8 md:px-20 py-16 bg-white/90">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Column 1: Expanded Personal Info */}
              <div className="space-y-8">
                <h3 className="text-3xl font-semibold text-gray-800 flex items-center gap-4">
                  <User className="size-8 text-blue-600" />
                  Personal Information
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <Input type="text" placeholder="First Name" className="h-14 text-lg" value={formData.firstName} onChange={(e) => handleChange("firstName", e.target.value)} required />
                  <Input type="text" placeholder="Last Name" className="h-14 text-lg" value={formData.lastName} onChange={(e) => handleChange("lastName", e.target.value)} required />
                </div>

                <Input type="text" placeholder="Preferred Name/Nickname (optional)" className="h-14 text-lg" value={formData.preferredName} onChange={(e) => handleChange("preferredName", e.target.value)} />

                <Input type="email" placeholder="Email Address" className="h-14 text-lg" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} required />

                <Input type="tel" placeholder="Phone Number (optional)" className="h-14 text-lg" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} />

                <Input type="date" className="h-14 text-lg" value={formData.dob} onChange={(e) => handleChange("dob", e.target.value)} />

                <Select value={formData.gender} onValueChange={(value) => handleChange("gender", value)}>
                  <SelectTrigger className="py-7 w-full text-sm">
                    <SelectValue placeholder="Gender (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>

                <Input type="text" placeholder="Nationality (optional)" className="h-14 text-lg" value={formData.nationality} onChange={(e) => handleChange("nationality", e.target.value)} />

                <Input type="text" placeholder="Passport Number (optional)" className="h-14 text-lg" value={formData.passport} onChange={(e) => handleChange("passport", e.target.value)} />

                {/* Address Fields */}
                <div className="space-y-4">
                  <Label className="text-lg font-medium flex items-center gap-2">
                    <Home className="size-5 text-blue-600" /> Address (optional)
                  </Label>
                  <Input type="text" placeholder="Address Line 1" className="h-14 text-lg" value={formData.address1} onChange={(e) => handleChange("address1", e.target.value)} />
                  <Input type="text" placeholder="Address Line 2" className="h-14 text-lg" value={formData.address2} onChange={(e) => handleChange("address2", e.target.value)} />
                  <div className="grid grid-cols-2 gap-4">
                    <Input type="text" placeholder="City" className="h-14 text-lg" value={formData.city} onChange={(e) => handleChange("city", e.target.value)} />
                    <Input type="text" placeholder="State/Province" className="h-14 text-lg" value={formData.state} onChange={(e) => handleChange("state", e.target.value)} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input type="text" placeholder="Postal Code" className="h-14 text-lg" value={formData.postalCode} onChange={(e) => handleChange("postalCode", e.target.value)} />
                    <Select value={formData.country} onValueChange={(value) => handleChange("country", value)}>
                      <SelectTrigger className="py-7 w-full text-sm">
                        <SelectValue placeholder="Country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="US">United States</SelectItem>
                        <SelectItem value="CA">Canada</SelectItem>
                        <SelectItem value="GB">United Kingdom</SelectItem>
                        <SelectItem value="AU">Australia</SelectItem>
                        {/* Add more countries as needed */}
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                {/* End Address Fields */}
              </div>
              {/* Column 2: Preferences & Security */}
              <div className="space-y-8">
                <h3 className="text-3xl font-semibold text-gray-800 flex items-center gap-4">
                  <Globe className="size-8 text-blue-600" />
                  Preferences & Security
                </h3>

                <Select value={formData.travelType} onValueChange={(value) => handleChange("travelType", value)}>
                  <SelectTrigger className="py-7 w-full text-sm">
                    <SelectValue placeholder="Preferred Travel Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="adventure">Adventure</SelectItem>
                    <SelectItem value="relaxation">Relaxation</SelectItem>
                    <SelectItem value="culture">Culture</SelectItem>
                    <SelectItem value="family">Family</SelectItem>
                    <SelectItem value="luxury">Luxury</SelectItem>
                    <SelectItem value="budget">Budget</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={formData.currency} onValueChange={(value) => handleChange("currency", value)}>
                  <SelectTrigger className="py-7 w-full text-sm">
                    <SelectValue placeholder="Preferred Currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD ($)</SelectItem>
                    <SelectItem value="EUR">EUR (€)</SelectItem>
                    <SelectItem value="GBP">GBP (£)</SelectItem>
                    <SelectItem value="INR">INR (₹)</SelectItem>
                    <SelectItem value="JPY">JPY (¥)</SelectItem>
                  </SelectContent>
                </Select>

                <Input type="password" placeholder="Password (min 8 characters)" className="h-14 text-lg" value={formData.password} onChange={(e) => handleChange("password", e.target.value)} required minLength={8} />

                {/* Emergency Contact */}
                <div className="space-y-4">
                  <Label className="text-lg font-medium flex items-center gap-2">
                    <HeartHandshake className="size-5 text-blue-600" /> Emergency Contact (optional)
                  </Label>
                  <Input type="text" placeholder="Contact Name" className="h-14 text-lg" value={formData.emergencyName} onChange={(e) => handleChange("emergencyName", e.target.value)} />
                  <Input type="tel" placeholder="Contact Phone" className="h-14 text-lg" value={formData.emergencyPhone} onChange={(e) => handleChange("emergencyPhone", e.target.value)} />
                </div>

                {/* Referral Sources */}
                <div className="space-y-4">
                  <Label className="text-lg font-medium flex items-center gap-2">
                    <Info className="size-5 text-blue-600" /> How did you hear about us? (optional)
                  </Label>
                  <div className="grid grid-cols-2 gap-4">
                    {["Social Media", "Friend", "Search Engine", "Advertisement", "Travel Blog", "Other"].map(source => (
                      <div key={source} className="flex items-center space-x-3">
                        <Checkbox
                          id={source}
                          checked={formData.referral.includes(source)}
                          onCheckedChange={() => handleReferralChange(source)}
                        />
                        <label htmlFor={source} className="text-base cursor-pointer">{source}</label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Checkboxes */}
                <div className="space-y-6 mt-8">
                  <div className="flex items-center space-x-3">
                    <Checkbox id="newsletter" checked={formData.newsletter} onCheckedChange={(checked) => handleChange("newsletter", checked)} />
                    <label htmlFor="newsletter" className="text-base cursor-pointer">
                      Send me exclusive deals, tips, and inspiration
                    </label>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Checkbox id="terms" checked={formData.terms} onCheckedChange={(checked) => handleChange("terms", checked)} required />
                    <label htmlFor="terms" className="text-base cursor-pointer">
                      I accept the <Link href="/terms" className="text-blue-600 underline">Terms</Link> and <Link href="/privacy" className="text-blue-600 underline">Privacy Policy</Link>
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button - Full Width */}
              <div className="md:col-span-2 mt-12">
                {error && <p className="text-center text-red-600 bg-red-50 px-8 py-5 rounded-2xl mb-8 text-lg">{error}</p>}
                <Button
                  className="w-full h-20 text-2xl font-bold bg-gradient-to-r from-cyan-700 to-cyan-900 hover:from-cyan-900 hover:to-cyan-900 cursor-pointer shadow-2xl hover:shadow-3xl transition-all duration-500"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-4 h-8 w-8 animate-spin" />
                      Creating Your Adventure Account...
                    </>
                  ) : (
                    "Join TravelHub Now"
                  )}
                </Button>
              </div>
            </form>
            <p className="text-center mt-12 text-lg text-gray-600">
              Already have an account?{" "}
              <Link href="/auth/signin" className="font-bold text-blue-600 hover:text-blue-500 text-xl transition">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}