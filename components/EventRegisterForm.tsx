"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import Noise from "@/components/Noise";

interface EventData {
  id: string;
  name: string;
  slug: string;
}

const MinimalInput = ({ 
  label, 
  type = "text", 
  placeholder, 
  value, 
  onChange, 
  required = false,
  error = ""
}: any) => (
  <div className="space-y-3 group">
    <label className="text-xs font-bold text-white font-audiowide tracking-wide flex items-center gap-1">
      {label} {required && <span className="text-cyan-400 text-[10px]">*</span>}
    </label>
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent border-b border-white/10 px-0 py-4 text-white placeholder:text-white/5 focus:outline-none focus:border-cyan-400 theme-transition transition-all duration-500 font-space-mono"
      />
      {error && <p className="text-[10px] text-red-500/60 mt-2 ml-1 uppercase tracking-wider font-bold animate-pulse">{error}</p>}
    </div>
  </div>
);

const MinimalSelect = ({ 
  label, 
  options, 
  value, 
  onChange, 
  required = false 
}: any) => (
  <div className="space-y-3 group">
    <label className="text-xs font-bold text-white tracking-wide">
      {label} {required && <span className="text-cyan-400 text-[10px]">*</span>}
    </label>
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full bg-transparent border-b border-white/10 px-0 py-4 text-white focus:outline-none focus:border-cyan-400 transition-all duration-500 appearance-none cursor-pointer font-space-mono"
      >
        <option value="" className="bg-zinc-900 text-white/40">Select {label}</option>
        {options.map((opt: any) => (
          <option key={opt.value || opt} value={opt.value || opt} className="bg-zinc-900 text-white">
            {opt.label || opt}
          </option>
        ))}
      </select>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
        <ChevronRight size={14} className="rotate-90" />
      </div>
    </div>
  </div>
);

export default function EventRegisterForm({ event }: { event: EventData }) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    course: "",
    enrollmentNumber: "",
    yearOfStudy: "",
    glimpse: "",
  });

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/register/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          eventsname: event.name,
          mode: "Solo"
        })
      });

      if (!response.ok) {
        throw new Error("Transmission failed");
      }

      setSuccess(true);
    } catch (error: any) {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again or contact support.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6 text-white font-sans">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-[#0a0a0a] rounded-[32px] p-12 text-center border border-white/5"
        >
          <CheckCircle2 size={48} className="mx-auto mb-6 text-white/20" />
          <h2 className="text-2xl font-black mb-4 uppercase italic tracking-tighter">Transmitted</h2>
          <p className="text-white/40 mb-10 text-sm leading-relaxed">
            Registry successful for <span className="text-white">{event.name}</span>. Mission details have been assigned.
          </p>
          <Link href={`/events/${event.slug}`} className="text-cyan-400 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors">
            Return to Event
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#03050B] text-[#E7F2FF] font-sans selection:bg-cyan-400 selection:text-[#04060b] overflow-x-hidden relative paper-grain">
      <div className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000 ${isMobile ? "opacity-35" : "opacity-60"}`}>
        <Noise patternAlpha={isMobile ? 30 : 70} patternRefreshInterval={isMobile ? 2 : 1} patternSize={isMobile ? 120 : 100} />
      </div>

      <div className="fixed inset-0 pointer-events-none z-1 bg-linear-to-b from-[#050000] via-[#020000] to-[#0a0000]"></div>
      
      <div className="fixed top-10 right-10 text-[9px] font-mono text-white/10 tracking-[0.4em] pointer-events-none uppercase z-10 select-none">
        [ SECTOR_EVENT : WAVE_STABLE ]
      </div>

      <AnimatePresence mode="wait">
        {!isFormVisible ? (
          <motion.main 
            key="overview"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20 max-w-4xl mx-auto"
          >
            <div className="space-y-12 w-full">
              <div className="space-y-6 text-center relative">
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] relative z-10">
                  {event.name.split(' ').map((word, i) => (
                    <span key={i} className={i % 2 === 1 ? "text-white/20 block" : "block"}>
                      {word}
                    </span>
                  ))}
                </h1>
                <div className="text-[10px] font-mono text-cyan-400/40 tracking-[0.5em] uppercase font-bold">
                  Target_Classification :: {event.slug.toUpperCase()}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
                <div className="absolute inset-0 bg-white/1 backdrop-blur-3xl rounded-[64px] -z-1 border border-white/5"></div>
                <div className="p-12 space-y-6 group transition-all duration-500">
                  <div className="flex items-center gap-4">
                    <div className="w-1 h-8 bg-red-600"></div>
                    <h4 className="text-xs uppercase font-black tracking-[0.2em] italic text-red-500">
                      Individual Protocol
                    </h4>
                  </div>
                  <p className="text-sm text-white/40 font-medium leading-relaxed pl-5">
                    Deployment is set for <span className="text-white font-bold">Standalone Operation</span>. Ensure your personal telemetry is synchronized.
                  </p>
                </div>

                <div className="p-12 space-y-6 group transition-all duration-500 border-l border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-1 h-8 bg-cyan-600"></div>
                    <h4 className="text-xs uppercase font-black tracking-[0.2em] italic text-cyan-500">Matrix Verification</h4>
                  </div>
                  <p className="text-sm text-white/40 font-medium leading-relaxed pl-5">
                    Registry for <span className="text-white font-bold">{event.name}</span> is protected by the <span className="text-white font-bold">Neutron Mesh Network</span>.
                  </p>
                </div>
              </div>

              <div className="pt-8 flex flex-col items-center gap-6">
                <button
                  onClick={() => setIsFormVisible(true)}
                  className="group relative flex items-center justify-center gap-4 px-12 py-6 bg-white text-black rounded-[32px] font-black uppercase tracking-[0.2em] transform hover:scale-[1.03] transition-all duration-500 shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
                >
                  Fill Registration Form
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
                </button>
                <Link href={`/events/${event.slug}`} className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 hover:text-white transition-colors">
                  Abort Session
                </Link>
              </div>
            </div>
          </motion.main>
        ) : (
          <motion.main 
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10 min-h-screen py-24 px-6 max-w-2xl mx-auto"
          >
            <div className="space-y-20">
              <form onSubmit={handleSubmit} className="space-y-16">
                <div className="pb-20 text-center relative group/sector overflow-hidden">
                  <div className="absolute inset-0 bg-radial-[circle_at_center] from-cyan-500/5 via-transparent to-transparent opacity-50"></div>
                  <div className="flex flex-col items-center gap-2 relative z-10">
                    <span className="text-[10px] uppercase font-black tracking-[0.6em] text-cyan-400/60 mb-2">Target_Transmission_Detected</span>
                    <h3 className="text-3xl md:text-5xl font-black font-audiowide tracking-tighter text-white uppercase drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                      {event.name}
                    </h3>
                  </div>
                </div>

                <div className="space-y-10">
                  <div className="flex items-center gap-4 pb-4 border-b border-white/5">
                    <span className="text-[10px] font-black text-white bg-cyan-500 px-2 py-1 rounded-xs uppercase tracking-[0.3em]">01</span>
                    <h3 className="text-[11px] font-black uppercase text-white tracking-[0.4em]">Personal Intelligence</h3>
                    <div className="flex-1 h-px bg-white/5"></div>
                  </div>
                  
                  <div className="space-y-8">
                    <MinimalInput 
                      label="Full Name" 
                      placeholder="Enter designation name" 
                      value={formData.name}
                      onChange={(v: string) => updateFormData("name", v)}
                      required
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <MinimalInput 
                        label="Email Address" 
                        type="email" 
                        placeholder="you@network.io" 
                        value={formData.email}
                        onChange={(v: string) => updateFormData("email", v)}
                        required
                      />
                      <MinimalInput 
                        label="Contact Number" 
                        placeholder="+91 XXXXX XXXXX" 
                        value={formData.whatsapp}
                        onChange={(v: string) => updateFormData("whatsapp", v)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-10">
                  <div className="flex items-center gap-4 pb-4 border-b border-white/5">
                    <span className="text-[10px] font-black text-white bg-red-500 px-2 py-1 rounded-xs uppercase tracking-[0.3em]">02</span>
                    <h3 className="text-[11px] font-black uppercase text-white tracking-[0.4em]">Academic Matrix</h3>
                    <div className="flex-1 h-px bg-white/5"></div>
                  </div>

                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <MinimalInput 
                        label="Course" 
                        placeholder="Study specialization" 
                        value={formData.course}
                        onChange={(v: string) => updateFormData("course", v)}
                        required
                      />
                      <MinimalInput 
                        label="Enrollment Number" 
                        placeholder="University ID / Roll No" 
                        value={formData.enrollmentNumber}
                        onChange={(v: string) => updateFormData("enrollmentNumber", v)}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <MinimalSelect 
                        label="Year of Study" 
                        options={["1st Year", "2nd Year", "3rd Year"]}
                        value={formData.yearOfStudy}
                        onChange={(v: string) => updateFormData("yearOfStudy", v)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-10">
                  <div className="flex items-center gap-4 pb-4 border-b border-white/5">
                    <span className="text-[10px] font-black text-white bg-amber-500 px-2 py-1 rounded-xs uppercase tracking-[0.3em]">03</span>
                    <h3 className="text-[11px] font-black uppercase text-white tracking-[0.4em]">Performance Glimpse</h3>
                    <div className="flex-1 h-px bg-white/5"></div>
                  </div>

                  <div className="space-y-8">
                    <MinimalInput 
                      label="Glimpse of Performance (Drive Link)" 
                      placeholder="Optional — https://youtube.com/..." 
                      value={formData.glimpse}
                      onChange={(v: string) => updateFormData("glimpse", v)}
                      required={false}
                      type="url"
                    />
                    <p className="text-[10px] text-white/30 italic">
                      Provide a platform linkcle (Google Drive, YouTube, etc.) demonstrating your performance. Ensure access permissions are enabled.
                    </p>
                  </div>
                </div>

                <div className="pt-10 space-y-8 border-t border-white/5">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-white text-black py-6 rounded-[32px] font-black uppercase tracking-[0.3em] hover:scale-[1.02] transition-all duration-500 shadow-xl shadow-white/5 disabled:opacity-50"
                  >
                    {isSubmitting ? "Transmitting..." : "Initiate Entry"}
                  </button>
                  <div className="flex justify-center">
                    <button 
                      type="button"
                      onClick={() => setIsFormVisible(false)}
                      className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 hover:text-white transition-colors"
                    >
                      Return to Overview
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </motion.main>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .paper-grain::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3F%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.04;
          mask-image: linear-gradient(to bottom, transparent, black, transparent);
          pointer-events: none;
          z-index: 0;
        }
      `}</style>
    </div>
  );
}
