"use client";

import { Button } from "@/components/ui/button";
import { Check, Heart } from "lucide-react";
import Image from "next/image";
import type { ItemDecision } from "@/components/declutter-app";

interface DecisionScreenProps {
  onDecision: (decision: ItemDecision) => void;
  currentItem: number;
  totalItems: number;
}

export function DecisionScreen({
  onDecision,
  currentItem,
  totalItems,
}: DecisionScreenProps) {
  return (
    <div className="relative flex h-dvh w-full flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cluttered-kitchen.jpg"
          alt="Cluttered kitchen"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
      </div>

      {/* Highlight Ring - Pulsing indicator on an item */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 pointer-events-none z-10">
        <div className="relative">
          <div className="h-28 w-28 rounded-full border-4 border-primary shadow-lg shadow-primary/30" />
          <div className="absolute inset-0 h-28 w-28 rounded-full border-4 border-primary animate-pulse-ring" />
        </div>
      </div>

      {/* Progress Dots */}
      <div className="relative z-10 flex items-center justify-center gap-2 pt-12">
        {Array.from({ length: totalItems }).map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              i < currentItem
                ? "w-2 bg-primary"
                : i === currentItem - 1
                ? "w-6 bg-primary"
                : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom Content */}
      <div className="relative z-10 px-6 pb-8">
        {/* AI Question Card */}
        <div className="mb-6 rounded-2xl bg-white/95 backdrop-blur-sm p-5 shadow-xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <span className="text-xs font-bold text-primary-foreground">AI</span>
            </div>
            <span className="font-semibold text-foreground">Assistant</span>
          </div>
          <p className="text-xl font-semibold text-foreground mb-1">
            Do you use this weekly?
          </p>
          <p className="text-sm text-muted-foreground">
            {"Let's focus on one item at a time."}
          </p>
        </div>

        {/* Decision Buttons */}
        <div className="flex flex-col gap-3">
          <Button
            size="lg"
            onClick={() => onDecision("keep")}
            className="w-full gap-3 h-14 text-lg font-semibold rounded-2xl"
          >
            <Check className="h-5 w-5" />
            Yes, keep it
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => onDecision("donate")}
            className="w-full gap-3 h-14 text-lg font-semibold rounded-2xl bg-white/90 backdrop-blur-sm border-2 hover:bg-white"
          >
            <Heart className="h-5 w-5" />
            No, donate or sell
          </Button>
        </div>
      </div>
    </div>
  );
}
