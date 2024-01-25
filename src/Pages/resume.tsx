import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import ModalWindow from "../shared/components/ModalWindow";
import Sticker from "../shared/components/Sticker";
import { useMediaQuery } from "react-responsive";

interface IDisplay {
  isDesktop: boolean;
}

const ContentWrap = styled.section<IDisplay>`
  height: ${(props) => (props.isDesktop ? "auto" : "auto")};
  overflow-y: ${(props) => (props.isDesktop ? "none" : "scroll")};
  /* width: 100%; */
  font-size: 14px;
  border: solid 1px;
  /* padding: 20px; */
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-shadow: #f0f0f042 1px 1px inset;
  h2 {
    font: 500 1.4rem "Source Sans 3";
    margin-bottom: 10px;
    color: ${(props) => props.theme.textColor};
  }
  p {
    margin: 10px 0;
    color: ${(props) => props.theme.textColor};
  }
  .infoWrap {
    margin: 0 auto;
    padding: 10px 0;
    text-align: center;
    a {
      padding: 2px 10px;
      border: solid 1px;
      color: ${(props) => props.theme.textColor};
      &:hover {
        color: ${(props) => props.theme.invertTextColor};
        transition: 0.2s ease-out;
      }
    }
  }
`;

const ImageWrap = styled.div<IDisplay>`
  width: 100%;
  height: ${(props) => (props.isDesktop ? "500px" : "auto")};
  position: relative;
  overflow-x: hidden;
  border: solid 1px;
  img {
    display: block;
    width: 100%;
    object-fit: contain;
    box-sizing: content-box;
  }
  .overlay {
    width: 100%;
    height: 100%;
    background: url("assets/dot.png");
    background-size: 2px 2px;
    position: absolute;
    top: 0;
    opacity: 0.5;
  }
`;

function Resume() {
  const stickerName = "javascript";

  const isDesktop = useMediaQuery({
    query: "(min-width : 700px) and (max-width :1920px)",
  });

  return (
    <ModalWindow
      width={isDesktop ? "850px" : "100%"}
      windowName="Resume"
      defaultPosition={{ x: 30, y: 50 }}
      isDesktop={isDesktop}
    >
      <ContentWrap isDesktop={isDesktop}>
        <ImageWrap isDesktop={isDesktop}>
          <img src="assets/resume.png" alt="" />
        </ImageWrap>
        <div className="infoWrap">
          <h2>전체 정보를 확인하시려면 내려받아 주시기를 바랍니다.</h2>
          <a href="assets/resume.pdf" download="FE_엄진주_이력서">
            Download
          </a>
        </div>
      </ContentWrap>
      <Sticker
        name={stickerName}
        width={100}
        defaultPosition={{ x: 350, y: 120 }}
      />
    </ModalWindow>
  );
}

export default Resume;
