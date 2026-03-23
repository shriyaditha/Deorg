"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Check, Layers, Trash2, ArrowRight } from "lucide-react";

interface AnalysisScreenProps {
  onNext: () => void;
}

const steps = [
  {
    icon: Trash2,
    title: "Clear visible clutter",
    description: "Remove obvious items that don't belong",
  },
  {
    icon: Layers,
    title: "Group similar items",
    description: "Organize items into logical categories",
  },
  {
    icon: Check,
    title: "Decide what to keep or remove",
    description: "Make thoughtful choices about each item",
  },
];

export function AnalysisScreen({ onNext }: AnalysisScreenProps) {
  const [progress, setProgress] = useState(0);
  const [analyzing, setAnalyzing] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setAnalyzing(false);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
      <div className="flex w-full max-w-md flex-col items-center">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground">
            {analyzing ? "Analyzing your space..." : "Your Decluttering Plan"}
          </h1>
          {analyzing && (
            <p className="text-muted-foreground">
              AI is identifying items and creating your personalized plan
            </p>
          )}
        </div>

        {/* Progress */}
        {analyzing && (
          <div className="mb-8 w-full">
            <Progress value={progress} className="h-2" />
            <p className="mt-2 text-center text-sm text-muted-foreground">
              {progress}% complete
            </p>
          </div>
        )}

        {/* Steps */}
        <div className="mb-8 w-full space-y-4">
          {steps.map((step, index) => (
            <Card
              key={index}
              className={`transition-all duration-300 ${
                !analyzing
                  ? "opacity-100 translate-y-0"
                  : "opacity-40 translate-y-2"
              }`}
              style={{
                transitionDelay: analyzing ? "0ms" : `${index * 150}ms`,
              }}
            >
              <CardContent className="flex items-start gap-4 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <Button
          size="lg"
          onClick={onNext}
          disabled={analyzing}
          className="gap-2"
        >
          Start Step 1
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
