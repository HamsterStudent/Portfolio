import React, { useEffect, useState } from "react";
import ModalWindow from "../Components/ModalWindow";
import Sticker from "../Components/Sticker";
import useDisplaySticker from "../Hooks/useDisplaySticker";
import Construction from "../Components/Construction";

const Dungeon = () => {
  const stickerName = "graphql";
  const { displaySticker, setDisplaySticker } = useDisplaySticker(stickerName);

  return (
    <ModalWindow
      width={400}
      windowName="Dungeon"
      defaultPosition={{ x: 30, y: 50 }}
    >
      <Construction />
      {displaySticker ? (
        <Sticker
          name={stickerName}
          width={150}
          defaultPosition={{ x: 300, y: 100 }}
          setSricker={setDisplaySticker}
        />
      ) : null}
    </ModalWindow>
  );
};

export default Dungeon;
