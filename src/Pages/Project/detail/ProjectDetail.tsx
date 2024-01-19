import React, { useEffect, useState } from "react";
import detailData from "./data/detailData.json";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.section`
  padding: 15px;
  h2 {
    font: 500 1.8rem "Source Sans 3";
  }
`;

interface IDetail {
  [key: string]: {
    name: string;
    isReleased: boolean;
    about: string;
    duration: string;
    duty: string[];
    tag: string[];
    links: string[];
    preview: string[];
    learned: string[];
    comment: string[];
  };
}
interface IArr {
  name: string;
  isReleased: boolean;
  about: string;
  duration: string;
  duty: string[];
  tag: string[];
  links: string[];
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
    <Wrap>
      {arr ? (
        <>
          <h2>{arr.name}</h2>
          <div>
            {arr.isReleased ? null : (
              <>
                <h2>🚧[Unreleased]🚧</h2>
                <p>This project has not been released yet.</p>
              </>
            )}
          </div>
          <div>
            <h2>About</h2>
            <p>{arr.about}</p>
            <p>{arr.duration}</p>
            <div>
              <h3>담당 업무</h3>
              <ul>
                {arr.duty.map((x) => {
                  return <li>{x}</li>;
                })}
              </ul>
            </div>
            <ul className="tag">
              {arr.tag.map((x) => {
                return <li>{x}</li>;
              })}
            </ul>
          </div>
          <div>
            <h2>Links</h2>
            <ul>
              {arr.links.map((x) => {
                return <li>{x}</li>;
              })}
            </ul>
          </div>
          <div>
            <h2>Preview</h2>
            {arr.preview.map((x) => {
              return <div>{x}</div>;
            })}
          </div>
          <div>
            <h2>Learned</h2>
            <ul>
              {arr.learned.map((x) => {
                return <li>{x}</li>;
              })}
            </ul>
          </div>
          <div>
            <h2>Personal comment</h2>
            <ul>
              {arr.comment.map((x) => {
                return <li>{x}</li>;
              })}
            </ul>
          </div>
        </>
      ) : null}
    </Wrap>
  );
}
