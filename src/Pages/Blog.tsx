import React, { useEffect, useState } from "react";
import ModalWindow from "../Components/ModalWindow";
import Sticker from "../Components/Sticker";
import { collectSticker } from "../recoil/atom";
import { useRecoilState } from "recoil";
import useDisplaySticker from "../Hooks/useDisplaySticker";
import styled from "styled-components";

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
  const { displaySticker, setDisplaySticker } = useDisplaySticker(stickerName);

  return (
    <ModalWindow
      width={"400px"}
      windowName="Blog"
      defaultPosition={{ x: 300, y: 200 }}
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
          {displaySticker ? (
            <Sticker
              name={stickerName}
              width={100}
              defaultPosition={{ x: 300, y: 20 }}
              setSricker={setDisplaySticker}
            />
          ) : null}
        </AddressWrap>
      </ContentsWrap>
    </ModalWindow>
  );
};

export default Blog;
