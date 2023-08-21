import React, { useEffect, useState } from "react";
import ModalWindow from "../Components/ModalWindow";
import Sticker from "../Components/Sticker";
import useDisplaySticker from "../Hooks/useDisplaySticker";

const Dungeon = () => {
  const stickerName = "graphql";
  const { displaySticker, setDisplaySticker } = useDisplaySticker(stickerName);

  return (
    <ModalWindow
      width={400}
      windowName="Dungeon"
      defaultPosition={{ x: 30, y: 50 }}
    >
      <div>dungeon</div>
      {displaySticker ? (
        <Sticker name={stickerName} setSricker={setDisplaySticker} />
      ) : null}
    </ModalWindow>
  );
};

export default Dungeon;
