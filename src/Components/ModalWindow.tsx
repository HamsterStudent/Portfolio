import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { useRecoilState, useSetRecoilState } from "recoil";
import { highestZIndexAtom, windowDisplayAtom } from "../recoil/atom";
import styled from "styled-components";
import { Resizable } from "re-resizable";

interface IContainer {
  zIndex: number;
  windowWidth?: string;
}
export const Container = styled.div<IContainer>`
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
const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
} as const;
const ContentsWrap = styled.section``;

interface IWindow {
  width: number;
  windowName: string;
  defaultPosition: { x: number; y: number };
  children?: any;
  resize?: boolean;
}
const ModalWindow = ({
  width,
  windowName,
  defaultPosition,
  children,
  resize,
}: IWindow) => {
  let [highestZIndex, setHighestZIndex] = useRecoilState(highestZIndexAtom);
  let [zIndex, setZIndex] = useState(0);
  const setIsdisplay = useSetRecoilState(windowDisplayAtom);

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
    setIsdisplay((cur) => {
      return { ...cur, [`${windowName}`]: false };
    });
  };

  return (
    <Draggable bounds="parent" handle=".bar" defaultPosition={defaultPosition}>
      <Container
        windowWidth={resize ? "auto" : `${width}px`}
        onClick={clickFront}
        zIndex={zIndex}
      >
        <Bar className="bar">
          {windowName}
          <div onClick={clickClose}></div>
        </Bar>
        {resize ? (
          <Resizable
            style={style}
            defaultSize={{
              width: 200,
              height: 200,
            }}
          >
            {children}
          </Resizable>
        ) : (
          <ContentsWrap>{children}</ContentsWrap>
        )}
      </Container>
    </Draggable>
  );
};

export default ModalWindow;
