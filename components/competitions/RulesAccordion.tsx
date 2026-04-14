"use client";

import React from "react";
import type { RuleItem } from "@/lib/competitionRulesParser";

interface RulesAccordionProps {
  rules: RuleItem[];
}

export default function RulesAccordion({ rules }: RulesAccordionProps) {
  return (
    <div className="w-full bg-[#0a0000]/60 backdrop-blur-md border-[3px] sm:border-4 border-[#3a0000]/70 shadow-[6px_6px_0_rgba(15,0,0,0.6)] sm:shadow-[8px_8px_0_rgba(15,0,0,0.6)] overflow-hidden">
      <div className="px-3 sm:px-4 md:px-6 py-4 sm:py-5 md:py-6 space-y-5 sm:space-y-6 md:space-y-8">
        {rules.map((rule, index) => (
          <div
            key={index}
            className="border-b border-red-500/20 pb-4 sm:pb-5 md:pb-6 last:border-b-0 last:pb-0"
          >
            <div className="flex items-start gap-2.5 sm:gap-4 md:gap-5">
              <span className="font-mono text-[0.75rem] sm:text-[0.95rem] md:text-[1.1rem] text-red-500 font-bold opacity-90 shrink-0 tracking-wider pt-1">
                [0{index + 1}]
              </span>
              <div className="min-w-0">
                <h4 className="text-[1.15rem] sm:text-[1.4rem] md:text-[1.75rem] lg:text-[2rem] font-black uppercase tracking-tight text-[#E7F2FF] wrap-break-word">
                  {rule.title}
                </h4>
                <p className="mt-2 sm:mt-3 text-[0.95rem] sm:text-[1.08rem] md:text-[1.25rem] lg:text-[1.45rem] leading-relaxed text-[#c2aaaa] font-medium whitespace-pre-line">
                  {rule.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
