"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useParams } from "next/navigation";
import CompetitionRegistration from "@/components/competition-registration";
import { useCompetition, useCompetitions } from "@/hooks/api/useCompetitions";
import {
  mapCompetitionToCompetitionDetail,
  resolveCompetitionIdFromParam,
} from "@/lib/publicCompetitionModel";

export default function CompetitionRegisterPage() {
  const params = useParams();
  const routeParam = typeof params?.slug === "string" ? params.slug : "";

  const { data: competitions = [], isLoading: isCatalogLoading } =
    useCompetitions();

  const competitionId = useMemo(
    () => resolveCompetitionIdFromParam(routeParam, competitions),
    [routeParam, competitions],
  );

  const { data: rawCompetition, isLoading: isCompetitionLoading } =
    useCompetition(competitionId || "");

  const isResolving = Boolean(routeParam) && !competitionId && isCatalogLoading;
  const isLoading = isResolving || isCompetitionLoading;

  const competition = rawCompetition
    ? mapCompetitionToCompetitionDetail(rawCompetition)
    : null;

  if (isLoading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          <p className="text-xs uppercase tracking-[0.24em] text-white/60">
            Loading Registration
          </p>
        </div>
      </main>
    );
  }

  if (!competition || !competitionId) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="max-w-xl w-full border border-white/15 bg-white/5 rounded-2xl p-8 text-center">
          <h1 className="text-3xl font-semibold mb-4">Competition Not Found</h1>
          <p className="text-white/65 mb-8">
            We could not find this competition registration link.
          </p>
          <Link
            href="/competitions"
            className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 font-semibold hover:bg-white/90 transition-colors"
          >
            Back To Competitions
          </Link>
        </div>
      </main>
    );
  }

  const resolvedCompetitionId = String(
    rawCompetition?.id || rawCompetition?._id || competitionId,
  );
  const competitionTitle =
    String(
      competition?.title || rawCompetition?.name || "Competition",
    ).trim() || "Competition";
  const teamSize =
    String(
      competition?.teamSize || rawCompetition?.teamSize || "Solo / Team",
    ) || "Solo / Team";
  const competitionType =
    rawCompetition?.type || rawCompetition?.competitionType || null;
  const unstopLink =
    rawCompetition?.unstopLink ||
    rawCompetition?.unstopUrl ||
    rawCompetition?.unstopURL ||
    null;

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10 md:py-14">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/45 mb-2">
              Competition Registration
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              {competitionTitle}
            </h1>
          </div>
          <Link
            href={`/competitions/${routeParam}`}
            className="inline-flex items-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Back To Competition
          </Link>
        </div>

        <CompetitionRegistration
          competitionId={resolvedCompetitionId}
          competitionTitle={competitionTitle}
          teamSize={teamSize}
          competitionType={competitionType}
          unstopLink={unstopLink}
        />
      </div>
    </main>
  );
}
