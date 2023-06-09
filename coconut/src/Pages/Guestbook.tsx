import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import { Container, Bar } from "./pages.style";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import EmojiPicker, { EmojiStyle } from "emoji-picker-react";

import { highestZIndexAtom } from "../atom";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { dbService } from "../firebase";

function Guestbook() {
  let [highestZIndex, setHighestZIndex] = useRecoilState(highestZIndexAtom);
  let [zIndex, setZIndex] = useState(0);
  const [showEmojis, setShowEmojis] = useState(false);
  const [emojiIcon, setEmojiIcon] = useState("");
  const [memo, setMemo] = useState("");
  const [memos, setMemos] = useState<any>([]);
  useEffect(() => {
    const qu = query(
      collection(dbService, "memos"),
      orderBy("createdAt", "desc"),
    );
    onSnapshot(qu, (snapshot) => {
      const memoArr = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(memoArr);
      setMemos(memoArr);
    });
    setZIndex(highestZIndex);
  }, []);
  const clickFront = (e: React.MouseEvent<HTMLDivElement>) => {
    if (highestZIndex >= zIndex) {
      setZIndex(highestZIndex++);
      setHighestZIndex(highestZIndex++);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(dbService, "memos"), {
        memo,
        createdAt: serverTimestamp(),
        emojiIcon,
      });
      console.log("written :", docRef.id);
    } catch (error) {
      console.error("error : ", error);
    }
    setMemo("");
  };

  const onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setMemo(value);
  };

  return (
    <Draggable
      bounds="parent"
      handle=".bar"
      defaultPosition={{ x: 30, y: 150 }}
    >
      <Container windowWidth={`${400}px`} onClick={clickFront} zIndex={zIndex}>
        <Bar className="bar">bar</Bar>
        <button onClick={() => setShowEmojis(!showEmojis)}>{emojiIcon}</button>
        {showEmojis && (
          <div>
            <EmojiPicker
              height={400}
              width={300}
              onEmojiClick={(e) => {
                setEmojiIcon(e.emoji);
                setShowEmojis(false);
              }}
            />
          </div>
        )}
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={memo}
            onChange={onChange}
            placeholder="What's on your mind?"
            maxLength={120}
          />
          <input type="submit" value="memo" />
        </form>
        {memos.map((eachMemo: any) => (
          <div key={eachMemo.id}>
            <div>{eachMemo.createdAt.toDate().toISOString()}</div>
            <div>{eachMemo.emojiIcon}</div>
            <h4>{eachMemo.memo}</h4>
          </div>
        ))}
      </Container>
    </Draggable>
  );
}

export default Guestbook;
