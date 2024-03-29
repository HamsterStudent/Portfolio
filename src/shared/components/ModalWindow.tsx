import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { useRecoilState, useSetRecoilState } from "recoil";
import { highestZIndexAtom, windowDisplayAtom } from "../../recoil/atom";
import styled from "styled-components";
import { Resizable } from "re-resizable";

interface IContainer {
  zIndex: number;
  windowWidth?: string;
  windowCenter?: boolean;
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
  position: ${(props) => (props.windowCenter ? "absolute" : "none")};
  top: ${(props) => (props.windowCenter ? "50%" : "none")};
  left: ${(props) => (props.windowCenter ? "50%" : "none")};
`;
const Bar = styled.div`
  width: 100%;
  height: 20px;
  padding-top: 5px;
  position: relative;
  display: flex;
  align-items: center;
  font: 400 1.4rem "Source Sans 3";
  .closebtn {
    width: 15px;
    height: 15px;
    margin: 0 5px;
    border: solid 1px ${(props) => props.theme.textColor};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.textColor};
    .img_wrap {
      width: 10px;
      height: 10px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        position: absolute;
      }
    }
  }
  .lineWrap {
    flex: 1;
    i {
      display: block;
      width: 100%;
      height: 3px;
      background: ${(props) => props.theme.textColor};
      border-bottom: 2px solid ${(props) => props.theme.windowBg};
    }
  }
  .title {
    display: inline-block;
    margin: 0 5px;
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
    width: "30px",
    height: "30px",
    background: "url('img/arrow_resize.png')",
  },
};

const ContentsWrap = styled.section``;

interface IWindow {
  width: number | string;
  windowName: string;
  defaultPosition: { x: number; y: number };
  children?: any;
  resize?: boolean;
  isDesktop?: boolean;
}
const ModalWindow = ({
  width,
  windowName,
  defaultPosition,
  children,
  resize,
  isDesktop,
}: IWindow) => {
  let [highestZIndex, setHighestZIndex] = useRecoilState(highestZIndexAtom);
  let [zIndex, setZIndex] = useState(0);
  const setIsdisplay = useSetRecoilState(windowDisplayAtom);
  const [windowCenter, setWindowCenter] = useState(false);

  useEffect(() => {
    setZIndex(highestZIndex);
    if (windowName === "Launcher" && isDesktop) {
      setWindowCenter(true);
    }
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
    <Draggable
      bounds="parent"
      handle=".lineWrap"
      defaultPosition={
        isDesktop !== undefined && !isDesktop ? { x: 0, y: 0 } : defaultPosition
      }
    >
      <Container
        windowWidth={resize ? "auto" : `${width}`}
        onClick={clickFront}
        zIndex={zIndex}
        windowCenter={windowCenter}
      >
        <Bar className="bar">
          <div className="title">{windowName}</div>
          <div className="lineWrap">
            <i></i>
            <i></i>
            <i></i>
          </div>
          <div className="closebtn" onClick={clickClose}>
            <div className="img_wrap">
              <img src="assets/icon/icon_cancel.png" alt="" />
            </div>
          </div>
        </Bar>
        {resize ? (
          <Resizable
            style={style}
            defaultSize={
              isDesktop
                ? {
                    width: 600,
                    height: 200,
                  }
                : {
                    width: 350,
                    height: 500,
                  }
            }
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
