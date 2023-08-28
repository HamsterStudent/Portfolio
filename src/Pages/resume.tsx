import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import ModalWindow from "../Components/ModalWindow";

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
  return (
    <ModalWindow
      width={850}
      windowName="Resume"
      defaultPosition={{ x: 30, y: 50 }}
    >
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
            <a href="mailto:deerinmymind@gmail.com">deerinmymind@gmail.com</a>
          </p>
        </ContentBox>
        <ContentBox>
          <h2>Skill Set</h2>
        </ContentBox>
      </ContentWrap>
    </ModalWindow>
  );
}

export default Resume;
