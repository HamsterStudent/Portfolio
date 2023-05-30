import React, { useRef } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";

const Container = styled.div`
  width: 350px;
  height: auto;
  background-color: ${(props) => props.theme.windowBg};
  box-shadow: ${(props) => props.theme.windowShadow};
  margin: 0;
  position: absolute;
  top: 50%;
  right: 0;
`;
const Bar = styled.div`
  width: 100%;
  height: 20px;
  background-color: aqua;
`;

function Guestbook() {
  return (
    <Draggable
      bounds="parent"
      handle=".bar"
      defaultPosition={{ x: 30, y: 150 }}
    >
      <Container>
        <Bar className="bar">bar</Bar>
        <div>helloWorld</div>
      </Container>
    </Draggable>
  );
}

export default Guestbook;
