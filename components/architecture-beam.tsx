"use client";

import React, { forwardRef, useRef } from "react";
import { DatabaseIcon, LayersIcon, LaptopIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-16 items-center justify-center rounded-full border-2 border-border bg-card p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function ArchitectureBeam({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-[200px] w-full items-center justify-center overflow-hidden rounded-xl border border-border/50 bg-background/50 p-10",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full flex-row items-center justify-between max-w-lg">
        {/* Airtable Node */}
        <div className="flex flex-col items-center gap-2">
          <Circle
            ref={div1Ref}
            className="size-16 bg-blue-500/10 border-blue-500/20"
          >
            <DatabaseIcon className="size-6 text-blue-500" />
          </Circle>
          <span className="text-xs font-medium text-muted-foreground">
            Airtable
          </span>
        </div>

        {/* Airboost Node */}
        <div className="flex flex-col items-center gap-2">
          <Circle
            ref={div2Ref}
            className="size-20 bg-primary/10 border-primary/30 shadow-[0_0_30px_-5px_var(--color-primary)]"
          >
            <LayersIcon className="size-8 text-primary" />
          </Circle>
          <span className="text-sm font-bold text-foreground">Airboost</span>
        </div>

        {/* Client App Node */}
        <div className="flex flex-col items-center gap-2">
          <Circle ref={div3Ref} className="size-16">
            <LaptopIcon className="size-6 text-foreground" />
          </Circle>
          <span className="text-xs font-medium text-muted-foreground">
            Your App
          </span>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        curvature={0}
        pathColor="var(--color-border)"
        gradientStartColor="#3b82f6" // blue-500
        gradientStopColor="var(--color-primary)"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div3Ref}
        curvature={0}
        pathColor="var(--color-border)"
        gradientStartColor="var(--color-primary)"
        gradientStopColor="var(--color-foreground)"
      />
    </div>
  );
}
