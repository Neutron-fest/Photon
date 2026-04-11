"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { ReactNode, useContext, useRef, useState, useEffect } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

function FrozenRouter({ children }: { children: ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;

  if (!LayoutRouterContext) {
    return <>{children}</>;
  }

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
}

const NoiseImg = "https://res.cloudinary.com/dyd911kmh/image/upload/v1640050115/glitch_u4q1zq.gif";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        // CRT Power On / Off effect for the entire layout
        initial={{ 
          opacity: 0, 
          scaleX: 0.05, 
          scaleY: 0.005, 
          filter: "brightness(5) contrast(3) invert(1) hue-rotate(90deg) blur(20px)",
        }}
        animate={{ 
          opacity: 1, 
          scaleX: 1, 
          scaleY: 1, 
          filter: "brightness(1) contrast(1) invert(0) hue-rotate(0deg) blur(0px)",
        }}
        exit={{ 
          opacity: 0, 
          scaleX: 0.8, 
          scaleY: 0.005, 
          filter: "brightness(10) contrast(5) invert(1) saturate(5) sepia(1) blur(10px)", 
        }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1], // easeOutExpo
        }}
        className="w-full min-h-screen relative origin-center bg-black"
      >
        <FrozenRouter>{children}</FrozenRouter>

        {/* ── CRAZY DYSTOPIAN BROKEN OVERLAYS ── */}
        
        {/* Full Screen Noise Flash */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", times: [0, 0.5, 1] }}
          className="fixed inset-0 z-10000 pointer-events-none mix-blend-screen opacity-0"
          style={{ backgroundImage: `url(${NoiseImg})`, backgroundSize: "cover" }}
        />

        {/* Giant Text Artifacts */}
        <motion.div
           initial={{ opacity: 1, x: "-100%", skewX: "40deg" }}
           animate={{ opacity: 0, x: "100%", skewX: "-40deg" }}
           exit={{ opacity: 1, x: "0%", skewX: "0deg" }}
           transition={{ duration: 0.5, ease: "circIn" }}
           className="fixed top-1/4 left-0 z-10001 pointer-events-none text-[8vw] font-rubicglitch text-red-600/80 mix-blend-color-dodge whitespace-nowrap drop-shadow-[0_0_20px_rgba(255,0,0,0.8)]"
        >
          FATAL_SYSTEM_ERROR // SECTOR BREACH
        </motion.div>

        <motion.div
           initial={{ opacity: 1, x: "100%", skewX: "-60deg" }}
           animate={{ opacity: 0, x: "-100%", skewX: "60deg" }}
           exit={{ opacity: 1, x: "0%", skewX: "0deg" }}
           transition={{ duration: 0.6, ease: "circOut", delay: 0.1 }}
           className="fixed bottom-1/4 right-0 z-10001 pointer-events-none text-[6vw] font-orbitron font-black text-cyan-400/80 mix-blend-overlay whitespace-nowrap tracking-tighter"
        >
          RECALIBRATING_GRID... [0x992B]
        </motion.div>

        {/* Aggressive RGB Splits & VHS Jitter Blocks */}
        <motion.div 
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, display: "none" }}
          exit={{ opacity: 1, display: "flex" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed inset-0 z-9999 pointer-events-none overflow-hidden flex flex-col justify-between"
        >
          {/* Top Block */}
          <div className="h-[15%] w-full bg-cyan-500 saturate-[5] mix-blend-screen translate-x-[3vw] animate-[vibrate_0.02s_infinite]" />
          
          {/* Middle Random Slices */}
          <div className="h-[2px] w-full bg-white shadow-[0_0_15px_white] translate-y-[-10vh] animate-[flash_0.015s_infinite]" />
          <div className="h-[5%] w-full bg-white/20 mix-blend-overlay backdrop-invert animate-[flash_0.05s_infinite_reverse]" />
          <div className="h-[2px] w-full bg-red-500 shadow-[0_0_20px_red] translate-y-[20vh] animate-[vibrate_0.1s_infinite]" />

          {/* Bottom Block */}
          <div className="h-[25%] w-full bg-red-600 saturate-[5] mix-blend-screen -translate-x-[4vw] animate-[vibrate_0.04s_infinite_reverse]" />
        </motion.div>

        {/* High-speed scanline that drops like a bomb */}
        <motion.div
          initial={{ top: "-20%", height: "20%" }}
          animate={{ top: "120%", height: "0%" }}
          exit={{ top: "50%", height: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-x-0 z-10002 bg-cyan-200/30 mix-blend-exclusion shadow-[0_0_50px_rgba(255,255,255,0.8)] pointer-events-none"
        />
        
        {/* Extreme invert flash on mount/unmount */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-9998 bg-white mix-blend-difference pointer-events-none"
        />

      </motion.div>
    </AnimatePresence>
  );
}
