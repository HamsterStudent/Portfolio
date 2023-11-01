import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import Draggable from "react-draggable";
import { useRecoilState, useSetRecoilState } from "recoil";
import { displayLauncherAtom, highestZIndexAtom } from "../recoil/atom";
import LauncherIcon from "../Components/LauncherIcon";
import { useMediaQuery } from "react-responsive";
import ModalWindow from "../Components/ModalWindow";

const ContentWrap = styled.section`
  width: 100%;
  height: auto;
`;
const ImageWrap = styled.div`
  width: 98.2%;
  margin-bottom: 10px;
  margin: 5px;
  position: relative;
  img {
    width: 100%;
    border: solid 1px;
    box-sizing: border-box;
  }
  .overlay {
    width: 100%;
    height: 100%;
    background: url("img/dot.png");
    background-size: 2px 2px;
    position: absolute;
    top: 0;
  }
`;
const animation = keyframes`
  0% {
    opacity: 0;
  }
  8%{
    opacity:1;
  }
  100%{
    opacity: 1;

  }
`;

const QuickBtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-top: solid 1px;
  .pressed {
    box-shadow: -1px -1px 0px 0px inset,
      rgba(255, 255, 255, 0.25) -2px -2px 0px 0px inset;
  }
  .active {
    position: relative;
    p {
      color: pink;
    }
  }
  .active::before {
    content: "";
    position: absolute;
    right: 20%;
    bottom: 9%;
    width: 8px;
    height: 8px;
    background-color: pink;
    border-radius: 4px;
    animation: ${animation} 2s linear infinite;
  }
`;

const LauncherBlank = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "galmuri11";
  color: ${(props) => props.theme.textColor};
`;

interface ILauncher {
  zIndex?: number;
}

function Launcher() {
  const dragRef = useRef<HTMLDivElement>(null);
  const [icons, setIcons] = useState<string[]>([]);

  const isDesktop = useMediaQuery({
    query: "(min-width : 700px) and (max-width :1920px)",
  });

  useEffect(() => {
    setIcons(["Resume", "Theme", "Project", "Tools", "Blog", "About"]);
  }, []);

  return (
    <ModalWindow
      width={isDesktop ? "600px" : "100%"}
      windowName="Launcher"
      defaultPosition={{ x: -300, y: -250 }}
      isDesktop={isDesktop}
    >
      {/* <LauncherContainer ref={dragRef} className="container" zIndex={zIndex}> */}
      <ContentWrap>
        <ImageWrap>
          <img src="img/temp.jpg" alt="temp" />
          <div className="overlay" data-overlay></div>
        </ImageWrap>
        <QuickBtnWrap>
          {icons.map((name, index) => (
            <LauncherIcon
              key={name}
              name={name}
              index={index}
              isDesktop={isDesktop}
            />
          ))}
          {isDesktop ? null : <LauncherBlank>Press the button</LauncherBlank>}
        </QuickBtnWrap>
      </ContentWrap>
      {/* </LauncherContainer> */}
    </ModalWindow>
  );
}

export default Launcher;
