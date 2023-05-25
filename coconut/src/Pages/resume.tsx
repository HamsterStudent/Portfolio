import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import styled from "styled-components";

const Container = styled.div<IResume>`
  width: 600px;
  height: auto;
  background-color: plum;
  box-shadow: inset -1px -1px 0 0 var(--tertiary), inset 1px 1px 0 0 #fff,
    5px 5px 0 #0003;
  margin: 0;
  position: relative;
  display: ${(props) => (props.isDisplay ? "block" : "none")};
  z-index: ${(props) => props.zIndex};
`;
const Bar = styled.div`
  width: 100%;
  height: 20px;
  background-color: aqua;
`;
interface IResume {
  isDisplay: boolean;
  zIndex: number;
}

function Resume({ isDisplay, zIndex }: IResume) {
  const [zIndexNum, setZIndexNum] = useState(zIndex);
  const clickFront = () => {
    setZIndexNum(zIndex++);
  };
  return (
    <Draggable bounds="parent" handle=".bar">
      <Container onClick={clickFront} isDisplay={isDisplay} zIndex={zIndexNum}>
        <Bar className="bar">bar</Bar>
        <div>
          디자인과 회화를 배우며 우리 주변에 있는 것들을 재구성하고 다시
          조립하면서 알게된 것 중 한가지는 세상의 많은 것들이 여러 번의
          정리정돈과 수정하는 과정을 통해 제 아야기를 꾸리고, 그 안에서 그
          자신만의 독창성을 지니게 된다는 것이었습니다. 탄생한 지 얼마 되지 않은
          행성들이 항성 근처에 편입하게 되는 과정에서 으레 그렇듯, 많은 것들이
          항성 근처에 중력으로 묶이며 항성과 너무 가까워져 흡수되어버리기도
          하고, 다른 행성들과 부딪혀 없어지기도 하지만, 이 과정을 지나고 나면
          행성은 항성을 중심으로 궤도를 그리며 그 자신의 세상을 꾸리고는 합니다.
          핵분열과 대기순환 등을 통해, 또 자신만의 위성을 거느리기도 하면서.
          이와 같이, 저의 많은 작업과 시도들은 '나'라는 존재 주변에 편입하기
          위해 깎여 나가기도 하고 다른 것들과 부딪혀 깨지고 사라지기도 하지만,
          결국 안정적으로 궤도에 오르게 되는 것들은 '나'를 중심으로 원을 그리며
          그 개개의 세상을 그려나갑니다. 여러 번의 '수정' 이라는 과정을 통해서.
          이렇게 저와 작업물들은 끊임없이 변화하며 더 나은 모습을 꾀하고
          있습니다.
        </div>
      </Container>
    </Draggable>
  );
}

export default Resume;
