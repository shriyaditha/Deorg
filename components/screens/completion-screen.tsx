"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Gift, DollarSign, RotateCcw, Trophy } from "lucide-react";
import type { DeclutterStats } from "@/components/declutter-app";

interface CompletionScreenProps {
  stats: DeclutterStats;
  onReset: () => void;
}

export function CompletionScreen({ stats, onReset }: CompletionScreenProps) {
  const totalItems = stats.kept + stats.donated + stats.sold;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
      <div className="flex w-full max-w-md flex-col items-center">
        {/* Success Icon */}
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
          <Trophy className="h-12 w-12 text-primary" />
        </div>

        {/* Header */}
        <h1 className="mb-2 text-center text-3xl font-bold tracking-tight text-foreground">
          Great job!
        </h1>
        <p className="mb-8 text-center text-lg text-muted-foreground">
          You decluttered {totalItems} items
        </p>

        {/* Stats Cards */}
        <div className="mb-8 grid w-full grid-cols-3 gap-3">
          <Card>
            <CardContent className="flex flex-col items-center p-4">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <span className="text-2xl font-bold text-foreground">
                {stats.kept}
              </span>
              <span className="text-xs text-muted-foreground">Kept</span>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center p-4">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Gift className="h-5 w-5 text-primary" />
              </div>
              <span className="text-2xl font-bold text-foreground">
                {stats.donated}
              </span>
              <span className="text-xs text-muted-foreground">Donated</span>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center p-4">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
              <span className="text-2xl font-bold text-foreground">
                {stats.sold}
              </span>
              <span className="text-xs text-muted-foreground">Sold</span>
            </CardContent>
          </Card>
        </div>

        {/* Encouragement */}
        <Card className="mb-8 w-full border-primary/20 bg-primary/5">
          <CardContent className="p-4 text-center">
            <p className="text-sm text-foreground">
              {"You're making great progress! A clutter-free space leads to a clearer mind."}
            </p>
          </CardContent>
        </Card>

        {/* Reset Button */}
        <Button size="lg" onClick={onReset} className="gap-3">
          <RotateCcw className="h-5 w-5" />
          Declutter another area
        </Button>
      </div>
    </div>
  );
}
