import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { collectSticker } from "../recoil/atom";

const useDisplaySticker = (stickerName: string) => {
  const stickers = useRecoilValue(collectSticker);
  const [displaySticker, setDisplaySticker] = useState(false);

  useEffect(() => {
    stickers.map((x) => {
      if (x.name === stickerName) {
        if (x.isGet === true) {
          setDisplaySticker(false);
        } else {
          setDisplaySticker(true);
        }
      }
    });
  }, []);

  return { displaySticker, setDisplaySticker };
};

export default useDisplaySticker;
