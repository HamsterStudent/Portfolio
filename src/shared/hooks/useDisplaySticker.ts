import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { IStickerTypes, collectSticker } from "../../recoil/atom";

export default function useDisplaySticker(stickerName: string) {
  const [stickers, setStickers] = useRecoilState(collectSticker); // 스티커 종류들을 담은 객체를 가지고 있습니다.
  const [displaySticker, setDisplaySticker] = useState(false); // 스티커의 마운트 여부를 결정짓습니다.

  // 스티커들을 전부 살펴보고, 획득한 스티커인지 아닌지 판별합니다.
  useEffect(() => {
    stickers.map((sticker) => {
      if (sticker.name === stickerName) {
        if (sticker.isGet !== true) {
          setDisplaySticker(true);
        } else {
          setDisplaySticker(false);
        }
      }
      return null;
    });
  }, [stickerName, stickers]);

  // 스티커 클릭 시 획득 여부를 기록하고, 스티커를 unmount합니다
  const getSticker = (iconName: string) => {
    setStickers(
      stickers.map((sticker: IStickerTypes) => {
        return sticker.name === iconName
          ? { ...sticker, isGet: true }
          : sticker;
      }),
    );
  };

  return { displaySticker, getSticker };
}
