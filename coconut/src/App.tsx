import React, { useEffect, useRef, useState } from "react";
import Header from "./Components/Header";
import styled from "styled-components";
import Draggable, { DraggableCore } from "react-draggable";
import Launcher from "./Pages/Launcher";

const AppWrap = styled.section`
  position: relative;
  height: calc(100vh - 20px);
  background-color: tomato;
`;
const MainIconWrap = styled.section`
  position: absolute;
  bottom: 0;
`;
const IconWrap = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
const IconLi = styled.li`
  width: 80px;
  height: auto;
  font-size: 14px;
  border: dotted 0.7px;
`;
const IconImgWrap = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 7px;
  img {
    width: 100%;
    object-fit: contain;
  }
`;

function App() {
  return (
    <>
      <Header />
      <AppWrap>
        <Launcher />
        <MainIconWrap>
          <IconWrap>
            <IconLi>
              <IconImgWrap>
                <img src="img/design.gif" alt="" />
              </IconImgWrap>
              <span>Guestbook</span>
            </IconLi>
            <IconLi>
              <IconImgWrap>
                <img src="img/about.gif" alt="" />
              </IconImgWrap>
              <span>Dungeon</span>
            </IconLi>
            <IconLi>Guestbook</IconLi>
            <IconLi>Guestbook</IconLi>
          </IconWrap>
        </MainIconWrap>
      </AppWrap>
    </>
  );
}

export default App;
