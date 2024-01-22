import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Sticker from "../../shared/components/Sticker";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProjectDetail from "./detail/ProjectDetail";
import Overview from "./components/Overview";
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
  background-color: #b5c2ee4b;
`;

const CategoryWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: solid 1px;
`;

const blink = keyframes`
  0%{
    color: #84a7be;
  }
  50%{
    color: #000;

  }
  100%{
    color: #84a7be;

  }
`;

const ProjectList = styled.ul`
  .active {
    color: plum;
    animation: ${blink} 2.5s ease-in-out infinite;
  }
`;

const SNS = styled.ul``;

const Project = () => {
  const [tabName, setTabName] = useState("overview");
  const navigate = useNavigate();

  const handleTabClick = (tabName: string) => {
    setTabName(tabName);
  };

  const isDesktop = useMediaQuery({
    query: "(min-width : 700px) and (max-width :1920px)",
  });

  const tabList = [
    "overview",
    "guardtips",
    "thisbrainbitesyou",
    "hamshu",
    "portfolio",
    "bustago",
    "duckyworld",
    "nomad",
    "namesticker",
  ];

  return (
    <>
      <ContentsWrap isDesktop={isDesktop}>
        <CategoryWrap>
          <div>
            <h2>Project</h2>
            <p
              onClick={() => {
                navigate(`/`);
              }}
            >
              ← Back
            </p>
          </div>

          <ProjectList>
            {tabList.map((data) => {
              return (
                <li
                  key={data}
                  onClick={() => handleTabClick(data)}
                  className={tabName === data ? "active" : undefined}
                >
                  <div>
                    <p>{data}</p>
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

        {tabName === "overview" ? (
          <Overview tabList={tabList} handleTabClick={handleTabClick} />
        ) : (
          <ProjectDetail projectName={tabName} />
        )}
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
