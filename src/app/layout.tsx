import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Link from "next/link";
import { SearchIcon } from "lucide-react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travixle",
  description: "Plan, track, and share amazing trips with AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <header className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                  <img
                    src="/assets/logo.svg"
                    alt="Travixle"
                    className="h-52 w-auto cursor-pointer object-contain"
                  />
                </Link>

                {/* Nav Menu */}
                <nav className="flex items-center space-x-8">
                  <Link
                    href="/"
                    className="text-gray-700 hover:text-indigo-600"
                  >
                    Home
                  </Link>

                  <Link
                    href="/search"
                    className="flex items-center gap-1 text-gray-700 hover:text-indigo-600"
                  >
                    Search <SearchIcon className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/plan"
                    className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent border-solid font-semibold border-2 border-indigo-200 px-4 py-1 rounded-2xl"
                  >
                    AI Planner
                  </Link>

                  <Link
                    href="/trips"
                    className="text-gray-700 hover:text-indigo-600"
                  >
                    My Trips
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="text-gray-700 hover:text-indigo-600"
                  >
                    Register
                  </Link>
                  <Link
                    href="/auth/signin"
                    className="text-gray-700 hover:text-indigo-600"
                  >
                    Login
                  </Link>
                </nav>
              </div>
            </div>
          </header>

          <main>{children}</main>
        </div>
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
