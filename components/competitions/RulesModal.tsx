"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import RulesAccordion from "./RulesAccordion";
import Noise from "@/components/Noise";
import type { RuleItem } from "@/lib/competitionRulesParser";

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
  rules: RuleItem[];
  title: string;
}

export default function RulesModal({ isOpen, onClose, rules, title }: RulesModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.overscrollBehavior = "none";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.overscrollBehavior = "auto";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.overscrollBehavior = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-200 flex items-center justify-center p-2.5 sm:p-4 md:p-10 overflow-hidden overscroll-none"
        data-lenis-prevent
        style={{ touchAction: "none" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0a0000]/90 backdrop-blur-md"
          />

          <motion.div
            initial={{ 
                opacity: 0, 
                scaleX: 0, 
                scaleY: 0.005,
                filter: "brightness(5) contrast(2)" 
            }}
            animate={{ 
                opacity: 1, 
                scaleX: 1, 
                scaleY: 1,
                filter: "brightness(1) contrast(1)"
            }}
            exit={{ 
                opacity: 0, 
                scaleX: 1.1, 
                scaleY: 0.005,
                filter: "brightness(5) contrast(2)" 
            }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-6xl h-full max-h-[92dvh] md:max-h-[86vh] bg-[#050000]/70 backdrop-blur-2xl border-[5px] sm:border-8 border-[#3a0000]/60 shadow-[14px_14px_0_rgba(10,0,0,0.8)] sm:shadow-[22px_22px_0_rgba(10,0,0,0.8)] md:shadow-[30px_30px_0_rgba(10,0,0,0.8)] flex flex-col z-10 overscroll-none text-[#ff3333]"
            onWheelCapture={(e) => e.stopPropagation()}
            onPointerMove={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 pointer-events-none z-20">
              <Noise
                patternRefreshInterval={1}
                patternAlpha={80}
                className="opacity-70 mix-blend-soft-light absolute"
                fullScreen={false}
                patternSize={60}
              />
              <div
                className="absolute inset-0 opacity-40 mix-blend-overlay"
                style={{
                  background: 'linear-gradient(rgba(18,0,0,0) 50%, rgba(50,0,0,0.2) 50%)',
                  backgroundSize: '100% 4px',
                }}
              />
            </div>
            <div className="absolute inset-0 pointer-events-none z-10 bg-linear-to-b from-[#0a0000] via-[#050000] to-[#0a0000]"></div>
            <div className="absolute inset-0 pointer-events-none z-30 bg-radial-[circle_at_20%_20%] from-red-600/10 via-transparent to-transparent"></div>
            <div className="absolute inset-0 pointer-events-none z-30 bg-radial-[circle_at_80%_80%] from-amber-600/10 via-transparent to-transparent"></div>

            <div className="border-b-4 sm:border-b-[6px] border-[#3a0000] bg-[#080000]/95 shrink-0 relative z-40">
              <div className="mx-auto w-full max-w-5xl flex items-start sm:items-center justify-between gap-3 p-3 sm:p-5 md:p-8">
                <div className="min-w-0 flex-1">
                  <h2 className="text-[1.1rem] sm:text-[1.7rem] md:text-[2.4rem] lg:text-[3rem] font-black uppercase leading-tight text-[#ff3333] wrap-break-words pr-2 font-audiowide mix-blend-screen">
                    {title} Rules
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 sm:p-2.5 md:p-4 border-[3px] sm:border-4 border-[#4a0000] bg-[#050000] hover:bg-red-500 hover:text-black transition-all transform active:scale-95 group shrink-0"
                  aria-label="Close rules modal"
                >
                  <X className="w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 transition-transform group-hover:rotate-90" />
                </button>
              </div>
            </div>

            <div
              className="flex-1 min-h-0 overflow-y-auto overscroll-y-contain p-3 sm:p-5 md:p-10 custom-scrollbar relative z-40"
              style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
              onTouchMove={(e) => e.stopPropagation()}
              onPointerDown={(e) => e.stopPropagation()}
              onPointerMove={(e) => e.stopPropagation()}
            >
              <div className="mx-auto w-full max-w-5xl">
                <RulesAccordion rules={rules} />
              </div>
            </div>

            <div className="border-t-4 border-[#3a0000] bg-[#080000]/95 shrink-0 relative z-40">
              <div className="mx-auto w-full max-w-5xl p-2.5 sm:p-4 md:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5 sm:gap-4 font-mono text-[0.55rem] sm:text-[0.72rem] md:text-[0.95rem] text-red-500/80 font-bold uppercase tracking-[0.12em] sm:tracking-[0.2em] md:tracking-widest">
                <span>Sector: Photon_Grid_Nexus</span>
                <span>Access: Authorized</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 12px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #050000;
          border-left: 4px solid #3a0000;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ff3333;
          border: 2px solid #050000;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #ff0000;
        }
      `}</style>
    </AnimatePresence>
  );
}
