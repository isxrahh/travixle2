// app/auth/error/page.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 to-blue-800 flex items-center justify-center px-4">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Sign In Error</h1>
        <p className="text-xl mb-8">Something went wrong during sign in.</p>
        <Link href="/auth/signin">
          <Button size="lg">Try Again</Button>
        </Link>
      </div>
    </div>
  );
}