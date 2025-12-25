import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
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
                <img
                  src="/assets/logo.svg"
                  alt="Travixle"
                  className="w-64 h-64 cursor-pointer"
                />
                <nav className="space-x-8">
                  <a href="/" className="text-gray-700 hover:text-indigo-600">
                    Home
                  </a>
                  <a
                    href="/plan"
                    className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent border-solid font-semibold border-2 border-indigo-200 p-2 px-6 rounded-2xl"
                  >
                    AI Planner
                  </a>
                  <a
                    href="/trips"
                    className="text-gray-700 hover:text-indigo-600"
                  >
                    My Trips
                  </a>
                  <a
                    href="/auth/register"
                    className="text-gray-700 hover:text-indigo-600"
                  >
                    Register
                  </a>
                  <a
                    href="/auth/signin"
                    className="text-gray-700 hover:text-indigo-600"
                  >
                    Login
                  </a>
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
