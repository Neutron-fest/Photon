"use client";

import { useParams } from "next/navigation";
import EventRegisterForm from "@/components/EventRegisterForm";
import { EVENTS } from "@/data/events";

export default function EventRegisterPage() {
  const params = useParams();
  const routeParam = typeof params?.slug === "string" ? params.slug : "";

  const event = EVENTS.find(e => e.slug === routeParam);

  if (!event) {
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

  return (
    <EventRegisterForm 
      event={{
        id: event.slug,
        name: event.title,
        slug: routeParam,
      }} 
    />
  );
}
