"use client";

import PetDisplay from "@/components/PetDisplay";
import SleepControls from "@/components/SleepControls";
import StreakDisplay from "@/components/StreakDisplay";
import { useSleepTracker } from "@/hooks/useSleepTracker";

export default function Home() {
  const { petState, minutes, streak, putToBed, wakeUp } = useSleepTracker();

  return (
    <main style={{ textAlign: "center", paddingTop: "4rem" }}>
      <PetDisplay state={petState} />
      <h1>Sleepy Phone</h1>

      {minutes > 0 && <p>Sleeping for {minutes} min</p>}

      <SleepControls state={petState} onSleep={putToBed} onWake={wakeUp} />

      <StreakDisplay streak={streak} />
    </main>
  );
}
