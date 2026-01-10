import { PET_STATES } from "@/lib/constants";
import Image from "next/image";

export default function PetDisplay({ state }) {
  const display =
    state === PET_STATES.SLEEPING ? (
      <Image
        src="/sleeping-puppy.png"
        alt="Sleeping Puppy"
        width={64}
        height={64}
      />
    ) : state === PET_STATES.HAPPY ? (
      "😊"
    ) : (
      "🐣"
    );

  return (
    <div
      style={{
        fontSize: "4rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {display}
    </div>
  );
}
