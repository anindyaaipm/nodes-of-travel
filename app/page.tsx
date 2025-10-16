import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Suspense } from "react";
import SubscribeForm from "@/components/SubscribeForm";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Welcome to{" "}
              <span className="text-primary">Nodes of Travel</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Your journey begins here. Explore the world through our curated travel guides, 
              inspiring stories, and personalized trip planning tools.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/plan-your-trip">
                  Plan Your Trip <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/blog">Explore Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Suspense fallback={<div className="text-center">Loading...</div>}>
            <SubscribeForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}



