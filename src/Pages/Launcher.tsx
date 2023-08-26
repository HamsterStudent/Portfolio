import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import Draggable from "react-draggable";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  ToolsAlertAtom,
  displayLauncherAtom,
  highestZIndexAtom,
  windowDisplayAtom,
} from "../recoil/atom";

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
  img {
    width: 100%;
    border: solid 1px;
    box-sizing: border-box;
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

const IconWrap = styled.div`
  padding: 10px 0;
  width: 16.6%;
  text-align: center;
  box-shadow: -1px -1px 0px 0px inset,
    rgba(255, 255, 255, 0.3) 1px 1px 0px 0px inset;
  p {
    text-align: center;
  }
  img {
    width: 50%;
    object-fit: contain;
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

  const setIsDisplay = useSetRecoilState(windowDisplayAtom);
  const [toolsEnter, setToolsEnter] = useRecoilState(ToolsAlertAtom);

  useEffect(() => {
    setIcons(["resume", "Coding", "Project", "Tools", "Blog", "About"]);
  }, []);

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const {
      currentTarget: { innerText },
    } = e;
    if (innerText === "resume") {
      setIsDisplay((cur) => {
        return { ...cur, Resume: true };
      });
    } else if (innerText === "Coding") {
      setIsDisplay((cur) => {
        return { ...cur, Coding: true };
      });
    } else if (innerText === "Blog") {
      setIsDisplay((cur) => {
        return { ...cur, Blog: true };
      });
    } else if (innerText === "Tools") {
      setIsDisplay((cur) => {
        return { ...cur, Tools: true };
      });

      setToolsEnter(false);
    }
  };
  const clickFront = (e: React.MouseEvent<HTMLDivElement>) => {
    if (highestZIndex >= zIndex) {
      setZIndex(highestZIndex++);
      setHighestZIndex(highestZIndex++);
    }
  };

  const [countIndex, setCountIndex] = useState(-1);
  const onMouseDown = (index: number) => {};

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
          </ImageWrap>
          <QuickBtnWrap>
            {icons.map((icon, index) => (
              <IconWrap
                className={`${icon === "Tools" && toolsEnter ? "active" : ""} ${
                  countIndex === index && "pressed"
                }`}
                key={index}
                onClick={(e) => {
                  onClick(e);
                }}
                onMouseDown={() => {
                  setCountIndex(index);
                }}
                onMouseUp={() => {
                  setCountIndex(-1);
                }}
              >
                <img src={`img/${icon}.png`} alt={icon} />
                <p>{icon}</p>
              </IconWrap>
            ))}
          </QuickBtnWrap>
        </ContentWrap>
      </LauncherContainer>
    </Draggable>
  );
}

export default Launcher;
