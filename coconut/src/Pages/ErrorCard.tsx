import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import { Bar, Container } from "./pages.style";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { collectError, displayErrorCardAtom, highestZIndexAtom } from "../atom";
import styled from "styled-components";

const CardWrap = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const CardPlace = styled.div`
  width: 120px;
  height: 150px;
  margin-bottom: 10px;
  border: 0.7px dotted;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.4s;
`;
const CardFront = styled.div`
  /*
  background-color: pink;
  width: 100%;
  height: 100%; */
`;
const CardBack = styled.div``;
const DanceFloor = styled.div`
  width: 100%;
  height: 150px;
`;
const ErrorCard = () => {
  let [highestZIndex, setHighestZIndex] = useRecoilState(highestZIndexAtom);
  let [zIndex, setZIndex] = useState(0);
  const setIsdisplay = useSetRecoilState(displayErrorCardAtom);
  const [cardList, setCardList] = useRecoilState(collectError);

  useEffect(() => {
    setZIndex(highestZIndex);
  }, []);

  const allComplete = () => {
    console.log("!!!!congratulation!!!!");
  };

  const clickFront = (e: React.MouseEvent<HTMLDivElement>) => {
    if (highestZIndex >= zIndex) {
      setZIndex(highestZIndex++);
      setHighestZIndex(highestZIndex++);
    }
  };

  const cardFlip = (e: React.MouseEvent) => {
    console.log("flip!", e.currentTarget);
    const {
      currentTarget: { children },
    } = e;
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
            {cardList.map((card, index) => (
              <CardPlace key={index}>
                {card.isGet ? (
                  <Card onClick={cardFlip}>
                    <CardFront>{card.name}</CardFront>
                    <CardBack>{card.describe}</CardBack>
                  </Card>
                ) : null}
              </CardPlace>
            ))}
          </CardWrap>
        </div>
        <DanceFloor></DanceFloor>
      </Container>
    </Draggable>
  );
};

export default ErrorCard;
