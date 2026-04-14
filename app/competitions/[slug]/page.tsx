"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowRight, List } from "lucide-react";
import RulesModal from "@/components/competitions/RulesModal";
import Noise from "@/components/Noise";
import { COMPETITIONS_DATA } from "@/data/competition-data";

type RuleItem = {
  title?: string;
  content?: string;
};

export default function CompetitionSlugPage() {
  const params = useParams();
  const routeParam = typeof params?.slug === "string" ? params.slug : "";

  // Find competition from hardcoded data
  const comp = COMPETITIONS_DATA.find(c => c.slug === routeParam) || null;

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);
  const wheelDeltaRef = useRef(0);
  const wheelRafRef = useRef<number | null>(null);
  const progressRafRef = useRef<number | null>(null);
  const targetProgressRef = useRef(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const pointerDownRef = useRef(false);
  const dragAxisRef = useRef<"none" | "x" | "y">("none");
  const dragStartXRef = useRef(0);
  const dragStartYRef = useRef(0);
  const dragScrollLeftRef = useRef(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('[data-rules-scroll="true"]')) {
        return;
      }

      e.preventDefault();
      const delta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      const modeFactor =
        e.deltaMode === 1 ? 18 : e.deltaMode === 2 ? window.innerWidth : 1;
      wheelDeltaRef.current += delta * modeFactor * 1.35;

      if (wheelRafRef.current !== null) return;
      wheelRafRef.current = window.requestAnimationFrame(() => {
        el.scrollLeft += wheelDeltaRef.current;
        wheelDeltaRef.current = 0;
        wheelRafRef.current = null;
      });
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      if (wheelRafRef.current !== null) {
        window.cancelAnimationFrame(wheelRafRef.current);
      }
      wheelRafRef.current = null;
      wheelDeltaRef.current = 0;
    };
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    let isUnmounted = false;
    const updateProgress = () => {
      const maxScroll = Math.max(el.scrollWidth - el.clientWidth, 1);
      const progress = Math.min(Math.max(el.scrollLeft / maxScroll, 0), 1);
      targetProgressRef.current = progress;
      if (progressRafRef.current !== null) return;

      const animateProgress = () => {
        if (isUnmounted) return;
        setScrollProgress((prev) => {
          const next = prev + (targetProgressRef.current - prev) * 0.16;
          if (Math.abs(targetProgressRef.current - next) < 0.001) {
            return targetProgressRef.current;
          }
          progressRafRef.current = window.requestAnimationFrame(animateProgress);
          return next;
        });
      };

      progressRafRef.current = window.requestAnimationFrame(animateProgress);
    };

    updateProgress();
    el.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      isUnmounted = true;
      el.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      if (progressRafRef.current !== null) {
        window.cancelAnimationFrame(progressRafRef.current);
      }
      progressRafRef.current = null;
    };
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    if (!scrollContainerRef.current) return;
    pointerDownRef.current = true;
    dragAxisRef.current = "none";
    dragStartXRef.current = e.pageX - scrollContainerRef.current.offsetLeft;
    dragStartYRef.current = e.pageY;
    dragScrollLeftRef.current = scrollContainerRef.current.scrollLeft;
    setIsDragging(false);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!pointerDownRef.current || !scrollContainerRef.current) return;

    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const dx = x - dragStartXRef.current;
    const dy = e.pageY - dragStartYRef.current;

    if (dragAxisRef.current === "none") {
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
      dragAxisRef.current = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
      if (dragAxisRef.current === "x") {
        setIsDragging(true);
      }
    }

    if (dragAxisRef.current !== "x") return;

    e.preventDefault();
    const walk = dx * 3;
    scrollContainerRef.current.scrollLeft = dragScrollLeftRef.current - walk;
  };

  const onPointerUp = () => {
    pointerDownRef.current = false;
    dragAxisRef.current = "none";
    setIsDragging(false);
  };
  const linePhase = scrollProgress * 720;
  const chaosTilt = (scrollProgress - 0.5) * 2.4;

  if (!comp) {
    return (
      <main className="h-screen w-full bg-[#070B14] flex items-center justify-center text-[#E7F2FF] font-retro-serif">
        <div className="text-center">
          <p className="font-mono text-[1.2rem] opacity-60 mb-4 tracking-widest uppercase">
            404 // Not Found
          </p>
          <h1 className="text-6xl font-medium mb-6">File Corrupted.</h1>
          <Link
            href="/competitions"
            className="text-cyan-300 hover:text-fuchsia-300 underline font-bold text-xl uppercase tracking-widest transition-colors"
          >
            ← Return to Base
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative w-full h-screen bg-[#03050B] text-[#E7F2FF] overflow-hidden overscroll-none selection:bg-cyan-400 selection:text-[#04060b]">
      <div className={`fixed inset-0 pointer-events-none z-100 transition-opacity duration-1000 ${isMobile ? "opacity-35" : "opacity-60"}`}>
        <Noise patternAlpha={isMobile ? 30 : 70} patternRefreshInterval={isMobile ? 2 : 1} patternSize={isMobile ? 120 : 100} />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.45]"
          style={{
            background: 'linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.2) 50%), linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))',
            backgroundSize: '100% 4px, 3px 100%',
          }}
        />
      </div>

      {/* Global Background Blur for Mobile */}
      {isMobile && (
        <div className="fixed inset-0 z-15 pointer-events-none backdrop-blur-[2px]"></div>
      )}
      <div className="fixed inset-0 pointer-events-none z-20 bg-linear-to-b from-[#050000] via-[#020000] to-[#0a0000]"></div>
      <div className="fixed inset-0 pointer-events-none z-30 bg-radial-[circle_at_20%_40%] from-red-600/5 via-transparent to-transparent animate-[nebula-drift_15s_ease-in-out_infinite]"></div>
      <div className="fixed inset-0 pointer-events-none z-30 bg-radial-[circle_at_80%_60%] from-amber-600/5 via-transparent to-transparent animate-[nebula-drift_18s_ease-in-out_infinite_reverse]"></div>
      <div className="fixed inset-0 pointer-events-none z-80 opacity-[0.03] mix-blend-color-burn bg-[#ff0000]"></div>

      <div
        className={`pointer-events-none fixed inset-0 z-40 transition-all duration-700 ${isMobile ? "opacity-60 blur-[3px]" : "opacity-90 blur-[1.1px]"}`}
        style={{ transform: `rotate(${chaosTilt}deg) scale(1.03)` }}
      >
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="flow-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff0033" stopOpacity="0.1" />
              <stop offset={`${Math.max(6, scrollProgress * 100 - 10)}%`} stopColor="#ff0033" stopOpacity="0.25" />
              <stop offset={`${Math.max(12, scrollProgress * 100)}%`} stopColor="#00ffff" stopOpacity="0.9" />
              <stop offset={`${Math.min(98, scrollProgress * 100 + 10)}%`} stopColor="#ff4400" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#ff0033" stopOpacity="0.08" />
            </linearGradient>
            <filter id="soft-glow">
              <feGaussianBlur stdDeviation="0.8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="M0,92 C17,78 35,99 56,88 C72,79 86,68 100,76"
            stroke="url(#flow-line)"
            strokeWidth="0.48"
            fill="none"
            filter="url(#soft-glow)"
            opacity={0.88}
            strokeLinecap="round"
            strokeDasharray="10 8"
            style={{
              strokeDashoffset: -linePhase * 0.4,
            }}
          />
          <path
            d="M0,72 C22,58 34,82 52,68 C68,56 85,44 100,50"
            stroke="#ff0033"
            strokeWidth="0.28"
            fill="none"
            opacity={0.78}
            strokeLinecap="round"
            strokeDasharray="2 1.2"
            style={{
              strokeDashoffset: linePhase * 0.85,
            }}
          />
          <path
            d="M0,50 C20,34 33,61 49,46 C66,32 84,58 100,42"
            stroke="url(#flow-line)"
            strokeWidth="0.36"
            fill="none"
            opacity={0.85}
            strokeLinecap="round"
            strokeDasharray="14 10"
            style={{
              strokeDashoffset: -linePhase * 0.55,
            }}
          />
          <path
            d="M0,30 C14,16 30,39 48,28 C64,20 82,8 100,16"
            stroke="#00ffff"
            strokeWidth="0.22"
            fill="none"
            opacity={0.68}
            strokeLinecap="round"
            strokeDasharray="0.75 1.25"
            style={{
              strokeDashoffset: linePhase * 1.25,
            }}
          />
          <path
            d="M0,9 C18,2 34,14 51,9 C66,6 84,1 100,5"
            stroke="#ff4400"
            strokeWidth="0.2"
            fill="none"
            opacity={0.6}
            strokeLinecap="round"
            style={{
              strokeDasharray: "5 3",
              strokeDashoffset: -linePhase * 0.95,
            }}
          />
          <circle
            cx={10 + scrollProgress * 80}
            cy={62 - Math.sin(scrollProgress * Math.PI * 3) * 10}
            r={2.4 + scrollProgress * 1.3}
            fill="#00ffff"
            opacity={0.12 + scrollProgress * 0.22}
          />
          <circle
            cx={10 + scrollProgress * 80}
            cy={62 - Math.sin(scrollProgress * Math.PI * 3) * 10}
            r={4.8 + scrollProgress * 2.2}
            stroke="#ff0033"
            strokeWidth="0.15"
            fill="none"
            opacity={0.25}
          />
        </svg>
      </div>

      <div
        ref={scrollContainerRef}
        data-lenis-prevent="true"
        className={`w-full h-full overflow-x-auto overflow-y-hidden flex items-center px-12 md:px-32 gap-16 md:gap-32 relative z-20 overscroll-x-contain ${isDragging ? "cursor-grabbing select-none" : "cursor-grab"}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        style={{ scrollBehavior: "auto", overscrollBehaviorX: "contain" }}
      >
        <div className="w-[85vw] md:w-[70vw] lg:w-[60vw] shrink-0 flex flex-col justify-center h-full relative group transition-transform duration-500 hover:-translate-y-2">
          <div className="text-[0.9rem] sm:text-[1.1rem] md:text-[1.25rem] lg:text-[1.5rem] uppercase tracking-[0.32em] md:tracking-[0.4em] text-red-500 mb-6 font-semibold select-none font-space-mono mix-blend-screen">
            {comp.category}
          </div>
          <h1 className="text-[2.8rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] leading-[0.95] font-medium tracking-tight relative cursor-pointer z-10 w-[50px] md:w-4xl pointer-events-auto font-audiowide uppercase transition-all duration-500 hover:tracking-[0.03em] mix-blend-screen">
            <span className="relative z-10 animate-[hero-error-vibrate_3s_steps(1)_infinite] drop-shadow-[0_0_15px_rgba(255,0,51,0.4)]">
              {comp.title}
            </span>
            <span
              className="absolute left-0 top-0 text-red-600/60 -translate-x-0.5 translate-y-0.5 opacity-0 group-hover:opacity-100 z-0 transition-opacity animate-[glitch-live_1.2s_steps(2,end)_infinite] mix-blend-screen pointer-events-none"
              aria-hidden="true"
            >
              {comp.title}
            </span>
            <span
              className="absolute left-0 top-0 text-cyan-400 translate-x-1 -translate-y-1 opacity-80 z-0 transition-none animate-[glitch-live_640ms_steps(2,end)_infinite] mix-blend-screen pointer-events-none"
              aria-hidden="true"
              style={{ animationDirection: "reverse", animationDelay: "120ms" }}
            >
              {comp.title}
            </span>
          </h1>
          <p className="max-w-[80vw] md:max-w-3xl text-[1.1rem] sm:text-[1.35rem] md:text-[1.7rem] lg:text-[2rem] leading-[1.3] text-[#c2aaaa] mt-8 md:mt-10 pointer-events-none font-space-mono">
            {comp.subtitle}
          </p>
        </div>

        <div className="w-[85vw] md:w-[60vw] lg:w-[50vw] h-[60vh] md:h-[70vh] shrink-0 relative group cursor-crosshair transition-transform duration-500 hover:scale-[1.015] hover:-rotate-1">
          <div className="absolute inset-0 z-20 glitch-slice-layer opacity-100 transition-all duration-300 pointer-events-none mix-blend-screen bg-red-600/10 group-hover:opacity-90 group-hover:bg-cyan-500/20"></div>
          <img
            src={comp.image}
            alt={comp.title}
            className="object-cover w-full h-full mix-blend-screen grayscale-[0.8] sepia-[0.3] hue-rotate-[-30deg] contrast-[1.3] group-hover:grayscale-0 group-hover:contrast-[1.5] group-hover:saturate-200 transition-all duration-500 border-8 border-[#300000] shadow-[20px_20px_0_rgba(10,0,0,0.95)] group-hover:shadow-[26px_26px_0_rgba(25,0,0,0.95)] pointer-events-none"
            draggable={false}
          />
        </div>

        <div className="w-[85vw] md:w-[60vw] lg:w-[50vw] shrink-0 flex flex-col justify-center h-full relative cursor-auto pointer-events-auto">
          <div className="font-serif text-[4.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] text-red-500 leading-none -mb-12 sm:-mb-16 md:-mb-24 lg:-mb-32 opacity-30 select-none pointer-events-none">
            &quot;
          </div>

          <div className="text-[1.1rem] sm:text-[1.35rem] md:text-[1.7rem] lg:text-[2.1rem] leading-[1.4] text-[#ffd5d5] tracking-tight whitespace-normal font-medium font-space-mono mix-blend-screen">
            {comp.description}
          </div>
        </div>

        <div className="w-[85vw] md:w-[60vw] lg:w-[55vw] shrink-0 flex flex-col justify-center h-full cursor-auto pointer-events-auto">
          <h2 className="text-[1.8rem] sm:text-[2.4rem] md:text-[3.2rem] lg:text-[4.2rem] font-bold mb-10 md:mb-16 border-b-[6px] border-[#300000] pb-4 md:pb-6 inline-block uppercase self-start leading-none pointer-events-none text-[#ff3333] font-audiowide mix-blend-screen">
            Mission Intel
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-20 gap-y-8 md:gap-y-16">
            <div className="bg-[#0a0000]/30 backdrop-blur-md border-l-[6px] border-red-500 p-6 md:p-8 pointer-events-none transition-all duration-300 hover:translate-x-2 hover:border-red-400 hover:bg-[#0a0000]/50 rounded-r-xl">
              <div className="uppercase tracking-widest text-red-400 text-[0.8rem] sm:text-[0.95rem] md:text-[1.05rem] font-bold mb-3 md:mb-4">
                Bounty Pool
              </div>
              <div className="text-[1.7rem] sm:text-[2.2rem] md:text-[2.8rem] font-bold font-space-mono leading-none text-[#ffe1e1]">
                {comp.prizePool}
              </div>
            </div>
            <div className="bg-[#0a0000]/30 backdrop-blur-md border-l-[6px] border-amber-500 p-6 md:p-8 pointer-events-none transition-all duration-300 hover:translate-x-2 hover:border-amber-400 hover:bg-[#0a0000]/50 rounded-r-xl">
              <div className="uppercase tracking-widest text-amber-400 text-[0.8rem] sm:text-[0.95rem] md:text-[1.05rem] font-bold mb-3 md:mb-4">
                Sector
              </div>
              <div className="text-[1.7rem] sm:text-[2.2rem] md:text-[2.8rem] font-space-mono font-bold leading-none text-[#ffe1e1]">
                {comp.location}
              </div>
            </div>
            <div className="bg-[#0a0000]/30 backdrop-blur-md border-l-[6px] border-cyan-500 p-6 md:p-8 pointer-events-none transition-all duration-300 hover:translate-x-2 hover:border-cyan-400 hover:bg-[#0a0000]/50 rounded-r-xl">
              <div className="uppercase tracking-widest text-cyan-400 text-[0.8rem] sm:text-[0.95rem] md:text-[1.05rem] font-bold mb-3 md:mb-4">
                Crew Size
              </div>
              <div className="text-[1.7rem] sm:text-[2.2rem] md:text-[2.8rem] font-space-mono font-bold leading-none text-[#ffe1e1]">
                {comp.teamSize}
              </div>
            </div>
            <div className="bg-[#0a0000]/30 backdrop-blur-md border-l-[6px] border-fuchsia-500 p-6 md:p-8 pointer-events-none transition-all duration-300 hover:translate-x-2 hover:border-fuchsia-400 hover:bg-[#0a0000]/50 rounded-r-xl">
              <div className="uppercase tracking-widest text-fuchsia-400 text-[0.8rem] sm:text-[0.95rem] md:text-[1.05rem] font-bold mb-3 md:mb-4">
                Deploy Date
              </div>
              <div className="text-[1.7rem] sm:text-[2.2rem] md:text-[2.8rem] font-space-mono font-bold leading-none text-[#ffe1e1]">
                {comp.date}
              </div>
            </div>
          </div>
        </div>

        <div className="w-[90vw] md:w-[75vw] lg:w-[65vw] shrink-0 flex flex-col justify-center h-full mr-12 md:mr-24 pointer-events-auto cursor-auto">
          <div
            data-rules-scroll="true"
            className="bg-[#050000]/60 backdrop-blur-xl p-8 md:p-14 border-[6px] border-[#3a0000]/50 shadow-[-10px_10px_0_rgba(10,0,0,0.8)] md:shadow-[-20px_20px_0_rgba(10,0,0,0.8)] relative max-h-[90vh] overflow-y-auto overscroll-y-contain custom-scrollbar transition-all duration-500 hover:shadow-[-24px_24px_0_rgba(20,0,0,0.95)]"
            style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
            onWheel={(e) => {
              const el = e.currentTarget;
              const atTop = el.scrollTop <= 0;
              const atBottom =
                el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
              const isScrollingUp = e.deltaY < 0;
              const isScrollingDown = e.deltaY > 0;

              if ((atTop && isScrollingUp) || (atBottom && isScrollingDown)) {
                e.preventDefault();
              }

              e.stopPropagation();
            }}
          >
            <h3 className="text-[1.5rem] sm:text-[1.8rem] md:text-[2.3rem] lg:text-[2.8rem] font-bold uppercase mb-6 text-[#ff3333] pointer-events-none font-audiowide mix-blend-screen">
              Protocol Rules
            </h3>
            <ul className="list-disc pl-8 md:pl-10 space-y-3 text-[0.95rem] sm:text-[1.05rem] md:text-[1.2rem] lg:text-[1.4rem] leading-snug mb-8 md:mb-10 whitespace-normal text-[#c2aaaa] font-medium font-space-mono">
              {comp.rules.slice(0, 3).map((rule: RuleItem, i: number) => (
                <li key={i} className="pl-2 pointer-events-none">
                  <span className="font-bold">{rule.title || "Rule"}:</span>{" "}
                  {String(rule.content || "").length > 70
                    ? `${String(rule.content || "").slice(0, 70)}...`
                    : String(rule.content || "")}
                </li>
              ))}
            </ul>

            <button
              onClick={() => setIsRulesModalOpen(true)}
              className="mb-10 md:mb-12 px-5 sm:px-6 py-2.5 md:py-3 border-4 border-red-500/60 bg-red-500/10 text-red-200 font-bold text-[0.85rem] sm:text-[0.95rem] md:text-[1.1rem] uppercase tracking-widest hover:bg-red-500 hover:text-black transition-all flex items-center gap-3 group/rules active:translate-y-1 shadow-[6px_6px_0_#3a0000]"
            >
              <List className="w-5 h-5 md:w-6 md:h-6" /> View Full Protocol
            </button>

            <div className="flex flex-col items-center group relative cursor-pointer pt-8 border-t-2 border-[#3a0000] border-dashed">
              <h2 className="text-[1.8rem] sm:text-[2.3rem] md:text-[3rem] lg:text-[3.8rem] font-black uppercase text-center relative z-10 transition-transform group-hover:-translate-y-1 inline-block leading-none font-audiowide text-red-500">
                Ready to Execute?
              </h2>
              <span
                className="absolute text-cyan-400/80 -translate-x-1 translate-y-1 opacity-0 group-hover:opacity-100 z-0 transition-opacity animate-[glitch-live_900ms_steps(2,end)_infinite] mix-blend-screen pointer-events-none text-center text-[1.8rem] sm:text-[2.3rem] md:text-[3rem] lg:text-[3.8rem] font-black uppercase leading-none"
                aria-hidden="true"
              >
                Ready to Execute?
              </span>
              <Link
                href={`/competitions/${routeParam}/register`}
                onClick={(e) => {
                  if (isDragging) e.preventDefault();
                }}
                className="mt-8 px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-5 border-[6px] border-[#4a0000] bg-[#050000] text-red-400 font-bold text-[1rem] sm:text-[1.1rem] md:text-[1.35rem] lg:text-[1.7rem] uppercase tracking-widest hover:bg-red-500 hover:text-black hover:shadow-[10px_10px_0_#2a0000] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 sm:gap-4 group/btn z-10 active:translate-x-2 active:translate-y-2 active:shadow-none"
              >
                Join the Battle{" "}
                <ArrowRight className="group-hover/btn:translate-x-3 transition-transform w-7 h-7 md:w-9 md:h-9" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <RulesModal
        isOpen={isRulesModalOpen}
        onClose={() => setIsRulesModalOpen(false)}
        rules={comp.rules}
        title={comp.title}
      />

      <div className="absolute bottom-6 md:bottom-8 left-6 md:left-12 text-[0.75rem] sm:text-[0.9rem] md:text-sm font-bold text-red-500 tracking-[0.16em] md:tracking-[0.2em] uppercase opacity-80 pointer-events-none z-30 font-space-mono mix-blend-screen">
        ← Drag to explore →
      </div>

      <style jsx global>{`
        @keyframes nebula-drift {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translate3d(1.8%, -2.2%, 0) scale(1.08);
            opacity: 1;
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.8;
          }
        }
        @keyframes scan-shift {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes glitch-live {
          0% {
            transform: translate(0, 0);
            opacity: 0.55;
          }
          6% {
            transform: translate(-2px, 1px) skewX(2deg);
            opacity: 0.95;
          }
          12% {
            transform: translate(2px, -1px) skewX(-2deg);
            opacity: 0.65;
          }
          18% {
            transform: translate(0, 0);
            opacity: 0.55;
          }
          46% {
            transform: translate(-1px, -2px);
            opacity: 0.9;
          }
          52% {
            transform: translate(0, 0);
            opacity: 0.6;
          }
          70% {
            transform: translate(1px, 1px);
            opacity: 0.85;
          }
          75% {
            transform: translate(0, 0);
            opacity: 0.6;
          }
          100% {
            transform: translate(0, 0);
            opacity: 0.6;
          }
        }
        @keyframes hero-error-vibrate {
          0% { transform: translate(0); }
          5% { transform: translate(-3px, 1px); }
          10% { transform: translate(3px, -1px); }
          15% { transform: translate(-2px, -2px); }
          20% { transform: translate(0); }
          100% { transform: translate(0); }
        }
      `}</style>
    </main>
  );
}
