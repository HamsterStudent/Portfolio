import React, { useState } from "react";
import Draggable from "react-draggable";
// import styled from "styled-components";
import { Container, Bar } from "./pages.style";

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
        defaultPosition={{ x: 350, y: 10 }}
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
