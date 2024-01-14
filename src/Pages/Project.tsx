import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ModalWindow from "../shared/components/ModalWindow";
import { useSetRecoilState } from "recoil";
import { windowDisplayAtom } from "../recoil/atom";
import Sticker from "../shared/components/Sticker";
import { useMediaQuery } from "react-responsive";
interface IDisplay {
  isDesktop: boolean;
}
/* height: ${(props) => (props.isDesktop ? "auto" : "580px")}; */
const ContentsWrap = styled.section<IDisplay>`
  height: calc(100% - 20px);
  max-width: 1200px;
  padding: 15px;
  margin: 10px auto;
  font-size: 14px;
  border: solid 1px;
  display: flex;
`;

const CategoryWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: solid 1px;
`;

const ProjectList = styled.ul``;

const SNS = styled.ul``;

const InfoWrap = styled.div`
  padding: 15px;
  overflow-y: scroll;
  scrollbar-width: none;
`;

interface IData {
  title: string;
  describe: string;
  tags: string[];
  postComponent?: { [key: string]: string }[];
  Demo?: string;
  Github?: string;
  Notion?: string;
  projectImg: string;
}

const projects: IData[] = [
  {
    title: "overview",
    describe: "포트폴리오 웹사이트",
    tags: ["React", "TypeScript", "Recoil", "styled-components"],
    Notion:
      "https://respected-honey-7eb.notion.site/c6b75d5e4dd340f8a237dc4e8f5c7eee?pvs=4",
    projectImg: "assets/coding/portfolio.png",
  },
  {
    title: "Portfolio",
    describe: "포트폴리오 웹사이트",
    tags: ["React", "TypeScript", "Recoil", "styled-components"],
    Notion:
      "https://respected-honey-7eb.notion.site/c6b75d5e4dd340f8a237dc4e8f5c7eee?pvs=4",
    projectImg: "assets/coding/portfolio.png",
  },
  {
    title: "Guard Tips",
    describe: "안전에 관한 유용한 조언과 팁을 제공하는 서비스",
    tags: ["React", "TypeScript", "Router", "styled-components"],
    postComponent: [{ name: "[react + vercel] Proxy 설정", post: "ProxyPost" }],
    Demo: "https://guard-tips.vercel.app/",
    Github: "https://github.com/potenday-project/GuardTips",
    Notion:
      "https://shahn92.notion.site/GuardTips-2c4734253ee54304b954080d6cdae770?pvs=4",
    projectImg: "assets/coding/guardtips.png",
  },
  {
    title: "Name Sticker",
    describe: "네임스티커를 출력할 수 있는 웹사이트",
    tags: ["React", "TypeScript", "styled-components"],
    postComponent: [
      { name: "세션에 데이터 저장하기", post: "SessionPost" },
      { name: "갯수에 맞춰 스티커 생성하기", post: "MapRefact" },
    ],
    Demo: "https://name-sticker-i5fmwei8c-hamsterstudent.vercel.app/",
    Github: "https://github.com/HamsterStudent/name-sticker",
    projectImg: "assets/coding/sticker.png",
  },
  {
    title: "Designer Portfolio",
    describe: "반응형으로 제작한 모션디자이너 포트폴리오 웹사이트",
    tags: ["HTML", "CSS", "JavavScirpt"],

    Demo: "https://mika7174.github.io/Nomad.github.io/",
    Github: "https://github.com/mika7174/Nomad.github.io",
    projectImg: "assets/coding/mika_portfolio.png",
  },
  {
    title: "Pfizer",
    describe: "국내 화이자 메인 페이지 리디자인",
    tags: ["HTML", "SASS", "JavavScirpt"],

    Demo: "https://hamsterstudent.github.io/pfizer-web/",
    Github: "https://github.com/HamsterStudent/pfizer-web",
    projectImg: "assets/coding/pf.png",
  },
];

const Project = () => {
  const [image, setImage] = useState(`${projects[0].projectImg}`);
  const [tags, setTags] = useState<IData>();
  const [curname, setCurname] = useState("");
  const [curImg, setCurImg] = useState("assets/blank_project.png");

  const isDesktop = useMediaQuery({
    query: "(min-width : 700px) and (max-width :1920px)",
  });

  const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const {
      currentTarget: { children },
    } = e;
    const found = projects.find(
      (e) => e.title === children[0].children[0].innerHTML,
    );
    if (!found) return;
    setTags(found);
    setCurname(children[0].children[0].innerHTML);
    if (isDesktop) {
      setCurImg(image);
    } else {
      setImage(found.projectImg);
    }
  };
  return (
    <>
      <ContentsWrap isDesktop={isDesktop}>
        <CategoryWrap>
          <h2>Project</h2>
          <ProjectList>
            {projects.map((data) => {
              return (
                <li
                  key={data.title}
                  onMouseEnter={() => {
                    setImage(data.projectImg);
                  }}
                  onMouseLeave={() => {
                    setImage(curImg);
                  }}
                  onClick={(e) => {
                    onClick(e);
                  }}
                  className={curname === data.title ? "active" : undefined}
                >
                  <div>
                    <p>{data.title}</p>
                  </div>
                </li>
              );
            })}
          </ProjectList>
          <SNS>
            <li>Github</li>
            <li>hwanyamyu@gmail.com</li>
          </SNS>
        </CategoryWrap>

        {/* <InfoWrap>
          {tags ? (
            <div>
              <h2>{tags.title}</h2>
              <ul>
                <p>USING TOOLS</p>
                {tags?.tags.map((x) => {
                  return <li key={x}>▪︎ {x}</li>;
                })}
              </ul>
              <div>
                {tags?.Demo || tags?.Github || tags?.Notion ? (
                  <p>CODE</p>
                ) : null}
                {tags?.Demo ? (
                  <a href={tags.Demo} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                ) : null}

                {tags?.Github ? (
                  <a
                    href={tags.Github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                ) : null}

                {tags?.Notion ? (
                  <a
                    href={tags.Notion}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Notion
                  </a>
                ) : null}
              </div>
              <div>
                {tags.postComponent ? (
                  <LogList>
                    <p>LOG</p>
                    <ul>
                      {tags.postComponent.map((x, index) => {
                        return (
                          <li
                            key={x.post}
                            onClick={() => {
                              setIsDisplay((cur) => {
                                return { ...cur, [x.post]: true };
                              });
                            }}
                          >
                            ▪︎ {x.name}
                          </li>
                        );
                      })}
                    </ul>
                  </LogList>
                ) : null}
              </div>
            </div>
          ) : (
            <div>Select Project</div>
          )}
        </InfoWrap> */}
        <InfoWrap>
          <h2>About</h2>
          <p>
            안녕하세요.
            <br /> 책상을 보면 그 사람의 관심사나 개성을 짐작할 수 있듯, 저는
            어떤 하나의 공간을 꾸리는 것에 관심이 많습니다. 이 생각은 점차
            확장되고 구체화되어, 물리적 공간을 마련하는 것이 귀해진 이 시대에서
            사람들, 개인 혹은 기업이 자신의 공간을 가상에서 가질 수 있게 돕고
            싶다는 생각이 강해졌고, 그런 공간들을 웹사이트로써 만들어 보고
            있습니다.
          </p>
          <h2>Project Preview</h2>
          <div style={{ width: "49%", height: "150px", border: "solid 1px" }}>
            hamshu
          </div>
          <div style={{ width: "49%", height: "150px", border: "solid 1px" }}>
            thisbrainbitesyou
          </div>
          <div style={{ width: "100%", height: "150px", border: "solid 1px" }}>
            Portfolio
          </div>
          <div style={{ width: "100%", height: "150px", border: "solid 1px" }}>
            GuardTips
          </div>
          <div style={{ width: "49%", height: "150px", border: "solid 1px" }}>
            Nomad
          </div>
          <div style={{ width: "49%", height: "150px", border: "solid 1px" }}>
            Namesticker
          </div>
          <div style={{ width: "49%", height: "150px", border: "solid 1px" }}>
            Namesticker
          </div>
        </InfoWrap>
      </ContentsWrap>
      <Sticker
        name={"react"}
        width={100}
        defaultPosition={isDesktop ? { x: 350, y: 400 } : { x: 200, y: 400 }}
      />
    </>
  );
};

export default Project;
