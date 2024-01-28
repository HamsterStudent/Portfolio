import React, { useEffect, useState } from "react";
import detailData from "./data/detailData.json";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 15px;
  width: 100%;
  white-space: pre-wrap;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: white transparent;
  scrollbar-gutter: auto;
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
  h1 {
    font: 600 2.4rem "Source Sans 3";
  }
  h2 {
    font: 400 1.8rem "Source Sans 3";
    padding: 1px 5px;
    /* background-color: #ffffff40; */
    margin-bottom: 10px;
    /* color: #fff; */
  }
  h3 {
    font: 500 1.4rem "Source Sans 3";
  }
  section {
    margin-bottom: 10px;
    /* padding: 10px; */
    /* background-color: #ffffff4c; */
  }
  .bulletedList {
    margin-left: 15px;
    li {
      position: relative;
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }
      &::before {
        content: "";
        width: 5px;
        height: 5px;
        background-color: #252525;
        position: absolute;
        top: 5px;
        left: -10px;
      }
    }
  }
`;

const IsReleasedWrap = styled.section`
  width: 100%;
  border: solid 1px;
  padding: 5px;
  margin-bottom: 15px;
`;
const Title = styled.div`
  margin-bottom: 15px;
  p {
    font: 400 1.4rem "Source Sans 3";
  }
`;
const About = styled.section`
  width: 100%;
  /* border: solid 1px; */
  word-break: keep-all;
  h2 {
  }
  .desc {
    margin: 10px 0 20px 0;
    line-height: 2rem;
  }
  .tagList {
    margin: 20px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    li {
      padding: 0.7px 10px;
      border: solid 1px;
      :hover {
        color: #fff;
        transition: 0.2s ease-out;
      }
    }
  }
`;

const Links = styled.section`
  width: 100%;
  ul {
    li {
      a {
        display: flex;
        gap: 10px;
      }
      .link {
        max-width: 75%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: break-all;
        &:hover {
          color: #fff;
          transition: 0.2s ease-out;
        }
      }
    }
  }
`;

const Preview = styled.section``;

const Learned = styled.section`
  width: 100%;
`;

const Personal = styled.section`
  width: 100%;
`;

const ImgWrap = styled.div`
  width: 100%;
  border: solid 1px;
  img {
    width: 100%;
    display: block;
    object-fit: contain;
  }
`;

interface IDetail {
  [key: string]: {
    name: string;
    isReleased: boolean;
    keyword: string;
    summary: string;
    about: string;
    duration: string;
    duty: string[];
    tag: string[];
    links: {};
    preview: string[];
    learned: string[];
    comment: string[];
  };
}
interface IArr {
  name: string;
  isReleased: boolean;
  keyword: string;
  summary: string;
  about: string;
  duration: string;
  duty: string[];
  tag: string[];
  links: { [key: string]: string };
  preview: string[];
  learned: string[];
  comment: string[];
}

export default function ProjectDetail({
  projectName,
}: {
  projectName: string;
}) {
  const [arr, setArr] = useState<IArr>();

  useEffect(() => {
    const arrData: IDetail = detailData;

    setArr(arrData[projectName]);
  }, [projectName]);

  return (
    <Wrap scrollbar-gutter="auto">
      {arr ? (
        <>
          {arr.isReleased ? null : (
            <IsReleasedWrap>
              <h2>🚧[Unreleased]🚧</h2>
              <p>This project has not been released yet.</p>
            </IsReleasedWrap>
          )}
          <Title>
            <p>{arr.keyword}</p>
            <h1>{arr.name}</h1>
            <p>{arr.summary}</p>
            <p>{arr.duration}</p>
          </Title>

          <About>
            <h2>About</h2>
            <p className="desc">{arr.about}</p>
            <div>
              {/* <h3>담당 업무</h3> */}
              <ul className="bulletedList">
                {arr.duty.map((x) => {
                  return <li>{x}</li>;
                })}
              </ul>
            </div>
            <ul className="tagList">
              {arr.tag.map((x) => {
                return <li>{x}</li>;
              })}
            </ul>
          </About>
          <Links>
            <h2>Links</h2>
            <ul>
              {/* {arr.links.map((x) => {
                return (
                  <li>
                    <a href={x} target="_blank" rel="noreferrer">
                      {x}
                    </a>
                  </li>
                );
              })} */}
              {Object.keys(arr.links).map((x) => {
                return (
                  <li>
                    <a
                      href={`${arr.links[x]}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p>{x}</p>
                      <p className="link">{arr.links[x]}</p>
                    </a>
                  </li>
                );
              })}
            </ul>
          </Links>
          <Learned>
            <h2>Learned</h2>
            <ul className="bulletedList">
              {arr.learned.map((x) => {
                return <li>{x}</li>;
              })}
            </ul>
          </Learned>
          <Preview>
            <h2>Preview</h2>
            {arr.preview.map((x) => {
              return (
                <ImgWrap>
                  <img src={x} alt="" />
                </ImgWrap>
              );
            })}
          </Preview>

          <Personal>
            <h2>Personal comment</h2>
            <ul>
              {arr.comment.map((x) => {
                return <li>{x}</li>;
              })}
            </ul>
          </Personal>
        </>
      ) : null}
    </Wrap>
  );
}
