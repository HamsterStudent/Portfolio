import React, { useEffect, useRef, useState } from "react";
import Header from "./Components/Header";
import styled from "styled-components";
import Launcher from "./Pages/Launcher";
import MainIcon from "./Components/MainIcon";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Guestbook from "./Pages/Guestbook";
import { useRecoilState, useRecoilValue } from "recoil";
import { displayGuestbookAtom, displayThemeAtom } from "./atom";
import ChooseTheme from "./Pages/Theme";

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
  return (
    <>
      <FullScreen handle={handle}>
        <Header {...handle} />
        <AppWrap>
          <Launcher />
          <MainIcon />
          {isGuestbook ? <Guestbook /> : null}
          {isTheme ? <ChooseTheme /> : null}
        </AppWrap>
      </FullScreen>
    </>
  );
}

export default App;
