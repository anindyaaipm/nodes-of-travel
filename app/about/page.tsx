import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Heart, Users, Camera } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Globe,
      title: "Explore the World",
      description: "We believe everyone should have the opportunity to explore new places and cultures.",
    },
    {
      icon: Heart,
      title: "Sustainable Travel",
      description: "We promote responsible tourism that respects local communities and the environment.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building a community of passionate travelers who share experiences and tips.",
    },
    {
      icon: Camera,
      title: "Authentic Stories",
      description: "Sharing genuine travel experiences and honest recommendations.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          About Nodes of Travel
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Your trusted companion for discovering the world&apos;s most amazing destinations
        </p>
      </div>

      {/* Story Section */}
      <div className="mb-16">
        <Card className="card-gradient shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl">Our Story</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Nodes of Travel was born from a simple passion: the love of exploring new places 
              and sharing those experiences with others. What started as a personal travel blog 
              has grown into a comprehensive platform designed to inspire and help travelers 
              plan their perfect adventures.
            </p>
            <p>
              At Nodes of Travel — where every stop is a story, and every journey connects the world 
              just a little more. Whether it&apos;s quiet canals in Venice or sunrise hikes in the 
              Himalayas - we don&apos;t just travel, we find meaning in the moments.
            </p>
            <p>
              Through our blog posts, videos, and innovative trip planning tools, we aim to 
              provide you with everything you need to turn your travel dreams into reality. 
              From budget-friendly backpacking tips to luxury travel guides, we cover it all.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">Our Values</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="text-center card-gradient shadow-lg hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Mission Section */}
      <div>
        <Card className="border-2 card-gradient shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-lg text-muted-foreground">
              To inspire and empower travelers to explore the world with confidence, 
              providing them with the tools, knowledge, and community support they need 
              to create unforgettable travel experiences while promoting sustainable 
              and responsible tourism practices.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}



