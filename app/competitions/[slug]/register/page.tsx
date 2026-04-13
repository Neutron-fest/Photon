"use client";

import { useParams } from "next/navigation";
import CompetitionRegisterForm from "@/components/CompetitionRegisterForm";
import { COMPETITIONS_DATA } from "@/data/competition-data";

export default function CompetitionRegisterPage() {
  const params = useParams();
  const routeParam = typeof params?.slug === "string" ? params.slug : "";

  // Get competition from hardcoded data
  const competition = COMPETITIONS_DATA.find(c => c.slug === routeParam);

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

  const teamSizeStr = competition.teamSize || "";
  const isSoloOnly = teamSizeStr === "Solo" || teamSizeStr.includes("Solo") && !teamSizeStr.includes("/");
  const isTeamOnly = !teamSizeStr.includes("Solo") && teamSizeStr !== "Solo / Team";
  
  // Parse team sizes from teamSize string
  const parseTeamSize = (str: string) => {
    if (str === "Solo") return 1;
    if (str === "Solo / Duo") return 2;
    if (str === "Solo / Team") return 4;
    if (str === "Trio Only") return 3;
    if (str === "Squad (4)") return 4;
    if (str.includes("2-6")) return 6;
    return 1;
  };

  const maxTeamSize = parseTeamSize(teamSizeStr);
  const minTeamSize = isSoloOnly ? 1 : (isTeamOnly ? 2 : 1);

  return (
    <CompetitionRegisterForm 
      competition={{
        id: competition.slug,
        name: competition.title,
        slug: routeParam,
        allowTeam: !isSoloOnly,
        maxTeamSize: maxTeamSize,
        minTeamSize: minTeamSize,
        allowSolo: !isTeamOnly
      }} 
    />
  );
}
