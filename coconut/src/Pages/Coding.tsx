import React, { useState } from "react";
import Draggable from "react-draggable";
// import styled from "styled-components";
import * as styled from "./pages.style";

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
        <styled.Container onClick={clickFront} zIndex={zIndexNum}>
          <styled.Bar className="bar">Bar</styled.Bar>
          <div>Coding</div>
        </styled.Container>
      </Draggable>
    </>
  );
};

export default Coding;
