"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, MapPin, CalendarDays, DollarSign, Sparkles, Heart, Mountain, Utensils } from "lucide-react";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Planner() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("moderate");
  const [preferences, setPreferences] = useState("");
  const [itinerary, setItinerary] = useState("");
  const [loading, setLoading] = useState(false);

  const generatePlan = async () => {
    if (!destination || !days) {
      toast.error("Please fill in destination and number of days");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/planner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          destination,
          days: Number(days),
          budget,
          preferences: preferences.split(",").map((p) => p.trim()).filter(Boolean),
        }),
      });

      const data = await res.json();

      if (data.itinerary) {
        setItinerary(data.itinerary);
        toast.success("✨ Your dream itinerary is ready!");
      } else {
        toast.error("Failed to generate itinerary", {
          description: data.error || "Please try again later",
        });
      }
    } catch (err) {
      toast.error("Connection failed", {
        description: "Check your internet and try again",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            AI Travel Planner
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let AI craft your perfect personalized trip — just tell us where and how you like to travel
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="backdrop-blur-md bg-white/80 border-0 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-indigo-500" />
                Plan Your Adventure
              </CardTitle>
              <CardDescription>
                Fill in your preferences and let the magic begin
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-indigo-700 font-medium pb-2">
                  <MapPin className="w-5 h-5" />
                  Destination
                </Label>
                <Input
                  placeholder="Paris, Bali, Tokyo, New York..."
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="h-12 text-lg border-gray-200 focus:border-indigo-400 focus:ring-indigo-400 mb-2"
                />
              </div>
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-purple-700 font-medium pb-2">
                  <CalendarDays className="w-5 h-5" />
                  Trip Duration
                </Label>
                <Input
                  type="number"
                  min="1"
                  max="30"
                  placeholder="7"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                  className="h-12 text-lg mb-2"
                />
              </div>
              <div className="space-y-4 pt-2">
                <Label className="flex items-center gap-2 text-green-700 font-medium">
                  <DollarSign className="w-5 h-5" />
                  Budget Level
                </Label>
                <Select value={budget} onValueChange={setBudget}>
                  <SelectTrigger className="h-12 w-64 py-6">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="budget">💸 Budget</SelectItem>
                    <SelectItem value="moderate">⚖️ Moderate</SelectItem>
                    <SelectItem value="luxury">💎 Luxury</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-4 py-2">
                <Label className="flex items-center gap-2 text-pink-700 font-medium">
                  <Heart className="w-5 h-5" />
                  Your Preferences
                </Label>
                <Textarea
                  placeholder="e.g., vegan food, hiking, museums, beaches, nightlife, photography spots..."
                  value={preferences}
                  onChange={(e) => setPreferences(e.target.value)}
                  className="min-h-32 resize-none "
                  rows={4}
                />
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <Utensils className="w-4 h-4" />
                  <Mountain className="w-4 h-4" />
                  Separate multiple preferences with commas
                </p>
              </div>
              <Button
                onClick={generatePlan}
                disabled={loading}
                size="lg"
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                    Crafting your perfect trip...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-6 w-6" />
                    Generate My Itinerary
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-md bg-white/80 border-0 shadow-2xl overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <MapPin className="w-8 h-8 text-purple-500" />
                Your Personalized Itinerary
              </CardTitle>
              <CardDescription>
                {itinerary ? "Ready for your adventure!" : "Waiting for your trip details..."}
              </CardDescription>
            </CardHeader>
            <CardContent className="max-h-[800px] overflow-y-auto">
              {itinerary ? (
                <div className="prose prose-lg max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {itinerary}
                  </ReactMarkdown>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center text-gray-400">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32 mb-6" />
                  <p className="text-xl font-medium">Your dream itinerary will appear here</p>
                  <p className="mt-2">Fill in the details and click Generate →</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}