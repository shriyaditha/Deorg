"use client";

import { Button } from "@/components/ui/button";
import { Check, Heart, DollarSign, RotateCcw, Sparkles } from "lucide-react";
import type { DeclutterStats } from "@/components/declutter-app";

interface CompletionScreenProps {
  stats: DeclutterStats;
  onReset: () => void;
}

export function CompletionScreen({ stats, onReset }: CompletionScreenProps) {
  const totalItems = stats.kept + stats.donated + stats.sold;

  return (
    <div className="flex h-dvh w-full flex-col px-6 py-12 bg-background">
      {/* Success Header */}
      <div className="flex flex-col items-center text-center mb-8">
        <div className="mb-6 relative">
          <div className="h-24 w-24 rounded-full bg-accent/10 flex items-center justify-center">
            <Sparkles className="h-12 w-12 text-accent" />
          </div>
          <div className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <Check className="h-5 w-5 text-primary-foreground" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-foreground mb-2">
          You decluttered {totalItems} items
        </h1>
        <p className="text-muted-foreground">
          Great progress on your space!
        </p>
      </div>

      {/* Stats Cards */}
      <div className="flex-1">
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 rounded-2xl bg-secondary/50 border border-border">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <span className="font-semibold text-foreground">Kept</span>
            </div>
            <span className="text-2xl font-bold text-foreground">{stats.kept}</span>
          </div>

          <div className="flex items-center justify-between p-4 rounded-2xl bg-secondary/50 border border-border">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <span className="font-semibold text-foreground">Donated</span>
            </div>
            <span className="text-2xl font-bold text-foreground">{stats.donated}</span>
          </div>

          <div className="flex items-center justify-between p-4 rounded-2xl bg-secondary/50 border border-border">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/10">
                <DollarSign className="h-6 w-6 text-yellow-600" />
              </div>
              <span className="font-semibold text-foreground">Sold</span>
            </div>
            <span className="text-2xl font-bold text-foreground">{stats.sold}</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="pt-6">
        <Button
          size="lg"
          onClick={onReset}
          className="w-full gap-3 h-14 text-lg font-semibold rounded-2xl"
        >
          <RotateCcw className="h-5 w-5" />
          Start another session
        </Button>
      </div>
    </div>
  );
}
