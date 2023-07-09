import { atom } from "recoil";

export const basicZIndexAtom = atom({
  key: "basicIndex",
  default: 0,
});

export const highestZIndexAtom = atom({
  key: "windowIndex",
  default: 0,
});

export const themeAtom = atom({
  key: "theme",
  default: "lightTheme",
});

export const displayGuestbookAtom = atom({
  key: "displayGuestbook",
  default: false,
});

export const displayThemeAtom = atom({
  key: "displayTheme",
  default: false,
});
