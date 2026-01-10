import { PET_STATES } from "@/lib/constants";

export default function SleepControls({ state, onSleep, onWake }) {
  return state === PET_STATES.SLEEPING ? (
    <button onClick={onWake}>Wake phone up</button>
  ) : (
    <button onClick={onSleep}>Put phone to bed</button>
  );
}
