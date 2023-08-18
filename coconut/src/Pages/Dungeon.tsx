import React, { useEffect, useState } from "react";
import ErrorIcon from "../Components/ErrorIcon";
import ModalWindow from "../Components/ModalWindow";

const Dungeon = () => {
  return (
    <ModalWindow
      width={400}
      windowName="Dungeon"
      defaultPosition={{ x: 30, y: 50 }}
    >
      <div>dungeon</div>
      <ErrorIcon name={"graphql"} />
    </ModalWindow>
  );
};

export default Dungeon;
