"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ContactForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('success') === 'true') {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000); // Hide after 5 seconds
    }
  }, [searchParams]);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Success Message Popup */}
        {showSuccess && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2">
          <Card className="border-green-500 bg-green-50 shadow-2xl">
            <CardContent className="flex items-center gap-3 p-4">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-semibold text-green-900">Form submitted successfully!</p>
                <p className="text-sm text-green-700">We&apos;ll contact you soon.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Get in Touch</h1>
        <p className="text-lg text-muted-foreground">
          Have questions? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
        {/* Contact Information */}
        <div className="space-y-6 lg:col-span-1">
          <Card className="card-gradient shadow-xl">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Reach out to us through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:hello@nodesoftravel.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    hello@nodesoftravel.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href="tel:+16476492775"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (647) 649-2775
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-primary/10 p-2">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">
                   Mississauga, ON
                    <br />
                    Canada
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 card-gradient shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We typically respond to all inquiries within 24-48 hours during business days.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="lg:col-span-2 card-gradient shadow-xl">
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we&apos;ll get back to you as soon as possible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form 
              action="https://formsubmit.co/anindyaaipm@gmail.com" 
              method="POST"
              className="space-y-6"
            >
              {/* Formsubmit Configuration */}
              <input type="hidden" name="_subject" value="New contact form submission from Nodes of Travel" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/contact?success=true` : 'http://localhost:3000/contact?success=true'} />
              
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What is this about?"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us more about your inquiry..."
                  className="min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-12">Loading...</div>}>
      <ContactForm />
    </Suspense>
  );
}



