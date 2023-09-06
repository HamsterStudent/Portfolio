import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MarkdownRenderer from "../Components/MarkdownRenderer";
import { Hamster } from "./CodingPosts/PostList";
import ModalWindow from "../Components/ModalWindow";
import { useSetRecoilState } from "recoil";
import { windowDisplayAtom } from "../recoil/atom";

const CodingWrap = styled.section`
  font-size: 14px;
  border: solid 1px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  h2 {
    font-size: 22px;
    padding: 10px 0;
    border-bottom: solid 1px;
  }
  p {
    margin: 10px 0;
  }
`;
const ImageSection = styled.section`
  width: 29%;
  background-color: pink;
`;
const CardWrap = styled.ul`
  width: 70%;
  height: 500px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow-y: scroll;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
`;
const Card = styled.li`
  width: 100%;
  background-color: antiquewhite;
  padding: 10px;
  margin-bottom: 10px;
  h3 {
    margin: 10px 0;
  }
  a {
    border: dotted 0.7px;
    padding: 3px 5px;
    margin-right: 5px;
    border-radius: 5px;
  }
`;

const ImageWrap = styled.div`
  width: 100%;
  margin-bottom: 10px;
  img {
    width: 100%;
    object-fit: contain;
    border: solid 1px;
    box-sizing: content-box;
  }
`;

const data = [
  {
    title: "🧮Name Sticker",
    describe: "네임스티커를 출력할 수 있는 웹사이트입니다.",
    tag: ["React", "TypeScript", "styled-components"],
    postComponent: ["ProdList"],
    Demo: "https://name-sticker-i5fmwei8c-hamsterstudent.vercel.app/",
    Github: "https://github.com/HamsterStudent/name-sticker",
    projectImg: "https://huchu.link/FihXTqD",
  },
];

const Coding = () => {
  const setIsDisplay = useSetRecoilState(windowDisplayAtom);
  return (
    <ModalWindow
      width={600}
      windowName="Coding"
      defaultPosition={{ x: 350, y: 10 }}
    >
      <CodingWrap>
        <ImageSection>image</ImageSection>
        <CardWrap>
          <Card>
            <div>
              <h2>{data[0].title}</h2>
              <p>{data[0].describe}</p>
              <ul>
                {data[0].tag.map((x) => {
                  return <li>{x}</li>;
                })}
              </ul>
              <div>
                <h3>log</h3>
                <button
                  onClick={() => {
                    setIsDisplay((cur) => {
                      return { ...cur, ProdList: true };
                    });
                  }}
                >
                  sessionStorage 구현
                </button>
                <button
                  onClick={() => {
                    setIsDisplay((cur) => {
                      return { ...cur, ProdList: true };
                    });
                  }}
                >
                  폰트 변경 구현
                </button>
                <h3>code</h3>
                <a
                  href="https://name-sticker-i5fmwei8c-hamsterstudent.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/HamsterStudent/name-sticker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </Card>
          <Card>
            <div>
              <h2>title</h2>
              <div>see more</div>
            </div>
          </Card>
          <Card>
            <div>
              <h2>title</h2>
              <div>see more</div>
            </div>
          </Card>
          <Card>
            <div>
              <h2>title</h2>
              <div>see more</div>
            </div>
          </Card>
          <Card>
            <div>
              <h2>title</h2>
              <div>see more</div>
            </div>
          </Card>
        </CardWrap>
      </CodingWrap>
    </ModalWindow>
  );
};

export default Coding;
