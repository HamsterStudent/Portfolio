import React, { useState } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";

const Container = styled.div<ICoding>`
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
  zIndex: number;
}
const Coding = ({ zIndex }: ICoding) => {
  const [zIndexNum, setZIndexNum] = useState(zIndex);
  const clickFront = () => {
    setZIndexNum(zIndex++);
  };
  return (
    <>
      <Draggable
        bounds="parent"
        handle=".bar"
        defaultPosition={{ x: 0, y: 10 }}
      >
        <Container onClick={clickFront} zIndex={zIndexNum}>
          <Bar className="bar">Bar</Bar>
          <div>Coding</div>
        </Container>
      </Draggable>
    </>
  );
};

export default Coding;
