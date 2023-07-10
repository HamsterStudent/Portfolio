import React from "react";
import Header from "./Components/Header";
import styled, { ThemeProvider } from "styled-components";
import Launcher from "./Pages/Launcher";
import MainIcon from "./Components/MainIcon";
import Guestbook from "./Pages/Guestbook";
import ChooseTheme from "./Pages/ThemeScreen";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useRecoilValue } from "recoil";
import { displayGuestbookAtom, displayThemeAtom, themeAtom } from "./atom";

const AppWrap = styled.section`
  position: relative;
  height: calc(100vh - 20px);
  background-color: ${(props) => props.theme.backgroundColor};
  overflow: hidden;
`;

function App() {
  const isGuestbook = useRecoilValue(displayGuestbookAtom);
  const isTheme = useRecoilValue(displayThemeAtom);
  const handle = useFullScreenHandle();
  const currentTheme = useRecoilValue(themeAtom);
  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <FullScreen handle={handle}>
          <Header {...handle} />
          <AppWrap>
            <Launcher />
            <MainIcon />
            {isGuestbook ? <Guestbook /> : null}
            {isTheme ? <ChooseTheme /> : null}
          </AppWrap>
        </FullScreen>
      </ThemeProvider>
    </>
  );
}

export default App;
