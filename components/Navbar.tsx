"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const links = [
    { name: "Competitions", href: "/competitions", image: "https://ik.imagekit.io/yatharth/ARS03046%20(1).jpg" },
    { name: "Events", href: "/events", image: "https://ik.imagekit.io/yatharth/ARS03000.JPG" },
    { name: "About Us", href: "/about", image: "https://ik.imagekit.io/yatharth/ARS06750.JPG?updatedAt=1774806404575" },
    { name: "Contact", href: "/contact", image: "https://ik.imagekit.io/yatharth/BANNER.jpeg?updatedAt=1774963679610" },
    { name: "Profile", href: "/profile", image: "https://wallpapercave.com/wp/wp15796233.jpg" },
  ];

  const secondaryLinks = [
    { name: "Safety", href: "/safety" },
    { name: "Careers", href: "/careers" },
    { name: "Journal", href: "/journal" },
    { name: "Community", href: "/community" },
    { name: "Press Room", href: "/press" },
    { name: "First Responders", href: "/first-responders" },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveCategory(null);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 w-screen max-w-[100vw] z-300 pointer-events-auto mix-blend-difference group/nav">
        <div className="w-full flex items-center justify-between px-6 sm:px-10 lg:px-16 py-6 sm:py-8 lg:py-10">
          <Link
            href="/"
            className="flex items-center gap-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-300"
          >
            <span className="font-audiowide text-[1.1rem] sm:text-[1.3rem] lg:text-[1.5rem] italic font-black tracking-widest text-white">
              PHOTON
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center justify-center w-12 h-12 border border-white/30 bg-white/5 text-white hover:bg-white/10 transition-all rounded-full"
          >
            <Menu size={22} strokeWidth={2.5} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-400 bg-[#030303]/98 backdrop-blur-3xl overflow-hidden flex flex-col lg:flex-row"
          >
            <div 
              className="absolute inset-0 pointer-events-none opacity-5"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />

            <div className="hidden lg:block lg:flex-[0.6] relative bg-[#050505] overflow-hidden border-r border-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory || 'default'}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  {activeCategory ? (
                    <>
                      <img 
                        src={links.find(l => l.name === activeCategory)?.image} 
                        alt={activeCategory}
                        className="w-full h-full object-cover opacity-60 grayscale-[0.3] brightness-75"
                      />
                      <div className="absolute inset-0 bg-linear-to-l from-[#030303] via-transparent to-transparent" />
                      <div className="absolute bottom-20 right-20 z-20 text-right">
                          <motion.p 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.5em] mb-4"
                          >
                            Sector Visualization
                          </motion.p>
                          <motion.h3 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl font-black text-white italic tracking-tighter"
                          >
                            {activeCategory}
                          </motion.h3>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center relative">
                        <motion.div
                          animate={{ y: ["-100%", "200%"] }}
                          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                          className="absolute left-0 right-0 h-[3px] bg-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.4)] z-20 pointer-events-none"
                        />
                        <span className="font-audiowide text-white/5 text-[12vw] italic select-none">
                          PHOTON
                        </span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex-1 lg:flex-[0.4] flex flex-col relative z-20 h-full overflow-y-auto">
              
              <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-40">
                {[
                  "iℏ ∂ψ/∂t = [-ℏ²/2m ∇² + V(r)]ψ",
                  "E = hν = ℏω = pc",
                  "Δx · Δpₓ ≥ ℏ/2",
                  "(iγᵘ∂ᵤ - mc/ℏ)ψ = 0",
                  "λ = h / mv"
                ].map((eq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0.05, 0.1, 0.05],
                      x: [0, 10, 0],
                      y: [0, 10, 0]
                    }}
                    transition={{ 
                      duration: 10 + i * 2, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    className="absolute text-[10px] font-mono text-cyan-400/20 whitespace-nowrap"
                    style={{
                      left: `${10 + i * 15}%`,
                      top: `${20 + i * 12}%`,
                    }}
                  >
                    {eq}
                  </motion.div>
                ))}
              </div>

              <div className="w-full flex items-center justify-between px-8 py-10">
                <div className="w-12 lg:hidden" /> 
                <span className="font-audiowide text-[1.2rem] italic font-black tracking-wider text-white lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                  PHOTON
                </span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-12 h-12 flex items-center justify-center text-white border border-white/10 rounded-full hover:bg-white/5 bg-white/5 transition-all"
                >
                  <X size={20} strokeWidth={2} />
                </button>
              </div>

              <div className="flex-1 flex flex-col justify-center px-8 sm:px-14 py-12">
                <nav className="flex flex-col gap-6 sm:gap-8">
                  {links.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ x: 25, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className="group flex items-center justify-between gap-6"
                        onMouseEnter={() => setActiveCategory(link.name)}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="text-3xl sm:text-5xl font-black text-white group-hover:text-cyan-400 transition-all duration-300 tracking-tight font-orbitron italic uppercase leading-none">
                          {link.name}
                        </span>
                        <motion.div 
                          className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all duration-300 overflow-hidden"
                        >
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileHover={{ x: 0, opacity: 1 }}
                            animate={activeCategory === link.name ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="flex items-center justify-center"
                          >
                            <svg 
                              width="24" 
                              height="24" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="3" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              className="text-white sm:w-8 sm:h-8"
                            >
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                              <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                          </motion.div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Social Matrix elevated for better visuality */}
                <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-6 py-4 mt-auto mb-6">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold font-mono">
                    Social Matrix
                  </span>
                  <div className="flex items-center gap-6">
                    <FaSquareXTwitter size={18} className="text-white/40 hover:text-cyan-400 transition-all duration-300 cursor-pointer" />
                    <FaInstagram size={18} className="text-white/40 hover:text-cyan-400 transition-all duration-300 cursor-pointer" />
                    <FaLinkedin size={18} className="text-white/40 hover:text-cyan-400 transition-all duration-300 cursor-pointer" />
                  </div>
                </div>
              </div>

              {/* Minimal Bottom Spacer */}
              <div className="px-8 sm:px-14 py-4 border-t border-white/5 bg-black/40 backdrop-blur-xl opacity-20">
                <p className="text-[7px] font-mono tracking-[0.5em] text-white/40 uppercase text-center">
                  PHOTON CORE NAVIGATION // ACCESS GRANTED
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
