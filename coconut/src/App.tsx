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
  displayContactAtom,
  displayDungeonAtom,
  displayGuestbookAtom,
  displayLauncherAtom,
  displayResumeAtom,
  displayThemeAtom,
  themeAtom,
} from "./atom";
import Resume from "./Pages/resume";
import Blog from "./Pages/Blog";
import Dungeon from "./Pages/Dungeon";
import Contact from "./Pages/Contact";
import Coding from "./Pages/Coding";

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
  const isContact = useRecoilValue(displayContactAtom);
  const isCoding = useRecoilValue(displayCodingAtom);
  const handle = useFullScreenHandle();
  const currentTheme = useRecoilValue(themeAtom);
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
            {isContact ? <Contact /> : null}
          </AppWrap>
        </FullScreen>
      </ThemeProvider>
    </>
  );
}

export default App;
