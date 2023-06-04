import { atom } from "recoil";

export const basicZIndexAtom = atom({
  key: "basicIndex",
  default: 0,
});

export const highestZIndexAtom = atom({
  key: "windowIndex",
  default: 0,
});
