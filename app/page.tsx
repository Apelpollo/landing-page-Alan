"use client"

import Particu  from "@/components/ui/Particu";
import Introduction from "@/components/ui/Introduction";
import TransitionPage from "@/components/ui/TranstionPage";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <Particu/>
        <Introduction />
      </div>
    </main>
  );
}