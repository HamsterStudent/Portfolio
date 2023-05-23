import React, { useRef, useState } from "react";
import Header from "./Components/Header";
import styled from "styled-components";
import Draggable, { DraggableCore } from "react-draggable";

const Info = styled.div`
  width: 30vw;
  height: 30vh;
  background-color: plum;
`;
const InfoBar = styled.div`
  width: 100%;
  height: 30px;
  background-color: aqua;
`;

const DragWrap = styled.section`
  /* margin-top: -1px;
  height: calc(100% + 1px); */
  width: 90%;
  height: 100%;
  margin: 0 auto;
  position: relative;
`;
const AppWrap = styled.section`
  position: relative;
  height: calc(100vh - 20px);
  background-color: tomato;
`;

function App() {
  const dragRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header />
      <AppWrap className="wrap">
        <Draggable handle=".bar" bounds=".wrap">
          <Info className="container">
            <InfoBar className="bar">bar</InfoBar>
          </Info>
        </Draggable>
      </AppWrap>
    </>
  );
}

export default App;
