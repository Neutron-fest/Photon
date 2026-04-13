"use client";

import { ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <div
      id="app-scroll-root"
      className="h-dvh w-full overflow-y-auto overflow-x-hidden overscroll-y-contain"
    >
      {children}
    </div>
  );
}
