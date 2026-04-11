"use client";

import React from "react";
import { CurvedGallery } from "../../components/competitions/curved-gallery";
import { ChevronLeft, Monitor, Zap } from "lucide-react";
import Link from "next/link";
import GlitchText from "../../components/GlitchText";

export default function CompetitionsPage() {
  return (
    <main className="relative w-full h-screen bg-[#030303] overflow-hidden text-white selection:bg-cyan-500/30">
      
      {/* ── BACKGROUND VOID ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(10,20,30,1)_0%,rgba(0,0,0,1)_100%)]" />
        {/* Subtle moving noise */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://res.cloudinary.com/dyd911kmh/image/upload/v1640050115/glitch_u4q1zq.gif')] pointer-events-none" />
      </div>

      {/* ── TOP NAVIGATION ── */}
      <header className="absolute top-0 left-0 right-0 z-[110] px-10 py-12 flex items-center justify-between pointer-events-none">
        <Link 
          href="/" 
          className="group flex items-center gap-3 pointer-events-auto"
        >
          <div className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all duration-500">
            <ChevronLeft size={18} className="text-white/40 group-hover:text-cyan-400 transition-colors" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-white/30 group-hover:text-cyan-400/60 transition-colors">Term Link</span>
            <span className="font-retro-serif text-sm italic text-white/60 group-hover:text-white transition-colors">Return to Base</span>
          </div>
        </Link>
      </header>

      {/* ── MAIN 3D REEL ── */}
      <div className="relative z-10 w-full h-full">
        <CurvedGallery />
      </div>

      {/* ── FOOTER DECORATION ── */}
      <footer className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[110] pointer-events-none w-full px-12 flex justify-between items-center opacity-30">
          <div className="flex flex-col gap-1">
              <div className="flex gap-0.5">
                  {Array.from({ length: 20 }).map((_, i) => (
                      <div key={i} className="w-1.5 h-1 bg-white/40" />
                  ))}
              </div>
              <span className="text-[7px] font-mono uppercase tracking-[0.5em]">Sequence Auth: 0x992B</span>
          </div>
          
          <span className="text-[8px] font-mono uppercase tracking-[1em] translate-x-[0.5em]">Photon // Network</span>

          <div className="flex items-center gap-4">
              <span className="text-[7px] font-mono uppercase tracking-[0.3em]">Sector 04 // 2026</span>
              <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
          </div>
      </footer>

      {/* ── GLOBAL CRT FILMS ── */}
      <div className="absolute inset-0 z-[200] pointer-events-none border-[40px] border-black opacity-30 rounded-[100px] shadow-[inset_0_0_200px_rgba(0,0,0,0.9)]" />
      <div className="absolute inset-0 z-[201] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      
      {/* Grain / Noise Filter */}
      <div className="absolute inset-0 z-[202] pointer-events-none opacity-[0.05] contrast-150 brightness-150 mix-blend-overlay">
          <div className="w-full h-full bg-[url('https://res.cloudinary.com/dyd911kmh/image/upload/v1640050115/glitch_u4q1zq.gif')] bg-repeat" />
      </div>
    </main>
  );
}
