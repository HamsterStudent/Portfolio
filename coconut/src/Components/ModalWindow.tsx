import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { useRecoilState, useSetRecoilState } from "recoil";
import { highestZIndexAtom, windowDisplayAtom } from "../atom";
import ErrorIcon from "./ErrorIcon";
import styled from "styled-components";

interface IContainer {
  zIndex: number;
  windowWidth?: string;
}
const Container = styled.div<IContainer>`
  width: ${(props) => props.windowWidth};
  height: auto;
  background-color: ${(props) => props.theme.windowBg};
  box-shadow: ${(props) => props.theme.windowShadow};
  margin: 0;
  box-sizing: content-box;
  position: absolute;
  z-index: ${(props) => props.zIndex};
  border: 0.7px solid;
  color: ${(props) => props.theme.textColor};
`;
const Bar = styled.div`
  width: 100%;
  height: 20px;
  padding-left: 5px;
  position: relative;
  div {
    width: 15px;
    height: 15px;
    border: solid 1px;
    top: 5px;
    right: 6px;
    position: absolute;
  }
`;
const ContentsWrap = styled.section``;

interface IWindow {
  width: number;
  windowName: string;
  children?: any;
}
const ModalWindow = ({ width, windowName, children }: IWindow) => {
  let [highestZIndex, setHighestZIndex] = useRecoilState(highestZIndexAtom);
  let [zIndex, setZIndex] = useState(0);
  const [isDisplay, setIsdisplay] = useRecoilState(windowDisplayAtom);

  useEffect(() => {
    setZIndex(highestZIndex);
  }, []);

  const clickFront = (e: React.MouseEvent<HTMLDivElement>) => {
    if (highestZIndex >= zIndex) {
      setZIndex(highestZIndex++);
      setHighestZIndex(highestZIndex++);
    }
  };

  const clickClose = () => {
    setIsdisplay(
      isDisplay.map((window) => {
        return window.name === windowName
          ? { ...window, display: false }
          : window;
      }),
    );
  };

  return (
    <Draggable bounds="parent" handle=".bar" defaultPosition={{ x: 30, y: 50 }}>
      <Container
        windowWidth={`${width}px`}
        onClick={clickFront}
        zIndex={zIndex}
      >
        <Bar className="bar">
          {windowName}
          <div onClick={clickClose}></div>
        </Bar>
        <ContentsWrap>{children}</ContentsWrap>
      </Container>
    </Draggable>
  );
};

export default ModalWindow;
