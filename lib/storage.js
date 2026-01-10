const KEY = "sleepy-phone-data";

export function loadData() {
  if (typeof window === "undefined") return null;
  try {
    return JSON.parse(localStorage.getItem(KEY));
  } catch {
    return null;
  }
}

export function saveData(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}
