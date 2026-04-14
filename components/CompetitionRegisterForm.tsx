"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  Zap,
  ChevronRight,
  Info,
  Users,
  X,
  Plus
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Noise from "@/components/Noise";

interface CompetitionData {
  id: string;
  name: string;
  slug: string;
  allowTeam: boolean;
  maxTeamSize: number;
  minTeamSize?: number;
  allowSolo: boolean;
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

const CheckboxGroup = ({ label, options, value, onChange }: any) => (
  <div className="space-y-4">
    <label className="text-sm font-bold text-white tracking-wide">{label} <span className="text-cyan-400 text-[10px]">*</span></label>
    <div className="flex flex-wrap gap-3">
      {options.map((opt: string) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`px-6 py-3 rounded-2xl border transition-all duration-300 text-sm font-medium ${
            value === opt 
              ? "bg-white/10 border-white/20 text-white" 
              : "bg-transparent border-white/5 text-white/30 hover:border-white/10 hover:text-white/50"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  </div>
);

export default function CompetitionRegisterForm({ competition }: { competition: CompetitionData }) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [teamSize, setTeamSize] = useState(competition.minTeamSize || 1);
  const [mode, setMode] = useState<"Solo" | "Team">(competition.allowSolo ? "Solo" : "Team");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const isSoloOnly = competition.allowSolo && !competition.allowTeam;
  const isTeamOnly = !competition.allowSolo && competition.allowTeam;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    course: "",
    enrollmentNumber: "",
    yearOfStudy: "",
    teammates: [] as { name: string; email: string; contact: string }[]
  });

  useEffect(() => {
    const newMode = teamSize === 1 ? "Solo" : "Team";
    setMode(newMode);

    const numTeammatesRequired = teamSize - 1;
    setFormData(prev => {
      const updatedTeammates = Array(numTeammatesRequired)
        .fill(null)
        .map((_, i) => prev.teammates[i] || { name: "", email: "", contact: "" });
      
      return { ...prev, teammates: updatedTeammates };
    });
  }, [teamSize]);

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };



  const updateTeammate = (index: number, field: string, value: string) => {
    const updated = [...formData.teammates];
    updated[index] = { ...updated[index], [field]: value };
    setFormData(prev => ({ ...prev, teammates: updated }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          competitionName: competition.name,
          mode
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
            Registry successful for <span className="text-white">{competition.name}</span>. Mission details have been assigned. .
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#03050B] text-[#E7F2FF] font-sans selection:bg-cyan-400 selection:text-[#04060b] overflow-x-hidden relative paper-grain">
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

      {isMobile && (
        <div className="fixed inset-0 z-1 pointer-events-none backdrop-blur-[1px]"></div>
      )}

      <div className="fixed inset-0 pointer-events-none z-1 bg-linear-to-b from-[#050000] via-[#020000] to-[#0a0000]"></div>
      <div className="fixed inset-0 pointer-events-none z-2 bg-radial-[circle_at_20%_40%] from-red-600/5 via-transparent to-transparent animate-[nebula-drift_15s_ease-in-out_infinite]"></div>
      <div className="fixed inset-0 pointer-events-none z-2 bg-radial-[circle_at_80%_60%] from-amber-600/5 via-transparent to-transparent animate-[nebula-drift_18s_ease-in-out_infinite_reverse]"></div>
      <div className="fixed inset-0 pointer-events-none z-3 opacity-[0.03] mix-blend-color-burn bg-[#ff0000]"></div>

      <div className="fixed top-10 left-10 flex flex-col gap-1 pointer-events-none z-10 opacity-30 select-none">
        <div className="flex items-center gap-2">
        </div>
      </div>
      <div className="fixed top-10 right-10 text-[9px] font-mono text-white/10 tracking-[0.4em] pointer-events-none uppercase z-10 select-none">
        [ SECTOR_04 : WAVE_STABLE ]
      </div>
      <div className="fixed bottom-10 right-10 text-[8px] font-mono text-cyan-400/20 tracking-widest pointer-events-none uppercase z-10 select-none hidden md:block">
        NEUTRON_NET_ENCRYPTION_ACTIVE :: 256_BIT
      </div>

      <div className={`pointer-events-none fixed inset-0 z-4 transition-all duration-700 ${isMobile ? "opacity-30 blur-4" : "opacity-60 blur-[1.5px]"}`}>
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M0,92 C17,78 35,99 56,88 C72,79 86,68 100,76"
            stroke="#ff0033"
            strokeWidth="0.2"
            fill="none"
            opacity={0.4}
            strokeLinecap="round"
            strokeDasharray="10 8"
          />
          <path
            d="M0,30 C14,16 30,39 48,28 C64,20 82,8 100,16"
            stroke="#00ffff"
            strokeWidth="0.15"
            fill="none"
            opacity={0.3}
            strokeLinecap="round"
            strokeDasharray="0.75 1.25"
          />
          <path
            d="M0,60 C25,40 50,80 75,50 C90,35 100,20 100,10"
            stroke="#fbbf24"
            strokeWidth="0.1"
            fill="none"
            opacity={0.2}
            strokeLinecap="round"
            strokeDasharray="15 5"
          />
          <path
            d="M0,10 C30,30 60,0 100,40"
            stroke="#ffffff"
            strokeWidth="0.05"
            fill="none"
            opacity={0.15}
            strokeLinecap="round"
            strokeDasharray="1 1"
          />
          <path
            d="M100,100 C80,80 90,50 70,30 C50,10 20,20 0,0"
            stroke="#00ffff"
            strokeWidth="0.1"
            fill="none"
            opacity={0.1}
            strokeLinecap="round"
            strokeDasharray="5 15"
          />
          <path
            d="M20,100 C30,70 10,40 40,20 C70,0 90,10 100,0"
            stroke="#ff0033"
            strokeWidth="0.1"
            fill="none"
            opacity={0.1}
            strokeLinecap="round"
            strokeDasharray="20 10"
          />
          <path
            d="M0,50 Q25,25 50,50 T100,50"
            stroke="#fbbf24"
            strokeWidth="0.08"
            fill="none"
            opacity={0.15}
            strokeLinecap="round"
          />
          <path
            d="M100,80 Q75,90 50,80 T0,80"
            stroke="#00ffff"
            strokeWidth="0.05"
            fill="none"
            opacity={0.2}
            strokeLinecap="round"
            strokeDasharray="2 4"
          />
        </svg>
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
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-px h-10 bg-linear-to-b from-transparent to-cyan-500/50 hidden md:block"></div>
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] relative z-10">
                  {competition.name.split(' ').map((word, i) => (
                    <span key={i} className={i % 2 === 1 ? "text-white/20 block" : "block"}>
                      {word}
                    </span>
                  ))}
                </h1>
                <div className="text-[10px] font-mono text-cyan-400/40 tracking-[0.5em] uppercase font-bold">
                  Target_Classification :: {competition.slug.toUpperCase()}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
                <div className="absolute inset-0 bg-white/1 backdrop-blur-3xl rounded-[64px] -z-1 border border-white/5"></div>
                <div className="p-12 space-y-6 group transition-all duration-500">
                  <div className="flex items-center gap-4">
                    <div className="w-1 h-8 bg-red-600"></div>
                    <h4 className="text-xs uppercase font-black tracking-[0.2em] italic text-red-500">
                      {mode === "Solo" ? "Individual Protocol" : "Squad Parameters"}
                    </h4>
                  </div>
                  <p className="text-sm text-white/40 font-medium leading-relaxed pl-5">
                    {mode === "Solo" ? (
                      <>Deployment is set for <span className="text-white font-bold">Standalone Operation</span>. Ensure your personal telemetry is synchronized.</>
                    ) : (
                      <>Deployment allows for a maximum of <span className="text-white font-bold">{competition.maxTeamSize} Units</span> per squad. Synchronize your team before initiating flight.</>
                    )}
                  </p>
                </div>

                <div className="p-12 space-y-6 group transition-all duration-500 border-l border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-1 h-8 bg-cyan-600"></div>
                    <h4 className="text-xs uppercase font-black tracking-[0.2em] italic text-cyan-500">Matrix Verification</h4>
                  </div>
                  <p className="text-sm text-white/40 font-medium leading-relaxed pl-5">
                    Registry for <span className="text-white font-bold">{competition.name}</span> is protected by the <span className="text-white font-bold">Neutron Mesh Network</span>.
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
                <Link href={`/competitions/${competition.slug}`} className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20 hover:text-white transition-colors">
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

              {competition.minTeamSize !== competition.maxTeamSize && (
                <div className="space-y-4">
                  <label className="text-[10px] uppercase font-black tracking-[0.4em] text-white/30 block text-center">Unit Deployment Configuration</label>
                  <div className="flex items-center gap-2 p-1.5 bg-white/3 backdrop-blur-3xl mb-12 border border-white/5 shadow-2xl relative group overflow-hidden">
                    <div className="absolute inset-x-0 bottom-0 h-[2px] bg-cyan-500/20"></div>
                    {Array.from({ length: (competition.maxTeamSize || 1) - (competition.minTeamSize || 1) + 1 }, (_, i) => i + (competition.minTeamSize || 1))
                      .map(size => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setTeamSize(size)}
                          className={`flex-1 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 relative z-10 ${teamSize === size ? "text-white" : "text-white/20 hover:text-white/40"}`}
                        >
                          {teamSize === size && (
                            <motion.div 
                              layoutId="active-size"
                              className="absolute inset-0 bg-white/5 border border-white/10"
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          )}
                          <span className="relative">{size === 1 ? "Solo" : `${size} Units`}</span>
                        </button>
                      ))
                    }
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-16">
                <div className="pb-20 text-center relative group/sector overflow-hidden">
                  <div className="absolute inset-0 bg-radial-[circle_at_center] from-cyan-500/5 via-transparent to-transparent opacity-50"></div>
                  <div className="flex flex-col items-center gap-2 relative z-10">
                    <span className="text-[10px] uppercase font-black tracking-[0.6em] text-cyan-400/60 mb-2">Target_Transmission_Detected</span>
                    <div className="flex items-center gap-6">
                      <h3 className="text-3xl md:text-5xl font-black font-audiowide tracking-tighter text-white uppercase drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                        {competition.name}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="space-y-10">
                  <div className="flex items-center gap-4 pb-4 border-b border-white/5">
                    <div className="relative group/num">
                      <div className="absolute inset-0 bg-cyan-400/20 blur-8 opacity-0 group-hover/num:opacity-100 transition-opacity"></div>
                      <span className="text-[10px] font-black text-white bg-cyan-500 px-2 py-1 rounded-xs uppercase tracking-[0.3em] relative z-10">01</span>
                    </div>
                    <h3 className="text-[11px] font-black uppercase text-white tracking-[0.4em]">
                      {mode === "Solo" ? "Personal Intelligence" : "Leader Intelligence"}
                    </h3>
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
                    <div className="relative group/num">
                      <div className="absolute inset-0 bg-red-400/20 blur-8 opacity-0 group-hover/num:opacity-100 transition-opacity"></div>
                      <span className="text-[10px] font-black text-white bg-red-500 px-2 py-1 rounded-xs uppercase tracking-[0.3em] relative z-10">02</span>
                    </div>
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

                {mode === "Team" && (
                  <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-center gap-4 pb-4 border-b border-white/5">
                      <div className="relative group/num">
                        <div className="absolute inset-0 bg-amber-400/20 blur-8 opacity-0 group-hover/num:opacity-100 transition-opacity"></div>
                        <span className="text-[10px] font-black text-white bg-amber-500 px-2 py-1 rounded-xs uppercase tracking-[0.3em] relative z-10">03</span>
                      </div>
                      <h3 className="text-[11px] font-black uppercase text-white tracking-[0.4em]">Squad Setup</h3>
                      <div className="flex-1 h-px bg-white/5"></div>
                    </div>

                    <div className="space-y-8">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-[10px] uppercase font-black tracking-[0.4em] text-white/30">Squad Recruits</label>
                          <span className="text-[10px] text-cyan-400 font-bold uppercase">{formData.teammates.length}/{competition.maxTeamSize - 1} Selected</span>
                        </div>
                        
                        {formData.teammates.map((member, idx) => (
                          <div key={idx} className="pb-12 border-b border-white/5 last:border-0 space-y-8 relative group">
                            <div className="flex items-center justify-between opacity-20 group-hover:opacity-100 transition-opacity">
                              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-400 italic">Recruit_0{idx + 2} INITIALIZING</h4>
                            </div>

                            <div className="space-y-12">
                              <MinimalInput 
                                label="Member Name"
                                placeholder={`Enter member ${idx + 2} name`}
                                value={member.name}
                                onChange={(v: string) => updateTeammate(idx, "name", v)}
                                required
                              />
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <MinimalInput 
                                  label="Contact Number"
                                  placeholder="+91 XXXXX XXXXX"
                                  value={member.contact}
                                  onChange={(v: string) => updateTeammate(idx, "contact", v)}
                                  required
                                />
                                <MinimalInput 
                                  label="Email Address"
                                  type="email"
                                  placeholder="member@network.io"
                                  value={member.email}
                                  onChange={(v: string) => updateTeammate(idx, "email", v)}
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        ))}


                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-10 space-y-8 border-t border-white/5">
                  <p className="text-xs text-center text-white/30 italic font-medium leading-relaxed">
                    By initiating registry, you agree to the Mission Protocols of<br /> 
                    <span className="text-white font-bold">{competition.name}</span>.
                  </p>
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
        .paper-grain {
          position: relative;
        }
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
        @keyframes nebula-drift {
          0% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.6; }
          50% { transform: translate3d(2%, -3%, 0) scale(1.1); opacity: 0.9; }
          100% { transform: translate3d(0, 0, 0) scale(1); opacity: 0.6; }
        }
        @keyframes sector-pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}
