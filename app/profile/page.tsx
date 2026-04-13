import { Suspense } from "react";
import ProfileSwitcher from "./ProfileSwitcher";

export const metadata = {
  title: "Profile · Photon",
  description: "Your Photon profile and competition dashboard.",
};

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      }
    >
      <ProfileSwitcher />
    </Suspense>
  );
}
