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
  margin-top: -1px;
  height: calc(100% + 1px);
  width: 100%;
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

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    // 고스트이미지 제거
    // var img = new Image();
    // img.src =
    //   "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
    // e.dataTransfer.setDragImage(img, 0, 0);

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
    if (e.currentTarget.offsetLeft < 0) {
      const temp = { ...pos };
      // 비져나가지 않게 하기
      if (e.currentTarget.offsetTop < 0) {
        temp["top"] = 0;
        temp["left"] = e.currentTarget.offsetLeft + e.clientX - clientPos.x;
        setPos(temp);
      }

      temp["left"] = 0;
      temp["top"] = e.currentTarget.offsetTop + e.clientY - clientPos.y;
      setPos(temp);
    } else {
      const posTemp = { ...pos };
      posTemp["left"] = e.currentTarget.offsetLeft + e.clientX - clientPos.x;
      posTemp["top"] = e.currentTarget.offsetTop + e.clientY - clientPos.y;

      setPos(posTemp);

      const clientPosTemp = { ...clientPos };
      clientPosTemp["x"] = e.clientX;
      clientPosTemp["y"] = e.clientY;
      setClientPos(clientPosTemp);
    }

    // console.log(container.current?.clientWidth);

    // console.log(e.currentTarget.offsetLeft);
    // if (e.currentTarget.offsetLeft <= 0) {
    // } else {
    // }
  };
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
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
          style={{ left: pos.left, top: pos.top }}
        />
      </Draggable>
    </AppWrap>
  );
}

export default App;
