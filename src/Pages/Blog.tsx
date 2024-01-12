import React, { useEffect, useState } from "react";
import ModalWindow from "../shared/components/ModalWindow";
import Sticker from "../shared/components/Sticker";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const ContentsWrap = styled.section`
  padding: 5px;
  a {
    :hover {
      color: ${(props) => props.theme.invertTextColor};
    }
  }
`;

const AddressWrap = styled.div`
  border: solid 1px;
  padding: 5px;
`;

const Blog = () => {
  const stickerName = "css";
  const isDesktop = useMediaQuery({
    query: "(min-width : 700px) and (max-width :1920px)",
  });
  return (
    <ModalWindow
      width={"400px"}
      windowName="Blog"
      defaultPosition={{ x: 300, y: 200 }}
      isDesktop={isDesktop}
    >
      <ContentsWrap>
        <AddressWrap>
          <div>
            <span>Github : </span>
            <a
              href="https://github.com/HamsterStudent"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/HamsterStudent
            </a>
          </div>
          <div>
            <span>Blog : </span>
            <a
              href="https://hamsterstudent.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://hamsterstudent.github.io/
            </a>
          </div>
          <Sticker
            name={stickerName}
            width={100}
            defaultPosition={{ x: 300, y: 20 }}
          />
        </AddressWrap>
      </ContentsWrap>
    </ModalWindow>
  );
};

export default Blog;
