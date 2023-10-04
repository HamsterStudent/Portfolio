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
    {
      name: "html",
      isGet: false,
      describe: "HTML",
      fruit: "img/sticker/fruits/html.png",
      img: "img/sticker/html.png",
    },
    {
      name: "graphql",
      isGet: false,
      describe: "graphQL",
      fruit: "img/sticker/fruits/graphql.png",
      img: "img/sticker/graphql.png",
    },
    {
      name: "typescript",
      isGet: false,
      describe: "Typescript",
      fruit: "img/sticker/fruits/typescript.png",
      img: "img/sticker/typescript.png",
    },
    {
      name: "css",
      isGet: false,
      describe: "CSS",
      fruit: "img/sticker/fruits/css.png",
      img: "img/sticker/css.png",
    },
    {
      name: "flutter",
      isGet: false,
      describe: "Flutter",
      fruit: "img/sticker/fruits/flutter.png",
      img: "img/sticker/flutter.png",
    },
    {
      name: "react",
      isGet: false,
      describe: "React",
      fruit: "img/sticker/fruits/react.png",
      img: "img/sticker/react.png",
    },
    {
      name: "javascript",
      isGet: false,
      describe: "Javascript",
      fruit: "img/sticker/fruits/javascript.png",
      img: "img/sticker/javascript.png",
    },
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
    Project: false,
    Tools: false,
    Blog: false,
    About: false,
    // 배경화면 아이콘
    Dungeon: false,
    // 포스트 리스트
    ProdListPost: false,
    SessionPost: false,
    ProxyPost: false,
    MapRefact: false,
  },
});

export const ToolsAlertAtom = atom({
  key: `ToolsAlertAtom/${v1()}`,
  default: false,
});
