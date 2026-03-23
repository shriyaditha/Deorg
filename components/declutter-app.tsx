"use client";

import { useState } from "react";
import { WelcomeScreen } from "./screens/welcome-screen";
import { AnalysisScreen } from "./screens/analysis-screen";
import { DecisionScreen } from "./screens/decision-screen";
import { CompletionScreen } from "./screens/completion-screen";

export type ItemDecision = "keep" | "donate" | "sell";

export interface DeclutterStats {
  kept: number;
  donated: number;
  sold: number;
}

export function DeclutterApp() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [stats, setStats] = useState<DeclutterStats>({
    kept: 0,
    donated: 0,
    sold: 0,
  });
  const [currentItem, setCurrentItem] = useState(1);
  const totalItems = 6;

  const handleDecision = (decision: ItemDecision) => {
    // Map "donate" to both donated and sold stats based on user choice
    const statKey = decision === "keep" ? "kept" : decision === "donate" ? "donated" : "sold";
    
    setStats((prev) => ({
      ...prev,
      [statKey]: prev[statKey] + 1,
    }));

    if (currentItem < totalItems) {
      setCurrentItem((prev) => prev + 1);
    } else {
      setCurrentScreen(4);
    }
  };

  const handleReset = () => {
    setCurrentScreen(1);
    setStats({ kept: 0, donated: 0, sold: 0 });
    setCurrentItem(1);
  };

  return (
    <main className="min-h-dvh bg-background">
      {currentScreen === 1 && (
        <WelcomeScreen onNext={() => setCurrentScreen(2)} />
      )}
      {currentScreen === 2 && (
        <AnalysisScreen onNext={() => setCurrentScreen(3)} />
      )}
      {currentScreen === 3 && (
        <DecisionScreen
          onDecision={handleDecision}
          currentItem={currentItem}
          totalItems={totalItems}
        />
      )}
      {currentScreen === 4 && (
        <CompletionScreen stats={stats} onReset={handleReset} />
      )}
    </main>
  );
}
