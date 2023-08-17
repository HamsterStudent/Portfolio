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
  displayBlogAtom,
  displayCodingAtom,
  displayDungeonAtom,
  displayGuestbookAtom,
  displayLauncherAtom,
  displayResumeAtom,
  displayThemeAtom,
  themeAtom,
  displayToolsAtom,
  windowDisplayAtom,
} from "./atom";
import Resume from "./Pages/resume";
import Blog from "./Pages/Blog";
import Dungeon from "./Pages/Dungeon";
import Coding from "./Pages/Coding";
import Tools from "./Pages/Tools";

const AppWrap = styled.section`
  position: relative;
  height: calc(100vh - 20px);
  background-color: ${(props) => props.theme.backgroundColor};
  overflow: hidden;
`;

function App() {
  const isLauncher = useRecoilValue(displayLauncherAtom);
  const isGuestbook = useRecoilValue(displayGuestbookAtom);
  const isTheme = useRecoilValue(displayThemeAtom);
  const isResume = useRecoilValue(displayResumeAtom);
  const isBlog = useRecoilValue(displayBlogAtom);
  const isDungeon = useRecoilValue(displayDungeonAtom);
  const isTools = useRecoilValue(displayToolsAtom);
  const isCoding = useRecoilValue(displayCodingAtom);
  const isDisplay = useRecoilValue(windowDisplayAtom);
  const handle = useFullScreenHandle();
  const currentTheme = useRecoilValue(themeAtom);
  console.log(isDisplay);
  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <FullScreen handle={handle}>
          <Header {...handle} />
          <AppWrap>
            <MainIcon />
            {isLauncher ? <Launcher /> : null}
            {isResume ? <Resume /> : null}
            {isGuestbook ? <Guestbook /> : null}
            {isTheme ? <ChooseTheme /> : null}
            {isBlog ? <Blog /> : null}
            {isDungeon ? <Dungeon /> : null}
            {isCoding ? <Coding /> : null}
            {isTools ? <Tools /> : null}
          </AppWrap>
        </FullScreen>
      </ThemeProvider>
    </>
  );
}

export default App;
