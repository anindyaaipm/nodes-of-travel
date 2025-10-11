"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, CheckCircle2, MessageSquare, Mic, FileText } from "lucide-react";

export default function PlanYourTripPage() {
  const [formData, setFormData] = useState({
    // Traveler Details
    fullName: "",
    email: "",
    contactNumber: "",
    countryOfResidence: "",
    cityOfDeparture: "",
    
    // Trip Overview
    destinations: "",
    numberOfAdults: "",
    numberOfChildren: "",
    tripDuration: "",
    preferredStartDate: "",
    budgetRange: "",
    modeOfTravel: "",
    
    // Travel Interests (checkboxes)
    travelInterests: [] as string[],
    
    // Trip Preferences
    specialNeeds: [] as string[],
    additionalComments: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(0);

  const loadingMessages = [
    "🌴 Packing your virtual bags...",
    "✈️ Finding the best flights...",
    "🏨 Booking amazing accommodations...",
    "🗺️ Mapping out your journey...",
    "🎒 Planning exciting activities...",
    "📧 Preparing your itinerary...",
    "🌟 Adding special touches...",
    "🎉 Almost there..."
  ];

  const travelInterestsOptions = [
    "Nature & Scenic Landscapes",
    "Architecture & Heritage",
    "Art, Culture & Local Events",
    "Food & Culinary Experiences",
    "Walking / City Tours",
    "Romantic Getaways",
    "Family & Kid-Friendly",
    "Adventure & Outdoor Activities",
    "Beach & Relaxation",
    "Photography Spots",
    "Offbeat / Hidden Gems",
    "Spiritual / Mindful Travel",
    "Shopping & Local Markets",
    "Festivals & Seasonal Highlights",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      travelInterests: prev.travelInterests.includes(interest)
        ? prev.travelInterests.filter(i => i !== interest)
        : [...prev.travelInterests, interest]
    }));
  };

  const handleSpecialNeedsChange = (need: string) => {
    setFormData(prev => ({
      ...prev,
      specialNeeds: prev.specialNeeds.includes(need)
        ? prev.specialNeeds.filter(n => n !== need)
        : [...prev.specialNeeds, need]
    }));
  };

  const specialNeedsOptions = [
    "Not Required",
    "Dietary Restrictions",
    "Wheelchair Accessibility",
    "Travelling with Babies/Toddlers",
  ];

  // Reset form function
  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      contactNumber: "",
      countryOfResidence: "",
      cityOfDeparture: "",
      destinations: "",
      numberOfAdults: "",
      numberOfChildren: "",
      tripDuration: "",
      preferredStartDate: "",
      budgetRange: "",
      modeOfTravel: "",
      travelInterests: [],
      specialNeeds: [],
      additionalComments: "",
    });
  };

  // Cycle through loading messages
  React.useEffect(() => {
    if (isSubmitting) {
      const interval = setInterval(() => {
        setLoadingMessage((prev) => (prev + 1) % loadingMessages.length);
      }, 3000); // Change message every 3 seconds
      return () => clearInterval(interval);
    }
  }, [isSubmitting, loadingMessages.length]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate at least one travel interest is selected
    if (formData.travelInterests.length === 0) {
      alert('Please select at least one Travel Style / Interest.');
      return;
    }
    
    // Validate at least one special need is selected
    if (formData.specialNeeds.length === 0) {
      alert('Please select at least one option in Special Needs / Accessibility (including "Not Required" if applicable).');
      return;
    }
    
    setIsSubmitting(true);
    setLoadingMessage(0);

    // Add timestamp
    const dataToSend = {
      ...formData,
      timestamp: new Date().toISOString(),
    };

    try {
      // Call our API route (which will forward to n8n)
      const response = await fetch('/api/submit-trip', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);
        resetForm();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Loading Screen - Fixed positioning and centered
  if (isSubmitting) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="max-w-2xl mx-4 w-full">
          <Card className="shadow-2xl border-2 border-teal-500">
            <CardContent className="p-12 text-center">
              {/* Animated Palm Tree - Larger and more visible */}
              <div className="mb-8 text-9xl animate-bounce">
                🌴
              </div>
              
              {/* Progress Bar - More prominent */}
              <div className="mb-6">
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                  <div 
                    className="h-full bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 rounded-full"
                    style={{
                      width: '100%',
                      animation: 'progress 2s ease-in-out infinite'
                    }}
                  />
                </div>
              </div>

              {/* Rotating Messages */}
              <h2 className="text-3xl font-bold mb-4 text-gray-900 animate-in fade-in">
                Creating Your Dream Itinerary
              </h2>
              <p className="text-xl text-gray-700 font-medium animate-in slide-in-from-bottom-2" key={loadingMessage}>
                {loadingMessages[loadingMessage]}
              </p>

              {/* Tip */}
              <div className="mt-8 p-5 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-teal-200">
                <p className="text-base text-blue-900">
                  💡 <strong>Tip:</strong> This usually takes 30-60 seconds. We&apos;re using AI to craft a personalized plan just for you!
                </p>
              </div>

              {/* Loading Dots */}
              <div className="flex justify-center gap-3 mt-8">
                <div className="w-4 h-4 bg-teal-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CSS for progress animation */}
        <style jsx>{`
          @keyframes progress {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(0%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </div>
    );
  }

  // Success Screen
  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg border-green-500">
            <CardContent className="p-12 text-center">
              <CheckCircle2 className="h-20 w-20 text-green-600 mx-auto mb-6 animate-in zoom-in" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🎉 Success! Your Itinerary is Ready!
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Check your email for your personalized travel plan.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                Our AI travel assistant has crafted a detailed itinerary just for you. It should arrive in your inbox within a few minutes.
              </p>
              <Button
                onClick={() => {
                  setIsSuccess(false);
                  resetForm();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                size="lg"
                className="transition-all duration-300 hover:scale-105"
              >
                Plan Another Trip
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Plan Your Perfect Journey
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose how you&apos;d like to plan your trip — detailed form, AI chat, or voice assistant
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="form" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="form" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">AI Concierge Form</span>
              <span className="sm:hidden">Form</span>
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span className="hidden sm:inline">Chat with AI</span>
              <span className="sm:hidden">Chat</span>
            </TabsTrigger>
            <TabsTrigger value="voice" className="flex items-center gap-2">
              <Mic className="h-4 w-4" />
              <span className="hidden sm:inline">Voice Assistant</span>
              <span className="sm:hidden">Voice</span>
            </TabsTrigger>
          </TabsList>

          {/* AI Concierge Form Tab */}
          <TabsContent value="form">
            <Card className="shadow-2xl card-gradient">
              <CardHeader className="text-center border-b">
                <CardTitle className="text-2xl">AI-Powered Travel Concierge</CardTitle>
                <CardDescription className="text-base">
                  Tell us about your journey — we&apos;ll craft your personalized travel plan
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-10">
                  
                  {/* Traveler Details */}
                  <div>
                    <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">
                      Traveler Details
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Contact Number
                        </label>
                        <Input
                          type="tel"
                          name="contactNumber"
                          value={formData.contactNumber}
                          onChange={handleChange}
                          className="w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Country of Residence <span className="text-red-500">*</span>
                        </label>
                        <Input
                          name="countryOfResidence"
                          value={formData.countryOfResidence}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          City of Departure (Origin City) <span className="text-red-500">*</span>
                        </label>
                        <Input
                          name="cityOfDeparture"
                          value={formData.cityOfDeparture}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Trip Overview */}
                  <div>
                    <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">
                      Trip Overview
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Destination(s) <span className="text-red-500">*</span>
                        </label>
                        <Input
                          name="destinations"
                          value={formData.destinations}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Number of Adults <span className="text-red-500">*</span>
                        </label>
                        <Input
                          type="number"
                          name="numberOfAdults"
                          value={formData.numberOfAdults}
                          onChange={handleChange}
                          min="1"
                          required
                          className="w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Number of Children <span className="text-red-500">*</span>
                        </label>
                        <Input
                          type="number"
                          name="numberOfChildren"
                          value={formData.numberOfChildren}
                          onChange={handleChange}
                          min="0"
                          required
                          className="w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Trip Duration (in days) <span className="text-red-500">*</span>
                        </label>
                        <Input
                          type="number"
                          name="tripDuration"
                          value={formData.tripDuration}
                          onChange={handleChange}
                          min="1"
                          required
                          className="w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Start Date <span className="text-red-500">*</span>
                        </label>
                        <Input
                          type="date"
                          name="preferredStartDate"
                          value={formData.preferredStartDate}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Budget Range <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="budgetRange"
                          value={formData.budgetRange}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500 h-10 px-3 py-2 text-sm"
                        >
                          <option value="">Select Budget</option>
                          <option value="Low">Low</option>
                          <option value="Moderate">Moderate</option>
                          <option value="High">High</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Mode of Travel <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="modeOfTravel"
                          value={formData.modeOfTravel}
                          onChange={handleChange}
                          required
                          className="w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500 h-10 px-3 py-2 text-sm"
                        >
                          <option value="">Select Mode</option>
                          <option value="Fly">Fly</option>
                          <option value="Drive">Drive</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Travel Style / Interest */}
                  <div>
                    <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">
                      Travel Style / Interest <span className="text-red-500">*</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto p-4 bg-gray-50 rounded-lg">
                      {travelInterestsOptions.map((interest) => (
                        <label
                          key={interest}
                          className="flex items-center space-x-3 cursor-pointer hover:bg-white p-2 rounded transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={formData.travelInterests.includes(interest)}
                            onChange={() => handleCheckboxChange(interest)}
                            className="w-5 h-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                          />
                          <span className="text-sm text-gray-700">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Special Needs / Accessibility */}
                  <div>
                    <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">
                      Special Needs / Accessibility <span className="text-red-500">*</span>
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                          {specialNeedsOptions.map((need) => (
                            <label
                              key={need}
                              className="flex items-center space-x-3 cursor-pointer hover:bg-white p-2 rounded transition-colors"
                            >
                              <input
                                type="checkbox"
                                checked={formData.specialNeeds.includes(need)}
                                onChange={() => handleSpecialNeedsChange(need)}
                                className="w-5 h-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                              />
                              <span className="text-sm text-gray-700">{need}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Additional Comments or Experiences to Include
                        </label>
                        <Textarea
                          name="additionalComments"
                          value={formData.additionalComments}
                          onChange={handleChange}
                          rows={4}
                          className="w-full rounded-lg border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-6">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="px-12 transition-all duration-300 hover:scale-105"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Submit My Trip Plan"
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Chat with AI Tab */}
          <TabsContent value="chat">
            <Card className="shadow-2xl min-h-[600px] card-gradient">
              <CardHeader className="text-center border-b">
                <CardTitle className="text-2xl flex items-center justify-center gap-2">
                  <MessageSquare className="h-6 w-6" />
                  Chat with AI Travel Assistant
                </CardTitle>
                <CardDescription className="text-base">
                  Have a conversation with our AI to plan your perfect trip
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 md:p-10">
                <div className="flex items-center justify-center min-h-[400px]">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto bg-teal-100 rounded-full flex items-center justify-center">
                      <MessageSquare className="h-10 w-10 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">AI Chatbot Coming Soon</h3>
                    <p className="text-gray-600 max-w-md">
                      We&apos;re building an intelligent chatbot that will help you plan your trip through natural conversation. 
                      For now, please use the AI Concierge Form or Voice Assistant.
                    </p>
                    <div className="pt-4">
                      <p className="text-sm text-gray-500 italic">
                        This feature will be powered by advanced AI to understand your preferences and create personalized itineraries.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Voice Assistant Tab */}
          <TabsContent value="voice">
            <Card className="shadow-2xl min-h-[600px] card-gradient">
              <CardHeader className="text-center border-b">
                <CardTitle className="text-2xl flex items-center justify-center gap-2">
                  <Mic className="h-6 w-6" />
                  Voice Travel Assistant
                </CardTitle>
                <CardDescription className="text-base">
                  Talk to our AI assistant to plan your trip hands-free
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 md:p-10">
                <div className="flex items-center justify-center min-h-[400px]">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto bg-orange-100 rounded-full flex items-center justify-center">
                      <Mic className="h-10 w-10 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Voice Assistant Coming Soon</h3>
                    <p className="text-gray-600 max-w-md">
                      Soon you&apos;ll be able to speak naturally with our AI to plan your entire trip. 
                      Perfect for when you&apos;re on the go or prefer voice interaction.
                    </p>
                    <div className="pt-4">
                      <p className="text-sm text-gray-500 italic">
                        This feature will support natural voice commands and multi-language conversations.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Thank You Section */}
        <div className="text-center mt-12 mb-8">
          <p className="text-lg italic text-muted-foreground">
            We believe every journey begins with a story. Let&apos;s start writing yours.
          </p>
        </div>
      </div>
    </div>
  );
}
