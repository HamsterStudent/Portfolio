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
`;
const Bar = styled.div`
  width: 100%;
  height: 20px;
  padding-left: 5px;
  position: relative;
  div {
    width: 15px;
    height: 15px;
    border: solid 1px ${(props) => props.theme.textColor};
    top: 5px;
    right: 6px;
    position: absolute;
  }
  span {
    width: 50%;
  }
  p {
    display: inline-block;
    color: ${(props) => props.theme.textColor};
  }
`;
const style = {
  heigth: "auto",
  overflowY: "hidden",
  overflowX: "hidden",
} as const;

const bottomRight = {
  bottomRight: {
    bottom: "0",
    right: "0",
    width: "60px",
    height: "30px",
    background: "plum",
  },
};

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
          <div onClick={clickClose}></div>
          <p>{windowName}</p>
        </Bar>
        {resize ? (
          <Resizable
            style={style}
            defaultSize={{
              width: 600,
              height: 200,
            }}
            maxWidth={900}
            minWidth={200}
            minHeight={200}
            maxHeight={800}
            handleStyles={bottomRight}
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
