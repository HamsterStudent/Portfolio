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
const ContentsWrap = styled.section<IDisplay>`
  height: calc(100% - 20px);
  max-width: 1200px;
  padding: 15px;
  margin: 10px auto;
  padding-top: ${(props) => (props.isDesktop ? "10px" : "30px")};
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

const MobileCategory = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  border: solid 1px;
  z-index: 10;
  background-color: #ffffff92;
  h2 {
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 30px;
  }
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
const MobileProjectList = styled(ProjectList)`
  width: 100%;
  border-top: solid 1px;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
  }
`;

const SNS = styled.ul``;

const Project = () => {
  const [tabName, setTabName] = useState("overview");
  const [tabOpen, setTabOpen] = useState(false);
  const navigate = useNavigate();

  const handleTabClick = (tabName: string) => {
    setTabName(tabName);
  };

  const isDesktop = useMediaQuery({
    query: "(min-width : 600px) and (max-width :1920px)",
  });

  const tabList = [
    "overview",
    "guardtips",
    "thisbrainbitesyou",
    "hamshu",
    "portfolio",
    // "bustago",
    "duckyworld",
    "nomad",
    "namesticker",
  ];

  return (
    <>
      <ContentsWrap isDesktop={isDesktop}>
        {isDesktop ? (
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
        ) : (
          <MobileCategory
            onClick={() => {
              setTabOpen((prev) => !prev);
            }}
          >
            <h2>{tabName}</h2>
            {tabOpen ? (
              <MobileProjectList>
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
              </MobileProjectList>
            ) : null}
          </MobileCategory>
        )}

        {tabName === "overview" ? (
          <Overview tabList={tabList} handleTabClick={handleTabClick} />
        ) : (
          <ProjectDetail projectName={tabName} />
        )}
      </ContentsWrap>
      <Sticker
        name={"react"}
        width={100}
        defaultPosition={isDesktop ? { x: 600, y: 100 } : { x: 200, y: 400 }}
      />
    </>
  );
};

export default Project;
