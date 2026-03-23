"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Check, Gift, DollarSign, Package } from "lucide-react";
import type { ItemDecision } from "@/components/declutter-app";

interface DecisionScreenProps {
  onDecision: (decision: ItemDecision) => void;
  currentItem: number;
  totalItems: number;
}

const mockItems = [
  { name: "Old Magazine Stack", image: "magazines" },
  { name: "Unused Kitchen Gadget", image: "gadget" },
  { name: "Vintage Picture Frame", image: "frame" },
  { name: "Extra Throw Pillows", image: "pillows" },
  { name: "Old Electronics", image: "electronics" },
  { name: "Decorative Vase", image: "vase" },
];

export function DecisionScreen({
  onDecision,
  currentItem,
  totalItems,
}: DecisionScreenProps) {
  const item = mockItems[currentItem - 1] || mockItems[0];
  const progress = ((currentItem - 1) / totalItems) * 100;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
      <div className="flex w-full max-w-md flex-col items-center">
        {/* Progress Header */}
        <div className="mb-6 w-full">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              Item {currentItem} of {totalItems}
            </span>
            <span className="font-medium text-primary">
              {Math.round(progress)}% done
            </span>
          </div>
          <Progress value={progress} />
        </div>

        {/* Item Card */}
        <Card className="mb-8 w-full overflow-hidden">
          <div className="flex h-48 items-center justify-center bg-secondary">
            <Package className="h-16 w-16 text-muted-foreground" />
          </div>
          <CardContent className="p-6">
            <h2 className="mb-2 text-xl font-semibold text-foreground">
              {item.name}
            </h2>
            <p className="text-muted-foreground">
              Do you use this item weekly?
            </p>
          </CardContent>
        </Card>

        {/* Question */}
        <h3 className="mb-6 text-center text-2xl font-bold text-foreground">
          What would you like to do?
        </h3>

        {/* Decision Buttons */}
        <div className="flex w-full flex-col gap-3">
          <Button
            size="lg"
            onClick={() => onDecision("keep")}
            className="gap-3"
          >
            <Check className="h-5 w-5" />
            Keep it
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => onDecision("donate")}
            className="gap-3"
          >
            <Gift className="h-5 w-5" />
            Donate
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => onDecision("sell")}
            className="gap-3"
          >
            <DollarSign className="h-5 w-5" />
            Sell
          </Button>
        </div>
      </div>
    </div>
  );
}
