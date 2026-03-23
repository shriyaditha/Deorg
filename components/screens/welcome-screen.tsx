"use client";

import { Button } from "@/components/ui/button";
import { Camera, Sparkles } from "lucide-react";

interface WelcomeScreenProps {
  onNext: () => void;
}

export function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
      <div className="flex max-w-md flex-col items-center text-center">
        {/* Logo/Icon */}
        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
          <Sparkles className="h-10 w-10 text-primary" />
        </div>

        {/* Heading */}
        <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight text-foreground">
          {"Let's start with one area"}
        </h1>

        {/* Description */}
        <p className="mb-12 text-pretty text-lg text-muted-foreground">
          Pick a space in your home and let AI guide you through the decluttering process, one item at a time.
        </p>

        {/* CTA Button */}
        <Button size="lg" onClick={onNext} className="gap-3">
          <Camera className="h-5 w-5" />
          Scan your space
        </Button>

        {/* Footer hint */}
        <p className="mt-8 text-sm text-muted-foreground">
          Point your camera at a cluttered area to begin
        </p>
      </div>
    </div>
  );
}
