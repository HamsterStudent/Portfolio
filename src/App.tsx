import React from "react";
import Header from "./Components/Header";
import styled, { ThemeProvider } from "styled-components";
import Launcher from "./Pages/Launcher";
import MainIcon from "./Components/MainIcon";
import Guestbook from "./Pages/Guestbook";
import ChooseTheme from "./Pages/ThemeScreen";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useRecoilValue } from "recoil";
import {
  displayLauncherAtom,
  themeAtom,
  windowDisplayAtom,
} from "./recoil/atom";
import Resume from "./Pages/resume";
import Blog from "./Pages/Blog";
import Dungeon from "./Pages/Dungeon";
import Coding from "./Pages/Coding";
import Tools from "./Pages/Tools";
import ProdList from "./Pages/CodingPosts/ProdList";
import About from "./Pages/About";
import useDisplaySticker from "./Hooks/useDisplaySticker";
import Sticker from "./Components/Sticker";

const AppWrap = styled.section`
  position: relative;
  height: calc(100vh - 20px);
  background-color: ${(props) => props.theme.backgroundColor};
  overflow: hidden;
`;

function App() {
  const isLauncher = useRecoilValue(displayLauncherAtom);
  const isDisplay = useRecoilValue(windowDisplayAtom);
  const handle = useFullScreenHandle();
  const currentTheme = useRecoilValue(themeAtom);
  const stickerName = "typescript";
  const { displaySticker, setDisplaySticker } = useDisplaySticker(stickerName);

  console.log(isDisplay);
  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <FullScreen handle={handle}>
          <Header {...handle} />
          <AppWrap>
            <MainIcon />
            {isLauncher ? <Launcher /> : null}
            {isDisplay["Resume"] ? <Resume /> : null}
            {isDisplay["Guestbook"] ? <Guestbook /> : null}
            {isDisplay["Theme"] ? <ChooseTheme /> : null}
            {isDisplay["Blog"] ? <Blog /> : null}
            {isDisplay["Dungeon"] ? <Dungeon /> : null}
            {isDisplay["Coding"] ? <Coding /> : null}
            {isDisplay["Tools"] ? <Tools /> : null}
            {isDisplay["ProdList"] ? <ProdList /> : null}
            {isDisplay["About"] ? <About /> : null}
            {displaySticker ? (
              <Sticker
                width={220}
                name={stickerName}
                defaultPosition={{ x: 300, y: 200 }}
                setSricker={setDisplaySticker}
              />
            ) : null}
          </AppWrap>
        </FullScreen>
      </ThemeProvider>
    </>
  );
}

export default App;
