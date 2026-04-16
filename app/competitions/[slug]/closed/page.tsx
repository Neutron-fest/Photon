"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  ShieldAlert,
  XCircle,
  AlertTriangle,
  Lock
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Noise from "@/components/Noise";
import { COMPETITIONS_DATA } from "@/data/competition-data";

export default function RegistrationClosedPage() {
  const params = useParams();
  const routeParam = typeof params?.slug === "string" ? params.slug : "";
  const competition = COMPETITIONS_DATA.find(c => c.slug === routeParam);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!competition) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-black font-audiowide uppercase">File Not Found</h1>
          <Link href="/competitions" className="text-cyan-400 hover:underline uppercase font-bold tracking-widest text-xs">
            Return to Fleet
          </Link>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-[#03050B] text-[#E7F2FF] font-sans selection:bg-red-500 selection:text-white overflow-hidden relative">
      <div className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000 ${isMobile ? "opacity-35" : "opacity-60"}`}>
        <Noise patternAlpha={isMobile ? 30 : 70} patternRefreshInterval={isMobile ? 2 : 1} patternSize={isMobile ? 120 : 100} />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.35]"
          style={{
            background: 'linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.2) 50%), linear-gradient(90deg,rgba(255,0,0,0.04),rgba(0,255,0,0.01),rgba(0,0,255,0.04))',
            backgroundSize: '100% 4px, 3px 100%',
          }}
        />
      </div>

      <div className="fixed inset-0 pointer-events-none z-1 bg-linear-to-b from-[#050000] via-[#020000] to-[#0a0000]"></div>
      <div className="fixed inset-0 pointer-events-none z-2 bg-radial-[circle_at_50%_50%] from-red-600/10 via-transparent to-transparent animate-[glow-pulse_8s_ease-in-out_infinite]"></div>
      
      {/* Animated SVG Lines (Thematic Consistency) */}
      <div className={`pointer-events-none fixed inset-0 z-4 transition-all duration-700 ${isMobile ? "opacity-30 blur-4" : "opacity-50 blur-[1.5px]"}`}>
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M0,50 Q25,25 50,50 T100,50"
            stroke="#ff0033"
            strokeWidth="0.15"
            fill="none"
            opacity={0.3}
            strokeLinecap="round"
            strokeDasharray="5 5"
          />
          <path
            d="M0,10 C30,30 60,0 100,40"
            stroke="#ff0033"
            strokeWidth="0.05"
            fill="none"
            opacity={0.2}
            strokeLinecap="round"
            strokeDasharray="1 1"
          />
        </svg>
      </div>

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-12 w-full text-center"
        >
          {/* Status Icon */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-red-600/20 blur-3xl rounded-full -z-1"></div>
          </div>

          {/* Heading */}
          <div className="space-y-6 relative">
            <div className="text-[10px] font-mono text-red-500/60 tracking-[0.8em] uppercase font-bold animate-pulse">
              [ STATUS :: TRANSMISSION_TERMINATED ]
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] text-white">
              <span className="block">Registration</span>
              <span className="text-red-600 block">Offline</span>
            </h1>
          </div>

          {/* Details Box */}
          <div className="max-w-xl mx-auto p-1px bg-linear-to-r from-transparent via-red-500/20 to-transparent">
            <div className="bg-[#0a0000]/40 backdrop-blur-3xl px-8 py-10 space-y-6 border-x border-red-500/10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-red-500/50 to-transparent"></div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold uppercase tracking-widest text-[#ffe1e1] font-audiowide">
                  Protocol {competition.title}
                </h3>
                <p className="text-sm text-white/40 font-medium leading-relaxed max-w-md mx-auto font-space-mono">
                  The registry for this sector has been sealed. Participation slots are currently locked or have reached maximum capacity.
                </p>
              </div>

              <div className="pt-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/5 border border-red-500/10 rounded-full text-[9px] font-mono text-red-400 uppercase tracking-widest">
                  <AlertTriangle size={12} /> Access Denied for Sector_0{Math.floor(Math.random() * 9) + 1}
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-8 flex flex-col items-center gap-6">
            <Link
              href={`/competitions/${competition.slug}`}
              className="group relative flex items-center justify-center gap-4 px-12 py-5 bg-white text-black rounded-full font-black uppercase tracking-[0.2em] transform hover:scale-[1.05] transition-all duration-500 shadow-[0_20px_40px_rgba(255,255,255,0.05)] active:scale-95"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform duration-500" />
              Return to Mission Intel
            </Link>
            
            <Link 
              href="/competitions" 
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 hover:text-red-400 transition-colors flex items-center gap-2"
            >
              Explore Other Sectors <ShieldAlert size={10} />
            </Link>
          </div>
        </motion.div>
      </main>

      {/* Ambient Visuals */}
      <div className="fixed top-10 left-10 text-[9px] font-mono text-red-500/20 tracking-[0.4em] pointer-events-none uppercase z-10 select-none">
        ENTRY_GATE_01 // CLOSED
      </div>
      <div className="fixed bottom-10 right-10 text-[8px] font-mono text-red-500/10 tracking-widest pointer-events-none uppercase z-10 select-none hidden md:block">
        ECHO_SIG_LOST :: 0x000F4
      </div>

      <style jsx global>{`
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        @keyframes nebula-drift {
          0% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.6; }
          50% { transform: translate3d(2%, -3%, 0) scale(1.1); opacity: 0.9; }
          100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
