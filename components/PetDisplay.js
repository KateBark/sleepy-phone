import { PET_STATES } from "@/lib/constants";

export default function PetDisplay({ state }) {
  const emoji =
    state === PET_STATES.SLEEPING
      ? "😴"
      : state === PET_STATES.HAPPY
      ? "😊"
      : "🐣";

  return <div style={{ fontSize: "4rem" }}>{emoji}</div>;
}
