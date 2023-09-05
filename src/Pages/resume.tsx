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
  flex-wrap: wrap;
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
  line-height: 20px;
  :nth-child(1) {
    width: 38%;
  }
  :nth-child(2) {
    width: 60%;
    margin-right: 0;
  }
  h3 {
    font-size: 16px;
    font-weight: 400;
  }
  p {
    /* text-indent: 5px; */
  }
  a {
    :hover {
      color: #e4e4e4;
    }
  }
  div {
  }
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    width: 49.5%;
  }
  .education {
    p {
      margin: 0;
    }
    h3 {
      font-weight: 700;
      margin: 5px 0;
    }
    li {
      font-size: 12px;
    }
  }
`;

const SkillSetWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
  box-sizing: border-box;
  div {
    width: 30px;
  }
  img {
    width: 100%;
    object-fit: contain;
  }
  h3 {
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
          <p>1996.03.25</p>
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
          <h2>Notion Resume</h2>
          <a href="https://respected-honey-7eb.notion.site/8f80be93ee194cff9a99b188a1c6651f?pvs=4">
            notion
          </a>
        </ContentBox>
        <ContentBox>
          <h2>Education</h2>
          <FlexBox>
            <div className="education">
              <p>2016.03 - 2020.02</p>
              <h3>한성대학교</h3>
              <ul>
                <li>주전공 : 서양화과</li>
                <li>복수전공 : 융복합디자인학과</li>
              </ul>
            </div>
            <div className="education">
              <p>2020.08 - 2021.01</p>
              <h3>그린컴퓨터아카데미</h3>
              <ul>
                <li>프론트엔드 웹퍼블리셔 양성과정 수료</li>
              </ul>
            </div>
          </FlexBox>

          <h2>Win the award</h2>
          <p>2019</p>
          <h3>제주 지역 문제해결 디지털 사회혁신 아이디어 경진대회</h3>
          <p>
            제주 테크노파크와 제주 특별자치도에서 주최한
            <br />
            제주 지역 문제해결 디지털 사회혁신 아이디어 경진대회 입선
          </p>

          <h2>Skill Set</h2>

          <SkillSetWrap>
            <h3>Javascript library</h3>
            <div>
              <img src="img/skill/React.png" alt="" />
            </div>
          </SkillSetWrap>

          <SkillSetWrap>
            <h3>Languages</h3>
            <div>
              <img src="img/skill/TypeScript.png" alt="" />
            </div>
            <div>
              <img src="img/skill/Javascript.png" alt="" />
            </div>
            <div>
              <img src="img/skill/Dart.png" alt="" />
            </div>
            <div>
              <img src="img/skill/Flutter.png" alt="" />
            </div>
            <div>
              <img src="img/skill/c.png" alt="" />
            </div>
          </SkillSetWrap>

          <SkillSetWrap>
            <h3>Markup & Style sheet</h3>
            <div>
              <img src="img/skill/html.png" alt="" />
            </div>
            <div>
              <img src="img/skill/css.png" alt="" />
            </div>
          </SkillSetWrap>

          <SkillSetWrap>
            <h3>API & Git & Testing</h3>
            <div>
              <img src="img/skill/GraphQL.png" alt="" />
            </div>
            <div>
              <img src="img/skill/git.png" alt="" />
            </div>
            <div>
              <img src="img/skill/Firebase.png" alt="" />
            </div>
            <div>
              <img src="img/skill/Jest.png" alt="" />
            </div>
          </SkillSetWrap>
        </ContentBox>
      </ContentWrap>
    </ModalWindow>
  );
}

export default Resume;
