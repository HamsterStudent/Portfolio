import React, { useEffect } from "react";
import styled from "styled-components";

const InfoWrap = styled.div`
  padding: 15px;
  width: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: white transparent;
  scrollbar-gutter: auto;
  h2 {
    font: 400 1.4rem "Source Sans 3";
    margin-bottom: 10px;
  }
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    width: 10px;
    background-color: transparent;
    border-radius: 10px;
    border: solid 1px;
  }
  &::-webkit-scrollbar-track {
    width: 10px;
    background-color: transparent;
    border-radius: 10px;
    border: solid 1px;
  }
  .imgWrap {
    width: 10%;
    margin: 10px auto;
    img {
      width: 100%;
      object-fit: contain;
    }
  }
`;

const PreviewWrap = styled.div`
  .previews {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 49.5%;
      border: solid 1px;
      margin-bottom: 10px;
      p {
        text-indent: 10px;
        line-height: 2rem;
        padding-top: 5px;
        /* border-bottom: solid 1px; */
      }
      &:hover {
        background-color: #ffffff40;
        transition: 0.2s ease-out;
      }
    }
    .wide {
      width: 100%;
    }
  }
`;

const ImgWrap = styled.div`
  width: 98%;
  height: 300px;
  margin: 10px auto;
  border: solid 1px;
  max-height: 350px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;
export default function Overview({
  tabList,
  handleTabClick,
}: {
  tabList: string[];
  handleTabClick: any;
}) {
  let tabListCopy = tabList.slice();
  tabListCopy.shift();

  return (
    <InfoWrap>
      <h2>About</h2>
      <p>
        안녕하세요.
        <br />
        나모 웹 에디터를 사용해본 때 부터 웹을 좋아해 온 FE developer 입니다.
        <br /> 책상을 보면 그 사람의 관심사나 개성을 짐작할 수 있듯, 저는 어떤
        하나의 공간을 꾸리는 것에 관심이 많습니다. <br />이 관심은 점차 확장되고
        구체화되어, 물리적 공간을 마련하는 것이 귀해진 이 시대에서 사람들, 개인
        혹은 기업이 자신의 공간을 가상에서 가질 수 있게 돕고 싶다는 생각이
        강해졌고, 그런 공간들을 웹사이트로써 만들어 보고 있습니다.
        <br />
      </p>
      <div className="imgWrap">
        <img src="assets/project/computer.png" alt="" />
      </div>
      <PreviewWrap>
        <h2>Project Preview</h2>
        <ul className="previews">
          {tabListCopy.map((x, idx) => {
            return (
              <li
                className={
                  x === "guardtips" || x === "portfolio" ? "wide" : undefined
                }
                key={x}
                onClick={() => {
                  handleTabClick(x);
                }}
              >
                <p>{x}</p>
                <ImgWrap>
                  <img src={`assets/project/${x}.png`} alt="" />
                </ImgWrap>
              </li>
            );
          })}
        </ul>
      </PreviewWrap>
    </InfoWrap>
  );
}
