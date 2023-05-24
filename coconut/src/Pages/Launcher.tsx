import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";
const Container = styled.div`
  width: 600px;
  height: auto;
  background-color: plum;
  box-shadow: inset -1px -1px 0 0 var(--tertiary), inset 1px 1px 0 0 #fff,
    5px 5px 0 #0003;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Bar = styled.div`
  width: 100%;
  height: 20px;
  background-color: aqua;
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
  height: 100px;
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

function Launcher() {
  const dragRef = useRef<HTMLDivElement>(null);
  const [icons, setIcons] = useState<any>([]);
  const [test, setTest] = useState();
  useEffect(() => {
    setIcons(["resume", "Coding", "Design", "Tools", "Blog", "About"]);
  }, []);

  const onClick = (e: any) => {
    console.log(e);
  };
  return (
    <Draggable
      nodeRef={dragRef}
      bounds="parent"
      handle=".bar"
      defaultPosition={{ x: -300, y: -310 }}
    >
      <Container ref={dragRef} className="container">
        <Bar className="bar">bar</Bar>
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
  );
}

export default Launcher;
