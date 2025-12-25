import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react"; // Added icon for better visual when image isn't available

const EndSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
          Travel more, spend less
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Unlock exclusive member-only savings and perks every time you book.
        </p>
      </div>

      <Card className="overflow-hidden rounded-3xl border-0 shadow-xl bg-gradient-to-br from-blue-50 via-white to-blue-50/60">
        <CardContent className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 py-12 px-8 lg:px-12">
          {/* Text Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <CardHeader className="p-0 space-y-4">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium w-fit">
                <Gift className="w-4 h-4" />
                Member Exclusive
              </div>
              <CardTitle className="text-3xl sm:text-4xl font-bold text-gray-900">
                Sign in, save money
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 leading-relaxed">
                Save <span className="font-semibold text-blue-600">10% or more</span> at thousands of participating properties — just look for the blue{" "}
                <span className="font-semibold text-blue-600">Genius</span> label.
              </CardDescription>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span>Instant discounts on hotels, flights & rentals</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span>Free room upgrades when available</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span>Priority customer support</span>
                </li>
              </ul>
            </CardHeader>
          </div>

          {/* Visual */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-3xl scale-150 -z-10" />
              <img
                src="/assets/gift_box.png" // Changed to root-relative path (recommended for Vite/Next.js)
                alt="Open gift box with travel rewards"
                className="w-64 h-auto drop-shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </CardContent>

        {/* Actions */}
        <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center px-8 pb-12 pt-4">
          <Button
            size="lg"
            className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-lg px-8 py-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            Register for Free
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-gray-900 cursor-pointer text-lg px-8 py-6 rounded-xl border-2 hover:border-blue-600 hover:bg-blue-50 transition-all"
          >
            Sign In
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default EndSection;