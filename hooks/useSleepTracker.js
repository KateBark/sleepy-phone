"use client";

import { useEffect, useState } from "react";
import { PET_STATES } from "@/lib/constants";
import { loadData, saveData } from "@/lib/storage";

export function useSleepTracker() {
  const [petState, setPetState] = useState(PET_STATES.AWAKE);
  const [sleepStart, setSleepStart] = useState(null);
  const [minutes, setMinutes] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const saved = loadData();
    if (saved) {
      setPetState(saved.petState);
      setSleepStart(saved.sleepStart);
      setMinutes(saved.minutes || 0);
      setStreak(saved.streak || 0);
    }
  }, []);

  useEffect(() => {
    saveData({ petState, sleepStart, minutes, streak });
  }, [petState, sleepStart, minutes, streak]);

  useEffect(() => {
    if (petState !== PET_STATES.SLEEPING || !sleepStart) return;

    const id = setInterval(() => {
      setMinutes(Math.floor((Date.now() - sleepStart) / 60000));
    }, 60000);

    return () => clearInterval(id);
  }, [petState, sleepStart]);

  function putToBed() {
    setPetState(PET_STATES.SLEEPING);
    setSleepStart(Date.now());
    setMinutes(0);
  }

  function wakeUp() {
    if (!sleepStart) return;
    const mins = Math.floor((Date.now() - sleepStart) / 60000);

    if (mins >= 60) {
      setPetState(PET_STATES.HAPPY);
      setStreak((s) => s + 1);
    } else {
      setPetState(PET_STATES.AWAKE);
    }

    setSleepStart(null);
    setMinutes(0);
  }

  return {
    petState,
    minutes,
    streak,
    putToBed,
    wakeUp,
  };
}
