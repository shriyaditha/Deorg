"use client";

import { Button } from "@/components/ui/button";
import { Scan } from "lucide-react";
import Image from "next/image";

interface WelcomeScreenProps {
  onNext: () => void;
}

export function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  return (
    <div className="relative flex h-dvh w-full flex-col overflow-hidden">
      {/* Camera Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/camera-placeholder.jpg"
          alt="Camera view"
          fill
          className="object-cover"
          priority
        />
        {/* Camera overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </div>

      {/* Camera Frame Corners */}
      <div className="absolute inset-8 pointer-events-none">
        <div className="absolute left-0 top-0 h-12 w-12 border-l-4 border-t-4 border-white/80 rounded-tl-xl" />
        <div className="absolute right-0 top-0 h-12 w-12 border-r-4 border-t-4 border-white/80 rounded-tr-xl" />
        <div className="absolute bottom-0 left-0 h-12 w-12 border-b-4 border-l-4 border-white/80 rounded-bl-xl" />
        <div className="absolute bottom-0 right-0 h-12 w-12 border-b-4 border-r-4 border-white/80 rounded-br-xl" />
      </div>

      {/* Floating AI Message */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6">
        <div className="mb-auto" />
        
        <div className="rounded-2xl bg-white/95 backdrop-blur-sm px-6 py-4 shadow-xl max-w-xs">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <span className="text-sm font-bold text-primary-foreground">AI</span>
            </div>
            <span className="font-semibold text-foreground">Assistant</span>
          </div>
          <p className="text-foreground text-lg">
            {"Let's start with one area."}
          </p>
        </div>

        <div className="mb-auto" />
      </div>

      {/* Bottom Action */}
      <div className="relative z-10 px-6 pb-12 pt-6">
        <Button 
          size="lg" 
          onClick={onNext} 
          className="w-full gap-3 h-14 text-lg font-semibold rounded-2xl shadow-lg"
        >
          <Scan className="h-6 w-6" />
          Scan space
        </Button>
      </div>
    </div>
  );
}
