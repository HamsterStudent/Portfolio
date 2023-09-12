import { atom } from "recoil";
import { defaultTheme } from "../style/theme";
import { v1 } from "uuid";

export interface IStickerTypes {
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

export const displayLauncherAtom = atom({
  key: `displayLauncher/${v1()}`,
  default: true,
});

export const collectSticker = atom<IStickerTypes[]>({
  key: `collectSticker/${v1()}`,
  default: [
    { name: "hamster", isGet: false, describe: "Hamster is cute" },
    {
      name: "graphql",
      isGet: false,
      describe: "graphQL",
      fruit: "img/sticker/watermalon.png",
      img: "img/sticker/graphql.png",
    },
    {
      name: "typescript",
      isGet: false,
      describe: "jelly is delicious",
      fruit: "img/sticker/mango.png",
      img: "img/sticker/typescript.png",
    },
    {
      name: "css",
      isGet: false,
      describe: "css",
      fruit: "img/sticker/orange.png",
      img: "img/sticker/css.png",
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
    // 상단바 아이콘
    Launcher: true,
    Guestbook: false,
    Theme: false,
    // 런처 아이콘
    Resume: false,
    Coding: false,
    Tools: false,
    Blog: false,
    About: false,
    // 배경화면 아이콘
    Dungeon: false,
    // 포스트 리스트
    ProdList: false,
  },
});

export const ToolsAlertAtom = atom({
  key: `ToolsAlertAtom/${v1()}`,
  default: false,
});
