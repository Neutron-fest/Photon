"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import CompetitionRegisterForm from "@/components/CompetitionRegisterForm";
import { COMPETITIONS_DATA, CLOSED_COMPETITIONS } from "@/data/competition-data";


export default function CompetitionRegisterPage() {
  const params = useParams();
  const router = useRouter();
  const routeParam = typeof params?.slug === "string" ? params.slug : "";

  const competition = COMPETITIONS_DATA.find(c => c.slug === routeParam);
  const isClosed = CLOSED_COMPETITIONS.some(c => c.toLowerCase() === routeParam.toLowerCase());

  useEffect(() => {
    if (isClosed) {
      router.push(`/competitions/${routeParam}/closed`);
    }
  }, [isClosed, router, routeParam]);

  if (!competition) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="max-w-xl w-full border border-white/15 bg-white/5 rounded-2xl p-8 text-center">
          <h1 className="text-3xl font-semibold mb-4">Registration Offline</h1>
          <p className="text-white/65 mb-8">
            This sector is currently inaccessible. Verify the transmission link and try again.
          </p>
        </div>
      </main>
    );
  }

  if (isClosed) {
    return null; // Let the useEffect handle the redirect
  }

  const teamSizeStr = competition.teamSize || "";
  
  // Parse team size range from string (e.g., "1-3", "2-6", "Solo", "1")
  const parseTeamSizeRange = (str: string) => {
    const digits = str.match(/\d+/g);
    if (!digits) {
      const lower = str.toLowerCase();
      if (lower.includes("solo")) return { min: 1, max: 1 };
      if (lower.includes("duo")) return { min: 2, max: 2 };
      if (lower.includes("trio")) return { min: 3, max: 3 };
      if (lower.includes("squad")) return { min: 4, max: 4 };
      return { min: 1, max: 1 };
    }
    
    const nums = digits.map(d => parseInt(d));
    if (nums.length >= 2) {
      return { min: Math.min(...nums), max: Math.max(...nums) };
    }
    return { min: nums[0], max: nums[0] };
  };

  const { min: minTeamSize, max: maxTeamSize } = parseTeamSizeRange(teamSizeStr);
  const allowSolo = minTeamSize === 1;
  const allowTeam = maxTeamSize > 1;

  return (
    <CompetitionRegisterForm 
      competition={{
        id: competition.slug,
        name: competition.title,
        slug: routeParam,
        allowTeam: allowTeam,
        maxTeamSize: maxTeamSize,
        minTeamSize: minTeamSize,
        allowSolo: allowSolo
      }} 
    />
  );
}
