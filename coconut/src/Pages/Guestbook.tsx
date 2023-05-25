import React, { useRef } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";

const Container = styled.div<IGuestBook>`
  width: 600px;
  height: auto;
  background-color: plum;
  box-shadow: inset -1px -1px 0 0 var(--tertiary), inset 1px 1px 0 0 #fff,
    5px 5px 0 #0003;
  margin: 0;
  display: ${(props) => (props.display ? "block" : "none")};
`;

interface IGuestBook {
  display: boolean;
  nodeRef?: React.RefObject<HTMLDivElement>;
}

function Guestbook({ nodeRef, display }: IGuestBook) {
  console.log(display);
  return (
    <Draggable nodeRef={nodeRef} bounds="parent">
      <Container display={display}>
        <div>helloWorld</div>
      </Container>
    </Draggable>
  );
}

export default Guestbook;
