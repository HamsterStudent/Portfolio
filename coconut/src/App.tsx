import React, { useEffect, useRef, useState } from "react";
import Header from "./Components/Header";
import styled from "styled-components";
import Launcher from "./Pages/Launcher";
import MainIcon from "./Components/MainIcon";

const AppWrap = styled.section`
  position: relative;
  height: calc(100vh - 20px);
  background-color: tomato;
  overflow: hidden;
`;

function App() {
  return (
    <>
      <Header />
      <AppWrap>
        <Launcher />
        <MainIcon />
      </AppWrap>
    </>
  );
}

export default App;
