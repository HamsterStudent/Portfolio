import React, { useEffect, useState } from "react";
import ModalWindow from "../Components/ModalWindow";
import Sticker from "../Components/Sticker";
import { collectSticker } from "../recoil/atom";
import { useRecoilState } from "recoil";
import useDisplaySticker from "../Hooks/useDisplaySticker";

const Blog = () => {
  const stickerName = "css";
  const { displaySticker, setDisplaySticker } = useDisplaySticker(stickerName);

  return (
    <ModalWindow
      width={400}
      windowName="Blog"
      defaultPosition={{ x: 300, y: 200 }}
    >
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
          defaultPosition={{ x: 300, y: 200 }}
          setSricker={setDisplaySticker}
        />
      ) : null}
    </ModalWindow>
  );
};

export default Blog;
