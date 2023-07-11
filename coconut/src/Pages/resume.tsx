import React, { useRef, useState, useEffect } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";
import { Container, Bar } from "./pages.style";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { displayResumeAtom, highestZIndexAtom } from "../atom";

const ContentWrap = styled.section`
  /* width: 100%; */
  font-size: 14px;
  border: solid 1px;
  padding: 20px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  box-shadow: #f0f0f042 1px 1px inset;
  h2 {
    font-size: 22px;
    padding: 10px 0;
    border-bottom: solid 1px;
  }
  p {
    margin: 10px 0;
  }
`;

const ImageWrap = styled.div`
  width: 300px;
  margin-bottom: 10px;
  img {
    width: 100%;
    object-fit: contain;
    border: solid 1px;
    box-sizing: content-box;
  }
`;

const ContentBox = styled.div`
  margin-right: 30px;
  line-height: 20px;
  :nth-child(2) {
    margin-right: 0;
  }
  p {
    text-indent: 5px;
  }
  a {
    :hover {
      color: #e4e4e4;
    }
  }
`;

function Resume() {
  let [highestZIndex, setHighestZIndex] = useRecoilState(highestZIndexAtom);
  let [zIndex, setZIndex] = useState(0);
  const setIsdisplay = useSetRecoilState(displayResumeAtom);

  useEffect(() => {
    setZIndex(highestZIndex);
  }, []);

  const clickFront = (e: React.MouseEvent<HTMLDivElement>) => {
    if (highestZIndex >= zIndex) {
      setZIndex(highestZIndex++);
      setHighestZIndex(highestZIndex++);
    }
  };

  return (
    <>
      <Draggable
        bounds="parent"
        handle=".bar"
        defaultPosition={{ x: 30, y: 50 }}
      >
        <Container
          onClick={clickFront}
          zIndex={zIndex}
          windowWidth={`${850}px`}
        >
          <Bar className="bar">
            Resume
            <div
              onClick={() => {
                setIsdisplay(false);
              }}
            ></div>
          </Bar>
          <ContentWrap>
            <ContentBox>
              <ImageWrap>
                <img src="img/profile.jpg" alt="" />
              </ImageWrap>
              <h2>엄진주 | JINJU UM</h2>
              <p>
                웹의 기획부터 디자인, 코드를 사용해 시각적으로 구현해내는 것에
                관심이 있음.
              </p>
              <p>
                시작한 일은 끝을 봐야 속이 시원한 사람. 다방면으로 아끼는 걸
                좋아하는 사람
              </p>
              <h2>Contact</h2>
              <p>
                <a href="mailto:deerinmymind@gmail.com">
                  deerinmymind@gmail.com
                </a>
              </p>
            </ContentBox>
            <ContentBox>
              <h2>ABOUT</h2>
              <p>
                디자인과 회화를 배우며 우리 주변에 있는 것들을 재구성하고 다시
                조립하면서 알게된 것 중 한가지는 세상의 많은 것들이 여러 번의
                정리정돈과 수정하는 과정을 통해 제 아야기를 꾸리고, 그 안에서 그
                자신만의 독창성을 지니게 된다는 것이었습니다.
              </p>
              <p>
                탄생한 지 얼마 되지 않은 행성들이 항성 근처에 편입하게 되는
                과정에서 으레 그렇듯, 많은 것들이 항성 근처에 중력으로 묶이며
                항성과 너무 가까워져 흡수되어버리기도 하고, 다른 행성들과 부딪혀
                없어지기도 하지만, 이 과정을 지나고 나면 행성은 항성을 중심으로
                궤도를 그리며 그 자신의 세상을 꾸리고는 합니다. 핵분열과
                대기순환 등을 통해, 또 자신만의 위성을 거느리기도 하면서.
              </p>
              <p>
                이와 같이, 저의 많은 작업과 시도들은 '나'라는 존재 주변에
                편입하기 위해 깎여 나가기도 하고 다른 것들과 부딪혀 깨지고
                사라지기도 하지만, 결국 안정적으로 궤도에 오르게 되는 것들은
                '나'를 중심으로 원을 그리며 그 개개의 세상을 그려나갑니다. 여러
                번의 '수정' 이라는 과정을 통해서. 이렇게 저와 작업물들은
                끊임없이 변화하며 더 나은 모습을 꾀하고 있습니다.
              </p>
            </ContentBox>
          </ContentWrap>
        </Container>
      </Draggable>
    </>
  );
}

export default Resume;
