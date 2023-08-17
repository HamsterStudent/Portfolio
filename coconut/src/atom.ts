import { atom } from "recoil";
import { defaultTheme } from "./theme";
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

export const windowDisplayAtom = atom({
  key: `windowDisplay/${v1()}`,
  default: [
    { name: "Dungeon", display: false },
    { name: "Blog", display: false },
  ],
});

export const displayLauncherAtom = atom({
  key: `displayLauncher/${v1()}`,
  default: true,
});

export const displayGuestbookAtom = atom({
  key: `displayGuestbook/${v1()}`,
  default: false,
});

export const displayThemeAtom = atom({
  key: `displayTheme/${v1()}`,
  default: false,
});

export const displayResumeAtom = atom({
  key: `displayResume/${v1()}`,
  default: false,
});

export const displayCodingAtom = atom({
  key: `displayCoding/${v1()}`,
  default: false,
});

export const displayBlogAtom = atom({
  key: `displayBlog/${v1()}`,
  default: false,
});

export const displayDungeonAtom = atom({
  key: `displayDungeon/${v1()}`,
  default: false,
});

export const displayToolsAtom = atom({
  key: `displayTools/${v1()}`,
  default: false,
});
