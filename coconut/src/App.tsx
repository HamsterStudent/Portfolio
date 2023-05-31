import React, { useEffect, useRef, useState } from "react";
import Header from "./Components/Header";
import styled from "styled-components";
import Launcher from "./Pages/Launcher";
import MainIcon from "./Components/MainIcon";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const AppWrap = styled.section`
  position: relative;
  height: calc(100vh - 20px);
  background-color: tomato;
  overflow: hidden;
`;

function App() {
  const handle = useFullScreenHandle();
  return (
    <>
      <FullScreen handle={handle}>
        <Header {...handle} />
        <AppWrap>
          <Launcher />
          <MainIcon />
        </AppWrap>
      </FullScreen>
    </>
  );
}

export default App;
