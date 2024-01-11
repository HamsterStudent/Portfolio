import React, { useEffect, useState } from "react";
import ModalWindow from "../Components/ModalWindow";
import Sticker from "../Components/Sticker";
import Construction from "../Components/Construction";

const Dungeon = () => {
  const stickerName = "graphql";

  return (
    <ModalWindow
      width={"400px"}
      windowName="Dungeon"
      defaultPosition={{ x: 30, y: 50 }}
    >
      <Construction />
      <Sticker
        name={stickerName}
        width={150}
        defaultPosition={{ x: 300, y: 100 }}
      />
    </ModalWindow>
  );
};

export default Dungeon;
