import { atom } from "recoil";
import { defaultTheme } from "./theme";

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
  default: defaultTheme,
});

export const collectError = atom({
  key: "collectError",
  default: [{}],
});

export const displayLauncherAtom = atom({
  key: "displayLauncher",
  default: true,
});

export const displayGuestbookAtom = atom({
  key: "displayGuestbook",
  default: false,
});

export const displayThemeAtom = atom({
  key: "displayTheme",
  default: false,
});

export const displayResumeAtom = atom({
  key: "displayResume",
  default: false,
});

export const displayCodingAtom = atom({
  key: "displayCoding",
  default: false,
});

export const displayBlogAtom = atom({
  key: "displayBlog",
  default: false,
});

export const displayDungeonAtom = atom({
  key: "displayDungeon",
  default: false,
});

export const displayErrorCardAtom = atom({
  key: "displayContact",
  default: false,
});
