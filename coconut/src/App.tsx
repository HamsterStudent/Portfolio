import React, { useRef, useState } from "react";
import Header from "./Components/Header";
import styled from "styled-components";
// import Info from "./Pages/Info";

const Info = styled.div`
  width: 30vw;
  height: 30vh;
  background-color: plum;
  position: absolute;
`;

const Draggable = styled.section`
  /* margin-top: -1px;
  height: calc(100% + 1px); */
  width: 50%;
  height: 500px;
  margin: 0 auto;
  background-color: tomato;
  position: relative;
`;
const AppWrap = styled.section`
  height: 100vh;
`;

function App() {
  const container = useRef<HTMLDivElement>(null);
  const dragComponent = useRef<HTMLDivElement>(null);
  const [initialPos, setInitialPos] = useState({ x: 0, y: 0 });
  const [clientPos, setClientPos] = useState({ x: 0, y: 0 });
  const [pos, setPos] = useState({ left: 0, top: 0 });
  const [isDrag, setIsDrag] = useState(false);

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    const temp = { ...initialPos };
    temp["x"] = e.currentTarget.offsetLeft;
    temp["y"] = e.currentTarget.offsetTop;
    console.log("initialPosTemp", temp);
    setInitialPos(temp);

    const clientTemp = { ...clientPos };
    clientTemp["x"] = e.clientX;
    clientTemp["y"] = e.clientY;
    setClientPos(clientTemp);
  };
  const onDrag = (e: React.DragEvent<HTMLDivElement>) => {
    if (isDrag) {
      const posTemp = { ...pos };
      posTemp["left"] = e.currentTarget.offsetLeft + e.clientX - clientPos.x;
      posTemp["top"] = e.currentTarget.offsetTop + e.clientY - clientPos.y;

      setPos(posTemp);

      const clientPosTemp = { ...clientPos };
      clientPosTemp["x"] = e.clientX;
      clientPosTemp["y"] = e.clientY;
      setClientPos(clientPosTemp);
    }
  };
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.currentTarget.offsetLeft < 0 && e.currentTarget.offsetTop < 0) {
      setIsDrag(false);
      setPos({
        left: 0,
        top: 0,
      });
    } else if (e.currentTarget.offsetLeft < 0) {
      setIsDrag(false);
      setPos({
        left: 0,
        top: e.currentTarget.offsetTop + e.clientY - clientPos.y,
      });
    } else if (e.currentTarget.offsetTop < 0) {
      setIsDrag(false);
      setPos({
        left: e.currentTarget.offsetLeft + e.clientX - clientPos.x,
        top: 0,
      });
    } else {
      setIsDrag(true);
    }
    console.log("over!!");
  };
  const isInsideDragArea = (e: any) => {
    if (e.clientX < 0 || e.clientY < 0) {
      return false;
    } else {
      return true;
    }
  };
  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    // if (!isInsideDragArea(e)) {
    //   const posTemp = { ...pos };
    //   posTemp["left"] = initialPos.x;
    //   posTemp["top"] = initialPos.y;
    //   setPos(posTemp);
    // }
    console.log("end");
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    setIsDrag(false);
    console.log("leave");
  };

  return (
    <AppWrap className="App">
      <Header />
      <Draggable ref={container}>
        <Info
          ref={dragComponent}
          draggable
          onDragStart={(e) => onDragStart(e)}
          onDrag={(e) => onDrag(e)}
          onDragOver={(e) => onDragOver(e)}
          onDragEnd={(e) => onDragEnd(e)}
          onDragLeave={(e) => onDragLeave(e)}
          style={{ left: pos.left, top: pos.top }}
        />
      </Draggable>
    </AppWrap>
  );
}

export default App;
