import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import ModalWindow from "../Components/ModalWindow";
import Sticker from "../Components/Sticker";
import useDisplaySticker from "../Hooks/useDisplaySticker";

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
    color: ${(props) => props.theme.textColor};
  }
  p {
    margin: 10px 0;
    color: ${(props) => props.theme.textColor};
  }
`;

const ImageWrap = styled.div`
  width: 301px;
  height: 203px;
  margin-bottom: 10px;
  position: relative;
  img {
    width: 100%;
    object-fit: contain;
    border: solid 1px;
    box-sizing: content-box;
  }
  .overlay {
    width: 100%;
    height: 100%;
    background: url("img/dot.png");
    background-size: 2px 2px;
    position: absolute;
    top: 0;
    opacity: 0.5;
  }
`;

const ContentBox = styled.div`
  line-height: 20px;
  .imageWrap {
    width: 30px;
    height: 30px;
    margin-top: 5px;
    img {
      width: 100%;
      object-fit: contain;
    }
  }
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
    color: ${(props) => props.theme.textColor};
  }
  p {
    /* text-indent: 5px; */
    font-size: 14px;
    word-break: keep-all;
    color: ${(props) => props.theme.textColor};
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
    margin: 10px 0;
    p {
      margin: 0;
    }
    h3 {
      font-weight: 700;
      margin: 5px 0;
    }
    li {
      font-size: 12px;
      color: ${(props) => props.theme.textColor};
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
  const stickerName = "javascript";
  const { displaySticker, setDisplaySticker } = useDisplaySticker(stickerName);

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
            <div className="overlay" data-overlay></div>
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
          <a
            href="https://respected-honey-7eb.notion.site/8f80be93ee194cff9a99b188a1c6651f?pvs=4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="imageWrap">
              <img src="img/skill/notion.png" alt="" />
            </div>
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
      {displaySticker ? (
        <Sticker
          name={stickerName}
          width={100}
          defaultPosition={{ x: 350, y: 120 }}
          setSricker={setDisplaySticker}
        />
      ) : null}
    </ModalWindow>
  );
}

export default Resume;
