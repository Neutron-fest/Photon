"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronLeft, ArrowRight, List } from "lucide-react";
import RulesModal from "@/components/competitions/RulesModal";
import { useCompetition } from "@/hooks/api/useCompetitions";

export default function CompetitionSlugPage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";
  
  const { data: rawComp, isLoading } = useCompetition(slug);

  const comp = rawComp ? {
    title: rawComp.name || rawComp.title || "Untitled",
    subtitle: rawComp.subtitle || rawComp.description?.slice(0, 100) + "..." || "Mission details are classified.",
    category: rawComp.category || "General",
    date: rawComp.date || (rawComp.startTime ? new Date(rawComp.startTime).toLocaleDateString() : "TBD"),
    image: rawComp.posterPath || rawComp.image || "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
    description: rawComp.description || "No mission description available.",
    prizePool: rawComp.prizePool || rawComp.bounty || "TBD",
    teamSize: rawComp.teamSize || rawComp.crewSize || "Solo / Team",
    location: rawComp.location || rawComp.venue || rawComp.sector || "Remote",
    highlights: Array.isArray(rawComp.highlights) ? rawComp.highlights : [],
    rules: Array.isArray(rawComp.rules) ? rawComp.rules : [
      { title: "Standard Protocol", content: "Participants must adhere to the general event conduct and safety guidelines." },
      { title: "Fair Play", content: "Any form of cheating or unauthorized assistance will result in immediate disqualification." }
    ],
  } : null;

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);
  const wheelDeltaRef = useRef(0);
  const wheelRafRef = useRef<number | null>(null);
  const pointerDownRef = useRef(false);
  const dragAxisRef = useRef<"none" | "x" | "y">("none");
  const dragStartXRef = useRef(0);
  const dragStartYRef = useRef(0);
  const dragScrollLeftRef = useRef(0);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('[data-rules-scroll="true"]')) {
        return;
      }

      e.preventDefault();
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      const modeFactor = e.deltaMode === 1 ? 18 : e.deltaMode === 2 ? window.innerWidth : 1;
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

  const onPointerDown = (e: React.PointerEvent) => {
    if (!scrollContainerRef.current) return;
    pointerDownRef.current = true;
    dragAxisRef.current = "none";
    dragStartXRef.current = e.pageX - scrollContainerRef.current.offsetLeft;
    dragStartYRef.current = e.pageY;
    dragScrollLeftRef.current = scrollContainerRef.current.scrollLeft;
    setStartX(dragStartXRef.current);
    setScrollLeft(dragScrollLeftRef.current);
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

  if (isLoading) {
    return (
      <main className="h-screen w-full bg-[#F4F2EB] flex items-center justify-center text-[#2c2820]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#2c2820]/20 border-t-[#E58B43] rounded-full animate-spin" />
          <span className="font-mono text-sm tracking-widest uppercase opacity-60">Synchronizing...</span>
        </div>
      </main>
    );
  }

  if (!comp) {
    return (
      <main className="h-screen w-full bg-[#F4F2EB] flex items-center justify-center text-[#2c2820] font-retro-serif">
        <div className="text-center">
          <p className="font-mono text-[1.2rem] opacity-60 mb-4 tracking-widest uppercase">404 // Not Found</p>
          <h1 className="text-6xl font-medium mb-6">File Corrupted.</h1>
          <Link href="/competitions" className="text-[#D84B4B] hover:text-[#4B7CD8] underline font-bold text-xl uppercase tracking-widest transition-colors">
            ← Return to Base
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative w-full h-screen bg-[#F4F2EB] text-[#2c2820] font-retro-serif overflow-hidden overscroll-none selection:bg-[#E58B43] selection:text-white">
      <div className="fixed inset-0 pointer-events-none z-100 opacity-40 mix-blend-multiply" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
      <div className="fixed inset-0 pointer-events-none z-50 opacity-10 crt-scanlines mix-blend-color-burn"></div>


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
        
        <div className="w-[85vw] md:w-[70vw] lg:w-[60vw] shrink-0 flex flex-col justify-center h-full relative group">
          
          <div className="text-[0.9rem] sm:text-[1.1rem] md:text-[1.25rem] lg:text-[1.5rem] uppercase tracking-[0.32em] md:tracking-[0.4em] text-[#E58B43] mb-6 font-bold select-none">{comp.category}</div>
          <h1 className="text-[2.8rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem] leading-[0.95] font-medium tracking-tight relative cursor-pointer z-10 w-max pointer-events-auto">
            <span className="relative z-10">{comp.title}</span>
            <span className="absolute left-0 top-0 text-[#D84B4B] -translate-x-1.5 translate-y-1.5 opacity-100 z-0 transition-none animate-shatter mix-blend-multiply pointer-events-none" aria-hidden="true">{comp.title}</span>
            <span className="absolute left-0 top-0 text-[#4B7CD8] translate-x-1.5 -translate-y-1.5 opacity-100 z-0 transition-none animate-shatter mix-blend-multiply delay-75 pointer-events-none" aria-hidden="true" style={{ animationDirection: 'reverse' }}>{comp.title}</span>
          </h1>
          <p className="max-w-[80vw] md:max-w-3xl text-[1.1rem] sm:text-[1.35rem] md:text-[1.7rem] lg:text-[2rem] leading-[1.3] text-[#4d473d] mt-8 md:mt-10 pointer-events-none">{comp.subtitle}</p>
        </div>

        <div className="w-[85vw] md:w-[60vw] lg:w-[50vw] h-[60vh] md:h-[70vh] shrink-0 relative group cursor-crosshair">

          <div className="absolute inset-0 z-20 glitch-slice-layer opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-screen bg-[#D84B4B]/10"></div>
          <img 
            src={comp.image} 
            alt={comp.title} 
            className="object-cover w-full h-full mix-blend-multiply grayscale-30 sepia-30 contrast-[1.1] group-hover:grayscale-10 group-hover:contrast-125 transition-all duration-300 border-8 border-[#2c2820] shadow-[20px_20px_0_rgba(44,40,32,1)] pointer-events-none" 

            draggable={false}
          />
        </div>

        <div className="w-[85vw] md:w-[60vw] lg:w-[50vw] shrink-0 flex flex-col justify-center h-full relative cursor-auto pointer-events-auto">
          <div className="font-serif text-[4.5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] text-[#E58B43] leading-none -mb-12 sm:-mb-16 md:-mb-24 lg:-mb-32 opacity-30 select-none pointer-events-none">"</div>

          <div className="text-[1.1rem] sm:text-[1.35rem] md:text-[1.7rem] lg:text-[2.1rem] leading-[1.4] text-[#2c2820] tracking-tight whitespace-normal font-medium">
            {comp.description}
          </div>
        </div>

        <div className="w-[85vw] md:w-[60vw] lg:w-[55vw] shrink-0 flex flex-col justify-center h-full cursor-auto pointer-events-auto">
          <h2 className="text-[1.8rem] sm:text-[2.4rem] md:text-[3.2rem] lg:text-[4.2rem] font-bold mb-10 md:mb-16 border-b-[6px] border-[#2c2820] pb-4 md:pb-6 inline-block uppercase self-start leading-none pointer-events-none text-[#2c2820]">Mission Intel</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-16">
            <div className="border-l-[6px] border-[#D84B4B] pl-6 md:pl-8 pointer-events-none">
              <div className="uppercase tracking-widest text-[#D84B4B] text-[0.8rem] sm:text-[0.95rem] md:text-[1.05rem] font-bold mb-3 md:mb-4">Bounty Pool</div>
              <div className="text-[1.7rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.4rem] font-medium leading-none text-[#2c2820]">{comp.prizePool}</div>
            </div>
            <div className="border-l-[6px] border-[#4B7CD8] pl-6 md:pl-8 pointer-events-none">
              <div className="uppercase tracking-widest text-[#4B7CD8] text-[0.8rem] sm:text-[0.95rem] md:text-[1.05rem] font-bold mb-3 md:mb-4">Sector</div>
              <div className="text-[1.7rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.4rem] font-medium leading-none text-[#2c2820]">{comp.location}</div>
            </div>
            <div className="border-l-[6px] border-[#5C9E6D] pl-6 md:pl-8 pointer-events-none">
              <div className="uppercase tracking-widest text-[#5C9E6D] text-[0.8rem] sm:text-[0.95rem] md:text-[1.05rem] font-bold mb-3 md:mb-4">Crew Size</div>
              <div className="text-[1.7rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.4rem] font-medium leading-none text-[#2c2820]">{comp.teamSize}</div>
            </div>
            <div className="border-l-[6px] border-[#E2C151] pl-6 md:pl-8 pointer-events-none">
              <div className="uppercase tracking-widest text-[#E2C151] text-[0.8rem] sm:text-[0.95rem] md:text-[1.05rem] font-bold mb-3 md:mb-4">Deploy Date</div>
              <div className="text-[1.7rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.4rem] font-medium leading-none text-[#2c2820]">{comp.date}</div>
            </div>
          </div>
        </div>

        <div className="w-[90vw] md:w-[75vw] lg:w-[65vw] shrink-0 flex flex-col justify-center h-full mr-12 md:mr-24 pointer-events-auto cursor-auto">
          <div
            data-rules-scroll="true"
            className="bg-[#EAE8E0] p-8 md:p-14 border-[6px] border-[#2c2820] shadow-[-10px_10px_0_rgba(44,40,32,1)] md:shadow-[-20px_20px_0_rgba(44,40,32,1)] relative max-h-[90vh] overflow-y-auto overscroll-y-contain custom-scrollbar"
            style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}
            onWheel={(e) => {
              const el = e.currentTarget;
              const atTop = el.scrollTop <= 0;
              const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
              const isScrollingUp = e.deltaY < 0;
              const isScrollingDown = e.deltaY > 0;

              if ((atTop && isScrollingUp) || (atBottom && isScrollingDown)) {
                e.preventDefault();
              }

              e.stopPropagation();
            }}
          >
            <h3 className="text-[1.5rem] sm:text-[1.8rem] md:text-[2.3rem] lg:text-[2.8rem] font-bold uppercase mb-6 text-[#2c2820] pointer-events-none">Protocol Rules</h3>
            <ul className="list-disc pl-8 md:pl-10 space-y-3 text-[0.95rem] sm:text-[1.05rem] md:text-[1.2rem] lg:text-[1.4rem] leading-snug mb-8 md:mb-10 whitespace-normal text-[#4d473d] font-medium">
              {comp.rules.slice(0, 3).map((rule: any, i: number) => (
                <li key={i} className="pl-2 pointer-events-none">
                  <span className="font-bold">{rule.title}:</span> {rule.content.length > 70 ? rule.content.slice(0, 70) + "..." : rule.content}
                </li>
              ))}
            </ul>

            <button
              onClick={() => setIsRulesModalOpen(true)}
              className="mb-10 md:mb-12 px-5 sm:px-6 py-2.5 md:py-3 border-4 border-[#2c2820] bg-[#2c2820] text-[#F4F2EB] font-bold text-[0.85rem] sm:text-[0.95rem] md:text-[1.1rem] uppercase tracking-widest hover:bg-[#F4F2EB] hover:text-[#2c2820] transition-all flex items-center gap-3 group/rules active:translate-y-1 shadow-[6px_6px_0_#E58B43]"

            >
              <List className="w-5 h-5 md:w-6 md:h-6" /> View Full Protocol
            </button>
            
            <div className="flex flex-col items-center group relative cursor-pointer pt-8 border-t-2 border-[#2c2820] border-dashed">
              <h2 className="text-[1.8rem] sm:text-[2.3rem] md:text-[3rem] lg:text-[3.8rem] font-black uppercase text-center relative z-10 transition-transform group-hover:-translate-y-2 inline-block leading-none">
                 Ready to Execute?
              </h2>
              <span className="absolute text-[#D84B4B] -translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 z-0 transition-none animate-shatter mix-blend-multiply pointer-events-none text-center text-[1.8rem] sm:text-[2.3rem] md:text-[3rem] lg:text-[3.8rem] font-black uppercase leading-none" aria-hidden="true">Ready to Execute?</span>
              <button 
                onClick={(e) => {
                  if (isDragging) e.preventDefault();
                }}
                className="mt-8 px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-5 border-[6px] border-[#2c2820] bg-[#F4F2EB] text-[#2c2820] font-bold text-[1rem] sm:text-[1.1rem] md:text-[1.35rem] lg:text-[1.7rem] uppercase tracking-widest hover:bg-[#2c2820] hover:text-[#F4F2EB] hover:shadow-[10px_10px_0_#D84B4B] transition-all flex items-center gap-3 sm:gap-4 group/btn z-10 active:translate-x-2 active:translate-y-2 active:shadow-none"
              >
                Join the Battle <ArrowRight className="group-hover/btn:translate-x-3 transition-transform w-7 h-7 md:w-9 md:h-9" />
              </button>
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

      <div className="absolute bottom-6 md:bottom-8 left-6 md:left-12 text-[0.75rem] sm:text-[0.9rem] md:text-[1.05rem] font-bold text-[#D84B4B] tracking-[0.16em] md:tracking-[0.2em] uppercase opacity-80 pointer-events-none z-30">
        ← Drag to explore →
      </div>

    </main>
  );
}
