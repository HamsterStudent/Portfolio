import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { Bar, Container } from "./pages.style";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { collectError, displayErrorCardAtom, highestZIndexAtom } from "../atom";
import styled from "styled-components";

const CardWrap = styled.section`
  display: flex;
  justify-content: space-around;
`;
const Card = styled.div`
  width: 150px;
  height: 200px;
  margin: 30px;
  border: 0.7px dotted;
`;

const ErrorCard = () => {
  let [highestZIndex, setHighestZIndex] = useRecoilState(highestZIndexAtom);
  let [zIndex, setZIndex] = useState(0);
  const setIsdisplay = useSetRecoilState(displayErrorCardAtom);
  const temp = useRecoilValue(collectError);

  const cardList = [
    { name: "hamster", get: false, data: "Hamster is cute" },
    { name: "duck", get: false, data: "duck is cute" },
    { name: "jelly", get: false, data: "jelly is delicious" },
  ];

  const [cards, setCards] = useState([]);

  useEffect(() => {
    setZIndex(highestZIndex);
    console.log(temp);
  }, []);

  const clickFront = (e: React.MouseEvent<HTMLDivElement>) => {
    if (highestZIndex >= zIndex) {
      setZIndex(highestZIndex++);
      setHighestZIndex(highestZIndex++);
    }
  };

  return (
    <Draggable
      bounds="parent"
      handle=".bar"
      defaultPosition={{ x: 300, y: 200 }}
    >
      <Container windowWidth={`${400}px`} onClick={clickFront} zIndex={zIndex}>
        <Bar className="bar">
          <p>ErrorCard</p>
          <div
            onClick={() => {
              setIsdisplay(false);
            }}
          ></div>
        </Bar>
        <div>
          <CardWrap>
            <Card></Card>
            <Card></Card>
          </CardWrap>
        </div>
      </Container>
    </Draggable>
  );
};

export default ErrorCard;
