import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MarkdownRenderer from "../Components/MarkdownRenderer";
import { Hamster } from "./CodingPosts/PostList";
import ModalWindow from "../Components/ModalWindow";
import { useSetRecoilState } from "recoil";
import { windowDisplayAtom } from "../recoil/atom";

const CodingWrap = styled.section`
  padding: 5px;
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

const CardWrap = styled.ul`
  width: 65%;
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
  border: solid 0.7px;
  padding: 10px;
  margin-bottom: 10px;
  :hover {
    border: solid 0.7px white;
  }
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

const ImageSection = styled.div`
  position: relative;
  width: 34%;
  height: 500px;
  overflow: hidden;
  border: solid 0.7px;
  box-sizing: border-box;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border: solid 1px;
    box-sizing: content-box;
  }
`;

const data = [
  {
    title: "🥬portfolio",
    describe: "포트폴리오 웹사이트 입니다.",
    tags: ["React", "TypeScript", "styled-components"],
    postComponent: ["ProdList"],
    projectImg: "img/coding/portfolio.png",
  },
  {
    title: "🧮Name Sticker",
    describe: "네임스티커를 출력할 수 있는 웹사이트입니다.",
    tags: ["React", "TypeScript", "styled-components"],
    postComponent: ["ProdList"],
    Demo: "https://name-sticker-i5fmwei8c-hamsterstudent.vercel.app/",
    Github: "https://github.com/HamsterStudent/name-sticker",
    projectImg: "img/coding/sticker.png",
  },
  {
    title: "💉Pfizer",
    describe: "국내 화이자 메인 페이지 리디자인 입니다.",
    tags: ["HTML", "SASS", "JavavScirpt"],
    postComponent: ["ProdList"],
    Demo: "https://hamsterstudent.github.io/pfizer-web/",
    Github: "https://github.com/HamsterStudent/pfizer-web",
    projectImg: "img/coding/pf.png",
  },
  {
    title: "🐥댓글창 수정",
    describe: "웹사이트를 유지보수하면서 생긴 수정사항들을 기록했습니다.",
    tags: ["HTML", "SASS", "JavavScirpt"],
    postComponent: ["ProdList"],
    Demo: "https://name-sticker-i5fmwei8c-hamsterstudent.vercel.app/",
    projectImg: "https://huchu.link/MAZKzk3",
  },
];

const Project = () => {
  const [image, setImage] = useState(`${data[0].projectImg}`);
  const setIsDisplay = useSetRecoilState(windowDisplayAtom);
  return (
    <ModalWindow
      width={700}
      windowName="Project"
      defaultPosition={{ x: 300, y: 100 }}
    >
      <CodingWrap>
        <ImageSection>
          <img src={image} alt="" />
        </ImageSection>
        <CardWrap>
          {data.map((data) => {
            return (
              <Card
                key={data.title}
                onMouseEnter={() => {
                  setImage(data.projectImg);
                }}
              >
                <div>
                  <h2>{data.title}</h2>
                  <p>{data.describe}</p>
                  <ul>
                    {data.tags.map((tag) => {
                      return <li key={tag}>{tag}</li>;
                    })}
                  </ul>
                  <div>
                    {data.Demo || data.Github ? <h3>code</h3> : null}
                    {data.Demo ? (
                      <a
                        href={data.Demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                    ) : null}

                    {data.Github ? (
                      <a
                        href={data.Github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </a>
                    ) : null}
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
                  </div>
                </div>
              </Card>
            );
          })}
        </CardWrap>
      </CodingWrap>
    </ModalWindow>
  );
};

export default Project;
