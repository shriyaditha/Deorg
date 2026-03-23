"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2, Clock } from "lucide-react";

interface AnalysisScreenProps {
  onNext: () => void;
}

const steps = [
  {
    number: 1,
    title: "Clear visible clutter",
    time: "5 min",
  },
  {
    number: 2,
    title: "Group similar items",
    time: "5 min",
  },
  {
    number: 3,
    title: "Decide what to keep, donate, or sell",
    time: "10 min",
  },
];

export function AnalysisScreen({ onNext }: AnalysisScreenProps) {
  const [analyzing, setAnalyzing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnalyzing(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (analyzing) {
    return (
      <div className="flex h-dvh w-full flex-col items-center justify-center px-6 bg-background">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 relative">
            <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
              <Loader2 className="h-10 w-10 text-primary animate-spin" />
            </div>
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse-ring" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Analyzing your space...
          </h1>
          <p className="text-muted-foreground">
            AI is scanning items in view
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-dvh w-full flex-col px-6 py-12 bg-background">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Your Decluttering Plan
        </h1>
        <p className="text-muted-foreground">
          Follow these steps for a tidy space
        </p>
      </div>

      {/* Steps */}
      <div className="flex-1 space-y-4">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="flex items-start gap-4 p-4 rounded-2xl bg-secondary/50 border border-border"
            style={{
              animation: `fadeSlideIn 0.4s ease-out ${index * 150}ms both`,
            }}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary font-bold text-primary-foreground">
              {step.number}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">
                {step.title}
              </h3>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{step.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="pt-6">
        <Button
          size="lg"
          onClick={onNext}
          className="w-full gap-3 h-14 text-lg font-semibold rounded-2xl"
        >
          Start Step 1
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
