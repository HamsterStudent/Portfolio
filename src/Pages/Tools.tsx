import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { collectSticker } from "../recoil/atom";
import styled, { keyframes } from "styled-components";
import ModalWindow from "../Components/ModalWindow";

const CardWrap = styled.section`
  font-family: "galmuri11";
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: white;
  border: solid 0.7px;
  margin: 5px;
  background: url("img/paper.jpg");
  background-position: center;
  background-size: cover;
  h3 {
    width: 100%;
    text-align: center;
    background-color: #90ffff;
    color: #2b2b2b;
    border-bottom: solid 0.7px;
  }
`;
const CardPlace = styled.div`
  width: 120px;
  /* height: 150px; */
  margin-bottom: 10px;
`;

const Card = styled.div`
  text-align: center;
  position: relative;
  transition: 0.4s;
  div {
    width: 100%;
    height: 100px;
    img {
      width: 85%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
const animation = keyframes`
 0% { top: 0; } 20% { top: -0.2rem; } 40% { top: 0 } 60% { top: 0 } 80% { top: 0 } 100% { top: 0 }
`;
const DanceFloor = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: dashed 1px;
  margin: 10px;
  div {
    font-size: 30px;
  }

  .test_obj {
    p {
      font-size: 16px;
      text-align: center;
    }
  }
  .test_obj span {
    color: palevioletred;
    position: relative;
    animation: ${animation} 1.4s infinite;
  }

  .test_obj span:nth-of-type(1) {
    animation-delay: 0.1s;
    margin-right: 10px;
  }

  .test_obj span:nth-of-type(2) {
    animation-delay: 0.2s;
  }

  .test_obj span:nth-of-type(3) {
    animation-delay: 0.3s;
  }

  .test_obj span:nth-of-type(4) {
    animation-delay: 0.4s;
  }

  .test_obj span:nth-of-type(5) {
    animation-delay: 0.5s;
  }
  .test_obj span:nth-of-type(6) {
    animation-delay: 0.6s;
  }
  .test_obj span:nth-of-type(7) {
    animation-delay: 0.7s;
  }
  .test_obj span:nth-of-type(8) {
    animation-delay: 0.8s;
  }
  .test_obj span:nth-of-type(9) {
    animation-delay: 0.9s;
  }
  .test_obj span:nth-of-type(10) {
    animation-delay: 1s;
  }
  .test_obj span:nth-of-type(11) {
    animation-delay: 1.1s;
  }
  .test_obj span:nth-of-type(12) {
    animation-delay: 1.2s;
  }
  .test_obj span:nth-of-type(13) {
    animation-delay: 1.3s;
  }
  .test_obj span:nth-of-type(14) {
    animation-delay: 1.4s;
  }
  .test_obj span:nth-of-type(15) {
    animation-delay: 1.5s;
  }
  .test_obj span:nth-of-type(16) {
    animation-delay: 1.6s;
  }
  .test_obj span:nth-of-type(17) {
    animation-delay: 1.7s;
    margin-left: 5px;
  }
`;

const Tools = () => {
  const [cardList, setCardList] = useRecoilState(collectSticker);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let count = 0;
    cardList.map((x) => {
      if (!x.isGet) {
        count++;
      }
    });
    if (count > 0) {
      setIsComplete(false);
    } else {
      setIsComplete(true);
      allComplete();
    }
  }, [cardList]);

  const allComplete = () => {
    console.log("!!!!congratulation!!!!");
  };

  const cardFlip = (e: React.MouseEvent) => {
    console.log("flip!", e.currentTarget);
    const {
      currentTarget: { children },
    } = e;
  };
  return (
    <ModalWindow
      width={500}
      windowName="Tools"
      defaultPosition={{ x: 300, y: 200 }}
    >
      <CardWrap>
        <h3>8 items</h3>
        {cardList.map((card, index) => (
          <CardPlace key={index}>
            {card.isGet ? (
              <Card onClick={cardFlip}>
                <div>
                  <img src={`${card.fruit}`} alt={`${card.name}`} />
                </div>
                {/* <p>{card.describe}</p> */}
              </Card>
            ) : null}
          </CardPlace>
        ))}
        <DanceFloor>
          {isComplete === false ? (
            "Find more sticker"
          ) : (
            <>
              <div className="test_obj">
                <span>
                  <img src="img/icon/basket_metal.png" alt="" />
                </span>
                <span>C</span>
                <span>o</span>
                <span>n</span>
                <span>g</span>
                <span>r</span>
                <span>a</span>
                <span>t</span>
                <span>u</span>
                <span>l</span>
                <span>a</span>
                <span>t</span>
                <span>i</span>
                <span>o</span>
                <span>n</span>
                <span>!</span>
                <span>
                  <img src="img/icon/basket_yellow.png" alt="" />
                </span>
                <p>You collected all sticker</p>
              </div>
            </>
          )}
        </DanceFloor>
      </CardWrap>
    </ModalWindow>
  );
};

export default Tools;
