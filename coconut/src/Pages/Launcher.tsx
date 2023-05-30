import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";
import Resume from "./resume";
import Coding from "./Coding";
import Modals from "../Components/Modals";

const Container = styled.div<ILauncher>`
  width: 600px;
  height: auto;
  background-color: ${(props) => props.theme.windowBg};
  box-shadow: ${(props) => props.theme.windowShadow};
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${(props) => props.zIndex};
  border: solid 0.7px;
  box-sizing: border-box;
`;
const Bar = styled.div`
  width: 100%;
  height: 20px;
  background-color: ${(props) => props.theme.windowBarColor};
`;
const ContentWrap = styled.section`
  width: 100%;
  height: auto;
`;
const MainImg = styled.img`
  width: 100%;
  object-fit: contain;
`;
const QuickBtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const QuickBtn = styled.div`
  width: 16.6%;
  border-right: dotted 0.7px;
  background-color: aqua;
`;
const BtnImg = styled.img`
  width: 100%;
  object-fit: contain;
`;
const BtnTitle = styled.p`
  text-align: center;
`;

interface ILauncher {
  zIndex?: number;
}

function Launcher() {
  const dragRef = useRef<HTMLDivElement>(null);
  const [icons, setIcons] = useState<any>([]);
  const [isResume, setIsResume] = useState(false);
  const [isCoading, setIsCoading] = useState(false);
  let [zIndex, setZIndex] = useState(0);
  useEffect(() => {
    setIcons(["resume", "Coding", "Design", "Tools", "Blog", "About"]);
  }, []);
  const onClick = (e: any) => {
    const clickIconText = e.currentTarget.innerText;
    if (clickIconText === "resume") {
      setIsResume(true);
      if (isResume) {
      }
    } else if (clickIconText === "Coding") {
      setIsCoading(true);
    }
    console.log(e.currentTarget.innerText);
  };
  const clickFront = (e: any) => {
    setZIndex(zIndex + 3);
  };
  return (
    <>
      <Draggable
        nodeRef={dragRef}
        bounds="parent"
        handle=".bar"
        defaultPosition={{ x: -300, y: -310 }}
      >
        <Container ref={dragRef} className="container" zIndex={zIndex}>
          <Bar className="bar" onClick={clickFront}>
            bar
          </Bar>
          <ContentWrap>
            <MainImg src="img/temp.jpg" alt="temp" />
            <QuickBtnWrap>
              {icons.map((icon: any) => (
                <QuickBtn
                  key={icon}
                  onClick={(e) => {
                    onClick(e);
                  }}
                >
                  <BtnImg src={`img/${icon}.gif`} />
                  <BtnTitle>{icon}</BtnTitle>
                </QuickBtn>
              ))}
            </QuickBtnWrap>
          </ContentWrap>
        </Container>
      </Draggable>
      {isResume ? <Resume zIndex={zIndex++} /> : null}
      {isCoading ? <Coding zIndex={zIndex++} /> : null}
    </>
  );
}

export default Launcher;
