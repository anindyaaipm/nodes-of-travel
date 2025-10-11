import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

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
          <Card className="mx-auto max-w-2xl border-2">
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
              <form className="flex flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
        </div>
      </section>
    </div>
  );
}



