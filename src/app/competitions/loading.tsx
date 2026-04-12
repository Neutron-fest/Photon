"use client";

import React from 'react';
import Noise from "@/components/Noise";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black flex flex-items-center justify-center overflow-hidden z-99999">
      {/* ── Background technical atmosphere ── */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-size-[100%_4px]" />
        <Noise patternAlpha={15} patternRefreshInterval={2} />
      </div>

      <div className="relative flex flex-col items-center gap-8">
        {/* ── Central Pulsing Core ── */}
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 bg-cyan-500 rounded-full blur-2xl opacity-20 animate-pulse" />
          <div className="absolute inset-4 border border-cyan-400/30 rounded-full animate-[spin_3s_linear_infinite]" />
          <div className="absolute inset-6 border-2 border-t-cyan-500 border-r-transparent border-b-cyan-500 border-l-transparent rounded-full animate-[spin_1s_linear_infinite_reverse]" />
          <div className="absolute inset-[38%] bg-white rounded-full shadow-[0_0_15px_#fff] animate-pulse" />
        </div>

        {/* ── Technical Text ── */}
        <div className="flex flex-col items-center gap-2">
          <div className="font-mono text-[10px] tracking-[0.6em] text-cyan-400 uppercase animate-pulse">
            Stabilizing_Quantum_Core
          </div>
          <div className="flex gap-1">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className="w-8 h-1 bg-cyan-500/20 rounded-full overflow-hidden"
              >
                <div 
                  className="w-full h-full bg-cyan-400 animate-[loading-bar_1.5s_infinite]" 
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              </div>
            ))}
          </div>
          <div className="font-mono text-[7px] text-white/20 tracking-widest mt-2 uppercase">
            Sector_04 // Redirecting_Stream
          </div>
        </div>
      </div>

      {/* ── Scanline effect ── */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.4)_100%)]" />
      
      <style jsx>{`
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
