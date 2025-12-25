// app/auth/signin/page.tsx
"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Plane, Globe } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isRedirecting, setIsRedirecting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setIsLoading(false);

    if (result?.error) {
      setError("Invalid email or password. Please try again.");
    } else {
      router.push("/");
      router.refresh();
    }

    if (result?.ok) {
      setIsRedirecting(true);
      router.push("/");
      router.refresh(); // ← This forces re-validation of server session
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-900 to-cyan-700  items-center justify-center relative flex overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <Plane className="absolute top-20 left-10 size-40 text-white/10 animate-pulse" />
        <Plane className="absolute bottom-32 right-20 size-60 text-white/10 animate-ping" />
        <Globe className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-120 text-white/5" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-4">
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-900/30 to-cyan-700/30 px-10 py-12 text-center">
            <div className="mx-auto size-24 rounded-full bg-white/20 flex items-center justify-center mb-6">
              <Plane className="size-12 text-white" />
            </div>
            <h1 className="text-7xl font-bold text-white mb-4">Welcome Back</h1>
            <p className="text-2xl text-white/90">
              Sign in to continue your journey
            </p>
          </div>

          {/* Form */}
          <div className="px-10 py-12 bg-white/90">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <Label className="text-base font-medium text-gray-700">
                  Email Address
                </Label>
                <Input
                  type="email"
                  placeholder=" "
                  className="mt-2 h-14 text-lg peer"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <span className="absolute left-4 top-12 text-gray-500 pointer-events-none transition-all peer-placeholder-shown:top-12 peer-focus:text-gray-800">
                  you@example.com
                </span>
              </div>

              <div className="relative">
                <Label className="text-base font-medium text-gray-700">
                  Password
                </Label>
                <Input
                  type="password"
                  placeholder=" "
                  className="mt-2 h-14 text-lg peer"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={8}
                />
                <span className="absolute left-4 top-12 text-gray-500 pointer-events-none transition-all peer-placeholder-shown:top-12 peer-placeholder-shown:text-lg peer-focus:text-gray-800">
                  •••••••••
                </span>
              </div>

              {error && (
                <p className="text-center text-red-600 bg-red-50 px-6 py-4 rounded-xl text-lg">
                  {error}
                </p>
              )}

              <Button
                className="w-full h-16 text-xl font-bold bg-gradient-to-r from-cyan-900 to-cyan-700 hover:from-cyan-900 hover:to-cyan-700 cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
              {isRedirecting && (
                <p className="text-center text-green-600 text-xl mt-8">
                  Signing you in...
                </p>
              )}
            </form>

            <p className="text-center mt-10 text-gray-600">
              Don't have an account?{" "}
              <Link
                href="/auth/register"
                className="font-bold text-blue-600 hover:text-blue-500 text-lg transition"
              >
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
