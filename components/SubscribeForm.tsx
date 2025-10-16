"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function SubscribeForm() {
  const searchParams = useSearchParams();
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (searchParams.get("subscribed") === "true") {
      setShowSuccess(true);
      // Auto-hide success message after 5 seconds
      const timer = setTimeout(() => {
        setShowSuccess(false);
        // Clean up URL
        window.history.replaceState({}, "", "/");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  // Get the current base URL for redirect
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";

  return (
    <>
      {/* Success Message Popup */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <Card className="w-full max-w-md border-2 border-green-500 bg-white shadow-2xl animate-in fade-in zoom-in duration-300">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-green-100 p-3">
                  <CheckCircle2 className="h-12 w-12 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    🎉 Welcome to Our Community!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for subscribing! You&apos;ll start receiving travel inspiration and tips soon.
                  </p>
                </div>
                <Button
                  onClick={() => {
                    setShowSuccess(false);
                    window.history.replaceState({}, "", "/");
                  }}
                  className="mt-4"
                >
                  Got it!
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Subscribe Form */}
      <Card className="mx-auto max-w-2xl border-2 card-gradient shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl md:text-3xl">
            Join Our Travel Community
          </CardTitle>
          <CardDescription className="text-base">
            Get the latest travel tips, destination guides, and exclusive content 
            delivered straight to your inbox.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form 
            action="https://formsubmit.co/anindyaaipm@gmail.com" 
            method="POST"
            className="flex flex-col gap-4 sm:flex-row"
          >
            {/* Formsubmit Configuration */}
            <input type="hidden" name="_subject" value="New Subscriber - Nodes of Travel" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://nodes-of-travel.vercel.app/?subscribed=true" />
            
            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex h-10 w-full rounded-md border border-input bg-white/90 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
            <Button type="submit" className="sm:w-auto">
              Subscribe
            </Button>
          </form>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </CardContent>
      </Card>
    </>
  );
}

