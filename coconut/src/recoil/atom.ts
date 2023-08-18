import { atom } from "recoil";
import { defaultTheme } from "../style/theme";
import { v1 } from "uuid";

export interface ICardTypes {
  name: string;
  isGet: boolean;
  describe: string;
  fruit?: string;
  img?: string;
}

export const basicZIndexAtom = atom({
  key: `basicIndex/${v1()}`,
  default: 0,
});

export const highestZIndexAtom = atom({
  key: `windowIndex/${v1()}`,
  default: 0,
});

export const themeAtom = atom({
  key: `theme/${v1()}`,
  default: defaultTheme,
});

export const collectTool = atom<ICardTypes[]>({
  key: `collectTool/${v1()}`,
  default: [
    { name: "hamster", isGet: false, describe: "Hamster is cute" },
    {
      name: "graphql",
      isGet: false,
      describe: "graphQL",
      fruit: "img/watermalon.png",
      img: "img/graphql.png",
    },
    { name: "jelly", isGet: false, describe: "jelly is delicious" },
    {
      name: "css",
      isGet: false,
      describe: "css",
      fruit: "img/orange.png",
      img: "img/css.png",
    },
    { name: "cat", isGet: false, describe: "cat is good" },
    { name: "dog", isGet: false, describe: "dog is good" },
  ],
});

interface IWindowDisplayAtom {
  [key: string]: boolean;
}
export const windowDisplayAtom = atom<IWindowDisplayAtom>({
  key: `windowDisplay/${v1()}`,
  default: {
    Launcher: true,
    Blog: false,
    Coding: false,
    Resume: false,
    Guestbook: false,
    Dungeon: false,
    Tools: false,
    Theme: false,
  },
});

export const displayLauncherAtom = atom({
  key: `displayLauncher/${v1()}`,
  default: true,
});
