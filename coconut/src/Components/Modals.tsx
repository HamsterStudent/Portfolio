import React, { useState } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";
import Guestbook from "../Pages/Guestbook";
import Resume from "../Pages/resume";
import Coding from "../Pages/Coding";

const Container = styled.div<IZIndex>`
  width: 350px;
  height: auto;
  background-color: plum;
  box-shadow: inset -1px -1px 0 0 var(--tertiary), inset 1px 1px 0 0 #fff,
    5px 5px 0 #0003;
  margin: 0;
  position: absolute;
  top: 0%;
  right: 5%;
  z-index: ${(props) => props.zIndex};
`;
const Bar = styled.div`
  width: 100%;
  height: 20px;
  background-color: aqua;
`;
interface ICoding {
  defaultX: number;
  defaultY: number;
}
type IZIndex = {
  zIndex: number;
};
const Modals = ({ zIndex }: any, { defaultX, defaultY }: ICoding) => {
  const [zIndexNum, setZIndexNum] = useState(zIndex);
  const clickFront = () => {
    setZIndexNum(zIndex++);
  };
  console.log(defaultX);
  return (
    <>
      <Draggable
        bounds="parent"
        handle=".bar"
        defaultPosition={{ x: defaultX, y: defaultY }}
      >
        <Container onClick={clickFront} zIndex={zIndexNum}>
          <Bar className="bar">Im modal Bar</Bar>
          sadsdas
          {/* {name === "resume" ? (
            <Resume zIndex={30} />
          ) : name === "Guestbook" ? (
            <Guestbook />
          ) : name === "Coding" ? (
            <Coding />
          ) : null} */}
        </Container>
      </Draggable>
    </>
  );
};

export default Modals;
