import { atom } from "recoil";
import { defaultTheme, summerTheme } from "../style/theme";
import { v1 } from "uuid";

export interface IStickerTypes {
  name: string;
  isGet: boolean;
  describe: string;
  fruit?: string;
  img?: string;
}

export const musicPlayAtom = atom({
  key: `musicplay/${v1()}`,
  default: false,
});

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
  default: summerTheme,
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
      fruit: "assets/sticker/fruits/html.png",
      img: "assets/sticker/html.png",
    },
    {
      name: "graphql",
      isGet: false,
      describe: "graphQL",
      fruit: "assets/sticker/fruits/graphql.png",
      img: "assets/sticker/graphql.png",
    },
    {
      name: "typescript",
      isGet: false,
      describe: "Typescript",
      fruit: "assets/sticker/fruits/typescript.png",
      img: "assets/sticker/typescript.png",
    },
    {
      name: "css",
      isGet: false,
      describe: "CSS",
      fruit: "assets/sticker/fruits/css.png",
      img: "assets/sticker/css.png",
    },
    {
      name: "flutter",
      isGet: false,
      describe: "Flutter",
      fruit: "assets/sticker/fruits/flutter.png",
      img: "assets/sticker/flutter.png",
    },
    {
      name: "react",
      isGet: false,
      describe: "React",
      fruit: "assets/sticker/fruits/react.png",
      img: "assets/sticker/react.png",
    },
    {
      name: "javascript",
      isGet: false,
      describe: "Javascript",
      fruit: "assets/sticker/fruits/javascript.png",
      img: "assets/sticker/javascript.png",
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
    MusicPlayer: true,
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
