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
    <label className="text-xs font-bold text-white tracking-wide flex items-center gap-1">
      {label} {required && <span className="text-cyan-400 text-[10px]">*</span>}
    </label>
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className={`w-full bg-white/3 rounded-2xl px-6 py-5 text-white placeholder:text-white/10 focus:outline-none focus:bg-white/5 transition-all duration-300 border border-white/5 focus:border-white/10`}
      />
      {error && <p className="text-[10px] text-red-500/60 mt-2 ml-1 uppercase tracking-wider font-bold">{error}</p>}
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
        className="w-full bg-white/3 rounded-2xl px-6 py-5 text-white focus:outline-none focus:bg-white/5 transition-all duration-300 appearance-none cursor-pointer border border-white/5 focus:border-white/10"
      >
        <option value="" className="bg-zinc-900 text-white/40">Select {label}</option>
        {options.map((opt: any) => (
          <option key={opt.value || opt} value={opt.value || opt} className="bg-zinc-900 text-white">
            {opt.label || opt}
          </option>
        ))}
      </select>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
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

  // Sync mode and teammates with teamSize
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
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
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
              <div className="space-y-6 text-center">
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85]">
                  {competition.name.split(' ').map((word, i) => (
                    <span key={i} className={i % 2 === 1 ? "text-white/20 block" : "block"}>
                      {word}
                    </span>
                  ))}
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-12 bg-white/2 rounded-[48px] border border-white/5 space-y-6 group hover:bg-white/4 transition-colors">
                  <div className="flex items-center gap-4">
                    <h4 className="text-xs uppercase font-black tracking-[0.2em] italic">
                      {mode === "Solo" ? "Individual Protocol" : "Squad Parameters"}
                    </h4>
                  </div>
                  <p className="text-sm text-white/30 font-medium leading-relaxed">
                    {mode === "Solo" ? (
                      <>Deployment is set for <span className="text-white font-bold">Standalone Operation</span>. Ensure your personal telemetry is synchronized.</>
                    ) : (
                      <>Deployment allows for a maximum of <span className="text-white font-bold">{competition.maxTeamSize} Units</span> per squad. Synchronize your team before initiating flight.</>
                    )}
                  </p>
                </div>

                <div className="p-12 bg-white/2 rounded-[48px] border border-white/5 space-y-6 group hover:bg-white/4 transition-colors">
                  <div className="flex items-center gap-4">
                    <h4 className="text-xs uppercase font-black tracking-[0.2em] italic">Matrix Verification</h4>
                  </div>
                  <p className="text-sm text-white/30 font-medium leading-relaxed">
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
              <div className="space-y-6 text-center">
                <p className="text-[11px] uppercase tracking-[0.5em] text-cyan-400 font-bold">Neutron Protocol · 2026</p>
                <h2 className="text-5xl md:text-7xl font-serif italic text-white leading-tight">
                  Join the <span className="font-sans font-black uppercase not-italic">Orbit.</span>
                </h2>
              </div>

              {competition.minTeamSize !== competition.maxTeamSize && (
                <div className="space-y-4">
                  <label className="text-[10px] uppercase font-black tracking-[0.4em] text-white/30 block text-center">Unit Deployment Configuration</label>
                  <div className="flex items-center gap-4 p-1.5 bg-white/5 rounded-2xl backdrop-blur-xl mb-12">
                    {Array.from({ length: (competition.maxTeamSize || 1) - (competition.minTeamSize || 1) + 1 }, (_, i) => i + (competition.minTeamSize || 1))
                      .map(size => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setTeamSize(size)}
                          className={`flex-1 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${teamSize === size ? "bg-white text-black" : "text-white/20 hover:text-white/40"}`}
                        >
                          {size === 1 ? "Solo" : `${size} Units`}
                        </button>
                      ))
                    }
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-16">
                {/* COMPETITION CONTEXT */}
                <div className="p-10 bg-white/2 rounded-[32px] border border-white/5 space-y-4 text-center">
                  <label className="text-[10px] uppercase font-black tracking-[0.4em] text-white/30">Active Sector</label>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                    <span className="text-2xl font-black tracking-tighter text-white uppercase italic">{competition.name}</span>
                  </div>
                </div>
                {/* 01 PERSONAL */}
                <div className="space-y-10">
                  <div className="flex items-center gap-4 pb-4 border-b border-white/5">
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.3em]">01 .</span>
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

                {/* 02 ACADEMIC */}
                <div className="space-y-10">
                  <div className="flex items-center gap-4 pb-4 border-b border-white/5">
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.3em]">02 .</span>
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

                {/* 03 SQUAD */}
                {mode === "Team" && (
                  <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-center gap-4 pb-4 border-b border-white/5">
                      <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-[0.3em]">03 .</span>
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
                          <div key={idx} className="p-10 bg-white/1 border border-white/5 rounded-[40px] space-y-8 relative group">
                            <div className="flex items-center justify-between">
                              <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 italic">Member 0{idx + 2}</h4>
                            </div>

                            <div className="space-y-8">
                              <MinimalInput 
                                label="Member Name"
                                placeholder={`Enter member ${idx + 2} name`}
                                value={member.name}
                                onChange={(v: string) => updateTeammate(idx, "name", v)}
                                required
                              />
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

                {/* SUBMIT */}
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
    </div>
  );
}
