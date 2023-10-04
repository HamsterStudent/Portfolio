import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import Draggable from "react-draggable";
import { useRecoilState, useSetRecoilState } from "recoil";
import { displayLauncherAtom, highestZIndexAtom } from "../recoil/atom";
import LauncherIcon from "../Components/LauncherIcon";

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
`;
const Bar = styled.div`
  width: 100%;
  height: 20px;
  padding-left: 5px;
  position: relative;
  color: ${(props) => props.theme.textColor};
  div {
    width: 15px;
    height: 15px;
    border: solid 1px;
    top: 5px;
    right: 6px;
    position: absolute;
  }
`;

const LauncherContainer = styled(Container)<ILauncher>`
  width: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: solid 0.7px;
  box-sizing: border-box;
`;
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

interface ILauncher {
  zIndex?: number;
}

function Launcher() {
  const dragRef = useRef<HTMLDivElement>(null);
  const [icons, setIcons] = useState<string[]>([]);
  const setIsdisplay = useSetRecoilState(displayLauncherAtom);

  let [highestZIndex, setHighestZIndex] = useRecoilState(highestZIndexAtom);
  let [zIndex, setZIndex] = useState(0);

  useEffect(() => {
    setIcons(["Resume", "Theme", "Project", "Tools", "Blog", "About"]);
  }, []);

  const clickFront = (e: React.MouseEvent<HTMLDivElement>) => {
    if (highestZIndex >= zIndex) {
      setZIndex(highestZIndex++);
      setHighestZIndex(highestZIndex++);
    }
  };

  return (
    <Draggable
      nodeRef={dragRef}
      bounds="parent"
      handle=".bar"
      defaultPosition={{ x: -300, y: -310 }}
    >
      <LauncherContainer ref={dragRef} className="container" zIndex={zIndex}>
        <Bar className="bar" onClick={clickFront}>
          Launcher
          <div
            onClick={() => {
              setIsdisplay(false);
            }}
          ></div>
        </Bar>
        <ContentWrap>
          <ImageWrap>
            <img src="img/temp.jpg" alt="temp" />
            <div className="overlay" data-overlay></div>
          </ImageWrap>
          <QuickBtnWrap>
            {icons.map((name, index) => (
              <LauncherIcon key={name} name={name} index={index} />
            ))}
          </QuickBtnWrap>
        </ContentWrap>
      </LauncherContainer>
    </Draggable>
  );
}

export default Launcher;
